import{_ as o}from"./infotext-B-ZttWlo.js";import{_ as t}from"./custom-button-CzCWIdoQ.js";import"./iframe-IFZVrxLO.js";import"./preload-helper-B7q7OWx3.js";import"./index-DFbrfN6t.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBCustomButton/Show Icon Trailing",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},wrap:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{iconTrailing:"x_placeholder",showIconTrailing:!1,default:'<button type="button">Button</button>'},render:n=>({components:{DBCustomButton:t,DBInfotext:o},setup(){return{args:n}},template:`<DBCustomButton v-bind="args"   >${n.default}</DBCustomButton>`})},r={args:{iconTrailing:"x_placeholder",showIconTrailing:!1,default:`<label for="checkbox15"
  ><input type="checkbox" id="checkbox15" />
  Checkbox
</label>`},render:n=>({components:{DBCustomButton:t,DBInfotext:o},setup(){return{args:n}},template:`<DBCustomButton v-bind="args"   >${n.default}</DBCustomButton>`})},a={args:{iconTrailing:"x_placeholder",showIconTrailing:!1,default:'<a href="#">Link</a>'},render:n=>({components:{DBCustomButton:t,DBInfotext:o},setup(){return{args:n}},template:`<DBCustomButton v-bind="args"   >${n.default}</DBCustomButton>`})},s={args:{iconTrailing:"x_placeholder",showIconTrailing:!0,default:'<button type="button">Button</button>'},render:n=>({components:{DBCustomButton:t,DBInfotext:o},setup(){return{args:n}},template:`<DBCustomButton v-bind="args"   >${n.default}</DBCustomButton>`})},u={args:{iconTrailing:"x_placeholder",showIconTrailing:!0,default:`<label for="checkbox16"
  ><input type="checkbox" id="checkbox16" />
  Checkbox
</label>`},render:n=>({components:{DBCustomButton:t,DBInfotext:o},setup(){return{args:n}},template:`<DBCustomButton v-bind="args"   >${n.default}</DBCustomButton>`})},l={args:{iconTrailing:"x_placeholder",showIconTrailing:!0,default:'<a href="#">Link</a>'},render:n=>({components:{DBCustomButton:t,DBInfotext:o},setup(){return{args:n}},template:`<DBCustomButton v-bind="args"   >${n.default}</DBCustomButton>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "iconTrailing": "x_placeholder",
    "showIconTrailing": false,
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
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "iconTrailing": "x_placeholder",
    "showIconTrailing": false,
    "default": \`<label for="checkbox15"
  ><input type="checkbox" id="checkbox15" />
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
    "iconTrailing": "x_placeholder",
    "showIconTrailing": false,
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
    "iconTrailing": "x_placeholder",
    "showIconTrailing": true,
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
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "iconTrailing": "x_placeholder",
    "showIconTrailing": true,
    "default": \`<label for="checkbox16"
  ><input type="checkbox" id="checkbox16" />
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
    "iconTrailing": "x_placeholder",
    "showIconTrailing": true,
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
}`,...l.parameters?.docs?.source}}};const f=["DefaultFalseButton","DefaultFalseCheckbox","DefaultFalseLink","TrueButton","TrueCheckbox","TrueLink"];export{e as DefaultFalseButton,r as DefaultFalseCheckbox,a as DefaultFalseLink,s as TrueButton,u as TrueCheckbox,l as TrueLink,f as __namedExportsOrder,g as default};
