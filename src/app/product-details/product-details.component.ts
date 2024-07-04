import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { DataService } from '../services/data.service';
import { productModelDTO } from '../models/productModelDTO';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  products: productModelDTO[] = [];


constructor(private service:DataService, private router: Router){}

ngOnInit(): void{}

getProducts(){
  this.service.getProducts().subscribe((resp:any) => {
    this.products = resp;
}

viewProductDetails(productId: number): void {
  this.router.navigate(['/products', productId]);
}

onCheckboxChange(event:any, worksheetid:any){
  if(this.checks){
    if(!event.target.checked)
    {
      if(this.checkBoxitems.length>0)
      {
        var sildir =this.checkBoxitems.indexOf(worksheetid);
        this.checkBoxitems.splice(sildir,1)
   //     console.log("Tek tek kaldırmada liste",this.checkBoxitems)
      }
    }else{
  //    console.log("Buraya Geldi valla");

      this.checkBoxitems.push(worksheetid);
 //     console.log("Tek tek eklemede liste",this.checkBoxitems)

      
    }
  }else{
    if(worksheetid!=undefined){
  
   
      
      let ws = this.secilenBildirim.filter((x:any)=> x ===worksheetid);
      let ind = this.secilenBildirim.findIndex((x:any)=> x===worksheetid);
  //    console.log("Index Of Eleman :",ind);
      if(ind != -1){
        this.secilenBildirim.splice(ind,1)
  //   console.log("BU Listede seçimi kaldırdıktan sonraki hali",this.secilenBildirim);

      }
      else
      {
        this.secilenBildirim.push(worksheetid);
      }
    }
    // else
    // return
  }
//   

  //console.log("CHCKBX", this.checkBoxitems,this.checks)
}

}