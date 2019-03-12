import { Component } from "@angular/core";
import { NewsService } from "../news.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  items: any;

  constructor(private NewsService: NewsService, private router: Router) {}

  ngOnInit() {
    this.NewsService.getData(
      "top-headlines?country=us&category=business"
    ).subscribe(data => {
      console.log(data);
      this.items = data;
    });
  }
}
