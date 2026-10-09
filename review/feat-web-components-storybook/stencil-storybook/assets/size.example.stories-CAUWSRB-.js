import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBInfotext/Size`,component:`db-infotext`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},showIcon:{control:`boolean`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{},render:({children:e,...n})=>t`<db-infotext ${i(n)}>${r(`(Default) Medium`)}</db-infotext>`},l={args:{size:`small`},render:({children:e,...n})=>t`<db-infotext ${i(n)}>${r(`Small`)}</db-infotext>`},u=[`DefaultMedium`,`Small`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-infotext \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Medium\`)}</db-infotext>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-infotext \${spreadArgs(args)}>\${unsafeHTML(\`Small\`)}</db-infotext>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultMedium,l as Small,u as __namedExportsOrder,s as default};