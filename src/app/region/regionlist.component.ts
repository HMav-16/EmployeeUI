import { Component, OnInit } from '@angular/core';
import { Reg } from '../_models/reg';
import { RegService } from '../_services/reg.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-regionlist',
  templateUrl: './regionlist.component.html',
  styleUrls: ['./regionlist.component.css']
})
export class RegionlistComponent implements OnInit {

  //1- Declaration de tableaux
  regionsList: Reg[]=[];
  totalrow: number =0;
  isLoading: boolean = false;

  //2-Constructor DI
  constructor(private regService: RegService) { }


  ngOnInit(): void {
   this.loadRegion();
 }


  //GET Region
  loadRegion(){
   this.isLoading = true;

    this.regService.getAll().pipe(first())
       .subscribe(d =>{
         this.regionsList =d;
         this.totalrow = d.length;
         console.log(d);
         this.isLoading = false;
       });
 }

}
