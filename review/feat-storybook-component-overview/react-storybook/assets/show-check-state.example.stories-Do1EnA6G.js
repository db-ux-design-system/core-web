import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./tag-CFyoV715.js";var a=t({DefaultTrue:()=>l,False:()=>u,__namedExportsOrder:()=>d,default:()=>c}),o,s,c,l,u,d;function f(){return(f=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTag/Show Check State`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onRemove:s()},argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},behavior:{control:`select`,options:[`static`,`removable`]},showIcon:{control:`boolean`},noText:{control:`boolean`},content:{control:`text`},showCheckState:{control:`boolean`},overflow:{control:`boolean`},removeButton:{control:`text`},text:{control:`text`},value:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onRemove:{action:`onRemove`}}},l={args:{showCheckState:!0,children:(0,o.jsxs)(`label`,{children:[(0,o.jsx)(`input`,{type:`checkbox`}),`(Default) True`]})},render:e=>(0,o.jsx)(i,{...e})},u={args:{showCheckState:!1,children:(0,o.jsxs)(`label`,{children:[(0,o.jsx)(`input`,{type:`checkbox`}),`False`]})},render:e=>(0,o.jsx)(i,{...e})},d=[`DefaultTrue`,`False`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "showCheckState": true,
    "children": <label><input type="checkbox" />
                    (Default) True
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "showCheckState": false,
    "children": <label><input type="checkbox" />
                    False
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...u.parameters?.docs?.source}}}})))()}export{a as i,u as n,f as r,l as t};