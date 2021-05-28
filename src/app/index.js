import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleReactLightbox from 'simple-react-lightbox';
import { I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import 'regenerator-runtime/runtime'; //para evitar el puto error runtimeregenerator, ojo mirar la lista de browsers en package.json

import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../../node_modules/@fortawesome/fontawesome-free/js/all.js';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

i18next.init({
    interpolation: { escapeValue: false},
    lng: "en",
    resources: {
        es: { global: global_es},
        en: { global: global_en}
    }
})

ReactDOM.render(
   <I18nextProvider i18n={i18next}>
       <SimpleReactLightbox>
        <App/>
       </SimpleReactLightbox>
    </I18nextProvider>,
    document.getElementById('app')
);
