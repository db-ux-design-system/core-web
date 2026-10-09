import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBCard/Density`,component:`db-card`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:o()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},c={args:{"data-density":`functional`},render:({children:e,...n})=>t`<db-card ${i(n)}>${r(`<strong>Functional</strong>`)}</db-card>`},l={args:{"data-density":`regular`},render:({children:e,...n})=>t`<db-card ${i(n)}>${r(`<strong>(Default) Regular</strong>`)}</db-card>`},u={args:{"data-density":`expressive`},render:({children:e,...n})=>t`<db-card ${i(n)}>${r(`<strong>Expressive</strong>`)}</db-card>`},d=[`Functional`,`DefaultRegular`,`Expressive`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>Functional</strong>\`)}</db-card>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>(Default) Regular</strong>\`)}</db-card>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>Expressive</strong>\`)}</db-card>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultRegular,u as Expressive,c as Functional,d as __namedExportsOrder,s as default};