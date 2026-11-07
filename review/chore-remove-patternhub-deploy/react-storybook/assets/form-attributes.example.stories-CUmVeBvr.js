import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./button-KkPyUB9O.js";var a=t({ButtonFormAttributes1:()=>u,FormAttributes:()=>l,__namedExportsOrder:()=>d,default:()=>c}),o,s,c,l,u,d;function f(){return(f=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBButton/Form Attributes`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:s()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},l={args:{"data-testid":`form-default-button`,type:`submit`,name:`action`,value:`default`,children:`Default submit`},render:e=>(0,o.jsxs)(`form`,{id:`demo-form`,action:`#default-action`,method:`get`,onSubmit:e=>handleSubmit(e),children:[(0,o.jsx)(i,{...e}),(0,o.jsx)(i,{"data-testid":`form-override-button`,type:`submit`,name:`action`,value:`override`,formAction:`#override-action`,formMethod:`post`,formEncType:`multipart/form-data`,formTarget:`_self`,formNoValidate:!0,children:`Override submit target`})]})},u={args:{type:`reset`,form:`demo-form`,children:`Reset the form above`},render:e=>(0,o.jsx)(i,{...e})},d=[`FormAttributes`,`ButtonFormAttributes1`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "type": "reset",
    "form": "demo-form",
    "children": "Reset the form above"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...u.parameters?.docs?.source}}}})))()}export{f as i,l as n,a as r,u as t};