import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./card-BELJ4yjy.js";import{n as r,t as i}from"./infotext-gRAAqOpQ.js";import{n as a,t as o}from"./loading-indicator-CMDK_Kqq.js";var s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{t(),r(),o(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBLoadingIndicator/Overlay`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},l={args:{variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,overlay:!1,default:`Circular horizontal`},render:e=>({components:{DBLoadingIndicator:a,DBCard:n,DBInfotext:i},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},u={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,overlay:!1,default:`Circular vertical`},render:e=>({components:{DBLoadingIndicator:a,DBCard:n,DBInfotext:i},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},d={args:{variant:`bar`,progressText:`42 of 100`,overlay:!1,default:`Bar`},render:e=>({components:{DBLoadingIndicator:a,DBCard:n,DBInfotext:i},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},f={args:{variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,overlay:!0,default:`Circular horizontal`},render:e=>({components:{DBLoadingIndicator:a,DBCard:n,DBInfotext:i},setup(){return{args:e}},template:`<DBCard    ><DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator><p    >Content 1</p><p    >Content 2</p><p    >Content 3</p></DBCard>`})},p={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,overlay:!0,default:`Circular vertical`},render:e=>({components:{DBLoadingIndicator:a,DBCard:n,DBInfotext:i},setup(){return{args:e}},template:`<DBCard    ><DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator><p    >Content 1</p><p    >Content 2</p><p    >Content 3</p></DBCard>`})},m={args:{variant:`bar`,progressText:`42 of 100`,overlay:!0,default:`Bar`},render:e=>({components:{DBLoadingIndicator:a,DBCard:n,DBInfotext:i},setup(){return{args:e}},template:`<DBCard    ><DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator><p    >Content 1</p><p    >Content 2</p><p    >Content 3</p></DBCard>`})},h=[`DefaultFalseCircularhorizontal`,`DefaultFalseCircularvertical`,`DefaultFalseBar`,`TrueCircularhorizontal`,`TrueCircularvertical`,`TrueBar`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "overlay": true,
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
    template: \`<DBCard    ><DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator><p    >Content 1</p><p    >Content 2</p><p    >Content 3</p></DBCard>\`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "bar",
    "progressText": "42 of 100",
    "overlay": true,
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
    template: \`<DBCard    ><DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator><p    >Content 1</p><p    >Content 2</p><p    >Content 3</p></DBCard>\`
  })
}`,...m.parameters?.docs?.source}}}})))()}g();export{d as DefaultFalseBar,l as DefaultFalseCircularhorizontal,u as DefaultFalseCircularvertical,m as TrueBar,f as TrueCircularhorizontal,p as TrueCircularvertical,h as __namedExportsOrder,c as default};