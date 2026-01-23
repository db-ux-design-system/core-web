import{_ as a}from"./link-BktheojS.js";import"./iframe-6Mx4-xKM.js";import"./preload-helper-_n2GBM2K.js";import"./index-S2nzjHTj.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBLink/Disabled",component:a,render:r=>({components:{DBLink:a},setup(){return{args:r}},template:`
      <DBLink v-bind="args">
      ${r.default}
      </DBLink>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},variant:{control:"text"},disabled:{control:"boolean"},size:{control:"text"},content:{control:"text"},showIcon:{control:"boolean"},wrap:{control:"text"}}},e={args:{default:"(Default) False",disabled:!1,href:"#"}},t={args:{default:"True",disabled:!0,href:"#"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) False",
    "disabled": false,
    "href": "#"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "True",
    "disabled": true,
    "href": "#"
  }
}`,...t.parameters?.docs?.source}}};const u=["DefaultFalse","True"];export{e as DefaultFalse,t as True,u as __namedExportsOrder,d as default};
