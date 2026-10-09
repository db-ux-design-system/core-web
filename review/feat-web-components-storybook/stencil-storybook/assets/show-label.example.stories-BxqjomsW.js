import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBRadio/Show Label`,component:`db-radio`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{name:`Content`,showLabel:!0},render:({children:e,...n})=>t`<db-radio ${i(n)}>${r(`(Default) True`)}</db-radio>`},l={args:{name:`Content`,showLabel:!1},render:({children:e,...n})=>t`<div><db-radio ${i(n)}>${r(`False`)}</db-radio><db-infotext semantic="informational" size="small" icon="none">False</db-infotext></div>`},u=[`DefaultTrue`,`False`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Content",
    "showLabel": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-radio \${spreadArgs(args)}>\${unsafeHTML(\`(Default) True\`)}</db-radio>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Content",
    "showLabel": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-radio \${spreadArgs(args)}>\${unsafeHTML(\`False\`)}</db-radio><db-infotext semantic="informational" size="small" icon="none">False</db-infotext></div>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultTrue,l as False,u as __namedExportsOrder,s as default};