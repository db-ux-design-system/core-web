import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./custom-select-UQOz5BY-.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";import"./form-components-B5fJjToM.js";import"./button-DnZnbJNC.js";import"./infotext-CZi0xQss.js";import"./input-CZfMhmXc.js";import"./tag-Bwjb1ZJJ.js";import"./tooltip-COrPM-Vv.js";const{fn:j}=__STORYBOOK_MODULE_TEST__,G={title:"Components/DBCustomSelect/Examples Multiple",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},l={args:{placeholder:"Placeholder",label:"Less than 6",listLabel:"id-10266-Less than 6",options:[{value:"Option 1",id:"20twpdi3j"},{value:"Option 2",id:"0uwpufkvw"},{value:"Option 3",id:"xmvmr8dws"},{value:"Option 4",id:"yv5v4q9ew"},{value:"Option 5",id:"6bjfubtz4"}],multiple:!0},render:o=>e.jsx("div",{style:{width:"200px"},children:e.jsx(t,{...o})})},i={args:{placeholder:"Placeholder",label:"Option Group Title",listLabel:"id-10267-Option Group Title",options:[{label:"Option group 1",isGroupTitle:!0,id:"qcvwaejkk"},{value:"G1:Option 1",id:"jgnlzpm6q"},{value:"G1:Option 2",id:"n75b2qd9t"},{label:"Option group 2",isGroupTitle:!0,id:"bcx8u0ke9"},{value:"G2:Option 1",id:"zgmc2tyn4"},{value:"G2:Option 2",id:"sw7l6jpoj"}],multiple:!0},render:o=>e.jsx("div",{style:{width:"200px"},children:e.jsx(t,{...o})})},r={args:{placeholder:"Placeholder",label:"Option Groups",listLabel:"id-10268-Option Groups",options:[{value:"G1:Option 1",id:"y5iukyovr"},{value:"G1:Option 2",showDivider:!0,id:"0ton8ii8v"},{value:"G2:Option 1",id:"9c4cgirv2"},{value:"G2:Option 2",showDivider:!0,id:"740m4a61n"}],multiple:!0},render:o=>e.jsx("div",{style:{width:"200px"},children:e.jsx(t,{...o})})},a={args:{placeholder:"Placeholder",selectAllLabel:"Select all",label:"More than 6",listLabel:"id-10269-More than 6",options:[{value:"Option 1",id:"3zjiay7k4"},{value:"Option 2",id:"s52x89xrz"},{value:"Option 3",id:"2u5nocjfo"},{value:"Option 4",id:"0ibok60su"},{value:"Option 5",id:"kdd8w27oh"},{value:"Option 6",id:"1qn5w4113"},{value:"Option 7",id:"eopg7tn9q"}],multiple:!0},render:o=>e.jsx("div",{style:{width:"200px"},children:e.jsx(t,{...o})})},n={args:{selectAllLabel:"Select all",searchLabel:"Search",searchPlaceholder:"Search",placeholder:"Placeholder",label:"More than 10",listLabel:"id-10270-More than 10",options:[{value:"Option 1",id:"wg5f7ycm8"},{value:"Option 2",id:"3viv9gxlp"},{value:"Option 3",id:"4wtnn5nwh"},{value:"Option 4",id:"r4amvgigg"},{value:"Option 5",id:"pcmqabmuy"},{value:"Option 6",id:"u8nify3n9"},{value:"Option 7",id:"rcmpselej"},{value:"Option 8",id:"ln43k984l"},{value:"Option 9",id:"j8squjd5i"},{value:"Option 10 very long item with may break into a new line",id:"b84ie8otk"}],multiple:!0},render:o=>e.jsx("div",{style:{width:"200px"},children:e.jsx(t,{...o})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "placeholder": "Placeholder",
    "label": "Less than 6",
    "listLabel": "id-10266-Less than 6",
    "options": [{
      value: 'Option 1',
      id: '20twpdi3j'
    }, {
      value: 'Option 2',
      id: '0uwpufkvw'
    }, {
      value: 'Option 3',
      id: 'xmvmr8dws'
    }, {
      value: 'Option 4',
      id: 'yv5v4q9ew'
    }, {
      value: 'Option 5',
      id: '6bjfubtz4'
    }],
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "placeholder": "Placeholder",
    "label": "Option Group Title",
    "listLabel": "id-10267-Option Group Title",
    "options": [{
      label: 'Option group 1',
      isGroupTitle: true,
      id: 'qcvwaejkk'
    }, {
      value: 'G1:Option 1',
      id: 'jgnlzpm6q'
    }, {
      value: 'G1:Option 2',
      id: 'n75b2qd9t'
    }, {
      label: 'Option group 2',
      isGroupTitle: true,
      id: 'bcx8u0ke9'
    }, {
      value: 'G2:Option 1',
      id: 'zgmc2tyn4'
    }, {
      value: 'G2:Option 2',
      id: 'sw7l6jpoj'
    }],
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "placeholder": "Placeholder",
    "label": "Option Groups",
    "listLabel": "id-10268-Option Groups",
    "options": [{
      value: 'G1:Option 1',
      id: 'y5iukyovr'
    }, {
      value: 'G1:Option 2',
      showDivider: true,
      id: '0ton8ii8v'
    }, {
      value: 'G2:Option 1',
      id: '9c4cgirv2'
    }, {
      value: 'G2:Option 2',
      showDivider: true,
      id: '740m4a61n'
    }],
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "placeholder": "Placeholder",
    "selectAllLabel": "Select all",
    "label": "More than 6",
    "listLabel": "id-10269-More than 6",
    "options": [{
      value: 'Option 1',
      id: '3zjiay7k4'
    }, {
      value: 'Option 2',
      id: 's52x89xrz'
    }, {
      value: 'Option 3',
      id: '2u5nocjfo'
    }, {
      value: 'Option 4',
      id: '0ibok60su'
    }, {
      value: 'Option 5',
      id: 'kdd8w27oh'
    }, {
      value: 'Option 6',
      id: '1qn5w4113'
    }, {
      value: 'Option 7',
      id: 'eopg7tn9q'
    }],
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "selectAllLabel": "Select all",
    "searchLabel": "Search",
    "searchPlaceholder": "Search",
    "placeholder": "Placeholder",
    "label": "More than 10",
    "listLabel": "id-10270-More than 10",
    "options": [{
      value: 'Option 1',
      id: 'wg5f7ycm8'
    }, {
      value: 'Option 2',
      id: '3viv9gxlp'
    }, {
      value: 'Option 3',
      id: '4wtnn5nwh'
    }, {
      value: 'Option 4',
      id: 'r4amvgigg'
    }, {
      value: 'Option 5',
      id: 'pcmqabmuy'
    }, {
      value: 'Option 6',
      id: 'u8nify3n9'
    }, {
      value: 'Option 7',
      id: 'rcmpselej'
    }, {
      value: 'Option 8',
      id: 'ln43k984l'
    }, {
      value: 'Option 9',
      id: 'j8squjd5i'
    }, {
      value: 'Option 10 very long item with may break into a new line',
      id: 'b84ie8otk'
    }],
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...n.parameters?.docs?.source}}};const L=["Lessthan6","OptionGroupTitle","OptionGroups","Morethan6","Morethan10"];export{l as Lessthan6,n as Morethan10,a as Morethan6,i as OptionGroupTitle,r as OptionGroups,L as __namedExportsOrder,G as default};
