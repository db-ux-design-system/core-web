import{n as e}from"./chunk-DnJy8xQt.js";import{S as t,t as n}from"./src-IA1wsRkd.js";var r,i,a,o,s;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBTag/Overflow`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onRemove:r()},argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},behavior:{control:`select`,options:[`static`,`removable`]},showIcon:{control:`boolean`},noText:{control:`boolean`},content:{control:`text`},showCheckState:{control:`boolean`},overflow:{control:`boolean`},removeButton:{control:`text`},text:{control:`text`},value:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onRemove:{action:`onRemove`}}},a={args:{default:`(Default) False`},render:e=>({components:{DBTag:t},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},o={args:{overflow:!0,default:`<span>True - lorem ipsum dolor</span>`},render:e=>({components:{DBTag:t},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`(Default) False\`
  },
  render: (args: any) => ({
    components: {
      DBTag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTag v-bind="args"   >\${args.default}</DBTag>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "overflow": true,
    "default": \`<span>True - lorem ipsum dolor</span>\`
  },
  render: (args: any) => ({
    components: {
      DBTag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTag v-bind="args"   >\${args.default}</DBTag>\`
  })
}`,...o.parameters?.docs?.source}}},s=[`DefaultFalse`,`True`]}))();export{a as DefaultFalse,o as True,s as __namedExportsOrder,i as default};