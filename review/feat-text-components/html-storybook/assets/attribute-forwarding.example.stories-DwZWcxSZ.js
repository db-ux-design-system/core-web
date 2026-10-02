import{n as e}from"./iframe-D06NKLdb.js";import{n as t,t as n}from"./paragraph-BhF2q2be.js";import{n as r,t as i}from"./text-Dxwsv0GZ.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d;function f(){return(f=a((()=>{t(),r(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBText/Forwarded attributes`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},l={args:{lang:`en`,"data-testid":`forwarded-paragraph`,children:`Native attributes land on the paragraph element.`},render:e=>(0,o.jsx)(n,{...e})},u={args:{lang:`de`,children:`Schienenersatzverkehr`},render:e=>(0,o.jsxs)(n,{children:[`The German term is`,(0,o.jsx)(i,{...e}),`, announced in the correct language.`]})},d=[`Paragraphwithlang`,`Textwithatranslation`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "lang": "en",
    "data-testid": "forwarded-paragraph",
    "children": "Native attributes land on the paragraph element."
  },
  render: (properties: any) => <DBParagraph {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "lang": "de",
    "children": "Schienenersatzverkehr"
  },
  render: (properties: any) => <DBParagraph>
                The German term is<DBText {...properties} />, announced in
                the correct language.
            </DBParagraph>
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as Paragraphwithlang,u as Textwithatranslation,d as __namedExportsOrder,c as default};