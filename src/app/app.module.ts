import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmplistComponent } from './employee/emplist.component';
import { AddoreditComponent } from './employee/addoredit.component';
import { HeaderComponent } from './head/header.component';
import { LoaderComponent } from './load/loader.component';
import { DeptlistComponent } from './departement/deptlist.component';
import { AddoreditdeptComponent } from './departement/addoreditdept.component';
import { LoclistComponent } from './location/loclist.component';
import { AddoreditlocatComponent } from './location/addoreditlocat.component';
import { JoblistComponent } from './jobs/joblist.component';
import { AddoreditjobComponent } from './jobs/addoreditjob.component';
import { CntrlistComponent } from './countrie/cntrlist.component';
import { RegionlistComponent } from './region/regionlist.component';

@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    AddoreditComponent,
    HeaderComponent,
    LoaderComponent,
    DeptlistComponent,
    AddoreditdeptComponent,
    LoclistComponent,
    AddoreditlocatComponent,
    JoblistComponent,
    AddoreditjobComponent,
    CntrlistComponent,
    RegionlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
