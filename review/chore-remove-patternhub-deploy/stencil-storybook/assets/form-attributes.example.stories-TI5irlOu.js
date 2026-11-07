import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CSduPcDp.js";import{i,n as a,t as o}from"./apply-web-component-args-D-8sNeLN.js";var s=t({ButtonFormAttributes1:()=>d,FormAttributes:()=>u,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBButton/Form Attributes`,component:`db-button`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:c()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},u={args:{"data-testid":`form-default-button`,type:`submit`,name:`action`,value:`default`},render:({children:e,...t})=>n`<form id="demo-form" action="#default-action" method="get"><db-button ${a(t)}>${i(`Default submit`)}</db-button><db-button data-testid="form-override-button" type="submit" name="action" value="override" form-action="#override-action" form-method="post" form-enc-type="multipart/form-data" form-target="_self" form-no-validate>Override submit target</db-button></form>`},d={args:{type:`reset`,form:`demo-form`},render:({children:e,...t})=>n`<db-button ${a(t)}>${i(`Reset the form above`)}</db-button>`},f=[`FormAttributes`,`ButtonFormAttributes1`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "type": "reset",
    "form": "demo-form"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button \${spreadArgs(args)}>\${unsafeHTML(\`Reset the form above\`)}</db-button>\`
}`,...d.parameters?.docs?.source}}}})))()}export{p as i,u as n,s as r,d as t};