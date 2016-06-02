import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const RoomSchema = new SimpleSchema({
  title: {
    type: String,
    max: 100,
  },
  description: {
    type: String,
    max: 250,
  },
  creationDate: {
    type: Date,
  },
});

const Rooms = new Mongo.Collection('rooms');
Rooms.attachSchema(RoomSchema);
export { Rooms };
