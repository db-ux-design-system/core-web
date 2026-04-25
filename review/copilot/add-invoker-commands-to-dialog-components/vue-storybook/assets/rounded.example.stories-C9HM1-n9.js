import{n as e}from"./chunk-DnJy8xQt.js";import{k as t,t as n,y as r}from"./src-CFH3E_Mb.js";var i,a,o,s,c;e((()=>{n(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/DBDrawer/Rounded`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:i()},argTypes:{open:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},rounded:{control:`boolean`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`left`,`right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},o={args:{id:`drawer-rounded-false`,rounded:!1,default:`(Default) False`},render:e=>({components:{DBDrawer:r,DBButton:t},setup(){return{args:e}},template:`<div    >Open DBDrawer via command and commandfor<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},s={args:{id:`drawer-rounded-true`,rounded:!0,default:`True`},render:e=>({components:{DBDrawer:r,DBButton:t},setup(){return{args:e}},template:`<div    >Open DBDrawer via command and commandfor<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-rounded-false",
    "rounded": false,
    "default": \`(Default) False\`
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
    template: \`<div    >Open DBDrawer via command and commandfor<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-rounded-true",
    "rounded": true,
    "default": \`True\`
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
    template: \`<div    >Open DBDrawer via command and commandfor<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...s.parameters?.docs?.source}}},c=[`DefaultFalse`,`True`]}))();export{o as DefaultFalse,s as True,c as __namedExportsOrder,a as default};