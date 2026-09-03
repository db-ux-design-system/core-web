import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./drawer-header-D_vXi8cn.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBDrawerHeader/Example`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{text:{control:`text`},closeButtonText:{control:`text`},closeButtonId:{control:`text`},id:{control:`text`}}},a={args:{default:`(Default) With children`},render:e=>({components:{DBDrawerHeader:n},setup(){return{args:e}},template:`<div    ><DBDrawerHeader v-bind="args"   >${e.default}</DBDrawerHeader></div>`})},o={args:{text:`With text prop`,default:``},render:e=>({components:{DBDrawerHeader:n},setup(){return{args:e}},template:`<div    ><DBDrawerHeader v-bind="args"   >${e.default}</DBDrawerHeader></div>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s=[`DefaultWithchildren`,`Withtextprop`]})))()}c();export{a as DefaultWithchildren,o as Withtextprop,s as __namedExportsOrder,i as default};