import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./card-BaUlUBG4.js";import{n as r,t as i}from"./section-DQBV1Aq8.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBSection/Density`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},autofocus:{control:`boolean`}}},s={args:{class:`db-color-informational db-bg-color-basic-level-2`,"data-density":`functional`,id:`test-id-123`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`},default:`<DBCard
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
>`},render:e=>({components:{DBSection:r,DBCard:n},setup(){return{args:e}},template:`<DBSection v-bind="args"   >${e.default}</DBSection>`})},c={args:{class:`db-color-informational db-bg-color-basic-level-2`,"data-density":`regular`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`},default:`<DBCard
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
</DBCard>`},render:e=>({components:{DBSection:r,DBCard:n},setup(){return{args:e}},template:`<DBSection v-bind="args"   >${e.default}</DBSection>`})},l={args:{class:`db-color-informational db-bg-color-basic-level-2`,"data-density":`expressive`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`},default:`<DBCard
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
>`},render:e=>({components:{DBSection:r,DBCard:n},setup(){return{args:e}},template:`<DBSection v-bind="args"   >${e.default}</DBSection>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Functional`,`DefaultRegular`,`Expressive`]})))()}d();export{c as DefaultRegular,l as Expressive,s as Functional,u as __namedExportsOrder,o as default};