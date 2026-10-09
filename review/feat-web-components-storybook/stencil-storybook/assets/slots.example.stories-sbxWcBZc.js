import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBCustomHeading/Start and end slot`,component:`db-custom-heading`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},c={args:{},render:({children:e,...n})=>t`<db-custom-heading ${i(n)}>${r(`<h2>Current disruptions</h2>`)}</db-custom-heading>`},l={args:{},render:({children:e,...n})=>t`<db-custom-heading ${i(n)}>${r(`<h2>Installation</h2>`)}</db-custom-heading>`},u=[`Endslotwithabadge`,`Bothslotswithanaction`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-custom-heading \${spreadArgs(args)}>\${unsafeHTML(\`<h2>Current disruptions</h2>\`)}</db-custom-heading>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-custom-heading \${spreadArgs(args)}>\${unsafeHTML(\`<h2>Installation</h2>\`)}</db-custom-heading>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as Bothslotswithanaction,c as Endslotwithabadge,u as __namedExportsOrder,s as default};