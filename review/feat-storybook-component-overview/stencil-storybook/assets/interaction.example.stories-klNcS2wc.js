import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-dqn2cA9M.js";import{i,n as a,t as o}from"./apply-web-component-args-ARfb8F4v.js";var s=t({Interaction:()=>u,RadioInteraction1:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBRadio/Interaction`,component:`db-radio`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{"data-testid":`radio1`,name:`interaction`},render:({children:e,...t})=>n`<db-radio ${a(t)}>${i(`Test`)}</db-radio>`},d={args:{"data-testid":`radio2`,name:`interaction`},render:({children:e,...t})=>n`<db-radio ${a(t)}>${i(`Test 2`)}</db-radio>`},f=[`Interaction`,`RadioInteraction1`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "radio1",
    "name": "interaction"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-radio \${spreadArgs(args)}>\${unsafeHTML(\`Test\`)}</db-radio>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "radio2",
    "name": "interaction"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-radio \${spreadArgs(args)}>\${unsafeHTML(\`Test 2\`)}</db-radio>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};