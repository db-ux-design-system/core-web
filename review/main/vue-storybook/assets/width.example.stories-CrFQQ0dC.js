import{n as e}from"./chunk-DnJy8xQt.js";import{m as t,t as n}from"./src-C6Gn60iG.js";var r,i,a,o,s;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBNavigationItem/Width`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:r()},argTypes:{disabled:{control:`boolean`},active:{control:`boolean`},showIcon:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},wrap:{control:`boolean`},text:{control:`text`},subNavigationExpanded:{control:`boolean`},backButtonId:{control:`text`},backButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},a={args:{default:`<a href="#">(Default) Auto</a>`},render:e=>({components:{DBNavigationItem:t},setup(){return{args:e}},template:`<ul  :style="{
  width: '400px'
}"  ><DBNavigationItem v-bind="args"   >${e.default}</DBNavigationItem></ul>`})},o={args:{width:`full`,default:`<a href="#">Full</a>`},render:e=>({components:{DBNavigationItem:t},setup(){return{args:e}},template:`<ul  :style="{
  width: '400px'
}"  ><DBNavigationItem v-bind="args"   >${e.default}</DBNavigationItem></ul>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<a href="#">(Default) Auto</a>\`
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
  width: '400px'
}"  ><DBNavigationItem v-bind="args"   >\${args.default}</DBNavigationItem></ul>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "default": \`<a href="#">Full</a>\`
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
  width: '400px'
}"  ><DBNavigationItem v-bind="args"   >\${args.default}</DBNavigationItem></ul>\`
  })
}`,...o.parameters?.docs?.source}}},s=[`DefaultAuto`,`Full`]}))();export{a as DefaultAuto,o as Full,s as __namedExportsOrder,i as default};