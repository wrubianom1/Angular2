import { Component, OnInit, ViewChild } from '@angular/core';
import { TableData } from './table-data';
import { ServicioPersonaService } from './servicio-persona.service';
import { PersonaDTO } from '../clases/persona-dto';
import { ProductDTO } from '../clases/product-dto';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [ServicioPersonaService]
})


export class PersonaComponent implements OnInit {

  titulo = 'hola mundo';
  pager: any = {};
  items: PersonaDTO[];

  // paged items
  pagedItems: any[];

  /* constructor() {
     //personaService.getAllPersonas().then(p => this.items = p)
   }
 
   ngOnInit() {
 
   }*/
  //private data: Array<any> = TableData;
  private data: PersonaDTO[];
  private dataProd: ProductDTO[];
  people: PersonaDTO[] = [];


  getdata: String;

  public constructor(private personaService: ServicioPersonaService) {

    //personaService.getAllPersonas().then(p => this.items = p)

    /*this.personaService.getComments()
      .then(
      dataProd => this.getdata = JSON.stringify(dataProd), //Bind to view
      err => {
        // Log errors if any
        console.log(err);
        // alert('Entro por que tiene error');
      });
*/

    this.personaService.getProductos()
      .subscribe(
      dataProd => this.getdata = JSON.stringify(dataProd),
      //comments => this.dataProd = comments, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });


    /*this.personaService.getComments()
      .subscribe(
      dataEnt => this.people = dataEnt,
      err => {

        console.log(err);
      });*/
    /*this.personaService.getComments()
      .subscribe(
      comments => this.people = comments, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
*/
    // personaService.getComments().then(p => this.people = p);


    //  alert('el tamaño es ' + this.people.length);
    this.data = personaService.getAllPersonas();
    //data = items;
    this.length = this.data.length;
  }

  public ngOnInit(): void {
    this.onChangeTable(this.config);
  }



  id: number;
  title: string = '';
  complete: boolean = false;
  apellido: string = '';


  public rows: Array<any> = [];
  public columns: Array<any> = [

    {
      title: 'celular',
      name: 'celular',
      sort: true,
      filtering: { filterString: '', placeholder: 'Filter by title' }
    }


  ];
  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;

  public config: any = {
    paging: true,
    sorting: { columns: this.columns },
    filtering: { filterString: '' },
    className: ['table-striped', 'table-bordered']
  };





  public changePage(page: any, data: Array<any> = this.data): Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    let filteredData: Array<any> = data;
    this.columns.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray: Array<any> = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }





}
