import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BtOd1Ffp.js";import{i,n as a,t as o}from"./apply-web-component-args-CQL2ppoc.js";var s=t({DefaultFalse:()=>u,True:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBRadio/Disabled`,component:`db-radio`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{name:`Disabled`,disabled:!1},render:({children:e,...t})=>n`<db-radio ${a(t)}>${i(`(Default) False`)}</db-radio>`},d={args:{name:`Disabled`,disabled:!0},render:({children:e,...t})=>n`<db-radio ${a(t)}>${i(`True`)}</db-radio>`},f=[`DefaultFalse`,`True`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Disabled",
    "disabled": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-radio \${spreadArgs(args)}>\${unsafeHTML(\`(Default) False\`)}</db-radio>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Disabled",
    "disabled": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-radio \${spreadArgs(args)}>\${unsafeHTML(\`True\`)}</db-radio>\`
}`,...d.parameters?.docs?.source}}}})))()}export{p as i,d as n,s as r,u as t};