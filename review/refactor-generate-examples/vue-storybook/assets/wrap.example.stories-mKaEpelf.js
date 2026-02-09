import{_ as r}from"./infotext-C1MSMu4c.js";import{_ as o}from"./stack-BW0bt_fh.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBStack/Wrap",component:o,render:e=>({components:{DBStack:o,DBInfotext:r},setup(){return{args:e}},template:`
      <DBStack v-bind="args">
      ${e.default}
      </DBStack>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"text"},gap:{control:"text"},direction:{control:"text"},wrap:{control:"text"},alignment:{control:"text"},justifyContent:{control:"text"}}},n={args:{default:`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>`,class:"stack-container"},decorators:[()=>({template:'<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:160px;  height:88px"><story /></div>'})]},t={args:{default:`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>`,class:"stack-container",direction:"row"},decorators:[()=>({template:'<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:160px;  height:88px"><story /></div>'})]},a={args:{default:`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>`,wrap:!0,class:"stack-container"},decorators:[()=>({template:'<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:160px;  height:120px"><story /></div>'})]},s={args:{default:`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>`,wrap:!0,class:"stack-container",direction:"row"},decorators:[()=>({template:'<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:180px;  height:100px"><story /></div>'})]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>\`,
    "class": "stack-container"
  },
  decorators: [() => ({
    template: \`<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:160px;  height:88px"><story /></div>\`
  })]
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>\`,
    "class": "stack-container",
    "direction": "row"
  },
  decorators: [() => ({
    template: \`<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:160px;  height:88px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>\`,
    "wrap": true,
    "class": "stack-container"
  },
  decorators: [() => ({
    template: \`<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:160px;  height:120px"><story /></div>\`
  })]
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>\`,
    "wrap": true,
    "class": "stack-container",
    "direction": "row"
  },
  decorators: [() => ({
    template: \`<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:180px;  height:100px"><story /></div>\`
  })]
}`,...s.parameters?.docs?.source}}};const u=["DefaultNoWrapColumn","NoWrapRow","WrapColumn","WrapRow"];export{n as DefaultNoWrapColumn,t as NoWrapRow,a as WrapColumn,s as WrapRow,u as __namedExportsOrder,f as default};
