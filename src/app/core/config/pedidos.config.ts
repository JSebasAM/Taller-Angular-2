import { PedidosData } from "../../modules/pedidos/interfaces/pedidos.interface";

export const PEDIDOS_DATA: PedidosData[] = [
  {
    id: 1,
    customerName: 'Carlos Ramirez',
    orderDate: '2026-09-01',
    totalAmount: 25500,
    status: 'Entregado',
    paymentMethod: 'Tarjeta'
  },
  {
    id: 2,
    customerName: 'Maria Fernanda Lopez',
    orderDate: '2026-09-02',
    totalAmount: 12700,
    status: 'Pendiente',
    paymentMethod: 'Nequi'
  },
  {
    id: 3,
    customerName: 'Andres Felipe Ortiz',
    orderDate: '2026-09-02',
    totalAmount: 45000,
    status: 'Enviado',
    paymentMethod: 'Efectivo'
  },
  {
    id: 4,
    customerName: 'Diana Marcela Gomez',
    orderDate: '2026-09-03',
    totalAmount: 8200,
    status: 'Cancelado',
    paymentMethod: 'DaviPlata'
  },
  {
    id: 5,
    customerName: 'Jorge Eduardo Silva',
    orderDate: '2026-09-04',
    totalAmount: 32000,
    status: 'Pendiente',
    paymentMethod: 'Tarjeta'
  }
];