import{_ as c}from"./infotext-C1MSMu4c.js";import{_ as m}from"./icon-Dbc0Wswt.js";import{_ as s}from"./badge-378uP2Dd.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";import"./constants-qyp1P7vr.js";const{fn:_}=__STORYBOOK_MODULE_TEST__,B={title:"Components/DBBadge/Content",component:s,render:r=>({components:{DBBadge:s,DBIcon:m,DBInfotext:c},setup(){return{args:r}},template:`
      <DBBadge v-bind="args">
      ${r.default}
      </DBBadge>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"text"},semantic:{control:"text"},size:{control:"text"},placement:{control:"text"}}},e={args:{default:"(Default) Text"}},a={args:{default:""}},t={args:{default:"Dot - Small",semantic:"informational",size:"small",icon:"none"}},n={args:{default:"",semantic:"critical",emphasis:"strong"}},o={args:{default:"Icon - Small",semantic:"informational",size:"small",icon:"none"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) Text"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: ""
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Dot - Small",
    "semantic": "informational",
    "size": "small",
    "icon": "none"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`\`,
    "semantic": "critical",
    "emphasis": "strong"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Icon - Small",
    "semantic": "informational",
    "size": "small",
    "icon": "none"
  }
}`,...o.parameters?.docs?.source}}};const D=["DefaultText","DotSmall","IconSmall","BadgeContent3","BadgeContent4"];export{n as BadgeContent3,o as BadgeContent4,e as DefaultText,a as DotSmall,t as IconSmall,D as __namedExportsOrder,B as default};
