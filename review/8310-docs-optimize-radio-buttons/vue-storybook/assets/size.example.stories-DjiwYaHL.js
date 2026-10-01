import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./radio-eNUxsqDU.js";var r,i,a,o,s;function c(){return(c=e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBRadio/Size`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},a={args:{name:`DeliveryMedium`,value:`standard`,default:`Standard`},render:e=>({components:{DBRadio:t},setup(){return{args:e}},template:`<fieldset    ><legend    >(Default) Medium - pick a delivery speed</legend><DBRadio v-bind="args"   >${e.default}</DBRadio><DBRadio name="DeliveryMedium" value="express"   >
                    Express
                </DBRadio><DBRadio name="DeliveryMedium" value="overnight"   >
                    Overnight
                </DBRadio></fieldset>`})},o={args:{name:`DeliverySmall`,value:`standard`,size:`small`,default:`Standard`},render:e=>({components:{DBRadio:t},setup(){return{args:e}},template:`<fieldset    ><legend    >Small - pick a delivery speed</legend><DBRadio v-bind="args"   >${e.default}</DBRadio><DBRadio name="DeliverySmall" value="express" size="small"   >
                    Express
                </DBRadio><DBRadio name="DeliverySmall" value="overnight" size="small"   >
                    Overnight
                </DBRadio></fieldset>`})},s=[`DefaultMedium`,`Small`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "DeliveryMedium",
    "value": "standard",
    "default": \`Standard\`
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
    template: \`<fieldset    ><legend    >(Default) Medium - pick a delivery speed</legend><DBRadio v-bind="args"   >\${args.default}</DBRadio><DBRadio name="DeliveryMedium" value="express"   >
                    Express
                </DBRadio><DBRadio name="DeliveryMedium" value="overnight"   >
                    Overnight
                </DBRadio></fieldset>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "DeliverySmall",
    "value": "standard",
    "size": "small",
    "default": \`Standard\`
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
    template: \`<fieldset    ><legend    >Small - pick a delivery speed</legend><DBRadio v-bind="args"   >\${args.default}</DBRadio><DBRadio name="DeliverySmall" value="express" size="small"   >
                    Express
                </DBRadio><DBRadio name="DeliverySmall" value="overnight" size="small"   >
                    Overnight
                </DBRadio></fieldset>\`
  })
}`,...o.parameters?.docs?.source}}}})))()}c();export{a as DefaultMedium,o as Small,s as __namedExportsOrder,i as default};