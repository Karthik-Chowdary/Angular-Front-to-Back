import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post'
import { PostService } from '../../services/post.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  }
  onEdit: boolean = false;


  constructor(private PostService: PostService) { }

  ngOnInit() {
    this.PostService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

  onNewPost(post: Post){
    this.posts.unshift(post);
  }

  editPost(post: Post){
    this.currentPost = post;
    this.onEdit = true;
  }

  onUpdatedPost(post: Post){
    this.posts.forEach((cur, index)=>{
      if(post.id === cur.id){
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.onEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          body: ''
        }
      }
      
    })
   

  }

  removePost(post: Post){
    if(confirm('Are you sure?')){
      this.PostService.removePost(post.id).subscribe(()=> {
        this.posts.forEach((cur, index)=>{
          if(post.id === cur.id){
            this.posts.splice(index, 1);
          }
        })
      })
    }
  }

}
