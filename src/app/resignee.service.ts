import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Resignee } from 'src/app/resignee.model';
import { ResigneeListComponent } from 'src/app/resignee-list/resignee-list.component';



@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: ResigneeListComponent
})

export class ResigneeService {

  constructor(private firestore: AngularFirestore) { }

  getResigneeOrders(){
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('/employeeName').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }

  createResigneeOrder(data){
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("employeeName")
          .add(data)
          .then(res => {}, err => reject(err));
    })
  
  }
  //updateResignee(resignee: Resignee) {
    //delete resignee.id;
    //this.firestore.doc('resignees/' + resignee.id).update(resignee);
  //}

  //deleteResignee(resigneeId: string) {
    //this.firestore.doc('resignees/' + resigneeId).delete();
  //}

}