import{_ as a}from"./link-BktheojS.js";import"./iframe-6Mx4-xKM.js";import"./preload-helper-_n2GBM2K.js";import"./index-S2nzjHTj.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,i={title:"Components/DBLink/Wrap",component:a,render:r=>({components:{DBLink:a},setup(){return{args:r}},template:`
      <DBLink v-bind="args">
      ${r.default}
      </DBLink>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},variant:{control:"text"},disabled:{control:"boolean"},size:{control:"text"},content:{control:"text"},showIcon:{control:"boolean"},wrap:{control:"text"}}},e={args:{default:"(Default) False",wrap:!1,href:"#"}},t={args:{default:"True [Multiline]",wrap:!0,href:"#"},decorators:[()=>({template:'<div style="  width: 2ch"><story /></div>'})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) False",
    "wrap": false,
    "href": "#"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "True [Multiline]",
    "wrap": true,
    "href": "#"
  },
  decorators: [() => ({
    template: \`<div style="  width: 2ch"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};const u=["DefaultFalse","TrueMultiline"];export{e as DefaultFalse,t as TrueMultiline,u as __namedExportsOrder,i as default};
