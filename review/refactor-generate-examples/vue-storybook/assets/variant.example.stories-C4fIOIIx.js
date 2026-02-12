import{_ as l}from"./custom-select-BOFAG810.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./document-scroll-listener-sPooixGf.js";import"./floating-components-1F_x7pmN.js";import"./form-components-DotznFsp.js";import"./button-BND3SCu0.js";import"./infotext-tCTmoIyB.js";import"./input-DCt77RAB.js";import"./tag-mPlBKPvT.js";import"./tooltip-bsw76Umn.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,y={title:"Components/DBCustomSelect/Variant",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},o={args:{label:"(Default) Above",listLabel:"id-10211-(Default) Above",options:[{value:"Option 1",id:"4lj8zr5b1"},{value:"Option 2",id:"uurfm7y2y"},{value:"Option 3",id:"uurfm7y3y"},{value:"Option 4",id:"uurfm7y4y"},{value:"Option 5",id:"uurfm7y5y"}],default:""},render:t=>({components:{DBCustomSelect:l},setup(){return{args:t}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${t.default}</DBCustomSelect></div>`})},e={args:{variant:"floating",label:"Floating",listLabel:"id-10212-Floating",options:[{value:"Option 1",id:"otbjunoyx"},{value:"Option 2",id:"ju53v02yg"},{value:"Option 3",id:"ju53v03yg"},{value:"Option 4",id:"ju53v04yg"},{value:"Option 5",id:"ju53v05yg"}],default:""},render:t=>({components:{DBCustomSelect:l},setup(){return{args:t}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${t.default}</DBCustomSelect></div>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Above",
    "listLabel": "id-10211-(Default) Above",
    "options": [{
      value: 'Option 1',
      id: '4lj8zr5b1'
    }, {
      value: 'Option 2',
      id: 'uurfm7y2y'
    }, {
      value: 'Option 3',
      id: 'uurfm7y3y'
    }, {
      value: 'Option 4',
      id: 'uurfm7y4y'
    }, {
      value: 'Option 5',
      id: 'uurfm7y5y'
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
    "label": "Floating",
    "listLabel": "id-10212-Floating",
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
}`,...e.parameters?.docs?.source}}};const f=["DefaultAbove","Floating"];export{o as DefaultAbove,e as Floating,f as __namedExportsOrder,y as default};
