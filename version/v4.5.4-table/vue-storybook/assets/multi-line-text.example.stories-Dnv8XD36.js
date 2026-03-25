import{_ as e}from"./infotext-ChOUO4Z5.js";import{_ as n}from"./custom-button-Ck4m2VdQ.js";import"./iframe-DfvinHPj.js";import"./preload-helper-eESElaRw.js";import"./index-COCtms_G.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBCustomButton/Multi Line Text",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},wrap:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{width:"full",default:'<button type="button"> Multi-line Text With Automatic Line Breaks </button>'},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<div  :style="{
  width: '300px'
}"  ><DBCustomButton v-bind="args"   >${t.default}</DBCustomButton></div>`})},a={args:{width:"full",default:`<label for="checkbox08"
  ><input type="checkbox" id="checkbox08" />
  Multi-line Text With Automatic Line Breaks
</label>`},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<div  :style="{
  width: '300px'
}"  ><DBCustomButton v-bind="args"   >${t.default}</DBCustomButton></div>`})},s={args:{width:"full",default:'<a href="#">Multi-line Text With Automatic Line Breaks</a>'},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<div  :style="{
  width: '300px'
}"  ><DBCustomButton v-bind="args"   >${t.default}</DBCustomButton></div>`})},u={args:{width:"full",icon:"x_placeholder",default:`<button type="button">
  Multi-line Text With Automatic Line Breaks and Icon
</button>`},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<div  :style="{
  width: '300px'
}"  ><DBCustomButton v-bind="args"   >${t.default}</DBCustomButton></div>`})},r={args:{width:"full",icon:"x_placeholder",default:`<label for="checkbox09"
  ><input type="checkbox" id="checkbox09" />
  Multi-line Text With Automatic Line Breaks and Icon
</label>`},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<div  :style="{
  width: '300px'
}"  ><DBCustomButton v-bind="args"   >${t.default}</DBCustomButton></div>`})},i={args:{width:"full",icon:"x_placeholder",default:'<a href="#"> Multi-line Text With Automatic Line Breaks and Icon </a>'},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<div  :style="{
  width: '300px'
}"  ><DBCustomButton v-bind="args"   >${t.default}</DBCustomButton></div>`})},l={args:{size:"small",default:`<button type="button">
  Button Small Multi-line Text With Automatic Line Breaks
</button>`},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<div  :style="{
  width: '300px'
}"  ><DBCustomButton v-bind="args"   >${t.default}</DBCustomButton></div>`})},c={args:{size:"small",default:`<label for="checkbox10"
  ><input type="checkbox" id="checkbox10" />
  Button Small Multi-line Text With Automatic Line Breaks
</label>`},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<div  :style="{
  width: '300px'
}"  ><DBCustomButton v-bind="args"   >${t.default}</DBCustomButton></div>`})},d={args:{size:"small",default:'<a href="#"> Button Small Multi-line Text With Automatic Line Breaks </a>'},render:t=>({components:{DBCustomButton:n,DBInfotext:e},setup(){return{args:t}},template:`<div  :style="{
  width: '300px'
}"  ><DBCustomButton v-bind="args"   >${t.default}</DBCustomButton></div>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "default": \`<button type="button"> Multi-line Text With Automatic Line Breaks </button>\`
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
  width: '300px'
}"  ><DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton></div>\`
  })
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "default": \`<label for="checkbox08"
  ><input type="checkbox" id="checkbox08" />
  Multi-line Text With Automatic Line Breaks
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
  width: '300px'
}"  ><DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton></div>\`
  })
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "default": \`<a href="#">Multi-line Text With Automatic Line Breaks</a>\`
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
  width: '300px'
}"  ><DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton></div>\`
  })
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "icon": "x_placeholder",
    "default": \`<button type="button">
  Multi-line Text With Automatic Line Breaks and Icon
</button>\`
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
  width: '300px'
}"  ><DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton></div>\`
  })
}`,...u.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "icon": "x_placeholder",
    "default": \`<label for="checkbox09"
  ><input type="checkbox" id="checkbox09" />
  Multi-line Text With Automatic Line Breaks and Icon
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
  width: '300px'
}"  ><DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton></div>\`
  })
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "icon": "x_placeholder",
    "default": \`<a href="#"> Multi-line Text With Automatic Line Breaks and Icon </a>\`
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
  width: '300px'
}"  ><DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton></div>\`
  })
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "default": \`<button type="button">
  Button Small Multi-line Text With Automatic Line Breaks
</button>\`
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
  width: '300px'
}"  ><DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton></div>\`
  })
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "default": \`<label for="checkbox10"
  ><input type="checkbox" id="checkbox10" />
  Button Small Multi-line Text With Automatic Line Breaks
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
  width: '300px'
}"  ><DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton></div>\`
  })
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "default": \`<a href="#"> Button Small Multi-line Text With Automatic Line Breaks </a>\`
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
  width: '300px'
}"  ><DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton></div>\`
  })
}`,...d.parameters?.docs?.source}}};const D=["AutomaticLineBreaksButton","AutomaticLineBreaksCheckbox","AutomaticLineBreaksLink","WithIconButton","WithIconCheckbox","WithIconLink","SmallButton","SmallCheckbox","SmallLink"];export{o as AutomaticLineBreaksButton,a as AutomaticLineBreaksCheckbox,s as AutomaticLineBreaksLink,l as SmallButton,c as SmallCheckbox,d as SmallLink,u as WithIconButton,r as WithIconCheckbox,i as WithIconLink,D as __namedExportsOrder,b as default};
