import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BqvJLakp.js";import{i,n as a,t as o}from"./apply-web-component-args-BtUnDguQ.js";var s=t({DefaultFalse:()=>u,True:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBPopover/Gap`,component:`db-popover`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},u={args:{id:`popover-11`,gap:!1},render:({children:e,...t})=>n`<db-popover ${a(t)}>${i(`<db-button slot="trigger">(Default) False</db-button><ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>`)}</db-popover>`},d={args:{id:`popover-12`,gap:!0},render:({children:e,...t})=>n`<db-popover ${a(t)}>${i(`<db-button slot="trigger">True</db-button><ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>`)}</db-popover>`},f=[`DefaultFalse`,`True`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-11",
    "gap": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">(Default) False</db-button><ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>\`)}</db-popover>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-12",
    "gap": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">True</db-button><ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>\`)}</db-popover>\`
}`,...d.parameters?.docs?.source}}}})))()}export{p as i,d as n,s as r,u as t};