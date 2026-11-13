import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./card-DM135Zkl.js";import{n as i,t as a}from"./section-DiV6Duf8.js";var o=t({DefaultRegular:()=>u,Expressive:()=>d,Functional:()=>l,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{n(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBSection/Density`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},autofocus:{control:`boolean`}}},l={args:{class:`db-color-informational db-bg-color-basic-level-2`,"data-density":`functional`,id:`test-id-123`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`},default:`<DBCard
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
>`},render:e=>({components:{DBSection:i,DBCard:r},setup(){return{args:e}},template:`<DBSection v-bind="args"   >${e.default}</DBSection>`})},u={args:{class:`db-color-informational db-bg-color-basic-level-2`,"data-density":`regular`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`},default:`<DBCard
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
</DBCard>`},render:e=>({components:{DBSection:i,DBCard:r},setup(){return{args:e}},template:`<DBSection v-bind="args"   >${e.default}</DBSection>`})},d={args:{class:`db-color-informational db-bg-color-basic-level-2`,"data-density":`expressive`,style:{display:`grid`,gap:`var(--db-spacing-fixed-sm)`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`},default:`<DBCard
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
>`},render:e=>({components:{DBSection:i,DBCard:r},setup(){return{args:e}},template:`<DBSection v-bind="args"   >${e.default}</DBSection>`})},f=[`Functional`,`DefaultRegular`,`Expressive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,o as i,d as n,c as o,l as r,u as t};