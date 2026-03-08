import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as i}from"./button-B3gJE3R1.js";import"./index-D2E5Z_bU.js";import"./iframe-CiUFPK1z.js";import"./preload-helper-BVVqbGQe.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBButton/Multi Line Text",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},wrap:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},o={args:{width:"full",onClick:a(),children:"Multi-line Text With Automatic Line Breaks"},render:e=>t.jsx("div",{style:{width:"300px"},children:t.jsx(i,{...e})})},r={args:{width:"full",icon:"x_placeholder",onClick:a(),children:"Multi-line Text With Automatic Line Breaks and Icon"},render:e=>t.jsx("div",{style:{width:"300px"},children:t.jsx(i,{...e})})},n={args:{size:"small",onClick:a(),children:"Button Small Multi-line Text With Automatic Line Breaks"},render:e=>t.jsx("div",{style:{width:"300px"},children:t.jsx(i,{...e})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "onClick": fn(),
    "children": "Button Small Multi-line Text With Automatic Line Breaks"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBButton {...properties} /></div>
}`,...n.parameters?.docs?.source}}};const m=["AutomaticLineBreaks","AutomaticLineBreaksandIcon","SmallAutomaticLineBreaks"];export{o as AutomaticLineBreaks,r as AutomaticLineBreaksandIcon,n as SmallAutomaticLineBreaks,m as __namedExportsOrder,p as default};
