import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/home/about/about.component';
import { SkillComponent } from './components/home/about/skill/skill.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        title: 'App Home Page',
        component: HomeComponent
    },
    {
        path: 'about',
        title: 'App About Page',
        component: AboutComponent
    },
    {
        path: 'skill',
        title: 'App Skill Page',
        component: SkillComponent
    },
];
