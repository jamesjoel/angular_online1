import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  product:any;
  constructor(private _proService : ProductService, private _actRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this._actRoute.paramMap.subscribe(params=>{
      let id =params.get("id");
      this._proService.getProdcutById(id).subscribe(res=>{
        console.log(res);
        this.product = res;
      })
    })
  }

}
