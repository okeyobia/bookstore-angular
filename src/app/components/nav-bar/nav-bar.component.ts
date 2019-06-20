import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  loggedIn = false;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      resp => {
        this.loggedIn = true;
      },
      error => {
        this.loggedIn = false;
        console.log(error);
      }
    );
  }

  logout() {
    this.loginService.logout().subscribe(
      res => {
        //this.loggedIn = false;
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }
}
