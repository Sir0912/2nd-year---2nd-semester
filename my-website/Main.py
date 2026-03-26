from flask import Flask, render_template
import requests

app = Flask(__name__)

@app.route("/pp", methods=["GET"])
def landing():
    # Fetch dog breeds dynamically
    url_endpoint = "https://dog.ceo/api/breeds/list/all"
    response = requests.get(url_endpoint)
    data = response.json()

    stud = "Paolo"
    breeds = data.get("message", {})  

    return render_template("land.html", stud=stud, breeds=breeds)

if __name__ == "__main__":
    app.run(debug=True)
