import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBLoadingIndicator/Show Label`,component:`db-loading-indicator`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},c={args:{variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,showLabel:!0},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Circular horizontal`)}</db-loading-indicator>`},l={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,showLabel:!0},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Circular vertical`)}</db-loading-indicator>`},u={args:{variant:`bar`,progressText:`42 of 100`,showLabel:!0},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Bar`)}</db-loading-indicator>`},d={args:{variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,showLabel:!1},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Circular horizontal`)}</db-loading-indicator>`},f={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,showLabel:!1},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Circular vertical`)}</db-loading-indicator>`},p={args:{variant:`bar`,progressText:`42 of 100`,showLabel:!1},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Bar`)}</db-loading-indicator>`},m=[`DefaultTrueCircularhorizontal`,`DefaultTrueCircularvertical`,`DefaultTrueBar`,`FalseCircularhorizontal`,`FalseCircularvertical`,`FalseBar`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "showLabel": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular horizontal\`)}</db-loading-indicator>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "showLabel": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular vertical\`)}</db-loading-indicator>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "bar",
    "progressText": "42 of 100",
    "showLabel": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "showLabel": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular horizontal\`)}</db-loading-indicator>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "showLabel": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular vertical\`)}</db-loading-indicator>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "bar",
    "progressText": "42 of 100",
    "showLabel": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...p.parameters?.docs?.source}}}})))()}h();export{u as DefaultTrueBar,c as DefaultTrueCircularhorizontal,l as DefaultTrueCircularvertical,p as FalseBar,d as FalseCircularhorizontal,f as FalseCircularvertical,m as __namedExportsOrder,s as default};