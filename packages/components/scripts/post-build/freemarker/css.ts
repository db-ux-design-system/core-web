import components from '../components';
import { writeFileSync } from 'node:fs';
import { freemarkerComponentsDirPath } from './utils';

export const createHydrateCss = () => {
	const componentsWithPrefix = components.map(({ name }) => `db-${name}`);

	let template = componentsWithPrefix
		.map(
			(name) => `
.${name} {
    & + ${name} {
      &:not(.hydrated) {
        display: none;
      }
    }

    &:has(+ ${name}[class="hydrated"]) {
      display: none;
    }
  }`
		)
		.join('\n');

	template = template += `
:is(${componentsWithPrefix.join(', ')}):not(.hydrated) {
  font-size: 0;

  & > * {
    display: none;
  }

  &::before {
    --spinner-color: var(--db-brand-origin-default);
    --spinner-border-radius: var(--db-border-radius-xs);

    content: "";
    display: flex;
    width: var(--db-sizing-sm);
    aspect-ratio: 1;
    border-radius: 50%;
    background:
      radial-gradient(farthest-side, var(--spinner-color) 94%, #0000)
        top/var(--spinner-border-radius) var(--spinner-border-radius) no-repeat,
      conic-gradient(#0000 30%, var(--spinner-color));
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - var(--spinner-border-radius)),
      #000 0
    );
    animation: rotate 1s infinite linear;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}`;

	writeFileSync(`${freemarkerComponentsDirPath}/hydrate.css`, template);
};
