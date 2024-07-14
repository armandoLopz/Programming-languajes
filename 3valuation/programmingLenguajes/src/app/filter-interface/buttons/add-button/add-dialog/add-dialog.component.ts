import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Result } from 'C:/Users/CHUWI-Notebook/Documents/GitHub/Programming-languajes/3valuation/programmingLenguajes/src/app/models/book.models';

@Component({
  selector: 'app-add-dialog',
  template: `
    <h3 mat-dialog-title>Agregar Nuevo Elemento</h3>
    <div mat-dialog-content>
      <mat-form-field>
        <mat-label>Autor</mat-label>
        <input matInput [(ngModel)]="newBook.authors[0].name" class="boton">
      </mat-form-field>
      <mat-form-field>
        <mat-label>Libro</mat-label>
        <input matInput [(ngModel)]="newBook.title">
      </mat-form-field>
      <mat-form-field>
        <mat-label>Fecha de Nacimiento</mat-label>
        <input matInput [(ngModel)]="newBook.authors[0].birth_year" type="number">
      </mat-form-field>
      <mat-form-field>
        <mat-label>Fecha de Muerte</mat-label>
        <input matInput [(ngModel)]="newBook.authors[0].death_year" type="number">
      </mat-form-field>
      
    </div>
    <div mat-dialog-actions class="botones">
      <button mat-button (click)="onCancel()">Cancelar</button>
      <button mat-button (click)="onAdd()"class="agregar">Agregar</button>
    </div>
  `,
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
  styleUrl:'./add-dialog.component.css'

})
export class AddDialogComponent {
  newBook = {
    authors: [{ name: '', birth_year: null, death_year: null }],
    title: ''
  };

  constructor(public dialogRef: MatDialogRef<AddDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onAdd(): void {
    this.dialogRef.close(this.newBook);
  }
}

