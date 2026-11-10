import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DBAghmrJ.js";import{i,n as a,t as o}from"./apply-web-component-args-BFw0IsXG.js";var s=t({Critical:()=>f,DefaultAdaptive:()=>u,Informational:()=>p,Neutral:()=>d,Successful:()=>m,Warning:()=>h,__namedExportsOrder:()=>g,default:()=>l}),c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBInfotext/Semantic`,component:`db-infotext`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},showIcon:{control:`boolean`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{},render:({children:e,...t})=>n`<db-infotext ${a(t)}>${i(`(Default) Adaptive`)}</db-infotext>`},d={args:{semantic:`neutral`},render:({children:e,...t})=>n`<db-infotext ${a(t)}>${i(`Neutral`)}</db-infotext>`},f={args:{semantic:`critical`},render:({children:e,...t})=>n`<db-infotext ${a(t)}>${i(`Critical`)}</db-infotext>`},p={args:{semantic:`informational`},render:({children:e,...t})=>n`<db-infotext ${a(t)}>${i(`Informational`)}</db-infotext>`},m={args:{semantic:`successful`},render:({children:e,...t})=>n`<db-infotext ${a(t)}>${i(`Successful`)}</db-infotext>`},h={args:{semantic:`warning`},render:({children:e,...t})=>n`<db-infotext ${a(t)}>${i(`Warning`)}</db-infotext>`},g=[`DefaultAdaptive`,`Neutral`,`Critical`,`Informational`,`Successful`,`Warning`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-infotext \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Adaptive\`)}</db-infotext>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "neutral"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-infotext \${spreadArgs(args)}>\${unsafeHTML(\`Neutral\`)}</db-infotext>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-infotext \${spreadArgs(args)}>\${unsafeHTML(\`Critical\`)}</db-infotext>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "informational"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-infotext \${spreadArgs(args)}>\${unsafeHTML(\`Informational\`)}</db-infotext>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "successful"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-infotext \${spreadArgs(args)}>\${unsafeHTML(\`Successful\`)}</db-infotext>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "warning"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-infotext \${spreadArgs(args)}>\${unsafeHTML(\`Warning\`)}</db-infotext>\`
}`,...h.parameters?.docs?.source}}}})))()}export{m as a,s as c,d as i,u as n,h as o,p as r,_ as s,f as t};