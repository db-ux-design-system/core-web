import{_ as c}from"./infotext-C1MSMu4c.js";import{_ as o}from"./stack-BW0bt_fh.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBStack/Justify Content Column",component:o,render:s=>({components:{DBStack:o,DBInfotext:c},setup(){return{args:s}},template:`
      <DBStack v-bind="args">
      ${s.default}
      </DBStack>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"text"},gap:{control:"text"},direction:{control:"text"},wrap:{control:"text"},alignment:{control:"text"},justifyContent:{control:"text"}}},t={args:{default:`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>`,class:"stack-container stack-show-alignment",justifyContent:"start"},decorators:[()=>({template:'<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:200px;  height:200px"><story /></div>'})]},n={args:{default:`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>`,class:"stack-container stack-show-alignment",justifyContent:"center"},decorators:[()=>({template:'<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:200px;  height:200px"><story /></div>'})]},e={args:{default:`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>`,class:"stack-container stack-show-alignment",justifyContent:"end"},decorators:[()=>({template:'<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:200px;  height:200px"><story /></div>'})]},a={args:{default:`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>`,class:"stack-container stack-show-alignment",justifyContent:"space-between"},decorators:[()=>({template:'<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:200px;  height:200px"><story /></div>'})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>\`,
    "class": "stack-container stack-show-alignment",
    "justifyContent": "start"
  },
  decorators: [() => ({
    template: \`<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:200px;  height:200px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>\`,
    "class": "stack-container stack-show-alignment",
    "justifyContent": "center"
  },
  decorators: [() => ({
    template: \`<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:200px;  height:200px"><story /></div>\`
  })]
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>\`,
    "class": "stack-container stack-show-alignment",
    "justifyContent": "end"
  },
  decorators: [() => ({
    template: \`<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:200px;  height:200px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>\`,
    "class": "stack-container stack-show-alignment",
    "justifyContent": "space-between"
  },
  decorators: [() => ({
    template: \`<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:200px;  height:200px"><story /></div>\`
  })]
}`,...a.parameters?.docs?.source}}};const u=["DefaultStart","Center","End","SpaceBetween"];export{n as Center,t as DefaultStart,e as End,a as SpaceBetween,u as __namedExportsOrder,f as default};
