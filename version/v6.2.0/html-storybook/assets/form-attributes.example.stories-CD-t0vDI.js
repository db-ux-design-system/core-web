import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-UGjAMBGZ.js";import{n,t as r}from"./button-C6vX_-TT.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBButton/Form Attributes`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{"data-testid":`form-default-button`,type:`submit`,name:`action`,value:`default`,children:`Default submit`},render:e=>(0,i.jsxs)(`form`,{id:`demo-form`,action:`#default-action`,method:`get`,onSubmit:e=>handleSubmit(e),children:[(0,i.jsx)(r,{...e}),(0,i.jsx)(r,{"data-testid":`form-override-button`,type:`submit`,name:`action`,value:`override`,formAction:`#override-action`,formMethod:`post`,formEncType:`multipart/form-data`,formTarget:`_self`,formNoValidate:!0,children:`Override submit target`})]})},c={args:{type:`reset`,form:`demo-form`,children:`Reset the form above`},render:e=>(0,i.jsx)(r,{...e})},l=[`FormAttributes`,`ButtonFormAttributes1`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "form-default-button",
    "type": "submit",
    "name": "action",
    "value": "default",
    "children": "Default submit"
  },
  render: (properties: any) => <form id="demo-form" action="#default-action" method="get" onSubmit={event => handleSubmit(event)}><DBButton {...properties} /><DBButton data-testid="form-override-button" type="submit" name="action" value="override" formAction="#override-action" formMethod="post" formEncType="multipart/form-data" formTarget="_self" formNoValidate>
                    Override submit target
                </DBButton></form>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "type": "reset",
    "form": "demo-form",
    "children": "Reset the form above"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as ButtonFormAttributes1,s as FormAttributes,l as __namedExportsOrder,o as default};