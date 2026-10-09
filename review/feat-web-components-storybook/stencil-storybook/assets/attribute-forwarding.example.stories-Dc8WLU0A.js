import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBHeading/Forwarded heading attributes`,component:`db-heading-h-2`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},c={args:{id:`forwarded-heading`,"aria-label":`ID, class, ARIA, data and style forwarded to h2`,"data-example":`heading`,style:{textTransform:`uppercase`}},render:({children:e,...n})=>t`<db-heading-h-2 ${i(n)}>${r(`ID, class, ARIA, data and style forwarded to h2`)}</db-heading-h-2>`},l={args:{id:`forwarded-custom-heading`,"data-example":`custom-heading`,style:{textTransform:`uppercase`}},render:({children:e,...n})=>t`<db-custom-heading ${i(n)}>${r(`<h2>ID, class, data and style on the wrapper</h2>`)}</db-custom-heading>`},u=[`NativeIDclassARIAdataandstyle`,`WrapperIDclassdataandstyle`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as NativeIDclassARIAdataandstyle,l as WrapperIDclassdataandstyle,u as __namedExportsOrder,s as default};