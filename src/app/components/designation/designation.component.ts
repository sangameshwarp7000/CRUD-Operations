import { Component, inject , OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignation } from '../../model/interface/designation';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{

  designationList: IDesignation[] = [];

  isLoading: boolean = true;

  masterService = inject(MasterService);

  ngOnInit(): void {
      this.masterService.getDesignations().subscribe((res:APIResponseModel)=>{
        this.designationList = res.data;
        this.isLoading = false;
      },error=>{
        alert("API Error") 
      })
  }

}
