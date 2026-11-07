import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./tag-DBXTve8P.js";var a=t({DefaultStatic:()=>l,InteractiveButton:()=>d,InteractiveCheckbox:()=>p,InteractiveLink:()=>f,InteractiveRadio:()=>m,InteractiveRadio2:()=>h,Removable:()=>u,__namedExportsOrder:()=>g,default:()=>c}),o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTag/Behavior`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onRemove:s()},argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},behavior:{control:`select`,options:[`static`,`removable`]},showIcon:{control:`boolean`},noText:{control:`boolean`},content:{control:`text`},showCheckState:{control:`boolean`},overflow:{control:`boolean`},removeButton:{control:`text`},text:{control:`text`},value:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onRemove:{action:`onRemove`}}},l={args:{children:`(Default) Static`},render:e=>(0,o.jsx)(i,{...e})},u={args:{behavior:`removable`,children:`Removable`},render:e=>(0,o.jsx)(i,{...e})},d={args:{children:(0,o.jsx)(`button`,{children:`Interactive (Button)`})},render:e=>(0,o.jsx)(i,{...e})},f={args:{children:(0,o.jsx)(`a`,{href:`#`,children:`Interactive (Link)`})},render:e=>(0,o.jsx)(i,{...e})},p={args:{children:(0,o.jsxs)(`label`,{children:[(0,o.jsx)(`input`,{type:`checkbox`}),`Interactive (Checkbox)`]})},render:e=>(0,o.jsx)(i,{...e})},m={args:{children:(0,o.jsxs)(`label`,{children:[(0,o.jsx)(`input`,{type:`radio`,name:`radio01`}),`Interactive (Radio)`]})},render:e=>(0,o.jsx)(i,{...e})},h={args:{children:(0,o.jsxs)(`label`,{children:[(0,o.jsx)(`input`,{type:`radio`,name:`radio01`}),`Interactive Radio 2`]})},render:e=>(0,o.jsx)(i,{...e})},g=[`DefaultStatic`,`Removable`,`InteractiveButton`,`InteractiveLink`,`InteractiveCheckbox`,`InteractiveRadio`,`InteractiveRadio2`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) Static"
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "removable",
    "children": "Removable"
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <button>Interactive (Button)</button>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <a href="#">Interactive (Link)</a>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label><input type="checkbox" />
                    Interactive (Checkbox)
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label><input type="radio" name="radio01" />
                    Interactive (Radio)
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label><input type="radio" name="radio01" />
                    Interactive Radio 2
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...h.parameters?.docs?.source}}}})))()}export{m as a,a as c,f as i,_ as l,d as n,h as o,p as r,u as s,l as t};