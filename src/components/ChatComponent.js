import React, { useState, useEffect, useRef } from 'react';
import { CiPaperplane } from "react-icons/ci";
import { SiChatbot } from "react-icons/si";
import { FaTimes } from 'react-icons/fa';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isBotTyping]);

  useEffect(() => {
    if (isChatOpen) {
      setMessages([{ text: "Bonjour, je suis ATPPT21Bot, comment puis-je vous aider ?", isUser: false }]);
    }
  }, [isChatOpen]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { text: input.trim(), isUser: true };
    setIsBotTyping(true);
    setMessages(messages => [...messages, userMessage]);

    try {
      const response = await fetch('http://localhost:5000/getresponse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input.trim() }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const { response: botResponse } = await response.json();  // Corrected destructuring key to match expected JSON
      setMessages(messages => [...messages, { text: botResponse, isUser: false }]);
    } catch (error) {
      console.error("Failed to fetch bot response:", error);
      // Handle the error state appropriately
    } finally {
      setIsBotTyping(false);
      setInput('');  // Reset input after handling the message
    }
};

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const TypingIndicator = () => (
    <div className="flex justify-start items-center ml-2 mb-2">
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse mx-1"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
    </div>
  );

  return (
    <>
      {isChatOpen && (
        <div className="fixed bottom-5 right-5 bg-white rounded-lg shadow-lg w-[350px] h-[500px] flex flex-col">
        <div className="p-3 bg-orange-400 text-white flex justify-between items-center rounded-t-lg">
            <h2 className="text-lg">Support Chat</h2>
            <button onClick={toggleChat} ><FaTimes /></button>
          </div>
          <div className="flex-grow overflow-auto p-3 space-y-2">
          {messages.map((message, index) => (
              <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-2 rounded-lg max-w-[70%] ${message.isUser ? 'bg-orange-300' : 'bg-gray-300'}`}>
                  <strong>{message.isUser ? 'Vous: ' : 'Bot: '}</strong>
                  {message.text}
                </div>
              </div>
            ))}
            {isBotTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 flex bg-gray-50">
          <input
          className="flex-grow p-2 rounded-l-lg border-2 focus:ring-2 focus:ring-orange-300 focus:outline-none"
          style={{height: '40px'}}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Écrivez un message..."
          onKeyPress={(event) => { if (event.key === 'Enter') sendMessage(); }}
        />
        <button
  className="bg-orange-600 text-white p-2 rounded-r-lg hover:bg-orange-700 transition duration-150 ease-in-out"
  style={{height: '41.5px', boxSizing: 'border-box'}}
  onClick={sendMessage} // Ajoutez cet appel de fonction ici
>
  <CiPaperplane className="text-xl" />
</button>


</div>
         </div>
      )}
      {!isChatOpen && (
        <button className="fixed bottom-20 right-5 bg-orange-500 text-white p-3 rounded-full shadow-lg" onClick={toggleChat}>
          <SiChatbot size={50} />
        </button>
      )}
    </>
  );
};

export default ChatComponent;
