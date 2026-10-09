import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTag/Show Slot`,component:`db-tag`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onRemove:o()},argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},behavior:{control:`select`,options:[`static`,`removable`]},showIcon:{control:`boolean`},noText:{control:`boolean`},content:{control:`text`},showCheckState:{control:`boolean`},overflow:{control:`boolean`},removeButton:{control:`text`},text:{control:`text`},value:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onRemove:{action:`onRemove`}}},c={args:{},render:({children:e,...n})=>t`<db-tag ${i(n)}>${r(`(Default) False`)}</db-tag>`},l={args:{icon:`x_placeholder`},render:({children:e,...n})=>t`<db-tag ${i(n)}>${r(`True`)}</db-tag>`},u=[`DefaultFalse`,`True`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`(Default) False\`)}</db-tag>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`True\`)}</db-tag>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultFalse,l as True,u as __namedExportsOrder,s as default};