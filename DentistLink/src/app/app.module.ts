import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ApiInterceptor } from './shared/services/api-interceptor';

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
import { CurrentUserService } from './shared/services/current-user.service';
import { DataSourceService } from './shared/services/data-source.service';
import { JwtService } from './shared/services/jwt.service';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AuthGuardGuard } from './shared/services/auth-guard.guard';

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
    ResetPasswordComponent,
    CreateAppointmentComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuardGuard,UserAuthService, JwtService ,CurrentUserService,DataSourceService, 
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: ApiInterceptor, 
      multi: true 
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
