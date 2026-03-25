import{_ as e}from"./infotext-ChOUO4Z5.js";import{_ as n}from"./custom-button-Ck4m2VdQ.js";import"./iframe-DfvinHPj.js";import"./preload-helper-eESElaRw.js";import"./index-COCtms_G.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBCustomButton/Disabled",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},wrap:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{default:'<button type="button">Button</button>'},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},r={args:{default:`<label for="checkbox06"
  ><input type="checkbox" id="checkbox06" />
  Checkbox
</label>`},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},a={args:{default:'<a href="#">Link</a>'},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},s={args:{default:'<button type="button" :disabled="true"> Button </button>'},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},u={args:{default:`<label for="checkbox07"
  ><input type="checkbox" id="checkbox07" :disabled="true" />
  Checkbox
</label>`},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},c={args:{default:'<a href="#" aria-disabled="true" :tabIndex="-1"> Link </a>'},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    "default": \`<label for="checkbox06"
  ><input type="checkbox" id="checkbox06" />
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
    "default": \`<label for="checkbox07"
  ><input type="checkbox" id="checkbox07" :disabled="true" />
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const f=["DefaultFalseButton","DefaultFalseCheckbox","DefaultFalseLink","TrueButton","TrueCheckbox","TrueLink"];export{o as DefaultFalseButton,r as DefaultFalseCheckbox,a as DefaultFalseLink,s as TrueButton,u as TrueCheckbox,c as TrueLink,f as __namedExportsOrder,b as default};
