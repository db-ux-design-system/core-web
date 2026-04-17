import{n as e}from"./chunk-BneVvdWh.js";import{p as t,t as n}from"./src-D8ePn3Ki.js";var r,i,a,o,s,c;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBNotification/Variant`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:r()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},a={args:{variant:`docked`,headline:`Headline`,icon:`information_circle`,default:`(Default) Docked`},render:e=>({components:{DBNotification:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},o={args:{variant:`standalone`,headline:`Headline`,icon:`information_circle`,default:`Standalone`},render:e=>({components:{DBNotification:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},s={args:{variant:`overlay`,headline:`Headline`,icon:`information_circle`,default:`Overlay`},render:e=>({components:{DBNotification:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "docked",
    "headline": "Headline",
    "icon": "information_circle",
    "default": \`(Default) Docked\`
  },
  render: (args: any) => ({
    components: {
      DBNotification
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >\${args.default}</DBNotification></div>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone",
    "headline": "Headline",
    "icon": "information_circle",
    "default": \`Standalone\`
  },
  render: (args: any) => ({
    components: {
      DBNotification
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >\${args.default}</DBNotification></div>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "headline": "Headline",
    "icon": "information_circle",
    "default": \`Overlay\`
  },
  render: (args: any) => ({
    components: {
      DBNotification
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >\${args.default}</DBNotification></div>\`
  })
}`,...s.parameters?.docs?.source}}},c=[`DefaultDocked`,`Standalone`,`Overlay`]}))();export{a as DefaultDocked,s as Overlay,o as Standalone,c as __namedExportsOrder,i as default};