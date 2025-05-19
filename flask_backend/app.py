from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import os
import google.generativeai as genai
import speech_recognition as sr
from gtts import gTTS
from pydub import AudioSegment
import uuid

GOOGLE_API_KEY=""

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Load Gemini API
genai.configure(api_key=os.getenv(GOOGLE_API_KEY))
model = genai.GenerativeModel("gemini-pro")

# Ask Gemini chatbot
@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    user_input = data.get("question", "")
    if not user_input:
        return jsonify({"error": "Empty question"}), 400

    response = model.generate_content(user_input)
    return jsonify({"answer": response.text})

# Health check
@app.route("/")
def home():
    return "Learning Buddy Flask API is running!"

if __name__ == "__main__":
    app.run(debug=True)
