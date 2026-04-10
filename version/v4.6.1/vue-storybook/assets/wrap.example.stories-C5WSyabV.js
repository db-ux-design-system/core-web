import{n as e}from"./chunk-BneVvdWh.js";import{m as t,t as n}from"./src-ColJ0xlm.js";var r,i,a,o,s;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBNavigationItem/Wrap`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:r()},argTypes:{disabled:{control:`boolean`},active:{control:`boolean`},showIcon:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},wrap:{control:`boolean`},text:{control:`text`},subNavigationExpanded:{control:`boolean`},backButtonId:{control:`text`},backButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},a={args:{default:`<a href="#">No Wrap (Default)</a>`},render:e=>({components:{DBNavigationItem:t},setup(){return{args:e}},template:`<ul    ><DBNavigationItem v-bind="args"   >${e.default}</DBNavigationItem></ul>`})},o={args:{icon:`x_placeholder`,showIcon:!0,wrap:!0,default:`This is a very long text that is broken into multiple lines.<template
  v-slot:sub-navigation
  ><DBNavigationItem>
    Sub-Navi-Item 1
    <template v-slot:sub-navigation
      ><DBNavigationItem><a href="#">Sub-Sub-Navi-Item 1</a></DBNavigationItem>
      <DBNavigationItem
        ><a href="#">Sub-Sub-Navi-Item 2</a></DBNavigationItem
      ></template
    ></DBNavigationItem
  >
  <DBNavigationItem><a href="#">Sub-Navi-Item 2</a></DBNavigationItem></template
>`},render:e=>({components:{DBNavigationItem:t},setup(){return{args:e}},template:`<ul  :style="{
  width: '200px'
}"  ><DBNavigationItem v-bind="args"   >${e.default}</DBNavigationItem></ul>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<a href="#">No Wrap (Default)</a>\`
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
    "wrap": true,
    "default": \`This is a very long text that is broken into multiple lines.<template
  v-slot:sub-navigation
  ><DBNavigationItem>
    Sub-Navi-Item 1
    <template v-slot:sub-navigation
      ><DBNavigationItem><a href="#">Sub-Sub-Navi-Item 1</a></DBNavigationItem>
      <DBNavigationItem
        ><a href="#">Sub-Sub-Navi-Item 2</a></DBNavigationItem
      ></template
    ></DBNavigationItem
  >
  <DBNavigationItem><a href="#">Sub-Navi-Item 2</a></DBNavigationItem></template
>\`
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
    template: \`<ul  :style="{
  width: '200px'
}"  ><DBNavigationItem v-bind="args"   >\${args.default}</DBNavigationItem></ul>\`
  })
}`,...o.parameters?.docs?.source}}},s=[`DefaultFalse`,`True`]}))();export{a as DefaultFalse,o as True,s as __namedExportsOrder,i as default};