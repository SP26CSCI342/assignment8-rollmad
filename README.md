[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/jYpz8rDY)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=24043259&assignment_repo_type=AssignmentRepo)

## Platescout - Denzel Rollman
- **Assignment 8** 5/31/2026

## Live URLs

- **Client:** https://assignment8-rollmad-hjc6x2b4i-rollmads-projects.vercel.app/
- **Server:** https://platescout-yourname.onrender.com
- **Server health check:** https://platescout-denze.onrender.com/api/health

## Local setup

1. Clone the repo
2. Copy `server/.env.example` to `server/.env` and fill in `MONGO_URI` + `JWT_SECRET`
3. Install dependencies:
   - From root: `npm install`
   - From server: `cd server && npm install`
4. Run the app in two terminals:
   - Terminal 1 (client): `npm run dev`
   - Terminal 2 (server): `cd server && npm run dev`
5. Open http://localhost:5173 in your browser

## What I learned during deployment
I gained insight into transferring from local development to the Production, Staging or Development environment among the components of a full stack app. The hardest part was ensuring the environment variables were configured correctly in Vercel and Render, and ensuring the frontend would dynamically access the backend URL as opposed to using hard-coded localhost requests. Debugging CORS requests while previously working locally and to fail in production was a frustrating experience.
Additionally, I better understood JWT authentication in production and how the JWT is generated and stored on the server side, and how the client accesses and sends the JWT through the Authorization header. I learned firsthand how minor errors or omissions (incorrect fetch URL, environment variable assignment) can result in breaking the entire authentication flow in production.
In hindsight, I would create the environment variable structure and deployment configuration before developing the features for the app. The majority of my deployment issues can be attributed to delays in deploying the environment variables and configuration versus developing the app's and deploying the app's core logic.

