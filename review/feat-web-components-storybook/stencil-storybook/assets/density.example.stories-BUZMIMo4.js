import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBNavigation/Density`,component:`db-navigation`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{"aria-labelledby":`functional`},render:({children:e,...n})=>t`<div data-density="functional"><db-infotext id="functional" size="small" semantic="informational" icon="none">Functional</db-infotext><db-navigation ${i(n)}>${r(`<db-navigation-item text="Navi-Item 1"></db-navigation-item><db-navigation-item icon="x_placeholder"><a href="#">Navi-Item 2</a></db-navigation-item><db-navigation-item disabled><a href="#">Navi-Item 3</a></db-navigation-item>`)}</db-navigation></div>`},l={args:{"aria-labelledby":`_default__regular`},render:({children:e,...n})=>t`<div data-density="regular"><db-infotext id="_default__regular" size="small" semantic="informational" icon="none">(Default) Regular</db-infotext><db-navigation ${i(n)}>${r(`<db-navigation-item text="Navi-Item 1"></db-navigation-item><db-navigation-item icon="x_placeholder"><a href="#">Navi-Item 2</a></db-navigation-item><db-navigation-item disabled><a href="#">Navi-Item 3</a></db-navigation-item>`)}</db-navigation></div>`},u={args:{"aria-labelledby":`expressive`},render:({children:e,...n})=>t`<div data-density="expressive"><db-infotext id="expressive" size="small" semantic="informational" icon="none">Expressive</db-infotext><db-navigation ${i(n)}>${r(`<db-navigation-item text="Navi-Item 1"></db-navigation-item><db-navigation-item icon="x_placeholder"><a href="#">Navi-Item 2</a></db-navigation-item><db-navigation-item disabled><a href="#">Navi-Item 3</a></db-navigation-item>`)}</db-navigation></div>`},d=[`Functional`,`DefaultRegular`,`Expressive`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-labelledby": "functional"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="functional"><db-infotext id="functional" size="small" semantic="informational" icon="none">Functional</db-infotext><db-navigation \${spreadArgs(args)}>\${unsafeHTML(\`<db-navigation-item text="Navi-Item 1"></db-navigation-item><db-navigation-item icon="x_placeholder"><a href="#">Navi-Item 2</a></db-navigation-item><db-navigation-item disabled><a href="#">Navi-Item 3</a></db-navigation-item>\`)}</db-navigation></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-labelledby": "_default__regular"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="regular"><db-infotext id="_default__regular" size="small" semantic="informational" icon="none">(Default) Regular</db-infotext><db-navigation \${spreadArgs(args)}>\${unsafeHTML(\`<db-navigation-item text="Navi-Item 1"></db-navigation-item><db-navigation-item icon="x_placeholder"><a href="#">Navi-Item 2</a></db-navigation-item><db-navigation-item disabled><a href="#">Navi-Item 3</a></db-navigation-item>\`)}</db-navigation></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-labelledby": "expressive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="expressive"><db-infotext id="expressive" size="small" semantic="informational" icon="none">Expressive</db-infotext><db-navigation \${spreadArgs(args)}>\${unsafeHTML(\`<db-navigation-item text="Navi-Item 1"></db-navigation-item><db-navigation-item icon="x_placeholder"><a href="#">Navi-Item 2</a></db-navigation-item><db-navigation-item disabled><a href="#">Navi-Item 3</a></db-navigation-item>\`)}</db-navigation></div>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultRegular,u as Expressive,c as Functional,d as __namedExportsOrder,s as default};