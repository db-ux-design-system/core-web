import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./custom-button-gzkn4Nhi.js";import"./index-20fQ7N7z.js";import"./iframe-B14DFsEh.js";import"./preload-helper-COTrxSA1.js";const{fn:k}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBCustomButton/Multi Line Text",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},noText:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},i={args:{width:"full",children:e.jsx("button",{children:"Multi-line Text With Automatic Line Breaks"})},render:t=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{...t})})},o={args:{width:"full",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Multi-line Text With Automatic Line Breaks"]})},render:t=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{...t})})},s={args:{width:"full",children:e.jsx("a",{href:"#",children:"Multi-line Text With Automatic Line Breaks"})},render:t=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{...t})})},a={args:{width:"full",icon:"x_placeholder",children:e.jsx("button",{children:"Multi-line Text With Automatic Line Breaks and Icon"})},render:t=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{...t})})},n={args:{width:"full",icon:"x_placeholder",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Multi-line Text With Automatic Line Breaks and Icon"]})},render:t=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{...t})})},l={args:{width:"full",icon:"x_placeholder",children:e.jsx("a",{href:"#",children:"Multi-line Text With Automatic Line Breaks and Icon"})},render:t=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{...t})})},c={args:{size:"small",children:e.jsx("button",{children:"Button Small Multi-line Text With Automatic Line Breaks"})},render:t=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{...t})})},d={args:{size:"small",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Button Small Multi-line Text With Automatic Line Breaks"]})},render:t=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{...t})})},u={args:{size:"small",children:e.jsx("a",{href:"#",children:"Button Small Multi-line Text With Automatic Line Breaks"})},render:t=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{...t})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "children": <button>Multi-line Text With Automatic Line Breaks</button>
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBCustomButton {...properties} /></div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "children": <label><input type="checkbox" />
                        Multi-line Text With Automatic Line Breaks
                    </label>
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBCustomButton {...properties} /></div>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "children": <a href="#">Multi-line Text With Automatic Line Breaks</a>
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBCustomButton {...properties} /></div>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "icon": "x_placeholder",
    "children": <button>
                        Multi-line Text With Automatic Line Breaks and Icon
                    </button>
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBCustomButton {...properties} /></div>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "icon": "x_placeholder",
    "children": <label><input type="checkbox" />
                        Multi-line Text With Automatic Line Breaks and Icon
                    </label>
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBCustomButton {...properties} /></div>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "icon": "x_placeholder",
    "children": <a href="#">
                        Multi-line Text With Automatic Line Breaks and Icon
                    </a>
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBCustomButton {...properties} /></div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "children": <button>
                        Button Small Multi-line Text With Automatic Line Breaks
                    </button>
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBCustomButton {...properties} /></div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "children": <label><input type="checkbox" />
                        Button Small Multi-line Text With Automatic Line Breaks
                    </label>
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBCustomButton {...properties} /></div>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "children": <a href="#">
                        Button Small Multi-line Text With Automatic Line Breaks
                    </a>
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBCustomButton {...properties} /></div>
}`,...u.parameters?.docs?.source}}};const y=["AutomaticLineBreaksButton","AutomaticLineBreaksCheckbox","AutomaticLineBreaksLink","WithIconButton","WithIconCheckbox","WithIconLink","SmallButton","SmallCheckbox","SmallLink"];export{i as AutomaticLineBreaksButton,o as AutomaticLineBreaksCheckbox,s as AutomaticLineBreaksLink,c as SmallButton,d as SmallCheckbox,u as SmallLink,a as WithIconButton,n as WithIconCheckbox,l as WithIconLink,y as __namedExportsOrder,b as default};
