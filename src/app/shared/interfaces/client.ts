import { ClientStateEnum } from '../enums/client-state-enum.enum';

export interface Client {
  id:number;
  name:string;
  email:string;
  state:ClientStateEnum;
  ca:number;
  comment:string;
}
