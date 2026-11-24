import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as ee,m as n,n as r}from"./blocks-BT7OryXM.js";import{t as te}from"./jsx-runtime-MKhVqBIO.js";import{i,r as ne}from"./react-DITjJg24.js";import{n as re,t as ie}from"./loading-indicator.overview.stories-BGLxqDIj.js";import{a as ae,c as oe,d as a,i as o,l as s,n as c,o as l,r as u,s as d,t as f}from"./delay.example.stories-BYR8S_Mo.js";import{a as p,c as m,d as h,i as g,l as _,n as v,o as y,r as b,s as x,t as S}from"./density.example.stories-DbuN1fiv.js";import{C,E as w,S as T,_ as E,a as D,b as O,c as k,d as A,f as j,g as M,h as N,i as P,l as F,m as I,n as L,o as R,p as z,r as B,s as V,t as H,u as U,v as W,w as G,x as K,y as q}from"./button.example.stories-BNYmNrVV.js";import{n as se,t as ce}from"./timeout.example.stories-BSC_lDgI.js";import{a as le,c as ue,i as de,n as fe,o as pe,r as me,t as he}from"./indeterminate.example.stories-C2ogcOcs.js";import{a as ge,i as _e,n as ve,r as ye,t as be}from"./overlay.example.stories-D5O8HNtE.js";import{a as xe,i as Se,n as Ce,t as J}from"./role.example.stories-BbzsVpye.js";import{a as we,i as Te,n as Ee,o as De,r as Oe,s as ke,t as Ae}from"./show-label.example.stories-BARjvzJh.js";import{a as je,i as Me,n as Ne,o as Pe,r as Fe,s as Ie,t as Le}from"./show-progress-text.example.stories-eSTBwSgi.js";import{a as Re,c as ze,i as Be,l as Ve,n as He,o as Ue,r as We,s as Ge,t as Ke,u as qe}from"./size.example.stories-CQWRXvtj.js";import{a as Je,c as Ye,d as Xe,f as Ze,i as Qe,l as $e,n as et,o as tt,p as nt,r as rt,s as it,t as at,u as ot}from"./state.example.stories-D0-J6Etq.js";import{a as st,c as ct,d as lt,f as ut,i as dt,l as ft,n as pt,o as mt,p as ht,r as gt,s as _t,t as vt,u as yt}from"./state.determinate.example.stories-BsAFWzP7.js";var Y;function X(){return(X=e((()=>{Y='## General\n\n> **Note**\n> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).\n\n## DB UI Core ➡ DB UX Design System Core components\n\n### class\n\n| Before                 | Status | After                  | Description                                                           |\n| ---------------------- | :----: | ---------------------- | --------------------------------------------------------------------- |\n| `elm-loadingindicator` |   🔁   | `db-loading-indicator` | Use `variant="circular"` with `indeterminate` for the former spinner. |\n| `elm-progress`         |   🔁   | `db-loading-indicator` | Use `variant="bar"` with `value` and `max` for determinate progress.  |\n\n### announcement\n\nGeneration 2 rendered the spinner as an SVG and needed a separate status text, for example a paragraph with `role="status"`.\n\n| Before                        | Status | After   | Description                                                                                                          |\n| ----------------------------- | :----: | ------- | -------------------------------------------------------------------------------------------------------------------- |\n| separate `role="status"` text |   ❌   | `label` | The component is a live region and announces its `label`. Remove the separate text, otherwise it is announced twice. |\n\nKeep behavior that the spinner did not provide itself, for example a disabled submit button that prevents a second search.\n'})))()}function Z(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[`
`,(0,Q.jsx)(ee,{of:re}),`
`,(0,Q.jsx)(n.h1,{id:`dbloadingindicator`,children:`DBLoadingIndicator`}),`
`,(0,Q.jsx)(t,{children:`The Loading Indicator provides visual feedback that content or a process is loading. It is available as a circular indicator and as a bar, each in a determinate and an indeterminate variant.`}),`
`,(0,Q.jsxs)(n.p,{children:[(0,Q.jsx)(n.strong,{children:`Status:`}),` Beta`]}),`
`,(0,Q.jsx)(n.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Q.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/loading-indicator`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Q.jsx)(`i`,{className:`db-sb-platform-card-logo`,"aria-hidden":`true`}),(0,Q.jsx)(`strong`,{children:`LoadingIndicator guidelines`}),(0,Q.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,Q.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]}),`
`,(0,Q.jsxs)(n.p,{children:[`Setup: `,(0,Q.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/learn/html-css-setup`,rel:`nofollow`,children:`Use the components with HTML and CSS`}),` on the Design System Platform.`]}),`
`,(0,Q.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,Q.jsxs)(n.p,{children:[`Open `,(0,Q.jsx)(n.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,Q.jsx)(n.h3,{id:`delay`,children:`Delay`}),`
`,(0,Q.jsx)(r,{of:c}),`
`,(0,Q.jsx)(r,{of:u}),`
`,(0,Q.jsx)(r,{of:f}),`
`,(0,Q.jsx)(r,{of:oe}),`
`,(0,Q.jsx)(r,{of:s}),`
`,(0,Q.jsx)(r,{of:d}),`
`,(0,Q.jsx)(r,{of:ae}),`
`,(0,Q.jsx)(r,{of:l}),`
`,(0,Q.jsx)(r,{of:o}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-delay--docs`,children:`Open the Delay examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`density`,children:`Density`}),`
`,(0,Q.jsx)(r,{of:m}),`
`,(0,Q.jsx)(r,{of:_}),`
`,(0,Q.jsx)(r,{of:x}),`
`,(0,Q.jsx)(r,{of:v}),`
`,(0,Q.jsx)(r,{of:b}),`
`,(0,Q.jsx)(r,{of:S}),`
`,(0,Q.jsx)(r,{of:p}),`
`,(0,Q.jsx)(r,{of:y}),`
`,(0,Q.jsx)(r,{of:g}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-density--docs`,children:`Open the Density examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`examples-button`,children:`Examples: Button`}),`
`,(0,Q.jsx)(r,{of:O}),`
`,(0,Q.jsx)(r,{of:E}),`
`,(0,Q.jsx)(r,{of:W}),`
`,(0,Q.jsx)(r,{of:q}),`
`,(0,Q.jsx)(r,{of:G}),`
`,(0,Q.jsx)(r,{of:K}),`
`,(0,Q.jsx)(r,{of:T}),`
`,(0,Q.jsx)(r,{of:C}),`
`,(0,Q.jsx)(r,{of:j}),`
`,(0,Q.jsx)(r,{of:F}),`
`,(0,Q.jsx)(r,{of:U}),`
`,(0,Q.jsx)(r,{of:A}),`
`,(0,Q.jsx)(r,{of:M}),`
`,(0,Q.jsx)(r,{of:z}),`
`,(0,Q.jsx)(r,{of:I}),`
`,(0,Q.jsx)(r,{of:N}),`
`,(0,Q.jsx)(r,{of:P}),`
`,(0,Q.jsx)(r,{of:H}),`
`,(0,Q.jsx)(r,{of:L}),`
`,(0,Q.jsx)(r,{of:B}),`
`,(0,Q.jsx)(r,{of:k}),`
`,(0,Q.jsx)(r,{of:D}),`
`,(0,Q.jsx)(r,{of:R}),`
`,(0,Q.jsx)(r,{of:V}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-examples-button--docs`,children:`Open the Examples: Button examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`examples-timeout`,children:`Examples: Timeout`}),`
`,(0,Q.jsx)(r,{of:ce}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-examples-timeout--docs`,children:`Open the Examples: Timeout examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`indeterminate`,children:`Indeterminate`}),`
`,(0,Q.jsx)(r,{of:fe}),`
`,(0,Q.jsx)(r,{of:me}),`
`,(0,Q.jsx)(r,{of:he}),`
`,(0,Q.jsx)(r,{of:le}),`
`,(0,Q.jsx)(r,{of:pe}),`
`,(0,Q.jsx)(r,{of:de}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-indeterminate--docs`,children:`Open the Indeterminate examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`overlay`,children:`Overlay`}),`
`,(0,Q.jsx)(r,{of:ve}),`
`,(0,Q.jsx)(r,{of:ye}),`
`,(0,Q.jsx)(r,{of:be}),`
`,(0,Q.jsx)(r,{of:_e}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-overlay--docs`,children:`Open the Overlay examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`role`,children:`Role`}),`
`,(0,Q.jsx)(r,{of:J}),`
`,(0,Q.jsx)(r,{of:xe}),`
`,(0,Q.jsx)(r,{of:Se}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-role--docs`,children:`Open the Role examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`show-label`,children:`Show Label`}),`
`,(0,Q.jsx)(r,{of:Ee}),`
`,(0,Q.jsx)(r,{of:Oe}),`
`,(0,Q.jsx)(r,{of:Ae}),`
`,(0,Q.jsx)(r,{of:we}),`
`,(0,Q.jsx)(r,{of:De}),`
`,(0,Q.jsx)(r,{of:Te}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-show-label--docs`,children:`Open the Show Label examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`show-progress-text`,children:`Show Progress Text`}),`
`,(0,Q.jsx)(r,{of:Ne}),`
`,(0,Q.jsx)(r,{of:Fe}),`
`,(0,Q.jsx)(r,{of:Le}),`
`,(0,Q.jsx)(r,{of:je}),`
`,(0,Q.jsx)(r,{of:Pe}),`
`,(0,Q.jsx)(r,{of:Me}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-show-progress-text--docs`,children:`Open the Show Progress Text examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`size`,children:`Size`}),`
`,(0,Q.jsx)(r,{of:ze}),`
`,(0,Q.jsx)(r,{of:Ve}),`
`,(0,Q.jsx)(r,{of:Ge}),`
`,(0,Q.jsx)(r,{of:He}),`
`,(0,Q.jsx)(r,{of:We}),`
`,(0,Q.jsx)(r,{of:Ke}),`
`,(0,Q.jsx)(r,{of:Re}),`
`,(0,Q.jsx)(r,{of:Ue}),`
`,(0,Q.jsx)(r,{of:Be}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-size--docs`,children:`Open the Size examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`state`,children:`State`}),`
`,(0,Q.jsx)(r,{of:Ye}),`
`,(0,Q.jsx)(r,{of:$e}),`
`,(0,Q.jsx)(r,{of:it}),`
`,(0,Q.jsx)(r,{of:et}),`
`,(0,Q.jsx)(r,{of:rt}),`
`,(0,Q.jsx)(r,{of:at}),`
`,(0,Q.jsx)(r,{of:Xe}),`
`,(0,Q.jsx)(r,{of:Ze}),`
`,(0,Q.jsx)(r,{of:ot}),`
`,(0,Q.jsx)(r,{of:Je}),`
`,(0,Q.jsx)(r,{of:tt}),`
`,(0,Q.jsx)(r,{of:Qe}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-state--docs`,children:`Open the State examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`state-determinate`,children:`State: Determinate`}),`
`,(0,Q.jsx)(r,{of:ct}),`
`,(0,Q.jsx)(r,{of:ft}),`
`,(0,Q.jsx)(r,{of:_t}),`
`,(0,Q.jsx)(r,{of:pt}),`
`,(0,Q.jsx)(r,{of:gt}),`
`,(0,Q.jsx)(r,{of:vt}),`
`,(0,Q.jsx)(r,{of:lt}),`
`,(0,Q.jsx)(r,{of:ut}),`
`,(0,Q.jsx)(r,{of:yt}),`
`,(0,Q.jsx)(r,{of:st}),`
`,(0,Q.jsx)(r,{of:mt}),`
`,(0,Q.jsx)(r,{of:dt}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-state-determinate--docs`,children:`Open the State: Determinate examples`})}),`
`,(0,Q.jsx)(n.h2,{id:`usage-notes`,children:`Usage notes`}),`
`,(0,Q.jsx)(t,{children:`### Use component

The \`db-loading-indicator\` root carries the live-region role (\`status\`) and
wraps an inner content wrapper (\`<div class="db-loading-indicator-content">\`)
containing a \`<label>\`, its associated native \`<progress>\` and an \`aria-hidden\`
span for the visible progress text. The progress text span must carry the
\`db-loading-indicator-progress-text\` class, because the stylesheet keys the
"hide the gap when there is no visible progress text" rule off it. The role sits on the root (not the inner
wrapper) so the whole component is the live region, matching the framework
output. The inner wrapper must carry the \`db-loading-indicator-content\` class,
because the stylesheet targets it directly (\`> .db-loading-indicator-content\`)
to avoid styling any nested consumer markup. The \`<progress>\` must be a
**sibling** of the \`<label>\` (associated via \`for\`/\`id\`), not a child, because
the stylesheet only visually hides a \`.db-loading-indicator-content > progress\`
sibling — nesting it inside the label leaves the native control visible next to
the custom spinner. For the circular variant, add the SVG spinner markup.

For a determinate value (as opposed to the indeterminate spinner), CSS-only
consumers must set the attributes the framework logic would otherwise derive:
\`data-indeterminate="false"\` and \`data-state="active"\` so the stylesheet shows
the segment instead of the continuous animation, and the
\`--db-loading-indicator-percentage\` custom property (a fraction between 0 and 1,
here \`0.42\` for 42 of 100) because there is no JavaScript to calculate it.

\`\`\`html index.html
<!-- index.html -->
...
<body>
	<div
		class="db-loading-indicator"
		role="status"
		data-variant="circular"
		data-orientation="horizontal"
		data-indeterminate="false"
		data-state="active"
		style="--db-loading-indicator-percentage: 0.42;"
	>
		<svg
			class="db-loading-indicator-circle"
			viewBox="10 10 20 20"
			aria-hidden="true"
		>
			<circle class="db-loading-indicator-circle-track"></circle>
			<circle class="db-loading-indicator-circle-segment"></circle>
		</svg>
		<div class="db-loading-indicator-content">
			<label for="loading-indicator-1-progress"> Loading </label>
			<progress id="loading-indicator-1-progress" value="42" max="100">
				42 of 100
			</progress>
			<span class="db-loading-indicator-progress-text" aria-hidden="true"
				>42 of 100</span
			>
		</div>
	</div>
</body>
\`\`\``}),`
`,(0,Q.jsx)(n.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,Q.jsxs)(n.p,{children:[`In HTML the component is a `,(0,Q.jsx)(n.code,{children:`<div>`}),` with the class `,(0,Q.jsx)(n.code,{children:`db-loading-indicator`}),`. Options are `,(0,Q.jsx)(n.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,Q.jsx)(t,{children:'| Attribute | Values | Description |\n| --- | --- | --- |\n| `role` | `string` |  |\n| `data-indeterminate` | `true` \\| `false` | If enabled the loading indicator shows an ongoing animation without a known completion (spinner/indeterminate progress). Set to false to show a determinate value via value/max. |\n| `data-size` | `"small" \\| "medium" \\| \'large\'` | The size attribute changes the font-size and other related sizes of the component. |\n| `data-variant` | `"bar" \\| "circular"` | The variant changes the visual appearance of the loading indicator between a circular spinner and a horizontal bar. |\n| `data-orientation` | `"horizontal" \\| "vertical"` | Change the orientation. Defaults to horizontal. |\n| `data-delay` | `"none" \\| "slow" \\| "fast"` | Add a delay before showing the component |\n| `data-state` | `string` |  |\n| `data-hide-label` | `true` \\| `false` | Inverse of the `showLabel` property. |\n| `data-overlay` | `true` \\| `false` | If enabled the loading indicator is rendered as an overlay covering its positioned parent. |'}),`
`,(0,Q.jsx)(n.h2,{id:`css-custom-properties`,children:`CSS custom properties`}),`
`,(0,Q.jsxs)(n.p,{children:[`Set them on the component element to adjust its styling, e.g. with the `,(0,Q.jsx)(n.code,{children:`style`}),` attribute.`]}),`
`,(0,Q.jsx)(t,{children:"| Property | Description | Default |\n| --- | --- | --- |\n| `--db-loading-indicator-percentage` | Progress of a determinate indicator as a fraction between 0 and 1, e.g. `0.42`. Only needed in plain HTML: the framework components set it themselves. | `0` |"}),`
`,(0,Q.jsx)(n.h2,{id:`migration`,children:`Migration`}),`
`,(0,Q.jsx)(t,{children:Y.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Q.jsx)(n.h2,{id:`resources`,children:`Resources`}),`
`,(0,Q.jsxs)(n.ul,{children:[`
`,(0,Q.jsx)(n.li,{children:(0,Q.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/components/loading-indicator`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Q.jsxs)(n.li,{children:[`npm: `,(0,Q.jsx)(n.a,{href:`https://www.npmjs.com/package/@db-ux/core-components`,rel:`nofollow`,children:`@db-ux/core-components`})]}),`
`,(0,Q.jsx)(n.li,{children:(0,Q.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/loading-indicator`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Q.jsx)(n.li,{children:(0,Q.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function bt(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=te(),ne(),n(),ie(),a(),h(),w(),se(),ue(),ge(),Ce(),ke(),Ie(),qe(),nt(),ht(),X()})))()}$();export{bt as default};