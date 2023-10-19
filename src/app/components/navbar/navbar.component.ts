import { Component } from '@angular/core';
import { UserRoleService } from 'src/app/services/user-role.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private userRoleService: UserRoleService) { }

  getUserRole(): string {
    return this.userRoleService.getUserRole();
  }

}
