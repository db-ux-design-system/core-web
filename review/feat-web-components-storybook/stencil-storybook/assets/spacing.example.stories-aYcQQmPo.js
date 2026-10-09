import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBSection/Spacing`,component:`db-section`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},autofocus:{control:`boolean`}}},c={args:{spacing:`medium`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`}},render:({children:e,...n})=>t`<db-section ${i(n)}>${r(`<db-card>(Default) Medium</db-card><db-card>(Default) Medium</db-card><db-card>(Default) Medium</db-card><db-card>(Default) Medium</db-card>`)}</db-section>`},l={args:{spacing:`large`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`}},render:({children:e,...n})=>t`<db-section ${i(n)}>${r(`<db-card>Large</db-card><db-card>Large</db-card><db-card>Large</db-card><db-card>Large</db-card>`)}</db-section>`},u={args:{spacing:`small`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`}},render:({children:e,...n})=>t`<db-section ${i(n)}>${r(`<db-card>Small</db-card><db-card>Small</db-card><db-card>Small</db-card><db-card>Small</db-card>`)}</db-section>`},d={args:{spacing:`none`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`}},render:({children:e,...n})=>t`<db-section ${i(n)}>${r(`<db-card>None</db-card><db-card>None</db-card><db-card>None</db-card><db-card>None</db-card>`)}</db-section>`},f=[`DefaultMedium`,`Large`,`Small`,`None`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "medium",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-section \${spreadArgs(args)}>\${unsafeHTML(\`<db-card>(Default) Medium</db-card><db-card>(Default) Medium</db-card><db-card>(Default) Medium</db-card><db-card>(Default) Medium</db-card>\`)}</db-section>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "large",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-section \${spreadArgs(args)}>\${unsafeHTML(\`<db-card>Large</db-card><db-card>Large</db-card><db-card>Large</db-card><db-card>Large</db-card>\`)}</db-section>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "small",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-section \${spreadArgs(args)}>\${unsafeHTML(\`<db-card>Small</db-card><db-card>Small</db-card><db-card>Small</db-card><db-card>Small</db-card>\`)}</db-section>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "none",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-section \${spreadArgs(args)}>\${unsafeHTML(\`<db-card>None</db-card><db-card>None</db-card><db-card>None</db-card><db-card>None</db-card>\`)}</db-section>\`
}`,...d.parameters?.docs?.source}}}})))()}p();export{c as DefaultMedium,l as Large,d as None,u as Small,f as __namedExportsOrder,s as default};