import{_ as s}from"./infotext-C1MSMu4c.js";import{_ as o}from"./divider-h75wiN4i.js";import{_ as e}from"./stack-BW0bt_fh.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBStack/Variant",component:e,render:a=>({components:{DBStack:e,DBDivider:o,DBInfotext:s},setup(){return{args:a}},template:`
      <DBStack v-bind="args">
      ${a.default}
      </DBStack>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"text"},gap:{control:"text"},direction:{control:"text"},wrap:{control:"text"},alignment:{control:"text"},justifyContent:{control:"text"}}},t={args:{default:`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>`,class:"stack-container"},decorators:[()=>({template:'<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:200px"><story /></div>'})]},n={args:{default:`<span class="dummy-component"><a href="#">Content 1</a></span
      ><DBDivider></DBDivider><span class="dummy-component">Content 2</span
      ><DBDivider></DBDivider
      ><span class="dummy-component">Content 3</span>`,class:"stack-container",variant:"divider"},decorators:[()=>({template:'<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:200px"><story /></div>'})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<span class="dummy-component"><a href="#">Content 1</a></span
      ><span class="dummy-component">Content 2</span
      ><span class="dummy-component">Content 3</span>\`,
    "class": "stack-container"
  },
  decorators: [() => ({
    template: \`<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:200px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<span class="dummy-component"><a href="#">Content 1</a></span
      ><DBDivider></DBDivider><span class="dummy-component">Content 2</span
      ><DBDivider></DBDivider
      ><span class="dummy-component">Content 3</span>\`,
    "class": "stack-container",
    "variant": "divider"
  },
  decorators: [() => ({
    template: \`<div style="  align-items:flex-start;  align-self:flex-start;  display:flex;  flex-direction:column;  gap:var(--db-spacing-fixed-sm);  width:200px"><story /></div>\`
  })]
}`,...n.parameters?.docs?.source}}};const u=["DefaultSimple","Divider"];export{t as DefaultSimple,n as Divider,u as __namedExportsOrder,f as default};
