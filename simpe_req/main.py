import requests
import random
import time

while True:
    url = "http://127.0.0.1:5000/send-data"
    random_num = random.randrange(1, 1000)
    i = 0
    while i < 20:
        print(i)
        if i == 20:
            break
        i +=1
    payload = {"distance": random_num}
    response = requests.post(url, json=payload)
    data = response.json()
    print(data)
    time.sleep(3)
