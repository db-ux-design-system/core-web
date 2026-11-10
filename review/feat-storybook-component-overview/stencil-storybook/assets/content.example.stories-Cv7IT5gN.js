import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DBUpr5OO.js";import{i,n as a,t as o}from"./apply-web-component-args-OHuaz6RS.js";var s=t({DefaultText:()=>u,DotSmall:()=>d,IconSmall:()=>f,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBBadge/Content`,component:`db-badge`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},placement:{control:`select`,options:[`inline`,`corner-top-left`,`corner-top-right`,`corner-center-left`,`corner-center-right`,`corner-bottom-left`,`corner-bottom-right`]},label:{control:`text`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{},render:({children:e,...t})=>n`<db-badge ${a(t)}>${i(`(Default) Text`)}</db-badge>`},d={args:{},render:({children:e,...t})=>n`<db-badge ${a(t)}></db-badge>`},f={args:{semantic:`critical`,emphasis:`strong`},render:({children:e,...t})=>n`<db-badge ${a(t)}>${i(`<db-icon icon="x_placeholder">Icon - Small</db-icon>`)}</db-badge>`},p=[`DefaultText`,`DotSmall`,`IconSmall`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Text\`)}</db-badge>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}></db-badge>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical",
    "emphasis": "strong"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`<db-icon icon="x_placeholder">Icon - Small</db-icon>\`)}</db-badge>\`
}`,...f.parameters?.docs?.source}}}})))()}export{m as a,s as i,d as n,f as r,u as t};