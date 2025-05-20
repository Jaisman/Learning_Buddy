from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import os
import google.generativeai as genai
from collections import deque
from gtts import gTTS
import tempfile

GOOGLE_API_KEY="AIzaSyCh-xyT3YKcdxc8tRVChpOyEhY-ag8q8uk"

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Load Gemini API
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")

# Store conversation history with a maximum of 5 exchanges
conversation_history = deque(maxlen=5)

student_info = ["Shubham Chauhan", "10th grade" , '16 years old', "male",'CBSE board']

list_of_subjects = [
    "Maths: grade 7/10, weakness in algebra",
    "Physics: grade 8/10, weakness in mechanics",
    "Chemistry: grade 6/10, weakness in organic chemistry",
    "Biology: grade 9/10, weakness in genetics",
    "English: grade 7/10, weakness in grammar",
    "History: grade 8/10, weakness in world history",
    "Geography: grade 7/10, weakness in map reading",
    "Computer Science: grade 9/10, weakness in programming",
]

# Ask Gemini chatbot
@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    user_input = data.get("question", "")
    if not user_input:
        return jsonify({"error": "Empty question"}), 400
    
    # Add the new user question to conversation history
    conversation_history.append({"role": "user", "content": user_input})
    
    # Build conversation context
    conversation_context = "\n".join([
        f"{'User' if msg['role'] == 'user' else 'Assistant'}: {msg['content']}"
        for msg in conversation_history
    ])
        
    prompt = f"""You are a learning buddy chatbot helping a student {student_info} with their studies. 
Here is the student's current performance profile:
{list_of_subjects}

Previous conversation context:
{conversation_context}

When answering:
1. Always reference the student and his/her weaknesses and grades when relevant
2. Provide specific advice based on their current performance
3. Offer concrete study tips targeting their weak areas
4. Keep explanations clear and student-friendly
5. Maintain context from previous messages when relevant

Current question: {user_input}"""
    
    response = model.generate_content(prompt)
    
    # Add the bot's response to conversation history
    conversation_history.append({"role": "assistant", "content": response.text})
    
    return jsonify({"answer": response.text})

# Health check
@app.route("/")
def home():
    return "Learning Buddy Flask API is running!"

# Text to Speech endpoint
@app.route("/text-to-speech", methods=["POST"])
def text_to_speech():
    data = request.json
    text = data.get("text", "")
    if not text:
        return jsonify({"error": "Empty text"}), 400
    
    # Create a temporary file to store the audio
    temp_file = tempfile.NamedTemporaryFile(delete=False, suffix='.mp3')
    temp_filename = temp_file.name
    temp_file.close()
    
    # Generate speech from text
    tts = gTTS(text=text, lang='en')
    tts.save(temp_filename)
    
    # Send the audio file
    return send_file(
        temp_filename,
        mimetype='audio/mpeg',
        as_attachment=True,
        download_name='speech.mp3'
    )

if __name__ == "__main__":
    app.run(debug=True)
