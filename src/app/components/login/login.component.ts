import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../services/login.service";
import "rxjs";
import { Observable } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  credential = { username: "", password: "" };
  private loggedIn = false;

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

  onSubmit() {
    this.loginService
      .sendCredential(this.credential.username, this.credential.password)
      .subscribe(
        res => {
          localStorage.setItem("xAuthToken", Object.values(res)[0]);
          this.loggedIn = true;
          location.reload();
        },
        error => {
          console.log(error);
        }
      );
  }
}
