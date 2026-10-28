import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,o as n}from"./iframe-Br6etAwV.js";import{i as r,n as i,t as a}from"./apply-web-component-args-DordW00e.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBPopover/Gap`,component:`db-popover`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},c={args:{id:`popover-11`,gap:!1},render:({children:e,...n})=>t`<db-popover ${i(n)}>${r(`<db-button slot="trigger">(Default) False</db-button><ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>`)}</db-popover>`},l={args:{id:`popover-12`,gap:!0},render:({children:e,...n})=>t`<db-popover ${i(n)}>${r(`<db-button slot="trigger">True</db-button><ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>`)}</db-popover>`},u=[`DefaultFalse`,`True`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-11",
    "gap": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">(Default) False</db-button><ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>\`)}</db-popover>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-12",
    "gap": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-popover \${spreadArgs(args)}>\${unsafeHTML(\`<db-button slot="trigger">True</db-button><ul><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul><db-button>Popover Custom Item 3</db-button>\`)}</db-popover>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultFalse,l as True,u as __namedExportsOrder,s as default};