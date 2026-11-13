import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./notification-z223_dVT.js";var i=t({Critical:()=>l,DefaultAdaptive:()=>s,Informational:()=>u,Neutral:()=>c,Successful:()=>d,Warning:()=>f,__namedExportsOrder:()=>p,default:()=>o}),a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBNotification/Semantic`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:a()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},s={args:{headline:`Headline`,default:`(Default) Adaptive`},render:e=>({components:{DBNotification:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},c={args:{semantic:`neutral`,headline:`Headline`,default:`Neutral`},render:e=>({components:{DBNotification:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},l={args:{semantic:`critical`,headline:`Headline`,default:`Critical`},render:e=>({components:{DBNotification:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},u={args:{semantic:`informational`,headline:`Headline`,default:`Informational`},render:e=>({components:{DBNotification:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},d={args:{semantic:`successful`,headline:`Headline`,default:`Successful`},render:e=>({components:{DBNotification:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},f={args:{semantic:`warning`,headline:`Headline`,default:`Warning`},render:e=>({components:{DBNotification:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},p=[`DefaultAdaptive`,`Neutral`,`Critical`,`Informational`,`Successful`,`Warning`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "default": \`(Default) Adaptive\`
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "neutral",
    "headline": "Headline",
    "default": \`Neutral\`
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical",
    "headline": "Headline",
    "default": \`Critical\`
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "informational",
    "headline": "Headline",
    "default": \`Informational\`
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "successful",
    "headline": "Headline",
    "default": \`Successful\`
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "warning",
    "headline": "Headline",
    "default": \`Warning\`
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
}`,...f.parameters?.docs?.source}}}})))()}export{d as a,i as c,c as i,s as n,f as o,u as r,m as s,l as t};