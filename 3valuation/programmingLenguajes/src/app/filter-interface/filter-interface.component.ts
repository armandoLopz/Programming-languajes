import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterButtonComponent } from '../buttons/filter-button/filter-button.component';
import { ApiService } from '../service/api.service';
import { Result } from '../models/book.models';
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

  dataBook: Result[] = [];
  filteredData: Result[] = [];
  @Output() filteredDataEmitted: EventEmitter<Result[]> = new EventEmitter<Result[]>();
  @Output() newElementAdded = new EventEmitter<Result>();

  constructor(private apiService: ApiService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.apiService.getData().subscribe(data => {
      this.dataBook = data.results;
    });
  }

  onFilterClicked() {
    this.filteredData = this.dataBook.filter(result => {
      return result.authors[0].birth_year != null &&
             result.authors[0].death_year != null &&
             result.authors[0].birth_year >= this.birthYear &&
             result.authors[0].death_year <= this.deathYear;
    });
    this.filteredDataEmitted.emit(this.filteredData);
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddDialogComponent);

    dialogRef.afterClosed().subscribe((result: Result | undefined) => {
      if (result) {
        this.newElementAdded.emit(result);
        this.dataBook.push(result);
      }
    });
  }
}
