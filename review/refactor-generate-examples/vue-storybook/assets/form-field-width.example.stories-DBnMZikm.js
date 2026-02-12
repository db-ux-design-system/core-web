import{_ as l}from"./custom-select-BOFAG810.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./document-scroll-listener-sPooixGf.js";import"./floating-components-1F_x7pmN.js";import"./form-components-DotznFsp.js";import"./button-BND3SCu0.js";import"./infotext-tCTmoIyB.js";import"./input-DCt77RAB.js";import"./tag-mPlBKPvT.js";import"./tooltip-bsw76Umn.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBCustomSelect/Form Field Width",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},o={args:{label:"(Default) Full",formFieldWidth:"full",listLabel:"id-10223-(Default) Full",options:[{value:"Option 1",id:"z0ispy7ls"},{value:"Option 2",id:"ngl1p4pxn"},{value:"Option 3",id:"ngl1p3pxn"},{value:"Option 4",id:"ngl1p2pxn"},{value:"Option 5",id:"ngl1p1pxn"}],default:""},render:t=>({components:{DBCustomSelect:l},setup(){return{args:t}},template:`<div  :style="{
  width: '400px'
}"  ><DBCustomSelect v-bind="args"   >${t.default}</DBCustomSelect></div>`})},e={args:{label:"Auto",formFieldWidth:"auto",listLabel:"id-10224-Auto",options:[{value:"Option 1",id:"klxyvobwn"},{value:"Option 2",id:"7oag2a4fj"},{value:"Option 3",id:"7oag2a3fj"},{value:"Option 4",id:"7oag2a2fj"},{value:"Option 5",id:"7oag2a1fj"}],default:""},render:t=>({components:{DBCustomSelect:l},setup(){return{args:t}},template:`<div  :style="{
  width: '400px'
}"  ><DBCustomSelect v-bind="args"   >${t.default}</DBCustomSelect></div>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
  width: '400px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
  width: '400px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...e.parameters?.docs?.source}}};const h=["DefaultFull","Auto"];export{e as Auto,o as DefaultFull,h as __namedExportsOrder,f as default};
