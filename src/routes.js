const Cadastro = () => System.import('./components/cadastro/Cadastro.vue');
const Login = () => System.import('./components/login/Login.vue');

import Home from './components/home/Home.vue';

export const routes = [
    { path: '', name:'home', component: Home, titulo: 'Home', menu: true},    
    //{ path: '/login',name:'login', component: Login, titulo: 'Login', menu: true},
    { path: '/cadastro',name:'cadastro', component: Cadastro, titulo: 'Participar', menu: true},
    { path: '/cadastro/:id',name:'alterar', component: Cadastro, titulo: 'Cadastro', menu: false},    
    { path: '*', component: Home, menu: false }
];