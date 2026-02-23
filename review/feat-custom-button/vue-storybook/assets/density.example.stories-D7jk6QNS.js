import{_ as n}from"./custom-button-cJs0F1Sz.js";import{_ as e}from"./infotext-DpjxM8v4.js";import"./iframe-xVI66AU7.js";import"./preload-helper-BVUwd7FV.js";import"./index-TPUxY04r.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBCustomButton/Density",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},wrap:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{"data-density":"functional",default:'<button type="button">Button</button>'},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},a={args:{"data-density":"functional",default:`<label
  ><input type="checkbox" />
  Checkbox
</label>`},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},s={args:{"data-density":"functional",default:'<a href="#">Link</a>'},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},r={args:{"data-density":"regular",default:'<button type="button">Button</button>'},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},u={args:{"data-density":"regular",default:`<label
  ><input type="checkbox" />
  Checkbox
</label>`},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},d={args:{"data-density":"regular",default:'<a href="#">Link</a>'},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},l={args:{"data-density":"expressive",default:'<button type="button">Button</button>'},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},m={args:{"data-density":"expressive",default:`<label
  ><input type="checkbox" />
  Checkbox
</label>`},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},c={args:{"data-density":"expressive",default:'<a href="#">Link</a>'},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "default": \`<button type="button">Button</button>\`
  },
  render: (args: any) => ({
    components: {
      DBCustomButton,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton>\`
  })
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "default": \`<label
  ><input type="checkbox" />
  Checkbox
</label>\`
  },
  render: (args: any) => ({
    components: {
      DBCustomButton,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton>\`
  })
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "default": \`<a href="#">Link</a>\`
  },
  render: (args: any) => ({
    components: {
      DBCustomButton,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton>\`
  })
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "default": \`<button type="button">Button</button>\`
  },
  render: (args: any) => ({
    components: {
      DBCustomButton,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton>\`
  })
}`,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "default": \`<label
  ><input type="checkbox" />
  Checkbox
</label>\`
  },
  render: (args: any) => ({
    components: {
      DBCustomButton,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton>\`
  })
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "default": \`<a href="#">Link</a>\`
  },
  render: (args: any) => ({
    components: {
      DBCustomButton,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton>\`
  })
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "default": \`<button type="button">Button</button>\`
  },
  render: (args: any) => ({
    components: {
      DBCustomButton,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton>\`
  })
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "default": \`<label
  ><input type="checkbox" />
  Checkbox
</label>\`
  },
  render: (args: any) => ({
    components: {
      DBCustomButton,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton>\`
  })
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "default": \`<a href="#">Link</a>\`
  },
  render: (args: any) => ({
    components: {
      DBCustomButton,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton>\`
  })
}`,...c.parameters?.docs?.source}}};const C=["FunctionalButton","FunctionalCheckbox","FunctionalLink","DefaultRegularButton","DefaultRegularCheckbox","DefaultRegularLink","ExpressiveButton","ExpressiveCheckbox","ExpressiveLink"];export{r as DefaultRegularButton,u as DefaultRegularCheckbox,d as DefaultRegularLink,l as ExpressiveButton,m as ExpressiveCheckbox,c as ExpressiveLink,o as FunctionalButton,a as FunctionalCheckbox,s as FunctionalLink,C as __namedExportsOrder,b as default};
