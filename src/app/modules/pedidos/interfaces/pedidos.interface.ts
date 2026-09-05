/**
 * Estado posible de un pedido.
 *
 * @remarks
 * Este tipo restringe los estados a los valores predefinidos:
 * - `'Pendiente'` — El pedido ha sido registrado pero aún no se ha procesado.
 * - `'Enviado'` — El pedido está en camino hacia el cliente.
 * - `'Entregado'` — El pedido fue recibido exitosamente por el cliente.
 * - `'Cancelado'` — El pedido fue anulado antes de ser entregado.
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const estado: PedidoStatus = 'Enviado';
 * ```
 */
export type PedidoStatus = 'Pendiente' | 'Enviado' | 'Entregado' | 'Cancelado';

/**
 * Método de pago aceptado para un pedido.
 *
 * @remarks
 * Limita los métodos de pago a los canales habilitados en el sistema:
 * - `'Efectivo'`
 * - `'Tarjeta'`
 * - `'Nequi'`
 * - `'DaviPlata'`
 *
 * @example
 * ```ts
 * const pago: PaymentMethod = 'Nequi';
 * ```
 */
export type PaymentMethod = 'Efectivo' | 'Tarjeta' | 'Nequi' | 'DaviPlata';

/**
 * Interfaz que representa un pedido del sistema.
 *
 * Contiene la información necesaria para identificar, mostrar y gestionar
 * un pedido dentro de la aplicación.
 *
 * @remarks
 * Cada pedido debe tener un `id` único, el nombre del cliente (`customerName`),
 * la fecha de creación (`orderDate`), el monto total (`totalAmount`),
 * el estado actual (`status`) y el método de pago empleado (`paymentMethod`).
 *
 * @example
 * ```ts
 * const pedido: PedidosData = {
 *   id: 1,
 *   customerName: 'Carlos Ramirez',
 *   orderDate: '2026-09-01',
 *   totalAmount: 25500,
 *   status: 'Entregado',
 *   paymentMethod: 'Tarjeta'
 * };
 * ```
 */
export interface PedidosData {
  /** Identificador único del pedido */
  id: number;

  /** Nombre completo del cliente que realizó el pedido */
  customerName: string;

  /** Fecha en que se registró el pedido (formato `YYYY-MM-DD`) */
  orderDate: string;

  /** Monto total del pedido en pesos colombianos */
  totalAmount: number;

  /** Estado actual del pedido */
  status: PedidoStatus;

  /** Método de pago utilizado para el pedido */
  paymentMethod: PaymentMethod;
}