import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./custom-select-CvhyYO0x.js";import"./index-D2E5Z_bU.js";import"./iframe-DoczXm3P.js";import"./preload-helper-Bhe8V244.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";import"./form-components-OaQ73I72.js";import"./button-CBczwwny.js";import"./infotext-Ckkrk1SX.js";import"./input-I3DwscqV.js";import"./tag-Ca4GkMX_.js";import"./tooltip-1BO_nxdV.js";const{fn:w}=__STORYBOOK_MODULE_TEST__,O={title:"Components/DBCustomSelect/Show Select All",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},e={args:{selectAllLabel:"Select all",label:"(Default) False",listLabel:"id-10256-(Default) False",options:[{value:"Option 1",id:"p6l2dpiea"},{value:"Option 2",id:"jh7pczno4"},{value:"Option 3",id:"jh7pczno5"},{value:"Option 4",id:"jh7pczno6"},{value:"Option 5",id:"jh7pczno7"},{value:"Option 6",id:"jh7pczno8"}],showSelectAll:!1,multiple:!0},render:l=>t.jsx("div",{style:{width:"200px"},children:t.jsx(r,{...l})})},o={args:{selectAllLabel:"Select all",label:"True",listLabel:"id-10257-True",options:[{value:"Option 1",id:"zcim85pqg"},{value:"Option 2",id:"kg6gvbwru"},{value:"Option 3",id:"kg5gvbwru"},{value:"Option 4",id:"kg4gvbwru"},{value:"Option 5",id:"kg3gvbwru"}],showSelectAll:!0,multiple:!0},render:l=>t.jsx("div",{style:{width:"200px"},children:t.jsx(r,{...l})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "selectAllLabel": "Select all",
    "label": "(Default) False",
    "listLabel": "id-10256-(Default) False",
    "options": [{
      value: 'Option 1',
      id: 'p6l2dpiea'
    }, {
      value: 'Option 2',
      id: 'jh7pczno4'
    }, {
      value: 'Option 3',
      id: 'jh7pczno5'
    }, {
      value: 'Option 4',
      id: 'jh7pczno6'
    }, {
      value: 'Option 5',
      id: 'jh7pczno7'
    }, {
      value: 'Option 6',
      id: 'jh7pczno8'
    }],
    "showSelectAll": false,
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "selectAllLabel": "Select all",
    "label": "True",
    "listLabel": "id-10257-True",
    "options": [{
      value: 'Option 1',
      id: 'zcim85pqg'
    }, {
      value: 'Option 2',
      id: 'kg6gvbwru'
    }, {
      value: 'Option 3',
      id: 'kg5gvbwru'
    }, {
      value: 'Option 4',
      id: 'kg4gvbwru'
    }, {
      value: 'Option 5',
      id: 'kg3gvbwru'
    }],
    "showSelectAll": true,
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...o.parameters?.docs?.source}}};const S=["DefaultFalse","True"];export{e as DefaultFalse,o as True,S as __namedExportsOrder,O as default};
