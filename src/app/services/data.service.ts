import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Componente} from '../components/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getUsers(){
  	return this.http.get("https://jsonplaceholder.typicode.com/users");
  }


  getMenu(){
  	return this.http.get<Componente[]>("assets/data/menu.json");
  }
}
