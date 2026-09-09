import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./card-B0XvCEdU.js";import{n as r,t as i}from"./infotext-Bt0SmnRj.js";import{n as a,t as o}from"./loading-indicator-DN5jS9rH.js";var s,c,l,u,d,f,p;function m(){return(m=e((()=>{t(),r(),o(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBLoadingIndicator/Overlay`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},l={args:{variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,overlay:!1,default:`Circular horizontal`},render:e=>({components:{DBLoadingIndicator:a,DBCard:n,DBInfotext:i},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},u={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,overlay:!1,default:`Circular vertical`},render:e=>({components:{DBLoadingIndicator:a,DBCard:n,DBInfotext:i},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},d={args:{variant:`bar`,progressText:`42 of 100`,overlay:!1,default:`Bar`},render:e=>({components:{DBLoadingIndicator:a,DBCard:n,DBInfotext:i},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},f={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,overlay:!0,default:`Circular vertical`},render:e=>({components:{DBLoadingIndicator:a,DBCard:n,DBInfotext:i},setup(){return{args:e}},template:`<DBCard    ><DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator><p    >Content 1</p><p    >Content 2</p><p    >Content 3</p></DBCard>`})},p=[`DefaultFalseCircularhorizontal`,`DefaultFalseCircularvertical`,`DefaultFalseBar`,`TrueCircularvertical`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}}})))()}m();export{d as DefaultFalseBar,l as DefaultFalseCircularhorizontal,u as DefaultFalseCircularvertical,f as TrueCircularvertical,p as __namedExportsOrder,c as default};