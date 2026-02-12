import{_ as r}from"./divider-CRpTzI18.js";import{_ as o}from"./infotext-tCTmoIyB.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBDivider/Emphasis",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"select",options:["full","auto"]},variant:{control:"select",options:["horizontal","vertical"]},emphasis:{control:"select",options:["weak","strong"]},margin:{control:"select",options:["medium","small","large","none","_"]},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{width:"full",default:""},render:t=>({components:{DBDivider:r,DBInfotext:o},setup(){return{args:t}},template:`<div  :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    (Default) Weak
                </DBInfotext><DBDivider v-bind="args"   >${t.default}</DBDivider></div>`})},n={args:{emphasis:"strong",width:"full",default:""},render:t=>({components:{DBDivider:r,DBInfotext:o},setup(){return{args:t}},template:`<div  :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Strong
                </DBInfotext><DBDivider v-bind="args"   >${t.default}</DBDivider></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    template: \`<div  :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    (Default) Weak
                </DBInfotext><DBDivider v-bind="args"   >\${args.default}</DBDivider></div>\`
  })
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
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
    template: \`<div  :style="{
  width: '200px'
}"  ><DBInfotext size="small" semantic="informational"   >
                    Strong
                </DBInfotext><DBDivider v-bind="args"   >\${args.default}</DBDivider></div>\`
  })
}`,...n.parameters?.docs?.source}}};const D=["DefaultWeak","Strong"];export{e as DefaultWeak,n as Strong,D as __namedExportsOrder,p as default};
