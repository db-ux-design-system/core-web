import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBSection/Width`,component:`db-section`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},autofocus:{control:`boolean`}}},c={args:{style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`}},render:({children:e,...n})=>t`<div><db-section ${i(n)}>${r(`<db-card>(Default) Full</db-card><db-card>(Default) Full</db-card><db-card>(Default) Full</db-card><db-card>(Default) Full</db-card>`)}</db-section></div>`},l={args:{width:`small`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`}},render:({children:e,...n})=>t`<div><db-section ${i(n)}>${r(`<db-card>Small</db-card><db-card>Small</db-card><db-card>Small</db-card><db-card>Small</db-card>`)}</db-section></div>`},u={args:{width:`medium`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`}},render:({children:e,...n})=>t`<div><db-section ${i(n)}>${r(`<db-card>Medium</db-card><db-card>Medium</db-card><db-card>Medium</db-card><db-card>Medium</db-card>`)}</db-section></div>`},d={args:{width:`large`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`}},render:({children:e,...n})=>t`<div><db-section ${i(n)}>${r(`<db-card>Large</db-card><db-card>Large</db-card><db-card>Large</db-card><db-card>Large</db-card>`)}</db-section></div>`},f=[`DefaultFull`,`Small`,`Medium`,`Large`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-section \${spreadArgs(args)}>\${unsafeHTML(\`<db-card>(Default) Full</db-card><db-card>(Default) Full</db-card><db-card>(Default) Full</db-card><db-card>(Default) Full</db-card>\`)}</db-section></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "small",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-section \${spreadArgs(args)}>\${unsafeHTML(\`<db-card>Small</db-card><db-card>Small</db-card><db-card>Small</db-card><db-card>Small</db-card>\`)}</db-section></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "medium",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-section \${spreadArgs(args)}>\${unsafeHTML(\`<db-card>Medium</db-card><db-card>Medium</db-card><db-card>Medium</db-card><db-card>Medium</db-card>\`)}</db-section></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "large",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-section \${spreadArgs(args)}>\${unsafeHTML(\`<db-card>Large</db-card><db-card>Large</db-card><db-card>Large</db-card><db-card>Large</db-card>\`)}</db-section></div>\`
}`,...d.parameters?.docs?.source}}}})))()}p();export{c as DefaultFull,d as Large,u as Medium,l as Small,f as __namedExportsOrder,s as default};