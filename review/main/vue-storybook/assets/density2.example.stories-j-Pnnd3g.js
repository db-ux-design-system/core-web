import{n as e}from"./chunk-DnJy8xQt.js";import{O as t,t as n,u as r}from"./src-CwgarGln.js";var i,a,o,s,c,l;e((()=>{n(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/DBSection/Density`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},autofocus:{control:`boolean`}}},o={args:{class:`db-color-informational db-bg-color-basic-level-2`,"data-density":`functional`,id:`test-id-123`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`},default:`<DBCard
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
>`},render:e=>({components:{DBSection:r,DBCard:t},setup(){return{args:e}},template:`<DBSection v-bind="args"   >${e.default}</DBSection>`})},s={args:{class:`db-color-informational db-bg-color-basic-level-2`,"data-density":`regular`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`},default:`<DBCard
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
</DBCard>`},render:e=>({components:{DBSection:r,DBCard:t},setup(){return{args:e}},template:`<DBSection v-bind="args"   >${e.default}</DBSection>`})},c={args:{class:`db-color-informational db-bg-color-basic-level-2`,"data-density":`expressive`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`},default:`<DBCard
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
>`},render:e=>({components:{DBSection:r,DBCard:t},setup(){return{args:e}},template:`<DBSection v-bind="args"   >${e.default}</DBSection>`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{s as DefaultRegular,c as Expressive,o as Functional,l as __namedExportsOrder,a as default};