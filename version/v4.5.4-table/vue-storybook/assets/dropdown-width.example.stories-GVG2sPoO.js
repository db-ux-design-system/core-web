import{_ as o}from"./infotext-ChOUO4Z5.js";import{_ as t}from"./custom-select-GdrkFlgv.js";import"./iframe-DfvinHPj.js";import"./preload-helper-eESElaRw.js";import"./index-COCtms_G.js";import"./constants-y2N5m1XS.js";import"./document-scroll-listener-BYqEBCaA.js";import"./floating-components-CKmcRn_b.js";import"./form-components-B8gyVD2Y.js";import"./button-eZpQGvA1.js";import"./input-VcXdES3u.js";import"./tag-pLFSfp1d.js";import"./tooltip-DdSEXsAc.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,B={title:"Components/DBCustomSelect/Dropdown Width",component:t,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:l(),onOptionSelected:l(),onDropdownToggle:l(),onSearch:l()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},i={args:{label:"(Default) Fixed",formFieldWidth:"full",dropdownWidth:"fixed",listLabel:"id-10227-(Default) Fixed",options:[{value:"Option 1",id:"99pgkheyw"},{value:"Option 2",id:"qc908rx6z"},{value:"Option 3",id:"qc908rx5z"},{value:"Option 4",id:"qc908rx4z"},{value:"Option 5",id:"qc908rx3z"}],default:""},render:e=>({components:{DBCustomSelect:t,DBInfotext:o},setup(){return{args:e}},template:`<div  :style="{
  width: '400px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},a={args:{label:"Auto",formFieldWidth:"full",dropdownWidth:"auto",listLabel:"id-10228-Auto",options:[{value:"1",id:"2smv303zl"},{value:"2",id:"dstvsee1m"},{value:"3",id:"dstvsee2m"},{value:"4",id:"dstvsee3m"},{value:"5",id:"dstvsee4m"}],default:""},render:e=>({components:{DBCustomSelect:t,DBInfotext:o},setup(){return{args:e}},template:`<div  :style="{
  width: '400px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},d={args:{label:"Full",formFieldWidth:"full",dropdownWidth:"full",listLabel:"id-10229-Full",options:[{value:"1",id:"8fb4evl87"},{value:"2",id:"0iiu59zbg"},{value:"3",id:"0iiu69zbg"},{value:"4",id:"0iiu79zbg"},{value:"5",id:"0iiu89zbg"}],default:""},render:e=>({components:{DBCustomSelect:t,DBInfotext:o},setup(){return{args:e}},template:`<div  :style="{
  width: '400px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},r={args:{label:"(Default) Fixed",formFieldWidth:"auto",dropdownWidth:"fixed",listLabel:"id-10233-(Default) Fixed",options:[{value:"Option 1",id:"gniy079gw"},{value:"Option 2",id:"kr0v4jgxl"},{value:"Option 3",id:"kr0v3jgxl"},{value:"Option 4",id:"kr0v2jgxl"},{value:"Option 5",id:"kr0v1jgxl"}],default:""},render:e=>({components:{DBCustomSelect:t,DBInfotext:o},setup(){return{args:e}},template:`<div  :style="{
  width: '400px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},s={args:{label:"Auto",formFieldWidth:"auto",dropdownWidth:"auto",listLabel:"id-10234-Auto",options:[{value:"1",id:"mmc6lfzsy"},{value:"2",id:"wr6elxyf4"},{value:"3",id:"wr6elxyf5"},{value:"4",id:"wr6elxyf6"},{value:"5",id:"wr6elxyf7"}],default:""},render:e=>({components:{DBCustomSelect:t,DBInfotext:o},setup(){return{args:e}},template:`<div  :style="{
  width: '400px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},n={args:{label:"Full",formFieldWidth:"auto",dropdownWidth:"full",listLabel:"id-10235-Full",options:[{value:"1",id:"q0iyxp9kq"},{value:"2",id:"mzo80txs4"},{value:"3",id:"mzo80txs5"},{value:"4",id:"mzo80txs6"},{value:"5",id:"mzo80txs7"}],default:""},render:e=>({components:{DBCustomSelect:t,DBInfotext:o},setup(){return{args:e}},template:`<div  :style="{
  width: '400px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Fixed",
    "formFieldWidth": "full",
    "dropdownWidth": "fixed",
    "listLabel": "id-10227-(Default) Fixed",
    "options": [{
      value: 'Option 1',
      id: '99pgkheyw'
    }, {
      value: 'Option 2',
      id: 'qc908rx6z'
    }, {
      value: 'Option 3',
      id: 'qc908rx5z'
    }, {
      value: 'Option 4',
      id: 'qc908rx4z'
    }, {
      value: 'Option 5',
      id: 'qc908rx3z'
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '400px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Auto",
    "formFieldWidth": "full",
    "dropdownWidth": "auto",
    "listLabel": "id-10228-Auto",
    "options": [{
      value: '1',
      id: '2smv303zl'
    }, {
      value: '2',
      id: 'dstvsee1m'
    }, {
      value: '3',
      id: 'dstvsee2m'
    }, {
      value: '4',
      id: 'dstvsee3m'
    }, {
      value: '5',
      id: 'dstvsee4m'
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '400px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Full",
    "formFieldWidth": "full",
    "dropdownWidth": "full",
    "listLabel": "id-10229-Full",
    "options": [{
      value: '1',
      id: '8fb4evl87'
    }, {
      value: '2',
      id: '0iiu59zbg'
    }, {
      value: '3',
      id: '0iiu69zbg'
    }, {
      value: '4',
      id: '0iiu79zbg'
    }, {
      value: '5',
      id: '0iiu89zbg'
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '400px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Fixed",
    "formFieldWidth": "auto",
    "dropdownWidth": "fixed",
    "listLabel": "id-10233-(Default) Fixed",
    "options": [{
      value: 'Option 1',
      id: 'gniy079gw'
    }, {
      value: 'Option 2',
      id: 'kr0v4jgxl'
    }, {
      value: 'Option 3',
      id: 'kr0v3jgxl'
    }, {
      value: 'Option 4',
      id: 'kr0v2jgxl'
    }, {
      value: 'Option 5',
      id: 'kr0v1jgxl'
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '400px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Auto",
    "formFieldWidth": "auto",
    "dropdownWidth": "auto",
    "listLabel": "id-10234-Auto",
    "options": [{
      value: '1',
      id: 'mmc6lfzsy'
    }, {
      value: '2',
      id: 'wr6elxyf4'
    }, {
      value: '3',
      id: 'wr6elxyf5'
    }, {
      value: '4',
      id: 'wr6elxyf6'
    }, {
      value: '5',
      id: 'wr6elxyf7'
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '400px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Full",
    "formFieldWidth": "auto",
    "dropdownWidth": "full",
    "listLabel": "id-10235-Full",
    "options": [{
      value: '1',
      id: 'q0iyxp9kq'
    }, {
      value: '2',
      id: 'mzo80txs4'
    }, {
      value: '3',
      id: 'mzo80txs5'
    }, {
      value: '4',
      id: 'mzo80txs6'
    }, {
      value: '5',
      id: 'mzo80txs7'
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '400px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...n.parameters?.docs?.source}}};const w=["FormFieldWidthFullDefaultFixed","FormFieldWidthFullAuto","FormFieldWidthFullFull","FormFieldWidthAutoDefaultFixed","FormFieldWidthAutoAuto","FormFieldWidthAutoFull"];export{s as FormFieldWidthAutoAuto,r as FormFieldWidthAutoDefaultFixed,n as FormFieldWidthAutoFull,a as FormFieldWidthFullAuto,i as FormFieldWidthFullDefaultFixed,d as FormFieldWidthFullFull,w as __namedExportsOrder,B as default};
