# Alarms

## Test

// ⚙️ Terminal - to start Docker compose
- docker-compose up -d
- docker-compose up -d read-db

```bash
yarn start:dev

// ----------------------------
// 🌍🌍🌍 Testing everything - CURL requests
// 🚨 NOTE: remove json_pp if your operating system does not support it
curl --location --request POST 'localhost:3000/alarms' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Alarm 1",
    "severity": "HIGH",
    "triggeredAt": "2021-01-01T00:00:00.000Z",
    "items": [
        {
            "name": "Item 1",
            "type": "TYPE_1"
        },
        {
            "name": "Item 2",
            "type": "TYPE_2"
        }
    ]
}' | json_pp

// 🌍🌍🌍 - GET Request
// 🚨 NOTE: remove json_pp if your operating system does not support it
curl http://localhost:3000/alarms | json_pp

```


