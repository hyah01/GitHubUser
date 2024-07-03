import { Component } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  username: string = '';
  userProfile: any;

  constructor(private githubService: GithubService){}

  onSubmit(){
    this.githubService.getUserProfile(this.username).subscribe(
      (profile) => { 
        this.userProfile = profile;
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
