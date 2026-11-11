import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-D0np5jyf.js";import{i,n as a,t as o}from"./apply-web-component-args-xwJgQS3t.js";var s=t({DefaultMedium:()=>u,Small:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBCheckbox/Size`,component:`db-checkbox`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},indeterminate:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},message:{control:`text`},showMessage:{control:`boolean`},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{name:`Size`},render:({children:e,...t})=>n`<db-checkbox ${a(t)}>${i(`(Default) Medium`)}</db-checkbox>`},d={args:{name:`Size`,size:`small`},render:({children:e,...t})=>n`<db-checkbox ${a(t)}>${i(`Small`)}</db-checkbox>`},f=[`DefaultMedium`,`Small`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Size"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-checkbox \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Medium\`)}</db-checkbox>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Size",
    "size": "small"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-checkbox \${spreadArgs(args)}>\${unsafeHTML(\`Small\`)}</db-checkbox>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};