from flask import Flask, render_template, jsonify, request
from chat import get_response

app = Flask(__name__)

@app.route("/", methods=["GET"])
def index_get():
    return render_template("base.html")

@app.route("/predict", methods=["POST"])
def predict():
    text = request.get_json()["message"]
    response = get_response(text)
    return jsonify({"answer": response})

if __name__ == "__main__":
    app.run(debug=False)
