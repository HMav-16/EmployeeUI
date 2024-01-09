import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Reg } from '../_models/reg';

 //1-liens API
 const baseUrl = environment.apiUrl + "/regions";

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor(private http: HttpClient) { }

 getAll() {
  return this.http.get<Reg[]>(baseUrl);
}

getById(id: any) {
  return this.http.get<Reg>(`${baseUrl}/${id}`);  
}
}
