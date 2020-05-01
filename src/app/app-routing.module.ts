import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildAComponentComponent } from './child-acomponent/child-acomponent.component';
import { ChildBComponentComponent } from './child-bcomponent/child-bcomponent.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ExampleComponent } from './example/example.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

// sets up routes constant where you define your routes
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'courses',
    component: CourseListComponent,
  },
  {
    path: 'courses/:id',
    component: CourseDetailComponent,
  },
  {
    path: 'example', component: ExampleComponent, children: [{
      path: 'first-component',
      component: FirstComponent,
    },
    {
      path: 'second-component',
      component: SecondComponent,
      children: [
        {
          path: 'child-a', // child route path
          component: ChildAComponentComponent // child route component that the router renders
        },
        {
          path: 'child-b',
          component: ChildBComponentComponent // another child route component that the router renders
        }]
    }]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `example-component`
  { path: '**', component: HomeComponent },  // Wildcard route for a 404 page
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
