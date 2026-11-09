import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-Bd0wAvmA.js";import{n as i,t as a}from"./drawer-header-wS--5-F6.js";import{n as o,t as s}from"./drawer-Be5HINdR.js";var c=t({Interaction:()=>d,__namedExportsOrder:()=>f,default:()=>u}),l,u,d,f;function p(){return(p=e((()=>{n(),i(),o(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDrawer/Interaction`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l(),onCancel:l()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},d={args:{open:!1,rounded:!0,onClose:l(),default:`<span data-testid="drawer-content">Test</span
><template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"> Title </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:s,DBButton:r,DBDrawerHeader:a},setup(){return{args:e}},template:`<DBDrawer v-bind="args"   >${e.default}</DBDrawer>`})},f=[`Interaction`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "rounded": true,
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
}`,...d.parameters?.docs?.source}}}})))()}export{p as n,c as r,d as t};