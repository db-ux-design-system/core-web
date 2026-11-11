import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-D0np5jyf.js";import{i,n as a,t as o}from"./apply-web-component-args-xwJgQS3t.js";var s=t({DefaultStatic:()=>u,Interactive:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBCard/Behavior`,component:`db-card`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:c()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},u={args:{behavior:`static`},render:({children:e,...t})=>n`<db-card ${a(t)}>${i(`<strong>(Default) Static</strong>`)}</db-card>`},d={args:{behavior:`interactive`},render:({children:e,...t})=>n`<button type="button"><db-card ${a(t)}>${i(`<strong>Interactive</strong>`)}</db-card></button>`},f=[`DefaultStatic`,`Interactive`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "static"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>(Default) Static</strong>\`)}</db-card>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "interactive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<button type="button"><db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>Interactive</strong>\`)}</db-card></button>\`
}`,...d.parameters?.docs?.source}}}})))()}export{p as i,d as n,s as r,u as t};