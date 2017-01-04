import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Manga } from '../collection/manga.js';

import './manga.js';

import './main.html';

Template.body.helpers({
    manga() {
        return Manga.find({});
    },
});

Template.body.helpers({
    manga() {
        // Show newest tasks at the top
        return Manga.find({}, { sort: { createdAt: -1 } });
    },
});

Template.body.events({
    'submit .new-manga'(event) {
        event.preventDefault();

        const target = event.target;
        const text = target.text.value;

        Manga.insert({
            title:text,
            createdAt: new Date(), // current time
        });

        target.text.value = '';
    },
});



//Template.body.helpers({

    //{title: "One Piece"},
       // {title: "Dragon Ball"},
        //{title: "Full Metal Alchemist"},
        //{title: "D gray Man"},
        //{title: "Tokyo Ghoul"},
        //{title: "Code Geass"},
    //],
//});

//Template.body.events({
    //"submit .ajouter": function(event) {
       // event.preventDefault(); // this prevents built-in form submission
        //Meteor.call('add', {title: event.target.title.value})
    //}
//});





