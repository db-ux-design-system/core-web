import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./custom-select-UQOz5BY-.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";import"./form-components-B5fJjToM.js";import"./button-DnZnbJNC.js";import"./infotext-CZi0xQss.js";import"./input-CZfMhmXc.js";import"./tag-Bwjb1ZJJ.js";import"./tooltip-COrPM-Vv.js";const{fn:T}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBCustomSelect/Example tags",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},o={args:{selectedType:"tag",label:"Tag grow",listLabel:"id-10271-Tag grow",options:[{value:"Option 1",id:"53xbfd1o6"},{value:"Option 2",id:"fq8ypeiz2"},{value:"Option 3",id:"jtd3wevz2"},{value:"Option 4",id:"srr1toi8f"},{value:"Option 5",id:"srr1toi7f"}],multiple:!0,removeTagsTexts:["Remove Option entry 1","Remove Option entry 2","Remove Option entry 3","Remove Option entry 4"]},render:l=>e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{...l})})},t={args:{selectedType:"tag",formFieldWidth:"auto",label:"Tag grow + auto",listLabel:"id-10272-Tag grow + auto",options:[{value:"Option 1",id:"jn3s5kl9t"},{value:"Option 2",id:"iesayujhy"},{value:"Option 3",id:"55kavoeem"},{value:"Option 4",id:"xi4qhrdg8"},{value:"Option 5",id:"xi4qhrdg7"}],multiple:!0},render:l=>e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{...l})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "selectedType": "tag",
    "label": "Tag grow",
    "listLabel": "id-10271-Tag grow",
    "options": [{
      value: 'Option 1',
      id: '53xbfd1o6'
    }, {
      value: 'Option 2',
      id: 'fq8ypeiz2'
    }, {
      value: 'Option 3',
      id: 'jtd3wevz2'
    }, {
      value: 'Option 4',
      id: 'srr1toi8f'
    }, {
      value: 'Option 5',
      id: 'srr1toi7f'
    }],
    "multiple": true,
    "removeTagsTexts": ['Remove Option entry 1', 'Remove Option entry 2', 'Remove Option entry 3', 'Remove Option entry 4']
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "selectedType": "tag",
    "formFieldWidth": "auto",
    "label": "Tag grow + auto",
    "listLabel": "id-10272-Tag grow + auto",
    "options": [{
      value: 'Option 1',
      id: 'jn3s5kl9t'
    }, {
      value: 'Option 2',
      id: 'iesayujhy'
    }, {
      value: 'Option 3',
      id: '55kavoeem'
    }, {
      value: 'Option 4',
      id: 'xi4qhrdg8'
    }, {
      value: 'Option 5',
      id: 'xi4qhrdg7'
    }],
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const w=["Taggrow","Taggrowauto"];export{o as Taggrow,t as Taggrowauto,w as __namedExportsOrder,h as default};
