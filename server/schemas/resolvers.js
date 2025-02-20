// import user model
const { User } = require("../models");
// import sign token function from auth
const { signToken } = require("../utils/auth");

const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
	Query: {
		users: async () => {
			return User.find();
		},
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id });
				return userData;
			}
		},
	},
	Mutation: {
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);
			console.log("HI " + JSON.stringify(args));
			return { token, user };
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError("Incorrect credentials");
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError("Incorrect credentials");
			}
			const token = signToken(user);
			console.log("Hello " + user);
			console.log("Hello " + token);
			return { token, user };
		},
		saveBook: async (
			parent,
			{ bookID, authors, description, image, link, title },
			context
		) => {
			if (context.user) {
				const updateUser = await User.findByIdAndUpdate(
					{ _id: context.user._id },
					{
						$push: {
							savedBooks: { bookID, authors, description, image, link, title },
						},
					},
					{ new: true }
				);
				return updateUser;
			}
			throw new AuthenticationError("You need to be logged in!");
		},
		removeBook: async (parent, { bookID }, context) => {
			if (context.user) {
				const updatedUser = await User.findOneAndUpdate(
					{ _id: context.user._id },
					{ $pull: { savedBooks: { bookID: bookID } } },
					{ new: true }
				);
				return updatedUser;
			}
			throw new AuthenticationError("You need to be logged in!");
		},
	},
};

module.exports = resolvers;
