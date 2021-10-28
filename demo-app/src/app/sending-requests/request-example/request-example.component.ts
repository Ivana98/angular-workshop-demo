import { Component, OnInit } from '@angular/core';
import { IWorker } from '../model/iworker';
import { RequestExampleService } from '../service/request-example.service';

@Component({
  selector: 'app-request-example',
  templateUrl: './request-example.component.html',
  styleUrls: ['./request-example.component.scss']
})
export class RequestExampleComponent implements OnInit {

  constructor(private requestExampleService: RequestExampleService) { }

  ngOnInit(): void {
  }

  workerList : IWorker[] | undefined;

  getAllWorkers() {
    this.requestExampleService.getAll()
      .subscribe(
        (data: IWorker[]) => this.workerList = data
      );
  }

  deleteWorker() {
    this.requestExampleService.delete(1)
      .subscribe();
  }

}
