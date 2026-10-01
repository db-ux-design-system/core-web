import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./radio-eNUxsqDU.js";var r,i,a,o,s;function c(){return(c=e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBRadio/Required`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},a={args:{name:`Reservation`,value:`window`,default:`Window seat`},render:e=>({components:{DBRadio:t},setup(){return{args:e}},template:`<fieldset    ><legend    >
                    (Default) false, optional - pick a seat reservation
                </legend><DBRadio v-bind="args"   >${e.default}</DBRadio><DBRadio name="Reservation" value="aisle"   >
                    Aisle seat
                </DBRadio><DBRadio name="Reservation" value="none"   >
                    No preference
                </DBRadio></fieldset>`})},o={args:{name:`TravelClass`,value:`first`,required:!0,default:`First class`},render:e=>({components:{DBRadio:t},setup(){return{args:e}},template:`<fieldset    ><legend    >True, required - pick a travel class *</legend><DBRadio v-bind="args"   >${e.default}</DBRadio><DBRadio name="TravelClass" value="second" :required="true"  >
                    Second class
                </DBRadio><DBRadio name="TravelClass" value="business" :required="true"  >
                    Business class
                </DBRadio></fieldset>`})},s=[`DefaultOptionalgroup`,`Requiredgroup`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Reservation",
    "value": "window",
    "default": \`Window seat\`
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
                    (Default) false, optional - pick a seat reservation
                </legend><DBRadio v-bind="args"   >\${args.default}</DBRadio><DBRadio name="Reservation" value="aisle"   >
                    Aisle seat
                </DBRadio><DBRadio name="Reservation" value="none"   >
                    No preference
                </DBRadio></fieldset>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "TravelClass",
    "value": "first",
    "required": true,
    "default": \`First class\`
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
    template: \`<fieldset    ><legend    >True, required - pick a travel class *</legend><DBRadio v-bind="args"   >\${args.default}</DBRadio><DBRadio name="TravelClass" value="second" :required="true"  >
                    Second class
                </DBRadio><DBRadio name="TravelClass" value="business" :required="true"  >
                    Business class
                </DBRadio></fieldset>\`
  })
}`,...o.parameters?.docs?.source}}}})))()}c();export{a as DefaultOptionalgroup,o as Requiredgroup,s as __namedExportsOrder,i as default};