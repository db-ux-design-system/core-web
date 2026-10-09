import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBBadge/Size`,component:`db-badge`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},placement:{control:`select`,options:[`inline`,`corner-top-left`,`corner-top-right`,`corner-center-left`,`corner-center-right`,`corner-bottom-left`,`corner-bottom-right`]},label:{control:`text`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{},render:({children:e,...n})=>t`<db-badge ${i(n)}>${r(`(Default) Small`)}</db-badge>`},l={args:{size:`medium`},render:({children:e,...n})=>t`<db-badge ${i(n)}>${r(`Medium`)}</db-badge>`},u=[`DefaultSmall`,`Medium`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Small\`)}</db-badge>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`Medium\`)}</db-badge>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultSmall,l as Medium,u as __namedExportsOrder,s as default};