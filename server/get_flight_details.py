import requests

url = "https://skyscanner50.p.rapidapi.com/api/v1/getFlightDetails"

querystring = {"itineraryId":"16409-2304041915--32573-0-15343-2304042040|15343-2304081039--32573-0-16409-2304081204","legs":"[{\"origin\":\"SNA\",\"destination\":\"PHX\",\"date\":\"2023-04-04\"},{\"date\":\"2023-04-08\",\"destination\":\"SNA\",\"origin\":\"PHX\"}]","adults":"1","currency":"USD","countryCode":"US","market":"en-US"}

headers = {
	"X-RapidAPI-Key": "673cd5f30amsh23e878dc6ccc272p1223f6jsn720ad90640aa",
	"X-RapidAPI-Host": "skyscanner50.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)