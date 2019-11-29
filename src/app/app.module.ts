import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';

import 'hammerjs';
import { InstituteInfoComponent } from './institute/institute-info/institute-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SuccessComponent } from './signup/success/success.component';
import { MenteeComponent } from './mentee/mentee.component';
import { Lp1Component } from './mentee/lp1/lp1.component';
import { ChangePasswordComponent } from './common/change-password/change-password.component';
import { ForgotPasswordComponent } from './common/forgot-password/forgot-password.component';
import { InstituteSignupComponent } from './signup/institute-signup/institute-signup.component';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InstituteInfoComponent,
    LoginComponent,
    SignupComponent,
    SuccessComponent,
    MenteeComponent,
    Lp1Component,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    InstituteSignupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSidenavModule,
    FormsModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
