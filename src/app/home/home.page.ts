import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isWelcomeModalOpen: boolean = false;
  isChatModalOpen: boolean = false;

  messages: any[] = []; // Declare messages array
  newMessage: string = ''; // Declare newMessage string for input bindin

  image1 = 'https://img.icons8.com/?size=100&id=0URHMFHwQRGo&format=png&color=000000';

  constructor(private modalController: ModalController) {}

  openWelcomeModal() {
    this.isWelcomeModalOpen = true;
  }

  closeWelcomeModal() {
    this.isWelcomeModalOpen = false;
  }

  openChatModal() {
    this.isChatModalOpen = true;
  }

  closeChatModal() {
    this.isChatModalOpen = false;
  }

  sendMessage() {
    // Add logic to send message
    if (this.newMessage.trim() !== '') {
      this.messages.push({
        text: this.newMessage,
        sender: 'user', // Assuming user sends the message
      });
      this.newMessage = ''; // Clear input after sending
    }
  }

}
