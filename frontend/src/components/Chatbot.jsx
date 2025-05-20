import React, { useState } from 'react';
import axios from 'axios';
import { Send, Bot, BookOpen } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';

const Chatbot = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!userInput.trim()) return;

    // Add user message to conversation
    const newConversation = [...conversation, { sender: 'user', text: userInput }];
    setConversation(newConversation);
    setUserInput('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/ask', {
        question: userInput
      });

      const botReply = response.data.answer || 'No response received.';
      setConversation([...newConversation, { sender: 'bot', text: botReply }]);
    } catch (err) {
      setConversation([
        ...newConversation,
        { sender: 'bot', text: 'Error connecting to chatbot. Please try again later.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
            <BookOpen size={24} className="me-2" />
            EduAssist
          </a>
          <button className="btn btn-outline-light btn-sm d-none d-md-block" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </nav>

      <div className="container py-5 flex-grow-1" style={{ maxWidth: '700px' }}>
        <h3 className="text-center mb-4 d-flex align-items-center justify-content-center">
          <Bot className="me-2" /> Learning Buddy Chatbot
        </h3>
        
        <div className="border rounded p-3 mb-3 bg-light" style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {conversation.length === 0 && (
            <p className="text-muted text-center">Ask me anything related to your learning journey.</p>
          )}
          {conversation.map((msg, idx) => (
            <div key={idx} className={`mb-2 ${msg.sender === 'user' ? 'text-end' : 'text-start'}`}>
              <div
                className={`d-inline-block px-3 py-2 rounded ${
                  msg.sender === 'user' ? 'bg-primary text-white' : 'bg-white border'
                }`}
              >
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
            </div>
          ))}
          {loading && (
            <div className="text-start">
              <div className="d-inline-block px-3 py-2 bg-white border rounded">
                Typing...
              </div>
            </div>
          )}
        </div>

        <div className="input-group">
          <textarea
            className="form-control"
            placeholder="Type your message here..."
            rows="2"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="btn btn-primary" onClick={handleSend} disabled={loading}>
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
