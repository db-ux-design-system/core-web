import{_ as n}from"./card-GLnslQ2v.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBCard/Spacing",component:n,render:t=>({components:{DBCard:n},setup(){return{args:t}},template:`
      <DBCard v-bind="args">
      ${t.default}
      </DBCard>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{elevationLevel:{control:"text"},spacing:{control:"text"},behavior:{control:"text"}}},e={args:{default:"<strong>(Default) Small</strong>",spacing:"small"}},r={args:{default:"<strong>Medium</strong>",spacing:"medium"}},a={args:{default:"<strong>Large</strong>",spacing:"large"}},s={args:{default:"<strong>None</strong>",spacing:"none"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<strong>(Default) Small</strong>\`,
    "spacing": "small"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<strong>Medium</strong>\`,
    "spacing": "medium"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<strong>Large</strong>\`,
    "spacing": "large"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<strong>None</strong>\`,
    "spacing": "none"
  }
}`,...s.parameters?.docs?.source}}};const d=["DefaultSmall","Medium","Large","None"];export{e as DefaultSmall,a as Large,r as Medium,s as None,d as __namedExportsOrder,p as default};
