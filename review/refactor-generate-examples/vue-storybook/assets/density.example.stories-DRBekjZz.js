import{_ as o}from"./infotext-C1MSMu4c.js";import{_ as e}from"./stack-BW0bt_fh.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBStack/Density",component:e,render:s=>({components:{DBStack:e,DBInfotext:o},setup(){return{args:s}},template:`
      <DBStack v-bind="args">
      ${s.default}
      </DBStack>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"text"},gap:{control:"text"},direction:{control:"text"},wrap:{control:"text"},alignment:{control:"text"},justifyContent:{control:"text"}}},t={args:{default:`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>`,class:"stack-container","data-density":"functional"},decorators:[()=>({template:'<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:200px"><story /></div>'})]},n={args:{default:`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>`,class:"stack-container","data-density":"regular"},decorators:[()=>({template:'<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:200px"><story /></div>'})]},a={args:{default:`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>`,class:"stack-container","data-density":"expressive"},decorators:[()=>({template:'<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:200px"><story /></div>'})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>\`,
    "class": "stack-container",
    "data-density": "functional"
  },
  decorators: [() => ({
    template: \`<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:200px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>\`,
    "class": "stack-container",
    "data-density": "regular"
  },
  decorators: [() => ({
    template: \`<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:200px"><story /></div>\`
  })]
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>\`,
    "class": "stack-container",
    "data-density": "expressive"
  },
  decorators: [() => ({
    template: \`<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:200px"><story /></div>\`
  })]
}`,...a.parameters?.docs?.source}}};const f=["Functional","DefaultRegular","Expressive"];export{n as DefaultRegular,a as Expressive,t as Functional,f as __namedExportsOrder,d as default};
