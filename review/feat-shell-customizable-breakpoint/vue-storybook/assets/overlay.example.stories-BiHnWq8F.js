import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./card-CU3Batjk.js";import{n as i,t as a}from"./infotext-Pj-9eN3S.js";import{n as o,t as s}from"./loading-indicator-B9P-P0bE.js";var c=t({DefaultFalseBar:()=>p,DefaultFalseCircularhorizontal:()=>d,DefaultFalseCircularvertical:()=>f,TrueCircularvertical:()=>m,__namedExportsOrder:()=>h,default:()=>u}),l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),i(),s(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBLoadingIndicator/Overlay`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onTimeout:l()},argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},onTimeout:{action:`onTimeout`}}},d={args:{variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,overlay:!1,default:`Circular horizontal`},render:e=>({components:{DBLoadingIndicator:o,DBCard:r,DBInfotext:a},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},f={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,overlay:!1,default:`Circular vertical`},render:e=>({components:{DBLoadingIndicator:o,DBCard:r,DBInfotext:a},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},p={args:{variant:`bar`,progressText:`42 of 100`,overlay:!1,default:`Bar`},render:e=>({components:{DBLoadingIndicator:o,DBCard:r,DBInfotext:a},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},m={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,overlay:!0,default:`Circular vertical`},render:e=>({components:{DBLoadingIndicator:o,DBCard:r,DBInfotext:a},setup(){return{args:e}},template:`<DBCard    ><DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator><p    >Content 1</p><p    >Content 2</p><p    >Content 3</p></DBCard>`})},h=[`DefaultFalseCircularhorizontal`,`DefaultFalseCircularvertical`,`DefaultFalseBar`,`TrueCircularvertical`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "overlay": false,
    "default": \`Circular horizontal\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator,
      DBCard,
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
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "overlay": false,
    "default": \`Circular vertical\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator,
      DBCard,
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
    "variant": "bar",
    "progressText": "42 of 100",
    "overlay": false,
    "default": \`Bar\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator,
      DBCard,
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
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "overlay": true,
    "default": \`Circular vertical\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator,
      DBCard,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCard    ><DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator><p    >Content 1</p><p    >Content 2</p><p    >Content 3</p></DBCard>\`
  })
}`,...m.parameters?.docs?.source}}}})))()}export{g as a,m as i,d as n,c as o,f as r,p as t};