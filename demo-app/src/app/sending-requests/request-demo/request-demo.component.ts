import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-demo',
  templateUrl: './request-demo.component.html',
  styleUrls: ['./request-demo.component.scss']
})
export class RequestDemoComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  message = "";
  loading = true;

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    // The object passed to the request subscribe() method contains two callback functions
    // next() function is called if the request is successful
    // error() function is called if the request fails

    this.httpClient.get<SearchResults>('https://api.npms.io/v2/search?q=scope:angular').subscribe({
      next: data => {
        this.loading = false;
        this.message = `Total number of packages: ${data.total}`;
      },
      error: error => {
        this.loading = false;
        this.message = `Some error occured: ${error.message}`;
        console.error('There was an error!', error);
      }
    });
  }

}

interface SearchResults {
  total: number;
  results: Array<object>;
}
