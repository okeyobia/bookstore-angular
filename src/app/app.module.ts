import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminPortalMaterialModule } from "./shared/admin-portal-material/admin-portal-material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { LoginComponent } from "./components/login/login.component";
import { LoginService } from "./services/login.service";

@NgModule({
  declarations: [AppComponent, NavBarComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminPortalMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
