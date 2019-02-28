import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {
  canLeave: boolean;

  constructor(private router: Router,
    private alertController: AlertController) {
    this.canLeave = true;
  }

  ngOnInit() {
  }

  ionViewWillLeave() {
    return this.canDeactivate();
  }

  async canDeactivate() {
    if (!this.canLeave) {
      const alert = await this.alertController.create({
        header: 'Leave?',
        message: `Do you realy want to leave?`,
        buttons: [{
          text: 'No'
        },
        {
          text: 'Yes',
          handler: () => {
            this.canLeave = true;
            this.router.navigateByUrl('/home');
          }
        }]
      });
      await alert.present();
    }
    return this.canLeave;
  }

}
