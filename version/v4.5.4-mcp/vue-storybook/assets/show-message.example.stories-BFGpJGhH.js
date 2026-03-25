import{_ as n}from"./custom-select-Cqlol1Bg.js";import"./iframe-BCs12wWX.js";import"./preload-helper-DP-VBuiN.js";import"./constants-y2N5m1XS.js";import"./index-BKv2R__d.js";import"./document-scroll-listener-Laohweyn.js";import"./floating-components-CKmcRn_b.js";import"./form-components-GjUgD7WQ.js";import"./button-BtX-Luhm.js";import"./infotext-DEy_PFUN.js";import"./input-Di3dht-u.js";import"./tag-DDw0w6ou.js";import"./tooltip-DFFzXfM1.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBCustomSelect/Show Message",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:t(),onOptionSelected:t(),onDropdownToggle:t(),onSearch:t()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},o={args:{message:"Helper Message",label:"(Default) False",listLabel:"id-10215-(Default) False",options:[{value:"Option 1",id:"m88qjifb3"},{value:"Option 2",id:"4et40d885"},{value:"Option 3",id:"4et40d884"},{value:"Option 4",id:"4et40d883"},{value:"Option 5",id:"4et40d882"}],showMessage:!1,default:""},render:e=>({components:{DBCustomSelect:n},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},l={args:{message:"Helper Message",label:"True",listLabel:"id-10216-True",options:[{value:"Option 1",id:"tm65in30k"},{value:"Option 2",id:"hujnrn5vk"},{value:"Option 3",id:"hujnrn4vk"},{value:"Option 4",id:"hujnrn3vk"},{value:"Option 5",id:"hujnrn2vk"}],showMessage:!0,default:""},render:e=>({components:{DBCustomSelect:n},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "message": "Helper Message",
    "label": "(Default) False",
    "listLabel": "id-10215-(Default) False",
    "options": [{
      value: 'Option 1',
      id: 'm88qjifb3'
    }, {
      value: 'Option 2',
      id: '4et40d885'
    }, {
      value: 'Option 3',
      id: '4et40d884'
    }, {
      value: 'Option 4',
      id: '4et40d883'
    }, {
      value: 'Option 5',
      id: '4et40d882'
    }],
    "showMessage": false,
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "message": "Helper Message",
    "label": "True",
    "listLabel": "id-10216-True",
    "options": [{
      value: 'Option 1',
      id: 'tm65in30k'
    }, {
      value: 'Option 2',
      id: 'hujnrn5vk'
    }, {
      value: 'Option 3',
      id: 'hujnrn4vk'
    }, {
      value: 'Option 4',
      id: 'hujnrn3vk'
    }, {
      value: 'Option 5',
      id: 'hujnrn2vk'
    }],
    "showMessage": true,
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
}`,...l.parameters?.docs?.source}}};const f=["DefaultFalse","True"];export{o as DefaultFalse,l as True,f as __namedExportsOrder,x as default};
