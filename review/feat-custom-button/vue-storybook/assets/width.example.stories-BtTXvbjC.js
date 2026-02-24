import{_ as n}from"./custom-button-D6L6U_wQ.js";import{_ as o}from"./infotext-DIxCEOIE.js";import"./iframe-CYNA9pzw.js";import"./preload-helper-BVUwd7FV.js";import"./index-BpE-mME_.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBCustomButton/Width",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},wrap:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{width:"auto",default:'<button type="button">Button</button>'},render:t=>({components:{DBCustomButton:n,DBInfotext:o},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},u={args:{width:"auto",default:`<label
  ><input type="checkbox" />
  Checkbox
</label>`},render:t=>({components:{DBCustomButton:n,DBInfotext:o},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},s={args:{width:"auto",default:'<a href="#">Link</a>'},render:t=>({components:{DBCustomButton:n,DBInfotext:o},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},a={args:{width:"full",default:'<button type="button">Button</button>'},render:t=>({components:{DBCustomButton:n,DBInfotext:o},setup(){return{args:t}},template:`<div  :style="{
  width: '500px'
}"  ><DBCustomButton v-bind="args"   >${t.default}</DBCustomButton></div>`})},r={args:{width:"full",default:`<label
  ><input type="checkbox" />
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
}`,...u.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
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
    template: \`<div  :style="{
  width: '500px'
}"  ><DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton></div>\`
  })
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const D=["DefaultAutoButton","DefaultAutoCheckbox","DefaultAutoLink","FullButton","FullCheckbox","FullLink"];export{e as DefaultAutoButton,u as DefaultAutoCheckbox,s as DefaultAutoLink,a as FullButton,r as FullCheckbox,l as FullLink,D as __namedExportsOrder,f as default};
