import{_ as n}from"./link-BktheojS.js";import"./iframe-6Mx4-xKM.js";import"./preload-helper-_n2GBM2K.js";import"./index-S2nzjHTj.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBLink/Content",component:n,render:r=>({components:{DBLink:n},setup(){return{args:r}},template:`
      <DBLink v-bind="args">
      ${r.default}
      </DBLink>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},variant:{control:"text"},disabled:{control:"boolean"},size:{control:"text"},content:{control:"text"},showIcon:{control:"boolean"},wrap:{control:"text"}}},e={args:{default:"(Default) Internal",href:"#"}},t={args:{default:"External",href:"#",content:"external"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) Internal",
    "href": "#"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "External",
    "href": "#",
    "content": "external"
  }
}`,...t.parameters?.docs?.source}}};const m=["DefaultInternal","External"];export{e as DefaultInternal,t as External,m as __namedExportsOrder,p as default};
