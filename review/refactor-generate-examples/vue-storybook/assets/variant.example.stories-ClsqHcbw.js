import{_ as r}from"./infotext-C1MSMu4c.js";import{_ as c}from"./accordion-item-vs6_uibg.js";import{_ as o}from"./accordion-CkgiABnv.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";import"./constants-qyp1P7vr.js";const{fn:D}=__STORYBOOK_MODULE_TEST__,B={title:"Components/DBAccordion/Variant",component:o,render:t=>({components:{DBAccordion:o,DBAccordionItem:c,DBInfotext:r},setup(){return{args:t}},template:`
      <DBAccordion v-bind="args">
      ${t.default}
      </DBAccordion>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{behavior:{control:"select",options:["multiple","single"]},variant:{control:"select",options:["divider","card"]},initOpenIndex:{control:"object"},name:{control:"text"},id:{control:"text"}}},e={args:{default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 3">
        Content 3
      </DBAccordionItem>`,variant:"divider"}},n={args:{default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 3">
        Content 3
      </DBAccordionItem>`,variant:"card"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 3">
        Content 3
      </DBAccordionItem>\`,
    "variant": "divider"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 3">
        Content 3
      </DBAccordionItem>\`,
    "variant": "card"
  }
}`,...n.parameters?.docs?.source}}};const A=["Divider","Card"];export{n as Card,e as Divider,A as __namedExportsOrder,B as default};
