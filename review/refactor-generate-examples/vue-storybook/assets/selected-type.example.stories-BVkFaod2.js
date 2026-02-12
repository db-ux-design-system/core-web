import{_ as a}from"./custom-select-BOFAG810.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./document-scroll-listener-sPooixGf.js";import"./floating-components-1F_x7pmN.js";import"./form-components-DotznFsp.js";import"./button-BND3SCu0.js";import"./infotext-tCTmoIyB.js";import"./input-DCt77RAB.js";import"./tag-mPlBKPvT.js";import"./tooltip-bsw76Umn.js";const{fn:O}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBCustomSelect/Selected type",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},e={args:{label:"(Default) Text",listLabel:"id-10247-(Default) Text",options:[{value:"Option 1",id:"d9n3d2z13"},{value:"Option 2",id:"vq1c6xw05"},{value:"Option 3",id:"73eppj8rp"},{value:"Option 4",id:"yy82mda4v"},{value:"Option 5",id:"yy82mda5v"}],multiple:!0,default:""},render:t=>({components:{DBCustomSelect:a},setup(){return{args:t}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${t.default}</DBCustomSelect></div>`})},o={args:{selectedType:"amount",label:"Amount",listLabel:"id-10248-Amount",options:[{value:"Option 1",id:"la3wbcr7z"},{value:"Option 2",id:"wz2u3a4q1"},{value:"Option 3",id:"fcd4tiqlr"},{value:"Option 4",id:"riz9ea0ox"},{value:"Option 5",id:"riz9ea1ox"}],multiple:!0,default:""},render:t=>({components:{DBCustomSelect:a},setup(){return{args:t}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${t.default}</DBCustomSelect></div>`})},l={args:{selectedType:"tag",label:"Tag",listLabel:"id-10249-Tag",options:[{value:"Option 1",id:"q23x2uflo"},{value:"Option 2",id:"au07iy2il"},{value:"Option 3",id:"ig0l3rruj"},{value:"Option 4",id:"4m2gbzu2q"},{value:"Option 5",id:"4m2gbzu3q"}],multiple:!0,default:""},render:t=>({components:{DBCustomSelect:a},setup(){return{args:t}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${t.default}</DBCustomSelect></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const S=["DefaultText","Amount","Tag"];export{o as Amount,e as DefaultText,l as Tag,S as __namedExportsOrder,f as default};
