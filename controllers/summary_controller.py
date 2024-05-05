from flask import Blueprint, jsonify
from flask_cors import CORS
from flask import Flask,request, send_file
from utils.custom_response import CustomResponse
from view.summary_view import Summary
import logging

from utils.custom_error import CustomError
logging.basicConfig(level=logging.INFO)

summary_bp = Blueprint('view_1',__name__)

@summary_bp.route('/summary',methods=['POST'])
async def get_summary():
    try:
        url = request.form['url']
        result = await Summary.get_summary_with_link(url=url)
        response = CustomResponse(status_code=201,message="Here is the summary",result=result)
        return jsonify(response.__dict__),201
    except ValueError as ve:
        logging.error("Validation error: %s", ve)
        error = CustomError(
            status_code=400,
            message="Invalid data",
            error=str(ve)
        )
        return jsonify(error.__dict__), 400
    except Exception as e:
        logging.error(e)
        error_message ="An error occurred while generating summary"
        error = CustomError(status_code=400,message=error_message,error=str(e))
        return jsonify(error.__dict__),400