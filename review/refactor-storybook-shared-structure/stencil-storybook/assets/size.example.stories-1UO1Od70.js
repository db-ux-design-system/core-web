import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BAEUE7d2.js";import{i,n as a,t as o}from"./apply-web-component-args-D3zo3NLI.js";var s=t({DefaultMedium:()=>u,Small:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBRadio/Size`,component:`db-radio`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{name:`Size`},render:({children:e,...t})=>n`<db-radio ${a(t)}>${i(`(Default) Medium`)}</db-radio>`},d={args:{name:`Size`,size:`small`},render:({children:e,...t})=>n`<db-radio ${a(t)}>${i(`Small`)}</db-radio>`},f=[`DefaultMedium`,`Small`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Size"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-radio \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Medium\`)}</db-radio>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Size",
    "size": "small"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-radio \${spreadArgs(args)}>\${unsafeHTML(\`Small\`)}</db-radio>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};