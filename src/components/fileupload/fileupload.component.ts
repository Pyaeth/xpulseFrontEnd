import {Component, Input, ViewChild, ElementRef} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'file-upload',
  template: '<input type="file" [multiple]="multiple" #fileInput>'
})
export class FileUploadComponent {
  @Input() multiple: boolean = false;
  @ViewChild('fileInput', {static:false}) inputEl: ElementRef;
  private serverUrl = 'http://localhost:8081';

  constructor(private httpClient: HttpClient,
    private router: Router) {}

  upload() {
    const requestOptions = {
      headers : new HttpHeaders({'Content-Type': 'multipart/form-data'
    }),
    };
      let inputEl: HTMLInputElement = this.inputEl.nativeElement;
      let fileCount: number = inputEl.files.length;
      let formData = new FormData();
      if (fileCount > 0) { // a file was selected
          for (let i = 0; i < fileCount; i++) {
              formData.append('file[]', inputEl.files.item(i));
          }
          this.httpClient.post<any>(`${this.serverUrl}/uploadCSV`, formData, requestOptions)
            .pipe(map(res => JSON.stringify(res))).pipe(first())
            .subscribe(
              data => {
                console.log(data);
                this.router.navigateByUrl('home');
              },
              error => {
                console.log(error);
              });
      }
  }
}