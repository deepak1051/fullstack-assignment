# Help Center API

This is the backend for the Help Center application. It provides a RESTful API to manage Help Center cards, allowing for creating, retrieving, and querying specific cards.

## Features

- **Create a Card**: `POST /cards`
- **Get All Cards**: `GET /cards`
- **Get a Specific Card by Title**: `GET /cards/:title`

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- TypeScript (optional)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or a local MongoDB instance

## Getting Started

### 1. Clone the repository

go to api folder

npm install

Create a .env file in the root of your project with the following environment variables:

MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
