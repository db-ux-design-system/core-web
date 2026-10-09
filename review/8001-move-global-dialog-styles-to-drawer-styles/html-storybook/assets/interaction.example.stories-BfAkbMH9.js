import{n as e}from"./iframe-BvuNa8F9.js";import{n as t,t as n}from"./notification-CjtO7HPS.js";import{n as r}from"./rolldown-runtime-DkW27tQK.js";var i,a,o,s,c;function l(){return(l=r((()=>{t(),i=e(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBNotification/Interaction`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:a()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},s={args:{"data-testid":`notification`,closeable:!0,onClose:a(),children:`Test`},render:e=>(0,i.jsxs)(`div`,{style:{width:`300px`},children:[closed?null:(0,i.jsx)(n,{...e}),(0,i.jsx)(`div`,{"data-sb-ignore":`true`,children:closed?(0,i.jsx)(`span`,{"data-testid":`notification-closed`,children:`closed`}):null})]})},c=[`Interaction`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "notification",
    "closeable": true,
    "onClose": fn(),
    "children": "Test"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}>{!closed ? <DBNotification {...properties} /> : null}<div data-sb-ignore="true">{closed ? <span data-testid="notification-closed">closed</span> : null}</div></div>
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as Interaction,c as __namedExportsOrder,o as default};