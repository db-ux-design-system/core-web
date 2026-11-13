import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-B4vbRiLP.js";import{i,n as a,t as o}from"./apply-web-component-args-nLpIKx2m.js";var s=t({DefaultNovalidation:()=>u,Invalid:()=>d,Valid:()=>f,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBRadio/Validation`,component:`db-radio`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{name:`No validation`,validation:`no-validation`},render:({children:e,...t})=>n`<db-radio ${a(t)}>${i(`(Default) No validation`)}</db-radio>`},d={args:{name:`invalid`,validation:`invalid`},render:({children:e,...t})=>n`<db-radio ${a(t)}>${i(`Invalid`)}</db-radio>`},f={args:{name:`valid`,validation:`valid`,checked:!0},render:({children:e,...t})=>n`<db-radio ${a(t)}>${i(`Valid`)}</db-radio>`},p=[`DefaultNovalidation`,`Invalid`,`Valid`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "No validation",
    "validation": "no-validation"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-radio \${spreadArgs(args)}>\${unsafeHTML(\`(Default) No validation\`)}</db-radio>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "invalid",
    "validation": "invalid"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-radio \${spreadArgs(args)}>\${unsafeHTML(\`Invalid\`)}</db-radio>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "valid",
    "validation": "valid",
    "checked": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-radio \${spreadArgs(args)}>\${unsafeHTML(\`Valid\`)}</db-radio>\`
}`,...f.parameters?.docs?.source}}}})))()}export{s as a,m as i,d as n,f as r,u as t};