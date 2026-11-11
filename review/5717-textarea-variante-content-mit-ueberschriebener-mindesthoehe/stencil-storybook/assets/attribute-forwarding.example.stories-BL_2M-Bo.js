import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DesJQKM_.js";import{i,n as a,t as o}from"./apply-web-component-args-CMbNfqh7.js";var s=t({NativeIDclassARIAdataandstyle:()=>u,WrapperIDclassdataandstyle:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBHeading/Forwarded heading attributes`,component:`db-heading-h-2`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{visualSize:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`p-small`,`p-medium`,`p-large`]},fontWeight:{control:`select`,options:[`black`,`light`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},u={args:{id:`forwarded-heading`,"aria-label":`ID, class, ARIA, data and style forwarded to h2`,"data-example":`heading`,style:{textTransform:`uppercase`}},render:({children:e,...t})=>n`<db-heading-h-2 ${a(t)}>${i(`ID, class, ARIA, data and style forwarded to h2`)}</db-heading-h-2>`},d={args:{id:`forwarded-custom-heading`,"data-example":`custom-heading`,style:{textTransform:`uppercase`}},render:({children:e,...t})=>n`<db-custom-heading ${a(t)}>${i(`<h2>ID, class, data and style on the wrapper</h2>`)}</db-custom-heading>`},f=[`NativeIDclassARIAdataandstyle`,`WrapperIDclassdataandstyle`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "forwarded-heading",
    "aria-label": "ID, class, ARIA, data and style forwarded to h2",
    "data-example": "heading",
    "style": {
      textTransform: 'uppercase'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-heading-h-2 \${spreadArgs(args)}>\${unsafeHTML(\`ID, class, ARIA, data and style forwarded to h2\`)}</db-heading-h-2>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "forwarded-custom-heading",
    "data-example": "custom-heading",
    "style": {
      textTransform: 'uppercase'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-custom-heading \${spreadArgs(args)}>\${unsafeHTML(\`<h2>ID, class, data and style on the wrapper</h2>\`)}</db-custom-heading>\`
}`,...d.parameters?.docs?.source}}}})))()}export{p as i,d as n,s as r,u as t};