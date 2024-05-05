FROM python:3.11.8-slim

WORKDIR /python-docker

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

#flask --app sample.py run
CMD [ "flask", "--app" , "sample.py", "run", "--host=0.0.0.0"]
