import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBLoadingIndicator/Density`,component:`db-loading-indicator`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},c={args:{"data-density":`functional`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Circular horizontal`)}</db-loading-indicator>`},l={args:{"data-density":`functional`,variant:`circular`,orientation:`vertical`,progressText:`42%`},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Circular vertical`)}</db-loading-indicator>`},u={args:{"data-density":`functional`,variant:`bar`,progressText:`42 of 100`},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Bar`)}</db-loading-indicator>`},d={args:{"data-density":`regular`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Circular horizontal`)}</db-loading-indicator>`},f={args:{"data-density":`regular`,variant:`circular`,orientation:`vertical`,progressText:`42%`},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Circular vertical`)}</db-loading-indicator>`},p={args:{"data-density":`regular`,variant:`bar`,progressText:`42 of 100`},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Bar`)}</db-loading-indicator>`},m={args:{"data-density":`expressive`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Circular horizontal`)}</db-loading-indicator>`},h={args:{"data-density":`expressive`,variant:`circular`,orientation:`vertical`,progressText:`42%`},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Circular vertical`)}</db-loading-indicator>`},g={args:{"data-density":`expressive`,variant:`bar`,progressText:`42 of 100`},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Bar`)}</db-loading-indicator>`},_=[`FunctionalCircularhorizontal`,`FunctionalCircularvertical`,`FunctionalBar`,`DefaultRegularCircularhorizontal`,`DefaultRegularCircularvertical`,`DefaultRegularBar`,`ExpressiveCircularhorizontal`,`ExpressiveCircularvertical`,`ExpressiveBar`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular horizontal\`)}</db-loading-indicator>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular vertical\`)}</db-loading-indicator>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "variant": "bar",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular horizontal\`)}</db-loading-indicator>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular vertical\`)}</db-loading-indicator>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "variant": "bar",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular horizontal\`)}</db-loading-indicator>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular vertical\`)}</db-loading-indicator>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "variant": "bar",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...g.parameters?.docs?.source}}}})))()}v();export{p as DefaultRegularBar,d as DefaultRegularCircularhorizontal,f as DefaultRegularCircularvertical,g as ExpressiveBar,m as ExpressiveCircularhorizontal,h as ExpressiveCircularvertical,u as FunctionalBar,c as FunctionalCircularhorizontal,l as FunctionalCircularvertical,_ as __namedExportsOrder,s as default};