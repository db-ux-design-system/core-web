import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./button-tR1Qu8W9.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBButton/Form Attributes`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:r()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},a={args:{"data-testid":`form-default-button`,type:`submit`,name:`action`,value:`default`,default:`Default submit`},render:e=>({components:{DBButton:n},setup(){return{args:e}},template:`<form id="demo-form" action="#default-action" method="get" @submit="async (event) => handleSubmit(event)"  ><DBButton v-bind="args"   >${e.default}</DBButton><DBButton data-testid="form-override-button" type="submit" name="action" value="override" formAction="#override-action" formMethod="post" formEncType="multipart/form-data" formTarget="_self" :formNoValidate="true"  >
                    Override submit target
                </DBButton></form>`})},o={args:{type:`reset`,form:`demo-form`,default:`Reset the form above`},render:e=>({components:{DBButton:n},setup(){return{args:e}},template:`<DBButton v-bind="args"   >${e.default}</DBButton>`})},s=[`FormAttributes`,`ButtonFormAttributes1`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "form-default-button",
    "type": "submit",
    "name": "action",
    "value": "default",
    "default": \`Default submit\`
  },
  render: (args: any) => ({
    components: {
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<form id="demo-form" action="#default-action" method="get" @submit="async (event) => handleSubmit(event)"  ><DBButton v-bind="args"   >\${args.default}</DBButton><DBButton data-testid="form-override-button" type="submit" name="action" value="override" formAction="#override-action" formMethod="post" formEncType="multipart/form-data" formTarget="_self" :formNoValidate="true"  >
                    Override submit target
                </DBButton></form>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "type": "reset",
    "form": "demo-form",
    "default": \`Reset the form above\`
  },
  render: (args: any) => ({
    components: {
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton v-bind="args"   >\${args.default}</DBButton>\`
  })
}`,...o.parameters?.docs?.source}}}})))()}c();export{o as ButtonFormAttributes1,a as FormAttributes,s as __namedExportsOrder,i as default};