import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//import { Result, Language, MediaType } from '../../../../models/book.models';
import { Book } from '../../../../models/booksLaravel.models';
@Component({
  selector: 'app-add-dialog',
  template: `
    <h3 mat-dialog-title>Agregar Nuevo Elemento</h3>
    <div mat-dialog-content>
      <mat-form-field>
        <mat-label>Autor</mat-label>
        <input matInput [(ngModel)]="newBook.author">
      </mat-form-field>
      <mat-form-field>
        <mat-label>Libro</mat-label>
        <input matInput [(ngModel)]="newBook.title">
      </mat-form-field>
      <mat-form-field>
        <mat-label>Fecha de Nacimiento</mat-label>
        <input matInput [(ngModel)]="newBook.bornDay" type="number">
      </mat-form-field>
      <mat-form-field>
        <mat-label>Fecha de Muerte</mat-label>
        <input matInput [(ngModel)]="newBook.deathDate" type="number">
      </mat-form-field>
      <mat-form-field>
        <mat-label>Género</mat-label>
        <input matInput [(ngModel)]="newBook.genre">
      </mat-form-field>
      <mat-form-field>
        <mat-label>Descargas</mat-label>
        <input matInput [(ngModel)]="newBook.downloads" type="number">
      </mat-form-field>
    </div>
    <div mat-dialog-actions class="botones">
      <button mat-button (click)="onCancel()">Cancelar</button>
      <button mat-button (click)="onAdd()" class="agregar">Agregar</button>
    </div>

  `,
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, CommonModule],
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent {
  newBook: Book = {

    title: '',
    author:'',
    genre: '',
    bornDay: 0,
    deathDate: 0,
    downloads: 0
  };

  constructor(public dialogRef: MatDialogRef<AddDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onAdd(): void {
    this.dialogRef.close(this.newBook);
  }
}


