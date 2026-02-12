import{_ as l}from"./custom-select-BOFAG810.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./document-scroll-listener-sPooixGf.js";import"./floating-components-1F_x7pmN.js";import"./form-components-DotznFsp.js";import"./button-BND3SCu0.js";import"./infotext-tCTmoIyB.js";import"./input-DCt77RAB.js";import"./tag-mPlBKPvT.js";import"./tooltip-bsw76Umn.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBCustomSelect/Show Icon",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},t={args:{icon:"x_placeholder",label:"(Default) False",listLabel:"id-10217-(Default) False",options:[{value:"Option 1",id:"637sjglg5"},{value:"Option 2",id:"s529jnpj0"},{value:"Option 3",id:"s429jnpj0"},{value:"Option 4",id:"s329jnpj0"},{value:"Option 5",id:"s229jnpj0"}],showIcon:!1,default:""},render:o=>({components:{DBCustomSelect:l},setup(){return{args:o}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${o.default}</DBCustomSelect></div>`})},e={args:{icon:"x_placeholder",label:"True",listLabel:"id-10218-True",options:[{value:"Option 1",id:"0b998bbgw"},{value:"Option 2",id:"a37n10lfh"},{value:"Option 3",id:"a47n10lfh"},{value:"Option 4",id:"a57n10lfh"},{value:"Option 5",id:"a67n10lfh"}],showIcon:!0,default:""},render:o=>({components:{DBCustomSelect:l},setup(){return{args:o}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${o.default}</DBCustomSelect></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "label": "(Default) False",
    "listLabel": "id-10217-(Default) False",
    "options": [{
      value: 'Option 1',
      id: '637sjglg5'
    }, {
      value: 'Option 2',
      id: 's529jnpj0'
    }, {
      value: 'Option 3',
      id: 's429jnpj0'
    }, {
      value: 'Option 4',
      id: 's329jnpj0'
    }, {
      value: 'Option 5',
      id: 's229jnpj0'
    }],
    "showIcon": false,
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
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "label": "True",
    "listLabel": "id-10218-True",
    "options": [{
      value: 'Option 1',
      id: '0b998bbgw'
    }, {
      value: 'Option 2',
      id: 'a37n10lfh'
    }, {
      value: 'Option 3',
      id: 'a47n10lfh'
    }, {
      value: 'Option 4',
      id: 'a57n10lfh'
    }, {
      value: 'Option 5',
      id: 'a67n10lfh'
    }],
    "showIcon": true,
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
}`,...e.parameters?.docs?.source}}};const g=["DefaultFalse","True"];export{t as DefaultFalse,e as True,g as __namedExportsOrder,f as default};
