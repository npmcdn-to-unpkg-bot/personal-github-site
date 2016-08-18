import { Component, OnInit } from "@angular/core";
import { Messages, Message } from "primeng/primeng";

@Component({
  selector: "dt-app",
  templateUrl: "src/app/app.component.html",
  styleUrls: ["src/app/app.component.min.css"],
  directives: [Messages]
})
export class AppComponent implements OnInit {
    messages: Message[] = [];
    introText: string = "";

    constructor() {

    }

    ngOnInit() {
        this.introText = "Welcome to my GitHub site.";        
        let initMessage: Message = { severity: "info", summary: "Info Message", detail: "Detailed info message." };
        
        this.messages.push(initMessage);
    }
}