# API for virtually leaving

GET BOARD CURL

```
curl --location \
--request GET 'http://localhost:3000/local/boards/123' \
--data-raw ''
```

POST BOARD CURL

```
curl --location \
--request POST 'http://localhost:3000/local/boards' \
--header 'Content-Type: application/json' \
--data-raw '{
    "headline": "bob is leaving"
}'
```

POST MESSAGE CURL

```
curl --location --request POST 'http://localhost:3000/local/boards/board123/messages' \
--header 'Content-Type: application/json' \
--data-raw '{
    "messageText": "bye bob"
}'
```
