import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ResigneeService } from '../resignee.service';
import { Injectable } from '@angular/core';
//import { ResigneeListComponent } from '../new-resignee.component'/

@Component({
  selector: 'app-new-resignee',
  templateUrl: './new-resignee.component.html',
  styleUrls: ['./new-resignee.component.css']
})

//@Injectable({
  //providedIn: ResigneeListComponent
//})
export class NewResigneeComponent implements OnInit {

  myForm: FormGroup;
  results: any = false;
  resigneeOrder = [];createUser = resignee => 
    this.resigneeOrder.push(resignee);deleteUser = resignee => {
      let index = this.resigneeOrder.indexOf(resignee);
      if (index > -1) this.resigneeOrder.splice(index, 1);
    };

  constructor(private fb: FormBuilder, private router: Router, private firestore: AngularFirestore, 
    private resigneeService:ResigneeService) { 
    }

  ngOnInit() {
    this.myForm = this.fb.group ({
      name:'',
      surname:'',
      joinDate: ''
    });
  }


  onSubmit(){ 
    this.myForm.value.resigneeOrder = this.resigneeOrder;
    let data = this.myForm.value;  
    this.resigneeService.createResigneeOrder(data)
      .then(res => {
        
      })
  }

 

}
