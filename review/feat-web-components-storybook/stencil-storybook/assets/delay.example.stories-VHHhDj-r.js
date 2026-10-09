import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBPopover/Delay`,component:`db-popover`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},c={args:{id:`popover-133`,delay:`none`},render:({children:e,...n})=>t`<db-popover ${i(n)}>${r(`<ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>`)}</db-popover>`},l={args:{delay:`slow`,id:`popover-14`},render:({children:e,...n})=>t`<db-popover ${i(n)}>${r(`<ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>`)}</db-popover>`},u={args:{delay:`fast`,id:`popover-15`},render:({children:e,...n})=>t`<db-popover ${i(n)}>${r(`<ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>`)}</db-popover>`},d=[`DefaultNone`,`Slow`,`Fast`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-133",
    "delay": "none"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>\`)}</db-popover>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "slow",
    "id": "popover-14"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>\`)}</db-popover>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "fast",
    "id": "popover-15"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>\`)}</db-popover>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as DefaultNone,u as Fast,l as Slow,d as __namedExportsOrder,s as default};