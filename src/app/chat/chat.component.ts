import { Component, OnInit } from '@angular/core';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})


export class ChatComponent  implements OnInit {

    messages: Message[] = [];
  newMessage: string = '';

  constructor() { }

  ngOnInit() {
    this.addBotMessage('Hello! How can I assist you today?');
  }

  sendMessage() {
    if (this.newMessage.trim().length > 0) {
      this.addUserMessage(this.newMessage);
      this.newMessage = '';

      // Simulate a bot response
      setTimeout(() => {
        this.addBotMessage('I am an AI bot. How can I help you?');
      }, 1000);
    }
  }

  addUserMessage(text: string) {
    this.messages.push({ text, sender: 'user' });
  }

  addBotMessage(text: string) {
    this.messages.push({ text, sender: 'bot' });
  }
}
