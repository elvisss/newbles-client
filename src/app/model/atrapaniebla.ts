export class Atrapaniebla {
  ID_ATRAPANIEBLAS:number;
  ID_DISPOSITIVO:number;
  ID_TIPO_TANQUE:number;
  ID_TIPO_DISENIO:number;
  ID_TIPO_MALLA:number;
  ID_ESTADO_ATRAPANIEBLAS:number;
  ANCHO:number;
  ALTO:number;
  LONGITUD:number;
  LATITUD:number;
  FECHA_VIGENCIA:string;
  HUMEDAD_PROMEDIO:number;
  OBSERVACION:string;
  USUARIO_CREACION:number;
  FECHA_CREACION:string;
  USUARIO_MODIFICACION:number;
  FECHA_MODIFICACION:string;
  ESTADO_REGISTRO:string;
}

export const estadoAtrapaniebla = {
    approve: 1,
    pending_creation: 2,
    pending_updating: 3,
    pending_delete: 4,
    pending_geo: 5
};