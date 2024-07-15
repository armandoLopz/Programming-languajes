export interface Book {
  count:    number;
  next:     string;
  previous: null;
  results:  Result[];
}

export interface Author {
    name: string;
    birth_year: number | null;
    death_year: number | null;
  }
  
  export interface Formats {
    "text/html": string;
    "application/epub+zip": string;
    "application/x-mobipocket-ebook": string;
    "application/rdf+xml": string;
    "text/plain; charset=utf-8": string;
    "text/plain; charset=us-ascii": string;
    "application/octet-stream": string;
    "image/jpeg": string;
  }
  
  export interface Language {
    code: string;
  }
  
  export type MediaType = 'text/html' | 'application/epub+zip' | 'application/x-mobipocket-ebook' | 'application/rdf+xml' | 'text/plain; charset=utf-8' | 'image/jpeg' | 'application/octet-stream';
  
  export interface Result {
    id: number;
    title: string;
    authors: Author[];
    translators: Author[];
    subjects: string[];
    bookshelves: string[];
    languages: Language[];
    copyright: boolean;
    media_type: MediaType;
    formats: Formats;
    download_count: number;
  }
  