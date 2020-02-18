import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { AuthService } from '../auth.service';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;
  agreed: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group ({
      email:'',
      name:'',
      password: ''
    });
  }

  onSubmit() {
    this.router.navigateByUrl('/login');
  }

  toggleAgree() {
    if (this.agreed) this.agreed = false;
    else this.agreed = true;
  }
  
}
