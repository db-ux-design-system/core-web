import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./loading-indicator-bZlqPFTZ.js";var i,a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBLoadingIndicator/Interaction`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},s={args:{children:`Test`},render:e=>(0,i.jsx)(`div`,{"data-testid":`default-loading`,children:(0,i.jsx)(r,{...e})})},c={args:{state:`critical`,children:`Test`},render:e=>(0,i.jsx)(`div`,{"data-testid":`critical-loading`,children:(0,i.jsx)(r,{...e})})},l={args:{role:`alert`,children:`Test`},render:e=>(0,i.jsx)(`div`,{"data-testid":`role-override-loading`,children:(0,i.jsx)(r,{...e})})},u={args:{id:`my-loading`,children:`Test`},render:e=>(0,i.jsx)(`div`,{"data-testid":`id-loading`,children:(0,i.jsx)(r,{...e})})},d={args:{progressText:`42 of 100`,indeterminate:!1,value:42,max:100,children:`Test`},render:e=>(0,i.jsx)(`div`,{"data-testid":`determinate-loading`,children:(0,i.jsx)(r,{...e})})},f={args:{variant:`bar`,indeterminate:!1,value:200,max:100,children:`Test`},render:e=>(0,i.jsx)(`div`,{"data-testid":`clamp-loading`,children:(0,i.jsx)(r,{...e})})},p={args:{indeterminate:`false`,value:42,max:100,children:`Test`},render:e=>(0,i.jsx)(`div`,{"data-testid":`string-false-loading`,children:(0,i.jsx)(r,{...e})})},m=[`Interaction`,`LoadingIndicatorInteraction1`,`LoadingIndicatorInteraction2`,`LoadingIndicatorInteraction3`,`LoadingIndicatorInteraction4`,`LoadingIndicatorInteraction5`,`LoadingIndicatorInteraction6`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "Test"
  },
  render: (properties: any) => <div data-testid="default-loading"><DBLoadingIndicator {...properties} /></div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "critical",
    "children": "Test"
  },
  render: (properties: any) => <div data-testid="critical-loading"><DBLoadingIndicator {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "role": "alert",
    "children": "Test"
  },
  render: (properties: any) => <div data-testid="role-override-loading"><DBLoadingIndicator {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "my-loading",
    "children": "Test"
  },
  render: (properties: any) => <div data-testid="id-loading"><DBLoadingIndicator {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "progressText": "42 of 100",
    "indeterminate": false,
    "value": 42,
    "max": 100,
    "children": "Test"
  },
  render: (properties: any) => <div data-testid="determinate-loading"><DBLoadingIndicator {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "bar",
    "indeterminate": false,
    "value": 200,
    "max": 100,
    "children": "Test"
  },
  render: (properties: any) => <div data-testid="clamp-loading"><DBLoadingIndicator {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "indeterminate": "false",
    "value": 42,
    "max": 100,
    "children": "Test"
  },
  render: (properties: any) => <div data-testid="string-false-loading"><DBLoadingIndicator {...properties} /></div>
}`,...p.parameters?.docs?.source}}}})))()}h();export{s as Interaction,c as LoadingIndicatorInteraction1,l as LoadingIndicatorInteraction2,u as LoadingIndicatorInteraction3,d as LoadingIndicatorInteraction4,f as LoadingIndicatorInteraction5,p as LoadingIndicatorInteraction6,m as __namedExportsOrder,o as default};