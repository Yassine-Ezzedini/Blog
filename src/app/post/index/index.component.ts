import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../shared/post.service';

  
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
   
  title: string;
  posts: Post[] = [];

  search(){
    if(this.title !=""){
      this.posts = this.posts.filter(res=>{
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase())
      });
    }else if(this.title == ""){
      this.ngOnInit();
    }

  }
  
  constructor(public postService: PostService) { }
  
  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Post[])=>{
      this.posts = data;
      console.log(this.posts);
    })  
  }
  
  deletePost(id){
    this.postService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }
  
}