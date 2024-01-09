import { Component, OnInit } from '@angular/core';
import { Country } from '../_models/country';
import { CountryService } from '../_services/country.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-cntrlist',
  templateUrl: './cntrlist.component.html',
  styleUrls: ['./cntrlist.component.css']
})
export class CntrlistComponent implements OnInit {

     //1- Declaration de tableaux
     countryList: Country[]=[];
     totalrow: number =0;
     isLoading: boolean = false;

     //2-Constructor DI
     constructor(private countryService: CountryService) { }


     ngOnInit(): void {
      this.loadCountrie();
    }
  
  
     //GET Countrie
     loadCountrie(){
      this.isLoading = true;
  
       this.countryService.getAll().pipe(first())
          .subscribe(d =>{
            this.countryList =d;
            this.totalrow = d.length;
            console.log(d);
            this.isLoading = false;
          });
    }
  
        /**
  * Method search  Countrie Name
  * @param event 
  */
  searchNameCountrie(event: any) {
  let filtered = null;
  
  filtered = this.countryList.filter((val, index) => {
    let targetKey =   val.countryName.toLowerCase();
    let searchKey = event.toLowerCase();
    return targetKey.includes(searchKey);
  });
    
    this.countryList = filtered;
  }
    
}
