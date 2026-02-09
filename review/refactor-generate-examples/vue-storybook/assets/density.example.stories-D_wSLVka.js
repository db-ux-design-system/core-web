import{_ as r}from"./infotext-C1MSMu4c.js";import{_ as i}from"./accordion-item-vs6_uibg.js";import{_ as c}from"./accordion-CkgiABnv.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";import"./constants-qyp1P7vr.js";const{fn:B}=__STORYBOOK_MODULE_TEST__,A={title:"Components/DBAccordion/Density",component:c,render:o=>({components:{DBAccordion:c,DBAccordionItem:i,DBInfotext:r},setup(){return{args:o}},template:`
      <DBAccordion v-bind="args">
      ${o.default}
      </DBAccordion>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{behavior:{control:"select",options:["multiple","single"]},variant:{control:"select",options:["divider","card"]},initOpenIndex:{control:"object"},name:{control:"text"},id:{control:"text"}}},e={args:{default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 3">
        Content 3
      </DBAccordionItem>`,"data-density":"functional"}},n={args:{default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 3">
        Content 3
      </DBAccordionItem>`,"data-density":"regular"}},t={args:{default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 3">
        Content 3
      </DBAccordionItem>`,"data-density":"expressive"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 3">
        Content 3
      </DBAccordionItem>\`,
    "data-density": "functional"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 3">
        Content 3
      </DBAccordionItem>\`,
    "data-density": "regular"
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
      ><DBAccordionItem headlinePlain="Item 3">
        Content 3
      </DBAccordionItem>\`,
    "data-density": "expressive"
  }
}`,...t.parameters?.docs?.source}}};const p=["Functional","Regular","Expressive"];export{t as Expressive,e as Functional,n as Regular,p as __namedExportsOrder,A as default};
