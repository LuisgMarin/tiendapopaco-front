import { Component } from '@angular/core';
import { UserRoleService } from 'src/app/services/user-role.service';

@Component({
  selector: 'app-offer-update',
  templateUrl: './offer-update.component.html',
  styleUrls: ['./offer-update.component.css']
})
export class OfferUpdateComponent {
  constructor(private userRoleService: UserRoleService) {}

  ngOnInit(): void {
    this.userRoleService.setUserRole('2');
  }
}
