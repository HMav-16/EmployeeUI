import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Country } from '../_models/country';

 //1-liens API
 const baseUrl = environment.apiUrl + "/countries";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Country[]>(baseUrl);
  }
  
  getById(id: number) {
    return this.http.get<Country>(`${baseUrl}/${id}`);  
  }
  
}
