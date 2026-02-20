import{_ as l}from"./custom-select-BMy9YBSU.js";import"./iframe-Dm7pPs7s.js";import"./preload-helper-Cogb-lJ0.js";import"./constants-BMPlMwqI.js";import"./index-DPPzDY5H.js";import"./document-scroll-listener-D4-lwbso.js";import"./floating-components-1F_x7pmN.js";import"./form-components-DoUJrVbo.js";import"./button-DhdZ4eH3.js";import"./infotext-DcJ0axcy.js";import"./input-BO2A7Itz.js";import"./tag-BVDGzCQz.js";import"./tooltip-OdktVzU9.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,y={title:"Components/DBCustomSelect/Examples Floating label",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},o={args:{variant:"floating",label:"Floating",listLabel:"id-10300-Floating",options:[{value:"Option 1",id:"otbjunoyx"},{value:"Option 2",id:"ju53v02yg"},{value:"Option 3",id:"ju53v03yg"},{value:"Option 4",id:"ju53v04yg"},{value:"Option 5",id:"ju53v05yg"}],default:""},render:t=>({components:{DBCustomSelect:l},setup(){return{args:t}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${t.default}</DBCustomSelect></div>`})},e={args:{variant:"floating",validation:"invalid",invalidMessage:"Invalid Message",label:"Floating",listLabel:"id-10301-Floating",options:[{value:"Option 1",id:"otbjunoyx"},{value:"Option 2",id:"ju53v02yg"},{value:"Option 3",id:"ju53v03yg"},{value:"Option 4",id:"ju53v04yg"},{value:"Option 5",id:"ju53v05yg"}],default:""},render:t=>({components:{DBCustomSelect:l},setup(){return{args:t}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${t.default}</DBCustomSelect></div>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "floating",
    "label": "Floating",
    "listLabel": "id-10300-Floating",
    "options": [{
      value: 'Option 1',
      id: 'otbjunoyx'
    }, {
      value: 'Option 2',
      id: 'ju53v02yg'
    }, {
      value: 'Option 3',
      id: 'ju53v03yg'
    }, {
      value: 'Option 4',
      id: 'ju53v04yg'
    }, {
      value: 'Option 5',
      id: 'ju53v05yg'
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "floating",
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "label": "Floating",
    "listLabel": "id-10301-Floating",
    "options": [{
      value: 'Option 1',
      id: 'otbjunoyx'
    }, {
      value: 'Option 2',
      id: 'ju53v02yg'
    }, {
      value: 'Option 3',
      id: 'ju53v03yg'
    }, {
      value: 'Option 4',
      id: 'ju53v04yg'
    }, {
      value: 'Option 5',
      id: 'ju53v05yg'
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...e.parameters?.docs?.source}}};const O=["Floating","FloatingInvalidMessage"];export{o as Floating,e as FloatingInvalidMessage,O as __namedExportsOrder,y as default};
