import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-dqn2cA9M.js";import{i,n as a,t as o}from"./apply-web-component-args-ARfb8F4v.js";var s=t({Default:()=>u,__namedExportsOrder:()=>d,default:()=>l}),c,l,u,d;function f(){return(f=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBPopover/Controlled`,component:`db-popover`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},u={args:{id:`popover-controlled`,open:!1,animation:!1},render:({children:e,...t})=>n`<div><div>Open DBPopover by switching open property</div><db-popover ${a(t)}>${i(`<db-button slot="trigger">Controlled popover</db-button>The parent owns the open state`)}</db-popover></div>`},d=[`Default`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-controlled",
    "open": false,
    "animation": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><div>Open DBPopover by switching open property</div><db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">Controlled popover</db-button>The parent owns the open state\`)}</db-popover></div>\`
}`,...u.parameters?.docs?.source}}}})))()}export{s as n,f as r,u as t};