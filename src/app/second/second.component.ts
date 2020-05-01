import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  goto() {
    this.route.navigate(['../first-component'], { relativeTo: this.activatedRoute });
  }

  gotoByUrl() {
    this.route.navigateByUrl('/example/first-component');
  }

}
