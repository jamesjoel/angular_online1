import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from  '@angular/forms';
import { MyserviceService } from '../services/myservice.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  // imgArr =[];
  uploadResponse;
  form: FormGroup;
  constructor( private mySer: MyserviceService, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      avatar: ['']
    });

  }
  // imgUpload(imagePic){

  //   console.log(imagePic.files[0]);
  //   let file = imagePic.files[0];
  //   let from = new FormData();
  //   from.append('imagePic', file);
  //   this.mySer.uploadFile('http://localhost:3000/api/fileupload', from).subscribe(res=>{
  //     this.imgArr.push(res);
  //   })
  // }
  
  fileMsg;
  
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('avatar').setValue(file);
    }
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('avatar', this.form.get('avatar').value);

    this.mySer.uploadFile(formData).subscribe(
      (res) => {
        this.uploadResponse = res;
          console.log(res.message);
          this.fileMsg = res.message;
      },
      (err) => {  
        console.log(err.message);
      }
    );
  }


}
