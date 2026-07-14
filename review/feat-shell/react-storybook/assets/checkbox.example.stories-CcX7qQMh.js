import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{t as n,ut as r}from"./src-DoBU-6Jr.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCustomButton/Checkbox`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},noText:{control:`boolean`},wrap:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{children:(0,i.jsxs)(`label`,{htmlFor:`checkbox01`,children:[(0,i.jsx)(`input`,{type:`checkbox`,id:`checkbox01`}),`Checkbox`]})},render:e=>(0,i.jsx)(r,{...e})},c={args:{children:(0,i.jsxs)(`label`,{htmlFor:`checkbox02`,children:[(0,i.jsx)(`input`,{type:`checkbox`,id:`checkbox02`,checked:!0}),`Checkbox`]})},render:e=>(0,i.jsx)(r,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label htmlFor="checkbox01"><input type="checkbox" id="checkbox01" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label htmlFor="checkbox02"><input type="checkbox" id="checkbox02" checked />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...c.parameters?.docs?.source}}},l=[`Unchecked`,`Checked`]}))();export{c as Checked,s as Unchecked,l as __namedExportsOrder,o as default};