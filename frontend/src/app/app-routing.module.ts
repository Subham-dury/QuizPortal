import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin-guard.guard';
import { PublicGuard } from './guards/public-guard.guard';
import { AddCategoryComponent } from './modules/admindashboard/components/add-category/add-category.component';
import { AddQuestionComponent } from './modules/admindashboard/components/add-question/add-question.component';
import { AddQuizComponent } from './modules/admindashboard/components/add-quiz/add-quiz.component';
import { AdmindashboardComponent } from './modules/admindashboard/components/admindashboard/admindashboard.component';
import { AdminhomeComponent } from './modules/admindashboard/components/adminhome/adminhome.component';
import { ProfileComponent } from './modules/admindashboard/components/profile/profile.component';
import { UpdateCategoryComponent } from './modules/admindashboard/components/update-category/update-category.component';
import { UpdateQuestionComponent } from './modules/admindashboard/components/update-question/update-question.component';
import { UpdateQuizComponent } from './modules/admindashboard/components/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './modules/admindashboard/components/view-categories/view-categories.component';
import { ViewQuestionsComponent } from './modules/admindashboard/components/view-questions/view-questions.component';
import { ViewQuizzesComponent } from './modules/admindashboard/components/view-quizzes/view-quizzes.component';

import { HomeComponent } from './modules/home/components/home/home.component';
import { LoginComponent } from './modules/login/components/login/login.component';
import { FormComponent } from './modules/signup/components/form/form.component';
import { LoadQuizComponent } from './modules/userdashboard/components/load-quiz/load-quiz.component';
import { QuizInstructionsComponent } from './modules/userdashboard/components/quiz-instructions/quiz-instructions.component';
import { UserdashboardComponent } from './modules/userdashboard/components/userdashboard/userdashboard.component';
import { UserhomeComponent } from './modules/userdashboard/components/userhome/userhome.component';
import { ViewQuizComponent } from './modules/userdashboard/components/view-quiz/view-quiz.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: FormComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'user',
    component: UserdashboardComponent,
    canActivate: [PublicGuard],
    children : [
      {
        path: '',
        component: UserhomeComponent
      },
      {
        path: 'quiz/:cid',
        component: LoadQuizComponent
      },
      {
        path: 'instruction/:qid',
        component: QuizInstructionsComponent
      },
      
    ]
  },
  {
    path: 'admin',
    component: AdmindashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: AdminhomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'categories',
        component: ViewCategoriesComponent,
      },
      {
        path: 'quizzes',
        component: ViewQuizzesComponent,
      },
      {
        path: 'view-questions/:qid/:qtitle',
        component: ViewQuestionsComponent,
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
      },
      {
        path: 'add-quiz',
        component: AddQuizComponent,
      },
      {
        path: 'add-question/:qid/:qtitle',
        component: AddQuestionComponent,
      },
      {
        path: 'update-quiz/:qid',
        component: UpdateQuizComponent,
      },
      {
        path: 'update-category/:cid',
        component: UpdateCategoryComponent,
      },
      {
        path: 'update-question/:quesId/:qid/:qtitle',
        component: UpdateQuestionComponent,
      },
    ],
  },
  {
    path: 'start/:qid',
    component: ViewQuizComponent,
    canActivate: [PublicGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
