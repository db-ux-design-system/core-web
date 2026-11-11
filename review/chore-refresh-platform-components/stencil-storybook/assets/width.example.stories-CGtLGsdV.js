import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-D0np5jyf.js";import{i,n as a,t as o}from"./apply-web-component-args-xwJgQS3t.js";var s=t({DefaultAuto:()=>u,Fixed:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBPopover/Width`,component:`db-popover`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},u={args:{id:`popover-17`},render:({children:e,...t})=>n`<db-popover ${a(t)}>${i(`<db-button slot="trigger">(Default) Auto</db-button>Max width, lorem ipsum dolor sit amet, consetetur sadipscing`)}</db-popover>`},d={args:{width:`fixed`,id:`popover-18`},render:({children:e,...t})=>n`<db-popover ${a(t)}>${i(`<db-button slot="trigger">Fixed</db-button>Max width, lorem ipsum dolor sit amet, consetetur sadipscing`)}</db-popover>`},f=[`DefaultAuto`,`Fixed`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-17"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">(Default) Auto</db-button>Max width, lorem ipsum dolor sit amet, consetetur sadipscing\`)}</db-popover>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "fixed",
    "id": "popover-18"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">Fixed</db-button>Max width, lorem ipsum dolor sit amet, consetetur sadipscing\`)}</db-popover>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};