import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBCard/Elevation Level`,component:`db-card`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:o()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},c={args:{elevationLevel:`1`},render:({children:e,...n})=>t`<db-card ${i(n)}>${r(`<strong>(Default) 1</strong>`)}</db-card>`},l={args:{elevationLevel:`2`},render:({children:e,...n})=>t`<db-card ${i(n)}>${r(`<strong>2</strong>`)}</db-card>`},u={args:{elevationLevel:`3`},render:({children:e,...n})=>t`<db-card ${i(n)}>${r(`<strong>3</strong>`)}</db-card>`},d=[`DefaultLevel1`,`Level2`,`Level3`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "1"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>(Default) 1</strong>\`)}</db-card>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "2"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>2</strong>\`)}</db-card>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "3"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>3</strong>\`)}</db-card>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as DefaultLevel1,l as Level2,u as Level3,d as __namedExportsOrder,s as default};