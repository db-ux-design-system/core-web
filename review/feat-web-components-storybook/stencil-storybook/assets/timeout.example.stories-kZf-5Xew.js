import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l;function u(){return(u=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBLoadingIndicator/Examples: Timeout`,component:`db-loading-indicator`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},c={args:{state:`inactive`,overlay:!0,onTimeout:o()},render:({children:e,...n})=>t`<db-button icon="x_placeholder"><db-loading-indicator ${i(n)}>${r(`Loading`)}</db-loading-indicator>Start Timeout</db-button>`},l=[`Timeout`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "state": 'inactive',
    "overlay": true,
    "onTimeout": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button icon="x_placeholder"><db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Loading\`)}</db-loading-indicator>Start Timeout</db-button>\`
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Timeout,l as __namedExportsOrder,s as default};