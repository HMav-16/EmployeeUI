import { Component, OnInit } from '@angular/core';
import { Dept } from '../_models/dept';
import { DeptService } from '../_services/dept.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-deptlist',
  templateUrl: './deptlist.component.html',
  styleUrls: ['./deptlist.component.css']
})
export class DeptlistComponent implements OnInit {

    //1- Declaration de tableaux
    departements: Dept[] = [];
    totalrow: number = 0;
    isLoading: boolean = false;

    //2- Constructeur DI
  constructor(private deptService: DeptService) { }

  ngOnInit(): void {

    this.loadDepartement();
  }

   /**
   * Method Load Departement
   */

   loadDepartement() {
    this.deptService.getAll().pipe(first())
    .subscribe(d =>{
      this.totalrow = d.length;
      console.log(d);
      this.departements = d;

    })
  
  }

   /**
   * Method Delete Departement
   */
  delete(dept: Dept){
      this.deptService.delete(dept.deptId).pipe(first())
        .subscribe(() => {
          this.loadDepartement();
        })
    }

    /**
   * Method search Departement Name
   */
    searchDeptName(event: any) {
      let filtered = null;
    
      filtered = this.departements.filter((val, index) => {
        let targetKey = val.deptName.toLowerCase();
        let searchKey = event.toLowerCase();
        return targetKey.includes(searchKey);
      });
        
        this.departements = filtered;
      }

}
