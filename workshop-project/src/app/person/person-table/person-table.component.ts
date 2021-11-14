import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from 'src/app/data/model/person';
import { HttpReqService } from 'src/app/services/http-req.service';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.scss']
})
export class PersonTableComponent implements OnInit {

  prikazaneKolone: string[] = ['id', 'name', 'email', 'address'];
  ELEMENT_DATA: Person[] = [
    { id: 1, name: 'Dr Nice', email: 'nice@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'ghdf45' },
    { id: 2, name: 'Narco', email: 'narco@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'g4f45ss' },
    { id: 3, name: 'Bombasto', email: 'bombasto@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'fdhfgd7' },
    { id: 4, name: 'Celeritas', email: 'celeritas@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'c1d4d5' },
    { id: 5, name: 'Magneta', email: 'magenta@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'a5afnjfk' },
    { id: 6, name: 'RubberMan', email: 'rubber@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'dnncncncncn' },
    { id: 7, name: 'Dynama', email: 'dynama@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: '4d5s4ds5' },
    { id: 8, name: 'Dr IQ', email: 'dr.iq@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 's5dd4ssa1' },
    { id: 9, name: 'Magma', email: 'magma@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'ajjg41sf4sw' }
  ];
  mojiPodaci = new MatTableDataSource<Person>(this.ELEMENT_DATA);

  constructor(private httpReq: HttpReqService) { }

  ngOnInit(): void {
    //this.fetchData();
  }

  fetchData() {
    /*
    this.httpReq.getAll().subscribe(
      data => { this.ELEMENT_DATA = data; }
    );
    */
  }

}
