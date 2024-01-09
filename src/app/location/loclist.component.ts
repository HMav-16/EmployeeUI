import { Component, OnInit } from '@angular/core';
import { LocatService } from '../_services/locat.service';
import { first } from 'rxjs';
import { Locat } from '../_models/locat';

@Component({
  selector: 'app-loclist',
  templateUrl: './loclist.component.html',
  styleUrls: ['./loclist.component.css']
})
export class LoclistComponent implements OnInit {

     //1- Declaration de tableaux
     locationList: Locat[]=[];
     totalrow: number =0;
     isLoading: boolean = false;

  constructor(private locatService: LocatService) { }

  ngOnInit(): void {
    this.loadLocation();
  }


   //GET Location
   loadLocation(){
    this.isLoading = true;

     this.locatService.getAll().pipe(first())
        .subscribe(d =>{
          this.locationList =d;
          this.totalrow = d.length;
          console.log(d);
          this.isLoading = false;
        });
  }

      /**
* Method search Address Location
* @param event 
*/
searchAddLocation(event: any) {
let filtered = null;

filtered = this.locationList.filter((val, index) => {
  let targetKey =   val.locationId.toLowerCase()+''+ val.streetAddress.toLowerCase();
  let searchKey = event.toLowerCase();
  return targetKey.includes(searchKey);
});
  
  this.locationList = filtered;
}
  //DELETE Location
  delete(location: Locat){
    this.locatService.delete(location.locationId).pipe(first())
      .subscribe(() => {
        this.loadLocation();
      })
  }

}
