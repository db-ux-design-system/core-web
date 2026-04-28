import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{p as n,t as r}from"./src-FlJ3DuBk.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBNotification/Show Headline`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:a()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},s={args:{headline:`Headline`,showHeadline:!0,children:`(Default) True`},render:e=>(0,i.jsx)(`div`,{style:{width:`300px`},children:(0,i.jsx)(n,{...e})})},c={args:{headline:`Headline`,showHeadline:!1,children:`False`},render:e=>(0,i.jsx)(`div`,{style:{width:`300px`},children:(0,i.jsx)(n,{...e})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "showHeadline": true,
    "children": "(Default) True"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "showHeadline": false,
    "children": "False"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l=[`DefaultTrue`,`False`]}))();export{s as DefaultTrue,c as False,l as __namedExportsOrder,o as default};