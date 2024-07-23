import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { Book } from '../../../models/booksLaravel.models';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-dialog',
  template: `
    <h3 mat-dialog-title>Editar Elemento</h3>
    <div mat-dialog-content>
      <mat-form-field>
        <mat-label>Autor</mat-label>
        <input matInput [(ngModel)]="data.author">
      </mat-form-field>
      <mat-form-field>
        <mat-label>Libro</mat-label>
        <input matInput [(ngModel)]="data.title">
      </mat-form-field>
      <mat-form-field>
        <mat-label>Fecha de Nacimiento</mat-label>
        <input matInput [(ngModel)]="data.bornDay" type="number">
      </mat-form-field>
      <mat-form-field>
        <mat-label>Fecha de Muerte</mat-label>
        <input matInput [(ngModel)]="data.deathDate" type="number">
      </mat-form-field>
      <mat-form-field>
        <mat-label>Genero</mat-label>
        <input matInput [(ngModel)]="data.genre">
      </mat-form-field>
      <mat-form-field>
        <mat-label>Descargas</mat-label>
        <input matInput [(ngModel)]="data.downloads" type="number">
      </mat-form-field>
    </div>
    <div mat-dialog-actions class="botones">
      <button mat-button (click)="onCancel()">Cancelar</button>
      <button mat-button (click)="onSave()">Guardar</button>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule],
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.data);
  }
}
