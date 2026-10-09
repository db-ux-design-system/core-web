import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{n as r,t as i}from"./apply-web-component-args-B1PNRnpa.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBDivider/Density`,component:`db-divider`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`auto`]},variant:{control:`select`,options:[`horizontal`,`vertical`]},emphasis:{control:`select`,options:[`weak`,`strong`]},margin:{control:`select`,options:[`medium`,`small`,`large`,`none`,`_`]},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{width:`full`},render:({children:e,...n})=>t`<div data-density="functional"><db-infotext size="small" semantic="informational">Functional</db-infotext><db-divider ${r(n)}></db-divider></div>`},c={args:{width:`full`},render:({children:e,...n})=>t`<div data-density="regular"><db-infotext size="small" semantic="informational">(Default) Regular</db-infotext><db-divider ${r(n)}></db-divider></div>`},l={args:{width:`full`},render:({children:e,...n})=>t`<div data-density="expressive"><db-infotext size="small" semantic="informational">Expressive</db-infotext><db-divider ${r(n)}></db-divider></div>`},u=[`Functional`,`DefaultRegular`,`Expressive`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="functional"><db-infotext size="small" semantic="informational">Functional</db-infotext><db-divider \${spreadArgs(args)}></db-divider></div>\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="regular"><db-infotext size="small" semantic="informational">(Default) Regular</db-infotext><db-divider \${spreadArgs(args)}></db-divider></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="expressive"><db-infotext size="small" semantic="informational">Expressive</db-infotext><db-divider \${spreadArgs(args)}></db-divider></div>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultRegular,l as Expressive,s as Functional,u as __namedExportsOrder,o as default};