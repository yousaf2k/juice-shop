import { Component } from "@angular/core";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.scss"],
})
export class StudentComponent {
  protected studentId: string;
  protected isLogin: boolean;
  protected loginButtonText: string;

  constructor() {
    this.GetStudentId();
    this.updateLoginText();
  }

  public SetStudentId(studentId: string) {
    debugger;
    sessionStorage.setItem("StudentID", studentId);
    this.studentId = studentId;
  }
  public GetStudentId(): string {
    debugger;
    this.studentId = sessionStorage.getItem("StudentID");
    return this.studentId;
  }

  public Login() {
    sessionStorage.setItem("StudentID", this.studentId);
    this.updateLoginText();
  }

  public updateLoginText() {
    if (this.studentId != null && this.studentId != "") {
      this.isLogin = true;
      this.loginButtonText = "Update";
    } else {
      this.isLogin = false;
      this.loginButtonText = "Submit";
    }
  }
}
