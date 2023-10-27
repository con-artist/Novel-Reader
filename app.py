from flask import Flask

from routes import router


app = Flask("novel_reader")
app.register_blueprint(router)

@app.route("/")
def home():
    return "<p> This is a novel reader app</p>"