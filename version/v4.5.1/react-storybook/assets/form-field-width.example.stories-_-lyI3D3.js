import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./custom-select-Bqg9eJyw.js";import"./index-D2E5Z_bU.js";import"./iframe-D7o_mymi.js";import"./preload-helper-DYrPA5AR.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";import"./form-components-OaQ73I72.js";import"./button-DTf9InGf.js";import"./infotext-C4SWbymK.js";import"./input-Br3XDkR5.js";import"./tag-DvPX_ALl.js";import"./tooltip-CDF_xP-m.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,O={title:"Components/DBCustomSelect/Form Field Width",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},o={args:{label:"(Default) Full",formFieldWidth:"full",listLabel:"id-10223-(Default) Full",options:[{value:"Option 1",id:"z0ispy7ls"},{value:"Option 2",id:"ngl1p4pxn"},{value:"Option 3",id:"ngl1p3pxn"},{value:"Option 4",id:"ngl1p2pxn"},{value:"Option 5",id:"ngl1p1pxn"}]},render:l=>e.jsx("div",{style:{width:"400px"},children:e.jsx(n,{...l})})},t={args:{label:"Auto",formFieldWidth:"auto",listLabel:"id-10224-Auto",options:[{value:"Option 1",id:"klxyvobwn"},{value:"Option 2",id:"7oag2a4fj"},{value:"Option 3",id:"7oag2a3fj"},{value:"Option 4",id:"7oag2a2fj"},{value:"Option 5",id:"7oag2a1fj"}]},render:l=>e.jsx("div",{style:{width:"400px"},children:e.jsx(n,{...l})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Full",
    "formFieldWidth": "full",
    "listLabel": "id-10223-(Default) Full",
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
    }]
  },
  render: (properties: any) => <div style={{
    width: '400px'
  }}><DBCustomSelect {...properties} /></div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Auto",
    "formFieldWidth": "auto",
    "listLabel": "id-10224-Auto",
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
    }]
  },
  render: (properties: any) => <div style={{
    width: '400px'
  }}><DBCustomSelect {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const j=["DefaultFull","Auto"];export{t as Auto,o as DefaultFull,j as __namedExportsOrder,O as default};
