import { Component, OnInit } from '@angular/core';
import { ResigneeService } from 'src/app/resignee.service';
import { Resignee } from 'src/app/resignee.model';
import { NewResigneeComponent } from '../new-resignee/new-resignee.component';
import { NgModule } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
//export * from ''
@NgModule({
  providers: [ResigneeService],
})

@Component({
  selector: 'app-resignee-list',
  templateUrl: './resignee-list.component.html',
  styleUrls: ['./resignee-list.component.css']
})
export class ResigneeListComponent implements OnInit {
  //collection: AngularFirestoreCollection<{}>;
  
  resigneeOrder: Resignee[]
  
  constructor(public resigneeService: ResigneeService, public firestore: AngularFirestore) { 
   
  }
  
  ngOnInit() {
    this.resigneeService.getResigneeOrders().then(data => {
      this.resigneeOrder = data.map(e => {
        return {
          name: e.payload.doc.name,
          joinDate: e.payload.doc.joinDate,
          ...e.payload.doc.data()
        }as Resignee
      })
    });
    
  
  
  

  //update(resignee: Resignee) {
    //this.resigneeService.updateResignee(resignee);
  //}


  //delete(id: string) {
    //this.resigneeService.deleteResignee(id);
  //}

}
