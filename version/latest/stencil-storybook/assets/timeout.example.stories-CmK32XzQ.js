import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BYLdompv.js";import{i,n as a,t as o}from"./apply-web-component-args-CTUelvRL.js";var s=t({Timeout:()=>u,__namedExportsOrder:()=>d,default:()=>l}),c,l,u,d;function f(){return(f=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBLoadingIndicator/Examples: Timeout`,component:`db-loading-indicator`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onTimeout:c()},argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},onTimeout:{action:`onTimeout`}}},u={args:{state:`inactive`,overlay:!0,onTimeout:c()},render:({children:e,...t})=>n`<db-button icon="x_placeholder"><db-loading-indicator ${a(t)}>${i(`Loading`)}</db-loading-indicator>Start Timeout</db-button>`},d=[`Timeout`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "state": 'inactive',
    "overlay": true,
    "onTimeout": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button icon="x_placeholder"><db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Loading\`)}</db-loading-indicator>Start Timeout</db-button>\`
}`,...u.parameters?.docs?.source}}}})))()}export{f as n,s as r,u as t};