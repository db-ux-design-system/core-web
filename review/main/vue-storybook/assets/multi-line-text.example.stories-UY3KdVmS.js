import{n as e}from"./chunk-DnJy8xQt.js";import{k as t,t as n}from"./src-BEwlPLIG.js";var r,i,a,o,s,c;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBButton/Multi Line Text`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:r()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},a={args:{width:`full`,onClick:r(),default:`Multi-line Text With Automatic Line Breaks`},render:e=>({components:{DBButton:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBButton v-bind="args"   >${e.default}</DBButton></div>`})},o={args:{width:`full`,icon:`x_placeholder`,onClick:r(),default:`Multi-line Text With Automatic Line Breaks and Icon`},render:e=>({components:{DBButton:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBButton v-bind="args"   >${e.default}</DBButton></div>`})},s={args:{size:`small`,onClick:r(),default:`Button Small Multi-line Text With Automatic Line Breaks`},render:e=>({components:{DBButton:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBButton v-bind="args"   >${e.default}</DBButton></div>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "onClick": fn(),
    "default": \`Multi-line Text With Automatic Line Breaks\`
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
  width: '300px'
}"  ><DBButton v-bind="args"   >\${args.default}</DBButton></div>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "icon": "x_placeholder",
    "onClick": fn(),
    "default": \`Multi-line Text With Automatic Line Breaks and Icon\`
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
  width: '300px'
}"  ><DBButton v-bind="args"   >\${args.default}</DBButton></div>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "onClick": fn(),
    "default": \`Button Small Multi-line Text With Automatic Line Breaks\`
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
  width: '300px'
}"  ><DBButton v-bind="args"   >\${args.default}</DBButton></div>\`
  })
}`,...s.parameters?.docs?.source}}},c=[`AutomaticLineBreaks`,`AutomaticLineBreaksandIcon`,`SmallAutomaticLineBreaks`]}))();export{a as AutomaticLineBreaks,o as AutomaticLineBreaksandIcon,s as SmallAutomaticLineBreaks,c as __namedExportsOrder,i as default};