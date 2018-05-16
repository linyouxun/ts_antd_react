import Home from '../controllers/Home';
import NotFound from '../controllers/NotFound';
const routes = [{
  path: '/',
  name: '首页',
  key: 'home',
  component: Home,
}, {
  path: '*',
  name: '没有找到',
  key: 'notfound',
  component: NotFound,
}];
export default routes;
