import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./custom-button-C9CZXCMt.js";var a=t({DefaultFalseButton:()=>l,DefaultFalseCheckbox:()=>u,DefaultFalseLink:()=>d,TrueButton:()=>f,TrueCheckbox:()=>p,TrueLink:()=>m,__namedExportsOrder:()=>h,default:()=>c}),o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBCustomButton/Disabled`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},noText:{control:`boolean`},wrap:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{children:(0,o.jsx)(`button`,{type:`button`,children:`Button`})},render:e=>(0,o.jsx)(i,{...e})},u={args:{children:(0,o.jsxs)(`label`,{htmlFor:`checkbox06`,children:[(0,o.jsx)(`input`,{type:`checkbox`,id:`checkbox06`}),`Checkbox`]})},render:e=>(0,o.jsx)(i,{...e})},d={args:{children:(0,o.jsx)(`a`,{href:`#`,children:`Link`})},render:e=>(0,o.jsx)(i,{...e})},f={args:{children:(0,o.jsx)(`button`,{type:`button`,disabled:!0,children:`Button`})},render:e=>(0,o.jsx)(i,{...e})},p={args:{children:(0,o.jsxs)(`label`,{htmlFor:`checkbox07`,children:[(0,o.jsx)(`input`,{type:`checkbox`,id:`checkbox07`,disabled:!0}),`Checkbox`]})},render:e=>(0,o.jsx)(i,{...e})},m={args:{children:(0,o.jsx)(`a`,{href:`#`,"aria-disabled":`true`,tabIndex:-1,children:`Link`})},render:e=>(0,o.jsx)(i,{...e})},h=[`DefaultFalseButton`,`DefaultFalseCheckbox`,`DefaultFalseLink`,`TrueButton`,`TrueCheckbox`,`TrueLink`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <button type="button">Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label htmlFor="checkbox06"><input type="checkbox" id="checkbox06" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <a href="#">Link</a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <button type="button" disabled>
                    Button
                </button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label htmlFor="checkbox07"><input type="checkbox" id="checkbox07" disabled />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <a href="#" aria-disabled="true" tabIndex={-1}>
                    Link
                </a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...m.parameters?.docs?.source}}}})))()}export{p as a,g as c,f as i,u as n,m as o,d as r,a as s,l as t};