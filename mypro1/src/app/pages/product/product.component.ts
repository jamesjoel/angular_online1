import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  allProduct:any[]=[];

  /*
  allPro = [
    {
      title : "",
      price : "",
      image_path : "",
      imageObject : [
            {
          image: "./assets/1.jpg",
          thumbImage: "./assets/1.jpg",
          alt: "",
          title: "First Image"
          },
          {
            image: "./assets/2.jpg",
            thumbImage: "./assets/2.jpg",
            alt: "",
            title: "First Image"
          }
      ]
    }
  ]




  */

  imageObject: any[] = [
    {
      image: "./assets/1.jpg",
      thumbImage: "./assets/1.jpg",
      alt: "",
      title: "First Image"
    },
    {
      image: "./assets/2.jpg",
      thumbImage: "./assets/2.jpg",
      alt: "",
      title: "First Image"
    }, {
      image: "./assets/3.jpg",
      thumbImage: "./assets/3.jpg",
      alt: "",
      title: "First Image"
    }, {
      image: "./assets/4.jpg",
      thumbImage: "./assets/4.jpg",
      alt: "",
      title: "First Image"
    }

  ]

  constructor(private _proService : ProductService, private _actRoute : ActivatedRoute) {
    // _actRoute.paramMap.subscribe(params=>{

    // })







   }

  ngOnInit(): void {
    this._proService.getAll().subscribe(res=>{
      this.allProduct = res;
    })
  }

}
