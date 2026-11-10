import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DBAghmrJ.js";import{n as i,t as a}from"./apply-web-component-args-BFw0IsXG.js";var o=t({DefaultRegular:()=>u,Expressive:()=>d,Functional:()=>l,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDivider/Density`,component:`db-divider`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`auto`]},variant:{control:`select`,options:[`horizontal`,`vertical`]},emphasis:{control:`select`,options:[`weak`,`strong`]},margin:{control:`select`,options:[`medium`,`small`,`large`,`none`,`_`]},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{width:`full`},render:({children:e,...t})=>n`<div data-density="functional" style="width: 200px; height: 200px; display: grid; grid-template-rows: auto 1fr"><db-infotext size="small" semantic="informational">Functional</db-infotext><db-divider ${i(t)}></db-divider></div>`},u={args:{width:`full`},render:({children:e,...t})=>n`<div data-density="regular" style="width: 200px; height: 200px; display: grid; grid-template-rows: auto 1fr"><db-infotext size="small" semantic="informational">(Default) Regular</db-infotext><db-divider ${i(t)}></db-divider></div>`},d={args:{width:`full`},render:({children:e,...t})=>n`<div data-density="expressive" style="width: 200px; height: 200px; display: grid; grid-template-rows: auto 1fr"><db-infotext size="small" semantic="informational">Expressive</db-infotext><db-divider ${i(t)}></db-divider></div>`},f=[`Functional`,`DefaultRegular`,`Expressive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="functional" style="width: 200px; height: 200px; display: grid; grid-template-rows: auto 1fr"><db-infotext size="small" semantic="informational">Functional</db-infotext><db-divider \${spreadArgs(args)}></db-divider></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="regular" style="width: 200px; height: 200px; display: grid; grid-template-rows: auto 1fr"><db-infotext size="small" semantic="informational">(Default) Regular</db-infotext><db-divider \${spreadArgs(args)}></db-divider></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="expressive" style="width: 200px; height: 200px; display: grid; grid-template-rows: auto 1fr"><db-infotext size="small" semantic="informational">Expressive</db-infotext><db-divider \${spreadArgs(args)}></db-divider></div>\`
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,o as i,d as n,l as r,u as t};