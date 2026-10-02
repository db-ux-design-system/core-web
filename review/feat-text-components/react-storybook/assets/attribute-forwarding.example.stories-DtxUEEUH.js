import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./paragraph-CUqMOgJJ.js";import{n as i,t as a}from"./text-D21i_Z2h.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBText/Forwarded attributes`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},l={args:{lang:`en`,"data-testid":`forwarded-paragraph`,children:`Native attributes land on the paragraph element.`},render:e=>(0,o.jsx)(r,{...e})},u={args:{lang:`de`,children:`Schienenersatzverkehr`},render:e=>(0,o.jsxs)(r,{children:[`The German term is`,(0,o.jsx)(a,{...e}),`, announced in the correct language.`]})},d=[`Paragraphwithlang`,`Textwithatranslation`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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