import { Component, OnInit } from '@angular/core';
import { NotificationService, Notification } from '../notification.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notifications: Notification[] = [];
  notificationService: any;

  constructor(private notificatonService: NotificationService, 
              private activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.notificationService.getNotifications().subscribe((notifications: Notification[]) => {
      this.notifications = notifications;
    });
  }
  updateStatus(notification: Notification, status: 'Pending' | 'In Progress' | 'Completed') {
    this.notificationService.updateNotificationStatus(notification.id, status);
  }

  sendReminder(notification: Notification) {
    this.notificationService.incrementReminderCount(notification.id);
    // Here you would typically also trigger an actual reminder (e.g., send an email)
    console.log(`Reminder sent for ${notification.courseName}`);
  }
}
