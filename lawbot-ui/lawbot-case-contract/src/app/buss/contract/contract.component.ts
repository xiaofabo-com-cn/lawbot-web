import { Component, OnInit , ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";
import { ContractService } from '../contract.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.params.caseType = params.caseType
    });
  }

  constructor(private http: HttpClient,private route: ActivatedRoute,private contractService: ContractService){
    
  }

  params: any = {
    caseType: null,
    fundType: 0,
    reasonColumn: 1,
    contractFile: null
  };
  error: string = '';

  onDocChange(e){
    this.params.contractFile = e.target.files[0];
  }

  onCompare(){
    let formData = new FormData();
    formData.append('caseType' , this.params.caseType);
    formData.append('fundType' , this.params.fundType);
    formData.append('reasonColumn' , this.params.reasonColumn);
    formData.append('file' , this.params.contractFile);

    this.contractService.compare(formData).subscribe((res: any) => {
      let code = res.code , data = res.data;
      if(code == 200){
        window.open('api/file/' + data.fileName + '?downloadName=多文对照表' , '_blank');
      }else if(code == 601){
        this.error = data.error;
      }
    })
  }

  openLawbot(){
    var v5_chat_attrs	= "toolbar=0,scrollbars=0,location=0,menubar=0,resizable=1,top=" + (window.screen.availHeight - (window.screen.availHeight/2+275+40)) + ",left=" + (window.screen.availWidth - (window.screen.availWidth/2+365+20)) + ",width=730,height=550";
    // window.open('/chatbot/desk/kehu.html?site_id=123898', '_blank', v5_chat_attrs);
    window.open('http://desk.v5kf.com/desk/kehu.html?site_id=123898', '_blank', v5_chat_attrs);
  }
  

}
