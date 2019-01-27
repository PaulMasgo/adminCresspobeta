import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from 'src/app/models/producto.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from '../../models/categoria.model';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styles: []
})
export class ViewProductComponent implements OnInit {
  
  categoria:Categoria[];
  producto:Producto;

  constructor(public route:ActivatedRoute,public _productoService:ProductoService,public _categoriaService:CategoriaService) { }

  ngOnInit() {
    this.llamarProducto();
    this.cargarCategorias();
  }

  llamarProducto(){
    let id = this.route.snapshot.paramMap.get('id');
    this._productoService.obtenerProducto(id)
      .subscribe((res:any) => this.producto = res )
  }

  cargarCategorias(){
    this._categoriaService.listarCategorias()
    .subscribe((res:any) => {
    this.categoria = res
    })
  };

}
