import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBBadge/Placement`,component:`db-badge`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},placement:{control:`select`,options:[`inline`,`corner-top-left`,`corner-top-right`,`corner-center-left`,`corner-center-right`,`corner-bottom-left`,`corner-bottom-right`]},label:{control:`text`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{size:`small`,emphasis:`strong`,semantic:`critical`},render:({children:e,...n})=>t`<div><span data-icon="x_placeholder">(Default) Inline</span><db-badge ${i(n)}>${r(`Label`)}</db-badge><db-icon icon="error"></db-icon></div>`},l={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-top-left`},render:({children:e,...n})=>t`<div><db-button data-sb-decorator="true" icon="x_placeholder" variant="outlined" no-text><db-badge ${i(n)}></db-badge>Corner - Top - Left</db-button><db-infotext size="small" semantic="informational" icon="none">Corner - Top - Left</db-infotext></div>`},u={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-center-left`},render:({children:e,...n})=>t`<div><db-button data-sb-decorator="true" icon="x_placeholder" variant="outlined" no-text><db-badge ${i(n)}></db-badge>Corner - Center - Left</db-button><db-infotext size="small" semantic="informational" icon="none">Corner - Center - Left</db-infotext></div>`},d={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-bottom-left`},render:({children:e,...n})=>t`<div><db-button data-sb-decorator="true" icon="x_placeholder" variant="outlined" no-text><db-badge ${i(n)}></db-badge>Corner - Bottom- Left</db-button><db-infotext size="small" semantic="informational" icon="none">Corner - Bottom- Left</db-infotext></div>`},f={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-top-right`},render:({children:e,...n})=>t`<div><db-button data-sb-decorator="true" icon="x_placeholder" variant="outlined" no-text><db-badge ${i(n)}></db-badge>Corner - Top - Right</db-button><db-infotext size="small" semantic="informational" icon="none">Corner - Top - Right</db-infotext></div>`},p={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-center-right`},render:({children:e,...n})=>t`<div><db-button data-sb-decorator="true" icon="x_placeholder" variant="outlined" no-text><db-badge ${i(n)}></db-badge>Corner - Center - Right</db-button><db-infotext size="small" semantic="informational" icon="none">Corner - Center - Right</db-infotext></div>`},m={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-bottom-right`},render:({children:e,...n})=>t`<div><db-button data-sb-decorator="true" icon="x_placeholder" variant="outlined" no-text><db-badge ${i(n)}></db-badge>Corner - Bottom- Right</db-button><db-infotext size="small" semantic="informational" icon="none">Corner - Bottom- Right</db-infotext></div>`},h=[`DefaultInline`,`CornerTopLeft`,`CornerCenterLeft`,`CornerBottomLeft`,`CornerTopRight`,`CornerCenterRight`,`CornerBottomRight`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><span data-icon="x_placeholder">(Default) Inline</span><db-badge \${spreadArgs(args)}>\${unsafeHTML(\`Label\`)}</db-badge><db-icon icon="error"></db-icon></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}}})))()}g();export{d as CornerBottomLeft,m as CornerBottomRight,u as CornerCenterLeft,p as CornerCenterRight,l as CornerTopLeft,f as CornerTopRight,c as DefaultInline,h as __namedExportsOrder,s as default};