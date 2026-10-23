import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-DXCUk4aM.js";import{i as r,n as i,t as a}from"./apply-web-component-args-DveVwdDl.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBParagraph/Forwarded attributes`,component:`db-paragraph`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`lg`,`md`,`sm`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},c={args:{lang:`en`,"data-testid":`forwarded-paragraph`},render:({children:e,...n})=>t`<db-paragraph ${i(n)}>${r(`Native attributes land on the paragraph element.`)}</db-paragraph>`},l={args:{"data-visually-hidden":`true`},render:({children:e,...n})=>t`<db-paragraph ${i(n)}>${r(`Only announced by assistive technology.`)}</db-paragraph>`},u=[`Paragraphwithlang`,`Visuallyhiddenparagraph`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "lang": "en",
    "data-testid": "forwarded-paragraph"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-paragraph \${spreadArgs(args)}>\${unsafeHTML(\`Native attributes land on the paragraph element.\`)}</db-paragraph>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-visually-hidden": "true"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-paragraph \${spreadArgs(args)}>\${unsafeHTML(\`Only announced by assistive technology.\`)}</db-paragraph>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Paragraphwithlang,l as Visuallyhiddenparagraph,u as __namedExportsOrder,s as default};