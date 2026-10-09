import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBRadio/Validation`,component:`db-radio`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{name:`No validation`,validation:`no-validation`},render:({children:e,...n})=>t`<db-radio ${i(n)}>${r(`(Default) No validation`)}</db-radio>`},l={args:{name:`invalid`,validation:`invalid`},render:({children:e,...n})=>t`<db-radio ${i(n)}>${r(`Invalid`)}</db-radio>`},u={args:{name:`valid`,validation:`valid`,checked:!0},render:({children:e,...n})=>t`<db-radio ${i(n)}>${r(`Valid`)}</db-radio>`},d=[`DefaultNovalidation`,`Invalid`,`Valid`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "No validation",
    "validation": "no-validation"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-radio \${spreadArgs(args)}>\${unsafeHTML(\`(Default) No validation\`)}</db-radio>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "invalid",
    "validation": "invalid"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-radio \${spreadArgs(args)}>\${unsafeHTML(\`Invalid\`)}</db-radio>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "valid",
    "validation": "valid",
    "checked": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-radio \${spreadArgs(args)}>\${unsafeHTML(\`Valid\`)}</db-radio>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as DefaultNovalidation,l as Invalid,u as Valid,d as __namedExportsOrder,s as default};