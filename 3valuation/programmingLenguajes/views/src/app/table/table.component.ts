import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { NgFor } from '@angular/common';
import { DowloandButtonComponent } from '../buttons/dowloand-button/dowloand-button.component';
import { SeeButtonComponent } from '../buttons/see-button/see-button.component';
import { EditButtonComponent } from '../buttons/edit-button/edit-button.component';
import { DeleteButtonComponent } from '../buttons/delete-button/delete-button.component';
import { Book } from '../models/booksLaravel.models';
import { FilterInterfaceComponent } from '../filter-interface/filter-interface.component';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../buttons/edit-button/edit-dialog/edit-dialog.component';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,NgFor, DowloandButtonComponent,SeeButtonComponent,EditButtonComponent,DeleteButtonComponent,FilterInterfaceComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{

  data: Book[] = []; 

  constructor(private apiService: ApiService,public dialog: MatDialog) {}

  ngOnInit() {
    this.getData();
  }

  getData(){

    this.apiService.getData().subscribe(data => {

      this.data = data;

    })
  }
  
  filteredDataReceived(filteredData: Book[]) {
    
    this.data = filteredData;
  }
  deleteRow(index: number) {
    this.data.splice(index, 1);
  }
  addNewElement(newBook: Book) {
    this.data.push(newBook);
  }
  
  editElement(index: number, element: Book) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: { ...element }
    });
}
}