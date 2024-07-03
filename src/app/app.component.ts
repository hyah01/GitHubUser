import { Component } from '@angular/core';
import { PostService } from './post.service';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'GitHubUser';
  // posts: any;

  // constructor(private postService: PostService){}

  // ngOnInit(){
  //   this.postService.getPosts().subscribe(post => {
  //     this.posts = post;
  //   })
  // }

}
