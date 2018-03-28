import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { UserAuthService} from './shared/services/user-auth.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeNavbarComponent } from './shared/components/welcome-navbar/welcome-navbar.component';
import { HomeNavbarComponent } from './shared/components/home-navbar/home-navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AppointmentComponent,
    UsersComponent,
    AdminComponent,
    WelcomeComponent,    
    WelcomeNavbarComponent,
    HomeNavbarComponent,
    FooterComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [UserAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
