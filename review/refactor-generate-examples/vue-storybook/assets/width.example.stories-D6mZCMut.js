import{_ as a}from"./section-CdvE41_h.js";import{_ as t}from"./card-CbLJh0Dq.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:D}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBSection/Width",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},width:{control:"select",options:["full","medium","large","small"]},spacing:{control:"select",options:["medium","small","large","none"]},autofocus:{control:"boolean"}}},i={args:{class:"db-color-informational db-bg-color-basic-level-2",style:{display:"grid",gap:"var(--db-spacing-fixed-sm)",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},default:`<DBCard
  :style="{
  inlineSize: '100%'
}"
>
  (Default) Full </DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
>
  (Default) Full </DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
>
  (Default) Full </DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
>
  (Default) Full
</DBCard>`},render:e=>({components:{DBSection:a,DBCard:t},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBSection v-bind="args"   >${e.default}</DBSection></div>`})},r={args:{class:"db-color-informational db-bg-color-basic-level-2",width:"small",style:{display:"grid",gap:"var(--db-spacing-fixed-sm)",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},default:`<DBCard
  :style="{
  inlineSize: '100%'
}"
  >Small</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Small</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Small</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Small</DBCard
>`},render:e=>({components:{DBSection:a,DBCard:t},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBSection v-bind="args"   >${e.default}</DBSection></div>`})},l={args:{class:"db-color-informational db-bg-color-basic-level-2",width:"medium",style:{display:"grid",gap:"var(--db-spacing-fixed-sm)",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},default:`<DBCard
  :style="{
  inlineSize: '100%'
}"
  >Medium</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Medium</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Medium</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Medium</DBCard
>`},render:e=>({components:{DBSection:a,DBCard:t},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBSection v-bind="args"   >${e.default}</DBSection></div>`})},d={args:{class:"db-color-informational db-bg-color-basic-level-2",width:"large",style:{display:"grid",gap:"var(--db-spacing-fixed-sm)",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},default:`<DBCard
  :style="{
  inlineSize: '100%'
}"
  >Large</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Large</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Large</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Large</DBCard
>`},render:e=>({components:{DBSection:a,DBCard:t},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBSection v-bind="args"   >${e.default}</DBSection></div>`})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "class": "db-color-informational db-bg-color-basic-level-2",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    },
    "default": \`<DBCard
  :style="{
  inlineSize: '100%'
}"
>
  (Default) Full </DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
>
  (Default) Full </DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
>
  (Default) Full </DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
>
  (Default) Full
</DBCard>\`
  },
  render: (args: any) => ({
    components: {
      DBSection,
      DBCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBSection v-bind="args"   >\${args.default}</DBSection></div>\`
  })
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "class": "db-color-informational db-bg-color-basic-level-2",
    "width": "small",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    },
    "default": \`<DBCard
  :style="{
  inlineSize: '100%'
}"
  >Small</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Small</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Small</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Small</DBCard
>\`
  },
  render: (args: any) => ({
    components: {
      DBSection,
      DBCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBSection v-bind="args"   >\${args.default}</DBSection></div>\`
  })
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "class": "db-color-informational db-bg-color-basic-level-2",
    "width": "medium",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    },
    "default": \`<DBCard
  :style="{
  inlineSize: '100%'
}"
  >Medium</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Medium</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Medium</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Medium</DBCard
>\`
  },
  render: (args: any) => ({
    components: {
      DBSection,
      DBCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBSection v-bind="args"   >\${args.default}</DBSection></div>\`
  })
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "class": "db-color-informational db-bg-color-basic-level-2",
    "width": "large",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    },
    "default": \`<DBCard
  :style="{
  inlineSize: '100%'
}"
  >Large</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Large</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Large</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Large</DBCard
>\`
  },
  render: (args: any) => ({
    components: {
      DBSection,
      DBCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBSection v-bind="args"   >\${args.default}</DBSection></div>\`
  })
}`,...d.parameters?.docs?.source}}};const B=["DefaultFull","Small","Medium","Large"];export{i as DefaultFull,d as Large,l as Medium,r as Small,B as __namedExportsOrder,p as default};
