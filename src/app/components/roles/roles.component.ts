import { HttpClient } from '@angular/common/http';
import { Component , inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{

  roleList: IRole[] = [];
  http =  inject(HttpClient);

  ngOnInit(): void {
      this.getAllRoles()
  }

  getAllRoles() {
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:any)=>{
      this.roleList = res.data;
    })
  }

















  // Variables

  // firstName: string = "sangameshwar";
  // lastName: string = "pippadapally";
  // age: number = 20;
  // currentDate: Date = new Date();
  // inputType: string = "checkbox";
  // selectedState: string = "";
  // statusInfo: number = 0;

  // Functions

  // showStartMessage() {
  //   alert("Let's Start the Challenge");
  // }

  // showStatusMessage(message: number) {
  //   alert(message+" Challenges Finished");
  // }

  // showEndMessage() {
  //   alert("Challenges Completed");
  // }




}
