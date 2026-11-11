import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DnhM2czJ.js";import{i,n as a,t as o}from"./apply-web-component-args-B6TwiEBZ.js";var s=t({DefaultSmall:()=>u,Medium:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBBadge/Size`,component:`db-badge`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},placement:{control:`select`,options:[`inline`,`corner-top-left`,`corner-top-right`,`corner-center-left`,`corner-center-right`,`corner-bottom-left`,`corner-bottom-right`]},label:{control:`text`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{},render:({children:e,...t})=>n`<db-badge ${a(t)}>${i(`(Default) Small`)}</db-badge>`},d={args:{size:`medium`},render:({children:e,...t})=>n`<db-badge ${a(t)}>${i(`Medium`)}</db-badge>`},f=[`DefaultSmall`,`Medium`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Small\`)}</db-badge>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`Medium\`)}</db-badge>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};