import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminEmp } from '@workspace/data';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ADMINS_API } from '../apis';

@Injectable({
  providedIn: 'root',
})
export class AdminsService {
  private __admins: BehaviorSubject<AdminEmp[]> = new BehaviorSubject<
    AdminEmp[]
  >([]);
  users: Observable<AdminEmp[]> = this.__admins.asObservable();

  constructor(private __http: HttpClient) {}

  getAdmins(): Observable<AdminEmp[]> {
    return this.__http.get<AdminEmp[]>(ADMINS_API.get!).pipe(
      tap((data) => {
        this.__admins.next(data);
      })
    );
  }

  deleteAdmin(user: AdminEmp): Observable<void> {
    return this.__http.delete<void>(ADMINS_API.delete! + user.id).pipe(
      tap(() => {
        this.__admins.next(
          this.__admins.value.filter((admin) => admin.id !== user.id)
        );
      })
    );
  }

  addAdmin(user: AdminEmp): Observable<void> {
    return this.__http.post<any>(ADMINS_API.post!, user).pipe(
      tap((data: any) => {
        this.__admins.next([...this.__admins.value, { ...user, ...data }]);
      })
    );
  }
}
