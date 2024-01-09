import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Dept } from '../_models/dept';

 //1-liens API
 const baseUrl = environment.apiUrl + "/departements";


@Injectable({
  providedIn: 'root'
})
export class DeptService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Dept[]>(baseUrl);
  }

  getById(id: number) {
    return this.http.get<Dept>(`${baseUrl}/${id}`);  
  }

  create(params: any) {
    return this.http.post(baseUrl, params, this.httpOptions);
  }

  update(params: any) {
    return this.http.put(`${baseUrl}`, params, this.httpOptions);
  }

  delete(id: number) {
    return this.http.delete(`${baseUrl}/${id}`,this.httpOptions);
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    }), responseType: 'text' as 'json'
  };

}
