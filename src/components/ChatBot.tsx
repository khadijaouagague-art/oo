import { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

interface ChatBotProps {
  language: 'en' | 'fr';
}

const responses = {
  en: {
    greeting: ['Hi! How can I help you today?', 'Hello! What would you like to know?'],
    pricing: 'Our LLC formation service costs $499 one-time fee with no hidden charges.',
    timeline: 'We typically complete LLC formation within 48 hours of receiving your application.',
    states: 'We can form LLCs in any US state. Popular choices are Delaware, Nevada, Texas, and Florida.',
    international: 'Yes! We serve entrepreneurs from over 150 countries worldwide.',
    default: 'I can help with pricing, timeline, which states we serve, and more. What would you like to know?',
  },
  fr: {
    greeting: ['Bonjour! Comment puis-je vous aider?', 'Salut! Qu\'aimeriez-vous savoir?'],
    pricing: 'Notre service de formation LLC coûte 499$ de frais uniques sans frais cachés.',
    timeline: 'Nous complétons généralement la formation LLC dans les 48 heures suivant la réception de votre candidature.',
    states: 'Nous pouvons former des LLC dans n\'importe quel État américain. Les choix populaires sont le Delaware, le Nevada, le Texas et la Floride.',
    international: 'Oui! Nous servons des entrepreneurs de plus de 150 pays dans le monde.',
    default: 'Je peux vous aider avec les tarifs, les délais, les États que nous desservons, et bien plus. Que voulez-vous savoir?',
  },
};

export default function ChatBot({ language }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const getResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    const dict = responses[language];

    if (msg.includes('price') || msg.includes('cost') || msg.includes('tarif') || msg.includes('prix')) {
      return dict.pricing;
    }
    if (msg.includes('time') || msg.includes('how long') || msg.includes('combien') || msg.includes('délai')) {
      return dict.timeline;
    }
    if (msg.includes('state') || msg.includes('which state') || msg.includes('état') || msg.includes('états')) {
      return dict.states;
    }
    if (msg.includes('international') || msg.includes('outside') || msg.includes('pays') || msg.includes('mondial')) {
      return dict.international;
    }
    return dict.default;
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
    };

    setMessages([...messages, userMessage]);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(input),
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 300);

    setInput('');
  };

  const handleOpen = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      const greeting: Message = {
        id: Date.now().toString(),
        text: responses[language].greeting[Math.floor(Math.random() * responses[language].greeting.length)],
        sender: 'bot',
      };
      setMessages([greeting]);
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 active:scale-95 z-40"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl flex flex-col z-40 animate-slide-up">
          <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <h3 className="font-semibold">
              {language === 'en' ? 'Support Chat' : 'Chat d\'assistance'}
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-700 p-1 rounded transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 h-80 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-900 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t p-4 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={language === 'en' ? 'Type a message...' : 'Tapez un message...'}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
