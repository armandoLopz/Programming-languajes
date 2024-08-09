import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { NgFor } from '@angular/common';
import { DowloandButtonComponent } from '../buttons/dowloand-button/dowloand-button.component';
import { SeeButtonComponent } from '../buttons/see-button/see-button.component';
import { EditButtonComponent } from '../buttons/edit-button/edit-button.component';
import { DeleteButtonComponent } from '../buttons/delete-button/delete-button.component';
import { Result } from '../models/book.models';
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

  data: Result[] = []; 

  constructor(private apiService: ApiService,public dialog: MatDialog) {}

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
  }
  
  deleteRow(index: number) {
    
    const idToDelete: number | undefined = this.data[index]?.id;
    if (idToDelete) {
    
      this.apiService.deleteBook(idToDelete).subscribe({

        next(value) {
            console.log(value);
            
        },error(err) {
            console.log(err);
            
        },
      });
      this.data.splice(index, 1);

    } else {
        console.error('data[index].id is undefined');
    }
  }
  addNewElement(newBook: Result) {
    this.data.push(newBook);
    this.apiService.postBook(newBook).subscribe();
  }
  
  editElement(index: number, element: Result) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: { ...element }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) { 
        this.data[index] = result;
        this.apiService.updateBook(result).subscribe();
      }
    });
  }
}