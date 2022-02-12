import { Component, OnInit } from '@angular/core';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { ApiServiceService } from 'src/api-service.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  datas:any;
  repos:any;
  username:any;
  userdata:any;
  repoLength:any;
  array:any[];

  userservice:ApiServiceService;
  page:any=1
  constructor(private user:ApiServiceService)
  {
      this.userservice=this.user
     
  }

  open(){

    this.userservice.getUserDetails(this.username).subscribe(data=>{
      // console.log(data)
      this.datas=data;

    })
    this.userservice.getRepoDetails(this.username).subscribe(repos=>{
      this.repos=repos;
    })
   
    
  }


  counter(a:any)
  {
    this.array=[]
    console.log(a)
    for(let i=0;i<a;i++)
     this.array.push(i);
    // console.log(this.array) 
    return this.array; 
  }

  
  check(a:any)
  {
    if(a>0)return true
    else return false
  }
  ngOnInit(): void {
  }

 

}
