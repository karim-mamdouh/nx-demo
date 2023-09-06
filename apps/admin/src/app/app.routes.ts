import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./emps-list/emps-list.component').then(
        (component) => component.EmpsListComponent
      ),
  },
  {
    path: 'add-admin',
    loadComponent: () =>
      import('./add-admin/add-admin.component').then(
        (component) => component.AddAdminComponent
      ),
  },
];
