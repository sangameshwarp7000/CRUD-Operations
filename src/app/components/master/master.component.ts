import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DesignationComponent } from '../designation/designation.component';
import { RolesComponent } from "../roles/roles.component";

@Component({
  selector: 'app-master',
  imports: [CommonModule, FormsModule, DesignationComponent, RolesComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

  currentState: string = "Roles";

  changeState(message: string) {
    this.currentState=message;
  }

}
