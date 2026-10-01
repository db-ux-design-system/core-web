import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./radio-eNUxsqDU.js";var r,i,a,o,s;function c(){return(c=e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBRadio/Disabled`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},a={args:{name:`PaymentEnabled`,value:`card`,default:`Credit card`},render:e=>({components:{DBRadio:t},setup(){return{args:e}},template:`<fieldset    ><legend    >
                    (Default) false, enabled - select a payment method
                </legend><DBRadio v-bind="args"   >${e.default}</DBRadio><DBRadio name="PaymentEnabled" value="paypal"   >
                    PayPal
                </DBRadio><DBRadio name="PaymentEnabled" value="invoice"   >
                    Invoice
                </DBRadio></fieldset>`})},o={args:{name:`PaymentDisabled`,value:`card`,default:`Credit card`},render:e=>({components:{DBRadio:t},setup(){return{args:e}},template:`<fieldset  :disabled="true"  ><legend    >True, disabled - select a payment method</legend><DBRadio v-bind="args"   >${e.default}</DBRadio><DBRadio name="PaymentDisabled" value="paypal"   >
                    PayPal
                </DBRadio><DBRadio name="PaymentDisabled" value="invoice"   >
                    Invoice
                </DBRadio></fieldset>`})},s=[`DefaultEnabledgroup`,`Disabledgroup`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "PaymentEnabled",
    "value": "card",
    "default": \`Credit card\`
  },
  render: (args: any) => ({
    components: {
      DBRadio
    },
    setup() {
      return {
        args
      };
    },
    template: \`<fieldset    ><legend    >
                    (Default) false, enabled - select a payment method
                </legend><DBRadio v-bind="args"   >\${args.default}</DBRadio><DBRadio name="PaymentEnabled" value="paypal"   >
                    PayPal
                </DBRadio><DBRadio name="PaymentEnabled" value="invoice"   >
                    Invoice
                </DBRadio></fieldset>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "PaymentDisabled",
    "value": "card",
    "default": \`Credit card\`
  },
  render: (args: any) => ({
    components: {
      DBRadio
    },
    setup() {
      return {
        args
      };
    },
    template: \`<fieldset  :disabled="true"  ><legend    >True, disabled - select a payment method</legend><DBRadio v-bind="args"   >\${args.default}</DBRadio><DBRadio name="PaymentDisabled" value="paypal"   >
                    PayPal
                </DBRadio><DBRadio name="PaymentDisabled" value="invoice"   >
                    Invoice
                </DBRadio></fieldset>\`
  })
}`,...o.parameters?.docs?.source}}}})))()}c();export{a as DefaultEnabledgroup,o as Disabledgroup,s as __namedExportsOrder,i as default};