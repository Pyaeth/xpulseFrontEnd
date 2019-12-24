import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { User } from './entity/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'XpulseX-pulse: Tracking the pulse of your transactions.';
  private user: User;

  constructor(private dataService: DataService) {
    this.dataService.get_user_login().subscribe(
      (res: User) => {
        this.user = res;
      },
      err => alert('Error: ' + err)
    );
  }
  ngOnInit() {

  }
  onClickSubmit(formData) {
    console.log('username is:' + formData.email);
  }
}
