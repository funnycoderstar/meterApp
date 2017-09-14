import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

// import './main.html';
import '../imports/ui/body.js';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
Template.myTemplate.events({
  'click p': function() {
    console.log('p tag is click');
  },
  'click .myClass': function() {
    console.log('The class is Clicked..');
  },
  'click #myId': function() {
    console.log('The Id is clicked..');
  }
})

// if(Meteor.isClient) {
//   var myData = {
//     key1: 'value1',
//     key2: 'value2',
//   }
//   Sessionn.set('mySession', myData);
//   var sessionDataToLog = Session.get('mySession');
//   console.log(sessionDataToLog);
// }
