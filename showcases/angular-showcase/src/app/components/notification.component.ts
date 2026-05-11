import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NotificationShowcase } from '@components/components/notification/showcase/notification.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-notification',
	template: '<notification-showcase></notification-showcase>',
	imports: environment.webComponents ? [] : [NotificationShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class NotificationComponent {}
