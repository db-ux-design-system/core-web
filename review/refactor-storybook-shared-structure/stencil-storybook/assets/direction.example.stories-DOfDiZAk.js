import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CEgE4mfw.js";import{i,n as a,t as o}from"./apply-web-component-args-CzDfGoSP.js";var s=t({DefaultColumn:()=>u,Row:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBStack/Direction`,component:`db-stack`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},height:{control:`select`,options:[`full`,`auto`]},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{style:{padding:`var(--db-spacing-fixed-xs)`}},render:({children:e,...t})=>n`<div style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 200px"><db-infotext size="small" icon="none" semantic="informational">(Default) Column</db-infotext><db-stack ${a(t)}>${i(`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>`)}</db-stack></div>`},d={args:{direction:`row`,style:{padding:`var(--db-spacing-fixed-xs)`}},render:({children:e,...t})=>n`<div style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); height: 100px"><db-infotext size="small" icon="none" semantic="informational">Row</db-infotext><db-stack ${a(t)}>${i(`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>`)}</db-stack></div>`},f=[`DefaultColumn`,`Row`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 200px"><db-infotext size="small" icon="none" semantic="informational">(Default) Column</db-infotext><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>\`)}</db-stack></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "row",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); height: 100px"><db-infotext size="small" icon="none" semantic="informational">Row</db-infotext><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>\`)}</db-stack></div>\`
}`,...d.parameters?.docs?.source}}}})))()}export{p as i,d as n,s as r,u as t};