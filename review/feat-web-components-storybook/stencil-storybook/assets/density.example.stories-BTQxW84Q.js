import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBIcon/Density`,component:`db-icon`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{icon:{control:`select`,options:`arrow_down.arrow_left.arrow_right.arrow_up.arrow_up_right.brand.calendar.check-circle.check.check_circle.chevron_down.chevron_left.chevron_right.chevron_up.circle.circular_arrows.clock.cross.cross_circle.exclamation_mark_circle.exclamation_mark_triangle.information_circle.magnifying_glass.menu.minus.plus.resize_handle_corner.x_placeholder`.split(`.`)},variant:{control:`text`},weight:{control:`select`,options:[`16`,`20`,`24`,`32`,`48`,`64`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{icon:`x_placeholder`},render:({children:e,...n})=>t`<div data-density="functional"><db-infotext icon="none" size="small" semantic="informational">Functional</db-infotext><db-icon ${i(n)}>${r(`Functional`)}</db-icon></div>`},l={args:{icon:`x_placeholder`},render:({children:e,...n})=>t`<div data-density="regular"><db-infotext icon="none" size="small" semantic="informational">(Default) Regular</db-infotext><db-icon ${i(n)}>${r(`(Default) Regular`)}</db-icon></div>`},u={args:{icon:`x_placeholder`},render:({children:e,...n})=>t`<div data-density="expressive"><db-infotext icon="none" size="small" semantic="informational">Expressive</db-infotext><db-icon ${i(n)}>${r(`Expressive`)}</db-icon></div>`},d=[`Functional`,`DefaultRegular`,`Expressive`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="functional"><db-infotext icon="none" size="small" semantic="informational">Functional</db-infotext><db-icon \${spreadArgs(args)}>\${unsafeHTML(\`Functional\`)}</db-icon></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="regular"><db-infotext icon="none" size="small" semantic="informational">(Default) Regular</db-infotext><db-icon \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Regular\`)}</db-icon></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="expressive"><db-infotext icon="none" size="small" semantic="informational">Expressive</db-infotext><db-icon \${spreadArgs(args)}>\${unsafeHTML(\`Expressive\`)}</db-icon></div>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultRegular,u as Expressive,c as Functional,d as __namedExportsOrder,s as default};