import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { NgFor } from '@angular/common';
import { DowloandButtonComponent } from '../buttons/dowloand-button/dowloand-button.component';
import { SeeButtonComponent } from '../buttons/see-button/see-button.component';
import { EditButtonComponent } from '../buttons/edit-button/edit-button.component';
import { DeleteButtonComponent } from '../buttons/delete-button/delete-button.component';
import { Result } from '../models/book.models';
import { FilterInterfaceComponent } from '../filter-interface/filter-interface.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor, DowloandButtonComponent,SeeButtonComponent,EditButtonComponent,DeleteButtonComponent,FilterInterfaceComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{

  data: Result[] = []; 
  filteredData: Result[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getData();
  }

  getData(){

    this.apiService.getData().subscribe(data => {

      this.data = data.results;

    })
  }
  
  filteredDataReceived(filteredData: Result[]) {
    
    this.data = filteredData;
    console.log(this.data);
    
  }
}
