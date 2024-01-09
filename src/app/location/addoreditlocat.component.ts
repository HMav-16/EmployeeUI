import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocatService } from '../_services/locat.service';

@Component({
  selector: 'app-addoreditlocat',
  templateUrl: './addoreditlocat.component.html',
  styleUrls: ['./addoreditlocat.component.css']
})
export class AddoreditlocatComponent implements OnInit {

    //Declaration des variables
    formadd!: FormGroup;
    id: number;
    loading = false;
    submitted = false;
    btnText: string = "Save";
    title: string = "New Location";

  //2-Constructeur DI
  constructor(
    private formBuilder: FormBuilder,
    private locService: LocatService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

   // convenience getter for easy access to form fields
   get f() { return this.formadd.controls; }


   ngOnInit(): void {
     this.id = this.route.snapshot.params['id'];
 
     if (this.id > 0) {
       this.loadData();
       this.btnText = "Update";
       this.title = "Edit Location";
     }
 
     this.formadd = this.formBuilder.group({
       locationId :'',
       streetAddress: ['', Validators.required],
       postalCode: ['', Validators.required],
       city: ['', Validators.required],
       stateProvince: ['', Validators.required],
       countryId: ['', Validators.required]
     });
   }
 
   //
   loadData() {
     this.locService.getById(this.id)
       .subscribe(x => this.formadd.patchValue(x))
   }
 
   //
   onSubmit() {
 
     this.submitted = true;
     // stop here if form is invalid
     if (this.formadd.invalid) {
       return;
     }
 
     this.loading = true;
 
     if (this.id > 0) {
       this.locService.update(this.formadd.value)
         .subscribe(
           data => {
             this.btnCancel();
           }
         )
     }
     else {
       this.locService.create(this.formadd.value)
         .subscribe(
           data => {
             this.btnCancel();
           }
         )
     }
   }
 
   btnCancel() {
    this.goToLocationList();
   }

   goToLocationList() {
    this.router.navigate(['/location']);
  }
}
