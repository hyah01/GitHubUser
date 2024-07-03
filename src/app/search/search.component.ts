import { Component } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  username: string = 'PythonicRhythm';
  profile: any;
  repo: any;
  error: any;

  constructor(private githubService: GithubService){}

  onSubmit(){
    this.githubService.getUserProfile(this.username).subscribe(
      (profile) => { 
        this.error = null;
        this.profile = profile;
        this.githubService.getUserRepos(this.username).subscribe(data => {
          this.repo = data;
        })
      },
      (error) => {
        this.error = error
        this.profile = null;
      }
    )
  }

}
