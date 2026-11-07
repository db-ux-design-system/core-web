import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-B9gE3-RB.js";import{i,n as a,t as o}from"./apply-web-component-args-BifYIpws.js";var s=t({DefaultMedium:()=>u,Large:()=>d,None:()=>p,Small:()=>f,__namedExportsOrder:()=>m,default:()=>l}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBSection/Spacing`,component:`db-section`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},autofocus:{control:`boolean`}}},u={args:{spacing:`medium`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`}},render:({children:e,...t})=>n`<db-section ${a(t)}>${i(`<db-card style="inline-size: 100%">(Default) Medium</db-card><db-card style="inline-size: 100%">(Default) Medium</db-card><db-card style="inline-size: 100%">(Default) Medium</db-card><db-card style="inline-size: 100%">(Default) Medium</db-card>`)}</db-section>`},d={args:{spacing:`large`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`}},render:({children:e,...t})=>n`<db-section ${a(t)}>${i(`<db-card style="inline-size: 100%">Large</db-card><db-card style="inline-size: 100%">Large</db-card><db-card style="inline-size: 100%">Large</db-card><db-card style="inline-size: 100%">Large</db-card>`)}</db-section>`},f={args:{spacing:`small`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`}},render:({children:e,...t})=>n`<db-section ${a(t)}>${i(`<db-card style="inline-size: 100%">Small</db-card><db-card style="inline-size: 100%">Small</db-card><db-card style="inline-size: 100%">Small</db-card><db-card style="inline-size: 100%">Small</db-card>`)}</db-section>`},p={args:{spacing:`none`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`}},render:({children:e,...t})=>n`<db-section ${a(t)}>${i(`<db-card style="inline-size: 100%">None</db-card><db-card style="inline-size: 100%">None</db-card><db-card style="inline-size: 100%">None</db-card><db-card style="inline-size: 100%">None</db-card>`)}</db-section>`},m=[`DefaultMedium`,`Large`,`Small`,`None`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<db-section \${spreadArgs(args)}>\${unsafeHTML(\`<db-card style="inline-size: 100%">(Default) Medium</db-card><db-card style="inline-size: 100%">(Default) Medium</db-card><db-card style="inline-size: 100%">(Default) Medium</db-card><db-card style="inline-size: 100%">(Default) Medium</db-card>\`)}</db-section>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<db-section \${spreadArgs(args)}>\${unsafeHTML(\`<db-card style="inline-size: 100%">Large</db-card><db-card style="inline-size: 100%">Large</db-card><db-card style="inline-size: 100%">Large</db-card><db-card style="inline-size: 100%">Large</db-card>\`)}</db-section>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<db-section \${spreadArgs(args)}>\${unsafeHTML(\`<db-card style="inline-size: 100%">Small</db-card><db-card style="inline-size: 100%">Small</db-card><db-card style="inline-size: 100%">Small</db-card><db-card style="inline-size: 100%">Small</db-card>\`)}</db-section>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<db-section \${spreadArgs(args)}>\${unsafeHTML(\`<db-card style="inline-size: 100%">None</db-card><db-card style="inline-size: 100%">None</db-card><db-card style="inline-size: 100%">None</db-card><db-card style="inline-size: 100%">None</db-card>\`)}</db-section>\`
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,f as i,d as n,s as o,p as r,u as t};