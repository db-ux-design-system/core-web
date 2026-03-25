import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./custom-button-DR-HalG0.js";import"./index-D2E5Z_bU.js";import"./iframe-DOGZb9UQ.js";import"./preload-helper-6AdaFMoN.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBCustomButton/Disabled",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},wrap:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{children:e.jsx("button",{type:"button",children:"Button"})},render:r=>e.jsx(o,{...r})},n={args:{children:e.jsxs("label",{htmlFor:"checkbox06",children:[e.jsx("input",{type:"checkbox",id:"checkbox06"}),"Checkbox"]})},render:r=>e.jsx(o,{...r})},s={args:{children:e.jsx("a",{href:"#",children:"Link"})},render:r=>e.jsx(o,{...r})},a={args:{children:e.jsx("button",{type:"button",disabled:!0,children:"Button"})},render:r=>e.jsx(o,{...r})},c={args:{children:e.jsxs("label",{htmlFor:"checkbox07",children:[e.jsx("input",{type:"checkbox",id:"checkbox07",disabled:!0}),"Checkbox"]})},render:r=>e.jsx(o,{...r})},l={args:{children:e.jsx("a",{href:"#","aria-disabled":"true",tabIndex:-1,children:"Link"})},render:r=>e.jsx(o,{...r})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <button type="button">Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label htmlFor="checkbox06"><input type="checkbox" id="checkbox06" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <a href="#">Link</a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <button type="button" disabled>
                    Button
                </button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label htmlFor="checkbox07"><input type="checkbox" id="checkbox07" disabled />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <a href="#" aria-disabled="true" tabIndex={-1}>
                    Link
                </a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...l.parameters?.docs?.source}}};const x=["DefaultFalseButton","DefaultFalseCheckbox","DefaultFalseLink","TrueButton","TrueCheckbox","TrueLink"];export{t as DefaultFalseButton,n as DefaultFalseCheckbox,s as DefaultFalseLink,a as TrueButton,c as TrueCheckbox,l as TrueLink,x as __namedExportsOrder,h as default};
