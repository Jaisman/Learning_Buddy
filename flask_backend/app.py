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
        
    prompt = f"""You are a learning buddy chatbot helping a student with their studies. 
Here is the student's current performance profile:
{list_of_subjects}

When answering:
1. Always reference the student's weaknesses and grades when relevant
2. Provide specific advice based on their current performance
3. Offer concrete study tips targeting their weak areas
4. Keep explanations clear and student-friendly

Current question: {user_input}"""
    
    response = model.generate_content(prompt)
    return jsonify({"answer": response.text})

# Health check
@app.route("/")
def home():
    return "Learning Buddy Flask API is running!"

if __name__ == "__main__":
    app.run(debug=True)
