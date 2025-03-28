import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginFormInputComponent } from '../components/form-input/login-form-input.component';
import { LoginFormButtonComponent } from '../components/form-button/login-form-button.component';
import { FormDialogComponent } from "../../form-dialog/form-dialog.component";

@Component({
  selector: 'app-signup-page',
  imports: [LoginFormInputComponent, LoginFormButtonComponent, FormDialogComponent],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})

export class SignupPageComponent {

  username: string = ''
  email: string = ''
  password: string = ''
  redirect: string = ''
  confirmPassword: string = ''

  errors: Array<string> = []
  isDialogVisible: boolean = false

  setDialogVisibility($event: boolean) {
    this.isDialogVisible = $event;
    this.errors = []
  }

  setUsername($event: string): void {
    this.username = $event
  }

  setEmail($event: string): void {
    this.email = $event
  }

  setPassword($event: string): void {
    this.password = $event
  }

  setConfirmPassword($event: string): void {
    this.confirmPassword = $event
  }

  doSignup = (event: Event): void => {
    event.preventDefault()
    if(this.username.length < 8) this.errors.push('Username must be at least 8 characters long')
    if(this.password != this.confirmPassword) this.errors.push('Passwords don\'t match')
    else {
      if(this.password.length < 8) this.errors.push('Password must be at least 8 characters long')
    }
    if(this.errors.length == 0) {
      this.signup()
    } else {
      this.isDialogVisible = true
    }
  }

  signup = async (): Promise<Response> => {
    // return await fetch('http://localhost:3001/signup', {
    return await fetch('https://soundwave-lewe.onrender.com/signup', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        "username": this.username,
        "password": this.password,
        "email": this.email
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.errors = data.errors
      if(this.errors.length == 0) this.redirect = '/login'
      console.log(this.errors.length, this.redirect)
      this.isDialogVisible = true
      return data
    })
    .catch(error => console.error(error))
  }

}
