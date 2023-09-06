import { Emp } from './Emp';

export interface AdminEmp extends Emp {
  accessLevel: number;
}
