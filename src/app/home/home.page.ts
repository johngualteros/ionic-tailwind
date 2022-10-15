import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonModal) modal: IonModal;

  message = 'Learn Ionic';
  messageTailwind = 'Learn Tailwind';
  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
  cancelTailwind() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }
  confirmTailwind() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Thanks for visit the ionic details`;
    }
  }
  onWillDismissTailwind(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.messageTailwind = `Thanks for visit the tailwind details`;
    }
  }
}
