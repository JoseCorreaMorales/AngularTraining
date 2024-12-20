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
    email: new  FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),

  })

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLodingSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.getRawValue();
      console.log(email, password);
      this.authService.logIn();
      this.router.navigate(['/profile']);
    }
  }

}
