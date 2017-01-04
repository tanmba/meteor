import { Template } from 'meteor/templating';

import { Manga } from '../collection/manga.js';

import './manga.html';

Template.updateManga.events({
    'click .toggle-checked'() {
        // Set the checked property to the opposite of its current value
        Manga.update(this._id, {
            $set: { checked: ! this.checked },
        });
    },
    'click .delete'() {
        Manga.remove(this._id);
    },
});