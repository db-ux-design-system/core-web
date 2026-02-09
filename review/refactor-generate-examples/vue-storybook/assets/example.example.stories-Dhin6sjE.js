import{_ as n}from"./card-GLnslQ2v.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:"Components/DBCard/Example",component:n,render:a=>({components:{DBCard:n},setup(){return{args:a}},template:`
      <DBCard v-bind="args">
      ${a.default}
      </DBCard>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{elevationLevel:{control:"text"},spacing:{control:"text"},behavior:{control:"text"}}},e={args:{default:"<strong>Level 1 - Interactive</strong>",elevationLevel:"1",behavior:"interactive"}},t={args:{default:"<strong>Level 2 - Interactive</strong>",elevationLevel:"2",behavior:"interactive"}},r={args:{default:"<strong>Level 3 - Interactive</strong>",elevationLevel:"3",behavior:"interactive"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<strong>Level 1 - Interactive</strong>\`,
    "elevationLevel": "1",
    "behavior": "interactive"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<strong>Level 2 - Interactive</strong>\`,
    "elevationLevel": "2",
    "behavior": "interactive"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<strong>Level 3 - Interactive</strong>\`,
    "elevationLevel": "3",
    "behavior": "interactive"
  }
}`,...r.parameters?.docs?.source}}};const d=["Level1Interactive","Level2Interactive","Level3Interactive"];export{e as Level1Interactive,t as Level2Interactive,r as Level3Interactive,d as __namedExportsOrder,l as default};
