import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DcKsLlVE.js";import{n as i,t as a}from"./apply-web-component-args-CWgj8AIG.js";var o=t({AdaptiveVertical:()=>u,DefaultAdaptiveHorizontal:()=>l,__namedExportsOrder:()=>d,default:()=>c}),s,c,l,u,d;function f(){return(f=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDivider/Variant`,component:`db-divider`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`auto`]},variant:{control:`select`,options:[`horizontal`,`vertical`]},emphasis:{control:`select`,options:[`weak`,`strong`]},margin:{control:`select`,options:[`medium`,`small`,`large`,`none`,`_`]},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{width:`full`},render:({children:e,...t})=>n`<div style="width: 200px; height: 200px; display: grid; grid-template-rows: auto 1fr"><db-infotext size="small" semantic="informational">(Default) Adaptive - Horizontal</db-infotext><db-divider ${i(t)}></db-divider></div>`},u={args:{variant:`vertical`,width:`full`},render:({children:e,...t})=>n`<div style="height: 100px; display: grid; grid-template-rows: auto 1fr"><db-infotext size="small" semantic="informational">Adaptive - Vertical</db-infotext><db-divider ${i(t)}></db-divider></div>`},d=[`DefaultAdaptiveHorizontal`,`AdaptiveVertical`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 200px; height: 200px; display: grid; grid-template-rows: auto 1fr"><db-infotext size="small" semantic="informational">(Default) Adaptive - Horizontal</db-infotext><db-divider \${spreadArgs(args)}></db-divider></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "vertical",
    "width": "full"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="height: 100px; display: grid; grid-template-rows: auto 1fr"><db-infotext size="small" semantic="informational">Adaptive - Vertical</db-infotext><db-divider \${spreadArgs(args)}></db-divider></div>\`
}`,...u.parameters?.docs?.source}}}})))()}export{o as i,l as n,f as r,u as t};