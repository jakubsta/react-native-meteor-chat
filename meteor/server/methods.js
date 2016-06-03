import { Meteor } from 'meteor/meteor';

import { Rooms } from '../collections/rooms';
import { Posts } from '../collections/posts';

Meteor.methods({
  'addRoom': function(title, description) {
    Rooms.insert({
      title, 
      description, 
      creationDate: new Date()})
  },
  'addPost': function(roomId, message) {
    const user = Meteor.user();
    if(!user) {
      return;
    }

    Posts.insert({
      roomId,
      message,
      author: user.username,
      submitDate: new Date(),
    });
  },
});
