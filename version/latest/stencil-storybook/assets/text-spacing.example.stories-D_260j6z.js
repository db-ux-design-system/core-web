import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,o as n}from"./iframe-Br6etAwV.js";import{i as r,n as i,t as a}from"./apply-web-component-args-DordW00e.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTextGroup/Text spacing`,component:`db-text-group`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},c={args:{textSpacing:!1},render:({children:e,...n})=>t`<db-text-group ${i(n)}>${r(`<db-paragraph>False: the paragraphs sit directly on top of each other.</db-paragraph><db-paragraph>Nothing has to be set on the paragraphs themselves.</db-paragraph>`)}</db-text-group>`},l={args:{textSpacing:!0},render:({children:e,...n})=>t`<db-text-group ${i(n)}>${r(`<db-paragraph>True: every child gets half a line height above and below.</db-paragraph><db-paragraph>Two adjacent children are a full line height apart, and the group keeps half of one at its outer edges.</db-paragraph>`)}</db-text-group>`},u={args:{},render:({children:e,...n})=>t`<div data-text-spacing="true"><db-text-group ${i(n)}>${r(`<db-paragraph>Unset: this group sets nothing, so it follows the surrounding element that opted in.</db-paragraph><db-paragraph>Use false to switch the spacing off for certain.</db-paragraph>`)}</db-text-group></div>`},d=[`Falsewithoutspacing`,`Truewithspacing`,`DefaultUnsetinherited`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-text-group \${spreadArgs(args)}>\${unsafeHTML(\`<db-paragraph>False: the paragraphs sit directly on top of each other.</db-paragraph><db-paragraph>Nothing has to be set on the paragraphs themselves.</db-paragraph>\`)}</db-text-group>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-text-group \${spreadArgs(args)}>\${unsafeHTML(\`<db-paragraph>True: every child gets half a line height above and below.</db-paragraph><db-paragraph>Two adjacent children are a full line height apart, and the group keeps half of one at its outer edges.</db-paragraph>\`)}</db-text-group>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div data-text-spacing="true"><db-text-group \${spreadArgs(args)}>\${unsafeHTML(\`<db-paragraph>Unset: this group sets nothing, so it follows the surrounding element that opted in.</db-paragraph><db-paragraph>Use false to switch the spacing off for certain.</db-paragraph>\`)}</db-text-group></div>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as DefaultUnsetinherited,c as Falsewithoutspacing,l as Truewithspacing,d as __namedExportsOrder,s as default};