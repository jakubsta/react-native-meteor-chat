import { Meteor } from 'meteor/meteor';

import { Rooms } from '../collections/rooms';

Meteor.methods({
  'addRoom': function(title, description) {
    Rooms.insert({
      title, 
      description, 
      creationDate: new Date()})
  },
});
