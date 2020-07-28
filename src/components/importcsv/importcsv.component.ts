import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/entity/user';
import { UserService } from 'src/app/services/userservice/user.service';
import { Router } from '@angular/router';
//import { MdbFileUploadModule } from ;
import { first } from 'rxjs/operators';

@Component({
  selector: 'importcsv',
  templateUrl: './importcsv.component.html',
  styleUrls: ['./importcsv.component.scss'],
  providers: [UserService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImportCSVComponent implements OnInit {
  user: User;
  
  ngOnInit() {
    if (sessionStorage.getItem('user') == null) {
      this.router.navigateByUrl('/');
    }
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  constructor(
    private router: Router,
    private userService: UserService) {
  }

  file: File;

  onFileAdd(file: File) {
  this.file = file;
  }

  onFileRemove() {
  this.file = null;
  }
}