import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./tag-COfa6jC6.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBTag/Disabled`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onRemove:a()},argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},behavior:{control:`select`,options:[`static`,`removable`]},showIcon:{control:`boolean`},noText:{control:`boolean`},content:{control:`text`},showCheckState:{control:`boolean`},overflow:{control:`boolean`},removeButton:{control:`text`},text:{control:`text`},value:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onRemove:{action:`onRemove`}}},s={args:{children:(0,i.jsxs)(`label`,{children:[(0,i.jsx)(`input`,{type:`checkbox`}),`(Default) False`]})},render:e=>(0,i.jsx)(r,{...e})},c={args:{children:(0,i.jsxs)(`label`,{children:[(0,i.jsx)(`input`,{type:`checkbox`,disabled:!0}),`True`]})},render:e=>(0,i.jsx)(r,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label><input type="checkbox" />
                    (Default) False
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label><input type="checkbox" disabled />
                    True
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...c.parameters?.docs?.source}}},l=[`DefaultFalse`,`True`]})))()}u();export{s as DefaultFalse,c as True,l as __namedExportsOrder,o as default};