import{i as e}from"./preload-helper-DcqgKNhp.js";import{t}from"./iframe-DU4iOJDf.js";import{R as n,W as r,t as i}from"./src-DD1FhsWN.js";var a,o,s,c,l,u;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBNotification/Link Variant`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},c={args:{linkVariant:`block`,link:(0,a.jsx)(r,{href:`#`,children:`Textlink`}),children:`(Default) Block`},render:e=>(0,a.jsx)(`div`,{style:{width:`300px`},children:(0,a.jsx)(n,{...e})})},l={args:{linkVariant:`inline`,link:(0,a.jsx)(r,{href:`#`,children:`Textlink`}),children:`Inline`},render:e=>(0,a.jsx)(`div`,{style:{width:`300px`},children:(0,a.jsx)(n,{...e})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "block",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "(Default) Block"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "inline",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "Inline"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u=[`DefaultBlock`,`Inline`]}))();export{c as DefaultBlock,l as Inline,u as __namedExportsOrder,s as default};