import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  imageObject:any[]=[
    {
      image : "./assets/1.jpg",
      thumbImage:"./assets/1.jpg",
      alt : "",
      title : "First Image"
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

  constructor() { }

  ngOnInit(): void {
  }

}
