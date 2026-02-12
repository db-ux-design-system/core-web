import{_ as a}from"./custom-select-BOFAG810.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./document-scroll-listener-sPooixGf.js";import"./floating-components-1F_x7pmN.js";import"./form-components-DotznFsp.js";import"./button-BND3SCu0.js";import"./infotext-tCTmoIyB.js";import"./input-DCt77RAB.js";import"./tag-mPlBKPvT.js";import"./tooltip-bsw76Umn.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBCustomSelect/Density",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},t={args:{"data-density":"functional",placeholder:"Placeholder",label:"Functional",listLabel:"id-10206-Functional",options:[{value:"Option 1",id:"miouzc0ec"},{value:"Option 2",id:"10dqnhil2"},{value:"Option 3",id:"10dqnhil3"},{value:"Option 4",id:"10dqnhil4"},{value:"Option 5",id:"10dqnhil5"}],default:""},render:e=>({components:{DBCustomSelect:a},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},o={args:{"data-density":"regular",placeholder:"Placeholder",label:"(Default) Regular",listLabel:"id-10207-(Default) Regular",options:[{value:"Option 1",id:"ok5olto18"},{value:"Option 2",id:"mzepnlbp4"},{value:"Option 3",id:"10dqnhil3"},{value:"Option 4",id:"10dqnhil2"},{value:"Option 5",id:"10dqnhil1"}],default:""},render:e=>({components:{DBCustomSelect:a},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},l={args:{"data-density":"expressive",placeholder:"Placeholder",label:"Expressive",listLabel:"id-10208-Expressive",options:[{value:"Option 1",id:"ixtyk8z9j"},{value:"Option 2",id:"k8kvx3fm8"},{value:"Option 3",id:"k8kvx3fm5"},{value:"Option 4",id:"k8kvx3fm6"},{value:"Option 5",id:"k8kvx3fm7"}],default:""},render:e=>({components:{DBCustomSelect:a},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "placeholder": "Placeholder",
    "label": "Functional",
    "listLabel": "id-10206-Functional",
    "options": [{
      value: 'Option 1',
      id: 'miouzc0ec'
    }, {
      value: 'Option 2',
      id: '10dqnhil2'
    }, {
      value: 'Option 3',
      id: '10dqnhil3'
    }, {
      value: 'Option 4',
      id: '10dqnhil4'
    }, {
      value: 'Option 5',
      id: '10dqnhil5'
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "placeholder": "Placeholder",
    "label": "(Default) Regular",
    "listLabel": "id-10207-(Default) Regular",
    "options": [{
      value: 'Option 1',
      id: 'ok5olto18'
    }, {
      value: 'Option 2',
      id: 'mzepnlbp4'
    }, {
      value: 'Option 3',
      id: '10dqnhil3'
    }, {
      value: 'Option 4',
      id: '10dqnhil2'
    }, {
      value: 'Option 5',
      id: '10dqnhil1'
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
    "data-density": "expressive",
    "placeholder": "Placeholder",
    "label": "Expressive",
    "listLabel": "id-10208-Expressive",
    "options": [{
      value: 'Option 1',
      id: 'ixtyk8z9j'
    }, {
      value: 'Option 2',
      id: 'k8kvx3fm8'
    }, {
      value: 'Option 3',
      id: 'k8kvx3fm5'
    }, {
      value: 'Option 4',
      id: 'k8kvx3fm6'
    }, {
      value: 'Option 5',
      id: 'k8kvx3fm7'
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
}`,...l.parameters?.docs?.source}}};const O=["Functional","DefaultRegular","Expressive"];export{o as DefaultRegular,l as Expressive,t as Functional,O as __namedExportsOrder,f as default};
