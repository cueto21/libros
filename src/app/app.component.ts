import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { consultaProducts, consultaLibros, detail , checkout} from './librosService/libro.types';
import { LibroService } from './librosService/libro.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  listaLibros: consultaProducts[] = [];
  itemsCarrito : number= 0;
  detail: detail[] = [];
  orden: any[] = [];
  opcion = 0;
  nombre: string = '';

  constructor(
    private _libroService: LibroService
  ) {}

  ngOnInit(): void {
    this.consultarLibros();
  }

  consultarLibros() {
    this._libroService.getLibros().subscribe(
        (user: consultaLibros) => {
            this.listaLibros = user.data;
        },
        (response) => {}
    );
}

sumarCarrito(id: any,price: any,name: any) {
  this.itemsCarrito = this.itemsCarrito+1
  let detalle = {
    product_id: id,
    price: price,
    quantity: 1,
    name: name
  }
  console.log(detalle);
  this.orden.push(detalle); 
  
}

carrito(){
  this.opcion = 1;
}

libros(){
  this.opcion = 0;
}

comprar(name: string){

  this._libroService.checkout(name,this.orden).subscribe(
    (user: checkout) => {
      console.log('Compra realizada!')
    },
    (response) => {}
);
}



  title = 'libros-app';
}
