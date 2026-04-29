import{n as e}from"./chunk-DnJy8xQt.js";import{D as t,d as n,t as r}from"./src-D2Aua8xJ.js";var i,a,o,s,c;e((()=>{r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/DBRadio/Show Label`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},o={args:{name:`Content`,showLabel:!0,default:`(Default) True`},render:e=>({components:{DBRadio:n,DBInfotext:t},setup(){return{args:e}},template:`<DBRadio v-bind="args"   >${e.default}</DBRadio>`})},s={args:{name:`Content`,showLabel:!1,default:`False`},render:e=>({components:{DBRadio:n,DBInfotext:t},setup(){return{args:e}},template:`<div    ><DBRadio v-bind="args"   >${e.default}</DBRadio><DBInfotext semantic="informational" size="small" icon="none"   >
                    False
                </DBInfotext></div>`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c=[`DefaultTrue`,`False`]}))();export{o as DefaultTrue,s as False,c as __namedExportsOrder,a as default};