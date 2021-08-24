const User = require("./User");
const Post = require("./Post");
const Vote = require("./Vote");
const Comment = require("./Comments");

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// defining the relationship of post to the user
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// user gets post information through votes
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

// posts get user information through votes
Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

// creating relationships from vote to user, vote to post, user to vote, and post to vote
Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

// creating relationships to and from comments with users and posts
Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Comment.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  
  User.hasMany(Comment, {
    foreignKey: 'user_id'
  });
  
  Post.hasMany(Comment, {
    foreignKey: 'post_id'
  });

// exports an object with the user object as a propery
module.exports = { User, Post, Vote, Comment };