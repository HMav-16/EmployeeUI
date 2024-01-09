import { Component, OnInit } from '@angular/core';
import { Job } from '../_models/job';
import { JobService } from '../_services/job.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {

     //1- Declaration de tableaux
     jobList: Job[]=[];
     totalrow: number =0;
     isLoading: boolean = false;

     constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.loadJobs();
  }
  //GET Location
  loadJobs(){
    this.isLoading = true;

     this.jobService.getAll().pipe(first())
        .subscribe(d =>{
          this.jobList =d;
          this.totalrow = d.length;
          console.log(d);
          this.isLoading = false;
        });
  }

      /**
* Method search Title Jobs
* @param event 
*/
searchJobs(event: any) {
let filtered = null;

filtered = this.jobList.filter((val, index) => {
  let targetKey =  val.title.toLowerCase();
  let searchKey = event.toLowerCase();
  return targetKey.includes(searchKey);
});
  
  this.jobList = filtered;

}
  //DELETE Jobs
  delete(job: Job){
    this.jobService.delete(job.jobId).pipe(first())
      .subscribe(() => {
        this.loadJobs();
      })
  }


}
