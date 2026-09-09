import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-Bt0SmnRj.js";import{n as r,t as i}from"./loading-indicator-DN5jS9rH.js";var a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBLoadingIndicator/Delay`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},s={args:{delay:`none`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,default:`Circular horizontal`},render:e=>({components:{DBLoadingIndicator:r,DBInfotext:n},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},c={args:{delay:`none`,variant:`circular`,orientation:`vertical`,progressText:`42%`,default:`Circular vertical`},render:e=>({components:{DBLoadingIndicator:r,DBInfotext:n},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},l={args:{delay:`none`,variant:`bar`,progressText:`42 of 100`,default:`Bar`},render:e=>({components:{DBLoadingIndicator:r,DBInfotext:n},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},u={args:{delay:`slow`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,default:`Circular horizontal`},render:e=>({components:{DBLoadingIndicator:r,DBInfotext:n},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},d={args:{delay:`slow`,variant:`circular`,orientation:`vertical`,progressText:`42%`,default:`Circular vertical`},render:e=>({components:{DBLoadingIndicator:r,DBInfotext:n},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},f={args:{delay:`slow`,variant:`bar`,progressText:`42 of 100`,default:`Bar`},render:e=>({components:{DBLoadingIndicator:r,DBInfotext:n},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},p={args:{delay:`fast`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,default:`Circular horizontal`},render:e=>({components:{DBLoadingIndicator:r,DBInfotext:n},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},m={args:{delay:`fast`,variant:`circular`,orientation:`vertical`,progressText:`42%`,default:`Circular vertical`},render:e=>({components:{DBLoadingIndicator:r,DBInfotext:n},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},h={args:{delay:`fast`,variant:`bar`,progressText:`42 of 100`,default:`Bar`},render:e=>({components:{DBLoadingIndicator:r,DBInfotext:n},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},g=[`DefaultNoneCircularhorizontal`,`DefaultNoneCircularvertical`,`DefaultNoneBar`,`SlowCircularhorizontal`,`SlowCircularvertical`,`SlowBar`,`FastCircularhorizontal`,`FastCircularvertical`,`FastBar`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}}})))()}_();export{l as DefaultNoneBar,s as DefaultNoneCircularhorizontal,c as DefaultNoneCircularvertical,h as FastBar,p as FastCircularhorizontal,m as FastCircularvertical,f as SlowBar,u as SlowCircularhorizontal,d as SlowCircularvertical,g as __namedExportsOrder,o as default};