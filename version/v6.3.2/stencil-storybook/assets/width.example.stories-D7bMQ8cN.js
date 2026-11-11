import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-eRVGBq1F.js";import{i,n as a,t as o}from"./apply-web-component-args-DDM1wTo-.js";var s=t({DefaultFull:()=>u,Large:()=>p,Medium:()=>f,Small:()=>d,__namedExportsOrder:()=>m,default:()=>l}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBSection/Width`,component:`db-section`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},autofocus:{control:`boolean`}}},u={args:{style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`}},render:({children:e,...t})=>n`<div style="width: 100%; display: block"><db-section ${a(t)}>${i(`<db-card style="inline-size: 100%">(Default) Full</db-card><db-card style="inline-size: 100%">(Default) Full</db-card><db-card style="inline-size: 100%">(Default) Full</db-card><db-card style="inline-size: 100%">(Default) Full</db-card>`)}</db-section></div>`},d={args:{width:`small`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`}},render:({children:e,...t})=>n`<div style="width: 100%; display: block"><db-section ${a(t)}>${i(`<db-card style="inline-size: 100%">Small</db-card><db-card style="inline-size: 100%">Small</db-card><db-card style="inline-size: 100%">Small</db-card><db-card style="inline-size: 100%">Small</db-card>`)}</db-section></div>`},f={args:{width:`medium`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`}},render:({children:e,...t})=>n`<div style="width: 100%; display: block"><db-section ${a(t)}>${i(`<db-card style="inline-size: 100%">Medium</db-card><db-card style="inline-size: 100%">Medium</db-card><db-card style="inline-size: 100%">Medium</db-card><db-card style="inline-size: 100%">Medium</db-card>`)}</db-section></div>`},p={args:{width:`large`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`}},render:({children:e,...t})=>n`<div style="width: 100%; display: block"><db-section ${a(t)}>${i(`<db-card style="inline-size: 100%">Large</db-card><db-card style="inline-size: 100%">Large</db-card><db-card style="inline-size: 100%">Large</db-card><db-card style="inline-size: 100%">Large</db-card>`)}</db-section></div>`},m=[`DefaultFull`,`Small`,`Medium`,`Large`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<div style="width: 100%; display: block"><db-section \${spreadArgs(args)}>\${unsafeHTML(\`<db-card style="inline-size: 100%">(Default) Full</db-card><db-card style="inline-size: 100%">(Default) Full</db-card><db-card style="inline-size: 100%">(Default) Full</db-card><db-card style="inline-size: 100%">(Default) Full</db-card>\`)}</db-section></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<div style="width: 100%; display: block"><db-section \${spreadArgs(args)}>\${unsafeHTML(\`<db-card style="inline-size: 100%">Small</db-card><db-card style="inline-size: 100%">Small</db-card><db-card style="inline-size: 100%">Small</db-card><db-card style="inline-size: 100%">Small</db-card>\`)}</db-section></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<div style="width: 100%; display: block"><db-section \${spreadArgs(args)}>\${unsafeHTML(\`<db-card style="inline-size: 100%">Medium</db-card><db-card style="inline-size: 100%">Medium</db-card><db-card style="inline-size: 100%">Medium</db-card><db-card style="inline-size: 100%">Medium</db-card>\`)}</db-section></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<div style="width: 100%; display: block"><db-section \${spreadArgs(args)}>\${unsafeHTML(\`<db-card style="inline-size: 100%">Large</db-card><db-card style="inline-size: 100%">Large</db-card><db-card style="inline-size: 100%">Large</db-card><db-card style="inline-size: 100%">Large</db-card>\`)}</db-section></div>\`
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,d as i,p as n,s as o,f as r,u as t};