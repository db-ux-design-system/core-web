import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./tag-6qiM_eRF.js";var a=t({DefaultFalse:()=>l,True:()=>u,__namedExportsOrder:()=>d,default:()=>c}),o,s,c,l,u,d;function f(){return(f=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTag/Disabled`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onRemove:s()},argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},behavior:{control:`select`,options:[`static`,`removable`]},showIcon:{control:`boolean`},noText:{control:`boolean`},content:{control:`text`},showCheckState:{control:`boolean`},overflow:{control:`boolean`},removeButton:{control:`text`},text:{control:`text`},value:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onRemove:{action:`onRemove`}}},l={args:{children:(0,o.jsxs)(`label`,{children:[(0,o.jsx)(`input`,{type:`checkbox`}),`(Default) False`]})},render:e=>(0,o.jsx)(i,{...e})},u={args:{children:(0,o.jsxs)(`label`,{children:[(0,o.jsx)(`input`,{type:`checkbox`,disabled:!0}),`True`]})},render:e=>(0,o.jsx)(i,{...e})},d=[`DefaultFalse`,`True`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label><input type="checkbox" />
                    (Default) False
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label><input type="checkbox" disabled />
                    True
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...u.parameters?.docs?.source}}}})))()}export{f as i,u as n,a as r,l as t};