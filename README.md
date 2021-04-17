# LibraryCard

A web app that helps users to remember Anything, Anytime, Anywhere!

Chingu Voyage-26 (geckos-team-03) (https://chingu.io/)

## Overview:

LibraryCard is a responsive web app aimed at helping users to build a library of cards with places, people, memories, or anything you can imagine. Then they can navigate their personal collection and find the name of that cool ramen place downtown anytime, anywhere 🚀

## Demo:

https://library-card.netlify.app/

## Design   

https://www.figma.com/file/VvrSD3QSfE2aUvb3GUqJaj/Library-Card-App?node-id=0%3A1

## Features

- Account Login and Register via email/password authentication & Google authentication

Once authenticated, users are able to...

- Add their own Cards
- Upload and preview own icons to cards 
- Add and preview icons via search in IconFinder library
- Remove, edit, and rename Cards

## Development

### Technologies

The primary libraries and dependencies used in the development of LibraryCard are shown below. For a complete list of dependencies, consult the package.json files inside `frontend` and `backend` folders.

| Library                             | Purpose                 | Client or Server? |
|:------------------------------------|:------------------------|:------------------------|
| [React](https://reactjs.org/) | A JavaScript library for building UIs | Client
| [Bootstrap](https://getbootstrap.com/) | The world’s most popular framework for building responsive, mobile-first sites | Client
| [MongoDB with Mongoose](https://mongoosejs.com/) | Schema-Based MongoDB Application Data Modeling | Server |
| [Express](https://expressjs.com/)       | Backend Server Framework | Server |

### Usage

| (1) Commands (`/frontend`)           | Purpose                           |
|:-----------------------------------|:----------------------------------|
| `npm start`                        | Run Frontend Dev. Server          |
| `npm run build`                    | Build Frontend for Production     |

| (2) Commands (`/backend`)         | Purpose                            |
|:---------------------------------|:-----------------------------------|
| `npm start`                      | Run Backend Server                 |

## Development Environment

Before starting the server in your local dev. environment,the following environment variables should be defined:

| Variable Name               | Description                     |
|:-----------------------------------|:----------------------------|
| ATLAS_URI | MongoDB Atlas connection string (e.g. `mongodb+srv://MONGO_USER:MONGO_PASSWORD@cluster...`) |
| ICONFINDER_API | The Iconfinder API key to authenticate the requests. |
| PORT | Server Port (5000 by default for local deploy). In production Heroku will provide its own port. |

This is accomplished by including the following in the .env file located in the root of the `/backend` directory. This .env file must never be pushed to GitHub since it contains application sensitive information such as the database username and password.

## Authors

- Artem Sobolev aka BirdyArt
