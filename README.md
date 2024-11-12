# apiNodeJwt

## Overview
This repository contains a Node.js API project using JWT (JSON Web Token) for authentication. It is primarily written in TypeScript.

## Recent Changes
- **[054cc70](https://github.com/andreattamatheus/apiNodeJwt/commit/054cc70b4d1621e922da617785b1d283f70680dd)**: Add .env.example file with environment variable declarations
- **[ea87070](https://github.com/andreattamatheus/apiNodeJwt/commit/ea870703f099cc74f5c68b5b26ad8b56eeabfacd)**: Finish node API with JWT

## Usage Instructions
To use this project, follow the standard steps for setting up a Node.js project:
1. Clone the repository
2. Install dependencies using `npm install`
3. Set up environment variables in a `.env` file (refer to `.env.example`)
4. Start the server using `npm start`

5. ## API Endpoints

### Create user

-   URL: /sign-up
-   Method: POST
-   Headers: Content-Type: multipart/form-data
-   Description: Creates a new user

### Login user

-   URL: /sign-in
-   Method: POST
-   Headers: Authorization: Bearer {token}, Content-Type: multipart/form-data
-   Description: Log in a user

### Get Leads

-   URL: /leads
-   Method: GET
-   Headers: Authorization: Bearer {token}
-   Description: Fetches all records


## Authentication

### Generating a Token

It would be best to generate a token to authenticate API requests. Use the @jsonwebtoken library to manage tokens.

### Making Authenticated Requests

Include the token in the Authorization header of your requests:

Authorization: Bearer {your_token}

```
4|FtA7npeqHV6pA926caMyK62V6KTu0xJaLphzfVUQ3550142d
```
