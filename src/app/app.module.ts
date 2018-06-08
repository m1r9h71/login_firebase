import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngulaFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

import { AuthGuard } from './auth.service';
import { routes } from './app.routes';

export const firbaseConfig = {
            apiKey: "AIzaSyChsJkv0HzzoZQVQpOCK5ynATzBjnZogaI",
            authDomain: "login-tutorial-95bef.firebaseapp.com",
            databaseURL: "https://login-tutorial-95bef.firebaseio.com",
            projectId: "login-tutorial-95bef",
            storageBucket: "login-tutorial-95bef.appspot.com",
            messagingSenderId: "226519738189"

    };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
