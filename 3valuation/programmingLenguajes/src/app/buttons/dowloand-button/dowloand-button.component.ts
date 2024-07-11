import { Component, Input } from '@angular/core';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dowloand-button',
  template: `<button mat-button (click)="downloadZip(book)">Descargar</button>`,
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  styleUrl: './dowloand-button.component.css'
})
  export class DowloandButtonComponent {
  @Input() book: any;

  downloadZip(book: any): void {
    const zip = new JSZip();
    zip.file('autor.txt',String( book.authors[0].name));
    zip.file('libro.txt', String(book.title));
    zip.file('fechaNacimiento.txt', String(book.authors[0].birth_year));
    zip.file('fechaMuerte.txt', String(book.authors[0].death_year));
    zip.file('temas.txt', book.subjects.join(', '));
    zip.file('idiomas.txt', book.languages.join(', '));
    zip.file('descargas.txt',book.download_count.toString());
    


    zip.generateAsync({ type: 'blob' }).then(content => {
      saveAs(content, `${book.title}-details.zip`);
    });
  }
}