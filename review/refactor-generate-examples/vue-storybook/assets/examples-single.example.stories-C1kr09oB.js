import{_ as t}from"./custom-select-BOFAG810.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./document-scroll-listener-sPooixGf.js";import"./floating-components-1F_x7pmN.js";import"./form-components-DotznFsp.js";import"./button-BND3SCu0.js";import"./infotext-tCTmoIyB.js";import"./input-DCt77RAB.js";import"./tag-mPlBKPvT.js";import"./tooltip-bsw76Umn.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Components/DBCustomSelect/Examples Single",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},o={args:{placeholder:"Placeholder",label:"Icons",listLabel:"id-10260-Icons",options:[{value:"Option 1",icon:"x_placeholder",id:"fvdhawk3a"},{value:"Option 2",icon:"x_placeholder",id:"i0pey2syc"},{value:"Option 3",icon:"x_placeholder",id:"i0pey3syc"},{value:"Option 4",icon:"x_placeholder",id:"i0pey4syc"},{value:"Option 5",icon:"x_placeholder",id:"i0pey5syc"}],default:""},render:e=>({components:{DBCustomSelect:t},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},l={args:{placeholder:"Placeholder",label:"Less than 6",listLabel:"id-10261-Less than 6",options:[{value:"Option 1",id:"6zthubswi"},{value:"Option 2",id:"fh93iyp7w"},{value:"Option 3",id:"1cbtid79q"},{value:"Option 4",id:"5w9s57s9k"},{value:"Option 5",id:"ixclh8p8n"}],default:""},render:e=>({components:{DBCustomSelect:t},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},i={args:{placeholder:"Placeholder",label:"Option Group Title",listLabel:"id-10262-Option Group Title",options:[{label:"Option group 1",isGroupTitle:!0,id:"f48zp673q"},{value:"G1:Option 1",id:"8291mu3qc"},{value:"G1:Option 2",id:"4duvelxc8"},{label:"Option group 2",isGroupTitle:!0,id:"g4ti9lrc7"},{value:"G2:Option 1",id:"gqhv3u61k"},{value:"G2:Option 2",id:"8yx3v6yii"}],default:""},render:e=>({components:{DBCustomSelect:t},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},a={args:{placeholder:"Placeholder",label:"Option Groups",listLabel:"id-10263-Option Groups",options:[{value:"G1:Option 1",id:"q4h9435ye"},{value:"G1:Option 2",showDivider:!0,id:"7tzwcbeln"},{value:"G2:Option 1",id:"zjmir6142"},{value:"G2:Option 2",showDivider:!0,id:"hwqps1347"}],default:""},render:e=>({components:{DBCustomSelect:t},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},r={args:{placeholder:"Placeholder",label:"More than 6",listLabel:"id-10264-More than 6",options:[{value:"Option 1",id:"ghsxrti0t"},{value:"Option 2",id:"5hj8rz3h6"},{value:"Option 3",id:"kvyjps1ai"},{value:"Option 4",id:"31ncem9lt"},{value:"Option 5",id:"0fwgqufql"},{value:"Option 6",id:"okz955pi7"},{value:"Option 7",id:"ihbjcr0lo"}],default:""},render:e=>({components:{DBCustomSelect:t},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},s={args:{placeholder:"Placeholder",searchLabel:"Search",label:"More than 10",listLabel:"id-10265-More than 10",options:[{value:"Option 1",id:"o9docf7sw"},{value:"Option 2",id:"ttwfqxw26"},{value:"Option 3",id:"0c5sgzfag"},{value:"Option 4",id:"c8knaskj6"},{value:"Option 5",id:"2z5uhqdmr"},{value:"Option 6",id:"y2tlf2fnf"},{value:"Option 7",id:"q9hdifmw7"},{value:"Option 8",id:"vqz28zphb"},{value:"Option 9",id:"j2amckmwh"},{value:"Option 10",id:"zdi31d2lu"}],default:""},render:e=>({components:{DBCustomSelect:t},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "placeholder": "Placeholder",
    "label": "Icons",
    "listLabel": "id-10260-Icons",
    "options": [{
      value: 'Option 1',
      icon: 'x_placeholder',
      id: 'fvdhawk3a'
    }, {
      value: 'Option 2',
      icon: 'x_placeholder',
      id: 'i0pey2syc'
    }, {
      value: 'Option 3',
      icon: 'x_placeholder',
      id: 'i0pey3syc'
    }, {
      value: 'Option 4',
      icon: 'x_placeholder',
      id: 'i0pey4syc'
    }, {
      value: 'Option 5',
      icon: 'x_placeholder',
      id: 'i0pey5syc'
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "placeholder": "Placeholder",
    "label": "Less than 6",
    "listLabel": "id-10261-Less than 6",
    "options": [{
      value: 'Option 1',
      id: '6zthubswi'
    }, {
      value: 'Option 2',
      id: 'fh93iyp7w'
    }, {
      value: 'Option 3',
      id: '1cbtid79q'
    }, {
      value: 'Option 4',
      id: '5w9s57s9k'
    }, {
      value: 'Option 5',
      id: 'ixclh8p8n'
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "placeholder": "Placeholder",
    "label": "Option Group Title",
    "listLabel": "id-10262-Option Group Title",
    "options": [{
      label: 'Option group 1',
      isGroupTitle: true,
      id: 'f48zp673q'
    }, {
      value: 'G1:Option 1',
      id: '8291mu3qc'
    }, {
      value: 'G1:Option 2',
      id: '4duvelxc8'
    }, {
      label: 'Option group 2',
      isGroupTitle: true,
      id: 'g4ti9lrc7'
    }, {
      value: 'G2:Option 1',
      id: 'gqhv3u61k'
    }, {
      value: 'G2:Option 2',
      id: '8yx3v6yii'
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "placeholder": "Placeholder",
    "label": "Option Groups",
    "listLabel": "id-10263-Option Groups",
    "options": [{
      value: 'G1:Option 1',
      id: 'q4h9435ye'
    }, {
      value: 'G1:Option 2',
      showDivider: true,
      id: '7tzwcbeln'
    }, {
      value: 'G2:Option 1',
      id: 'zjmir6142'
    }, {
      value: 'G2:Option 2',
      showDivider: true,
      id: 'hwqps1347'
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "placeholder": "Placeholder",
    "label": "More than 6",
    "listLabel": "id-10264-More than 6",
    "options": [{
      value: 'Option 1',
      id: 'ghsxrti0t'
    }, {
      value: 'Option 2',
      id: '5hj8rz3h6'
    }, {
      value: 'Option 3',
      id: 'kvyjps1ai'
    }, {
      value: 'Option 4',
      id: '31ncem9lt'
    }, {
      value: 'Option 5',
      id: '0fwgqufql'
    }, {
      value: 'Option 6',
      id: 'okz955pi7'
    }, {
      value: 'Option 7',
      id: 'ihbjcr0lo'
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "placeholder": "Placeholder",
    "searchLabel": "Search",
    "label": "More than 10",
    "listLabel": "id-10265-More than 10",
    "options": [{
      value: 'Option 1',
      id: 'o9docf7sw'
    }, {
      value: 'Option 2',
      id: 'ttwfqxw26'
    }, {
      value: 'Option 3',
      id: '0c5sgzfag'
    }, {
      value: 'Option 4',
      id: 'c8knaskj6'
    }, {
      value: 'Option 5',
      id: '2z5uhqdmr'
    }, {
      value: 'Option 6',
      id: 'y2tlf2fnf'
    }, {
      value: 'Option 7',
      id: 'q9hdifmw7'
    }, {
      value: 'Option 8',
      id: 'vqz28zphb'
    }, {
      value: 'Option 9',
      id: 'j2amckmwh'
    }, {
      value: 'Option 10',
      id: 'zdi31d2lu'
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...s.parameters?.docs?.source}}};const y=["Icons","Lessthan6","OptionGroupTitle","OptionGroups","Morethan6","Morethan10"];export{o as Icons,l as Lessthan6,s as Morethan10,r as Morethan6,i as OptionGroupTitle,a as OptionGroups,y as __namedExportsOrder,w as default};
