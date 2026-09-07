import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-gRAAqOpQ.js";import{n as r,t as i}from"./loading-indicator-CMDK_Kqq.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBLoadingIndicator/Show Progress Text`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},s={args:{state:`active`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,showProgressText:!0,indeterminate:!1,value:42,max:100,default:`Circular horizontal`},render:e=>({components:{DBLoadingIndicator:r,DBInfotext:n},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},c={args:{state:`active`,variant:`circular`,orientation:`vertical`,progressText:`42%`,showProgressText:!0,indeterminate:!1,value:42,max:100,default:`Circular vertical`},render:e=>({components:{DBLoadingIndicator:r,DBInfotext:n},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},l={args:{state:`active`,variant:`bar`,progressText:`42 of 100`,showProgressText:!0,indeterminate:!1,value:42,max:100,default:`Bar`},render:e=>({components:{DBLoadingIndicator:r,DBInfotext:n},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},u={args:{state:`active`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,showProgressText:!1,indeterminate:!1,value:42,max:100,default:`Circular horizontal`},render:e=>({components:{DBLoadingIndicator:r,DBInfotext:n},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},d={args:{state:`active`,variant:`circular`,orientation:`vertical`,progressText:`42%`,showProgressText:!1,indeterminate:!1,value:42,max:100,default:`Circular vertical`},render:e=>({components:{DBLoadingIndicator:r,DBInfotext:n},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},f={args:{state:`active`,variant:`bar`,progressText:`42 of 100`,showProgressText:!1,indeterminate:!1,value:42,max:100,default:`Bar`},render:e=>({components:{DBLoadingIndicator:r,DBInfotext:n},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},p=[`DefaultTrueCircularhorizontal`,`DefaultTrueCircularvertical`,`DefaultTrueBar`,`FalseCircularhorizontal`,`FalseCircularvertical`,`FalseBar`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "active",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "showProgressText": true,
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "active",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "showProgressText": true,
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "active",
    "variant": "bar",
    "progressText": "42 of 100",
    "showProgressText": true,
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "active",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "showProgressText": false,
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "active",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "showProgressText": false,
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "active",
    "variant": "bar",
    "progressText": "42 of 100",
    "showProgressText": false,
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
}`,...f.parameters?.docs?.source}}}})))()}m();export{l as DefaultTrueBar,s as DefaultTrueCircularhorizontal,c as DefaultTrueCircularvertical,f as FalseBar,u as FalseCircularhorizontal,d as FalseCircularvertical,p as __namedExportsOrder,o as default};