from fastapi import FastAPI,Response,status
from typing import List
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from HiteshchatBot_gemini import generate_reply
from fastapi.responses import JSONResponse
app=FastAPI()
origins = [
    "http://localhost:3000",  
    "http://127.0.0.1:3000",
    "https://flask-to-do-kcw6.onrender.com/",   
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],     
    allow_headers=["*"],     
)

class PromptRequest(BaseModel):
    prompt:str

@app.post('/')
def getPromptAnswer(data:PromptRequest):
    reply = generate_reply(data.prompt)
    payload = {
        "statusCode": 200,
        "data": {
            "reply":reply
        },
        "message": "User Logged in Successfully"
    }
    return JSONResponse(content=payload,status_code=status.HTTP_200_OK)