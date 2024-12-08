import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
const url = 'https://harshithashok.com/wp-json/wp/v2/posts';
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  posts = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.http.get(url).subscribe((res: any) => {
      // this.rowData = res;
      this.posts = res.map(
        (category: { content: any }) => category.content.rendered
      );
      console.log(this.posts);
      // this.rowData[5] = this.rowData[5].toDateString();
    });
  }
}
