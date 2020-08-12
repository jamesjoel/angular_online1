import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  url = environment.domain+"api/teacher";
  constructor(private _http : HttpClient) { }

  getAll(){
    return this._http.get<any>(this.url);
  }
  getTeacher(id){
    return this._http.get<any>(this.url+"/"+id);
  }
  insert(obj){
    return this._http.post<any>(this.url, obj);

  }
  update(obj) {
    return this._http.put<any>(this.url+"/"+obj._id, obj);

  }
  delete(obj) {
    return this._http.delete<any>(this.url + "/" + obj._id);

  }
}
