import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeptService } from '../_services/dept.service';

@Component({
  selector: 'app-addoreditdept',
  templateUrl: './addoreditdept.component.html',
  styleUrls: ['./addoreditdept.component.css']
})
export class AddoreditdeptComponent implements OnInit {

    //Declaration des variables
    formadd!: FormGroup;
    id: number;
    loading = false;
    submitted = false;
    btnText: string = "Save";
    title: string = "New Departement";

    //2-Constructeur DI
  constructor(
    private formBuilder: FormBuilder,
    private deptService: DeptService,
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
      this.title = "Edit Departement";
    }

    this.formadd = this.formBuilder.group({
      deptId: 0,
      deptName: ['', Validators.required],
      managerId: ['', Validators.required],
      locationId: ['', Validators.required]

    });
  }

    //
    loadData() {
      this.deptService.getById(this.id)
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
      this.deptService.update(this.formadd.value)
        .subscribe(
          data => {
            this.btnCancel();
          }
        )
    }
    else {
      this.deptService.create(this.formadd.value)
        .subscribe(
          data => {
            this.btnCancel();
          }
        )
    }
  }

  btnCancel() {
    this.goToDeptList();
  }

  goToDeptList() {
    this.router.navigate(['/departement']);
  }
}
