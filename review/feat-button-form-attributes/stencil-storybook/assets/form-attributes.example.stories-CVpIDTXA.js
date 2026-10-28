import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,o as n}from"./iframe-kp_ghtJ_.js";import{i as r,n as i,t as a}from"./apply-web-component-args-C4LNHXKF.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBButton/Form Attributes`,component:`db-button`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:o()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},c={args:{"data-testid":`form-default-button`,type:`submit`,name:`action`,value:`default`},render:({children:e,...n})=>t`<form id="demo-form" action="#default-action" method="get"><db-button ${i(n)}>${r(`Default submit`)}</db-button><db-button data-testid="form-override-button" type="submit" name="action" value="override" form-action="#override-action" form-method="post" form-enc-type="multipart/form-data" form-target="_self" form-no-validate>Override submit target</db-button></form>`},l={args:{type:`reset`,form:`demo-form`},render:({children:e,...n})=>t`<db-button ${i(n)}>${r(`Reset the form above`)}</db-button>`},u=[`FormAttributes`,`ButtonFormAttributes1`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "form-default-button",
    "type": "submit",
    "name": "action",
    "value": "default"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<form id="demo-form" action="#default-action" method="get"><db-button \${spreadArgs(args)}>\${unsafeHTML(\`Default submit\`)}</db-button><db-button data-testid="form-override-button" type="submit" name="action" value="override" form-action="#override-action" form-method="post" form-enc-type="multipart/form-data" form-target="_self" form-no-validate>Override submit target</db-button></form>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "type": "reset",
    "form": "demo-form"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button \${spreadArgs(args)}>\${unsafeHTML(\`Reset the form above\`)}</db-button>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as ButtonFormAttributes1,c as FormAttributes,u as __namedExportsOrder,s as default};