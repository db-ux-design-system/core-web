import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DcKsLlVE.js";import{i,n as a,t as o}from"./apply-web-component-args-CWgj8AIG.js";var s=t({DefaultSmall:()=>u,Large:()=>f,Medium:()=>d,None:()=>p,__namedExportsOrder:()=>m,default:()=>l}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBPopover/Spacing`,component:`db-popover`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},u={args:{spacing:`small`,id:`popover-04`},render:({children:e,...t})=>n`<db-popover ${a(t)}>${i(`<db-button slot="trigger">(Default) Small</db-button><ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>`)}</db-popover>`},d={args:{spacing:`medium`,id:`popover-05`},render:({children:e,...t})=>n`<db-popover ${a(t)}>${i(`<db-button slot="trigger">Medium</db-button><ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>`)}</db-popover>`},f={args:{spacing:`large`,id:`popover-055`},render:({children:e,...t})=>n`<db-popover ${a(t)}>${i(`<db-button slot="trigger">Large</db-button><ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>`)}</db-popover>`},p={args:{spacing:`none`,id:`popover-06`},render:({children:e,...t})=>n`<db-popover ${a(t)}>${i(`<db-button slot="trigger">None</db-button><ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>`)}</db-popover>`},m=[`DefaultSmall`,`Medium`,`Large`,`None`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "small",
    "id": "popover-04"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">(Default) Small</db-button><ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>\`)}</db-popover>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "medium",
    "id": "popover-05"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">Medium</db-button><ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>\`)}</db-popover>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "large",
    "id": "popover-055"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">Large</db-button><ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>\`)}</db-popover>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "none",
    "id": "popover-06"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">None</db-button><ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>\`)}</db-popover>\`
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,p as i,f as n,s as o,d as r,u as t};