import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBCard/Spacing`,component:`db-card`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:o()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},c={args:{spacing:`small`},render:({children:e,...n})=>t`<db-card ${i(n)}>${r(`<strong>(Default) Small</strong>`)}</db-card>`},l={args:{spacing:`medium`},render:({children:e,...n})=>t`<db-card ${i(n)}>${r(`<strong>Medium</strong>`)}</db-card>`},u={args:{spacing:`large`},render:({children:e,...n})=>t`<db-card ${i(n)}>${r(`<strong>Large</strong>`)}</db-card>`},d={args:{spacing:`none`},render:({children:e,...n})=>t`<db-card ${i(n)}>${r(`<strong>None</strong>`)}</db-card>`},f=[`DefaultSmall`,`Medium`,`Large`,`None`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "small"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>(Default) Small</strong>\`)}</db-card>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "medium"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>Medium</strong>\`)}</db-card>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "large"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>Large</strong>\`)}</db-card>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "none"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-card \${spreadArgs(args)}>\${unsafeHTML(\`<strong>None</strong>\`)}</db-card>\`
}`,...d.parameters?.docs?.source}}}})))()}p();export{c as DefaultSmall,u as Large,l as Medium,d as None,f as __namedExportsOrder,s as default};