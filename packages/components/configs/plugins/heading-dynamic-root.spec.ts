import { describe, expect, it } from 'vitest';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { transformHeadingDynamicRoot } = require('./heading-dynamic-root.cjs');

const angular = `class DBHeading {
  _ref = viewChild<ElementRef>("_ref");
  constructor() {}
  setupObserver() { this.enableAttributePassing(element, "db-heading"); }
  ngAfterViewInit() {}
}`;
const stencil = `@Component({ tag: "db-heading" })
class DBHeading {
private _ref!: HTMLHeadingElement | any;
  @Prop() as: DBHeadingProps["as"];
  @Prop() className: DBHeadingProps["className"];
  setupObserver() { this.enableAttributePassing(element, "db-heading"); }
  componentDidLoad() {}
  render() { return <h1 ref={(el: any) => { this._ref = el; }} />; }
}`;

describe('DBHeading dynamic root', () => {
	it('tracks Angular viewChild changes and uses the current observer target', () => {
		const result = transformHeadingDynamicRoot(
			angular,
			'angular',
			'DBHeading'
		);
		expect(result).toContain('effect(() =>');
		expect(result).toContain('this._ref()?.nativeElement ?? null');
		expect(result).toContain('copyHeadingAttributes');
	});

	it('tracks the active Stencil root independently from callback-ref cleanup', () => {
		const result = transformHeadingDynamicRoot(
			stencil,
			'stencil',
			'DBHeading'
		);
		expect(result).toContain('this._activeHeadingElement');
		expect(result).toContain(
			'this.rootElement.querySelector("h1, h2, h3, h4, h5, h6")'
		);
		expect(result).toContain('componentDidRender()');
		expect(result).toContain('@Prop() as!:');
		expect(result).toContain(
			'@Prop({ attribute: "classname" }) className:'
		);
		expect(result).toContain('@slot startSlot');
		expect(result).toContain('@slot endSlot');
	});

	it('does not affect other components', () => {
		expect(transformHeadingDynamicRoot(angular, 'angular', 'DBText')).toBe(
			angular
		);
	});
});
