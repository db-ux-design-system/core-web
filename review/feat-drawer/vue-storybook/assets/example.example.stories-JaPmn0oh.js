import{i as e}from"./preload-helper-Ao92fH7X.js";import{X as t,t as n}from"./src-Bg62zmIh.js";var r,i,a,o,s;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBDrawerHeader/Example`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{text:{control:`text`},closeButtonText:{control:`text`},closeButtonId:{control:`text`},id:{control:`text`}}},a={args:{default:`(Default) With children`},render:e=>({components:{DBDrawerHeader:t},setup(){return{args:e}},template:`<div    ><DBDrawerHeader v-bind="args"   >${e.default}</DBDrawerHeader></div>`})},o={args:{text:`With text prop`,default:``},render:e=>({components:{DBDrawerHeader:t},setup(){return{args:e}},template:`<div    ><DBDrawerHeader v-bind="args"   >${e.default}</DBDrawerHeader></div>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`(Default) With children\`
  },
  render: (args: any) => ({
    components: {
      DBDrawerHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBDrawerHeader v-bind="args"   >\${args.default}</DBDrawerHeader></div>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "text": "With text prop",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBDrawerHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBDrawerHeader v-bind="args"   >\${args.default}</DBDrawerHeader></div>\`
  })
}`,...o.parameters?.docs?.source}}},s=[`DefaultWithchildren`,`Withtextprop`]}))();export{a as DefaultWithchildren,o as Withtextprop,s as __namedExportsOrder,i as default};