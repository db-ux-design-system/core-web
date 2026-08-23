import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-HPwzQVEM.js";import{n as r,t as i}from"./radio-Buvhwezm.js";var a,o,s,c,l;function u(){return(u=e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBRadio/Show Label`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{name:`Content`,showLabel:!0,default:`(Default) True`},render:e=>({components:{DBRadio:r,DBInfotext:n},setup(){return{args:e}},template:`<DBRadio v-bind="args"   >${e.default}</DBRadio>`})},c={args:{name:`Content`,showLabel:!1,default:`False`},render:e=>({components:{DBRadio:r,DBInfotext:n},setup(){return{args:e}},template:`<div    ><DBRadio v-bind="args"   >${e.default}</DBRadio><DBInfotext semantic="informational" size="small" icon="none"   >
                    False
                </DBInfotext></div>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Content",
    "showLabel": true,
    "default": \`(Default) True\`
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
    template: \`<DBRadio v-bind="args"   >\${args.default}</DBRadio>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Content",
    "showLabel": false,
    "default": \`False\`
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
    template: \`<div    ><DBRadio v-bind="args"   >\${args.default}</DBRadio><DBInfotext semantic="informational" size="small" icon="none"   >
                    False
                </DBInfotext></div>\`
  })
}`,...c.parameters?.docs?.source}}},l=[`DefaultTrue`,`False`]})))()}u();export{s as DefaultTrue,c as False,l as __namedExportsOrder,o as default};