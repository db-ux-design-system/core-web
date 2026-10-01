import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-B7A4EKRy.js";import{n as r,t as i}from"./radio-eNUxsqDU.js";var a,o,s,c,l;function u(){return(u=e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBRadio/Show Label`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{name:`RatingVisible`,value:`good`,showLabel:!0,default:`Good`},render:e=>({components:{DBRadio:r,DBInfotext:n},setup(){return{args:e}},template:`<fieldset    ><legend    >(Default) True - rate your experience</legend><DBRadio v-bind="args"   >${e.default}</DBRadio><DBRadio name="RatingVisible" value="neutral" :showLabel="true"  >
                    Neutral
                </DBRadio><DBRadio name="RatingVisible" value="bad" :showLabel="true"  >
                    Bad
                </DBRadio></fieldset>`})},c={args:{name:`RatingHidden`,value:`good`,showLabel:!1,default:`Good`},render:e=>({components:{DBRadio:r,DBInfotext:n},setup(){return{args:e}},template:`<fieldset    ><legend    >False - rate your experience</legend><DBRadio v-bind="args"   >${e.default}</DBRadio><DBRadio name="RatingHidden" value="neutral" :showLabel="false"  >
                    Neutral
                </DBRadio><DBRadio name="RatingHidden" value="bad" :showLabel="false"  >
                    Bad
                </DBRadio><DBInfotext semantic="informational" size="small" icon="none"   >
                    Labels are visually hidden but still read by screen readers.
                </DBInfotext></fieldset>`})},l=[`DefaultTrue`,`False`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "RatingVisible",
    "value": "good",
    "showLabel": true,
    "default": \`Good\`
  },
  render: (args: any) => ({
    components: {
      DBRadio,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<fieldset    ><legend    >(Default) True - rate your experience</legend><DBRadio v-bind="args"   >\${args.default}</DBRadio><DBRadio name="RatingVisible" value="neutral" :showLabel="true"  >
                    Neutral
                </DBRadio><DBRadio name="RatingVisible" value="bad" :showLabel="true"  >
                    Bad
                </DBRadio></fieldset>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "RatingHidden",
    "value": "good",
    "showLabel": false,
    "default": \`Good\`
  },
  render: (args: any) => ({
    components: {
      DBRadio,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<fieldset    ><legend    >False - rate your experience</legend><DBRadio v-bind="args"   >\${args.default}</DBRadio><DBRadio name="RatingHidden" value="neutral" :showLabel="false"  >
                    Neutral
                </DBRadio><DBRadio name="RatingHidden" value="bad" :showLabel="false"  >
                    Bad
                </DBRadio><DBInfotext semantic="informational" size="small" icon="none"   >
                    Labels are visually hidden but still read by screen readers.
                </DBInfotext></fieldset>\`
  })
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as DefaultTrue,c as False,l as __namedExportsOrder,o as default};