import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DnhM2czJ.js";import{i,n as a,t as o}from"./apply-web-component-args-B6TwiEBZ.js";var s=t({Achildoutsidethetextelements:()=>d,Nativeblocktext:()=>u,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTextGroup/Mixed content`,component:`db-text-group`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},u={args:{textSpacing:!0},render:({children:e,...t})=>n`<db-text-group ${a(t)}>${i(`<h3>A native heading</h3><p>A native paragraph. The opt-in reaches it just like it reaches our components, so plain markup and components can be mixed freely.</p><db-paragraph>A component paragraph, spaced by exactly the same rule.</db-paragraph>`)}</db-text-group>`},d={args:{textSpacing:!0},render:({children:e,...t})=>n`<db-text-group ${a(t)}>${i(`<db-paragraph>A list is not one of the block-text elements, so it keeps whatever margin it brings.</db-paragraph><ul style="margin-block: calc(1lh * var(--db-text-spacing, 0))"><li>Opted into the same rhythm</li><li>The list items are unaffected</li></ul><db-paragraph>Set a zero block margin instead to take such a child out of the rhythm entirely.</db-paragraph>`)}</db-text-group>`},f=[`Nativeblocktext`,`Achildoutsidethetextelements`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-text-group \${spreadArgs(args)}>\${unsafeHTML(\`<h3>A native heading</h3><p>A native paragraph. The opt-in reaches it just like it reaches our components, so plain markup and components can be mixed freely.</p><db-paragraph>A component paragraph, spaced by exactly the same rule.</db-paragraph>\`)}</db-text-group>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-text-group \${spreadArgs(args)}>\${unsafeHTML(\`<db-paragraph>A list is not one of the block-text elements, so it keeps whatever margin it brings.</db-paragraph><ul style="margin-block: calc(1lh * var(--db-text-spacing, 0))"><li>Opted into the same rhythm</li><li>The list items are unaffected</li></ul><db-paragraph>Set a zero block margin instead to take such a child out of the rhythm entirely.</db-paragraph>\`)}</db-text-group>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,u as n,p as r,d as t};