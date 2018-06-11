import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {
  IonicPage,
  NavController,
  ToastController,
  NavParams,
  ModalController
} from "ionic-angular";
import { Report } from "../../models/mockEiReport";
import { SitePages } from "../index";
import { HelpModalPage } from "../help-modal/help-modal";

@IonicPage()
@Component({
  selector: "page-questionaire-2",
  templateUrl: "questionaire-2.html"
})
export class Questionaire_2Page {
  //report: Report;
  //params: Object;
  pushPagePrevious: any;
  pushPageNext: any;
  startDate: any;
  endDate: any;
  constructor(
    public translate: TranslateService,
    public navParams: NavParams,
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {
    //this.report = navParams.get('report');
    this.startDate = "March 28, 2010";
    this.endDate = "April 10, 2010";
    this.pushPagePrevious = SitePages.Questionaire ;
    this.pushPageNext = SitePages.Questionaire3;
    //this.params = { id: 42 };
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad QuestionairePage");
  }

  presentHelpModal() {
    console.log("Click Received");
    let helpModal = this.modalCtrl.create(HelpModalPage);
    helpModal.present();
  }
}
