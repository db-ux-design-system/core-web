import{_ as n}from"./custom-button-Dwr879aa.js";import{_ as o}from"./infotext-COZFc5EN.js";import"./iframe-BRL77h7A.js";import"./preload-helper-BrSIRfC5.js";import"./index-D_V5zbEX.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBCustomButton/Width",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},wrap:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{width:"auto",default:'<button type="button">Button</button>'},render:t=>({components:{DBCustomButton:n,DBInfotext:o},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},u={args:{width:"auto",default:`<label for="checkbox23"
  ><input type="checkbox" id="checkbox23" />
  Checkbox
</label>`},render:t=>({components:{DBCustomButton:n,DBInfotext:o},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},r={args:{width:"auto",default:'<a href="#">Link</a>'},render:t=>({components:{DBCustomButton:n,DBInfotext:o},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},s={args:{width:"full",default:'<button type="button">Button</button>'},render:t=>({components:{DBCustomButton:n,DBInfotext:o},setup(){return{args:t}},template:`<div  :style="{
  width: '500px'
}"  ><DBCustomButton v-bind="args"   >${t.default}</DBCustomButton></div>`})},a={args:{width:"full",default:`<label for="checkbox24"
  ><input type="checkbox" id="checkbox24" />
  Checkbox
</label>`},render:t=>({components:{DBCustomButton:n,DBInfotext:o},setup(){return{args:t}},template:`<div  :style="{
  width: '500px'
}"  ><DBCustomButton v-bind="args"   >${t.default}</DBCustomButton></div>`})},l={args:{width:"full",default:'<a href="#">Link</a>'},render:t=>({components:{DBCustomButton:n,DBInfotext:o},setup(){return{args:t}},template:`<div  :style="{
  width: '500px'
}"  ><DBCustomButton v-bind="args"   >${t.default}</DBCustomButton></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
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
}`,...e.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "default": \`<label for="checkbox23"
  ><input type="checkbox" id="checkbox23" />
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
}`,...u.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
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
    template: \`<div  :style="{
  width: '500px'
}"  ><DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton></div>\`
  })
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "default": \`<label for="checkbox24"
  ><input type="checkbox" id="checkbox24" />
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
    template: \`<div  :style="{
  width: '500px'
}"  ><DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton></div>\`
  })
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
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
    template: \`<div  :style="{
  width: '500px'
}"  ><DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton></div>\`
  })
}`,...l.parameters?.docs?.source}}};const b=["DefaultAutoButton","DefaultAutoCheckbox","DefaultAutoLink","FullButton","FullCheckbox","FullLink"];export{e as DefaultAutoButton,u as DefaultAutoCheckbox,r as DefaultAutoLink,s as FullButton,a as FullCheckbox,l as FullLink,b as __namedExportsOrder,f as default};
