import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class ApiDigimonsService {

  

  public Api = 'https://digimon-api.herokuapp.com/api/digimon';


  constructor(public http: HttpClient) { }

  public getDigimon():Observable<any>
  {

    return this.http.get(this.Api);
  }
  

}
