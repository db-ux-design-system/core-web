import{_ as c}from"./infotext-06GstPkD.js";import"./iframe-IRMWFPfw.js";import"./preload-helper-_n2GBM2K.js";import"./index-S2nzjHTj.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBInfotext/Semantic",component:c,render:o=>({components:{DBInfotext:c},setup(){return{args:o}},template:`
      <DBInfotext v-bind="args">
      ${o.default}
      </DBInfotext>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{semantic:{control:"text"},size:{control:"text"},showIcon:{control:"boolean"}}},a={args:{default:"(Default) Adaptive"}},e={args:{default:"Neutral",semantic:"neutral"}},r={args:{default:"Critical",semantic:"critical"}},t={args:{default:"Informational",semantic:"informational"}},s={args:{default:"Successful",semantic:"successful"}},n={args:{default:"Warning",semantic:"warning"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) Adaptive"
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Neutral",
    "semantic": "neutral"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Critical",
    "semantic": "critical"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Informational",
    "semantic": "informational"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Successful",
    "semantic": "successful"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Warning",
    "semantic": "warning"
  }
}`,...n.parameters?.docs?.source}}};const f=["DefaultAdaptive","Neutral","Critical","Informational","Successful","Warning"];export{r as Critical,a as DefaultAdaptive,t as Informational,e as Neutral,s as Successful,n as Warning,f as __namedExportsOrder,p as default};
