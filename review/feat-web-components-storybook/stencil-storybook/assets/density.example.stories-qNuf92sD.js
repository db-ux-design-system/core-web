import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBHeader/Density`,component:`db-header`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},forceMobile:{control:`boolean`},drawerOpen:{control:`boolean`},burgerMenuLabel:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{"data-density":`functional`},render:({children:e,...n})=>t`<div><db-header ${i(n)}>${r(`<db-navigation aria-label="Functional"><db-navigation-item icon="x_placeholder"><a href="#">Functional</a></db-navigation-item><db-navigation-item disabled><a href="#">Functional disabled</a></db-navigation-item></db-navigation>`)}</db-header></div>`},l={args:{"data-density":`regular`},render:({children:e,...n})=>t`<div><db-header ${i(n)}>${r(`<db-navigation aria-label="(Default) Regular"><db-navigation-item icon="x_placeholder"><a href="#">(Default) Regular</a></db-navigation-item><db-navigation-item disabled><a href="#">(Default) Regular disabled</a></db-navigation-item></db-navigation>`)}</db-header></div>`},u={args:{"data-density":`expressive`},render:({children:e,...n})=>t`<div><db-header ${i(n)}>${r(`<db-navigation aria-label="Expressive"><db-navigation-item icon="x_placeholder"><a href="#">Expressive</a></db-navigation-item><db-navigation-item disabled><a href="#">Expressive disabled</a></db-navigation-item></db-navigation>`)}</db-header></div>`},d=[`Functional`,`DefaultRegular`,`Expressive`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-header \${spreadArgs(args)}>\${unsafeHTML(\`<db-navigation aria-label="Functional"><db-navigation-item icon="x_placeholder"><a href="#">Functional</a></db-navigation-item><db-navigation-item disabled><a href="#">Functional disabled</a></db-navigation-item></db-navigation>\`)}</db-header></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-header \${spreadArgs(args)}>\${unsafeHTML(\`<db-navigation aria-label="(Default) Regular"><db-navigation-item icon="x_placeholder"><a href="#">(Default) Regular</a></db-navigation-item><db-navigation-item disabled><a href="#">(Default) Regular disabled</a></db-navigation-item></db-navigation>\`)}</db-header></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-header \${spreadArgs(args)}>\${unsafeHTML(\`<db-navigation aria-label="Expressive"><db-navigation-item icon="x_placeholder"><a href="#">Expressive</a></db-navigation-item><db-navigation-item disabled><a href="#">Expressive disabled</a></db-navigation-item></db-navigation>\`)}</db-header></div>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultRegular,u as Expressive,c as Functional,d as __namedExportsOrder,s as default};