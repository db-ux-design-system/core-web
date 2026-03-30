import{_ as n}from"./custom-select-C2fETa7H.js";import"./iframe-B8ME7r0t.js";import"./preload-helper-CQhCriSn.js";import"./constants-y2N5m1XS.js";import"./index-B4uakXIv.js";import"./document-scroll-listener-Di23ImBo.js";import"./floating-components-CKmcRn_b.js";import"./form-components-ARsDUAYg.js";import"./button-BuO9u3CJ.js";import"./infotext-CJ1sBB88.js";import"./input-f0VCdoc2.js";import"./tag-aQEVu0ox.js";import"./tooltip-BtS4CKXc.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,S={title:"Components/DBCustomSelect/Selected type",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:e(),onOptionSelected:e(),onDropdownToggle:e(),onSearch:e()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},o={args:{label:"(Default) Text",listLabel:"id-10247-(Default) Text",options:[{value:"Option 1",id:"d9n3d2z13"},{value:"Option 2",id:"vq1c6xw05"},{value:"Option 3",id:"73eppj8rp"},{value:"Option 4",id:"yy82mda4v"},{value:"Option 5",id:"yy82mda5v"}],multiple:!0,default:""},render:t=>({components:{DBCustomSelect:n},setup(){return{args:t}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${t.default}</DBCustomSelect></div>`})},l={args:{selectedType:"amount",label:"Amount",listLabel:"id-10248-Amount",options:[{value:"Option 1",id:"la3wbcr7z"},{value:"Option 2",id:"wz2u3a4q1"},{value:"Option 3",id:"fcd4tiqlr"},{value:"Option 4",id:"riz9ea0ox"},{value:"Option 5",id:"riz9ea1ox"}],multiple:!0,default:""},render:t=>({components:{DBCustomSelect:n},setup(){return{args:t}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${t.default}</DBCustomSelect></div>`})},a={args:{selectedType:"tag",label:"Tag",listLabel:"id-10249-Tag",options:[{value:"Option 1",id:"q23x2uflo"},{value:"Option 2",id:"au07iy2il"},{value:"Option 3",id:"ig0l3rruj"},{value:"Option 4",id:"4m2gbzu2q"},{value:"Option 5",id:"4m2gbzu3q"}],multiple:!0,default:""},render:t=>({components:{DBCustomSelect:n},setup(){return{args:t}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${t.default}</DBCustomSelect></div>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Text",
    "listLabel": "id-10247-(Default) Text",
    "options": [{
      value: 'Option 1',
      id: 'd9n3d2z13'
    }, {
      value: 'Option 2',
      id: 'vq1c6xw05'
    }, {
      value: 'Option 3',
      id: '73eppj8rp'
    }, {
      value: 'Option 4',
      id: 'yy82mda4v'
    }, {
      value: 'Option 5',
      id: 'yy82mda5v'
    }],
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "selectedType": "amount",
    "label": "Amount",
    "listLabel": "id-10248-Amount",
    "options": [{
      value: 'Option 1',
      id: 'la3wbcr7z'
    }, {
      value: 'Option 2',
      id: 'wz2u3a4q1'
    }, {
      value: 'Option 3',
      id: 'fcd4tiqlr'
    }, {
      value: 'Option 4',
      id: 'riz9ea0ox'
    }, {
      value: 'Option 5',
      id: 'riz9ea1ox'
    }],
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
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "selectedType": "tag",
    "label": "Tag",
    "listLabel": "id-10249-Tag",
    "options": [{
      value: 'Option 1',
      id: 'q23x2uflo'
    }, {
      value: 'Option 2',
      id: 'au07iy2il'
    }, {
      value: 'Option 3',
      id: 'ig0l3rruj'
    }, {
      value: 'Option 4',
      id: '4m2gbzu2q'
    }, {
      value: 'Option 5',
      id: '4m2gbzu3q'
    }],
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
}`,...a.parameters?.docs?.source}}};const f=["DefaultText","Amount","Tag"];export{l as Amount,o as DefaultText,a as Tag,f as __namedExportsOrder,S as default};
