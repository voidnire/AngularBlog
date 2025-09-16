import { Routes } from '@angular/router';
import {Home} from './home/home';
//import {Post} from './post/post';

export const routes: Routes = [
    {
        path:'',
        component: Home,
    }/*,{
        path:'/post',
        component: Post,
    }*/
];
