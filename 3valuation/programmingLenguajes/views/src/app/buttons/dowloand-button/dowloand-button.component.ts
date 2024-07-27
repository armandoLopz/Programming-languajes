import { Component, Input } from '@angular/core';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dowloand-button',
  templateUrl: './dowloand-button.component.html',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  styleUrl: './dowloand-button.component.css'
})
  export class DowloandButtonComponent {
  @Input() book: any;

  downloadZip(book: any): void {
    const zip = new JSZip();
    zip.file('autor.txt',String( book.authors));
    zip.file('libro.txt', String(book.title));
    zip.file('fechaNacimiento.txt', String(book.bornDay));
    zip.file('fechaMuerte.txt', String(book.deathDate));
    zip.file('temas.txt', book.genre);
    zip.file('descargas.txt',book.downloads.toString());
    
    zip.generateAsync({ type: 'blob' }).then(content => {
      saveAs(content, `${book.title}-details.zip`);
    });
  }
}