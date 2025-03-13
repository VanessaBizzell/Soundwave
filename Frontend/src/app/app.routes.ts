import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component'
import { PostcardComponent } from './postcard/postcard.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'feed', component: FeedComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginPageComponent },
    {
        path: 'music/:id',
        loadComponent: () => import('./postcard/postcard.component').then(m => m.PostcardComponent),
        title: 'Music Details'
     }
]

