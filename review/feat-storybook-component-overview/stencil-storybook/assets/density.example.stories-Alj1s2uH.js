import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-dqn2cA9M.js";import{i,n as a,t as o}from"./apply-web-component-args-ARfb8F4v.js";var s=t({Expressive:()=>f,Functional:()=>u,Regular:()=>d,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBButton/Density`,component:`db-button`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:c()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},u={args:{"data-density":`functional`,onClick:c()},render:({children:e,...t})=>n`<db-button ${a(t)}>${i(`Functional`)}</db-button>`},d={args:{"data-density":`regular`,onClick:c()},render:({children:e,...t})=>n`<db-button ${a(t)}>${i(`(Default) Regular`)}</db-button>`},f={args:{"data-density":`expressive`,onClick:c()},render:({children:e,...t})=>n`<db-button ${a(t)}>${i(`Expressive`)}</db-button>`},p=[`Functional`,`Regular`,`Expressive`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "onClick": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button \${spreadArgs(args)}>\${unsafeHTML(\`Functional\`)}</db-button>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "onClick": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Regular\`)}</db-button>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "onClick": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button \${spreadArgs(args)}>\${unsafeHTML(\`Expressive\`)}</db-button>\`
}`,...f.parameters?.docs?.source}}}})))()}export{m as a,s as i,u as n,d as r,f as t};