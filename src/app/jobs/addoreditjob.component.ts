import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../_services/job.service';

@Component({
  selector: 'app-addoreditjob',
  templateUrl: './addoreditjob.component.html',
  styleUrls: ['./addoreditjob.component.css']
})
export class AddoreditjobComponent implements OnInit {

     //Declaration des variables
     formadd!: FormGroup;
     id: string | null;
     loading = false;
     submitted = false;
     btnText: string = "Save";
     title: string = "New Job";
 
       //2-Constructeur DI
  constructor(
    private formBuilder: FormBuilder,
    private jobService: JobService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

   // convenience getter for easy access to form fields
   get f() { return this.formadd.controls; }


   ngOnInit(): void {
     this.id = this.route.snapshot.params['id'];
 
     if (this.id !== null) {
       this.loadData();
       this.btnText = "Update";
       this.title = "Edit Location";
     }
 
     this.formadd = this.formBuilder.group({
      jobId :'',
      title: ['', Validators.required],
      minSalairy: ['', Validators.required],
      maxSalairy: ['', Validators.required]
     });
   }
 
   //
   loadData() {
     this.jobService.getById(this.id)
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
 
     if (this.id !== null) {
       this.jobService.update(this.formadd.value)
         .subscribe(
           data => {
             this.btnCancel();
           }
         )
     }
     else {
       this.jobService.create(this.formadd.value)
         .subscribe(
           data => {
             this.btnCancel();
           }
         )
     }
   }
 
   btnCancel() {
     this.goToJobsList();
   }
   
   goToJobsList() {
    this.router.navigate(['/jobs']);
  }
}
