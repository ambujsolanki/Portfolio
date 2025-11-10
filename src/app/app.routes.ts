import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProfessionComponent } from './pages/profession/profession.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { WorkComponent } from './pages/work/work.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { SoftskillsComponent } from './pages/softskills/softskills.component';
import { ContactComponent } from './pages/contact/contact.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'profession', component: ProfessionComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'work', component: WorkComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'softskills', component: SoftskillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
