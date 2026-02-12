import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as e}from"./custom-select-UQOz5BY-.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";import"./form-components-B5fJjToM.js";import"./button-DnZnbJNC.js";import"./infotext-CZi0xQss.js";import"./input-CZfMhmXc.js";import"./tag-Bwjb1ZJJ.js";import"./tooltip-COrPM-Vv.js";const{fn:j}=__STORYBOOK_MODULE_TEST__,S={title:"Components/DBCustomSelect/Placement",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},i={args:{label:"(Default) Bottom",formFieldWidth:"full",placement:"bottom",listLabel:"id-10238-(Default) Bottom",options:[{value:"Option 1",id:"aryeycu23"},{value:"Option 2",id:"qrf3x6gdq"},{value:"Option 3",id:"qrf4x6gdq"},{value:"Option 4",id:"qrf5x6gdq"},{value:"Option 5",id:"qrf6x6gdq"}]},render:o=>t.jsx("div",{style:{width:"200px"},children:t.jsx(e,{...o})})},l={args:{label:"Top",formFieldWidth:"full",placement:"top",listLabel:"id-10239-Top",options:[{value:"Option 1",id:"mmfg4zco7"},{value:"Option 2",id:"52zkxb05u"},{value:"Option 3",id:"52zkxb04u"},{value:"Option 4",id:"52zkxb03u"},{value:"Option 5",id:"52zkxb02u"}]},render:o=>t.jsx("div",{style:{width:"200px"},children:t.jsx(e,{...o})})},a={args:{label:"(Default) Bottom-Start",formFieldWidth:"auto",placement:"bottom-start",listLabel:"id-10243-(Default) Bottom-Start",options:[{value:"Option 1",id:"fhczoz28b"},{value:"Option 2",id:"k8zcxfb4x"},{value:"Option 3",id:"k8zcxfb3x"},{value:"Option 4",id:"k8zcxfb2x"},{value:"Option 5",id:"k8zcxfb1x"}]},render:o=>t.jsx("div",{style:{width:"200px"},children:t.jsx(e,{...o})})},r={args:{label:"Bottom-End",formFieldWidth:"auto",placement:"bottom-end",listLabel:"id-10244-Bottom-End",options:[{value:"Option 1",id:"ukchupevr"},{value:"Option 2",id:"ts0jwdqxj"},{value:"Option 3",id:"ts1jwdqxj"},{value:"Option 4",id:"ts2jwdqxj"},{value:"Option 5",id:"ts3jwdqxj"}]},render:o=>t.jsx("div",{style:{width:"200px"},children:t.jsx(e,{...o})})},n={args:{label:"Top-Start",formFieldWidth:"auto",placement:"top-start",listLabel:"id-10245-Top-Start",options:[{value:"Option 1",id:"zhuaneo1w"},{value:"Option 2",id:"5mwz7pmcr"},{value:"Option 3",id:"4mwz7pmcr"},{value:"Option 4",id:"3mwz7pmcr"},{value:"Option 5",id:"2mwz7pmcr"}]},render:o=>t.jsx("div",{style:{width:"200px"},children:t.jsx(e,{...o})})},d={args:{label:"Top-End",formFieldWidth:"auto",placement:"top-end",listLabel:"id-10246-Top-End",options:[{value:"Option 1",id:"6uq8tv3e8"},{value:"Option 2",id:"iz30t1pce"},{value:"Option 3",id:"iz40t1pce"},{value:"Option 4",id:"iz50t1pce"},{value:"Option 5",id:"iz60t1pce"}]},render:o=>t.jsx("div",{style:{width:"200px"},children:t.jsx(e,{...o})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Bottom",
    "formFieldWidth": "full",
    "placement": "bottom",
    "listLabel": "id-10238-(Default) Bottom",
    "options": [{
      value: 'Option 1',
      id: 'aryeycu23'
    }, {
      value: 'Option 2',
      id: 'qrf3x6gdq'
    }, {
      value: 'Option 3',
      id: 'qrf4x6gdq'
    }, {
      value: 'Option 4',
      id: 'qrf5x6gdq'
    }, {
      value: 'Option 5',
      id: 'qrf6x6gdq'
    }]
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Top",
    "formFieldWidth": "full",
    "placement": "top",
    "listLabel": "id-10239-Top",
    "options": [{
      value: 'Option 1',
      id: 'mmfg4zco7'
    }, {
      value: 'Option 2',
      id: '52zkxb05u'
    }, {
      value: 'Option 3',
      id: '52zkxb04u'
    }, {
      value: 'Option 4',
      id: '52zkxb03u'
    }, {
      value: 'Option 5',
      id: '52zkxb02u'
    }]
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Bottom-Start",
    "formFieldWidth": "auto",
    "placement": "bottom-start",
    "listLabel": "id-10243-(Default) Bottom-Start",
    "options": [{
      value: 'Option 1',
      id: 'fhczoz28b'
    }, {
      value: 'Option 2',
      id: 'k8zcxfb4x'
    }, {
      value: 'Option 3',
      id: 'k8zcxfb3x'
    }, {
      value: 'Option 4',
      id: 'k8zcxfb2x'
    }, {
      value: 'Option 5',
      id: 'k8zcxfb1x'
    }]
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Bottom-End",
    "formFieldWidth": "auto",
    "placement": "bottom-end",
    "listLabel": "id-10244-Bottom-End",
    "options": [{
      value: 'Option 1',
      id: 'ukchupevr'
    }, {
      value: 'Option 2',
      id: 'ts0jwdqxj'
    }, {
      value: 'Option 3',
      id: 'ts1jwdqxj'
    }, {
      value: 'Option 4',
      id: 'ts2jwdqxj'
    }, {
      value: 'Option 5',
      id: 'ts3jwdqxj'
    }]
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Top-Start",
    "formFieldWidth": "auto",
    "placement": "top-start",
    "listLabel": "id-10245-Top-Start",
    "options": [{
      value: 'Option 1',
      id: 'zhuaneo1w'
    }, {
      value: 'Option 2',
      id: '5mwz7pmcr'
    }, {
      value: 'Option 3',
      id: '4mwz7pmcr'
    }, {
      value: 'Option 4',
      id: '3mwz7pmcr'
    }, {
      value: 'Option 5',
      id: '2mwz7pmcr'
    }]
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Top-End",
    "formFieldWidth": "auto",
    "placement": "top-end",
    "listLabel": "id-10246-Top-End",
    "options": [{
      value: 'Option 1',
      id: '6uq8tv3e8'
    }, {
      value: 'Option 2',
      id: 'iz30t1pce'
    }, {
      value: 'Option 3',
      id: 'iz40t1pce'
    }, {
      value: 'Option 4',
      id: 'iz50t1pce'
    }, {
      value: 'Option 5',
      id: 'iz60t1pce'
    }]
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...d.parameters?.docs?.source}}};const T=["DefaultBottom","Top","DefaultBottomStart","BottomEnd","TopStart","TopEnd"];export{r as BottomEnd,i as DefaultBottom,a as DefaultBottomStart,l as Top,d as TopEnd,n as TopStart,T as __namedExportsOrder,S as default};
