import{n as e}from"./chunk-BneVvdWh.js";import{D as t,t as n}from"./src-1GpFCKEe.js";var r,i,a,o,s;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBInfotext/Show Icon`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},showIcon:{control:`boolean`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},a={args:{showIcon:!0,default:`(Default) True`},render:e=>({components:{DBInfotext:t},setup(){return{args:e}},template:`<DBInfotext v-bind="args"   >${e.default}</DBInfotext>`})},o={args:{showIcon:!1,default:`False`},render:e=>({components:{DBInfotext:t},setup(){return{args:e}},template:`<DBInfotext v-bind="args"   >${e.default}</DBInfotext>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "showIcon": true,
    "default": \`(Default) True\`
  },
  render: (args: any) => ({
    components: {
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInfotext v-bind="args"   >\${args.default}</DBInfotext>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "showIcon": false,
    "default": \`False\`
  },
  render: (args: any) => ({
    components: {
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInfotext v-bind="args"   >\${args.default}</DBInfotext>\`
  })
}`,...o.parameters?.docs?.source}}},s=[`DefaultTrue`,`False`]}))();export{a as DefaultTrue,o as False,s as __namedExportsOrder,i as default};