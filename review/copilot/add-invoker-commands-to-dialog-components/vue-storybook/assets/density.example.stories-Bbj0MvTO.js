import{n as e}from"./chunk-DnJy8xQt.js";import{k as t,t as n,y as r}from"./src-9wi74StN.js";var i,a,o,s,c,l;e((()=>{n(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/DBDrawer/Density`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:i()},argTypes:{open:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},rounded:{control:`boolean`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`left`,`right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},o={args:{id:`drawer-density-functional`,default:`Functional`},render:e=>({components:{DBDrawer:r,DBButton:t},setup(){return{args:e}},template:`<div data-density="functional"   >Open DBDrawer via command and commandfor<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},s={args:{id:`drawer-density-regular`,default:`(Default) Regular`},render:e=>({components:{DBDrawer:r,DBButton:t},setup(){return{args:e}},template:`<div data-density="regular"   >Open DBDrawer via command and commandfor<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},c={args:{id:`drawer-density-expressive`,default:`Expressive`},render:e=>({components:{DBDrawer:r,DBButton:t},setup(){return{args:e}},template:`<div data-density="expressive"   >Open DBDrawer via command and commandfor<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-density-functional",
    "default": \`Functional\`
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
    template: \`<div data-density="functional"   >Open DBDrawer via command and commandfor<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-density-regular",
    "default": \`(Default) Regular\`
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
    template: \`<div data-density="regular"   >Open DBDrawer via command and commandfor<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-density-expressive",
    "default": \`Expressive\`
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
    template: \`<div data-density="expressive"   >Open DBDrawer via command and commandfor<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...c.parameters?.docs?.source}}},l=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{s as DefaultRegular,c as Expressive,o as Functional,l as __namedExportsOrder,a as default};