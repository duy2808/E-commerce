import {Pipe} from "@angular/core";

/**
 * A simple string filter, since Angular does not yet have a filter pipe built in.
 */
@Pipe({
    name: 'stringFilter'
})
export class StringFilterPipe {

    transform(book: any, title: string, author: string, publisher: string): any {
        if(!title && !author && !publisher)
        {
          return book;
        }
        else
        {
          if(title)
          {
            book=book.filter(x => {return x.title.toLowerCase().indexOf(title.toLowerCase()) != -1});
          }
          if(author)
          {
            book=book.filter(x => {return x.author.toLowerCase().indexOf(author.toLowerCase()) != -1});
          }
          if(publisher)
          {
            book=book.filter(x => {return x.publisher.toLowerCase().indexOf(publisher.toLowerCase()) != -1});
          }
          return book;
        }
      }
}