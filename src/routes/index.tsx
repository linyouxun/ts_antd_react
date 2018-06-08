import Home from '../controllers/Home';
import NotFound from '../controllers/NotFound';
import Page from '../controllers/Page'
const routes = [{
  path: '/',
  name: '首页',
  key: '/',
  component: Home,
}, {
  path: '/user',
  name:'用户',
  key: '/user',
  component: Page,
}, {
  path: '/user/login',
  name: '登录',
  key: '/user/login',
  component: Page
}, {
  path: '*',
  name: '没有找到',
  key: 'notfound',
  component: NotFound,
}];
export default routes;
