export default function MessageBubble({ message, botName }) {
  const isUser = message.role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className="max-w-[85%] sm:max-w-[70%]">
        <div className={`mb-1 text-xs text-gray-500 ${isUser ? 'text-right' : ''}`}>
          {isUser ? 'You' : botName || 'Assistant'}
        </div>
        <div
          className={`whitespace-pre-wrap rounded-2xl px-4 py-2 text-sm leading-relaxed ${
            isUser
              ? 'rounded-br-sm bg-blue-600 text-white'
              : 'rounded-bl-sm bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100'
          }`}
        >
          {message.content}
        </div>
      </div>
    </div>
  );
}