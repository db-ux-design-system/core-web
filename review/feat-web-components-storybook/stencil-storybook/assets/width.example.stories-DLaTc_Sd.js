import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBNavigationItem/Width`,component:`db-navigation-item`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:o()},argTypes:{disabled:{control:`boolean`},active:{control:`boolean`},showIcon:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},wrap:{control:`boolean`},text:{control:`text`},subNavigationExpanded:{control:`boolean`},backButtonId:{control:`text`},backButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},c={args:{},render:({children:e,...n})=>t`<ul><db-navigation-item ${i(n)}>${r(`<a href="#">(Default) Auto</a>`)}</db-navigation-item></ul>`},l={args:{width:`full`},render:({children:e,...n})=>t`<ul><db-navigation-item ${i(n)}>${r(`<a href="#">Full</a>`)}</db-navigation-item></ul>`},u=[`DefaultAuto`,`Full`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<ul><db-navigation-item \${spreadArgs(args)}>\${unsafeHTML(\`<a href="#">(Default) Auto</a>\`)}</db-navigation-item></ul>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<ul><db-navigation-item \${spreadArgs(args)}>\${unsafeHTML(\`<a href="#">Full</a>\`)}</db-navigation-item></ul>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultAuto,l as Full,u as __namedExportsOrder,s as default};