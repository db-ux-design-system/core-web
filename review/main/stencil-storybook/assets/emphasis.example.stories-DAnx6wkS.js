import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BQPE-Z7b.js";import{i,n as a,t as o}from"./apply-web-component-args-B09ukjNm.js";var s=t({DefaultWeak:()=>u,Strong:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTag/Emphasis`,component:`db-tag`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onRemove:c()},argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},behavior:{control:`select`,options:[`static`,`removable`]},showIcon:{control:`boolean`},noText:{control:`boolean`},content:{control:`text`},showCheckState:{control:`boolean`},overflow:{control:`boolean`},removeButton:{control:`text`},text:{control:`text`},value:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onRemove:{action:`onRemove`}}},u={args:{},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`(Default) Weak`)}</db-tag>`},d={args:{emphasis:`strong`},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`Strong`)}</db-tag>`},f=[`DefaultWeak`,`Strong`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Weak\`)}</db-tag>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`Strong\`)}</db-tag>\`
}`,...d.parameters?.docs?.source}}}})))()}export{p as i,d as n,s as r,u as t};