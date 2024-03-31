# Alarms

## Test

// ⚙️ Terminal - to start Docker compose
docker-compose up -d

```bash
yarn start:dev

curl -X POST http://localhost:3000/alarms -H "Content-Type: application/json" -d '{"name": "Test Alarm", "severity": "high"}'

curl http://localhost:3000/alarms

```


