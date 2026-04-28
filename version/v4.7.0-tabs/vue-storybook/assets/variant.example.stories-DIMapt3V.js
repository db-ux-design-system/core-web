import{n as e}from"./chunk-DnJy8xQt.js";import{g as t,t as n}from"./src-CttduW8a.js";var r,i,a,o,s;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBLink/Variant`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:r()},argTypes:{href:{control:`text`},variant:{control:`select`,options:[`adaptive`,`brand`,`inline`]},disabled:{control:`boolean`},size:{control:`select`,options:[`medium`,`small`]},content:{control:`select`,options:[`external`,`internal`]},showIcon:{control:`boolean`},wrap:{control:`boolean`},text:{control:`text`},target:{control:`select`,options:[`_self`,`_blank`,`_parent`,`_top`]},rel:{control:`text`},hreflang:{control:`text`},referrerPolicy:{control:`select`,options:[`no-referrer`,`no-referrer-when-downgrade`,`origin`,`origin-when-cross-origin`,`same-origin`,`strict-origin`,`strict-origin-when-cross-origin`,`unsafe-url`]},role:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},a={args:{href:`#`,text:`(Default) Adaptive`,default:``},render:e=>({components:{DBLink:t},setup(){return{args:e}},template:`<DBLink v-bind="args"   >${e.default}</DBLink>`})},o={args:{href:`#`,variant:`brand`,text:`Brand`,default:``},render:e=>({components:{DBLink:t},setup(){return{args:e}},template:`<DBLink v-bind="args"   >${e.default}</DBLink>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "text": "(Default) Adaptive",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBLink v-bind="args"   >\${args.default}</DBLink>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "variant": "brand",
    "text": "Brand",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBLink v-bind="args"   >\${args.default}</DBLink>\`
  })
}`,...o.parameters?.docs?.source}}},s=[`DefaultAdaptive`,`Brand`]}))();export{o as Brand,a as DefaultAdaptive,s as __namedExportsOrder,i as default};