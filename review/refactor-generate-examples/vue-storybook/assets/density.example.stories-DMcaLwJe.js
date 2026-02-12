import{_ as t}from"./section-CdvE41_h.js";import{_ as n}from"./card-CbLJh0Dq.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBSection/Density",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},width:{control:"select",options:["full","medium","large","small"]},spacing:{control:"select",options:["medium","small","large","none"]},autofocus:{control:"boolean"}}},a={args:{class:"db-color-informational db-bg-color-basic-level-2","data-density":"functional",id:"test-id-123",style:{display:"grid",gap:"var(--db-spacing-fixed-sm)",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},default:`<DBCard
  :style="{
  inlineSize: '100%'
}"
  >Functional</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Functional</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Functional</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Functional</DBCard
>`},render:e=>({components:{DBSection:t,DBCard:n},setup(){return{args:e}},template:`<DBSection v-bind="args"   >${e.default}</DBSection>`})},r={args:{class:"db-color-informational db-bg-color-basic-level-2","data-density":"regular",style:{display:"grid",gap:"var(--db-spacing-fixed-sm)",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},default:`<DBCard
  :style="{
  inlineSize: '100%'
}"
>
  (Default) Regular </DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
>
  (Default) Regular </DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
>
  (Default) Regular </DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
>
  (Default) Regular
</DBCard>`},render:e=>({components:{DBSection:t,DBCard:n},setup(){return{args:e}},template:`<DBSection v-bind="args"   >${e.default}</DBSection>`})},i={args:{class:"db-color-informational db-bg-color-basic-level-2","data-density":"expressive",style:{display:"grid",gap:"var(--db-spacing-fixed-sm)",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},default:`<DBCard
  :style="{
  inlineSize: '100%'
}"
  >Expressive</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Expressive</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Expressive</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Expressive</DBCard
>`},render:e=>({components:{DBSection:t,DBCard:n},setup(){return{args:e}},template:`<DBSection v-bind="args"   >${e.default}</DBSection>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "class": "db-color-informational db-bg-color-basic-level-2",
    "data-density": "functional",
    "id": "test-id-123",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    },
    "default": \`<DBCard
  :style="{
  inlineSize: '100%'
}"
  >Functional</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Functional</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Functional</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Functional</DBCard
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "class": "db-color-informational db-bg-color-basic-level-2",
    "data-density": "regular",
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
  (Default) Regular </DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
>
  (Default) Regular </DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
>
  (Default) Regular </DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
>
  (Default) Regular
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
    template: \`<DBSection v-bind="args"   >\${args.default}</DBSection>\`
  })
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "class": "db-color-informational db-bg-color-basic-level-2",
    "data-density": "expressive",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    },
    "default": \`<DBCard
  :style="{
  inlineSize: '100%'
}"
  >Expressive</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Expressive</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Expressive</DBCard
><DBCard
  :style="{
  inlineSize: '100%'
}"
  >Expressive</DBCard
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
}`,...i.parameters?.docs?.source}}};const u=["Functional","DefaultRegular","Expressive"];export{r as DefaultRegular,i as Expressive,a as Functional,u as __namedExportsOrder,D as default};
