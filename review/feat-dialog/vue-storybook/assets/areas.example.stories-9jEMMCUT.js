import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./badge-Bl8icL0p.js";import{n as r,t as i}from"./button-CQurNZLX.js";import{n as a,t as o}from"./drawer-footer-zrz6pQIB.js";import{n as s,t as c}from"./drawer-header-CBAhdIi5.js";import{n as l,t as u}from"./drawer-BElHhGm5.js";import{n as d,t as f}from"./icon-BB8g-hYw.js";import{n as p,t as m}from"./link-C2IFUE7r.js";var h,g,_,v,y,b,x;function S(){return(S=e((()=>{t(),r(),a(),s(),d(),m(),l(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/DBDrawer/Areas`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:h()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},_={args:{open:!1,onClose:h(),default:`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader
    text="With text prop"
    closeButtonText="Close"
  ></DBDrawerHeader
></template>`},render:e=>({components:{DBDrawer:u,DBBadge:n,DBButton:i,DBDrawerFooter:o,DBDrawerHeader:c,DBIcon:f,DBLink:p},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},v={args:{open:!1,onClose:h(),default:`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    With start slot
    <template v-slot:start-slot
      ><DBIcon icon="person"></DBIcon></template></DBDrawerHeader
></template>`},render:e=>({components:{DBDrawer:u,DBBadge:n,DBButton:i,DBDrawerFooter:o,DBDrawerHeader:c,DBIcon:f,DBLink:p},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},y={args:{open:!1,onClose:h(),default:`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    With end slot
    <template v-slot:end-slot
      ><DBBadge>New</DBBadge></template
    ></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:u,DBBadge:n,DBButton:i,DBDrawerFooter:o,DBDrawerHeader:c,DBIcon:f,DBLink:p},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},b={args:{open:!1,onClose:h(),default:`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    With footer
  </DBDrawerHeader></template
><template v-slot:footer
  ><DBDrawerFooter
    ><DBLink href="#">Link 1</DBLink
    ><DBLink href="#">Link 2</DBLink></DBDrawerFooter
  ></template
>`},render:e=>({components:{DBDrawer:u,DBBadge:n,DBButton:i,DBDrawerFooter:o,DBDrawerHeader:c,DBIcon:f,DBLink:p},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "default": \`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader
    text="With text prop"
    closeButtonText="Close"
  ></DBDrawerHeader
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBBadge,
      DBButton,
      DBDrawerFooter,
      DBDrawerHeader,
      DBIcon,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "default": \`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    With start slot
    <template v-slot:start-slot
      ><DBIcon icon="person"></DBIcon></template></DBDrawerHeader
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBBadge,
      DBButton,
      DBDrawerFooter,
      DBDrawerHeader,
      DBIcon,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "default": \`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    With end slot
    <template v-slot:end-slot
      ><DBBadge>New</DBBadge></template
    ></DBDrawerHeader
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBBadge,
      DBButton,
      DBDrawerFooter,
      DBDrawerHeader,
      DBIcon,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "default": \`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    With footer
  </DBDrawerHeader></template
><template v-slot:footer
  ><DBDrawerFooter
    ><DBLink href="#">Link 1</DBLink
    ><DBLink href="#">Link 2</DBLink></DBDrawerFooter
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBBadge,
      DBButton,
      DBDrawerFooter,
      DBDrawerHeader,
      DBIcon,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...b.parameters?.docs?.source}}},x=[`Withtextprop`,`Withstartslot`,`Withendslot`,`Withfooter`]})))()}S();export{y as Withendslot,b as Withfooter,v as Withstartslot,_ as Withtextprop,x as __namedExportsOrder,g as default};