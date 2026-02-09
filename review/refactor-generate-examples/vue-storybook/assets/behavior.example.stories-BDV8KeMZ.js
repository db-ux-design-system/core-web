import{_ as a}from"./card-GLnslQ2v.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBCard/Behavior",component:a,render:r=>({components:{DBCard:a},setup(){return{args:r}},template:`
      <DBCard v-bind="args">
      ${r.default}
      </DBCard>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{elevationLevel:{control:"text"},spacing:{control:"text"},behavior:{control:"text"}}},t={args:{default:"<strong>(Default) Static</strong>",behavior:"static"}},e={args:{default:"<strong>Interactive</strong>",behavior:"interactive"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<strong>(Default) Static</strong>\`,
    "behavior": "static"
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<strong>Interactive</strong>\`,
    "behavior": "interactive"
  }
}`,...e.parameters?.docs?.source}}};const p=["DefaultStatic","Interactive"];export{t as DefaultStatic,e as Interactive,p as __namedExportsOrder,d as default};
