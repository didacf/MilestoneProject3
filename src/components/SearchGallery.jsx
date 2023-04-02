import React from 'react'
import FlightCard from './FlightCard'

const searchGallery = () => {

    const sample = {
        "status": true,
        "message": "Success",
        "timestamp": 1680466664559,
        "data": [
          {
            "id": "15265-2304031347--31722-1-16088-2304031753|16088-2304042040--31825-1-15265-2304050923",
            "price": {
              "amount": 482.97,
              "update_status": "pending",
              "last_updated": "2023-04-02T19:42:00",
              "quote_age": 36,
              "score": 2.33318,
              "transfer_type": "MANAGED"
            },
            "legs": [
              {
                "id": "15265-2304031347--31722-1-16088-2304031753",
                "origin": {
                  "id": 15265,
                  "entity_id": 95673720,
                  "alt_id": "PDX",
                  "parent_id": 6145,
                  "parent_entity_id": 27542060,
                  "name": "Portland",
                  "type": "Airport",
                  "display_code": "PDX"
                },
                "destination": {
                  "id": 16088,
                  "entity_id": 95673473,
                  "alt_id": "SAN",
                  "parent_id": 6908,
                  "parent_entity_id": 27545066,
                  "name": "San Diego International",
                  "type": "Airport",
                  "display_code": "SAN"
                },
                "departure": "2023-04-03T13:47:00",
                "arrival": "2023-04-03T17:53:00",
                "duration": 246,
                "carriers": [
                  {
                    "id": -31722,
                    "name": "United",
                    "alt_id": "UA",
                    "display_code": "UA",
                    "display_code_type": "IATA",
                    "alliance": -31999
                  }
                ],
                "stop_count": 1,
                "stops": [
                  {
                    "id": 16216,
                    "entity_id": 95673577,
                    "alt_id": "SFO",
                    "parent_id": 7029,
                    "parent_entity_id": 27546320,
                    "name": "San Francisco International",
                    "type": "Airport",
                    "display_code": "SFO"
                  }
                ]
              },
              {
                "id": "16088-2304042040--31825-1-15265-2304050923",
                "origin": {
                  "id": 16088,
                  "entity_id": 95673473,
                  "alt_id": "SAN",
                  "parent_id": 6908,
                  "parent_entity_id": 27545066,
                  "name": "San Diego International",
                  "type": "Airport",
                  "display_code": "SAN"
                },
                "destination": {
                  "id": 15265,
                  "entity_id": 95673720,
                  "alt_id": "PDX",
                  "parent_id": 6145,
                  "parent_entity_id": 27542060,
                  "name": "Portland",
                  "type": "Airport",
                  "display_code": "PDX"
                },
                "departure": "2023-04-04T20:40:00",
                "arrival": "2023-04-05T09:23:00",
                "duration": 763,
                "carriers": [
                  {
                    "id": -31825,
                    "name": "Spirit Airlines",
                    "alt_id": "NK",
                    "display_code": "NK",
                    "display_code_type": "IATA"
                  }
                ],
                "stop_count": 1,
                "stops": [
                  {
                    "id": 13411,
                    "entity_id": 95673753,
                    "alt_id": "LAS",
                    "parent_id": 4458,
                    "parent_entity_id": 27542715,
                    "name": "Las Vegas Harry Reid International",
                    "type": "Airport",
                    "display_code": "LAS"
                  }
                ]
              }
            ],
            "is_eco_contender": false,
            "eco_contender_delta": 0.9063065,
            "score": 2.32969,
            "totalDuration": 1009
          }
        ]
    }


  return (
    <>
        <FlightCard sample={sample} />
    </>
  )
}

export default searchGallery