import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBCard/Behavior`,component:`db-card`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:o()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},c={args:{behavior:`static`},render:({children:e,...n})=>t`<db-card ${i(n)}>${r(`<strong>(Default) Static</strong>`)}</db-card>`},l={args:{behavior:`interactive`},render:({children:e,...n})=>t`<button type="button"><db-card ${i(n)}>${r(`<strong>Interactive</strong>`)}</db-card></button>`},u=[`DefaultStatic`,`Interactive`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "static"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>(Default) Static</strong>\`)}</db-card>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "interactive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<button type="button"><db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>Interactive</strong>\`)}</db-card></button>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultStatic,l as Interactive,u as __namedExportsOrder,s as default};