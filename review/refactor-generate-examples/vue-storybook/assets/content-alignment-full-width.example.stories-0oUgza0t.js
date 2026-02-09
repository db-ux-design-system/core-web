import{_ as a,a as r}from"./tab-list-D9dAxwvb.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./constants-qyp1P7vr.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBTabItem/Content Alignment Full Width",component:r,render:o=>({components:{DBTabItem:r,DBTabList:a},setup(){return{args:o}},template:`
      <DBTabItem v-bind="args">
      ${o.default}
      </DBTabItem>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"}}},t={args:{default:"",style:{width:"500px"}},decorators:[()=>({template:'<div style="  width:500px"><story /></div>'})]},e={args:{default:"",style:{width:"500px"}},decorators:[()=>({template:'<div style="  width:500px"><story /></div>'})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`\`,
    "style": {
      width: '500px'
    }
  },
  decorators: [() => ({
    template: \`<div style="  width:500px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`\`,
    "style": {
      width: '500px'
    }
  },
  decorators: [() => ({
    template: \`<div style="  width:500px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};const u=["Left","Centered"];export{e as Centered,t as Left,u as __namedExportsOrder,m as default};
