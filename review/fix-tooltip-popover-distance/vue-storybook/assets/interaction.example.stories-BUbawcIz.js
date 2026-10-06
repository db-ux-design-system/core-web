import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-BUGimtYb.js";import{n as r,t as i}from"./drawer-header-CDV4Q4pa.js";import{n as a,t as o}from"./drawer-By3AX39L.js";var s,c,l,u;function d(){return(d=e((()=>{t(),r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDrawer/Interaction`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s(),onCancel:s()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},l={args:{open:!1,onClose:s(),default:`<span data-testid="drawer-content">Test</span
><template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"> Title </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:o,DBButton:n,DBDrawerHeader:i},setup(){return{args:e}},template:`<DBDrawer v-bind="args"   >${e.default}</DBDrawer>`})},u=[`Interaction`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "default": \`<span data-testid="drawer-content">Test</span
><template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"> Title </DBDrawerHeader></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBButton,
      DBDrawerHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBDrawer v-bind="args"   >\${args.default}</DBDrawer>\`
  })
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as Interaction,u as __namedExportsOrder,c as default};