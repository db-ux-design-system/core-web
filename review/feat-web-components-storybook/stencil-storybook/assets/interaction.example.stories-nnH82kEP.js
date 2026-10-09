import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBRadio/Interaction`,component:`db-radio`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{"data-testid":`radio1`,name:`interaction`},render:({children:e,...n})=>t`<db-radio ${i(n)}>${r(`Test`)}</db-radio>`},l={args:{"data-testid":`radio2`,name:`interaction`},render:({children:e,...n})=>t`<db-radio ${i(n)}>${r(`Test 2`)}</db-radio>`},u=[`Interaction`,`RadioInteraction1`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "radio1",
    "name": "interaction"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-radio \${spreadArgs(args)}>\${unsafeHTML(\`Test\`)}</db-radio>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "radio2",
    "name": "interaction"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-radio \${spreadArgs(args)}>\${unsafeHTML(\`Test 2\`)}</db-radio>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Interaction,l as RadioInteraction1,u as __namedExportsOrder,s as default};