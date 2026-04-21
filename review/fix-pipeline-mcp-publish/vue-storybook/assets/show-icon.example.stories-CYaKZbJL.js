import{n as e}from"./chunk-BneVvdWh.js";import{m as t,t as n}from"./src-CGBMmFt6.js";var r,i,a,o,s;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBNavigationItem/Show Icon`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:r()},argTypes:{disabled:{control:`boolean`},active:{control:`boolean`},showIcon:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},wrap:{control:`boolean`},text:{control:`text`},subNavigationExpanded:{control:`boolean`},backButtonId:{control:`text`},backButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},a={args:{icon:`x_placeholder`,showIcon:!1,default:`<a href="#">(Default) False</a>`},render:e=>({components:{DBNavigationItem:t},setup(){return{args:e}},template:`<ul    ><DBNavigationItem v-bind="args"   >${e.default}</DBNavigationItem></ul>`})},o={args:{icon:`x_placeholder`,showIcon:!0,default:`<a href="#">True</a>`},render:e=>({components:{DBNavigationItem:t},setup(){return{args:e}},template:`<ul    ><DBNavigationItem v-bind="args"   >${e.default}</DBNavigationItem></ul>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "showIcon": false,
    "default": \`<a href="#">(Default) False</a>\`
  },
  render: (args: any) => ({
    components: {
      DBNavigationItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<ul    ><DBNavigationItem v-bind="args"   >\${args.default}</DBNavigationItem></ul>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "showIcon": true,
    "default": \`<a href="#">True</a>\`
  },
  render: (args: any) => ({
    components: {
      DBNavigationItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<ul    ><DBNavigationItem v-bind="args"   >\${args.default}</DBNavigationItem></ul>\`
  })
}`,...o.parameters?.docs?.source}}},s=[`DefaultFalse`,`True`]}))();export{a as DefaultFalse,o as True,s as __namedExportsOrder,i as default};