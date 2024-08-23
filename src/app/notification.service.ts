import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Notification {
  id: number;
  courseName: string;
  dueDate: Date;
  
  status: 'Pending' | 'In Progress' | 'Completed';
  reminderCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications = new BehaviorSubject<Notification[]>([]);
  constructor() {
    this.generateNotifications();
   }

   getNotifications(): Observable<Notification[]> {
    return this.notifications.asObservable();
  }

  private generateNotifications() {
    const currentYear = new Date().getFullYear();
    const notifications: Notification[] = [
      { id: 1, courseName: 'Introduction to Angular', dueDate: new Date(currentYear, 0, 31), status: 'Pending', reminderCount: 0 },
      { id: 2, courseName: 'Advanced TypeScript', dueDate: new Date(currentYear, 5, 30), status: 'Pending', reminderCount: 0 },
      // Add more courses as needed
    ];
    this.notifications.next(notifications);
  }

  updateNotificationStatus(id: number, status: 'Pending' | 'In Progress' | 'Completed') {
    const updatedNotifications = this.notifications.value.map(notification => 
      notification.id === id ? { ...notification, status } : notification
    );
    this.notifications.next(updatedNotifications);
  }

  incrementReminderCount(id: number) {
    const updatedNotifications = this.notifications.value.map(notification => 
      notification.id === id ? { ...notification, reminderCount: notification.reminderCount + 1 } : notification
    );
    this.notifications.next(updatedNotifications);
  }
}
