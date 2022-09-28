import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Component, OnInit} from '@angular/core';
import {AppState} from 'src/app/store/app.state';
import {getPostById} from '../state/posts.selector';
import {Post} from '../../models/posts.model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {
  post: Observable<Post>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.post = this.store.select(getPostById);
  }
}
