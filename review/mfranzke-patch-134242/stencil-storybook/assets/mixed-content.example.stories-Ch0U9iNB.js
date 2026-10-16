import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-CmBxBCoS.js";import{i as r,n as i,t as a}from"./apply-web-component-args-BPr23LsK.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTextGroup/Mixed content`,component:`db-text-group`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},c={args:{textSpacing:!0},render:({children:e,...n})=>t`<db-text-group ${i(n)}>${r(`<h3>A native heading</h3><p>A native paragraph. The opt-in reaches it just like it reaches our components, so plain markup and components can be mixed freely.</p><db-paragraph>A component paragraph, spaced by exactly the same rule.</db-paragraph>`)}</db-text-group>`},l={args:{textSpacing:!0},render:({children:e,...n})=>t`<db-text-group ${i(n)}>${r(`<db-paragraph>A list is not one of the block-text elements, so it keeps whatever margin it brings.</db-paragraph><ul><li>Opted into the same rhythm</li><li>The list items are unaffected</li></ul><db-paragraph>Set a zero block margin instead to take such a child out of the rhythm entirely.</db-paragraph>`)}</db-text-group>`},u=[`Nativeblocktext`,`Achildoutsidethetextelements`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-text-group \${spreadArgs(args)}>\${unsafeHTML(\`<h3>A native heading</h3><p>A native paragraph. The opt-in reaches it just like it reaches our components, so plain markup and components can be mixed freely.</p><db-paragraph>A component paragraph, spaced by exactly the same rule.</db-paragraph>\`)}</db-text-group>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-text-group \${spreadArgs(args)}>\${unsafeHTML(\`<db-paragraph>A list is not one of the block-text elements, so it keeps whatever margin it brings.</db-paragraph><ul><li>Opted into the same rhythm</li><li>The list items are unaffected</li></ul><db-paragraph>Set a zero block margin instead to take such a child out of the rhythm entirely.</db-paragraph>\`)}</db-text-group>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as Achildoutsidethetextelements,c as Nativeblocktext,u as __namedExportsOrder,s as default};