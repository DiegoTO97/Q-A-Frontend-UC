import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/dashboard/change-password/change-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewQuestionnairesComponent } from './components/dashboard/questionnaires/new-questionnaires/new-questionnaires.component';
import { StepOneComponent } from './components/dashboard/questionnaires/new-questionnaires/step-one/step-one.component';
import { StepTwoComponent } from './components/dashboard/questionnaires/new-questionnaires/step-two/step-two.component';
import { QuestionnairesComponent } from './components/dashboard/questionnaires/questionnaires.component';
import { QuestionnaireComponent } from './components/dashboard/questionnaires/questionnaire/questionnaire.component';
import { LoginComponent } from './components/start/login/login.component';
import { RegisterComponent } from './components/start/register/register.component';
import { StartComponent } from './components/start/start.component';
import { WelcomeComponent } from './components/start/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full'},
  { path: 'start', component: StartComponent, children: [
    { path: '', component: WelcomeComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
  ] },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: QuestionnairesComponent},
    { path: 'changePa0ssword', component: ChangePasswordComponent},
    { path: 'showQuestionnaire/:id', component: QuestionnaireComponent},
    { path: 'newQuestionnaire', component: NewQuestionnairesComponent, children:[
      { path: 'stepOne', component: StepOneComponent},
      { path: 'stepTwo', component: StepTwoComponent}
    ]},
  ]},
  
  { path: '**', redirectTo: '/start', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
