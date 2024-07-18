import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { Result } from '../../../models/book.models';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  standalone: true,
  styleUrl:'./add-button.component.css'
  
})
export class AddButtonComponent {
  @Output() newElement = new EventEmitter<Result>();

  constructor(public dialog: MatDialog) {}

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.newElement.emit(result);
      }
    });
  }
}

