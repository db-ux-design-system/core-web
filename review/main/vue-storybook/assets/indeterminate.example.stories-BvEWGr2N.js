import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-B3-wm7Jv.js";import{n as i,t as a}from"./loading-indicator-BFlZbmkm.js";var o=t({DefaultTrueBar:()=>d,DefaultTrueCircularhorizontal:()=>l,DefaultTrueCircularvertical:()=>u,FalseBar:()=>m,FalseCircularhorizontal:()=>f,FalseCircularvertical:()=>p,__namedExportsOrder:()=>h,default:()=>c}),s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBLoadingIndicator/Indeterminate`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onTimeout:s()},argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},onTimeout:{action:`onTimeout`}}},l={args:{variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,indeterminate:!0,default:`Circular horizontal`},render:e=>({components:{DBLoadingIndicator:i,DBInfotext:r},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},u={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,indeterminate:!0,default:`Circular vertical`},render:e=>({components:{DBLoadingIndicator:i,DBInfotext:r},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},d={args:{variant:`bar`,progressText:`42 of 100`,indeterminate:!0,default:`Bar`},render:e=>({components:{DBLoadingIndicator:i,DBInfotext:r},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},f={args:{state:`active`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,indeterminate:!1,value:42,max:100,default:`Circular horizontal`},render:e=>({components:{DBLoadingIndicator:i,DBInfotext:r},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},p={args:{state:`active`,variant:`circular`,orientation:`vertical`,progressText:`42%`,indeterminate:!1,value:42,max:100,default:`Circular vertical`},render:e=>({components:{DBLoadingIndicator:i,DBInfotext:r},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},m={args:{state:`active`,variant:`bar`,progressText:`42 of 100`,indeterminate:!1,value:42,max:100,default:`Bar`},render:e=>({components:{DBLoadingIndicator:i,DBInfotext:r},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},h=[`DefaultTrueCircularhorizontal`,`DefaultTrueCircularvertical`,`DefaultTrueBar`,`FalseCircularhorizontal`,`FalseCircularvertical`,`FalseBar`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "indeterminate": true,
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
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "indeterminate": true,
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
    "variant": "bar",
    "progressText": "42 of 100",
    "indeterminate": true,
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
    "state": "active",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "indeterminate": false,
    "value": 42,
    "max": 100,
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
    "state": "active",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "indeterminate": false,
    "value": 42,
    "max": 100,
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
    "state": "active",
    "variant": "bar",
    "progressText": "42 of 100",
    "indeterminate": false,
    "value": 42,
    "max": 100,
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
}`,...m.parameters?.docs?.source}}}})))()}export{f as a,g as c,m as i,l as n,p as o,u as r,o as s,d as t};