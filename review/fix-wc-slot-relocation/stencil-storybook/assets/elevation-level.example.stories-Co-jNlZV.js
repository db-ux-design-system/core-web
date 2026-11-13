import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-jKxCeSdn.js";import{i,n as a,t as o}from"./apply-web-component-args-DBg8616B.js";var s=t({DefaultLevel1:()=>u,Level2:()=>d,Level3:()=>f,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBCard/Elevation Level`,component:`db-card`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:c()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},u={args:{elevationLevel:`1`},render:({children:e,...t})=>n`<db-card ${a(t)}>${i(`<strong>(Default) 1</strong>`)}</db-card>`},d={args:{elevationLevel:`2`},render:({children:e,...t})=>n`<db-card ${a(t)}>${i(`<strong>2</strong>`)}</db-card>`},f={args:{elevationLevel:`3`},render:({children:e,...t})=>n`<db-card ${a(t)}>${i(`<strong>3</strong>`)}</db-card>`},p=[`DefaultLevel1`,`Level2`,`Level3`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "1"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>(Default) 1</strong>\`)}</db-card>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "2"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>2</strong>\`)}</db-card>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "3"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>3</strong>\`)}</db-card>\`
}`,...f.parameters?.docs?.source}}}})))()}export{m as a,s as i,d as n,f as r,u as t};