import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-BUxwpRaD.js";import{i as r,n as i,t as a}from"./apply-web-component-args-DnmYEmgR.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTextGroup/Logical alignment`,component:`db-text-group`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},c={args:{alignment:`start`,textSpacing:!0},render:({children:e,...n})=>t`<db-text-group ${i(n)}>${r(`<db-paragraph>(Default) Start</db-paragraph><db-paragraph>Inherited by every paragraph</db-paragraph>`)}</db-text-group>`},l={args:{alignment:`center`,textSpacing:!0},render:({children:e,...n})=>t`<db-text-group ${i(n)}>${r(`<db-paragraph>Center</db-paragraph><db-paragraph>Inherited by every paragraph</db-paragraph>`)}</db-text-group>`},u={args:{alignment:`end`,textSpacing:!0},render:({children:e,...n})=>t`<db-text-group ${i(n)}>${r(`<db-paragraph>End</db-paragraph><db-paragraph>Inherited by every paragraph</db-paragraph>`)}</db-text-group>`},d=[`DefaultStart`,`Center`,`End`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "start",
    "textSpacing": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-text-group \${spreadArgs(args)}>\${unsafeHTML(\`<db-paragraph>(Default) Start</db-paragraph><db-paragraph>Inherited by every paragraph</db-paragraph>\`)}</db-text-group>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "center",
    "textSpacing": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-text-group \${spreadArgs(args)}>\${unsafeHTML(\`<db-paragraph>Center</db-paragraph><db-paragraph>Inherited by every paragraph</db-paragraph>\`)}</db-text-group>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "end",
    "textSpacing": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-text-group \${spreadArgs(args)}>\${unsafeHTML(\`<db-paragraph>End</db-paragraph><db-paragraph>Inherited by every paragraph</db-paragraph>\`)}</db-text-group>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as Center,c as DefaultStart,u as End,d as __namedExportsOrder,s as default};