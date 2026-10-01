import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./radio-eNUxsqDU.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBRadio/Density`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},a={args:{name:`ContactFunctional`,value:`email`,default:`Email`},render:e=>({components:{DBRadio:t},setup(){return{args:e}},template:`<fieldset data-density="functional"   ><legend    >Functional - choose a contact method</legend><DBRadio v-bind="args"   >${e.default}</DBRadio><DBRadio name="ContactFunctional" value="phone"   >
                    Phone
                </DBRadio><DBRadio name="ContactFunctional" value="post"   >
                    Post
                </DBRadio></fieldset>`})},o={args:{name:`ContactRegular`,value:`email`,default:`Email`},render:e=>({components:{DBRadio:t},setup(){return{args:e}},template:`<fieldset data-density="regular"   ><legend    >(Default) Regular - choose a contact method</legend><DBRadio v-bind="args"   >${e.default}</DBRadio><DBRadio name="ContactRegular" value="phone"   >
                    Phone
                </DBRadio><DBRadio name="ContactRegular" value="post"   >
                    Post
                </DBRadio></fieldset>`})},s={args:{name:`ContactExpressive`,value:`email`,default:`Email`},render:e=>({components:{DBRadio:t},setup(){return{args:e}},template:`<fieldset data-density="expressive"   ><legend    >Expressive - choose a contact method</legend><DBRadio v-bind="args"   >${e.default}</DBRadio><DBRadio name="ContactExpressive" value="phone"   >
                    Phone
                </DBRadio><DBRadio name="ContactExpressive" value="post"   >
                    Post
                </DBRadio></fieldset>`})},c=[`Functional`,`DefaultRegular`,`Expressive`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "ContactFunctional",
    "value": "email",
    "default": \`Email\`
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
    template: \`<fieldset data-density="functional"   ><legend    >Functional - choose a contact method</legend><DBRadio v-bind="args"   >\${args.default}</DBRadio><DBRadio name="ContactFunctional" value="phone"   >
                    Phone
                </DBRadio><DBRadio name="ContactFunctional" value="post"   >
                    Post
                </DBRadio></fieldset>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "ContactRegular",
    "value": "email",
    "default": \`Email\`
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
    template: \`<fieldset data-density="regular"   ><legend    >(Default) Regular - choose a contact method</legend><DBRadio v-bind="args"   >\${args.default}</DBRadio><DBRadio name="ContactRegular" value="phone"   >
                    Phone
                </DBRadio><DBRadio name="ContactRegular" value="post"   >
                    Post
                </DBRadio></fieldset>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "ContactExpressive",
    "value": "email",
    "default": \`Email\`
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
    template: \`<fieldset data-density="expressive"   ><legend    >Expressive - choose a contact method</legend><DBRadio v-bind="args"   >\${args.default}</DBRadio><DBRadio name="ContactExpressive" value="phone"   >
                    Phone
                </DBRadio><DBRadio name="ContactExpressive" value="post"   >
                    Post
                </DBRadio></fieldset>\`
  })
}`,...s.parameters?.docs?.source}}}})))()}l();export{o as DefaultRegular,s as Expressive,a as Functional,c as __namedExportsOrder,i as default};