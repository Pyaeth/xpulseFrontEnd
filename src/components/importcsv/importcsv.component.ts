import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/entity/user';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';
import { Router } from '@angular/router';
//import { MdbFileUploadModule } from ;
import { first } from 'rxjs/operators';

@Component({
  selector: 'importcsv',
  templateUrl: './importcsv.component.html',
  styleUrls: ['./importcsv.component.scss'],
  providers: [UserserviceService],
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
    private userService: UserserviceService) {
  }

  file: File;

  onFileAdd(file: File) {
  this.file = file;
  }

  onFileRemove() {
  this.file = null;
  }
}