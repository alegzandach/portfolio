import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { NavComponent } from "../../components/nav/nav.component";

@Component({
  selector: "bio-page",
  templateUrl: "./bio.component.html",
  styleUrls: ["./bio.component.scss"],
})
export class BioComponent {
  public transition = () => {
    let bio = document.getElementById("bioContainer");
    let pic = document.getElementById("picContainer");
    let bg = document.getElementById("bg");

    bio.style.transform = "translate(0%)";
    bio.style.opacity = "100";
    pic.style.transform = "translate(0%)";
    pic.style.opacity = "100";
    bg.style.opacity = "100";
  };
}
