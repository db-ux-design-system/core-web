import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./custom-select-Bqg9eJyw.js";import"./index-D2E5Z_bU.js";import"./iframe-D7o_mymi.js";import"./preload-helper-DYrPA5AR.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";import"./form-components-OaQ73I72.js";import"./button-DTf9InGf.js";import"./infotext-C4SWbymK.js";import"./input-Br3XDkR5.js";import"./tag-DvPX_ALl.js";import"./tooltip-CDF_xP-m.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,w={title:"Components/DBCustomSelect/Show No Result",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},o={args:{noResultsText:"Nothing found",label:"(Default) False",listLabel:"id-10250-(Default) False",options:[{value:"Option 1",id:"wc5wcgjam"},{value:"Option 2",id:"lx4cydggt"},{value:"Option 3",id:"lx3cydggt"},{value:"Option 4",id:"lx2cydggt"},{value:"Option 5",id:"lx1cydggt"}],showNoResults:!1,multiple:!0},render:l=>e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{...l})})},t={args:{noResultsText:"Nothing found",label:"True",listLabel:"id-10251-True",options:[{value:"Option 1",id:"waa0gfjab"},{value:"Option 2",id:"v48umf0qp"},{value:"Option 3",id:"v58umf0qp"},{value:"Option 4",id:"v68umf0qp"},{value:"Option 5",id:"v78umf0qp"}],showNoResults:!0,multiple:!0},render:l=>e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{...l})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "noResultsText": "Nothing found",
    "label": "(Default) False",
    "listLabel": "id-10250-(Default) False",
    "options": [{
      value: 'Option 1',
      id: 'wc5wcgjam'
    }, {
      value: 'Option 2',
      id: 'lx4cydggt'
    }, {
      value: 'Option 3',
      id: 'lx3cydggt'
    }, {
      value: 'Option 4',
      id: 'lx2cydggt'
    }, {
      value: 'Option 5',
      id: 'lx1cydggt'
    }],
    "showNoResults": false,
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "noResultsText": "Nothing found",
    "label": "True",
    "listLabel": "id-10251-True",
    "options": [{
      value: 'Option 1',
      id: 'waa0gfjab'
    }, {
      value: 'Option 2',
      id: 'v48umf0qp'
    }, {
      value: 'Option 3',
      id: 'v58umf0qp'
    }, {
      value: 'Option 4',
      id: 'v68umf0qp'
    }, {
      value: 'Option 5',
      id: 'v78umf0qp'
    }],
    "showNoResults": true,
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const O=["DefaultFalse","True"];export{o as DefaultFalse,t as True,O as __namedExportsOrder,w as default};
