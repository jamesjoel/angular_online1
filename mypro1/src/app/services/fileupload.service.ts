import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  constructor(private _http : HttpClient) { }

  upload(api, obj){
    return this._http.post<any>(api, obj);
  }

}
