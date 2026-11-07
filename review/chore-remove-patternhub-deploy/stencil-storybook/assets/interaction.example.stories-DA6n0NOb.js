import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CSduPcDp.js";import{i,n as a,t as o}from"./apply-web-component-args-D-8sNeLN.js";var s=t({Interaction:()=>u,__namedExportsOrder:()=>d,default:()=>l}),c,l,u,d;function f(){return(f=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTooltip/Interaction`,component:`db-tooltip`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},u={args:{animation:`disabled`,id:`interaction-tooltip`,"data-testid":`tooltip`},render:({children:e,...t})=>n`<db-button aria-describedby="interaction-tooltip" data-testid="button">Button<db-tooltip ${a(t)}>${i(`Test`)}</db-tooltip></db-button>`},d=[`Interaction`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "animation": "disabled",
    "id": "interaction-tooltip",
    "data-testid": "tooltip"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button aria-describedby="interaction-tooltip" data-testid="button">Button<db-tooltip \${spreadArgs(args)}>\${unsafeHTML(\`Test\`)}</db-tooltip></db-button>\`
}`,...u.parameters?.docs?.source}}}})))()}export{f as n,s as r,u as t};