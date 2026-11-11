import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DnhM2czJ.js";import{i,n as a,t as o}from"./apply-web-component-args-B6TwiEBZ.js";var s=t({DefaultRegular:()=>d,Expressive:()=>f,Functional:()=>u,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBInfotext/Density`,component:`db-infotext`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},showIcon:{control:`boolean`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{"data-density":`functional`},render:({children:e,...t})=>n`<db-infotext ${a(t)}>${i(`Functional`)}</db-infotext>`},d={args:{"data-density":`regular`},render:({children:e,...t})=>n`<db-infotext ${a(t)}>${i(`(Default) Regular`)}</db-infotext>`},f={args:{"data-density":`expressive`},render:({children:e,...t})=>n`<db-infotext ${a(t)}>${i(`Expressive`)}</db-infotext>`},p=[`Functional`,`DefaultRegular`,`Expressive`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-infotext \${spreadArgs(args)}>\${unsafeHTML(\`Functional\`)}</db-infotext>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-infotext \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Regular\`)}</db-infotext>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-infotext \${spreadArgs(args)}>\${unsafeHTML(\`Expressive\`)}</db-infotext>\`
}`,...f.parameters?.docs?.source}}}})))()}export{m as a,s as i,f as n,u as r,d as t};