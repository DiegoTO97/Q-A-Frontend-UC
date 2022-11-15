import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Interceptors
import { AddTokenInterceptor } from '../app/helpers/add-token.interceptor'

//Components
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { WelcomeComponent } from './components/start/welcome/welcome.component';
import { LoginComponent } from './components/start/login/login.component';
import { RegisterComponent } from './components/start/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChangePasswordComponent } from './components/dashboard/change-password/change-password.component';
import { QuestionnairesComponent } from './components/dashboard/questionnaires/questionnaires.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { loadingComponent } from './shared/loading/loading.component';
import { NewQuestionnairesComponent } from './components/dashboard/questionnaires/new-questionnaires/new-questionnaires.component';
import { StepOneComponent } from './components/dashboard/questionnaires/new-questionnaires/step-one/step-one.component';
import { StepTwoComponent } from './components/dashboard/questionnaires/new-questionnaires/step-two/step-two.component';
import { NewQuestionComponent } from './components/dashboard/questionnaires/new-questionnaires/step-two/new-question/new-question.component';
import { QuestionnaireComponent } from './components/dashboard/questionnaires/questionnaire/questionnaire.component';
import { QuestionnaireListComponent } from './components/start/questionnaire-list/questionnaire-list.component';
import { AddNameComponent } from './components/start/questionnaire-list/add-name/add-name.component';
import { QuestionComponent } from './components/start/questionnaire-list/question/question.component';
import { AnwserQuestionnaireComponent } from './components/start/questionnaire-list/anwser-questionnaire/anwser-questionnaire.component';
import { StatisticsComponent } from './components/dashboard/questionnaires/statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ChangePasswordComponent,
    QuestionnairesComponent,
    NavbarComponent,
    loadingComponent,
    NewQuestionnairesComponent,
    NewQuestionComponent,
    StepOneComponent,
    StepTwoComponent,
    QuestionnaireComponent,
    QuestionnaireListComponent,
    AddNameComponent,
    QuestionComponent,
    AnwserQuestionnaireComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
