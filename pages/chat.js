import { useState } from 'react';
import ChatWindow from '@/components/ChatWindow';
import { api } from '@/services/api';

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  const send = async (text) => {
    setError('');
    setMessages((m) => [...m, { role: 'user', content: text }]);
    try {
      const data = await api('/chat/ask', { method: 'POST', body: { message: text } });
      setMessages((m) => [...m, { role: 'assistant', content: data.reply }]);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="mx-auto flex h-screen max-w-3xl flex-col">
      <h1 className="border-b p-4 font-semibold">AI Chatbot</h1>
      <ChatWindow messages={messages} error={error} botName="Assistant" onSend={send} />
    </div>
  );
}