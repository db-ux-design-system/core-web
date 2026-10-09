import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBCheckbox/Show Label`,component:`db-checkbox`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},indeterminate:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},message:{control:`text`},showMessage:{control:`boolean`},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{name:`Label`,showLabel:!0},render:({children:e,...n})=>t`<db-checkbox ${i(n)}>${r(`(Default) True`)}</db-checkbox>`},l={args:{name:`Label`,showLabel:!1},render:({children:e,...n})=>t`<div><db-checkbox ${i(n)}>${r(`False`)}</db-checkbox><db-infotext semantic="informational" size="small" icon="none">False</db-infotext></div>`},u=[`DefaultTrue`,`False`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Label",
    "showLabel": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-checkbox \${spreadArgs(args)}>\${unsafeHTML(\`(Default) True\`)}</db-checkbox>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Label",
    "showLabel": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-checkbox \${spreadArgs(args)}>\${unsafeHTML(\`False\`)}</db-checkbox><db-infotext semantic="informational" size="small" icon="none">False</db-infotext></div>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultTrue,l as False,u as __namedExportsOrder,s as default};