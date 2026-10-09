import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBButton/Multi Line Text`,component:`db-button`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:o()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},c={args:{width:`full`,onClick:o()},render:({children:e,...n})=>t`<div><db-button ${i(n)}>${r(`Multi-line Text With Automatic Line Breaks`)}</db-button></div>`},l={args:{width:`full`,icon:`x_placeholder`,onClick:o()},render:({children:e,...n})=>t`<div><db-button ${i(n)}>${r(`Multi-line Text With Automatic Line Breaks and Icon`)}</db-button></div>`},u={args:{size:`small`,onClick:o()},render:({children:e,...n})=>t`<div><db-button ${i(n)}>${r(`Button Small Multi-line Text With Automatic Line Breaks`)}</db-button></div>`},d=[`AutomaticLineBreaks`,`AutomaticLineBreaksandIcon`,`SmallAutomaticLineBreaks`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "onClick": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button \${spreadArgs(args)}>\${unsafeHTML(\`Multi-line Text With Automatic Line Breaks\`)}</db-button></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "icon": "x_placeholder",
    "onClick": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button \${spreadArgs(args)}>\${unsafeHTML(\`Multi-line Text With Automatic Line Breaks and Icon\`)}</db-button></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "onClick": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button \${spreadArgs(args)}>\${unsafeHTML(\`Button Small Multi-line Text With Automatic Line Breaks\`)}</db-button></div>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as AutomaticLineBreaks,l as AutomaticLineBreaksandIcon,u as SmallAutomaticLineBreaks,d as __namedExportsOrder,s as default};