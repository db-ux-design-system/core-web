import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-eRVGBq1F.js";import{i,n as a,t as o}from"./apply-web-component-args-DDM1wTo-.js";var s=t({DefaultRegular:()=>d,Expressive:()=>f,Functional:()=>u,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTooltip/Density`,component:`db-tooltip`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},u={args:{id:`tooltip-01`},render:({children:e,...t})=>n`<db-button data-density="functional">Functional<db-tooltip ${a(t)}>${i(`Tooltip`)}</db-tooltip></db-button>`},d={args:{id:`tooltip-02`},render:({children:e,...t})=>n`<db-button data-density="regular">(Default) Regular<db-tooltip ${a(t)}>${i(`Tooltip`)}</db-tooltip></db-button>`},f={args:{id:`tooltip-03`},render:({children:e,...t})=>n`<db-button data-density="expressive">Expressive<db-tooltip ${a(t)}>${i(`Tooltip`)}</db-tooltip></db-button>`},p=[`Functional`,`DefaultRegular`,`Expressive`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-01"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button data-density="functional">Functional<db-tooltip \${spreadArgs(args)}>\${unsafeHTML(\`Tooltip\`)}</db-tooltip></db-button>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-02"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button data-density="regular">(Default) Regular<db-tooltip \${spreadArgs(args)}>\${unsafeHTML(\`Tooltip\`)}</db-tooltip></db-button>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-03"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button data-density="expressive">Expressive<db-tooltip \${spreadArgs(args)}>\${unsafeHTML(\`Tooltip\`)}</db-tooltip></db-button>\`
}`,...f.parameters?.docs?.source}}}})))()}export{m as a,s as i,f as n,u as r,d as t};