import { Meteor } from 'meteor/meteor';
import { Rooms } from '../collections/rooms';

Meteor.publish('rooms', function() {
  return Rooms.find({});
});
