import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BePC_G2C.js";import{i,n as a,t as o}from"./apply-web-component-args-DxCeR4in.js";var s=t({DefaultNoWrapColumn:()=>u,NoWrapRow:()=>d,WrapColumn:()=>f,WrapRow:()=>p,__namedExportsOrder:()=>m,default:()=>l}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBStack/Wrap`,component:`db-stack`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},height:{control:`select`,options:[`full`,`auto`]},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{style:{padding:`var(--db-spacing-fixed-xs)`}},render:({children:e,...t})=>n`<div style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 160px; height: 88px"><db-infotext size="small" icon="none" semantic="informational">(Default) No Wrap: Column</db-infotext><db-stack ${a(t)}>${i(`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>`)}</db-stack></div>`},d={args:{direction:`row`,style:{padding:`var(--db-spacing-fixed-xs)`}},render:({children:e,...t})=>n`<div style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 160px; height: 88px"><db-infotext size="small" icon="none" semantic="informational">No Wrap: Row</db-infotext><db-stack ${a(t)}>${i(`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>`)}</db-stack></div>`},f={args:{height:`full`,style:{padding:`var(--db-spacing-fixed-xs)`},wrap:!0},render:({children:e,...t})=>n`<div style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 160px; height: 120px"><db-infotext size="small" icon="none" semantic="informational">Wrap: Column</db-infotext><db-stack ${a(t)}>${i(`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>`)}</db-stack></div>`},p={args:{direction:`row`,style:{padding:`var(--db-spacing-fixed-xs)`},wrap:!0},render:({children:e,...t})=>n`<div style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 180px; height: 100px"><db-infotext size="small" icon="none" semantic="informational">Wrap: Row</db-infotext><db-stack ${a(t)}>${i(`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>`)}</db-stack></div>`},m=[`DefaultNoWrapColumn`,`NoWrapRow`,`WrapColumn`,`WrapRow`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 160px; height: 88px"><db-infotext size="small" icon="none" semantic="informational">(Default) No Wrap: Column</db-infotext><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>\`)}</db-stack></div>\`
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
  }: any) => html\`<div style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 160px; height: 88px"><db-infotext size="small" icon="none" semantic="informational">No Wrap: Row</db-infotext><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>\`)}</db-stack></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "height": "full",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    },
    "wrap": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 160px; height: 120px"><db-infotext size="small" icon="none" semantic="informational">Wrap: Column</db-infotext><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>\`)}</db-stack></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "row",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    },
    "wrap": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 180px; height: 100px"><db-infotext size="small" icon="none" semantic="informational">Wrap: Row</db-infotext><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>\`)}</db-stack></div>\`
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,p as i,d as n,s as o,f as r,u as t};