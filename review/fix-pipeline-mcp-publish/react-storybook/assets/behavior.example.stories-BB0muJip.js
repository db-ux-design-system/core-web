import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DnaggZxp.js";import{S as n,t as r}from"./src-DK5dTc4z.js";var i,a,o,s,c,l,u,d,f,p,m;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBTag/Behavior`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onRemove:a()},argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},behavior:{control:`select`,options:[`static`,`removable`]},showIcon:{control:`boolean`},noText:{control:`boolean`},content:{control:`text`},showCheckState:{control:`boolean`},overflow:{control:`boolean`},removeButton:{control:`text`},text:{control:`text`},value:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onRemove:{action:`onRemove`}}},s={args:{children:`(Default) Static`},render:e=>(0,i.jsx)(n,{...e})},c={args:{behavior:`removable`,children:`Removable`},render:e=>(0,i.jsx)(n,{...e})},l={args:{children:(0,i.jsx)(`button`,{children:`Interactive (Button)`})},render:e=>(0,i.jsx)(n,{...e})},u={args:{children:(0,i.jsx)(`a`,{href:`#`,children:`Interactive (Link)`})},render:e=>(0,i.jsx)(n,{...e})},d={args:{children:(0,i.jsxs)(`label`,{children:[(0,i.jsx)(`input`,{type:`checkbox`}),`Interactive (Checkbox)`]})},render:e=>(0,i.jsx)(n,{...e})},f={args:{children:(0,i.jsxs)(`label`,{children:[(0,i.jsx)(`input`,{type:`radio`,name:`radio01`}),`Interactive (Radio)`]})},render:e=>(0,i.jsx)(n,{...e})},p={args:{children:(0,i.jsxs)(`label`,{children:[(0,i.jsx)(`input`,{type:`radio`,name:`radio01`}),`Interactive Radio 2`]})},render:e=>(0,i.jsx)(n,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) Static"
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "removable",
    "children": "Removable"
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <button>Interactive (Button)</button>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <a href="#">Interactive (Link)</a>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label><input type="checkbox" />
                    Interactive (Checkbox)
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label><input type="radio" name="radio01" />
                    Interactive (Radio)
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label><input type="radio" name="radio01" />
                    Interactive Radio 2
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...p.parameters?.docs?.source}}},m=[`DefaultStatic`,`Removable`,`InteractiveButton`,`InteractiveLink`,`InteractiveCheckbox`,`InteractiveRadio`,`InteractiveRadio2`]}))();export{s as DefaultStatic,l as InteractiveButton,d as InteractiveCheckbox,u as InteractiveLink,f as InteractiveRadio,p as InteractiveRadio2,c as Removable,m as __namedExportsOrder,o as default};