import{_ as n}from"./custom-button-Cw_FRXkl.js";import{_ as e}from"./infotext-DjIqxLKq.js";import"./iframe-BqcwKG60.js";import"./preload-helper-BVUwd7FV.js";import"./index-BpE-mME_.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBCustomButton/Disabled",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},wrap:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{default:'<button type="button">Button</button>'},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},r={args:{default:`<label
  ><input type="checkbox" />
  Checkbox
</label>`},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},a={args:{default:'<a href="#">Link</a>'},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},s={args:{default:'<button type="button" :disabled="true"> Button </button>'},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},u={args:{default:`<label
  ><input type="checkbox" :disabled="true" />
  Checkbox
</label>`},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},l={args:{default:'<a href="#" aria-disabled="true" :tabIndex="-1"> Link </a>'},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<button type="button" :disabled="true"> Button </button>\`
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
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<label
  ><input type="checkbox" :disabled="true" />
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
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<a href="#" aria-disabled="true" :tabIndex="-1"> Link </a>\`
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
}`,...l.parameters?.docs?.source}}};const D=["DefaultFalseButton","DefaultFalseCheckbox","DefaultFalseLink","TrueButton","TrueCheckbox","TrueLink"];export{o as DefaultFalseButton,r as DefaultFalseCheckbox,a as DefaultFalseLink,s as TrueButton,u as TrueCheckbox,l as TrueLink,D as __namedExportsOrder,b as default};
