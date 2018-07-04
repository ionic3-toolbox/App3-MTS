import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { Reports } from "../../mocks/providers/mock-ei-reports";
import { Report } from "../../models/mockEiReport";
import { SitePages } from "..";
import { Logger } from "winston";
import { LogProvider } from "../../providers";

/**
 * Generated class for the EiReportingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-ei-reporting",
  templateUrl: "ei-reporting.html"
})
export class EiReportingPage {
  public currentReports: Report[];

  private readonly logger: Logger;
  constructor(
    private readonly navCtrl: NavController,
    public reports: Reports,
    public modalCtrl: ModalController,
    private readonly logProvider: LogProvider
  ) {
    this.logger = this.logProvider.getLogger();
    this.currentReports = this.reports.query();
  }

  ionViewDidLoad() {
    this.logger.info("ionViewDidLoad EiReportingPage");
  }

  presentHelpModal() {
    this.logger.info("Click Received");
    const helpModal = this.modalCtrl.create(SitePages.HelpModal);
    helpModal
      .present()
      .then(() => this.logger.info("Help Modal Displayed"))
      .catch((reason: any) => this.logger.error(reason));
  }

  startReport = (report: any) =>
    this.navCtrl.push(SitePages.AcceptanceStatement, { report });
}
