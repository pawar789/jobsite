import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { FormGroup } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { Router } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/employer/login/login.component';
import { RegisterComponent } from './components/employer/register/register.component';
import { ChangepasswordComponent } from './components/employer/changepassword/changepassword.component';
import { AloginComponent } from './components/admin/alogin/alogin.component';
// import { AregisterComponent } from './components/admin/aregister/aregister.component';
import { JloginComponent } from './components/jobseeker/jlogin/jlogin.component';
import { JregisterComponent } from './components/jobseeker/jregister/jregister.component';
import { JchangepasswordComponent } from './components/jobseeker/jchangepassword/jchangepassword.component';
import { SearchComponent } from './components/search/search.component';
import { JobseekerdashboardComponent } from './components/jobseeker/jobseekerdashboard/jobseekerdashboard.component';
import { ProfiledataComponent } from './components/jobseeker/profiledata/profiledata.component';
import { AccountsettingComponent } from './components/employer/accountsetting/accountsetting.component';
import { JacountComponent } from './components/jobseeker/jacount/jacount.component';
import { HeaserComponent } from './components/demo/heaser/heaser.component';

const routes: Routes = [
  
  { path: 'home', component:HomeComponent},
  { path: 'header-demo', component:HeaserComponent},
  { path: 'about-us', component:AboutUsComponent},
  { path: 'jacount', component:JacountComponent},
  { path: 'jobseeker-profileData', component:ProfiledataComponent},
  { path: 'jobseekerdas', component:JobseekerdashboardComponent},
  { path: 'employer-login', component: LoginComponent},
  { path:'employer-register', component: RegisterComponent},
  { path: 'employer-changepassword', component: ChangepasswordComponent},
  { path: 'search', component: SearchComponent},
  { path: 'admin-login', component: AloginComponent},
  { path: 'jobseeker-login', component: JloginComponent},
  { path: 'jobseeker-register', component: JregisterComponent},
  { path: 'jobseeker-changepassword', component:JchangepasswordComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
