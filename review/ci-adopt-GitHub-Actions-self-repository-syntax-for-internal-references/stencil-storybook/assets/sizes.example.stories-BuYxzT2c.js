import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-TyV4LMob.js";import{i as r,n as i,t as a}from"./apply-web-component-args-Dxv5e7g2.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBParagraph/Sizes`,component:`db-paragraph`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`lg`,`md`,`sm`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},c={args:{},render:({children:e,...n})=>t`<db-paragraph ${i(n)}>${r(`(Default) Inherited, same as md`)}</db-paragraph>`},l={args:{size:`lg`},render:({children:e,...n})=>t`<db-paragraph ${i(n)}>${r(`Size lg`)}</db-paragraph>`},u={args:{size:`md`},render:({children:e,...n})=>t`<db-paragraph ${i(n)}>${r(`Size md`)}</db-paragraph>`},d={args:{size:`sm`},render:({children:e,...n})=>t`<db-paragraph ${i(n)}>${r(`Size sm`)}</db-paragraph>`},f=[`DefaultInheritedsameasmd`,`Sizelg`,`Sizemd`,`Sizesm`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-paragraph \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Inherited, same as md\`)}</db-paragraph>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "lg"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-paragraph \${spreadArgs(args)}>\${unsafeHTML(\`Size lg\`)}</db-paragraph>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "md"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-paragraph \${spreadArgs(args)}>\${unsafeHTML(\`Size md\`)}</db-paragraph>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "sm"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-paragraph \${spreadArgs(args)}>\${unsafeHTML(\`Size sm\`)}</db-paragraph>\`
}`,...d.parameters?.docs?.source}}}})))()}p();export{c as DefaultInheritedsameasmd,l as Sizelg,u as Sizemd,d as Sizesm,f as __namedExportsOrder,s as default};