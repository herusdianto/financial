import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import en from '../lang/en'
import id from '../lang/id'

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
        locales: { en, id },
        current: 'en',
    },
});
