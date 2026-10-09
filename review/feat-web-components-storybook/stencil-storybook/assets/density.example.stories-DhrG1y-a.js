import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBNavigationItem/Density`,component:`db-navigation-item`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:o()},argTypes:{disabled:{control:`boolean`},active:{control:`boolean`},showIcon:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},wrap:{control:`boolean`},text:{control:`text`},subNavigationExpanded:{control:`boolean`},backButtonId:{control:`text`},backButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},c={args:{"data-density":`functional`},render:({children:e,...n})=>t`<ul><db-navigation-item ${i(n)}>${r(`<a href="#">Functional</a>`)}</db-navigation-item></ul>`},l={args:{"data-density":`regular`},render:({children:e,...n})=>t`<ul><db-navigation-item ${i(n)}>${r(`<a href="#">(Default) Regular</a>`)}</db-navigation-item></ul>`},u={args:{"data-density":`expressive`},render:({children:e,...n})=>t`<ul><db-navigation-item ${i(n)}>${r(`<a href="#">Expressive</a>`)}</db-navigation-item></ul>`},d=[`Functional`,`DefaultRegular`,`Expressive`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<ul><db-navigation-item \${spreadArgs(args)}>\${unsafeHTML(\`<a href="#">Functional</a>\`)}</db-navigation-item></ul>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<ul><db-navigation-item \${spreadArgs(args)}>\${unsafeHTML(\`<a href="#">(Default) Regular</a>\`)}</db-navigation-item></ul>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<ul><db-navigation-item \${spreadArgs(args)}>\${unsafeHTML(\`<a href="#">Expressive</a>\`)}</db-navigation-item></ul>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultRegular,u as Expressive,c as Functional,d as __namedExportsOrder,s as default};