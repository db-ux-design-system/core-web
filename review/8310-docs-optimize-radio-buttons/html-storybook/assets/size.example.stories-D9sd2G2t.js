import{n as e}from"./iframe-DcvCoVHV.js";import{n as t,t as n}from"./radio-DwQa3zFp.js";import{n as r}from"./rolldown-runtime-DkW27tQK.js";var i,a,o,s,c,l;function u(){return(u=r((()=>{t(),i=e(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBRadio/Size`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{name:`DeliveryMedium`,value:`standard`,children:`Standard`},render:e=>(0,i.jsxs)(`fieldset`,{children:[(0,i.jsx)(`legend`,{children:`(Default) Medium - pick a delivery speed`}),(0,i.jsx)(n,{...e}),(0,i.jsx)(n,{name:`DeliveryMedium`,value:`express`,children:`Express`}),(0,i.jsx)(n,{name:`DeliveryMedium`,value:`overnight`,children:`Overnight`})]})},c={args:{name:`DeliverySmall`,value:`standard`,size:`small`,children:`Standard`},render:e=>(0,i.jsxs)(`fieldset`,{children:[(0,i.jsx)(`legend`,{children:`Small - pick a delivery speed`}),(0,i.jsx)(n,{...e}),(0,i.jsx)(n,{name:`DeliverySmall`,value:`express`,size:`small`,children:`Express`}),(0,i.jsx)(n,{name:`DeliverySmall`,value:`overnight`,size:`small`,children:`Overnight`})]})},l=[`DefaultMedium`,`Small`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "DeliveryMedium",
    "value": "standard",
    "children": "Standard"
  },
  render: (properties: any) => <fieldset><legend>(Default) Medium - pick a delivery speed</legend><DBRadio {...properties} /><DBRadio name="DeliveryMedium" value="express">
                    Express
                </DBRadio><DBRadio name="DeliveryMedium" value="overnight">
                    Overnight
                </DBRadio></fieldset>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "DeliverySmall",
    "value": "standard",
    "size": "small",
    "children": "Standard"
  },
  render: (properties: any) => <fieldset><legend>Small - pick a delivery speed</legend><DBRadio {...properties} /><DBRadio name="DeliverySmall" value="express" size="small">
                    Express
                </DBRadio><DBRadio name="DeliverySmall" value="overnight" size="small">
                    Overnight
                </DBRadio></fieldset>
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as DefaultMedium,c as Small,l as __namedExportsOrder,o as default};