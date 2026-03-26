import requests

url_endpoint = "http://127.0.0.1:5000/get-cat"

intro = {
    "key": "321",
    }
response = requests.get(url_endpoint, headers=intro)
data = response.json()
print(data)
 
