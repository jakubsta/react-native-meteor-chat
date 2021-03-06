import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const PostSchema = new SimpleSchema({
  message: {
    type: String,
    max: 1000,
  },
  author: {
    type: String,
  },
  submitDate: {
    type: Date,
  },
  roomId: {
    type: String,
  }
});

const Posts = new Mongo.Collection('posts');
Posts.attachSchema(PostSchema);
export { Posts };
