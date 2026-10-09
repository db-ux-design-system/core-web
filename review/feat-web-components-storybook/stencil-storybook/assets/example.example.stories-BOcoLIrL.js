import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBCard/Example`,component:`db-card`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:o()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},c={args:{elevationLevel:`1`,behavior:`interactive`},render:({children:e,...n})=>t`<button type="button"><db-card ${i(n)}>${r(`<strong>Level 1 - Interactive</strong>`)}</db-card></button>`},l={args:{elevationLevel:`2`,behavior:`interactive`},render:({children:e,...n})=>t`<button type="button"><db-card ${i(n)}>${r(`<strong>Level 2 - Interactive</strong>`)}</db-card></button>`},u={args:{elevationLevel:`3`,behavior:`interactive`},render:({children:e,...n})=>t`<button type="button"><db-card ${i(n)}>${r(`<strong>Level 3 - Interactive</strong>`)}</db-card></button>`},d=[`Level1Interactive`,`Level2Interactive`,`Level3Interactive`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "1",
    "behavior": "interactive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<button type="button"><db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>Level 1 - Interactive</strong>\`)}</db-card></button>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "2",
    "behavior": "interactive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<button type="button"><db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>Level 2 - Interactive</strong>\`)}</db-card></button>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "3",
    "behavior": "interactive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<button type="button"><db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>Level 3 - Interactive</strong>\`)}</db-card></button>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as Level1Interactive,l as Level2Interactive,u as Level3Interactive,d as __namedExportsOrder,s as default};