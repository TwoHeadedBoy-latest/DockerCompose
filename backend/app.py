from flask import Flask,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/getMyInfo')
def getMyInfo():
    value = {
        "name": "Ricardo",
        "lastname": "Miron Carmona",
        "socialMedia":
        {
            "facebookUser": "In.The.Aeroplane.Over.The.Seaa",
            "linkedin": "ricardo-miron-carmona",
            "githubUser": "TwoHeadedBoy-latest",
            "gitlabUser": "TwoHeadedBoy"
        },
        "author": "Rick c137b"
    }

    return jsonify(value)

if __name__ == '__main__':
    app.run(port=5000)