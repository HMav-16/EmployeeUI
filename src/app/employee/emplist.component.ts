import { Component, OnInit } from '@angular/core';
import { EmpService } from '../_services/emp.service';
import { Emp } from '../_models/emp';
import { first } from 'rxjs';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

   //1- Declaration de tableaux
   employees: Emp[];
   totalrow: number =0;
   isLoading: boolean = false;

    //2- Constructeur DI
    constructor(private empService: EmpService) { 
      this.employees = [];
    }


    ngOnInit(): void {
      this.loadEmployee();
    }
  
    //GET Employees
    loadEmployee(){
      this.isLoading = true;

       this.empService.getAll().pipe(first())
          .subscribe(d =>{
            this.employees =d;
            this.totalrow = d.length;
            console.log(d);
            this.isLoading = false;
          });
    }
  
        /**
 * Method search employee
 * @param event 
 */
searchEmployee(event: any) {
  let filtered = null;

  filtered = this.employees.filter((val, index) => {
    let targetKey = val.firstName.toLowerCase() + '' + val.lastName.toLowerCase();
    let searchKey = event.toLowerCase();
    return targetKey.includes(searchKey);
  });
    
    this.employees = filtered;
  }
    //DELETE Employees
    delete(emp: Emp){
      this.empService.delete(emp.empId).pipe(first())
        .subscribe(() => {
          this.loadEmployee();
        })
    }
  
}
