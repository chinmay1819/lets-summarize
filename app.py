import logging.config
import os
from dotenv import load_dotenv
load_dotenv()
import google.generativeai as genai
from youtube_transcript_api import YouTubeTranscriptApi
from flask_cors import CORS
from flask import Flask,request, send_file
from controllers.summary_controller import summary_bp
import logging

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
logging.basicConfig(level=logging.INFO)

app = Flask(__name__)
CORS(app)

app.register_blueprint(summary_bp,url_prefix='/api')


# Start the Flask app if this script is run directly
if __name__ == "__main__":
    app.run(debug=True) 