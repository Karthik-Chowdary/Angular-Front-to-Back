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

  onNewPost(post){
    this.posts.unshift(post);
  }

  editPost(post){
    this.currentPost = post;
    this.onEdit = true;
  }

}
