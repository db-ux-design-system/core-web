import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./custom-select-DI3iW4sT.js";import"./index-D2E5Z_bU.js";import"./iframe-D0Rqs9UN.js";import"./preload-helper-aOBw0osJ.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";import"./form-components-OaQ73I72.js";import"./button-Cu1m3lzY.js";import"./infotext-CU95Uxoe.js";import"./input-VyrwQKeh.js";import"./tag-tdeJGuWp.js";import"./tooltip-CI3b2rGR.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,C={title:"Components/DBCustomSelect/Example: Other configuration",component:t,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:l(),onOptionSelected:l(),onDropdownToggle:l(),onSearch:l()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},a={args:{searchValue:"1",searchLabel:"Search",label:"Search Value",listLabel:"id-10as4-Search Value",options:[{value:"Option 1",id:"09nursdao"},{value:"Option 2",id:"74n9csdc14"},{value:"Option 3",id:"64n9csdc14"},{value:"Option 4",id:"54n9csdc14"},{value:"Option 5",id:"44n9csdc14"}],showSearch:!0,multiple:!0},render:o=>e.jsx("div",{style:{width:"200px"},children:e.jsx(t,{...o})})},c={args:{selectedLabels:"Selected: Label controlled",label:"Custom Selected Label",listLabel:"id-10aasds4-Custom Selected Label",options:[{value:"Option 1",id:"09nurdscsdao"},{value:"Option 2",id:"74n9ccsddc14"},{value:"Option 3",id:"73n9ccsddc14"},{value:"Option 4",id:"72n9ccsddc14"},{value:"Option 5",id:"71n9ccsddc14"}]},render:o=>e.jsx("div",{style:{width:"200px"},children:e.jsx(t,{...o})})},s={args:{label:"Transform Selected Label",listLabel:"id-10aasds4-Transform Selected Label",options:[{value:"Option 1",id:"09nurdscsdao"},{value:"Option 2",id:"74n9ccsddc14"},{value:"Option 3",id:"73n9ccsddc14"},{value:"Option 4",id:"72n9ccsddc14"},{value:"Option 5",id:"71n9ccsddc14"}]},render:o=>e.jsx("div",{style:{width:"200px"},children:e.jsx(t,{...o})})},n={args:{label:"Custom Search Filter",listLabel:"id-10aasds4-Custom Search Filter",options:[{value:"Option 1",id:"09nurdscsdao"},{value:"Option 2",id:"74n9ccsddc14"},{value:"Option 3",id:"73n9ccsddc14"},{value:"Option 4",id:"72n9ccsddc14"},{value:"Option 5",id:"71n9ccsddc14"}]},render:o=>e.jsx("div",{style:{width:"200px"},children:e.jsx(t,{...o})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "searchValue": "1",
    "searchLabel": "Search",
    "label": "Search Value",
    "listLabel": "id-10as4-Search Value",
    "options": [{
      value: 'Option 1',
      id: '09nursdao'
    }, {
      value: 'Option 2',
      id: '74n9csdc14'
    }, {
      value: 'Option 3',
      id: '64n9csdc14'
    }, {
      value: 'Option 4',
      id: '54n9csdc14'
    }, {
      value: 'Option 5',
      id: '44n9csdc14'
    }],
    "showSearch": true,
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "selectedLabels": "Selected: Label controlled",
    "label": "Custom Selected Label",
    "listLabel": "id-10aasds4-Custom Selected Label",
    "options": [{
      value: 'Option 1',
      id: '09nurdscsdao'
    }, {
      value: 'Option 2',
      id: '74n9ccsddc14'
    }, {
      value: 'Option 3',
      id: '73n9ccsddc14'
    }, {
      value: 'Option 4',
      id: '72n9ccsddc14'
    }, {
      value: 'Option 5',
      id: '71n9ccsddc14'
    }]
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Transform Selected Label",
    "listLabel": "id-10aasds4-Transform Selected Label",
    "options": [{
      value: 'Option 1',
      id: '09nurdscsdao'
    }, {
      value: 'Option 2',
      id: '74n9ccsddc14'
    }, {
      value: 'Option 3',
      id: '73n9ccsddc14'
    }, {
      value: 'Option 4',
      id: '72n9ccsddc14'
    }, {
      value: 'Option 5',
      id: '71n9ccsddc14'
    }]
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Custom Search Filter",
    "listLabel": "id-10aasds4-Custom Search Filter",
    "options": [{
      value: 'Option 1',
      id: '09nurdscsdao'
    }, {
      value: 'Option 2',
      id: '74n9ccsddc14'
    }, {
      value: 'Option 3',
      id: '73n9ccsddc14'
    }, {
      value: 'Option 4',
      id: '72n9ccsddc14'
    }, {
      value: 'Option 5',
      id: '71n9ccsddc14'
    }]
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...n.parameters?.docs?.source}}};const w=["SearchValue","CustomSelectedLabel","TransformSelectedLabel","CustomSearchFilter"];export{n as CustomSearchFilter,c as CustomSelectedLabel,a as SearchValue,s as TransformSelectedLabel,w as __namedExportsOrder,C as default};
