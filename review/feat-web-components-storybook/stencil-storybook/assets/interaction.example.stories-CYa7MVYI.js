import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBPopover/Interaction`,component:`db-popover`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},c={args:{animation:`disabled`,"data-testid":`popover`},render:({children:e,...n})=>t`<div><db-popover ${i(n)}>${r(`Test`)}</db-popover></div>`},l={args:{animation:`disabled`,"data-testid":`controlled-popover`,open:!1},render:({children:e,...n})=>t`<div><db-button data-testid="toggle">Toggle</db-button><db-popover ${i(n)}>${r(`Test`)}</db-popover></div>`},u=[`Interaction`,`PopoverInteraction1`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "animation": "disabled",
    "data-testid": "popover"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-popover \${spreadArgs(args)}>\${unsafeHTML(\`Test\`)}</db-popover></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "animation": "disabled",
    "data-testid": "controlled-popover",
    "open": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button data-testid="toggle">Toggle</db-button><db-popover \${spreadArgs(args)}>\${unsafeHTML(\`Test\`)}</db-popover></div>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Interaction,l as PopoverInteraction1,u as __namedExportsOrder,s as default};