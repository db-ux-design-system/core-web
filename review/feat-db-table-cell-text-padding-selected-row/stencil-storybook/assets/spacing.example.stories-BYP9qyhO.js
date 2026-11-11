import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-6dzo3qU4.js";import{i,n as a,t as o}from"./apply-web-component-args-WLmUBxRd.js";var s=t({DefaultSmall:()=>u,Large:()=>f,Medium:()=>d,None:()=>p,__namedExportsOrder:()=>m,default:()=>l}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBCard/Spacing`,component:`db-card`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:c()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},u={args:{spacing:`small`},render:({children:e,...t})=>n`<db-card ${a(t)}>${i(`<strong>(Default) Small</strong>`)}</db-card>`},d={args:{spacing:`medium`},render:({children:e,...t})=>n`<db-card ${a(t)}>${i(`<strong>Medium</strong>`)}</db-card>`},f={args:{spacing:`large`},render:({children:e,...t})=>n`<db-card ${a(t)}>${i(`<strong>Large</strong>`)}</db-card>`},p={args:{spacing:`none`},render:({children:e,...t})=>n`<db-card ${a(t)}>${i(`<strong>None</strong>`)}</db-card>`},m=[`DefaultSmall`,`Medium`,`Large`,`None`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "small"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>(Default) Small</strong>\`)}</db-card>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "medium"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>Medium</strong>\`)}</db-card>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "large"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>Large</strong>\`)}</db-card>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "none"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>None</strong>\`)}</db-card>\`
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,p as i,f as n,s as o,d as r,u as t};