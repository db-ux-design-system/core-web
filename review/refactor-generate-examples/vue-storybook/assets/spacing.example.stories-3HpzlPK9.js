import{_ as c}from"./card-GLnslQ2v.js";import{_ as n}from"./section-DqLriDpC.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";const{fn:B}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBSection/Spacing",component:n,render:d=>({components:{DBSection:n,DBCard:c},setup(){return{args:d}},template:`
      <DBSection v-bind="args">
      ${d.default}
      </DBSection>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},width:{control:"text"},spacing:{control:"text"}}},a={args:{default:`<DBCard>(Default) Medium</DBCard><DBCard>(Default) Medium</DBCard
    ><DBCard>(Default) Medium</DBCard
    ><DBCard>(Default) Medium</DBCard>`,class:"db-color-informational db-bg-color-basic-level-2 section-card-container",spacing:"medium"}},r={args:{default:`<DBCard>Large</DBCard><DBCard>Large</DBCard><DBCard>Large</DBCard
    ><DBCard>Large</DBCard>`,class:"db-color-informational db-bg-color-basic-level-2 section-card-container",spacing:"large"}},e={args:{default:`<DBCard>Small</DBCard><DBCard>Small</DBCard><DBCard>Small</DBCard
    ><DBCard>Small</DBCard>`,class:"db-color-informational db-bg-color-basic-level-2 section-card-container",spacing:"small"}},o={args:{default:`<DBCard>None</DBCard><DBCard>None</DBCard><DBCard>None</DBCard
    ><DBCard>None</DBCard>`,class:"db-color-informational db-bg-color-basic-level-2 section-card-container",spacing:"none"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBCard>(Default) Medium</DBCard><DBCard>(Default) Medium</DBCard
    ><DBCard>(Default) Medium</DBCard
    ><DBCard>(Default) Medium</DBCard>\`,
    "class": "db-color-informational db-bg-color-basic-level-2 section-card-container",
    "spacing": "medium"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBCard>Large</DBCard><DBCard>Large</DBCard><DBCard>Large</DBCard
    ><DBCard>Large</DBCard>\`,
    "class": "db-color-informational db-bg-color-basic-level-2 section-card-container",
    "spacing": "large"
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBCard>Small</DBCard><DBCard>Small</DBCard><DBCard>Small</DBCard
    ><DBCard>Small</DBCard>\`,
    "class": "db-color-informational db-bg-color-basic-level-2 section-card-container",
    "spacing": "small"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBCard>None</DBCard><DBCard>None</DBCard><DBCard>None</DBCard
    ><DBCard>None</DBCard>\`,
    "class": "db-color-informational db-bg-color-basic-level-2 section-card-container",
    "spacing": "none"
  }
}`,...o.parameters?.docs?.source}}};const C=["DefaultMedium","Large","Small","None"];export{a as DefaultMedium,r as Large,o as None,e as Small,C as __namedExportsOrder,m as default};
