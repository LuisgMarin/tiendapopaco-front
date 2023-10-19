import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  private userRole: string = '1';

  setUserRole(role: string): void {
    this.userRole = role;
  }

  getUserRole(): string {
    return this.userRole;
  }
}
