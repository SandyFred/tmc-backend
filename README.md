# tmc-backend

REST APIs for signup and signin Functionality.
1) POST /v1/auth/signup

Request Body:
{
  "username": "abc",
  "password": "123"
}

2) POST /v1/auth/signin

Request Body:
{
  "username": "abc",
  "password": "123"
}

### Setup the Backend

Clone the repo and cd into the directory

Create a .env file and give the following secrets:

MONGODB_URL

JWT_SECRET

```bash
$ docker build . -t <your-username>/node-web-app
$ docker run -p 49160:8080 -d <your username>/node-web-app
```
