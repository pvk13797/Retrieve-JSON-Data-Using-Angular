import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Retrieve JSON Data Using Angular';
  url = 'https://jsonplaceholder.typicode.com/posts';
  items = [];

  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe((data) => {
      console.log(data);

      for (let key in data)
        if (data.hasOwnProperty(key))
          this.items.push(data[key]);
    });
  }

  deleteRow(id) {
      for(let i = 0; i < this.items.length; i++) {
        if (this.items[i].id === id) {
          this.items.splice(i,1);
        }
      }
  }
}
