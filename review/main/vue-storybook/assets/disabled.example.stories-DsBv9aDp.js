import{_ as l}from"./custom-select-CTcQqpgt.js";import"./iframe-B6hTjfhj.js";import"./preload-helper-Cogb-lJ0.js";import"./constants-BMPlMwqI.js";import"./index-CwT0vXlV.js";import"./document-scroll-listener-D7KIqgN2.js";import"./floating-components-1F_x7pmN.js";import"./form-components-Be1GwWp5.js";import"./button-DTuqVoCz.js";import"./infotext-CC6PSz52.js";import"./input-O6WOxt5d.js";import"./tag-5ov0rtJG.js";import"./tooltip-sbXPob43.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBCustomSelect/Disabled",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},e={args:{label:"(Default) False",listLabel:"id-10221-(Default) False",options:[{value:"Option 1",id:"dlysh2quv"},{value:"Option 2",id:"ygm3c9msn"},{value:"Option 3",id:"ygm4c9msn"},{value:"Option 4",id:"ygm5c9msn"},{value:"Option 5",id:"ygm6c9msn"}],multiple:!0,disabled:!1,default:""},render:t=>({components:{DBCustomSelect:l},setup(){return{args:t}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${t.default}</DBCustomSelect></div>`})},o={args:{label:"True",listLabel:"id-10222-True",options:[{value:"Option 1",id:"z445a00hf"},{value:"Option 2",id:"wji97jfsg"},{value:"Option 3",id:"wji96jfsg"},{value:"Option 4",id:"wji95jfsg"},{value:"Option 5",id:"wji94jfsg"}],disabled:!0,multiple:!0,default:""},render:t=>({components:{DBCustomSelect:l},setup(){return{args:t}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${t.default}</DBCustomSelect></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) False",
    "listLabel": "id-10221-(Default) False",
    "options": [{
      value: 'Option 1',
      id: 'dlysh2quv'
    }, {
      value: 'Option 2',
      id: 'ygm3c9msn'
    }, {
      value: 'Option 3',
      id: 'ygm4c9msn'
    }, {
      value: 'Option 4',
      id: 'ygm5c9msn'
    }, {
      value: 'Option 5',
      id: 'ygm6c9msn'
    }],
    "multiple": true,
    "disabled": false,
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
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "True",
    "listLabel": "id-10222-True",
    "options": [{
      value: 'Option 1',
      id: 'z445a00hf'
    }, {
      value: 'Option 2',
      id: 'wji97jfsg'
    }, {
      value: 'Option 3',
      id: 'wji96jfsg'
    }, {
      value: 'Option 4',
      id: 'wji95jfsg'
    }, {
      value: 'Option 5',
      id: 'wji94jfsg'
    }],
    "disabled": true,
    "multiple": true,
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
}`,...o.parameters?.docs?.source}}};const h=["DefaultFalse","True"];export{e as DefaultFalse,o as True,h as __namedExportsOrder,x as default};
