import requests

url = "https://skyscanner50.p.rapidapi.com/api/v1/searchFlights"

querystring = {"origin":"LAX","destination":"MAD","date":"2023-04-03","returnDate":"2023-04-14","adults":"1","currency":"USD","countryCode":"US","market":"en-US"}

headers = {
	"X-RapidAPI-Key": "673cd5f30amsh23e878dc6ccc272p1223f6jsn720ad90640aa",
	"X-RapidAPI-Host": "skyscanner50.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)