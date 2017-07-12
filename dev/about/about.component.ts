import {Component, View} from "angular2/core";
import {ROUTER_DIRECTIVES, Router, RouteParams} from "angular2/router";

@Component({
  selector:'about',
  providers:[],
  directives: [ROUTER_DIRECTIVES],
  templateUrl:'../dev/about/about.component.html'
})
export class AboutComponent{

  id = null;

  constructor(
    private _router:Router,
    private _routeParams:RouteParams
  ){}

  //OnInit is best place to fetch all our route params.
  ngOnInit():any {
    this.id = this._routeParams.get('contactid');
  }

}
