import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBSection/Density`,component:`db-section`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},autofocus:{control:`boolean`}}},c={args:{"data-density":`functional`,id:`test-id-123`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`}},render:({children:e,...n})=>t`<db-section ${i(n)}>${r(`<db-card>Functional</db-card><db-card>Functional</db-card><db-card>Functional</db-card><db-card>Functional</db-card>`)}</db-section>`},l={args:{"data-density":`regular`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`}},render:({children:e,...n})=>t`<db-section ${i(n)}>${r(`<db-card>(Default) Regular</db-card><db-card>(Default) Regular</db-card><db-card>(Default) Regular</db-card><db-card>(Default) Regular</db-card>`)}</db-section>`},u={args:{"data-density":`expressive`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`}},render:({children:e,...n})=>t`<db-section ${i(n)}>${r(`<db-card>Expressive</db-card><db-card>Expressive</db-card><db-card>Expressive</db-card><db-card>Expressive</db-card>`)}</db-section>`},d=[`Functional`,`DefaultRegular`,`Expressive`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "id": "test-id-123",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-section \${spreadArgs(args)}>\${unsafeHTML(\`<db-card>Functional</db-card><db-card>Functional</db-card><db-card>Functional</db-card><db-card>Functional</db-card>\`)}</db-section>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-section \${spreadArgs(args)}>\${unsafeHTML(\`<db-card>(Default) Regular</db-card><db-card>(Default) Regular</db-card><db-card>(Default) Regular</db-card><db-card>(Default) Regular</db-card>\`)}</db-section>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-section \${spreadArgs(args)}>\${unsafeHTML(\`<db-card>Expressive</db-card><db-card>Expressive</db-card><db-card>Expressive</db-card><db-card>Expressive</db-card>\`)}</db-section>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultRegular,u as Expressive,c as Functional,d as __namedExportsOrder,s as default};