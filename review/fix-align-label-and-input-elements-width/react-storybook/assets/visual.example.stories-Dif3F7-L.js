import{i as e}from"./preload-helper-CsUyuPMi.js";import{t}from"./jsx-runtime-7HON0nSk.js";import{t as n,w as r}from"./src-DC0kYnXS.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBNotification/Visual`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:a()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},s={args:{icon:`information_circle`,children:`(Default) Icon`},render:e=>(0,i.jsx)(`div`,{style:{width:`300px`},children:(0,i.jsx)(r,{...e})})},c={args:{image:(0,i.jsx)(`img`,{src:`/assets/images/placeholder.jpg`,alt:`this is a fancy placeholder`}),children:`Image`},render:e=>(0,i.jsx)(`div`,{style:{width:`300px`},children:(0,i.jsx)(r,{...e})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "children": "(Default) Icon"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "image": <img src="/assets/images/placeholder.jpg" alt="this is a fancy placeholder" />,
    "children": "Image"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l=[`DefaultIcon`,`Image`]}))();export{s as DefaultIcon,c as Image,l as __namedExportsOrder,o as default};