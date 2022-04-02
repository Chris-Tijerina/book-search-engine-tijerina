// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
	type Book {
		bookID: ID
		authors: [String]
		description: String
		image: String
		link: String
		title: String
	}
	type User {
		_id: ID
		username: String
		email: String
		password: String
		savedBooks: [Book]
	}
    type Query {
        users: [User]
        me: User
    }
    type Auth {
        token: ID!
        user: User
    }
    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(bookID: ID, authors: [String], description: String, image: String, link: String, title: String); User
        removeBook(bookID: String!): User
    }

`;

// export the typeDefs
module.exports = typeDefs;
