import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBLoadingIndicator/Overlay`,component:`db-loading-indicator`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},c={args:{variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,overlay:!1},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Circular horizontal`)}</db-loading-indicator>`},l={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,overlay:!1},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Circular vertical`)}</db-loading-indicator>`},u={args:{variant:`bar`,progressText:`42 of 100`,overlay:!1},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Bar`)}</db-loading-indicator>`},d={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,overlay:!0},render:({children:e,...n})=>t`<db-card><db-loading-indicator ${i(n)}>${r(`Circular vertical`)}</db-loading-indicator><p>Content 1</p><p>Content 2</p><p>Content 3</p></db-card>`},f=[`DefaultFalseCircularhorizontal`,`DefaultFalseCircularvertical`,`DefaultFalseBar`,`TrueCircularvertical`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "overlay": false
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
    "overlay": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular vertical\`)}</db-loading-indicator>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "bar",
    "progressText": "42 of 100",
    "overlay": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "overlay": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-card><db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular vertical\`)}</db-loading-indicator><p>Content 1</p><p>Content 2</p><p>Content 3</p></db-card>\`
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as DefaultFalseBar,c as DefaultFalseCircularhorizontal,l as DefaultFalseCircularvertical,d as TrueCircularvertical,f as __namedExportsOrder,s as default};