import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./link-BYTgU30g.js";import{n as i,t as a}from"./notification-CRNbTbHu.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBNotification/Link Variant`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},l={args:{linkVariant:`block`,link:(0,o.jsx)(r,{href:`#`,children:`Textlink`}),children:`(Default) Block`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},u={args:{linkVariant:`inline`,link:(0,o.jsx)(r,{href:`#`,children:`Textlink`}),children:`Inline`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "block",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "(Default) Block"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "inline",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "Inline"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d=[`DefaultBlock`,`Inline`]})))()}f();export{l as DefaultBlock,u as Inline,d as __namedExportsOrder,c as default};