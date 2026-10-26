import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,o as n}from"./iframe-D9I7ybTg.js";import{i as r,n as i,t as a}from"./apply-web-component-args-Cl2b-DPL.js";var o,s,c,l;function u(){return(u=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBPopover/Controlled`,component:`db-popover`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},c={args:{id:`popover-controlled`,open:!1,animation:!1},render:({children:e,...n})=>t`<div><div>Open DBPopover by switching open property</div><db-popover ${i(n)}>${r(`<db-button slot="trigger">Controlled popover</db-button>The parent owns the open state`)}</db-popover></div>`},l=[`Default`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-controlled",
    "open": false,
    "animation": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><div>Open DBPopover by switching open property</div><db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">Controlled popover</db-button>The parent owns the open state\`)}</db-popover></div>\`
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Default,l as __namedExportsOrder,s as default};