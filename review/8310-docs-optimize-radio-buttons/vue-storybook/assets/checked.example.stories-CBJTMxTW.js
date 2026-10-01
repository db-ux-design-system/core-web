import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./radio-eNUxsqDU.js";var r,i,a,o,s;function c(){return(c=e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBRadio/Checked`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},a={args:{name:`Newsletter`,value:`daily`,default:`Daily digest`},render:e=>({components:{DBRadio:t},setup(){return{args:e}},template:`<fieldset    ><legend    >
                    (Default) false, nothing checked - choose a newsletter
                </legend><DBRadio v-bind="args"   >${e.default}</DBRadio><DBRadio name="Newsletter" value="weekly"   >
                    Weekly summary
                </DBRadio><DBRadio name="Newsletter" value="none"   >
                    No newsletter
                </DBRadio></fieldset>`})},o={args:{name:`NewsletterChecked`,value:`daily`,default:`Daily digest`},render:e=>({components:{DBRadio:t},setup(){return{args:e}},template:`<fieldset    ><legend    >True, one option checked - choose a newsletter</legend><DBRadio v-bind="args"   >${e.default}</DBRadio><DBRadio name="NewsletterChecked" value="weekly" :checked="true"  >
                    Weekly summary
                </DBRadio><DBRadio name="NewsletterChecked" value="none"   >
                    No newsletter
                </DBRadio></fieldset>`})},s=[`DefaultNothingchecked`,`Oneoptionchecked`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Newsletter",
    "value": "daily",
    "default": \`Daily digest\`
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
                    (Default) false, nothing checked - choose a newsletter
                </legend><DBRadio v-bind="args"   >\${args.default}</DBRadio><DBRadio name="Newsletter" value="weekly"   >
                    Weekly summary
                </DBRadio><DBRadio name="Newsletter" value="none"   >
                    No newsletter
                </DBRadio></fieldset>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "NewsletterChecked",
    "value": "daily",
    "default": \`Daily digest\`
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
    template: \`<fieldset    ><legend    >True, one option checked - choose a newsletter</legend><DBRadio v-bind="args"   >\${args.default}</DBRadio><DBRadio name="NewsletterChecked" value="weekly" :checked="true"  >
                    Weekly summary
                </DBRadio><DBRadio name="NewsletterChecked" value="none"   >
                    No newsletter
                </DBRadio></fieldset>\`
  })
}`,...o.parameters?.docs?.source}}}})))()}c();export{a as DefaultNothingchecked,o as Oneoptionchecked,s as __namedExportsOrder,i as default};