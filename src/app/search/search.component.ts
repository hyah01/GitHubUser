import { Component } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  username: string = '';

  constructor(private githubService: GithubService){}

  onSubmit(){
    this.githubService.getUserProfile(this.username).subscribe(
      
    )
  }

}
