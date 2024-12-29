import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    username: new  FormControl('', []),/*  [Validators.required, Validators.email] */
    password: new FormControl('', []),/* [Validators.required, Validators.minLength(6)] */

  })

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLodingSubmit() {
    if (this.form.valid) {
      const { username, password } = this.form.getRawValue();
      console.log('ok', username, password);
      const credentials = { username, password };
      this.authService.logIn(credentials).subscribe({
        next: () => {console.log("USERNAME NEXT: ", username);},
        error: () => {console.log("USERNAME ERROR: ", username);}
      })
      this.router.navigate(['/profile']);
    }
  }

}
