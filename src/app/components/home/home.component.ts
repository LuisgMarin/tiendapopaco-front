import { Component } from '@angular/core';
import { UserRoleService } from 'src/app/services/user-role.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private userRoleService: UserRoleService) { }

  getUserRole(): string {
    return this.userRoleService.getUserRole();
  }
}
