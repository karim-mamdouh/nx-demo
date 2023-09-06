import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emp } from '@workspace/data';
import { EMPS_API } from '../apis';
@Injectable({
  providedIn: 'root',
})
export class EmpsService {
  constructor(private __http: HttpClient) {}

  getEmpsList(): Observable<Emp[]> {
    return this.__http.get<Emp[]>(EMPS_API.get!);
  }
}
