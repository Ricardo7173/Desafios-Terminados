import { Component } from '@angular/core';
import { DatabaseService } from "src/app/database.service";
import { Product } from "src/app/products";
import { Router } from "@angular/router";
import { ConfirmationService } from 'primeng/api';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css'],
  styles: [
    `
      :host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
      }
    `,
  ],
  providers: [],
})
export class ProductAdminComponent {
  products: Product [] = [];
  id:Number = 0;
  status: string = "";
  errorMessage: any;
  editProductForm = this.formBuilder.group({
    idUpdate: "",
    nameUpdate: "",
  });

  

    constructor(
      private database: DatabaseService,
      private confirmationService: ConfirmationService,
      private formBuilder: FormBuilder,
      private router: Router
    ) {
  
    
    this.database.getItems().subscribe(res => {
      console.log(res);
      this.products = res;
    });
  }

  delete(id: string) {
    this.confirmationService.confirm({
      message: "¿Deseas eliminar el producto?",
      accept: () => {
        console.log("Eliminado registro con Id = " + id);
        this.database.deleteProduct(id).subscribe({
          next: (data) => {
            this.status = "Delete successful";
            this.router.navigate(["/"]);
          },
          error: (error) => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          },
        });
      },
    });
  }

  update() {
    let p = {
      id: Number(this.id),
      name: String(this.editProductForm.value.nameUpdate),
        };
    this.confirmationService.confirm({
      message: "¿Deseas Actualizar el producto?",
      accept: () => {
        console.log("Actualizado con el ID = " + p.id);
        this.database.editProduct(p.id, p.name).subscribe({
          next: (data) => {
            this.status = "Update successful";
            window.location.reload();
          },
          error: (error) => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          },
        });
      },
    });
  }

   
  /*Agregado de producto*/
  addProductForm = this.formBuilder.group({
    id: '',
    name: "",
    description: "",
    price: 0,
    images: ["motorola.jpg"]
  });


  onSubmit(): void {
    let p =  {
      id: Number(this.addProductForm.value.id),
      name: this.addProductForm.value.name,
      description: this.addProductForm.value.description,
      price: this.addProductForm.value.price,
      images: this.addProductForm.value.images,
    };




    this.database.addProduct(p).subscribe({
 
      next: (data) => {
        this.status = "Add successful";
        this.router.navigate(["/"]);
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      },
    });    
    console.warn('Your order has been submitted', this.addProductForm.value);
    this.addProductForm.reset();
  }

  showDialog(id: number) {
    this.display = true;
    this.id= id;
  }
display: boolean = false;
}



