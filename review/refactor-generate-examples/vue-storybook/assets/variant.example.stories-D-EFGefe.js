import{_ as a}from"./link-BktheojS.js";import"./iframe-6Mx4-xKM.js";import"./preload-helper-_n2GBM2K.js";import"./index-S2nzjHTj.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBLink/Variant",component:a,render:r=>({components:{DBLink:a},setup(){return{args:r}},template:`
      <DBLink v-bind="args">
      ${r.default}
      </DBLink>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},variant:{control:"text"},disabled:{control:"boolean"},size:{control:"text"},content:{control:"text"},showIcon:{control:"boolean"},wrap:{control:"text"}}},e={args:{default:"(Default) Adaptive",href:"#"}},t={args:{default:"Brand",href:"#",variant:"brand"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) Adaptive",
    "href": "#"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Brand",
    "href": "#",
    "variant": "brand"
  }
}`,...t.parameters?.docs?.source}}};const i=["DefaultAdaptive","Brand"];export{t as Brand,e as DefaultAdaptive,i as __namedExportsOrder,p as default};
