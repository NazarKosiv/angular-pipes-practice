import { Pipe, PipeTransform } from '@angular/core';
import {Server} from './models/server.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(servers: Server[], sortBy: string): Server[] {
    if (servers.length > 1) {
      return servers.sort((a, b) => {
        if (a[sortBy] > b[sortBy]) {
          return 1;
        } else if (a[sortBy] < b[sortBy]) {
          return -1;
        } else {
          return 0;
        }
      });
    }
  }

}
