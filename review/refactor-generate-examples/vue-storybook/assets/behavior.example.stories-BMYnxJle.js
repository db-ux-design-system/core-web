import{_ as r,a}from"./tab-list-D9dAxwvb.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./constants-qyp1P7vr.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBTabItem/Behavior",component:a,render:o=>({components:{DBTabItem:a,DBTabList:r},setup(){return{args:o}},template:`
      <DBTabItem v-bind="args">
      ${o.default}
      </DBTabItem>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"}}},t={args:{default:"",label:"(Default) Auto Width"}},e={args:{default:"",style:{width:"500px"}},decorators:[()=>({template:'<div style="  width:500px"><story /></div>'})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "(Default) Auto Width"
  }
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
}`,...e.parameters?.docs?.source}}};const u=["DefaultAutoWidth","Widthfull"];export{t as DefaultAutoWidth,e as Widthfull,u as __namedExportsOrder,p as default};
