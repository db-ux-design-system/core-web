import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DesJQKM_.js";import{i,n as a,t as o}from"./apply-web-component-args-CMbNfqh7.js";var s=t({DefaultAuto:()=>u,Fixed:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTooltip/Width`,component:`db-tooltip`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},u={args:{id:`tooltip-12`},render:({children:e,...t})=>n`<db-button>(Default) Auto<db-tooltip ${a(t)}>${i(`Max width, lorem ipsum dolor sit amet, consetetur sadipscing`)}</db-tooltip></db-button>`},d={args:{width:`fixed`,id:`tooltip-13`},render:({children:e,...t})=>n`<db-button>Fixed<db-tooltip ${a(t)}>${i(`Max width, lorem ipsum dolor sit amet, consetetur sadipscing`)}</db-tooltip></db-button>`},f=[`DefaultAuto`,`Fixed`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-12"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button>(Default) Auto<db-tooltip \${spreadArgs(args)}>\${unsafeHTML(\`Max width, lorem ipsum dolor sit amet, consetetur sadipscing\`)}</db-tooltip></db-button>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "fixed",
    "id": "tooltip-13"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button>Fixed<db-tooltip \${spreadArgs(args)}>\${unsafeHTML(\`Max width, lorem ipsum dolor sit amet, consetetur sadipscing\`)}</db-tooltip></db-button>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};