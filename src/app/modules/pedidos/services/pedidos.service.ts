import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PEDIDOS_DATA } from '../../../core/config/pedidos.config';
import { PedidosData } from '../interfaces/pedidos.interface';


@Injectable({
  providedIn: 'root',
})
export class PedidosService {

  getAllPedidos(): Observable<PedidosData[]>{
    return of(PEDIDOS_DATA);
  }
}
