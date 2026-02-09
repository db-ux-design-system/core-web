import{_ as s}from"./card-GLnslQ2v.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,i={title:"Components/DBCard/Density",component:s,render:a=>({components:{DBCard:s},setup(){return{args:a}},template:`
      <DBCard v-bind="args">
      ${a.default}
      </DBCard>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{elevationLevel:{control:"text"},spacing:{control:"text"},behavior:{control:"text"}}},e={args:{default:"<strong>Functional</strong>","data-density":"functional"}},r={args:{default:"<strong>(Default) Regular</strong>","data-density":"regular"}},t={args:{default:"<strong>Expressive</strong>","data-density":"expressive"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<strong>Functional</strong>\`,
    "data-density": "functional"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<strong>(Default) Regular</strong>\`,
    "data-density": "regular"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<strong>Expressive</strong>\`,
    "data-density": "expressive"
  }
}`,...t.parameters?.docs?.source}}};const l=["Functional","DefaultRegular","Expressive"];export{r as DefaultRegular,t as Expressive,e as Functional,l as __namedExportsOrder,i as default};
