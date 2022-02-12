import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }
  getUserDetails(username:string)
  {
    let url = "https://api.github.com/users/"+username;

    console.log(url)
    return this.http.get(url);
  }
  getRepoDetails(username:string){
    let url = "https://api.github.com/users/"+ username +"/repos"
    return this.http.get(url);
  }
  getLangDetails(username:string,reponame:string)
  {
    let url = "https://api.github.com/repos/"+username+"/"+reponame+"/languages"
    return this.http.get(url);
    
  }
}
