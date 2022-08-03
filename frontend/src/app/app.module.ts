import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormComponent } from './modules/signup/components/form/form.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './modules/home/components/home/home.component';
import { LoginComponent } from './modules/login/components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthInterceptorProviders } from './modules/login/services/auth.interceptor';
import { AdmindashboardComponent } from './modules/admindashboard/components/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './modules/userdashboard/components/userdashboard/userdashboard.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './modules/admindashboard/components/sidebar/sidebar.component';
import { AdminhomeComponent } from './modules/admindashboard/components/adminhome/adminhome.component';
import { ProfileComponent } from './modules/admindashboard/components/profile/profile.component';
import { AddCategoryComponent } from './modules/admindashboard/components/add-category/add-category.component';
import { ViewCategoriesComponent } from './modules/admindashboard/components/view-categories/view-categories.component';
import { ViewQuizzesComponent } from './modules/admindashboard/components/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './modules/admindashboard/components/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './modules/admindashboard/components/update-quiz/update-quiz.component';
import { UpdateCategoryComponent } from './modules/admindashboard/components/update-category/update-category.component';
import { ViewQuestionsComponent } from './modules/admindashboard/components/view-questions/view-questions.component';
import { AddQuestionComponent } from './modules/admindashboard/components/add-question/add-question.component';
import { UpdateQuestionComponent } from './modules/admindashboard/components/update-question/update-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SidebarComponent as UserSidebarComponent } from './modules/userdashboard/components/sidebar/sidebar.component';
import { UserhomeComponent } from './modules/userdashboard/components/userhome/userhome.component';
import { LoadQuizComponent } from './modules/userdashboard/components/load-quiz/load-quiz.component';
import { QuizInstructionsComponent } from './modules/userdashboard/components/quiz-instructions/quiz-instructions.component';
import { ViewQuizComponent } from './modules/userdashboard/components/view-quiz/view-quiz.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    SidebarComponent,
    AdminhomeComponent,
    ProfileComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    UpdateCategoryComponent,
    ViewQuestionsComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    UserSidebarComponent,
    UserhomeComponent,
    LoadQuizComponent,
    QuizInstructionsComponent,
    ViewQuizComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true
    })
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
