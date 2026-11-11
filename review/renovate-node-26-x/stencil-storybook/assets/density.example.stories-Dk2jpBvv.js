import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DcKsLlVE.js";import{i,n as a,t as o}from"./apply-web-component-args-CWgj8AIG.js";var s=t({DefaultRegular:()=>d,Expressive:()=>f,Functional:()=>u,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBCheckbox/Density`,component:`db-checkbox`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},indeterminate:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},message:{control:`text`},showMessage:{control:`boolean`},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{"data-density":`functional`,name:`Density`},render:({children:e,...t})=>n`<db-checkbox ${a(t)}>${i(`Functional`)}</db-checkbox>`},d={args:{"data-density":`regular`,name:`Density`},render:({children:e,...t})=>n`<db-checkbox ${a(t)}>${i(`(Default) Regular`)}</db-checkbox>`},f={args:{"data-density":`expressive`,name:`Density`},render:({children:e,...t})=>n`<db-checkbox ${a(t)}>${i(`Expressive`)}</db-checkbox>`},p=[`Functional`,`DefaultRegular`,`Expressive`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "name": "Density"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-checkbox \${spreadArgs(args)}>\${unsafeHTML(\`Functional\`)}</db-checkbox>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "name": "Density"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-checkbox \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Regular\`)}</db-checkbox>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "name": "Density"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-checkbox \${spreadArgs(args)}>\${unsafeHTML(\`Expressive\`)}</db-checkbox>\`
}`,...f.parameters?.docs?.source}}}})))()}export{m as a,s as i,f as n,u as r,d as t};