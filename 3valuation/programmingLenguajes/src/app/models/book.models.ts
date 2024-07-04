export interface Book {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    id:             number;
    title:          string;
    authors:        Author[];
    translators:    Author[];
    subjects:       string[];
    bookshelves:    string[];
    languages:      Language[];
    copyright:      boolean;
    media_type:     MediaType;
    formats:        Formats;
    download_count: number;
}

export interface Author {
    name:       string;
    birth_year: number | null;
    death_year: number | null;
}

export interface Formats {
    "text/html":                       string;
    "application/epub+zip":            string;
    "application/x-mobipocket-ebook":  string;
    "application/rdf+xml":             string;
    "image/jpeg":                      string;
    "text/plain; charset=us-ascii":    string;
    "application/octet-stream":        string;
    "text/html; charset=utf-8"?:       string;
    "text/plain; charset=utf-8"?:      string;
    "text/plain; charset=iso-8859-1"?: string;
    "text/html; charset=iso-8859-1"?:  string;
}

export enum Language {
    En = "en",
    Es = "es",
}

export enum MediaType {
    Text = "Text",
}