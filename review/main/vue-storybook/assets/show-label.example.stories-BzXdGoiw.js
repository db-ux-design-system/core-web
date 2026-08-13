import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-DBNPjSk_.js";import{n as r,t as i}from"./checkbox-oIj4dVaZ.js";var a,o,s,c,l;function u(){return(u=e((()=>{t(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCheckbox/Show Label`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},indeterminate:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},message:{control:`text`},showMessage:{control:`boolean`},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{name:`Label`,showLabel:!0,default:`(Default) True`},render:e=>({components:{DBCheckbox:i,DBInfotext:n},setup(){return{args:e}},template:`<DBCheckbox v-bind="args"   >${e.default}</DBCheckbox>`})},c={args:{name:`Label`,showLabel:!1,default:`False`},render:e=>({components:{DBCheckbox:i,DBInfotext:n},setup(){return{args:e}},template:`<div    ><DBCheckbox v-bind="args"   >${e.default}</DBCheckbox><DBInfotext semantic="informational" size="small" icon="none"   >
                    False
                </DBInfotext></div>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Label",
    "showLabel": true,
    "default": \`(Default) True\`
  },
  render: (args: any) => ({
    components: {
      DBCheckbox,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCheckbox v-bind="args"   >\${args.default}</DBCheckbox>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Label",
    "showLabel": false,
    "default": \`False\`
  },
  render: (args: any) => ({
    components: {
      DBCheckbox,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBCheckbox v-bind="args"   >\${args.default}</DBCheckbox><DBInfotext semantic="informational" size="small" icon="none"   >
                    False
                </DBInfotext></div>\`
  })
}`,...c.parameters?.docs?.source}}},l=[`DefaultTrue`,`False`]})))()}u();export{s as DefaultTrue,c as False,l as __namedExportsOrder,o as default};