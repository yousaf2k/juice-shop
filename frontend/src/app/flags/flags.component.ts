import { Component } from "@angular/core";
import * as CryptoJS from "crypto-js";

@Component({
  selector: "app-flags",
  templateUrl: "./flags.component.html",
  styleUrls: ["./flags.component.scss"],
})
export class FlagsComponent {
  protected studentId: string;
  protected pageName: string;
  protected flag: string;

  constructor() {}

  public SetPageName(pageName: string) {
    debugger;
    this.pageName = pageName;
    this.GenerateFlag(pageName);
  }
  public GetStudentId(): string {
    debugger;
    this.studentId = sessionStorage.getItem("StudentID");
    return this.studentId;
  }

  public GenerateFlag(pageName: string) {
    debugger;
    this.flag = CryptoJS.MD5(this.GetStudentId() + this.pageName);
  }
}
