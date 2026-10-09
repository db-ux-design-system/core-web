import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{n as r,t as i}from"./apply-web-component-args-B1PNRnpa.js";var a,o,s,c,l;function u(){return(u=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBDivider/Emphasis`,component:`db-divider`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`auto`]},variant:{control:`select`,options:[`horizontal`,`vertical`]},emphasis:{control:`select`,options:[`weak`,`strong`]},margin:{control:`select`,options:[`medium`,`small`,`large`,`none`,`_`]},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{width:`full`},render:({children:e,...n})=>t`<div><db-infotext size="small" semantic="informational">(Default) Weak</db-infotext><db-divider ${r(n)}></db-divider></div>`},c={args:{emphasis:`strong`,width:`full`},render:({children:e,...n})=>t`<div><db-infotext size="small" semantic="informational">Strong</db-infotext><db-divider ${r(n)}></db-divider></div>`},l=[`DefaultWeak`,`Strong`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext size="small" semantic="informational">(Default) Weak</db-infotext><db-divider \${spreadArgs(args)}></db-divider></div>\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "width": "full"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext size="small" semantic="informational">Strong</db-infotext><db-divider \${spreadArgs(args)}></db-divider></div>\`
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as DefaultWeak,c as Strong,l as __namedExportsOrder,o as default};