/* Angular cannot handle multiple slots with the same name, we need to use Directives for this. */
import { Directive } from '@angular/core';

@Directive({
	selector: '[dbNavigationContent]'
})
export class NavigationContentDirective {}
