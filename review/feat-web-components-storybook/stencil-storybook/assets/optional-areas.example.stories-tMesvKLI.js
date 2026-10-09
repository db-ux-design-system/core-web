import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBFooter/Optional Areas`,component:`db-footer`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`large`,`medium`,`small`]},id:{control:`text`}}},c={args:{},render:({children:e,...n})=>t`<db-footer ${i(n)}>${r(`<db-footer-content><nav aria-label="Content-only footer navigation"><ul><li><db-link href="#services" wrap>Services</db-link></li></ul></nav></db-footer-content>`)}</db-footer>`},l={args:{},render:({children:e,...n})=>t`<db-footer ${i(n)}>${r(`<db-footer-meta><p><span>Customer service:</span><db-link variant="inline" size="small" href="#contact">Contact us</db-link></p></db-footer-meta>`)}</db-footer>`},u=[`Contentonly`,`Metaonly`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-footer \${spreadArgs(args)}>\${unsafeHTML(\`<db-footer-content><nav aria-label="Content-only footer navigation"><ul><li><db-link href="#services" wrap>Services</db-link></li></ul></nav></db-footer-content>\`)}</db-footer>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-footer \${spreadArgs(args)}>\${unsafeHTML(\`<db-footer-meta><p><span>Customer service:</span><db-link variant="inline" size="small" href="#contact">Contact us</db-link></p></db-footer-meta>\`)}</db-footer>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Contentonly,l as Metaonly,u as __namedExportsOrder,s as default};