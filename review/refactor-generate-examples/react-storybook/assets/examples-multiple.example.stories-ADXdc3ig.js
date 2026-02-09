import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./custom-select-DqMMWHiw.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./button-CXbufVX4.js";import"./infotext-DSB5wS-D.js";import"./input-C0ADyTR3.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,w={title:"Components/DBCustomSelect/Examples Multiple",component:n,render:e=>o.jsx(n,{...e,children:e.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"text"},variant:{control:"text"},values:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},formFieldWidth:{control:"text"},dropdownWidth:{control:"text"},placement:{control:"text"},selectedType:{control:"text"},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"text"},searchValue:{control:"text"},selectedLabels:{control:"text"},transformSelectedLabels:{control:"text"},searchFilter:{control:"text"}}},t={args:{options:[{value:"Option 1",id:"20twpdi3j"},{value:"Option 2",id:"0uwpufkvw"},{value:"Option 3",id:"xmvmr8dws"},{value:"Option 4",id:"yv5v4q9ew"},{value:"Option 5",id:"6bjfubtz4"}],multiple:!0,placeholder:"Placeholder",label:"Less than 6",listLabel:"id-10266-Less than 6"},decorators:[e=>o.jsx("div",{style:{width:"200px"},children:o.jsx(e,{})})]},l={args:{options:[{label:"Option group 1",isGroupTitle:!0,id:"qcvwaejkk"},{value:"G1:Option 1",id:"jgnlzpm6q"},{value:"G1:Option 2",id:"n75b2qd9t"},{label:"Option group 2",isGroupTitle:!0,id:"bcx8u0ke9"},{value:"G2:Option 1",id:"zgmc2tyn4"},{value:"G2:Option 2",id:"sw7l6jpoj"}],multiple:!0,placeholder:"Placeholder",label:"Option Group Title",listLabel:"id-10267-Option Group Title"},decorators:[e=>o.jsx("div",{style:{width:"200px"},children:o.jsx(e,{})})]},i={args:{options:[{value:"G1:Option 1",id:"y5iukyovr"},{value:"G1:Option 2",showDivider:!0,id:"0ton8ii8v"},{value:"G2:Option 1",id:"9c4cgirv2"},{value:"G2:Option 2",showDivider:!0,id:"740m4a61n"}],multiple:!0,placeholder:"Placeholder",label:"Option Groups",listLabel:"id-10268-Option Groups"},decorators:[e=>o.jsx("div",{style:{width:"200px"},children:o.jsx(e,{})})]},r={args:{options:[{value:"Option 1",id:"3zjiay7k4"},{value:"Option 2",id:"s52x89xrz"},{value:"Option 3",id:"2u5nocjfo"},{value:"Option 4",id:"0ibok60su"},{value:"Option 5",id:"kdd8w27oh"},{value:"Option 6",id:"1qn5w4113"},{value:"Option 7",id:"eopg7tn9q"}],multiple:!0,placeholder:"Placeholder",selectAllLabel:"Select all",label:"More than 6",listLabel:"id-10269-More than 6"},decorators:[e=>o.jsx("div",{style:{width:"200px"},children:o.jsx(e,{})})]},a={args:{options:[{value:"Option 1",id:"wg5f7ycm8"},{value:"Option 2",id:"3viv9gxlp"},{value:"Option 3",id:"4wtnn5nwh"},{value:"Option 4",id:"r4amvgigg"},{value:"Option 5",id:"pcmqabmuy"},{value:"Option 6",id:"u8nify3n9"},{value:"Option 7",id:"rcmpselej"},{value:"Option 8",id:"ln43k984l"},{value:"Option 9",id:"j8squjd5i"},{value:"Option 10 very long item with may break into a new line",id:"b84ie8otk"}],multiple:!0,selectAllLabel:"Select all",searchLabel:"Search",searchPlaceholder:"Search",placeholder:"Placeholder",label:"More than 10",listLabel:"id-10270-More than 10"},decorators:[e=>o.jsx("div",{style:{width:"200px"},children:o.jsx(e,{})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
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
    "multiple": true,
    "placeholder": "Placeholder",
    "label": "Less than 6",
    "listLabel": "id-10266-Less than 6"
  },
  decorators: [Story => <div style={{
    width: '200px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
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
    "multiple": true,
    "placeholder": "Placeholder",
    "label": "Option Group Title",
    "listLabel": "id-10267-Option Group Title"
  },
  decorators: [Story => <div style={{
    width: '200px'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
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
    "multiple": true,
    "placeholder": "Placeholder",
    "label": "Option Groups",
    "listLabel": "id-10268-Option Groups"
  },
  decorators: [Story => <div style={{
    width: '200px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
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
    "multiple": true,
    "placeholder": "Placeholder",
    "selectAllLabel": "Select all",
    "label": "More than 6",
    "listLabel": "id-10269-More than 6"
  },
  decorators: [Story => <div style={{
    width: '200px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
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
    "multiple": true,
    "selectAllLabel": "Select all",
    "searchLabel": "Search",
    "searchPlaceholder": "Search",
    "placeholder": "Placeholder",
    "label": "More than 10",
    "listLabel": "id-10270-More than 10"
  },
  decorators: [Story => <div style={{
    width: '200px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};const g=["Lessthan6","OptionGroupTitle","OptionGroups","Morethan6","Morethan10"];export{t as Lessthan6,a as Morethan10,r as Morethan6,l as OptionGroupTitle,i as OptionGroups,g as __namedExportsOrder,w as default};
