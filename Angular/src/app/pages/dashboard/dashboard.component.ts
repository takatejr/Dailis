import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  isAllowed() {
    if (this.auth.User.access.value.includes(2)) {
      return true
    } else {
      return false
    }
  }
}
