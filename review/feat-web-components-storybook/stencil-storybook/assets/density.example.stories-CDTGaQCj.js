import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBButton/Density`,component:`db-button`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:o()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},c={args:{"data-density":`functional`,onClick:o()},render:({children:e,...n})=>t`<db-button ${i(n)}>${r(`Functional`)}</db-button>`},l={args:{"data-density":`regular`,onClick:o()},render:({children:e,...n})=>t`<db-button ${i(n)}>${r(`(Default) Regular`)}</db-button>`},u={args:{"data-density":`expressive`,onClick:o()},render:({children:e,...n})=>t`<db-button ${i(n)}>${r(`Expressive`)}</db-button>`},d=[`Functional`,`Regular`,`Expressive`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "onClick": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button \${spreadArgs(args)}>\${unsafeHTML(\`Functional\`)}</db-button>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "onClick": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Regular\`)}</db-button>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "onClick": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button \${spreadArgs(args)}>\${unsafeHTML(\`Expressive\`)}</db-button>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Expressive,c as Functional,l as Regular,d as __namedExportsOrder,s as default};