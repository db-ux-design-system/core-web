import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as i}from"./custom-select-CbPNCFjy.js";import"./index-D2E5Z_bU.js";import"./iframe-DwOpbq5K.js";import"./preload-helper-j823Xs5Z.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";import"./form-components-OaQ73I72.js";import"./button-B-LSsBs2.js";import"./infotext-DTRuL2Hl.js";import"./input-IRXaILc_.js";import"./tag-BOSvFPxM.js";import"./tooltip-DrU8665T.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,y={title:"Components/DBCustomSelect/Selected type",component:i,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:t(),onOptionSelected:t(),onDropdownToggle:t(),onSearch:t()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},l={args:{label:"(Default) Text",listLabel:"id-10247-(Default) Text",options:[{value:"Option 1",id:"d9n3d2z13"},{value:"Option 2",id:"vq1c6xw05"},{value:"Option 3",id:"73eppj8rp"},{value:"Option 4",id:"yy82mda4v"},{value:"Option 5",id:"yy82mda5v"}],multiple:!0},render:e=>o.jsx("div",{style:{width:"200px"},children:o.jsx(i,{...e})})},a={args:{selectedType:"amount",label:"Amount",listLabel:"id-10248-Amount",options:[{value:"Option 1",id:"la3wbcr7z"},{value:"Option 2",id:"wz2u3a4q1"},{value:"Option 3",id:"fcd4tiqlr"},{value:"Option 4",id:"riz9ea0ox"},{value:"Option 5",id:"riz9ea1ox"}],multiple:!0},render:e=>o.jsx("div",{style:{width:"200px"},children:o.jsx(i,{...e})})},n={args:{selectedType:"tag",label:"Tag",listLabel:"id-10249-Tag",options:[{value:"Option 1",id:"q23x2uflo"},{value:"Option 2",id:"au07iy2il"},{value:"Option 3",id:"ig0l3rruj"},{value:"Option 4",id:"4m2gbzu2q"},{value:"Option 5",id:"4m2gbzu3q"}],multiple:!0},render:e=>o.jsx("div",{style:{width:"200px"},children:o.jsx(i,{...e})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const w=["DefaultText","Amount","Tag"];export{a as Amount,l as DefaultText,n as Tag,w as __namedExportsOrder,y as default};
