import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-WDQ2nZ8t.js";import{i,n as a,t as o}from"./apply-web-component-args-CAS3eq59.js";var s=t({DefaultNone:()=>u,Fast:()=>f,Slow:()=>d,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTooltip/Delay`,component:`db-tooltip`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},u={args:{id:`tooltip-144`,delay:`none`},render:({children:e,...t})=>n`<db-button>(Default) None<db-tooltip ${a(t)}>${i(`Tooltip`)}</db-tooltip></db-button>`},d={args:{delay:`slow`,id:`tooltip-15`},render:({children:e,...t})=>n`<db-button>Slow<db-tooltip ${a(t)}>${i(`Tooltip`)}</db-tooltip></db-button>`},f={args:{delay:`fast`,id:`tooltip-16`},render:({children:e,...t})=>n`<db-button>Fast<db-tooltip ${a(t)}>${i(`Tooltip`)}</db-tooltip></db-button>`},p=[`DefaultNone`,`Slow`,`Fast`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-144",
    "delay": "none"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button>(Default) None<db-tooltip \${spreadArgs(args)}>\${unsafeHTML(\`Tooltip\`)}</db-tooltip></db-button>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "slow",
    "id": "tooltip-15"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button>Slow<db-tooltip \${spreadArgs(args)}>\${unsafeHTML(\`Tooltip\`)}</db-tooltip></db-button>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "fast",
    "id": "tooltip-16"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button>Fast<db-tooltip \${spreadArgs(args)}>\${unsafeHTML(\`Tooltip\`)}</db-tooltip></db-button>\`
}`,...f.parameters?.docs?.source}}}})))()}export{m as a,s as i,f as n,d as r,u as t};