import{_ as n}from"./link-BktheojS.js";import"./iframe-6Mx4-xKM.js";import"./preload-helper-_n2GBM2K.js";import"./index-S2nzjHTj.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBLink/Density",component:n,render:a=>({components:{DBLink:n},setup(){return{args:a}},template:`
      <DBLink v-bind="args">
      ${a.default}
      </DBLink>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},variant:{control:"text"},disabled:{control:"boolean"},size:{control:"text"},content:{control:"text"},showIcon:{control:"boolean"},wrap:{control:"text"}}},e={args:{default:"Functional","data-density":"functional",href:"#"}},t={args:{default:"(Default) Regular","data-density":"regular",href:"#"}},r={args:{default:"Expressive","data-density":"expressive",href:"#"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Functional",
    "data-density": "functional",
    "href": "#"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) Regular",
    "data-density": "regular",
    "href": "#"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Expressive",
    "data-density": "expressive",
    "href": "#"
  }
}`,...r.parameters?.docs?.source}}};const u=["Functional","DefaultRegular","Expressive"];export{t as DefaultRegular,r as Expressive,e as Functional,u as __namedExportsOrder,d as default};
