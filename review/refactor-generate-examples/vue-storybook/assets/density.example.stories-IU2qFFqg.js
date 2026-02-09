import{_ as n}from"./link-z-qbJaFT.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBLink/Density",component:n,render:a=>({components:{DBLink:n},setup(){return{args:a}},template:`
      <DBLink v-bind="args">
      ${a.default}
      </DBLink>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},variant:{control:"text"},disabled:{control:"boolean"},size:{control:"text"},content:{control:"text"},showIcon:{control:"boolean"},wrap:{control:"text"}}},e={args:{default:"","data-density":"functional",href:"#",text:"Functional"}},t={args:{default:"","data-density":"regular",href:"#",text:"(Default) Regular"}},r={args:{default:"","data-density":"expressive",href:"#",text:"Expressive"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "data-density": "functional",
    "href": "#",
    "text": "Functional"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "data-density": "regular",
    "href": "#",
    "text": "(Default) Regular"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "data-density": "expressive",
    "href": "#",
    "text": "Expressive"
  }
}`,...r.parameters?.docs?.source}}};const u=["Functional","DefaultRegular","Expressive"];export{t as DefaultRegular,r as Expressive,e as Functional,u as __namedExportsOrder,d as default};
