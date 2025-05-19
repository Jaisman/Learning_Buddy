from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import os
import google.generativeai as genai

GOOGLE_API_KEY="AIzaSyCh-xyT3YKcdxc8tRVChpOyEhY-ag8q8uk"

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Load Gemini API
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")


# Ask Gemini chatbot
@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    user_input = data.get("question", "")
    if not user_input:
        return jsonify({"error": "Empty question"}), 400
    prompt = f"You are learning buddy chatbot to a student. So answer the question to the student. The question is here: {user_input}"
    response = model.generate_content(user_input)
    return jsonify({"answer": response.text})

# Health check
@app.route("/")
def home():
    return "Learning Buddy Flask API is running!"

if __name__ == "__main__":
    app.run(debug=True)
