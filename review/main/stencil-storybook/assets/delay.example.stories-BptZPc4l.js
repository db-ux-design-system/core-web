import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BQPE-Z7b.js";import{i,n as a,t as o}from"./apply-web-component-args-B09ukjNm.js";var s=t({DefaultNone:()=>u,Fast:()=>f,Slow:()=>d,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBPopover/Delay`,component:`db-popover`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},u={args:{id:`popover-133`,delay:`none`},render:({children:e,...t})=>n`<db-popover ${a(t)}>${i(`<db-button slot="trigger">(Default) None</db-button><ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>`)}</db-popover>`},d={args:{delay:`slow`,id:`popover-14`},render:({children:e,...t})=>n`<db-popover ${a(t)}>${i(`<db-button slot="trigger">Slow</db-button><ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>`)}</db-popover>`},f={args:{delay:`fast`,id:`popover-15`},render:({children:e,...t})=>n`<db-popover ${a(t)}>${i(`<db-button slot="trigger">Fast</db-button><ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>`)}</db-popover>`},p=[`DefaultNone`,`Slow`,`Fast`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-133",
    "delay": "none"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">(Default) None</db-button><ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>\`)}</db-popover>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "slow",
    "id": "popover-14"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">Slow</db-button><ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>\`)}</db-popover>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "fast",
    "id": "popover-15"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">Fast</db-button><ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>\`)}</db-popover>\`
}`,...f.parameters?.docs?.source}}}})))()}export{m as a,s as i,f as n,d as r,u as t};