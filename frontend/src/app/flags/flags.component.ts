import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-flags",
  templateUrl: "./flags.component.html",
  styleUrls: ["./flags.component.scss"],
})
export class FlagsComponent implements OnInit {
  protected studentId: string;
  //protected pageName: string;
  protected flag: string;
  @Input() pageName: string;

  constructor() {
    this.SetStudentId("M-1234");
    debugger;
  }

  ngOnInit() {
    // Called after the constructor and called  after the first ngOnChanges()
    debugger;
  }

  public SetStudentId(studentId: string) {
    debugger;
    sessionStorage.setItem("StudentID", studentId);
    this.studentId = studentId;
  }
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
    this.flag = this.pageName + "Encypted Token after algo";
  }
}
