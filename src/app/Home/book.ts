import { Genre } from './genre';
import { Images } from './images';
import { Size } from './size';
import { Comments } from './comments';

export class Book {
    _id: string;
    shortDescription: string;
    fullDescription: string;
    title: string;
    
    author: string;
    publisher:string;
    pages:number;
    weight:number;
    sku: string;
    previousPrice: number;
    sellingPrice: number;
    releaseDate: string;
    createDate: string;
    genre: Genre;
    images: Images;
    size : Size;
    comments: Comments[];
    
    
  }