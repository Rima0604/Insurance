import { Routes } from '@angular/router';


export const routes: Routes = [
    {path:'', loadComponent: ()=> import('./pages/login/login.component')},
    {path:'login', loadComponent: ()=> import('./pages/login/login.component')},
    {path:'home', loadComponent:()=> import('./components/home/home.component')},
    {path:'dashboard',loadComponent:()=> import('./components/dashboard/dashboard.component')},
    {path:'sidenav', loadComponent:()=>import('./components/sidenav/sidenav.component')},
    {path:'admin-list', loadComponent:()=> import('./pages/admin-list/admin-list.component')},
    {path:'edit-user', loadComponent:()=> import('./pages/edit-user/edit-user.component')},
    {path:'services-list', loadComponent:()=>import('./pages/services-list/services-list.component')},
    {path:'footer', loadComponent:()=>import('./components/footer/footer.component')}       
]
