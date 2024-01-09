import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Locat } from '../_models/locat';


 //1-liens API
 const baseUrl = environment.apiUrl + "/locations";

@Injectable({
  providedIn: 'root'
})
export class LocatService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Locat[]>(baseUrl);
  }

  getById(id: any) {
    return this.http.get<Locat>(`${baseUrl}/${id}`);  
  }

  create(params: any) {
    return this.http.post(baseUrl, params, this.httpOptions);
  }

  update(params: any) {
    return this.http.put(`${baseUrl}`, params, this.httpOptions);
  }

  delete(id: any) {
    return this.http.delete(`${baseUrl}/${id}`,this.httpOptions);
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    }), responseType: 'text' as 'json'
  };

}
