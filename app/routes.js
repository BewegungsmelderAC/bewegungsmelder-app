import ComponentTemplate from './components/ComponentTemplate'
import Home from './components/pages/Home'
import Calendar from './components/pages/Calendar'
import Groups from './components/pages/Groups'
import Support from './components/pages/Support'
import Search from './components/pages/Search'
import Options from './components/pages/Options'


export const routes = {
  '/home': {
    component: Home,
  },
  '/calendar': {
    component: Calendar,
  },
  '/groups': {
    component: Groups,
  },
  '/support': {
    component: Support,
  },

  '/search': {
    component: Search,
  },
  '/options': {
    component: Options,
  }
}