import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Result, Language, MediaType } from '../../../../models/book.models';

@Component({
  selector: 'app-add-dialog',
  template: `
    <h3 mat-dialog-title>Agregar Nuevo Elemento</h3>
    <div mat-dialog-content>
      <mat-form-field>
        <mat-label>Autor</mat-label>
        <input matInput [(ngModel)]="newBook.authors[0].name">
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
      <mat-form-field>
        <mat-label>Género</mat-label>
        <input matInput [(ngModel)]="newBook.subjects[0]">
      </mat-form-field>
      <mat-form-field>
        <mat-label>Descargas</mat-label>
        <input matInput [(ngModel)]="newBook.download_count" type="number">
      </mat-form-field>
      <mat-form-field>
        <mat-label>Lenguaje</mat-label>
        <input matInput [(ngModel)]="newBook.languages" placeholder="Código de lenguaje">
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
  newBook: Result = {
    id: 0,
    title: '',
    authors: [{ name: '', birth_year: null, death_year: null }],
    translators: [],
    subjects: [''],
    bookshelves: [],
    languages: [],
    copyright: false,
    media_type: 'application/octet-stream' as MediaType,
    formats: {
      "text/html": "",
      "application/epub+zip": "",
      "application/x-mobipocket-ebook": "",
      "application/rdf+xml": "",
      "text/plain; charset=utf-8": "",
      "text/plain; charset=us-ascii": "",
      "application/octet-stream": "",
      "image/jpeg": ""
    },
    download_count: 0
  };

  newLanguage: string = '';

  constructor(public dialogRef: MatDialogRef<AddDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onAdd(): void {
    this.dialogRef.close(this.newBook);
    this.newBook.languages = this.newLanguage.split(',').map(code => ({ code: code.trim() }));
  }
}


