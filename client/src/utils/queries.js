import { gql } from "@apollo/client";

export const QUERY_ALL = gql`
	query Users {
		users {
			username
			email
			savedBooks {
				authors
				title
			}
		}
	}
`;

export const QUERY_ME = gql`
	{
		me {
			_id
			username
			email
			savedBooks {
				bookID
				authors
				description
				image
				link
				title
			}
		}
	}
`;
