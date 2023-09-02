import {Component} from '@angular/core';
import aws_exports from '../aws-exports';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  endpoint = aws_exports['aws_cloud_logic_custom']
    .find((resource: any) => resource.name === 'scgotenberg')
    .endpoint;

  constructor(private readonly http: HttpClient) {
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if(!file) {
      return;
    }

    const formData = new FormData();
    formData.set('files', file);

    this.http.post(
      `${this.endpoint}/forms/libreoffice/convert`,
      formData,
      {observe: 'response', responseType: 'blob'}
    ).subscribe(({body}) => {
      if(!body) {
        return;
      }

      const url = URL.createObjectURL(body)
      window.open(url);
    });
  }
}
