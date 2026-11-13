import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-Bx5_R3ll.js";import{i,n as a,t as o}from"./apply-web-component-args-K6-38IKB.js";var s=t({DefaultNovalidation:()=>u,Invalid:()=>d,Valid:()=>f,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBCheckbox/Validation`,component:`db-checkbox`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},indeterminate:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},message:{control:`text`},showMessage:{control:`boolean`},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{name:`Validation`,validation:`no-validation`},render:({children:e,...t})=>n`<db-checkbox ${a(t)}>${i(`(Default) No validation`)}</db-checkbox>`},d={args:{name:`Validation`,validation:`invalid`,invalidMessage:`Invalid Message`},render:({children:e,...t})=>n`<db-checkbox ${a(t)}>${i(`Invalid`)}</db-checkbox>`},f={args:{name:`Validation`,validation:`valid`,validMessage:`Valid message`},render:({children:e,...t})=>n`<db-checkbox ${a(t)}>${i(`Valid`)}</db-checkbox>`},p=[`DefaultNovalidation`,`Invalid`,`Valid`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Validation",
    "validation": "no-validation"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-checkbox \${spreadArgs(args)}>\${unsafeHTML(\`(Default) No validation\`)}</db-checkbox>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Validation",
    "validation": "invalid",
    "invalidMessage": "Invalid Message"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-checkbox \${spreadArgs(args)}>\${unsafeHTML(\`Invalid\`)}</db-checkbox>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Validation",
    "validation": "valid",
    "validMessage": "Valid message"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-checkbox \${spreadArgs(args)}>\${unsafeHTML(\`Valid\`)}</db-checkbox>\`
}`,...f.parameters?.docs?.source}}}})))()}export{s as a,m as i,d as n,f as r,u as t};