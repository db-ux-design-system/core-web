import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBHeader/Width`,component:`db-header`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},forceMobile:{control:`boolean`},drawerOpen:{control:`boolean`},burgerMenuLabel:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{},render:({children:e,...n})=>t`<div><db-header ${i(n)}>${r(`<db-navigation aria-label="Full"><db-navigation-item icon="x_placeholder"><a href="#">Full</a></db-navigation-item><db-navigation-item disabled><a href="#">Full disabled</a></db-navigation-item></db-navigation>`)}</db-header></div>`},l={args:{width:`medium`},render:({children:e,...n})=>t`<div><db-header ${i(n)}>${r(`<db-navigation aria-label="Medium"><db-navigation-item icon="x_placeholder"><a href="#">Medium</a></db-navigation-item><db-navigation-item disabled><a href="#">Medium disabled</a></db-navigation-item></db-navigation>`)}</db-header></div>`},u={args:{width:`large`},render:({children:e,...n})=>t`<div><db-header ${i(n)}>${r(`<db-navigation aria-label="Large"><db-navigation-item icon="x_placeholder"><a href="#">Large</a></db-navigation-item><db-navigation-item disabled><a href="#">Large disabled</a></db-navigation-item></db-navigation>`)}</db-header></div>`},d=[`Full`,`Medium`,`Large`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-header \${spreadArgs(args)}>\${unsafeHTML(\`<db-navigation aria-label="Full"><db-navigation-item icon="x_placeholder"><a href="#">Full</a></db-navigation-item><db-navigation-item disabled><a href="#">Full disabled</a></db-navigation-item></db-navigation>\`)}</db-header></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "medium"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-header \${spreadArgs(args)}>\${unsafeHTML(\`<db-navigation aria-label="Medium"><db-navigation-item icon="x_placeholder"><a href="#">Medium</a></db-navigation-item><db-navigation-item disabled><a href="#">Medium disabled</a></db-navigation-item></db-navigation>\`)}</db-header></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "large"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-header \${spreadArgs(args)}>\${unsafeHTML(\`<db-navigation aria-label="Large"><db-navigation-item icon="x_placeholder"><a href="#">Large</a></db-navigation-item><db-navigation-item disabled><a href="#">Large disabled</a></db-navigation-item></db-navigation>\`)}</db-header></div>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as Full,u as Large,l as Medium,d as __namedExportsOrder,s as default};