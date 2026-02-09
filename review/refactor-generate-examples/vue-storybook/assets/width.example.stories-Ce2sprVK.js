import{_ as l}from"./card-GLnslQ2v.js";import{_ as t}from"./section-DqLriDpC.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,B={title:"Components/DBSection/Width",component:t,render:o=>({components:{DBSection:t,DBCard:l},setup(){return{args:o}},template:`
      <DBSection v-bind="args">
      ${o.default}
      </DBSection>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},width:{control:"text"},spacing:{control:"text"}}},a={args:{default:`<DBCard>(Default) Full</DBCard><DBCard>(Default) Full</DBCard
      ><DBCard>(Default) Full</DBCard><DBCard>(Default) Full</DBCard>`,class:"db-color-informational db-bg-color-basic-level-2 section-card-container"},decorators:[()=>({template:'<div style="  width:100%;  display:block"><story /></div>'})]},r={args:{default:`<DBCard>Small</DBCard><DBCard>Small</DBCard><DBCard>Small</DBCard
      ><DBCard>Small</DBCard>`,class:"db-color-informational db-bg-color-basic-level-2 section-card-container",width:"small"},decorators:[()=>({template:'<div style="  width:100%;  display:block"><story /></div>'})]},e={args:{default:`<DBCard>Medium</DBCard><DBCard>Medium</DBCard><DBCard>Medium</DBCard
      ><DBCard>Medium</DBCard>`,class:"db-color-informational db-bg-color-basic-level-2 section-card-container",width:"medium"},decorators:[()=>({template:'<div style="  width:100%;  display:block"><story /></div>'})]},d={args:{default:`<DBCard>Large</DBCard><DBCard>Large</DBCard><DBCard>Large</DBCard
      ><DBCard>Large</DBCard>`,class:"db-color-informational db-bg-color-basic-level-2 section-card-container",width:"large"},decorators:[()=>({template:'<div style="  width:100%;  display:block"><story /></div>'})]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBCard>(Default) Full</DBCard><DBCard>(Default) Full</DBCard
      ><DBCard>(Default) Full</DBCard><DBCard>(Default) Full</DBCard>\`,
    "class": "db-color-informational db-bg-color-basic-level-2 section-card-container"
  },
  decorators: [() => ({
    template: \`<div style="  width:100%;  display:block"><story /></div>\`
  })]
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBCard>Small</DBCard><DBCard>Small</DBCard><DBCard>Small</DBCard
      ><DBCard>Small</DBCard>\`,
    "class": "db-color-informational db-bg-color-basic-level-2 section-card-container",
    "width": "small"
  },
  decorators: [() => ({
    template: \`<div style="  width:100%;  display:block"><story /></div>\`
  })]
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBCard>Medium</DBCard><DBCard>Medium</DBCard><DBCard>Medium</DBCard
      ><DBCard>Medium</DBCard>\`,
    "class": "db-color-informational db-bg-color-basic-level-2 section-card-container",
    "width": "medium"
  },
  decorators: [() => ({
    template: \`<div style="  width:100%;  display:block"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBCard>Large</DBCard><DBCard>Large</DBCard><DBCard>Large</DBCard
      ><DBCard>Large</DBCard>\`,
    "class": "db-color-informational db-bg-color-basic-level-2 section-card-container",
    "width": "large"
  },
  decorators: [() => ({
    template: \`<div style="  width:100%;  display:block"><story /></div>\`
  })]
}`,...d.parameters?.docs?.source}}};const C=["DefaultFull","Small","Medium","Large"];export{a as DefaultFull,d as Large,e as Medium,r as Small,C as __namedExportsOrder,B as default};
