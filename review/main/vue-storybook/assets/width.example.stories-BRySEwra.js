import{n as e}from"./chunk-DnJy8xQt.js";import{k as t,t as n}from"./src-C6Gn60iG.js";var r,i,a,o,s;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBButton/Width`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:r()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},a={args:{width:`auto`,onClick:r(),default:`(Default) Auto`},render:e=>({components:{DBButton:t},setup(){return{args:e}},template:`<DBButton v-bind="args"   >${e.default}</DBButton>`})},o={args:{width:`full`,onClick:r(),default:`Width`},render:e=>({components:{DBButton:t},setup(){return{args:e}},template:`<div  :style="{
  width: '500px'
}"  ><DBButton v-bind="args"   >${e.default}</DBButton></div>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "onClick": fn(),
    "default": \`(Default) Auto\`
  },
  render: (args: any) => ({
    components: {
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton v-bind="args"   >\${args.default}</DBButton>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "onClick": fn(),
    "default": \`Width\`
  },
  render: (args: any) => ({
    components: {
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '500px'
}"  ><DBButton v-bind="args"   >\${args.default}</DBButton></div>\`
  })
}`,...o.parameters?.docs?.source}}},s=[`Auto`,`Full`]}))();export{a as Auto,o as Full,s as __namedExportsOrder,i as default};