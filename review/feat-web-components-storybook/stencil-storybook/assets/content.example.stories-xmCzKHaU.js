import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBBadge/Content`,component:`db-badge`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},placement:{control:`select`,options:[`inline`,`corner-top-left`,`corner-top-right`,`corner-center-left`,`corner-center-right`,`corner-bottom-left`,`corner-bottom-right`]},label:{control:`text`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{},render:({children:e,...n})=>t`<db-badge ${i(n)}>${r(`(Default) Text`)}</db-badge>`},l={args:{},render:({children:e,...n})=>t`<db-badge ${i(n)}></db-badge>`},u={args:{semantic:`critical`,emphasis:`strong`},render:({children:e,...n})=>t`<db-badge ${i(n)}>${r(`<db-icon icon="x_placeholder">Icon - Small</db-icon>`)}</db-badge>`},d=[`DefaultText`,`DotSmall`,`IconSmall`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Text\`)}</db-badge>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}></db-badge>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical",
    "emphasis": "strong"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`<db-icon icon="x_placeholder">Icon - Small</db-icon>\`)}</db-badge>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as DefaultText,l as DotSmall,u as IconSmall,d as __namedExportsOrder,s as default};