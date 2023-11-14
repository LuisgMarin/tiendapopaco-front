import { Rol } from './roles.type';

export interface User {
  usuario: string;
  rol: Rol;
}

export interface UserWithToken extends User {
  token: string;
}
