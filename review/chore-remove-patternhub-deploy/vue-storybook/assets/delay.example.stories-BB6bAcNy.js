import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-DAn8Ses8.js";import{n as i,t as a}from"./loading-indicator-DK92XUOG.js";var o=t({DefaultNoneBar:()=>d,DefaultNoneCircularhorizontal:()=>l,DefaultNoneCircularvertical:()=>u,FastBar:()=>_,FastCircularhorizontal:()=>h,FastCircularvertical:()=>g,SlowBar:()=>m,SlowCircularhorizontal:()=>f,SlowCircularvertical:()=>p,__namedExportsOrder:()=>v,default:()=>c}),s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBLoadingIndicator/Delay`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onTimeout:s()},argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},onTimeout:{action:`onTimeout`}}},l={args:{delay:`none`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,default:`Circular horizontal`},render:e=>({components:{DBLoadingIndicator:i,DBInfotext:r},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},u={args:{delay:`none`,variant:`circular`,orientation:`vertical`,progressText:`42%`,default:`Circular vertical`},render:e=>({components:{DBLoadingIndicator:i,DBInfotext:r},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},d={args:{delay:`none`,variant:`bar`,progressText:`42 of 100`,default:`Bar`},render:e=>({components:{DBLoadingIndicator:i,DBInfotext:r},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},f={args:{delay:`slow`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,default:`Circular horizontal`},render:e=>({components:{DBLoadingIndicator:i,DBInfotext:r},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},p={args:{delay:`slow`,variant:`circular`,orientation:`vertical`,progressText:`42%`,default:`Circular vertical`},render:e=>({components:{DBLoadingIndicator:i,DBInfotext:r},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},m={args:{delay:`slow`,variant:`bar`,progressText:`42 of 100`,default:`Bar`},render:e=>({components:{DBLoadingIndicator:i,DBInfotext:r},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},h={args:{delay:`fast`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,default:`Circular horizontal`},render:e=>({components:{DBLoadingIndicator:i,DBInfotext:r},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},g={args:{delay:`fast`,variant:`circular`,orientation:`vertical`,progressText:`42%`,default:`Circular vertical`},render:e=>({components:{DBLoadingIndicator:i,DBInfotext:r},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},_={args:{delay:`fast`,variant:`bar`,progressText:`42 of 100`,default:`Bar`},render:e=>({components:{DBLoadingIndicator:i,DBInfotext:r},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},v=[`DefaultNoneCircularhorizontal`,`DefaultNoneCircularvertical`,`DefaultNoneBar`,`SlowCircularhorizontal`,`SlowCircularvertical`,`SlowBar`,`FastCircularhorizontal`,`FastCircularvertical`,`FastBar`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "none",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "default": \`Circular horizontal\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "none",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "default": \`Circular vertical\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "none",
    "variant": "bar",
    "progressText": "42 of 100",
    "default": \`Bar\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator>\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "slow",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "default": \`Circular horizontal\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator>\`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "slow",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "default": \`Circular vertical\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator>\`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "slow",
    "variant": "bar",
    "progressText": "42 of 100",
    "default": \`Bar\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator>\`
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "fast",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "default": \`Circular horizontal\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator>\`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "fast",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "default": \`Circular vertical\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator>\`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "fast",
    "variant": "bar",
    "progressText": "42 of 100",
    "default": \`Bar\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator>\`
  })
}`,..._.parameters?.docs?.source}}}})))()}export{h as a,f as c,y as d,c as f,_ as i,p as l,l as n,g as o,u as r,m as s,d as t,o as u};