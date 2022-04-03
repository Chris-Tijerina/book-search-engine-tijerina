import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				username
				email
				password
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser($username: String!, $email: String!, $password: String!) {
		addUser(username: $username, email: $email, password: $password) {
			token
			user {
				username
				email
			}
		}
	}
`;

export const ADD_BOOK = gql`
	mutation SaveBook(
		$bookId: ID
		$authors: [String]
		$description: String
		$image: String
		$link: String
		$title: String
	) {
		saveBook(
			bookID: $bookID
			authors: $authors
			description: $description
			image: $image
			link: $link
			title: $title
		) {
			_id
			username
			savedBooks {
				bookId
				authors
				link
				image
				description
				title
			}
		}
	}
`;

export const REMOVE_BOOK = gql`
	mutation removeBook($bookId: String!) {
		removeBook(bookId: $bookId) {
			savedBooks {
				bookId
				title
				authors
				description
				image
				link
			}
			_id
			username
			email
			password
		}
	}
`;
