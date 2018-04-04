import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from '../../models/Post'
import { PostService } from '../../services/post.service'


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() onEdit: boolean;
  constructor(private PostService: PostService) { }

  ngOnInit() {
  }

  addPost(title, body){
    if(!title || !body){
      alert("Please add post");
    }
    else{
      this.PostService.savePost({title,body} as Post).subscribe(post => {
        this.newPost.emit(post);
      })
    }
  }

  updatePost(){
    this.PostService.updatePost(this.currentPost).subscribe(post => {
      console.log(post);
      this.onEdit = false;
      this.updatedPost.emit(post);
    })
  }
  

}
