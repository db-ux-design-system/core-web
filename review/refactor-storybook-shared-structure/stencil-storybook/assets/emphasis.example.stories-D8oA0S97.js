import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DnhM2czJ.js";import{i,n as a,t as o}from"./apply-web-component-args-B6TwiEBZ.js";var s=t({DefaultWeak:()=>u,Strong:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTooltip/Emphasis`,component:`db-tooltip`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},u={args:{id:`tooltip-06`},render:({children:e,...t})=>n`<db-button>(Default) Weak<db-tooltip ${a(t)}>${i(`Tooltip`)}</db-tooltip></db-button>`},d={args:{emphasis:`strong`,id:`tooltip-07`},render:({children:e,...t})=>n`<db-button>Strong<db-tooltip ${a(t)}>${i(`Tooltip`)}</db-tooltip></db-button>`},f=[`DefaultWeak`,`Strong`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-06"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button>(Default) Weak<db-tooltip \${spreadArgs(args)}>\${unsafeHTML(\`Tooltip\`)}</db-tooltip></db-button>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "id": "tooltip-07"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button>Strong<db-tooltip \${spreadArgs(args)}>\${unsafeHTML(\`Tooltip\`)}</db-tooltip></db-button>\`
}`,...d.parameters?.docs?.source}}}})))()}export{p as i,d as n,s as r,u as t};