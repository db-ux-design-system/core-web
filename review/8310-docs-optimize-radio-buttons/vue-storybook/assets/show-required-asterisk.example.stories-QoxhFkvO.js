import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./radio-eNUxsqDU.js";var r,i,a,o,s;function c(){return(c=e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBRadio/Show Required Asterisk`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},a={args:{name:`TicketAsterisk`,value:`single`,required:!0,showRequiredAsterisk:!0,default:`Single`},render:e=>({components:{DBRadio:t},setup(){return{args:e}},template:`<fieldset    ><legend    >(Default) True - pick a ticket type *</legend><DBRadio v-bind="args"   >${e.default}</DBRadio><DBRadio name="TicketAsterisk" value="return" :required="true" :showRequiredAsterisk="true"  >
                    Return
                </DBRadio><DBRadio name="TicketAsterisk" value="day" :required="true" :showRequiredAsterisk="true"  >
                    Day pass
                </DBRadio></fieldset>`})},o={args:{name:`TicketNoAsterisk`,value:`single`,required:!0,showRequiredAsterisk:!1,default:`Single`},render:e=>({components:{DBRadio:t},setup(){return{args:e}},template:`<fieldset    ><legend    >False - pick a ticket type *</legend><DBRadio v-bind="args"   >${e.default}</DBRadio><DBRadio name="TicketNoAsterisk" value="return" :required="true" :showRequiredAsterisk="false"  >
                    Return
                </DBRadio><DBRadio name="TicketNoAsterisk" value="day" :required="true" :showRequiredAsterisk="false"  >
                    Day pass
                </DBRadio></fieldset>`})},s=[`DefaultTrue`,`False`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "TicketAsterisk",
    "value": "single",
    "required": true,
    "showRequiredAsterisk": true,
    "default": \`Single\`
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
    template: \`<fieldset    ><legend    >(Default) True - pick a ticket type *</legend><DBRadio v-bind="args"   >\${args.default}</DBRadio><DBRadio name="TicketAsterisk" value="return" :required="true" :showRequiredAsterisk="true"  >
                    Return
                </DBRadio><DBRadio name="TicketAsterisk" value="day" :required="true" :showRequiredAsterisk="true"  >
                    Day pass
                </DBRadio></fieldset>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "TicketNoAsterisk",
    "value": "single",
    "required": true,
    "showRequiredAsterisk": false,
    "default": \`Single\`
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
    template: \`<fieldset    ><legend    >False - pick a ticket type *</legend><DBRadio v-bind="args"   >\${args.default}</DBRadio><DBRadio name="TicketNoAsterisk" value="return" :required="true" :showRequiredAsterisk="false"  >
                    Return
                </DBRadio><DBRadio name="TicketNoAsterisk" value="day" :required="true" :showRequiredAsterisk="false"  >
                    Day pass
                </DBRadio></fieldset>\`
  })
}`,...o.parameters?.docs?.source}}}})))()}c();export{a as DefaultTrue,o as False,s as __namedExportsOrder,i as default};