import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DnaggZxp.js";import{S as n,t as r}from"./src-C7TXoUjo.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBTag/Show Check State`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onRemove:a()},argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},behavior:{control:`select`,options:[`static`,`removable`]},showIcon:{control:`boolean`},noText:{control:`boolean`},content:{control:`text`},showCheckState:{control:`boolean`},overflow:{control:`boolean`},removeButton:{control:`text`},text:{control:`text`},value:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onRemove:{action:`onRemove`}}},s={args:{showCheckState:!0,children:(0,i.jsxs)(`label`,{children:[(0,i.jsx)(`input`,{type:`checkbox`}),`(Default) True`]})},render:e=>(0,i.jsx)(n,{...e})},c={args:{showCheckState:!1,children:(0,i.jsxs)(`label`,{children:[(0,i.jsx)(`input`,{type:`checkbox`}),`False`]})},render:e=>(0,i.jsx)(n,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "showCheckState": true,
    "children": <label><input type="checkbox" />
                    (Default) True
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "showCheckState": false,
    "children": <label><input type="checkbox" />
                    False
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...c.parameters?.docs?.source}}},l=[`DefaultTrue`,`False`]}))();export{s as DefaultTrue,c as False,l as __namedExportsOrder,o as default};