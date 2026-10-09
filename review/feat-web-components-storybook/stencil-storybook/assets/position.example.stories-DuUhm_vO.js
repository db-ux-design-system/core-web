import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBControlPanelMobile/Position`,component:`db-control-panel-mobile`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{position:{control:`select`,options:[`top`,`bottom`]},drawerHeaderText:{control:`text`},burgerMenuLabel:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{position:`top`,drawerHeaderText:`DBControlPanel`},render:({children:e,...n})=>t`<div><db-control-panel-mobile ${i(n)}>${r(`<db-control-panel-navigation aria-label="(Default) Top"><db-control-panel-navigation-item icon="x_placeholder"><a href="#">(Default) Top</a></db-control-panel-navigation-item></db-control-panel-navigation>`)}</db-control-panel-mobile></div>`},l={args:{position:`bottom`,drawerHeaderText:`DBControlPanel`},render:({children:e,...n})=>t`<div><db-control-panel-mobile ${i(n)}>${r(`<db-control-panel-navigation aria-label="Bottom"><db-control-panel-navigation-item icon="x_placeholder"><a href="#">Bottom</a></db-control-panel-navigation-item></db-control-panel-navigation>`)}</db-control-panel-mobile></div>`},u=[`DefaultTop`,`Bottom`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "position": "top",
    "drawerHeaderText": "DBControlPanel"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-control-panel-mobile \${spreadArgs(args)}>\${unsafeHTML(\`<db-control-panel-navigation aria-label="(Default) Top"><db-control-panel-navigation-item icon="x_placeholder"><a href="#">(Default) Top</a></db-control-panel-navigation-item></db-control-panel-navigation>\`)}</db-control-panel-mobile></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "position": "bottom",
    "drawerHeaderText": "DBControlPanel"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-control-panel-mobile \${spreadArgs(args)}>\${unsafeHTML(\`<db-control-panel-navigation aria-label="Bottom"><db-control-panel-navigation-item icon="x_placeholder"><a href="#">Bottom</a></db-control-panel-navigation-item></db-control-panel-navigation>\`)}</db-control-panel-mobile></div>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as Bottom,c as DefaultTop,u as __namedExportsOrder,s as default};