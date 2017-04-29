import { Component, OnInit } from '@angular/core';
import {ImageZoomModule} from 'angular2-image-zoom';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  category:string= 'Categories';
  list: any[]=[{
    "productId":2,
    "productName":'Anarkali suit',
    "productColor":'green',
    "imageUrl":'../../../assets/images/greenanarkalismall.jpg',
    "bigUrl":'../../../assets/images/greenanarkali.jpg'
  }]
  

  constructor() { }

  ngOnInit() {
  }

}
