import{i as e}from"./preload-helper-CMit0Y9c.js";import{d as t,l as n,t as r}from"./src-Dr2fY7SO.js";var i,a,o,s,c;e((()=>{r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/DBTabItem/Content Alignment Full Width`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},noText:{control:`boolean`},checked:{control:`boolean`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},o={args:{label:`Left`,default:``},render:e=>({components:{DBTabItem:t,DBTabList:n},setup(){return{args:e}},template:`<DBTabList  :style="{
  blockSize: '100%'
}"  ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},s={args:{label:`Centered`,default:``},render:e=>({components:{DBTabItem:t,DBTabList:n},setup(){return{args:e}},template:`<DBTabList  :style="{
  blockSize: '100%'
}"  ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Left",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBTabItem,
      DBTabList
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTabList  :style="{
  blockSize: '100%'
}"  ><DBTabItem v-bind="args"   >\${args.default}</DBTabItem></DBTabList>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Centered",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBTabItem,
      DBTabList
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTabList  :style="{
  blockSize: '100%'
}"  ><DBTabItem v-bind="args"   >\${args.default}</DBTabItem></DBTabList>\`
  })
}`,...s.parameters?.docs?.source}}},c=[`Left`,`Centered`]}))();export{s as Centered,o as Left,c as __namedExportsOrder,a as default};