import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DUBFSgxg.js";import{i,n as a,t as o}from"./apply-web-component-args-Dyea0pIv.js";var s=t({DefaultTrue:()=>u,False:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBCheckbox/Show Label`,component:`db-checkbox`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},indeterminate:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},message:{control:`text`},messageProps:{control:`object`},validMessageProps:{control:`object`},invalidMessageProps:{control:`object`},showMessage:{control:`boolean`},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{name:`Label`,showLabel:!0},render:({children:e,...t})=>n`<db-checkbox ${a(t)}>${i(`(Default) True`)}</db-checkbox>`},d={args:{name:`Label`,showLabel:!1},render:({children:e,...t})=>n`<div><db-checkbox ${a(t)}>${i(`False`)}</db-checkbox><db-infotext semantic="informational" size="small" icon="none">False</db-infotext></div>`},f=[`DefaultTrue`,`False`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Label",
    "showLabel": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-checkbox \${spreadArgs(args)}>\${unsafeHTML(\`(Default) True\`)}</db-checkbox>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Label",
    "showLabel": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-checkbox \${spreadArgs(args)}>\${unsafeHTML(\`False\`)}</db-checkbox><db-infotext semantic="informational" size="small" icon="none">False</db-infotext></div>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};