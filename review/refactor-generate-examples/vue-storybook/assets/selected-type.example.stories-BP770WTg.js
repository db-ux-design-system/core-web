import{_ as a}from"./custom-select-CASOXR0w.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./button-YbkVn8kv.js";import"./infotext-C1MSMu4c.js";import"./input-CODHB90g.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBCustomSelect/Selected type",component:a,render:l=>({components:{DBCustomSelect:a},setup(){return{args:l}},template:`
      <DBCustomSelect v-bind="args">
      ${l.default}
      </DBCustomSelect>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"text"},variant:{control:"text"},values:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},formFieldWidth:{control:"text"},dropdownWidth:{control:"text"},placement:{control:"text"},selectedType:{control:"text"},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"text"},searchValue:{control:"text"},selectedLabels:{control:"text"},transformSelectedLabels:{control:"text"},searchFilter:{control:"text"}}},t={args:{default:"",options:[{value:"Option 1",id:"d9n3d2z13"},{value:"Option 2",id:"vq1c6xw05"},{value:"Option 3",id:"73eppj8rp"},{value:"Option 4",id:"yy82mda4v"},{value:"Option 5",id:"yy82mda5v"}],multiple:!0,label:"(Default) Text",listLabel:"id-10247-(Default) Text"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]},e={args:{default:"",options:[{value:"Option 1",id:"la3wbcr7z"},{value:"Option 2",id:"wz2u3a4q1"},{value:"Option 3",id:"fcd4tiqlr"},{value:"Option 4",id:"riz9ea0ox"},{value:"Option 5",id:"riz9ea1ox"}],multiple:!0,selectedType:"amount",label:"Amount",listLabel:"id-10248-Amount"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]},o={args:{default:"",options:[{value:"Option 1",id:"q23x2uflo"},{value:"Option 2",id:"au07iy2il"},{value:"Option 3",id:"ig0l3rruj"},{value:"Option 4",id:"4m2gbzu2q"},{value:"Option 5",id:"4m2gbzu3q"}],multiple:!0,selectedType:"tag",label:"Tag",listLabel:"id-10249-Tag"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
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
    "label": "(Default) Text",
    "listLabel": "id-10247-(Default) Text"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
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
    "selectedType": "amount",
    "label": "Amount",
    "listLabel": "id-10248-Amount"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
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
    "selectedType": "tag",
    "label": "Tag",
    "listLabel": "id-10249-Tag"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...o.parameters?.docs?.source}}};const b=["DefaultText","Amount","Tag"];export{e as Amount,t as DefaultText,o as Tag,b as __namedExportsOrder,x as default};
