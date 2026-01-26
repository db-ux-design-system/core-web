import{_ as o}from"./card-DxTKgjQC.js";import"./iframe-D4GwdY-M.js";import"./preload-helper-_n2GBM2K.js";import"./index-CeOJJTBm.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,l={title:"Components/DBCard/Example",component:o,render:a=>({components:{DBCard:o},setup(){return{args:a}},template:`
      <DBCard v-bind="args">
      ${a.default}
      </DBCard>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{elevationLevel:{control:"text"},spacing:{control:"text"},behavior:{control:"text"}}},e={args:{elevationLevel:"1",behavior:"interactive"}},r={args:{elevationLevel:"2",behavior:"interactive"}},t={args:{elevationLevel:"3",behavior:"interactive"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "1",
    "behavior": "interactive"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "2",
    "behavior": "interactive"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "3",
    "behavior": "interactive"
  }
}`,...t.parameters?.docs?.source}}};const p=["Level1Interactive","Level2Interactive","Level3Interactive"];export{e as Level1Interactive,r as Level2Interactive,t as Level3Interactive,p as __namedExportsOrder,l as default};
