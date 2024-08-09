import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { Book } from '../../../models/booksLaravel.models';

@Component({
  selector: 'app-add-button',
  template: `<button mat-button (click)="openAddDialog()">Agregar</button>`,
  standalone: true,
  styleUrl:'./add-button.component.css'
  
})
export class AddButtonComponent {
  @Output() newElement = new EventEmitter<Book>();

  constructor(public dialog: MatDialog) {}

  openAddDialog(): void {
    
    this.newElement.emit();
  }
}

