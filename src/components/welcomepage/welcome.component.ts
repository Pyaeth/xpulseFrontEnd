import {Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {
  userForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

}