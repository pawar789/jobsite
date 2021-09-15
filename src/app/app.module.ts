import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { Router } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SitelayoutComponent } from './components/sitelayout/sitelayout.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
// import { JobseekerComponent } from './components/jobseeker/jobseeker.component';
import { AccountsettingComponent } from './components/employer/accountsetting/accountsetting.component';
import { ChangepasswordComponent } from './components/employer/changepassword/changepassword.component';
import { LoginComponent } from './components/employer/login/login.component';
import { RegisterComponent } from './components/employer/register/register.component';
import { AloginComponent } from './components/admin/alogin/alogin.component';
// import { AregisterComponent } from './components/admin/aregister/aregister.component';
import { JloginComponent } from './components/jobseeker/jlogin/jlogin.component';
import { JregisterComponent } from './components/jobseeker/jregister/jregister.component';
import { JchangepasswordComponent } from './components/jobseeker/jchangepassword/jchangepassword.component';
import { SearchComponent } from './components/search/search.component';
import { FilterPipe } from './filter.pipe';
import { JobseekerdashboardComponent } from './components/jobseeker/jobseekerdashboard/jobseekerdashboard.component';
import { ProfiledataComponent } from './components/jobseeker/profiledata/profiledata.component';
import { JacountComponent } from './components/jobseeker/jacount/jacount.component';
import { HeaserComponent } from './components/demo/heaser/heaser.component';
// import { JobsPipe } from './jobs.pipe';
// import { Jobs } from "./jobs";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SitelayoutComponent,
    HomeComponent,
    AboutUsComponent,
    RegisterComponent,
    LoginComponent,
    AccountsettingComponent,
    ChangepasswordComponent,
    AloginComponent,
    // AregisterComponent,
    JloginComponent,
    JregisterComponent,
    JchangepasswordComponent,
    SearchComponent,
    FilterPipe,
    JobseekerdashboardComponent,
    ProfiledataComponent,
    JacountComponent,
    HeaserComponent,
    // JobsPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [SitelayoutComponent]
})
export class AppModule { }
