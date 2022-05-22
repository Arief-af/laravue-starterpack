require('./bootstrap');
require('./bootstrap');
import { createApp } from 'vue';
import App from './App'
import Router from './routes'
createApp(App)
    .use(Router)
    .mount('#app');
