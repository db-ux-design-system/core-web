import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BqvJLakp.js";import{i,n as a,t as o}from"./apply-web-component-args-BtUnDguQ.js";var s=t({DefaultTrue:()=>u,False:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBRadio/Show Label`,component:`db-radio`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{name:`Content`,showLabel:!0},render:({children:e,...t})=>n`<db-radio ${a(t)}>${i(`(Default) True`)}</db-radio>`},d={args:{name:`Content`,showLabel:!1},render:({children:e,...t})=>n`<div><db-radio ${a(t)}>${i(`False`)}</db-radio><db-infotext semantic="informational" size="small" icon="none">False</db-infotext></div>`},f=[`DefaultTrue`,`False`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Content",
    "showLabel": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-radio \${spreadArgs(args)}>\${unsafeHTML(\`(Default) True\`)}</db-radio>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Content",
    "showLabel": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-radio \${spreadArgs(args)}>\${unsafeHTML(\`False\`)}</db-radio><db-infotext semantic="informational" size="small" icon="none">False</db-infotext></div>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};