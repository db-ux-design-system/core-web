import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-6AHPC0Is.js";var i=t({ButtonFormAttributes1:()=>c,FormAttributes:()=>s,__namedExportsOrder:()=>l,default:()=>o}),a,o,s,c,l;function u(){return(u=e((()=>{n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBButton/Form Attributes`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{"data-testid":`form-default-button`,type:`submit`,name:`action`,value:`default`,default:`Default submit`},render:e=>({components:{DBButton:r},setup(){return{args:e}},template:`<form id="demo-form" action="#default-action" method="get" @submit="async (event) => handleSubmit(event)"  ><DBButton v-bind="args"   >${e.default}</DBButton><DBButton data-testid="form-override-button" type="submit" name="action" value="override" formAction="#override-action" formMethod="post" formEncType="multipart/form-data" formTarget="_self" :formNoValidate="true"  >
                    Override submit target
                </DBButton></form>`})},c={args:{type:`reset`,form:`demo-form`,default:`Reset the form above`},render:e=>({components:{DBButton:r},setup(){return{args:e}},template:`<DBButton v-bind="args"   >${e.default}</DBButton>`})},l=[`FormAttributes`,`ButtonFormAttributes1`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}}})))()}export{u as i,s as n,i as r,c as t};