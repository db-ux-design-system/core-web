import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-JyjWzvsX.js";import{i,n as a,t as o}from"./apply-web-component-args-DQCFBoNa.js";var s=t({Paragraphwithlang:()=>u,Visuallyhiddenparagraph:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBParagraph/Forwarded attributes`,component:`db-paragraph`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`lg`,`md`,`sm`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},u={args:{lang:`en`,"data-testid":`forwarded-paragraph`},render:({children:e,...t})=>n`<db-paragraph ${a(t)}>${i(`Native attributes land on the paragraph element.`)}</db-paragraph>`},d={args:{"data-visually-hidden":`true`},render:({children:e,...t})=>n`<db-paragraph ${a(t)}>${i(`Only announced by assistive technology.`)}</db-paragraph>`},f=[`Paragraphwithlang`,`Visuallyhiddenparagraph`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "lang": "en",
    "data-testid": "forwarded-paragraph"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-paragraph \${spreadArgs(args)}>\${unsafeHTML(\`Native attributes land on the paragraph element.\`)}</db-paragraph>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-visually-hidden": "true"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-paragraph \${spreadArgs(args)}>\${unsafeHTML(\`Only announced by assistive technology.\`)}</db-paragraph>\`
}`,...d.parameters?.docs?.source}}}})))()}export{p as i,d as n,s as r,u as t};