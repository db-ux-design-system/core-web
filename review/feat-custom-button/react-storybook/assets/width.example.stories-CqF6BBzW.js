import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./custom-button-dtg8Hsil.js";import"./index-C0vvPcr0.js";import"./iframe-C0Q1XASu.js";import"./preload-helper-COTrxSA1.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBCustomButton/Width",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{width:"auto",children:e.jsx("button",{type:"button",children:"Button"})},render:t=>e.jsx(r,{...t})},n={args:{width:"auto",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Checkbox"]})},render:t=>e.jsx(r,{...t})},s={args:{width:"auto",children:e.jsx("a",{href:"#",children:"Link"})},render:t=>e.jsx(r,{...t})},a={args:{width:"full",children:e.jsx("button",{type:"button",children:"Button"})},render:t=>e.jsx("div",{style:{width:"500px"},children:e.jsx(r,{...t})})},i={args:{width:"full",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Checkbox"]})},render:t=>e.jsx("div",{style:{width:"500px"},children:e.jsx(r,{...t})})},l={args:{width:"full",children:e.jsx("a",{href:"#",children:"Link"})},render:t=>e.jsx("div",{style:{width:"500px"},children:e.jsx(r,{...t})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "children": <button type="button">Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "children": <label><input type="checkbox" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "children": <a href="#">Link</a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "children": <button type="button">Button</button>
  },
  render: (properties: any) => <div style={{
    width: '500px'
  }}><DBCustomButton {...properties} /></div>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "children": <label><input type="checkbox" />
                        Checkbox
                    </label>
  },
  render: (properties: any) => <div style={{
    width: '500px'
  }}><DBCustomButton {...properties} /></div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "children": <a href="#">Link</a>
  },
  render: (properties: any) => <div style={{
    width: '500px'
  }}><DBCustomButton {...properties} /></div>
}`,...l.parameters?.docs?.source}}};const b=["DefaultAutoButton","DefaultAutoCheckbox","DefaultAutoLink","FullButton","FullCheckbox","FullLink"];export{o as DefaultAutoButton,n as DefaultAutoCheckbox,s as DefaultAutoLink,a as FullButton,i as FullCheckbox,l as FullLink,b as __namedExportsOrder,x as default};
