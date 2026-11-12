import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BYLdompv.js";import{i,n as a,t as o}from"./apply-web-component-args-CTUelvRL.js";var s=t({DefaultFalse:()=>u,True:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTag/No Text`,component:`db-tag`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onRemove:c()},argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},behavior:{control:`select`,options:[`static`,`removable`]},showIcon:{control:`boolean`},noText:{control:`boolean`},content:{control:`text`},showCheckState:{control:`boolean`},overflow:{control:`boolean`},removeButton:{control:`text`},text:{control:`text`},value:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onRemove:{action:`onRemove`}}},u={args:{icon:`x_placeholder`},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`(Default) False`)}</db-tag>`},d={args:{icon:`x_placeholder`,noText:!0},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`True`)}</db-tag>`},f=[`DefaultFalse`,`True`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`(Default) False\`)}</db-tag>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "noText": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`True\`)}</db-tag>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};