import{d,c as n,a as b,t as y,n as g,b as f,o as k}from"./iframe-CK_RYk1l.js";import"./preload-helper-Dfw-w7K7.js";const l=d({__name:"Button",props:{label:{},primary:{type:Boolean,default:!1},size:{},backgroundColor:{}},emits:["click"],setup(s,{emit:c}){const e=s,m=c,u=n(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size||"medium"}`]:!0})),i=n(()=>({backgroundColor:e.backgroundColor})),p=()=>{m("click",1)};return(_,S)=>(k(),b("button",{type:"button",class:f(u.value),onClick:p,style:g(i.value)},y(s.label),7))}});l.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"label",description:"The label of the button",required:!0,type:{name:"string"}},{name:"primary",description:"primary or secondary button",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"size of the button",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]}},{name:"backgroundColor",description:"background color of the button",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["number"]}}],sourceFiles:["/home/runner/work/core-web/core-web/storybooks/vue-storybook/src/stories/Button.vue"]};const{fn:B}=__STORYBOOK_MODULE_TEST__,h={title:"Example/Button",component:l,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},backgroundColor:{control:"color"}},args:{primary:!1,onClick:B()}},r={args:{primary:!0,label:"Button"}},o={args:{primary:!1,label:"Button"}},a={args:{label:"Button",size:"large"}},t={args:{label:"Button",size:"small"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    primary: false,
    label: 'Button'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    size: 'large'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    size: 'small'
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary","Secondary","Large","Small"];export{a as Large,r as Primary,o as Secondary,t as Small,v as __namedExportsOrder,h as default};
