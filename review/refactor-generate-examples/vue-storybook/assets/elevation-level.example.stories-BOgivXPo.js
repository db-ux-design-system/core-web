import{_ as o}from"./card-GLnslQ2v.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBCard/Elevation Level",component:o,render:a=>({components:{DBCard:o},setup(){return{args:a}},template:`
      <DBCard v-bind="args">
      ${a.default}
      </DBCard>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{elevationLevel:{control:"text"},spacing:{control:"text"},behavior:{control:"text"}}},e={args:{default:"<strong>(Default) 1</strong>",elevationLevel:"1"}},t={args:{default:"<strong>2</strong>",elevationLevel:"2"}},r={args:{default:"<strong>3</strong>",elevationLevel:"3"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<strong>(Default) 1</strong>\`,
    "elevationLevel": "1"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<strong>2</strong>\`,
    "elevationLevel": "2"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<strong>3</strong>\`,
    "elevationLevel": "3"
  }
}`,...r.parameters?.docs?.source}}};const m=["DefaultLevel1","Level2","Level3"];export{e as DefaultLevel1,t as Level2,r as Level3,m as __namedExportsOrder,p as default};
