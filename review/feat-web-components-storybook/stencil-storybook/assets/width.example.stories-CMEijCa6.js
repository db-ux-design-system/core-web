import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBButton/Width`,component:`db-button`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:o()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},c={args:{width:`auto`,onClick:o()},render:({children:e,...n})=>t`<db-button ${i(n)}>${r(`(Default) Auto`)}</db-button>`},l={args:{width:`full`,onClick:o()},render:({children:e,...n})=>t`<div><db-button ${i(n)}>${r(`Width`)}</db-button></div>`},u=[`Auto`,`Full`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "onClick": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Auto\`)}</db-button>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "onClick": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button \${spreadArgs(args)}>\${unsafeHTML(\`Width\`)}</db-button></div>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Auto,l as Full,u as __namedExportsOrder,s as default};