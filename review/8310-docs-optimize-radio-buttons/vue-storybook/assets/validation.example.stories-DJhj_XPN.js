import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./radio-eNUxsqDU.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBRadio/Validation`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},a={args:{name:`LanguageNone`,value:`de`,default:`German`},render:e=>({components:{DBRadio:t},setup(){return{args:e}},template:`<fieldset    ><legend    >(Default) No validation - choose a language</legend><DBRadio v-bind="args"   >${e.default}</DBRadio><DBRadio name="LanguageNone" value="en"   >
                    English
                </DBRadio><DBRadio name="LanguageNone" value="fr"   >
                    French
                </DBRadio></fieldset>`})},o={args:{name:`LanguageInvalid`,value:`de`,validation:`invalid`,default:`German`},render:e=>({components:{DBRadio:t},setup(){return{args:e}},template:`<fieldset    ><legend    >Invalid - choose a language</legend><DBRadio v-bind="args"   >${e.default}</DBRadio><DBRadio name="LanguageInvalid" value="en" validation="invalid"   >
                    English
                </DBRadio><DBRadio name="LanguageInvalid" value="fr" validation="invalid"   >
                    French
                </DBRadio></fieldset>`})},s={args:{name:`LanguageValid`,value:`de`,validation:`valid`,default:`German`},render:e=>({components:{DBRadio:t},setup(){return{args:e}},template:`<fieldset    ><legend    >Valid - choose a language</legend><DBRadio v-bind="args"   >${e.default}</DBRadio><DBRadio name="LanguageValid" value="en" validation="valid" :checked="true"  >
                    English
                </DBRadio><DBRadio name="LanguageValid" value="fr" validation="valid"   >
                    French
                </DBRadio></fieldset>`})},c=[`DefaultNovalidation`,`Invalid`,`Valid`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "LanguageNone",
    "value": "de",
    "default": \`German\`
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
    template: \`<fieldset    ><legend    >(Default) No validation - choose a language</legend><DBRadio v-bind="args"   >\${args.default}</DBRadio><DBRadio name="LanguageNone" value="en"   >
                    English
                </DBRadio><DBRadio name="LanguageNone" value="fr"   >
                    French
                </DBRadio></fieldset>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "LanguageInvalid",
    "value": "de",
    "validation": "invalid",
    "default": \`German\`
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
    template: \`<fieldset    ><legend    >Invalid - choose a language</legend><DBRadio v-bind="args"   >\${args.default}</DBRadio><DBRadio name="LanguageInvalid" value="en" validation="invalid"   >
                    English
                </DBRadio><DBRadio name="LanguageInvalid" value="fr" validation="invalid"   >
                    French
                </DBRadio></fieldset>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "LanguageValid",
    "value": "de",
    "validation": "valid",
    "default": \`German\`
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
    template: \`<fieldset    ><legend    >Valid - choose a language</legend><DBRadio v-bind="args"   >\${args.default}</DBRadio><DBRadio name="LanguageValid" value="en" validation="valid" :checked="true"  >
                    English
                </DBRadio><DBRadio name="LanguageValid" value="fr" validation="valid"   >
                    French
                </DBRadio></fieldset>\`
  })
}`,...s.parameters?.docs?.source}}}})))()}l();export{a as DefaultNovalidation,o as Invalid,s as Valid,c as __namedExportsOrder,i as default};