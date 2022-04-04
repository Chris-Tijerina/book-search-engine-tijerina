# Book Search Engine - Tijerina

GitHub Link: https://github.com/Chris-Tijerina/book-search-engine-tijerina

Deployed App: https://lit-savannah-55952.herokuapp.com/

## Description

This is a fully functioning Google Books API search engine built with a RESTful API, that has been refactored to be a GraphQL API built with Apollo Server. The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API.

> Refactoring this application was quite tough and led to many detailed issues. Some of it was due to the inclusion of tokens to keep track of user data and other issues were due to the usage of Google's API, as the id's for books had to be handled properly in order to ensure the functionality. This did not go entirely smoothly and there are some issues that I am aware of that I was unable to fix before deployment. Check the known isues

## Instruction

> If you would like to use the code from this application, you will have to download the repository, or fork it and clone it, and open it up in your chosen terminal (Vs.Code, GitBash, Terminal for Mac, etc.). It already has the ability to connect to an AtlasDB if you have one.

## Known Issues!!!!

> At the moment, there are two outstanding issues on the graphQL implementation of this application. The first issue is that the SignUp component works and WILL create a user, but it will not automatically sign the user in and will show an error despite having worked. I've tracked the issue down to a problem on the signup page with the Auth function and the handling of the newly created token. Basically, you will have to log in after creating your account even after it tells you there was a problem. The second issue is that once a book has been added to a user's profile, it cannot be deleted. I believe the issue lies in the handling of bookIDs in the mutation for removing books.

## Licenses

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

## Contributing

If you would like to contribute:

> Fork the repo and create your branch from master. If you've added code that should be tested, add tests. If you've changed APIs, update the documentation. Ensure the test suite passes. Make sure your code lints and report any bugs by opening a new issue.

## Questions

> If you have any questions contact me at ctijerina@live.com or through my Github Link: https://github.com/Chris-Tijerina
