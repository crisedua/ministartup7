import React, { useState } from 'react';

// Llama a la API real de OpenAI (GPT-4o-mini) usando fetch.
// Asegúrate de tener REACT_APP_OPENAI_API_KEY en tu .env
// y opcionalmente REACT_APP_OPENAI_API_BASE_URL si usas un endpoint personalizado.
async function validateWithGPT(messages: {role: string, content: string}[]) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const apiBase = import.meta.env.VITE_OPENAI_API_BASE_URL || 'https://api.openai.com/v1';
  if (!apiKey) {
    return { content: 'Falta la clave API de OpenAI. Añádela en tu .env como REACT_APP_OPENAI_API_KEY.' };
  }
  try {
    const res = await fetch(`${apiBase}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages,
        max_tokens: 350,
        temperature: 0.3
      })
    });
    if (!res.ok) {
      throw new Error('Error en la API: ' + res.statusText);
    }
    const data = await res.json();
    return { content: data.choices[0].message.content };
  } catch (err) {
    return { content: 'Error al conectar con OpenAI: ' + (err as Error).message };
  }
}

const SYSTEM_PROMPT = `Eres **ValidateBot**, un validador de ideas de startup entrenado en el marco Million Dollar Weekend de Noah Kagan (Dolor ➜ Promesa ➜ Prueba).

🟢 **Objetivo**
Guía al usuario en una validación rápida de ideas. Recoge datos clave, desafía supuestos débiles y recomienda el siguiente paso concreto.

🟢 **Flujo de conversación**
1. **Punto de dolor**  
   - Pregunta: “En una frase clara, ¿qué problema doloroso quieres resolver y para quién?”  
   - Si la respuesta > 30 palabras, pídele que la acorte.

2. **Promesa (Solución)**  
   - Pregunta: “Describe tu solución propuesta en ≤ 2 frases.”  
   - Profundiza: “¿Por qué los clientes elegirán esto sobre las opciones actuales?”

3. **Prueba (Estado de validación)**  
   - Haz las siguientes preguntas sí/no, una a la vez.  
     a. “¿Has hablado con al menos 5 clientes objetivo?”  
     b. “¿Alguno ha ofrecido dinero, pre-orden o compromiso claro?”  
     c. “¿Has probado precios con números reales?”  
   - Tras cada “no”, pregunta “¿Qué te lo impide?” y recoge el obstáculo.

4. **Evaluación y próximo paso**  
   - Resume fortalezas y brechas en ≤ 100 palabras.  
   - Recomienda UN paso accionable del Million Dollar Weekend (ej: prueba de landing page 24h, 5 entrevistas de problema, pre-venta).

🟢 **Tono y formato**
- Cercano, de coach, lenguaje sencillo (sin jerga).
- Usa preguntas numeradas; resalta en **negrita** las respuestas del usuario en el resumen.
- Cada mensaje del bot ≤ 120 palabras.
- Termina cada intercambio con una pregunta para que el usuario siga avanzando.
Todo debe ser en español.`;

const ValidacionPage = () => {
  const [messages, setMessages] = useState([
    { role: 'system', content: SYSTEM_PROMPT }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    try {
      const res = await validateWithGPT(newMessages);
      setMessages([...newMessages, { role: 'assistant', content: res.content }]);
    } catch (err) {
      setMessages([...newMessages, { role: 'assistant', content: 'Error al conectar con el validador.' }]);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Validación de Ideas <span role="img" aria-label="robot">🤖</span></h1>
        <div className="h-96 overflow-y-auto border rounded-lg p-4 mb-4 bg-gray-100">
          {messages.filter(m => m.role !== 'system').map((msg, i) => (
            <div key={i} className={msg.role === 'user' ? 'text-right mb-2' : 'text-left mb-2'}>
              <span className={msg.role === 'user' ? 'inline-block bg-blue-200 text-blue-900 rounded-lg px-3 py-2' : 'inline-block bg-green-200 text-green-900 rounded-lg px-3 py-2'}>
                {msg.content}
              </span>
            </div>
          ))}
          {loading && <div className="text-left mb-2"><span className="inline-block bg-green-200 text-green-900 rounded-lg px-3 py-2">Validando...</span></div>}
        </div>
        <form onSubmit={handleSend} className="flex gap-2">
          <input
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring"
            placeholder="Escribe tu respuesta..."
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={loading}
            maxLength={300}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            disabled={loading}
          >Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ValidacionPage;
