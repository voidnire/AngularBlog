import { Routes } from '@angular/router';
import {Layout} from './pages/layout/layout';
import {Home} from './pages/home/home';
import {Post} from './pages/post/post';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: '', // Rota vazia redireciona para home
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: Home
            },
            {
                path: 'post/:id', // Se quiser posts com ID
                component: Post
            }
        ]
    }
];
