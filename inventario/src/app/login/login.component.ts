import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private todos;
  private activeTasks;
  private newTodo;
  private path;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.path = params['status'];
    });
  }
}
