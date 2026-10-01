import{n as e}from"./iframe-DcvCoVHV.js";import{n as t,t as n}from"./radio-DwQa3zFp.js";import{n as r}from"./rolldown-runtime-DkW27tQK.js";var i,a,o,s,c,l;function u(){return(u=r((()=>{t(),i=e(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBRadio/Disabled`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{name:`PaymentEnabled`,value:`card`,children:`Credit card`},render:e=>(0,i.jsxs)(`fieldset`,{children:[(0,i.jsx)(`legend`,{children:`(Default) false, enabled - select a payment method`}),(0,i.jsx)(n,{...e}),(0,i.jsx)(n,{name:`PaymentEnabled`,value:`paypal`,children:`PayPal`}),(0,i.jsx)(n,{name:`PaymentEnabled`,value:`invoice`,children:`Invoice`})]})},c={args:{name:`PaymentDisabled`,value:`card`,children:`Credit card`},render:e=>(0,i.jsxs)(`fieldset`,{disabled:!0,children:[(0,i.jsx)(`legend`,{children:`True, disabled - select a payment method`}),(0,i.jsx)(n,{...e}),(0,i.jsx)(n,{name:`PaymentDisabled`,value:`paypal`,children:`PayPal`}),(0,i.jsx)(n,{name:`PaymentDisabled`,value:`invoice`,children:`Invoice`})]})},l=[`DefaultEnabledgroup`,`Disabledgroup`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "PaymentEnabled",
    "value": "card",
    "children": "Credit card"
  },
  render: (properties: any) => <fieldset><legend>
                    (Default) false, enabled - select a payment method
                </legend><DBRadio {...properties} /><DBRadio name="PaymentEnabled" value="paypal">
                    PayPal
                </DBRadio><DBRadio name="PaymentEnabled" value="invoice">
                    Invoice
                </DBRadio></fieldset>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "PaymentDisabled",
    "value": "card",
    "children": "Credit card"
  },
  render: (properties: any) => <fieldset disabled><legend>True, disabled - select a payment method</legend><DBRadio {...properties} /><DBRadio name="PaymentDisabled" value="paypal">
                    PayPal
                </DBRadio><DBRadio name="PaymentDisabled" value="invoice">
                    Invoice
                </DBRadio></fieldset>
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as DefaultEnabledgroup,c as Disabledgroup,l as __namedExportsOrder,o as default};