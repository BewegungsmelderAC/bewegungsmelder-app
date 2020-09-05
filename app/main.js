// vue setup
import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'

import Navigator from 'nativescript-vue-navigator'
import {routes} from './routes'
Vue.use(Navigator, { routes })


// radlistview setup
import RadListView from 'nativescript-ui-listview/vue';

Vue.use(RadListView);
Vue.registerElement(
  'CardView',
  () => require('@nstudio/nativescript-cardview').CardView
);




import App from './components/App'


if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools, { host: '192.168.192.64' })
}

// store setup
import store from './store'

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')
// Prints Colored logs when --env.production is *NOT* set while building
Vue.config.debug = (TNS_ENV !== 'production')


new Vue({
  store,
  render: h => h(App),
}).$start()
