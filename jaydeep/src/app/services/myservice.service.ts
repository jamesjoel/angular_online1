import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {


  SERVER_URL: string = "http://localhost/serverAPI/";

  constructor(private httpClient: HttpClient) { }

  // uploadFile(api, obj){
  //   return this.httpClient.post<any>(api, obj);
  // }

  public uploadFile(data) {
    let uploadURL = `${this.SERVER_URL}/upload.php`;
    return this.httpClient.post<any>(uploadURL, data);
  }


}
