import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterButtonComponent } from '../buttons/filter-button/filter-button.component';
import { ApiService } from '../service/api.service';
import { Book } from '../models/booksLaravel.models';
import { AddButtonComponent } from './buttons/add-button/add-button.component';  // Corrección de ruta
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from '../filter-interface/buttons/add-button/add-dialog/add-dialog.component';  // Corrección de ruta
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-filter-interface',
  standalone: true,
  imports: [CommonModule,FilterButtonComponent, FormsModule, AddButtonComponent],
  templateUrl: './filter-interface.component.html',
  styleUrls: ['./filter-interface.component.css']
})
export class FilterInterfaceComponent {

  birthYear: number = 0;
  deathYear: number = 0;

  dataBook: Book[] = [];
  filteredData: Book[] = [];
  @Output() filteredDataEmitted: EventEmitter<Book[]> = new EventEmitter<Book[]>();
  @Output() newElementAdded = new EventEmitter<Book>();

  constructor(private apiService: ApiService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.apiService.getData().subscribe(data => {
      this.dataBook = data;
    });
  }

  onFilterClicked() {
    this.filteredData = this.dataBook.filter(result => {
      return result.bornDay != null &&
             result.deathDate != null &&
             result.bornDay >= this.birthYear &&
             result.deathDate <= this.deathYear
    });
    this.filteredDataEmitted.emit(this.filteredData);
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddDialogComponent);

    dialogRef.afterClosed().subscribe((result: Book | undefined) => {
      if (result) {
        this.newElementAdded.emit(result);
        this.dataBook.push(result);
      }
    });
  }
}
