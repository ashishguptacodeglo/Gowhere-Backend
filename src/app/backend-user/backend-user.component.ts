import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backend-user',
  templateUrl: './backend-user.component.html',
  styleUrls: ['./backend-user.component.css']
})
export class BackendUserComponent implements OnInit {
  test: any = [{name:'abc',age:12},{name:'ghj',age:16}]
  constructor() { }

  ngOnInit(): void {
  }

}
