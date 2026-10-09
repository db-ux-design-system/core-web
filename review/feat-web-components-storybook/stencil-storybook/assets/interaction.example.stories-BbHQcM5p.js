import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBLoadingIndicator/Interaction`,component:`db-loading-indicator`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},c={args:{},render:({children:e,...n})=>t`<div data-testid="default-loading"><db-loading-indicator ${i(n)}>${r(`Test`)}</db-loading-indicator></div>`},l={args:{state:`critical`},render:({children:e,...n})=>t`<div data-testid="critical-loading"><db-loading-indicator ${i(n)}>${r(`Test`)}</db-loading-indicator></div>`},u={args:{role:`alert`},render:({children:e,...n})=>t`<div data-testid="role-override-loading"><db-loading-indicator ${i(n)}>${r(`Test`)}</db-loading-indicator></div>`},d={args:{id:`my-loading`},render:({children:e,...n})=>t`<div data-testid="id-loading"><db-loading-indicator ${i(n)}>${r(`Test`)}</db-loading-indicator></div>`},f={args:{progressText:`42 of 100`,indeterminate:!1,value:42,max:100},render:({children:e,...n})=>t`<div data-testid="determinate-loading"><db-loading-indicator ${i(n)}>${r(`Test`)}</db-loading-indicator></div>`},p={args:{variant:`bar`,indeterminate:!1,value:200,max:100},render:({children:e,...n})=>t`<div data-testid="clamp-loading"><db-loading-indicator ${i(n)}>${r(`Test`)}</db-loading-indicator></div>`},m={args:{indeterminate:`false`,value:42,max:100},render:({children:e,...n})=>t`<div data-testid="string-false-loading"><db-loading-indicator ${i(n)}>${r(`Test`)}</db-loading-indicator></div>`},h=[`Interaction`,`LoadingIndicatorInteraction1`,`LoadingIndicatorInteraction2`,`LoadingIndicatorInteraction3`,`LoadingIndicatorInteraction4`,`LoadingIndicatorInteraction5`,`LoadingIndicatorInteraction6`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="default-loading"><db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Test\`)}</db-loading-indicator></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "critical"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="critical-loading"><db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Test\`)}</db-loading-indicator></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "role": "alert"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="role-override-loading"><db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Test\`)}</db-loading-indicator></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "my-loading"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="id-loading"><db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Test\`)}</db-loading-indicator></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "progressText": "42 of 100",
    "indeterminate": false,
    "value": 42,
    "max": 100
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="determinate-loading"><db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Test\`)}</db-loading-indicator></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "bar",
    "indeterminate": false,
    "value": 200,
    "max": 100
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="clamp-loading"><db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Test\`)}</db-loading-indicator></div>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "indeterminate": "false",
    "value": 42,
    "max": 100
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="string-false-loading"><db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Test\`)}</db-loading-indicator></div>\`
}`,...m.parameters?.docs?.source}}}})))()}g();export{c as Interaction,l as LoadingIndicatorInteraction1,u as LoadingIndicatorInteraction2,d as LoadingIndicatorInteraction3,f as LoadingIndicatorInteraction4,p as LoadingIndicatorInteraction5,m as LoadingIndicatorInteraction6,h as __namedExportsOrder,s as default};