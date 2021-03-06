import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PersonRole } from '../model/person-role';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const people = [
      { id: 1, name: 'Dr Nice', email: 'nice@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'ghdf45' },
      { id: 2, name: 'Narco', email: 'narco@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'g4f45ss' },
      { id: 3, name: 'Bombasto', email: 'bombasto@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'fdhfgd7' },
      { id: 4, name: 'Celeritas', email: 'celeritas@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'c1d4d5' },
      { id: 5, name: 'Magneta', email: 'magenta@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'a5afnjfk' },
      { id: 6, name: 'RubberMan', email: 'rubber@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'dnncncncncn' },
      { id: 7, name: 'Dynama', email: 'dynama@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: '4d5s4ds5' },
      { id: 8, name: 'Dr IQ', email: 'dr.iq@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 's5dd4ssa1' },
      { id: 9, name: 'Magma', email: 'magma@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'ajjg41sf4sw' },
      { id: 10, name: 'Tornado', email: 'tornado@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'dsdkhsjdhsj41' },

      { id: 11, name: 'Dr Nice 2', email: 'nice@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'ghdf45' },
      { id: 12, name: 'Narco 2', email: 'narco@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'g4f45ss' },
      { id: 13, name: 'Bombasto 2', email: 'bombasto@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'fdhfgd7' },
      { id: 14, name: 'Celeritas 2', email: 'celeritas@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'c1d4d5' },
      { id: 15, name: 'Magneta 2', email: 'magenta@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'a5afnjfk' },
      { id: 16, name: 'RubberMan 2', email: 'rubber@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'dnncncncncn' },
      { id: 17, name: 'Dynama 2', email: 'dynama@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: '4d5s4ds5' },
      { id: 18, name: 'Dr IQ 2', email: 'dr.iq@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 's5dd4ssa1' },
      { id: 19, name: 'Magma 2', email: 'magma@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'ajjg41sf4sw' },
      { id: 20, name: 'Tornado 2', email: 'tornado@xyz.co', address: { city: 'Chicago', street: '2010 Patterson Fork Road'}, password: 'dsdkhsjdhsj41' },
    ];
    return { people };
  }

}
