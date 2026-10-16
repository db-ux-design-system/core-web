import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-BpexqtSG.js";import{i as r,n as i,t as a}from"./apply-web-component-args-CEs1hOVK.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBNavigationItem/Wrap`,component:`db-navigation-item`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:o()},argTypes:{disabled:{control:`boolean`},active:{control:`boolean`},showIcon:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},wrap:{control:`boolean`},text:{control:`text`},subNavigationExpanded:{control:`boolean`},backButtonId:{control:`text`},backButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},c={args:{},render:({children:e,...n})=>t`<ul><db-navigation-item ${i(n)}>${r(`<a href="#">No Wrap (Default)</a>`)}</db-navigation-item></ul>`},l={args:{text:`This is a very long text that is broken into multiple lines.`,icon:`x_placeholder`,showIcon:!0,wrap:!0},render:({children:e,...n})=>t`<ul><db-navigation-item ${i(n)}>${r(`<db-navigation-item slot="subNavigation" text="Sub-Navi-Item 1"><db-navigation-item slot="subNavigation"><a href="#">Sub-Sub-Navi-Item 1</a></db-navigation-item><db-navigation-item slot="subNavigation"><a href="#">Sub-Sub-Navi-Item 2</a></db-navigation-item></db-navigation-item><db-navigation-item slot="subNavigation"><a href="#">Sub-Navi-Item 2</a></db-navigation-item>`)}</db-navigation-item></ul>`},u=[`DefaultFalse`,`True`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<ul><db-navigation-item \${spreadArgs(args)}>\${unsafeHTML(\`<a href="#">No Wrap (Default)</a>\`)}</db-navigation-item></ul>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "text": "This is a very long text that is broken into multiple lines.",
    "icon": "x_placeholder",
    "showIcon": true,
    "wrap": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<ul><db-navigation-item \${spreadArgs(args)}>\${unsafeHTML(\`<db-navigation-item slot="subNavigation" text="Sub-Navi-Item 1"><db-navigation-item slot="subNavigation"><a href="#">Sub-Sub-Navi-Item 1</a></db-navigation-item><db-navigation-item slot="subNavigation"><a href="#">Sub-Sub-Navi-Item 2</a></db-navigation-item></db-navigation-item><db-navigation-item slot="subNavigation"><a href="#">Sub-Navi-Item 2</a></db-navigation-item>\`)}</db-navigation-item></ul>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultFalse,l as True,u as __namedExportsOrder,s as default};