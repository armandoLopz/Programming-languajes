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
      <p>Autor: {{ data.author }}</p>
      <p>Fecha de Nacimiento: {{ data.bornDay }}</p>
      <p>Fecha de Muerte: {{  data.deathDate }}</p>
      <p>Genero: {{data.genre}}</p>
      <p>Lenguaje:{{data.languajes}}</p>
      <p>Descargas:{{data.downloads}}</p>
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



  
