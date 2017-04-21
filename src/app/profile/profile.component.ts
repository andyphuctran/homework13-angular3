import { Component, OnInit, OnDestroy } from '@angular/core';
import { DbService } from '../db.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  private subscription: Subscription;
  id: string;
  user: any;
  constructor(private activatedRoute: ActivatedRoute, private db: DbService) {
    this.subscription = this.activatedRoute.params.subscribe(
      (params: any) => { this.id = params['id']; }
    );
    this.user = db.getData().filter(user => user.id == this.id);
    // console.log(this.user[0].id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
