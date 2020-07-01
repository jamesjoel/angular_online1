import { Component, OnInit } from '@angular/core';
import { FileuploadService } from '../../services/fileupload.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _uploadServ : FileuploadService) { }

  imgArr=[];
  ngOnInit(): void {
  }
  demo(a){
    
  }
  doUpload(image){
    
    // console.log(image.files[0]);
    let file = image.files[0];
    let form = new FormData();
    form.append("image", file); // "photo is the file name"
    this._uploadServ.upload("http://localhost:3000/api/fileupload", form).subscribe(res=>{
      this.imgArr.push(res);
    })
  }

}
//  $_FILES['image']['name']

