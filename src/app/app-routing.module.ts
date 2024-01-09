import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmplistComponent } from './employee/emplist.component';
import { AddoreditComponent } from './employee/addoredit.component';
import { DeptlistComponent } from './departement/deptlist.component';
import { AddoreditdeptComponent } from './departement/addoreditdept.component';
import { AddoreditlocatComponent } from './location/addoreditlocat.component';
import { AddoreditjobComponent } from './jobs/addoreditjob.component';
import { CntrlistComponent } from './countrie/cntrlist.component';
import { RegionlistComponent } from './region/regionlist.component';
import { LoclistComponent } from './location/loclist.component';
import { JoblistComponent } from './jobs/joblist.component';

const routes: Routes = [
  { path: '', component: EmplistComponent },
  { path: 'employee/add', component: AddoreditComponent },
  { path: 'employee/edit/:id', component: AddoreditComponent },
  { path: 'departement', component: DeptlistComponent },
  { path: 'departement/add', component: AddoreditComponent },
  { path: 'departement/edit/:id', component: AddoreditdeptComponent },
  { path: 'location', component: LoclistComponent },
  { path: 'location/add', component: AddoreditlocatComponent },
  { path: 'location/edit/:id', component: AddoreditlocatComponent },
  { path: 'jobs', component: JoblistComponent },
  { path: 'jobs/add', component: AddoreditjobComponent },
  { path: 'jobs/edit/:id', component: AddoreditjobComponent },
  { path: 'countrie', component: CntrlistComponent },
  { path: 'region', component: RegionlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
