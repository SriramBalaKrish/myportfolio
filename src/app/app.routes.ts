import { Routes } from '@angular/router';
export const routes: Routes = [
	{ path: '', loadComponent: () => import('./hero/hero.component').then(m => m.HeroComponent) },
	{ path: 'about', loadComponent: () => import('./hero/hero.component').then(m => m.HeroComponent) },
	{ path: 'experience', loadComponent: () => import('./experience/experience.component').then(m => m.ExperienceComponent) },
	{ path: 'skills', loadComponent: () => import('./skills/skills.component').then(m => m.SkillsComponent), data: { preload: false } },
	{ path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
	{ path: '**', redirectTo: '' }
];
