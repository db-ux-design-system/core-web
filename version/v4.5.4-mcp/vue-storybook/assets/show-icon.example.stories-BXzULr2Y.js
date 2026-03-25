import{_ as n}from"./custom-select-Cqlol1Bg.js";import"./iframe-BCs12wWX.js";import"./preload-helper-DP-VBuiN.js";import"./constants-y2N5m1XS.js";import"./index-BKv2R__d.js";import"./document-scroll-listener-Laohweyn.js";import"./floating-components-CKmcRn_b.js";import"./form-components-GjUgD7WQ.js";import"./button-BtX-Luhm.js";import"./infotext-DEy_PFUN.js";import"./input-Di3dht-u.js";import"./tag-DDw0w6ou.js";import"./tooltip-DFFzXfM1.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBCustomSelect/Show Icon",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:e(),onOptionSelected:e(),onDropdownToggle:e(),onSearch:e()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},t={args:{icon:"x_placeholder",label:"(Default) False",listLabel:"id-10217-(Default) False",options:[{value:"Option 1",id:"637sjglg5"},{value:"Option 2",id:"s529jnpj0"},{value:"Option 3",id:"s429jnpj0"},{value:"Option 4",id:"s329jnpj0"},{value:"Option 5",id:"s229jnpj0"}],showIcon:!1,default:""},render:o=>({components:{DBCustomSelect:n},setup(){return{args:o}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${o.default}</DBCustomSelect></div>`})},l={args:{icon:"x_placeholder",label:"True",listLabel:"id-10218-True",options:[{value:"Option 1",id:"0b998bbgw"},{value:"Option 2",id:"a37n10lfh"},{value:"Option 3",id:"a47n10lfh"},{value:"Option 4",id:"a57n10lfh"},{value:"Option 5",id:"a67n10lfh"}],showIcon:!0,default:""},render:o=>({components:{DBCustomSelect:n},setup(){return{args:o}},template:`<div  :style="{
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
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const f=["DefaultFalse","True"];export{t as DefaultFalse,l as True,f as __namedExportsOrder,x as default};
