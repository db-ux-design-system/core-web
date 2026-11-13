import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-Bx5_R3ll.js";import{i,n as a,t as o}from"./apply-web-component-args-K6-38IKB.js";var s=t({DefaultFalse:()=>u,True:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBCheckbox/Indeterminate`,component:`db-checkbox`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},indeterminate:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},message:{control:`text`},showMessage:{control:`boolean`},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{name:`Indeterminate`,indeterminate:!1},render:({children:e,...t})=>n`<db-checkbox ${a(t)}>${i(`(Default) False`)}</db-checkbox>`},d={args:{name:`Indeterminate`,indeterminate:!0},render:({children:e,...t})=>n`<db-checkbox ${a(t)}>${i(`True`)}</db-checkbox>`},f=[`DefaultFalse`,`True`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Indeterminate",
    "indeterminate": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-checkbox \${spreadArgs(args)}>\${unsafeHTML(\`(Default) False\`)}</db-checkbox>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Indeterminate",
    "indeterminate": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-checkbox \${spreadArgs(args)}>\${unsafeHTML(\`True\`)}</db-checkbox>\`
}`,...d.parameters?.docs?.source}}}})))()}export{p as i,d as n,s as r,u as t};