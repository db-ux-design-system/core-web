import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BiF0E9FZ.js";import{i,n as a,t as o}from"./apply-web-component-args-lK3_lLW3.js";var s=t({DefaultRegular:()=>d,Expressive:()=>f,Functional:()=>u,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBSection/Density`,component:`db-section`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},autofocus:{control:`boolean`}}},u={args:{"data-density":`functional`,id:`test-id-123`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`}},render:({children:e,...t})=>n`<db-section ${a(t)}>${i(`<db-card style="inline-size: 100%">Functional</db-card><db-card style="inline-size: 100%">Functional</db-card><db-card style="inline-size: 100%">Functional</db-card><db-card style="inline-size: 100%">Functional</db-card>`)}</db-section>`},d={args:{"data-density":`regular`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`}},render:({children:e,...t})=>n`<db-section ${a(t)}>${i(`<db-card style="inline-size: 100%">(Default) Regular</db-card><db-card style="inline-size: 100%">(Default) Regular</db-card><db-card style="inline-size: 100%">(Default) Regular</db-card><db-card style="inline-size: 100%">(Default) Regular</db-card>`)}</db-section>`},f={args:{"data-density":`expressive`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`}},render:({children:e,...t})=>n`<db-section ${a(t)}>${i(`<db-card style="inline-size: 100%">Expressive</db-card><db-card style="inline-size: 100%">Expressive</db-card><db-card style="inline-size: 100%">Expressive</db-card><db-card style="inline-size: 100%">Expressive</db-card>`)}</db-section>`},p=[`Functional`,`DefaultRegular`,`Expressive`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<db-section \${spreadArgs(args)}>\${unsafeHTML(\`<db-card style="inline-size: 100%">Functional</db-card><db-card style="inline-size: 100%">Functional</db-card><db-card style="inline-size: 100%">Functional</db-card><db-card style="inline-size: 100%">Functional</db-card>\`)}</db-section>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<db-section \${spreadArgs(args)}>\${unsafeHTML(\`<db-card style="inline-size: 100%">(Default) Regular</db-card><db-card style="inline-size: 100%">(Default) Regular</db-card><db-card style="inline-size: 100%">(Default) Regular</db-card><db-card style="inline-size: 100%">(Default) Regular</db-card>\`)}</db-section>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<db-section \${spreadArgs(args)}>\${unsafeHTML(\`<db-card style="inline-size: 100%">Expressive</db-card><db-card style="inline-size: 100%">Expressive</db-card><db-card style="inline-size: 100%">Expressive</db-card><db-card style="inline-size: 100%">Expressive</db-card>\`)}</db-section>\`
}`,...f.parameters?.docs?.source}}}})))()}export{m as a,s as i,f as n,u as r,d as t};