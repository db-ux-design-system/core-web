import{_ as r}from"./link-BktheojS.js";import"./iframe-6Mx4-xKM.js";import"./preload-helper-_n2GBM2K.js";import"./index-S2nzjHTj.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBLink/Show Icon",component:r,render:t=>({components:{DBLink:r},setup(){return{args:t}},template:`
      <DBLink v-bind="args">
      ${t.default}
      </DBLink>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},variant:{control:"text"},disabled:{control:"boolean"},size:{control:"text"},content:{control:"text"},showIcon:{control:"boolean"},wrap:{control:"text"}}},e={args:{default:"(Default) True",showIcon:!0,href:"#"}},o={args:{default:"False",showIcon:!1,href:"#"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) True",
    "showIcon": true,
    "href": "#"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "False",
    "showIcon": false,
    "href": "#"
  }
}`,...o.parameters?.docs?.source}}};const p=["DefaultTrue","False"];export{e as DefaultTrue,o as False,p as __namedExportsOrder,u as default};
