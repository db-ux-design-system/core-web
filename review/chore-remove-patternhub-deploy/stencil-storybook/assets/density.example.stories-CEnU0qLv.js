import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BqvJLakp.js";import{i,n as a,t as o}from"./apply-web-component-args-BtUnDguQ.js";var s=t({DefaultRegular:()=>d,Expressive:()=>f,Functional:()=>u,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBBadge/Density`,component:`db-badge`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},placement:{control:`select`,options:[`inline`,`corner-top-left`,`corner-top-right`,`corner-center-left`,`corner-center-right`,`corner-bottom-left`,`corner-bottom-right`]},label:{control:`text`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{"data-density":`functional`},render:({children:e,...t})=>n`<db-badge ${a(t)}>${i(`Functional`)}</db-badge>`},d={args:{"data-density":`regular`},render:({children:e,...t})=>n`<db-badge ${a(t)}>${i(`(Default) Regular`)}</db-badge>`},f={args:{"data-density":`expressive`},render:({children:e,...t})=>n`<db-badge ${a(t)}>${i(`Expressive`)}</db-badge>`},p=[`Functional`,`DefaultRegular`,`Expressive`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`Functional\`)}</db-badge>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Regular\`)}</db-badge>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`Expressive\`)}</db-badge>\`
}`,...f.parameters?.docs?.source}}}})))()}export{m as a,s as i,f as n,u as r,d as t};