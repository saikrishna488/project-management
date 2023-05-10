# GraphQL Client and Project Management System
This is a GraphQL API for managing clients and their associated projects. With this API, developers can easily create, update, and delete clients, as well as add, update, and delete projects associated with those clients.

# Getting Started
To get started, follow these steps:

Clone this repository to your local machine.
Install the dependencies by running npm install.
Start the server by running npm start.
Visit http://localhost:4000/graphql in your browser to access the GraphQL Playground.
Usage

# Queries
To retrieve data from the API, you can use the following queries:

clients: retrieves a list of all clients.
client(id: ID!): retrieves a single client by ID.
projects: retrieves a list of all projects.
project(id: ID!): retrieves a single project by ID.
Mutations
To modify data in the API, you can use the following mutations:

createClient(name: String!, email: String!, phone: String!): Client: creates a new client with the specified name, email, and phone number.
updateClient(id: ID!, name: String, email: String, phone: String): Client: updates an existing client with the specified ID.
deleteClient(id: ID!): Boolean: deletes an existing client with the specified ID.
createProject(clientId: ID!, name: String!, description: String!, startDate: String!, endDate: String!): Project: creates a new project associated with the specified client ID.
updateProject(id: ID!, name: String, description: String, startDate: String, endDate: String): Project: updates an existing project with the specified ID.
deleteProject(id: ID!): Boolean: deletes an existing project with the specified ID.


GraphQL Client and Project Management System
This is a GraphQL API for managing clients and their associated projects. With this API, developers can easily create, update, and delete clients, as well as add, update, and delete projects associated with those clients.

Getting Started
To get started, follow these steps:

Clone this repository to your local machine.
Install the dependencies by running npm install.
Start the server by running npm start.
Visit http://localhost:4000/graphql in your browser to access the GraphQL Playground.
Usage
Queries
To retrieve data from the API, you can use the following queries:

clients: retrieves a list of all clients.
client(id: ID!): retrieves a single client by ID.
projects: retrieves a list of all projects.
project(id: ID!): retrieves a single project by ID.
Mutations
To modify data in the API, you can use the following mutations:

createClient(name: String!, email: String!, phone: String!): Client: creates a new client with the specified name, email, and phone number.
updateClient(id: ID!, name: String, email: String, phone: String): Client: updates an existing client with the specified ID.
deleteClient(id: ID!): Boolean: deletes an existing client with the specified ID.
createProject(clientId: ID!, name: String!, description: String!, startDate: String!, endDate: String!): Project: creates a new project associated with the specified client ID.
updateProject(id: ID!, name: String, description: String, startDate: String, endDate: String): Project: updates an existing project with the specified ID.
deleteProject(id: ID!): Boolean: deletes an existing project with the specified ID.

# Schema
Here is the schema for the API:

type Client {
  id: ID!
  name: String!
  email: String!
  phone: String!
  projects: [Project]
}

type Project {
  id: ID!
  name: String!
  description: String!
  startDate: String!
  endDate: String!
  client: Client!
}

type Query {
  clients: [Client]
  client(id: ID!): Client
  projects: [Project]
  project(id: ID!): Project
}

type Mutation {
  createClient(name: String!, email: String!, phone: String!): Client
  updateClient(id: ID!, name: String, email: String, phone: String): Client
  deleteClient(id: ID!): Boolean
  createProject(clientId: ID!, name: String!, description: String!, startDate: String!, endDate: String!): Project
  updateProject(id: ID!, name: String, description: String, startDate: String, endDate: String): Project
  deleteProject(id: ID!): Boolean
}


GraphQL Client and Project Management System
This is a GraphQL API for managing clients and their associated projects. With this API, developers can easily create, update, and delete clients, as well as add, update, and delete projects associated with those clients.

Getting Started
To get started, follow these steps:

Clone this repository to your local machine.
Install the dependencies by running npm install.
Start the server by running npm start.
Visit http://localhost:4000/graphql in your browser to access the GraphQL Playground.
Usage
Queries
To retrieve data from the API, you can use the following queries:

clients: retrieves a list of all clients.
client(id: ID!): retrieves a single client by ID.
projects: retrieves a list of all projects.
project(id: ID!): retrieves a single project by ID.
Mutations
To modify data in the API, you can use the following mutations:

createClient(name: String!, email: String!, phone: String!): Client: creates a new client with the specified name, email, and phone number.
updateClient(id: ID!, name: String, email: String, phone: String): Client: updates an existing client with the specified ID.
deleteClient(id: ID!): Boolean: deletes an existing client with the specified ID.
createProject(clientId: ID!, name: String!, description: String!, startDate: String!, endDate: String!): Project: creates a new project associated with the specified client ID.
updateProject(id: ID!, name: String, description: String, startDate: String, endDate: String): Project: updates an existing project with the specified ID.
deleteProject(id: ID!): Boolean: deletes an existing project with the specified ID.
Schema
Here is the schema for the API:

yaml
Copy code
type Client {
  id: ID!
  name: String!
  email: String!
  phone: String!
  projects: [Project]
}

type Project {
  id: ID!
  name: String!
  description: String!
  startDate: String!
  endDate: String!
  client: Client!
}

type Query {
  clients: [Client]
  client(id: ID!): Client
  projects: [Project]
  project(id: ID!): Project
}

type Mutation {
  createClient(name: String!, email: String!, phone: String!): Client
  updateClient(id: ID!, name: String, email: String, phone: String): Client
  deleteClient(id: ID!): Boolean
  createProject(clientId: ID!, name: String!, description: String!, startDate: String!, endDate: String!): Project
  updateProject(id: ID!, name: String, description: String, startDate: String, endDate: String): Project
  deleteProject(id: ID!): Boolean
}

# Technologies Used
This project was built with the following technologies:

Node.js
Express
GraphQL
MongoDB

# Contributing
If you would like to contribute to this project, please open a pull request.
