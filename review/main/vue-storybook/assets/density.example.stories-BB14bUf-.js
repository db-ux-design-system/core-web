import{n as e}from"./chunk-DnJy8xQt.js";import{p as t,t as n}from"./src-C6Gn60iG.js";var r,i,a,o,s,c;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBNotification/Density`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:r()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},a={args:{"data-density":`functional`,headline:`Headline`,icon:`information_circle`,default:`functional`},render:e=>({components:{DBNotification:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},o={args:{"data-density":`regular`,headline:`Headline`,icon:`information_circle`,default:`regular (Default)`},render:e=>({components:{DBNotification:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},s={args:{"data-density":`expressive`,headline:`Headline`,icon:`information_circle`,default:`expressive`},render:e=>({components:{DBNotification:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "headline": "Headline",
    "icon": "information_circle",
    "default": \`functional\`
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
    "data-density": "regular",
    "headline": "Headline",
    "icon": "information_circle",
    "default": \`regular (Default)\`
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
    "data-density": "expressive",
    "headline": "Headline",
    "icon": "information_circle",
    "default": \`expressive\`
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
}`,...s.parameters?.docs?.source}}},c=[`functional`,`regularDefault`,`expressive`]}))();export{c as __namedExportsOrder,i as default,s as expressive,a as functional,o as regularDefault};