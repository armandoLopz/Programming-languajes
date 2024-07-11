import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  imports: [MatDialogModule, CommonModule],
  selector: 'app-view-dialog',
  template: `
    <h1 mat-dialog-title>{{ data.title }}</h1>
    <div mat-dialog-content>
      <p>Identificacion del libro {{data.id}}</p>
      <p>Autor: {{ data.authors[0].name }}</p>
      <p>Fecha de Nacimiento: {{ data.authors[0].birth_year }}</p>
      <p>Fecha de Muerte: {{  data.authors[0].death_year }}</p>
      <p>Genero: {{data.subjects}}</p>
      <p>Lenguaje:{{data.languages}}</p>
      <p>Descargas:{{data.download_count}}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Cerrar</button>
    </div>
  `,
  styles: [``]
 
})
export class ViewDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}



  
