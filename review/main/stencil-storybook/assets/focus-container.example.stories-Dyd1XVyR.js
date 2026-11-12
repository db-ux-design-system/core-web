import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CT9kjjde.js";import{i,n as a,t as o}from"./apply-web-component-args-MGmqLAAR.js";var s=t({DefaultNoClipping:()=>u,Wrap:()=>d,WrapFocusContainer:()=>f,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBStack/Focus Container`,component:`db-stack`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},height:{control:`select`,options:[`full`,`auto`]},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{"data-testid":`default-stack`},render:({children:e,...t})=>n`<div><db-stack ${a(t)}>${i(`<db-button data-focus="default">Focusable</db-button><span>Content 2</span>`)}</db-stack></div>`},d={args:{"data-testid":`wrap-stack`,wrap:!0},render:({children:e,...t})=>n`<div style="width: 160px; height: 88px"><db-stack ${a(t)}>${i(`<db-button data-focus="default">Focusable</db-button><span>Content 2</span><span>Content 3</span>`)}</db-stack></div>`},f={args:{"data-testid":`focus-container-stack`,"data-focus-container":`true`,wrap:!0},render:({children:e,...t})=>n`<div style="width: 160px; height: 88px"><db-stack ${a(t)}>${i(`<db-button data-focus="default">Focusable</db-button><span>Content 2</span><span>Content 3</span>`)}</db-stack></div>`},p=[`DefaultNoClipping`,`Wrap`,`WrapFocusContainer`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "default-stack"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<db-button data-focus="default">Focusable</db-button><span>Content 2</span>\`)}</db-stack></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "wrap-stack",
    "wrap": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 160px; height: 88px"><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<db-button data-focus="default">Focusable</db-button><span>Content 2</span><span>Content 3</span>\`)}</db-stack></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "focus-container-stack",
    "data-focus-container": "true",
    "wrap": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 160px; height: 88px"><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<db-button data-focus="default">Focusable</db-button><span>Content 2</span><span>Content 3</span>\`)}</db-stack></div>\`
}`,...f.parameters?.docs?.source}}}})))()}export{m as a,s as i,d as n,f as r,u as t};