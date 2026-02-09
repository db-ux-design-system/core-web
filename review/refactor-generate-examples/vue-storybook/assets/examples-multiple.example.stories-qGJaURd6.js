import{_ as r}from"./custom-select-CASOXR0w.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./button-YbkVn8kv.js";import"./infotext-C1MSMu4c.js";import"./input-CODHB90g.js";const{fn:O}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBCustomSelect/Examples Multiple",component:r,render:a=>({components:{DBCustomSelect:r},setup(){return{args:a}},template:`
      <DBCustomSelect v-bind="args">
      ${a.default}
      </DBCustomSelect>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"text"},variant:{control:"text"},values:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},formFieldWidth:{control:"text"},dropdownWidth:{control:"text"},placement:{control:"text"},selectedType:{control:"text"},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"text"},searchValue:{control:"text"},selectedLabels:{control:"text"},transformSelectedLabels:{control:"text"},searchFilter:{control:"text"}}},e={args:{default:"",options:[{value:"Option 1",id:"20twpdi3j"},{value:"Option 2",id:"0uwpufkvw"},{value:"Option 3",id:"xmvmr8dws"},{value:"Option 4",id:"yv5v4q9ew"},{value:"Option 5",id:"6bjfubtz4"}],multiple:!0,placeholder:"Placeholder",label:"Less than 6",listLabel:"id-10266-Less than 6"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]},t={args:{default:"",options:[{label:"Option group 1",isGroupTitle:!0,id:"qcvwaejkk"},{value:"G1:Option 1",id:"jgnlzpm6q"},{value:"G1:Option 2",id:"n75b2qd9t"},{label:"Option group 2",isGroupTitle:!0,id:"bcx8u0ke9"},{value:"G2:Option 1",id:"zgmc2tyn4"},{value:"G2:Option 2",id:"sw7l6jpoj"}],multiple:!0,placeholder:"Placeholder",label:"Option Group Title",listLabel:"id-10267-Option Group Title"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]},o={args:{default:"",options:[{value:"G1:Option 1",id:"y5iukyovr"},{value:"G1:Option 2",showDivider:!0,id:"0ton8ii8v"},{value:"G2:Option 1",id:"9c4cgirv2"},{value:"G2:Option 2",showDivider:!0,id:"740m4a61n"}],multiple:!0,placeholder:"Placeholder",label:"Option Groups",listLabel:"id-10268-Option Groups"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]},l={args:{default:"",options:[{value:"Option 1",id:"3zjiay7k4"},{value:"Option 2",id:"s52x89xrz"},{value:"Option 3",id:"2u5nocjfo"},{value:"Option 4",id:"0ibok60su"},{value:"Option 5",id:"kdd8w27oh"},{value:"Option 6",id:"1qn5w4113"},{value:"Option 7",id:"eopg7tn9q"}],multiple:!0,placeholder:"Placeholder",selectAllLabel:"Select all",label:"More than 6",listLabel:"id-10269-More than 6"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]},i={args:{default:"",options:[{value:"Option 1",id:"wg5f7ycm8"},{value:"Option 2",id:"3viv9gxlp"},{value:"Option 3",id:"4wtnn5nwh"},{value:"Option 4",id:"r4amvgigg"},{value:"Option 5",id:"pcmqabmuy"},{value:"Option 6",id:"u8nify3n9"},{value:"Option 7",id:"rcmpselej"},{value:"Option 8",id:"ln43k984l"},{value:"Option 9",id:"j8squjd5i"},{value:"Option 10 very long item with may break into a new line",id:"b84ie8otk"}],multiple:!0,selectAllLabel:"Select all",searchLabel:"Search",searchPlaceholder:"Search",placeholder:"Placeholder",label:"More than 10",listLabel:"id-10270-More than 10"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
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
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
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
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
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
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
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
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
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
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...i.parameters?.docs?.source}}};const w=["Lessthan6","OptionGroupTitle","OptionGroups","Morethan6","Morethan10"];export{e as Lessthan6,i as Morethan10,l as Morethan6,t as OptionGroupTitle,o as OptionGroups,w as __namedExportsOrder,b as default};
