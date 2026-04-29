import{n as e}from"./chunk-DnJy8xQt.js";import{D as t,E as n,t as r}from"./src-D2Aua8xJ.js";var i,a,o,s,c;e((()=>{r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/DBCheckbox/Show Label`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},indeterminate:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},message:{control:`text`},showMessage:{control:`boolean`},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},o={args:{name:`Label`,showLabel:!0,default:`(Default) True`},render:e=>({components:{DBCheckbox:n,DBInfotext:t},setup(){return{args:e}},template:`<DBCheckbox v-bind="args"   >${e.default}</DBCheckbox>`})},s={args:{name:`Label`,showLabel:!1,default:`False`},render:e=>({components:{DBCheckbox:n,DBInfotext:t},setup(){return{args:e}},template:`<div    ><DBCheckbox v-bind="args"   >${e.default}</DBCheckbox><DBInfotext semantic="informational" size="small" icon="none"   >
                    False
                </DBInfotext></div>`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c=[`DefaultTrue`,`False`]}))();export{o as DefaultTrue,s as False,c as __namedExportsOrder,a as default};