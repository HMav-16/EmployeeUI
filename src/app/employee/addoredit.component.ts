import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpService } from '../_services/emp.service';

@Component({
  selector: 'app-addoredit',
  templateUrl: './addoredit.component.html',
  styleUrls: ['./addoredit.component.css']
})
export class AddoreditComponent implements OnInit {

  //Declaration des variables
  formadd!: FormGroup;
  id: number;
  loading = false;
  submitted = false;
  btnText: string = "Save";
  title: string = "New Employee";

  //2-Constructeur DI
  constructor(
    private formBuilder: FormBuilder,
    private empService: EmpService,
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
      this.title = "Edit Employee";
    }

    this.formadd = this.formBuilder.group({
      empId: 0,
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      jobId: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      departementId: ['', Validators.required],
      hireDate: ['', Validators.required],
      managerId: ['', Validators.required],
      comissionPCT: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }

  //
  loadData() {
    this.empService.getById(this.id)
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
      this.empService.update(this.formadd.value)
        .subscribe(
          data => {
            this.btnCancel();
          }
        )
    }
    else {
      this.empService.create(this.formadd.value)
        .subscribe(
          data => {
            this.btnCancel();
          }
        )
    }
  }

  btnCancel() {
    this.router.navigate([''])
  }

}
