import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./custom-button-BBRcDBdL.js";import"./index-D2E5Z_bU.js";import"./iframe-DC0PqVxl.js";import"./preload-helper-DoCI1IQB.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBCustomButton/Width",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},wrap:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},r={args:{width:"auto",children:e.jsx("button",{type:"button",children:"Button"})},render:t=>e.jsx(o,{...t})},n={args:{width:"auto",children:e.jsxs("label",{htmlFor:"checkbox23",children:[e.jsx("input",{type:"checkbox",id:"checkbox23"}),"Checkbox"]})},render:t=>e.jsx(o,{...t})},s={args:{width:"auto",children:e.jsx("a",{href:"#",children:"Link"})},render:t=>e.jsx(o,{...t})},a={args:{width:"full",children:e.jsx("button",{type:"button",children:"Button"})},render:t=>e.jsx("div",{style:{width:"500px"},children:e.jsx(o,{...t})})},c={args:{width:"full",children:e.jsxs("label",{htmlFor:"checkbox24",children:[e.jsx("input",{type:"checkbox",id:"checkbox24"}),"Checkbox"]})},render:t=>e.jsx("div",{style:{width:"500px"},children:e.jsx(o,{...t})})},i={args:{width:"full",children:e.jsx("a",{href:"#",children:"Link"})},render:t=>e.jsx("div",{style:{width:"500px"},children:e.jsx(o,{...t})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "children": <button type="button">Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "children": <label htmlFor="checkbox23"><input type="checkbox" id="checkbox23" />
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
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "children": <label htmlFor="checkbox24"><input type="checkbox" id="checkbox24" />
                        Checkbox
                    </label>
  },
  render: (properties: any) => <div style={{
    width: '500px'
  }}><DBCustomButton {...properties} /></div>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "children": <a href="#">Link</a>
  },
  render: (properties: any) => <div style={{
    width: '500px'
  }}><DBCustomButton {...properties} /></div>
}`,...i.parameters?.docs?.source}}};const b=["DefaultAutoButton","DefaultAutoCheckbox","DefaultAutoLink","FullButton","FullCheckbox","FullLink"];export{r as DefaultAutoButton,n as DefaultAutoCheckbox,s as DefaultAutoLink,a as FullButton,c as FullCheckbox,i as FullLink,b as __namedExportsOrder,x as default};
