import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  productos:Producto[];

  constructor(public _productoService:ProductoService) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(){
    this._productoService.listarProductos()
    .subscribe((res:any) => this.productos = res.Productos)
  }

}
