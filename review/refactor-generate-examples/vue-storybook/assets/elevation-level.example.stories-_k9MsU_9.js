import{_ as o}from"./card-DwEXE84J.js";import"./iframe-DibQWrOg.js";import"./preload-helper-_n2GBM2K.js";import"./index-hMc7d43z.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBCard/Elevation Level",component:o,render:t=>({components:{DBCard:o},setup(){return{args:t}},template:`
      <DBCard v-bind="args">
      ${t.default}
      </DBCard>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{elevationLevel:{control:"text"},spacing:{control:"text"},behavior:{control:"text"}}},e={args:{elevationLevel:"1"}},r={args:{elevationLevel:"2"}},a={args:{elevationLevel:"3"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "1"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "2"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "3"
  }
}`,...a.parameters?.docs?.source}}};const v=["DefaultLevel1","Level2","Level3"];export{e as DefaultLevel1,r as Level2,a as Level3,v as __namedExportsOrder,m as default};
