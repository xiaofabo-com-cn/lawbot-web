import { Component, OnInit } from '@angular/core';
import { UserService } from "../common/service/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }
  nav: any = {
    title: '{LawBot}',
    menus: [{
      title: '首页', url: '/'
    }/**,{
      title: '产品', url: '/#/product'
    } */,{
      title: 'AI案件分析' , url: '/reco/',
      subMenus: [
        {title: '民间借贷', url: '/reco/#/mjjd'},
        {title: '买卖合同', url: '/reco/#/mmht',},
        {title: '金融、投资', url: '/reco/#/jrtz'},
        {title: '知识产权', url: '/reco/#/zscq'},
        {title: '诉讼、仲裁', url: '/reco/#/sszc'},
        {title: '房地产', url: '/reco/#/fdc'},
        {title: '海事物流', url: '/reco/#/hswl'}
      ]
    },{
      title: '法律Chatbot', chatbot: true
    },{
      title: 'AI裁决书', url: '/award/', active: true,
    },{
      title: 'AI合同', url: '/contract/'
    },{
      title: '关于我们', url: '/#/about'
    }]
  };
  
  loginUrl:string = "";
  logoutUrl:String = "";
  user: any = {};
  code = 0;

  ngOnInit() {
    this.userService.currentUser().subscribe((res: any) => {
      let data = res.data;
      let code = this.code = res.code;
      if(code == 200){
        this.user = data.user;
        this.logoutUrl = "/account/logout?callback=" + location.href;
      }else if(code == 401){
        this.loginUrl = "/account/login?callback=" + location.href;
      }
    });
  }

  openLawbot(){
    var v5_chat_attrs	= "toolbar=0,scrollbars=0,location=0,menubar=0,resizable=1,top=" + (window.screen.availHeight - (window.screen.availHeight/2+275+40)) + ",left=" + (window.screen.availWidth - (window.screen.availWidth/2+365+20)) + ",width=730,height=550";
    // window.open('/chatbot/desk/kehu.html?site_id=123898', '_blank', v5_chat_attrs);
    window.open('http://desk.v5kf.com/desk/kehu.html?site_id=123898', '_blank', v5_chat_attrs);
  }
}
