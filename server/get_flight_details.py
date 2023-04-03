import requests

url = "https://skyscanner50.p.rapidapi.com/api/v1/getFlightDetails"

querystring = {"itineraryId":"13416-2304032045--32540-1-13870-2304042345|13870-2304140940--32540-2-13416-2304142245","legs":"[{\"origin\":\"LAX\",\"destination\":\"MAD\",\"date\":\"2023-04-03\"},{\"date\":\"2023-04-14\",\"destination\":\"LAX\",\"origin\":\"MAD\"}]","adults":"1","currency":"USD","countryCode":"US","market":"en-US"}

headers = {
	"X-RapidAPI-Key": "673cd5f30amsh23e878dc6ccc272p1223f6jsn720ad90640aa",
	"X-RapidAPI-Host": "skyscanner50.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)