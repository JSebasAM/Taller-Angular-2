import { Component, Input } from '@angular/core';
import { PedidosData } from '../../interfaces/pedidos.interface';
import { BadgeType } from '../../../shared/interfaces/badge.interface';

@Component({
  selector: 'app-table-pedidos',
  standalone: false,
  templateUrl: './table-pedidos.component.html',
  styleUrl: './table-pedidos.component.scss',
})
export class TablePedidosComponent {

    @Input() pedidos: PedidosData[] = [];
  
    statusMap: Record<string, BadgeType> = {
    'Cancelado': 'danger',
    'Pendiente': 'warning',
    'Enviado': 'primary',
    'Entregado': 'success',
  };
}

