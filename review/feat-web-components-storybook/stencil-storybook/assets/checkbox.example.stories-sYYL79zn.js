import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBCustomButton/Checkbox`,component:`db-custom-button`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},noText:{control:`boolean`},wrap:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{},render:({children:e,...n})=>t`<db-custom-button ${i(n)}>${r(`<label for="checkbox01"><input type="checkbox" id="checkbox01" />Checkbox</label>`)}</db-custom-button>`},l={args:{},render:({children:e,...n})=>t`<db-custom-button ${i(n)}>${r(`<label for="checkbox02"><input type="checkbox" id="checkbox02" checked />Checkbox</label>`)}</db-custom-button>`},u=[`Unchecked`,`Checked`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-custom-button \${spreadArgs(args)}>\${unsafeHTML(\`<label for="checkbox01"><input type="checkbox" id="checkbox01" />Checkbox</label>\`)}</db-custom-button>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-custom-button \${spreadArgs(args)}>\${unsafeHTML(\`<label for="checkbox02"><input type="checkbox" id="checkbox02" checked />Checkbox</label>\`)}</db-custom-button>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as Checked,c as Unchecked,u as __namedExportsOrder,s as default};