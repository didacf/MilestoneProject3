import requests

url = "https://skyscanner50.p.rapidapi.com/api/v1/getFlightDetails"

querystring = {"itineraryId":"13416-2304031800--32317-0-13870-2304041405|13870-2304081235--32317-0-13416-2304081600","legs":"[{\"origin\":\"LAX\",\"destination\":\"MAD\",\"date\":\"2023-04-03\"},{\"date\":\"2023-04-08\",\"destination\":\"LAX\",\"origin\":\"MAD\"}]","adults":"1","currency":"USD","countryCode":"US","market":"en-US"}

headers = {
	"X-RapidAPI-Key": "673cd5f30amsh23e878dc6ccc272p1223f6jsn720ad90640aa",
	"X-RapidAPI-Host": "skyscanner50.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)