import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./button-KISpejDa.js";import{n as i,t as a}from"./loading-indicator-BMjAwaa6.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBLoadingIndicator/Examples: Timeout`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},l={args:{state:`inactive`,overlay:!0,onTimeout:s(),children:`Loading`},render:e=>(0,o.jsxs)(r,{icon:`x_placeholder`,onClick:e=>setLoadingState(`active`),children:[(0,o.jsx)(a,{...e}),`Start Timeout`]})},u=[`Timeout`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "state": 'inactive',
    "overlay": true,
    "onTimeout": fn(),
    "children": "Loading"
  },
  render: (properties: any) => <DBButton icon="x_placeholder" onClick={event => setLoadingState('active')}><DBLoadingIndicator {...properties} />
                Start Timeout
            </DBButton>
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as Timeout,u as __namedExportsOrder,c as default};