import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBRadio/Density`,component:`db-radio`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{"data-density":`functional`,name:`Density`,value:`functional`},render:({children:e,...n})=>t`<db-radio ${i(n)}>${r(`Functional`)}</db-radio>`},l={args:{"data-density":`regular`,name:`Density`,value:`regular`},render:({children:e,...n})=>t`<db-radio ${i(n)}>${r(`(Default) Regular`)}</db-radio>`},u={args:{"data-density":`expressive`,name:`Density`,value:`expressive`},render:({children:e,...n})=>t`<db-radio ${i(n)}>${r(`Expressive`)}</db-radio>`},d=[`Functional`,`DefaultRegular`,`Expressive`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "name": "Density",
    "value": "functional"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-radio \${spreadArgs(args)}>\${unsafeHTML(\`Functional\`)}</db-radio>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "name": "Density",
    "value": "regular"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-radio \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Regular\`)}</db-radio>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "name": "Density",
    "value": "expressive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-radio \${spreadArgs(args)}>\${unsafeHTML(\`Expressive\`)}</db-radio>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultRegular,u as Expressive,c as Functional,d as __namedExportsOrder,s as default};