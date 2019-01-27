import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config.moule';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(public http:HttpClient) { }

  listarProductos(){
    let url = URL_SERVICIOS + '/producto'
    return this.http.get(url)
  }

  Subirfoto(id:string,imagen:string){
    let url = URL_SERVICIOS + '/img/producto/' + id
    return this.http.put(url,{imagen:imagen});
  }

  agregar(producto:Producto){
    let url = URL_SERVICIOS + '/producto'
    return this.http.post(url,producto);
  }

  obtenerProducto(id:string){
    let url = `${URL_SERVICIOS}/producto/${id}`
    return this.http.get(url);
  }



}
