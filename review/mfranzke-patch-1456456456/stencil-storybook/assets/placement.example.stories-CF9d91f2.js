import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-D7ZhsNxW.js";import{i,n as a,t as o}from"./apply-web-component-args-DqcWTDo5.js";var s=t({CornerBottomLeft:()=>p,CornerBottomRight:()=>g,CornerCenterLeft:()=>f,CornerCenterRight:()=>h,CornerTopLeft:()=>d,CornerTopRight:()=>m,DefaultInline:()=>u,__namedExportsOrder:()=>_,default:()=>l}),c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBBadge/Placement`,component:`db-badge`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},placement:{control:`select`,options:[`inline`,`corner-top-left`,`corner-top-right`,`corner-center-left`,`corner-center-right`,`corner-bottom-left`,`corner-bottom-right`]},label:{control:`text`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{size:`small`,emphasis:`strong`,semantic:`critical`},render:({children:e,...t})=>n`<div style="display: flex; align-items: center; gap: var(--db-spacing-fixed-sm); padding: var(--db-spacing-fixed-xs) var(--db-spacing-fixed-sm); background-color: var(--db-adaptive-bg-basic-level-2-default)"><span data-icon="x_placeholder">(Default) Inline</span><db-badge ${a(t)}>${i(`Label`)}</db-badge><db-icon icon="error"></db-icon></div>`},d={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-top-left`},render:({children:e,...t})=>n`<div><db-button data-sb-decorator="true" icon="x_placeholder" variant="outlined" no-text><db-badge ${a(t)}></db-badge>Corner - Top - Left</db-button><db-infotext size="small" semantic="informational" icon="none">Corner - Top - Left</db-infotext></div>`},f={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-center-left`},render:({children:e,...t})=>n`<div><db-button data-sb-decorator="true" icon="x_placeholder" variant="outlined" no-text><db-badge ${a(t)}></db-badge>Corner - Center - Left</db-button><db-infotext size="small" semantic="informational" icon="none">Corner - Center - Left</db-infotext></div>`},p={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-bottom-left`},render:({children:e,...t})=>n`<div><db-button data-sb-decorator="true" icon="x_placeholder" variant="outlined" no-text><db-badge ${a(t)}></db-badge>Corner - Bottom- Left</db-button><db-infotext size="small" semantic="informational" icon="none">Corner - Bottom- Left</db-infotext></div>`},m={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-top-right`},render:({children:e,...t})=>n`<div><db-button data-sb-decorator="true" icon="x_placeholder" variant="outlined" no-text><db-badge ${a(t)}></db-badge>Corner - Top - Right</db-button><db-infotext size="small" semantic="informational" icon="none">Corner - Top - Right</db-infotext></div>`},h={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-center-right`},render:({children:e,...t})=>n`<div><db-button data-sb-decorator="true" icon="x_placeholder" variant="outlined" no-text><db-badge ${a(t)}></db-badge>Corner - Center - Right</db-button><db-infotext size="small" semantic="informational" icon="none">Corner - Center - Right</db-infotext></div>`},g={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-bottom-right`},render:({children:e,...t})=>n`<div><db-button data-sb-decorator="true" icon="x_placeholder" variant="outlined" no-text><db-badge ${a(t)}></db-badge>Corner - Bottom- Right</db-button><db-infotext size="small" semantic="informational" icon="none">Corner - Bottom- Right</db-infotext></div>`},_=[`DefaultInline`,`CornerTopLeft`,`CornerCenterLeft`,`CornerBottomLeft`,`CornerTopRight`,`CornerCenterRight`,`CornerBottomRight`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="display: flex; align-items: center; gap: var(--db-spacing-fixed-sm); padding: var(--db-spacing-fixed-xs) var(--db-spacing-fixed-sm); background-color: var(--db-adaptive-bg-basic-level-2-default)"><span data-icon="x_placeholder">(Default) Inline</span><db-badge \${spreadArgs(args)}>\${unsafeHTML(\`Label\`)}</db-badge><db-icon icon="error"></db-icon></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-top-left"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button data-sb-decorator="true" icon="x_placeholder" variant="outlined" no-text><db-badge \${spreadArgs(args)}></db-badge>Corner - Top - Left</db-button><db-infotext size="small" semantic="informational" icon="none">Corner - Top - Left</db-infotext></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-center-left"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button data-sb-decorator="true" icon="x_placeholder" variant="outlined" no-text><db-badge \${spreadArgs(args)}></db-badge>Corner - Center - Left</db-button><db-infotext size="small" semantic="informational" icon="none">Corner - Center - Left</db-infotext></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-bottom-left"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button data-sb-decorator="true" icon="x_placeholder" variant="outlined" no-text><db-badge \${spreadArgs(args)}></db-badge>Corner - Bottom- Left</db-button><db-infotext size="small" semantic="informational" icon="none">Corner - Bottom- Left</db-infotext></div>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-top-right"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button data-sb-decorator="true" icon="x_placeholder" variant="outlined" no-text><db-badge \${spreadArgs(args)}></db-badge>Corner - Top - Right</db-button><db-infotext size="small" semantic="informational" icon="none">Corner - Top - Right</db-infotext></div>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-center-right"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button data-sb-decorator="true" icon="x_placeholder" variant="outlined" no-text><db-badge \${spreadArgs(args)}></db-badge>Corner - Center - Right</db-button><db-infotext size="small" semantic="informational" icon="none">Corner - Center - Right</db-infotext></div>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-bottom-right"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button data-sb-decorator="true" icon="x_placeholder" variant="outlined" no-text><db-badge \${spreadArgs(args)}></db-badge>Corner - Bottom- Right</db-button><db-infotext size="small" semantic="informational" icon="none">Corner - Bottom- Right</db-infotext></div>\`
}`,...g.parameters?.docs?.source}}}})))()}export{d as a,v as c,h as i,s as l,g as n,m as o,f as r,u as s,p as t};