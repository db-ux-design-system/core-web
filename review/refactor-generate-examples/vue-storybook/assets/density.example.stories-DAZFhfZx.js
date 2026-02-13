import{_ as r}from"./tooltip-CAhrWOJH.js";import{_ as a}from"./button-ls1aUhgi.js";import"./iframe-BJyzzIdz.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-nMDAkmV1.js";import"./document-scroll-listener-DH0Q7UsH.js";import"./floating-components-1F_x7pmN.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBTooltip/Density",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},showArrow:{control:"boolean"},emphasis:{control:"select",options:["weak","strong"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},width:{control:"select",options:["auto","fixed"]},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},variant:{control:"select",options:["description","label"]},autofocus:{control:"boolean"}}},o={args:{id:"tooltip-01",default:"Tooltip"},render:t=>({components:{DBTooltip:r,DBButton:a},setup(){return{args:t}},template:`<DBButton data-density="functional"   >
                Functional
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})},n={args:{id:"tooltip-02",default:"Tooltip"},render:t=>({components:{DBTooltip:r,DBButton:a},setup(){return{args:t}},template:`<DBButton data-density="regular"   >
                (Default) Regular
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})},e={args:{id:"tooltip-03",default:"Tooltip"},render:t=>({components:{DBTooltip:r,DBButton:a},setup(){return{args:t}},template:`<DBButton data-density="expressive"   >
                Expressive
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-01",
    "default": \`Tooltip\`
  },
  render: (args: any) => ({
    components: {
      DBTooltip,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton data-density="functional"   >
                Functional
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-02",
    "default": \`Tooltip\`
  },
  render: (args: any) => ({
    components: {
      DBTooltip,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton data-density="regular"   >
                (Default) Regular
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-03",
    "default": \`Tooltip\`
  },
  render: (args: any) => ({
    components: {
      DBTooltip,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton data-density="expressive"   >
                Expressive
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...e.parameters?.docs?.source}}};const g=["Functional","DefaultRegular","Expressive"];export{n as DefaultRegular,e as Expressive,o as Functional,g as __namedExportsOrder,D as default};
