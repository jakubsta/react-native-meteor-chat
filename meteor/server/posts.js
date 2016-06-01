import { Meteor } from 'meteor/meteor';
import { Posts } from '../collections/posts';

Meteor.publish('posts', function() {
  return Posts.find({});
});
