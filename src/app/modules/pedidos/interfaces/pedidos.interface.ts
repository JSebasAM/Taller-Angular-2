export interface PedidosData {
  id: number;
  customerName: string;
  orderDate: string;
  totalAmount: number;
  status: 'Pendiente' | 'Enviado' | 'Entregado' | 'Cancelado'; 
  paymentMethod: 'Efectivo' | 'Tarjeta' | 'Nequi' | 'DaviPlata';
}