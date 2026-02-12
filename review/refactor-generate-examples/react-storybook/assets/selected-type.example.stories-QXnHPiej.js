import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as i}from"./custom-select-UQOz5BY-.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";import"./form-components-B5fJjToM.js";import"./button-DnZnbJNC.js";import"./infotext-CZi0xQss.js";import"./input-CZfMhmXc.js";import"./tag-Bwjb1ZJJ.js";import"./tooltip-COrPM-Vv.js";const{fn:T}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBCustomSelect/Selected type",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},o={args:{label:"(Default) Text",listLabel:"id-10247-(Default) Text",options:[{value:"Option 1",id:"d9n3d2z13"},{value:"Option 2",id:"vq1c6xw05"},{value:"Option 3",id:"73eppj8rp"},{value:"Option 4",id:"yy82mda4v"},{value:"Option 5",id:"yy82mda5v"}],multiple:!0},render:t=>e.jsx("div",{style:{width:"200px"},children:e.jsx(i,{...t})})},l={args:{selectedType:"amount",label:"Amount",listLabel:"id-10248-Amount",options:[{value:"Option 1",id:"la3wbcr7z"},{value:"Option 2",id:"wz2u3a4q1"},{value:"Option 3",id:"fcd4tiqlr"},{value:"Option 4",id:"riz9ea0ox"},{value:"Option 5",id:"riz9ea1ox"}],multiple:!0},render:t=>e.jsx("div",{style:{width:"200px"},children:e.jsx(i,{...t})})},a={args:{selectedType:"tag",label:"Tag",listLabel:"id-10249-Tag",options:[{value:"Option 1",id:"q23x2uflo"},{value:"Option 2",id:"au07iy2il"},{value:"Option 3",id:"ig0l3rruj"},{value:"Option 4",id:"4m2gbzu2q"},{value:"Option 5",id:"4m2gbzu3q"}],multiple:!0},render:t=>e.jsx("div",{style:{width:"200px"},children:e.jsx(i,{...t})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
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
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
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
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...a.parameters?.docs?.source}}};const w=["DefaultText","Amount","Tag"];export{l as Amount,o as DefaultText,a as Tag,w as __namedExportsOrder,h as default};
