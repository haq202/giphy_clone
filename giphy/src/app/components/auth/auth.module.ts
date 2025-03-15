import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { JoinComponent } from './join/join.component';
import { LoginComponent } from './join/login/login.component';
import { SignupComponent } from './join/signup/signup.component';

@NgModule({
  declarations: [JoinComponent, LoginComponent, SignupComponent],
  imports: [CommonModule, AuthRoutingModule],
  providers: [],
})
export class AuthModule {}
