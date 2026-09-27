import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { SkillsComponent } from './pages/skills/skills';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CertificatesComponent } from './pages/certificates/certificates';
import { BlogComponent } from './pages/blog/blog';
import { ContactComponent } from './pages/contact/contact';

import { LinuxServerHealthAuditorComponent }
  from './pages/linux-server-health-auditor/linux-server-health-auditor.component';

import { EducationalWebApp } from './pages/educational-web-app/educational-web-app';

import { FreshBasketComponent } from './pages/fresh-basket/fresh-basket.component';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'skills',
    component: SkillsComponent
  },

  {
    path: 'projects',
    component: ProjectsComponent
  },

  {
    path: 'projects/linux-server-health-auditor',
    component: LinuxServerHealthAuditorComponent
  },

  {
  path: 'projects/education-web-app',
  component: EducationalWebApp
  },

  {
    path: 'projects/fresh-basket',
    component: FreshBasketComponent
  },

  {
    path: 'certificates',
    component: CertificatesComponent
  },

  {
    path: 'blog',
    component: BlogComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: '**',
    redirectTo: ''
  }

];