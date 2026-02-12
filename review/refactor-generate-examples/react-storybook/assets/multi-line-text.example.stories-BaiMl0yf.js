import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./button-DnZnbJNC.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBButton/Multi Line Text",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},o={args:{width:"full",onClick:a(),children:"Multi-line Text With Automatic Line Breaks"},render:e=>t.jsx("div",{style:{width:"300px"},children:t.jsx(n,{...e})})},r={args:{width:"full",icon:"x_placeholder",onClick:a(),children:"Multi-line Text With Automatic Line Breaks and Icon"},render:e=>t.jsx("div",{style:{width:"300px"},children:t.jsx(n,{...e})})},i={args:{size:"small",onClick:a(),children:"Button Small Multi-line Text With Automatic Line Breaks"},render:e=>t.jsx("div",{style:{width:"300px"},children:t.jsx(n,{...e})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "onClick": fn(),
    "children": "Multi-line Text With Automatic Line Breaks"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBButton {...properties} /></div>
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "icon": "x_placeholder",
    "onClick": fn(),
    "children": "Multi-line Text With Automatic Line Breaks and Icon"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBButton {...properties} /></div>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "onClick": fn(),
    "children": "Button Small Multi-line Text With Automatic Line Breaks"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBButton {...properties} /></div>
}`,...i.parameters?.docs?.source}}};const p=["AutomaticLineBreaks","AutomaticLineBreaksandIcon","SmallAutomaticLineBreaks"];export{o as AutomaticLineBreaks,r as AutomaticLineBreaksandIcon,i as SmallAutomaticLineBreaks,p as __namedExportsOrder,m as default};
