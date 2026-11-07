import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-B9gE3-RB.js";import{i,n as a,t as o}from"./apply-web-component-args-BifYIpws.js";var s=t({Interaction:()=>u,PopoverInteraction1:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBPopover/Interaction`,component:`db-popover`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},u={args:{animation:`disabled`,"data-testid":`popover`},render:({children:e,...t})=>n`<div><db-popover ${a(t)}>${i(`<db-button slot="trigger" data-testid="button">Button</db-button>Test`)}</db-popover></div>`},d={args:{animation:`disabled`,"data-testid":`controlled-popover`,open:!1},render:({children:e,...t})=>n`<div><db-button data-testid="toggle">Toggle</db-button><db-popover ${a(t)}>${i(`<db-button slot="trigger" data-testid="controlled-button">Button</db-button>Test`)}</db-popover></div>`},f=[`Interaction`,`PopoverInteraction1`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "animation": "disabled",
    "data-testid": "popover"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger" data-testid="button">Button</db-button>Test\`)}</db-popover></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "animation": "disabled",
    "data-testid": "controlled-popover",
    "open": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button data-testid="toggle">Toggle</db-button><db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger" data-testid="controlled-button">Button</db-button>Test\`)}</db-popover></div>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};