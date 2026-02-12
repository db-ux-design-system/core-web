import{_ as l}from"./custom-select-BOFAG810.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./document-scroll-listener-sPooixGf.js";import"./floating-components-1F_x7pmN.js";import"./form-components-DotznFsp.js";import"./button-BND3SCu0.js";import"./infotext-tCTmoIyB.js";import"./input-DCt77RAB.js";import"./tag-mPlBKPvT.js";import"./tooltip-bsw76Umn.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,w={title:"Components/DBCustomSelect/Show Required Asterisk",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},t={args:{label:"(Default) True",listLabel:"id-1021s9-(Default) True",options:[{value:"Option 1",id:"drpxs8im88"},{value:"Option 2",id:"211ed6zox5"},{value:"Option 3",id:"211ed6zox4"},{value:"Option 4",id:"211ed6zox3"},{value:"Option 5",id:"211ed6zox2"}],multiple:!0,required:!0,showRequiredAsterisk:!0,default:""},render:e=>({components:{DBCustomSelect:l},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},o={args:{label:"False",listLabel:"id-10s220-False",options:[{value:"Option 1",id:"2v0zfw8afc"},{value:"Option 2",id:"30830f8w5z"},{value:"Option 3",id:"30830f8w4z"},{value:"Option 4",id:"30830f8w3z"},{value:"Option 5",id:"30830f8w2z"}],required:!0,showRequiredAsterisk:!1,multiple:!0,default:""},render:e=>({components:{DBCustomSelect:l},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) True",
    "listLabel": "id-1021s9-(Default) True",
    "options": [{
      value: 'Option 1',
      id: 'drpxs8im88'
    }, {
      value: 'Option 2',
      id: '211ed6zox5'
    }, {
      value: 'Option 3',
      id: '211ed6zox4'
    }, {
      value: 'Option 4',
      id: '211ed6zox3'
    }, {
      value: 'Option 5',
      id: '211ed6zox2'
    }],
    "multiple": true,
    "required": true,
    "showRequiredAsterisk": true,
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "False",
    "listLabel": "id-10s220-False",
    "options": [{
      value: 'Option 1',
      id: '2v0zfw8afc'
    }, {
      value: 'Option 2',
      id: '30830f8w5z'
    }, {
      value: 'Option 3',
      id: '30830f8w4z'
    }, {
      value: 'Option 4',
      id: '30830f8w3z'
    }, {
      value: 'Option 5',
      id: '30830f8w2z'
    }],
    "required": true,
    "showRequiredAsterisk": false,
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
}`,...o.parameters?.docs?.source}}};const h=["DefaultTrue","False"];export{t as DefaultTrue,o as False,h as __namedExportsOrder,w as default};
