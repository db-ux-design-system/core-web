import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BqvJLakp.js";import{i,n as a,t as o}from"./apply-web-component-args-BtUnDguQ.js";var s=t({Center:()=>f,DefaultStretch:()=>u,End:()=>p,Start:()=>d,__namedExportsOrder:()=>m,default:()=>l}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBStack/Alignment Column`,component:`db-stack`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},height:{control:`select`,options:[`full`,`auto`]},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{alignment:`stretch`,style:{padding:`var(--db-spacing-fixed-xs)`,border:`var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)`}},render:({children:e,...t})=>n`<div style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 200px"><db-infotext size="small" icon="none" semantic="informational">(Default) Stretch</db-infotext><db-stack ${a(t)}>${i(`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>`)}</db-stack></div>`},d={args:{alignment:`start`,style:{padding:`var(--db-spacing-fixed-xs)`,border:`var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)`}},render:({children:e,...t})=>n`<div style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 200px"><db-infotext size="small" icon="none" semantic="informational">Start</db-infotext><db-stack ${a(t)}>${i(`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>`)}</db-stack></div>`},f={args:{alignment:`center`,style:{padding:`var(--db-spacing-fixed-xs)`,border:`var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)`}},render:({children:e,...t})=>n`<div style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 200px"><db-infotext size="small" icon="none" semantic="informational">Center</db-infotext><db-stack ${a(t)}>${i(`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>`)}</db-stack></div>`},p={args:{alignment:`end`,style:{padding:`var(--db-spacing-fixed-xs)`,border:`var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)`}},render:({children:e,...t})=>n`<div style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 200px"><db-infotext size="small" icon="none" semantic="informational">End</db-infotext><db-stack ${a(t)}>${i(`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>`)}</db-stack></div>`},m=[`DefaultStretch`,`Start`,`Center`,`End`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "stretch",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)',
      border: 'var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 200px"><db-infotext size="small" icon="none" semantic="informational">(Default) Stretch</db-infotext><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>\`)}</db-stack></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "start",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)',
      border: 'var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 200px"><db-infotext size="small" icon="none" semantic="informational">Start</db-infotext><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>\`)}</db-stack></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "center",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)',
      border: 'var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 200px"><db-infotext size="small" icon="none" semantic="informational">Center</db-infotext><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>\`)}</db-stack></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "end",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)',
      border: 'var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="align-items: flex-start; align-self: flex-start; display: flex; flex-wrap: nowrap; flex-direction: column; gap: var(--db-spacing-fixed-sm); width: 200px"><db-infotext size="small" icon="none" semantic="informational">End</db-infotext><db-stack \${spreadArgs(args)}>\${unsafeHTML(\`<span><a href="#">Content 1</a></span><span>Content 2</span><span>Content 3</span>\`)}</db-stack></div>\`
}`,...p.parameters?.docs?.source}}}})))()}export{s as a,d as i,u as n,h as o,p as r,f as t};