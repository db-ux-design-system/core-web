import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBLoadingIndicator/Role`,component:`db-loading-indicator`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},c={args:{variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Default`)}</db-loading-indicator>`},l={args:{role:`status`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Status`)}</db-loading-indicator>`},u={args:{role:`alert`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Alert`)}</db-loading-indicator>`},d=[`Defaultstatus`,`rolestatus`,`rolealert`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Default\`)}</db-loading-indicator>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "role": "status",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Status\`)}</db-loading-indicator>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "role": "alert",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Alert\`)}</db-loading-indicator>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as Defaultstatus,d as __namedExportsOrder,s as default,u as rolealert,l as rolestatus};