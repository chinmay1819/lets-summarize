import logging
logging.basicConfig(level=logging.INFO)
import os
import json
import google.generativeai as genai
from youtube_transcript_api import YouTubeTranscriptApi
from dotenv import load_dotenv
load_dotenv()

class Summary:
    
    # ---------------Getting transcript from youtube video------------------------
    @staticmethod
    def extract_transcript_details(youtube_video_url):
        try:
            video_id = youtube_video_url.split("=")[1]
            transcript = ""
            transcript_text = YouTubeTranscriptApi.get_transcript(video_id=video_id)
            for i in transcript_text:
                transcript+=" "+i["text"]
            
            return transcript
        
        except ValueError as ve:
            logging.error(ve)
            raise ve
        except Exception as e:
            logging.error(e)
            raise e        

    #--------------- Generate summary for the video -----------------------------
    @staticmethod
    def generate_gemini_content(transcript_text):
        try:
            prompt ="""
            You are a youtube video summerizer. You will be taking the transcript text and summarizing the entire video and providing the important summary in points 
            within 250 words. And strictly make the summary as pointwise and it should look like notes of that video. The transcript text will be appended here:
            """
            model = genai.GenerativeModel("gemini-pro")
            response = model.generate_content(prompt+transcript_text)
            return response.text
        except ValueError as ve:
            logging.error(ve)
            raise ve
        except Exception as e:
            logging.error(e)
            raise e
    
    
    
    
    @staticmethod
    async def get_summary_with_link(url):
        try:
            print("url =",url)
            genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
            transcript = Summary.extract_transcript_details(youtube_video_url=url)
            summary = Summary.generate_gemini_content(transcript_text=transcript)
            return summary
        except ValueError as ve:
            logging.error(ve)
            raise ve
        except Exception as e:
            logging.error(e)
            raise e