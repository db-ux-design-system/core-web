import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBInfotext/Show Icon`,component:`db-infotext`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},showIcon:{control:`boolean`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{showIcon:!0},render:({children:e,...n})=>t`<db-infotext ${i(n)}>${r(`(Default) True`)}</db-infotext>`},l={args:{showIcon:!1},render:({children:e,...n})=>t`<db-infotext ${i(n)}>${r(`False`)}</db-infotext>`},u=[`DefaultTrue`,`False`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "showIcon": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-infotext \${spreadArgs(args)}>\${unsafeHTML(\`(Default) True\`)}</db-infotext>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "showIcon": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-infotext \${spreadArgs(args)}>\${unsafeHTML(\`False\`)}</db-infotext>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultTrue,l as False,u as __namedExportsOrder,s as default};