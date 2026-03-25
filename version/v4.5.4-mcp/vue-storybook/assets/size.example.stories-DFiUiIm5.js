import{_ as e}from"./infotext-DEy_PFUN.js";import{_ as n}from"./custom-button-DHUjf822.js";import"./iframe-BCs12wWX.js";import"./preload-helper-DP-VBuiN.js";import"./index-BKv2R__d.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBCustomButton/Size",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},wrap:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{size:"medium",default:'<button type="button">Button</button>'},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},s={args:{size:"medium",default:`<label for="checkbox17"
  ><input type="checkbox" id="checkbox17" />
  Checkbox
</label>`},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},a={args:{size:"medium",default:'<a href="#">Link</a>'},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},r={args:{size:"small",default:'<button type="button">Button</button>'},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},u={args:{size:"small",default:`<label for="checkbox18"
  ><input type="checkbox" id="checkbox18" />
  Checkbox
</label>`},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},m={args:{size:"small",default:'<a href="#">Link</a>'},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium",
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium",
    "default": \`<label for="checkbox17"
  ><input type="checkbox" id="checkbox17" />
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium",
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
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
    "size": "small",
    "default": \`<label for="checkbox18"
  ><input type="checkbox" id="checkbox18" />
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
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
}`,...m.parameters?.docs?.source}}};const f=["DefaultMediumButton","DefaultMediumCheckbox","DefaultMediumLink","SmallButton","SmallCheckbox","SmallLink"];export{o as DefaultMediumButton,s as DefaultMediumCheckbox,a as DefaultMediumLink,r as SmallButton,u as SmallCheckbox,m as SmallLink,f as __namedExportsOrder,b as default};
