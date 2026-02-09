import{_ as l}from"./custom-select-CASOXR0w.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./button-YbkVn8kv.js";import"./infotext-C1MSMu4c.js";import"./input-CODHB90g.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBCustomSelect/Form Field Width",component:l,render:e=>({components:{DBCustomSelect:l},setup(){return{args:e}},template:`
      <DBCustomSelect v-bind="args">
      ${e.default}
      </DBCustomSelect>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"text"},variant:{control:"text"},values:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},formFieldWidth:{control:"text"},dropdownWidth:{control:"text"},placement:{control:"text"},selectedType:{control:"text"},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"text"},searchValue:{control:"text"},selectedLabels:{control:"text"},transformSelectedLabels:{control:"text"},searchFilter:{control:"text"}}},t={args:{default:"",options:[{value:"Option 1",id:"z0ispy7ls"},{value:"Option 2",id:"ngl1p4pxn"},{value:"Option 3",id:"ngl1p3pxn"},{value:"Option 4",id:"ngl1p2pxn"},{value:"Option 5",id:"ngl1p1pxn"}],label:"(Default) Full",formFieldWidth:"full",listLabel:"id-10223-(Default) Full"},decorators:[()=>({template:'<div style="  width:400px"><story /></div>'})]},o={args:{default:"",options:[{value:"Option 1",id:"klxyvobwn"},{value:"Option 2",id:"7oag2a4fj"},{value:"Option 3",id:"7oag2a3fj"},{value:"Option 4",id:"7oag2a2fj"},{value:"Option 5",id:"7oag2a1fj"}],label:"Auto",formFieldWidth:"auto",listLabel:"id-10224-Auto"},decorators:[()=>({template:'<div style="  width:400px"><story /></div>'})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      value: 'Option 1',
      id: 'z0ispy7ls'
    }, {
      value: 'Option 2',
      id: 'ngl1p4pxn'
    }, {
      value: 'Option 3',
      id: 'ngl1p3pxn'
    }, {
      value: 'Option 4',
      id: 'ngl1p2pxn'
    }, {
      value: 'Option 5',
      id: 'ngl1p1pxn'
    }],
    "label": "(Default) Full",
    "formFieldWidth": "full",
    "listLabel": "id-10223-(Default) Full"
  },
  decorators: [() => ({
    template: \`<div style="  width:400px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      value: 'Option 1',
      id: 'klxyvobwn'
    }, {
      value: 'Option 2',
      id: '7oag2a4fj'
    }, {
      value: 'Option 3',
      id: '7oag2a3fj'
    }, {
      value: 'Option 4',
      id: '7oag2a2fj'
    }, {
      value: 'Option 5',
      id: '7oag2a1fj'
    }],
    "label": "Auto",
    "formFieldWidth": "auto",
    "listLabel": "id-10224-Auto"
  },
  decorators: [() => ({
    template: \`<div style="  width:400px"><story /></div>\`
  })]
}`,...o.parameters?.docs?.source}}};const v=["DefaultFull","Auto"];export{o as Auto,t as DefaultFull,v as __namedExportsOrder,x as default};
