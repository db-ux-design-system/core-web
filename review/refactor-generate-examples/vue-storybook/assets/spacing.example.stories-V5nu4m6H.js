import{_ as a}from"./section-CdvE41_h.js";import{_ as s}from"./card-CbLJh0Dq.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:D}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBSection/Spacing",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},width:{control:"select",options:["full","medium","large","small"]},spacing:{control:"select",options:["medium","small","large","none"]},autofocus:{control:"boolean"}}},r={args:{class:"db-color-informational db-bg-color-basic-level-2",spacing:"medium",style:{display:"grid",gap:"var(--db-spacing-fixed-sm)",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},default:`<DBCard
  :style="{
  inlineSize: '100%'
}"
  >(Default) Medium</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
>
  (Default) Medium </DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >(Default) Medium</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >(Default) Medium</DBCard
>`},render:e=>({components:{DBSection:a,DBCard:s},setup(){return{args:e}},template:`<DBSection v-bind="args"   >${e.default}</DBSection>`})},i={args:{class:"db-color-informational db-bg-color-basic-level-2",spacing:"large",style:{display:"grid",gap:"var(--db-spacing-fixed-sm)",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},default:`<DBCard
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
>`},render:e=>({components:{DBSection:a,DBCard:s},setup(){return{args:e}},template:`<DBSection v-bind="args"   >${e.default}</DBSection>`})},l={args:{class:"db-color-informational db-bg-color-basic-level-2",spacing:"small",style:{display:"grid",gap:"var(--db-spacing-fixed-sm)",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},default:`<DBCard
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
>`},render:e=>({components:{DBSection:a,DBCard:s},setup(){return{args:e}},template:`<DBSection v-bind="args"   >${e.default}</DBSection>`})},n={args:{class:"db-color-informational db-bg-color-basic-level-2",spacing:"none",style:{display:"grid",gap:"var(--db-spacing-fixed-sm)",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},default:`<DBCard
  :style="{
  inlineSize: '100%'
}"
  >None</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >None</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >None</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >None</DBCard
>`},render:e=>({components:{DBSection:a,DBCard:s},setup(){return{args:e}},template:`<DBSection v-bind="args"   >${e.default}</DBSection>`})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "class": "db-color-informational db-bg-color-basic-level-2",
    "spacing": "medium",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    },
    "default": \`<DBCard
  :style="{
  inlineSize: '100%'
}"
  >(Default) Medium</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
>
  (Default) Medium </DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >(Default) Medium</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >(Default) Medium</DBCard
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
    template: \`<DBSection v-bind="args"   >\${args.default}</DBSection>\`
  })
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "class": "db-color-informational db-bg-color-basic-level-2",
    "spacing": "large",
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
    template: \`<DBSection v-bind="args"   >\${args.default}</DBSection>\`
  })
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "class": "db-color-informational db-bg-color-basic-level-2",
    "spacing": "small",
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
    template: \`<DBSection v-bind="args"   >\${args.default}</DBSection>\`
  })
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "class": "db-color-informational db-bg-color-basic-level-2",
    "spacing": "none",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    },
    "default": \`<DBCard
  :style="{
  inlineSize: '100%'
}"
  >None</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >None</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >None</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >None</DBCard
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
    template: \`<DBSection v-bind="args"   >\${args.default}</DBSection>\`
  })
}`,...n.parameters?.docs?.source}}};const B=["DefaultMedium","Large","Small","None"];export{r as DefaultMedium,i as Large,n as None,l as Small,B as __namedExportsOrder,p as default};
