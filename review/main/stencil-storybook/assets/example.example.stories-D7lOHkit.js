import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-B4vbRiLP.js";import{i,n as a,t as o}from"./apply-web-component-args-nLpIKx2m.js";var s=t({Level1Interactive:()=>u,Level2Interactive:()=>d,Level3Interactive:()=>f,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBCard/Example`,component:`db-card`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:c()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},u={args:{elevationLevel:`1`,behavior:`interactive`},render:({children:e,...t})=>n`<button type="button"><db-card ${a(t)}>${i(`<strong>Level 1 - Interactive</strong>`)}</db-card></button>`},d={args:{elevationLevel:`2`,behavior:`interactive`},render:({children:e,...t})=>n`<button type="button"><db-card ${a(t)}>${i(`<strong>Level 2 - Interactive</strong>`)}</db-card></button>`},f={args:{elevationLevel:`3`,behavior:`interactive`},render:({children:e,...t})=>n`<button type="button"><db-card ${a(t)}>${i(`<strong>Level 3 - Interactive</strong>`)}</db-card></button>`},p=[`Level1Interactive`,`Level2Interactive`,`Level3Interactive`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "1",
    "behavior": "interactive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<button type="button"><db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>Level 1 - Interactive</strong>\`)}</db-card></button>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "2",
    "behavior": "interactive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<button type="button"><db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>Level 2 - Interactive</strong>\`)}</db-card></button>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "3",
    "behavior": "interactive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<button type="button"><db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>Level 3 - Interactive</strong>\`)}</db-card></button>\`
}`,...f.parameters?.docs?.source}}}})))()}export{m as a,s as i,d as n,f as r,u as t};