import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goto() {
    this.route.navigate(['first-component']);
  }

  gotoByUrl() {
    this.route.navigateByUrl('/first-component');
  }

}
