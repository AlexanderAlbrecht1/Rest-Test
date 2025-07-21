import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-duck',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './duck.component.html',
  styleUrl: './duck.component.scss'
})
export class DuckComponent {

  baseUrl = "https://random-d.uk/api/v2/quack"
  CurrentApiUrl = ""

  constructor(private http : HttpClient) {}

  generateURL() {
   return this.http.get<{url:string}>(this.baseUrl)
  }

  buttonClicked() {
    this.generateURL().subscribe((response) => this.CurrentApiUrl = response.url )
  }

}
