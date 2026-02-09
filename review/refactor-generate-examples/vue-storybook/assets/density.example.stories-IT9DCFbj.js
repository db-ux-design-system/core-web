import{_ as o}from"./card-GLnslQ2v.js";import{_ as n}from"./section-DqLriDpC.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";const{fn:D}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBSection/Density",component:n,render:t=>({components:{DBSection:n,DBCard:o},setup(){return{args:t}},template:`
      <DBSection v-bind="args">
      ${t.default}
      </DBSection>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},width:{control:"text"},spacing:{control:"text"}}},a={args:{default:`<DBCard>Functional</DBCard><DBCard>Functional</DBCard
    ><DBCard>Functional</DBCard><DBCard>Functional</DBCard>`,class:"db-color-informational db-bg-color-basic-level-2 section-card-container","data-density":"functional",id:"test-id-123"}},r={args:{default:`<DBCard>(Default) Regular</DBCard><DBCard>(Default) Regular</DBCard
    ><DBCard>(Default) Regular</DBCard
    ><DBCard>(Default) Regular</DBCard>`,class:"db-color-informational db-bg-color-basic-level-2 section-card-container","data-density":"regular"}},e={args:{default:`<DBCard>Expressive</DBCard><DBCard>Expressive</DBCard
    ><DBCard>Expressive</DBCard><DBCard>Expressive</DBCard>`,class:"db-color-informational db-bg-color-basic-level-2 section-card-container","data-density":"expressive"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBCard>Functional</DBCard><DBCard>Functional</DBCard
    ><DBCard>Functional</DBCard><DBCard>Functional</DBCard>\`,
    "class": "db-color-informational db-bg-color-basic-level-2 section-card-container",
    "data-density": "functional",
    "id": "test-id-123"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBCard>(Default) Regular</DBCard><DBCard>(Default) Regular</DBCard
    ><DBCard>(Default) Regular</DBCard
    ><DBCard>(Default) Regular</DBCard>\`,
    "class": "db-color-informational db-bg-color-basic-level-2 section-card-container",
    "data-density": "regular"
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBCard>Expressive</DBCard><DBCard>Expressive</DBCard
    ><DBCard>Expressive</DBCard><DBCard>Expressive</DBCard>\`,
    "class": "db-color-informational db-bg-color-basic-level-2 section-card-container",
    "data-density": "expressive"
  }
}`,...e.parameters?.docs?.source}}};const B=["Functional","DefaultRegular","Expressive"];export{r as DefaultRegular,e as Expressive,a as Functional,B as __namedExportsOrder,u as default};
