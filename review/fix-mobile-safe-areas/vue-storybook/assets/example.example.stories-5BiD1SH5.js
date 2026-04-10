import{n as e}from"./chunk-BneVvdWh.js";import{k as t,t as n,y as r}from"./src-CHVqXqQZ.js";var i,a,o,s,c;e((()=>{n(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/DBDrawer/Example`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:i()},argTypes:{open:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},rounded:{control:`boolean`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`left`,`right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},o={args:{variant:`modal`,open:!1,onClose:i(),default:`(Default) As modal`},render:e=>({components:{DBDrawer:r,DBButton:t},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},s={args:{variant:`inside`,open:!1,onClose:i(),default:`Inside`},render:e=>({components:{DBDrawer:r,DBButton:t},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "modal",
    "open": false,
    "onClose": fn(),
    "default": \`(Default) As modal\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "inside",
    "open": false,
    "onClose": fn(),
    "default": \`Inside\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...s.parameters?.docs?.source}}},c=[`DefaultAsmodal`,`Inside`]}))();export{o as DefaultAsmodal,s as Inside,c as __namedExportsOrder,a as default};