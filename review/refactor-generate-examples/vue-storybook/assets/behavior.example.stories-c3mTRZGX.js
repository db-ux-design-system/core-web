import{_ as i}from"./infotext-C1MSMu4c.js";import{_ as r}from"./accordion-item-vs6_uibg.js";import{_ as t}from"./accordion-CkgiABnv.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";import"./constants-qyp1P7vr.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,B={title:"Components/DBAccordion/Behavior",component:t,render:o=>({components:{DBAccordion:t,DBAccordionItem:r,DBInfotext:i},setup(){return{args:o}},template:`
      <DBAccordion v-bind="args">
      ${o.default}
      </DBAccordion>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{behavior:{control:"select",options:["multiple","single"]},variant:{control:"select",options:["divider","card"]},initOpenIndex:{control:"object"},name:{control:"text"},id:{control:"text"}}},e={args:{default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 3">
        Content 3
      </DBAccordionItem>`,behavior:"multiple"}},n={args:{default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 3">
        Content 3
      </DBAccordionItem>`,behavior:"single"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 3">
        Content 3
      </DBAccordionItem>\`,
    "behavior": "multiple"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 3">
        Content 3
      </DBAccordionItem>\`,
    "behavior": "single"
  }
}`,...n.parameters?.docs?.source}}};const D=["Multiple","Single"];export{e as Multiple,n as Single,D as __namedExportsOrder,B as default};
