import{_ as r}from"./divider-C93CnCyG.js";import{_ as i}from"./infotext-CQzZlFC4.js";import"./iframe-BJyzzIdz.js";import"./preload-helper-_n2GBM2K.js";import"./index-nMDAkmV1.js";const{fn:D}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBDivider/Density",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"select",options:["full","auto"]},variant:{control:"select",options:["horizontal","vertical"]},emphasis:{control:"select",options:["weak","strong"]},margin:{control:"select",options:["medium","small","large","none","_"]},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{width:"full",default:""},render:e=>({components:{DBDivider:r,DBInfotext:i},setup(){return{args:e}},template:`<div data-density="functional" :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Functional
                </DBInfotext><DBDivider v-bind="args"   >${e.default}</DBDivider></div>`})},n={args:{width:"full",default:""},render:e=>({components:{DBDivider:r,DBInfotext:i},setup(){return{args:e}},template:`<div data-density="regular" :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    (Default) Regular
                </DBInfotext><DBDivider v-bind="args"   >${e.default}</DBDivider></div>`})},a={args:{width:"full",default:""},render:e=>({components:{DBDivider:r,DBInfotext:i},setup(){return{args:e}},template:`<div data-density="expressive" :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Expressive
                </DBInfotext><DBDivider v-bind="args"   >${e.default}</DBDivider></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBDivider,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-density="functional" :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Functional
                </DBInfotext><DBDivider v-bind="args"   >\${args.default}</DBDivider></div>\`
  })
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBDivider,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-density="regular" :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    (Default) Regular
                </DBInfotext><DBDivider v-bind="args"   >\${args.default}</DBDivider></div>\`
  })
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBDivider,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-density="expressive" :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Expressive
                </DBInfotext><DBDivider v-bind="args"   >\${args.default}</DBDivider></div>\`
  })
}`,...a.parameters?.docs?.source}}};const c=["Functional","DefaultRegular","Expressive"];export{n as DefaultRegular,a as Expressive,t as Functional,c as __namedExportsOrder,m as default};
