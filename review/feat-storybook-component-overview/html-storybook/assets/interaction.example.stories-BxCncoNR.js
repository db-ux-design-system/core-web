import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./loading-indicator-DOELcZYH.js";var a=t({Interaction:()=>l,LoadingIndicatorInteraction1:()=>u,LoadingIndicatorInteraction2:()=>d,LoadingIndicatorInteraction3:()=>f,LoadingIndicatorInteraction4:()=>p,LoadingIndicatorInteraction5:()=>m,LoadingIndicatorInteraction6:()=>h,__namedExportsOrder:()=>g,default:()=>c}),o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBLoadingIndicator/Interaction`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},l={args:{children:`Test`},render:e=>(0,o.jsx)(`div`,{"data-testid":`default-loading`,children:(0,o.jsx)(i,{...e})})},u={args:{state:`critical`,children:`Test`},render:e=>(0,o.jsx)(`div`,{"data-testid":`critical-loading`,children:(0,o.jsx)(i,{...e})})},d={args:{role:`alert`,children:`Test`},render:e=>(0,o.jsx)(`div`,{"data-testid":`role-override-loading`,children:(0,o.jsx)(i,{...e})})},f={args:{id:`my-loading`,children:`Test`},render:e=>(0,o.jsx)(`div`,{"data-testid":`id-loading`,children:(0,o.jsx)(i,{...e})})},p={args:{progressText:`42 of 100`,indeterminate:!1,value:42,max:100,children:`Test`},render:e=>(0,o.jsx)(`div`,{"data-testid":`determinate-loading`,children:(0,o.jsx)(i,{...e})})},m={args:{variant:`bar`,indeterminate:!1,value:200,max:100,children:`Test`},render:e=>(0,o.jsx)(`div`,{"data-testid":`clamp-loading`,children:(0,o.jsx)(i,{...e})})},h={args:{indeterminate:`false`,value:42,max:100,children:`Test`},render:e=>(0,o.jsx)(`div`,{"data-testid":`string-false-loading`,children:(0,o.jsx)(i,{...e})})},g=[`Interaction`,`LoadingIndicatorInteraction1`,`LoadingIndicatorInteraction2`,`LoadingIndicatorInteraction3`,`LoadingIndicatorInteraction4`,`LoadingIndicatorInteraction5`,`LoadingIndicatorInteraction6`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "Test"
  },
  render: (properties: any) => <div data-testid="default-loading"><DBLoadingIndicator {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "critical",
    "children": "Test"
  },
  render: (properties: any) => <div data-testid="critical-loading"><DBLoadingIndicator {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "role": "alert",
    "children": "Test"
  },
  render: (properties: any) => <div data-testid="role-override-loading"><DBLoadingIndicator {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "my-loading",
    "children": "Test"
  },
  render: (properties: any) => <div data-testid="id-loading"><DBLoadingIndicator {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "progressText": "42 of 100",
    "indeterminate": false,
    "value": 42,
    "max": 100,
    "children": "Test"
  },
  render: (properties: any) => <div data-testid="determinate-loading"><DBLoadingIndicator {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "bar",
    "indeterminate": false,
    "value": 200,
    "max": 100,
    "children": "Test"
  },
  render: (properties: any) => <div data-testid="clamp-loading"><DBLoadingIndicator {...properties} /></div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "indeterminate": "false",
    "value": 42,
    "max": 100,
    "children": "Test"
  },
  render: (properties: any) => <div data-testid="string-false-loading"><DBLoadingIndicator {...properties} /></div>
}`,...h.parameters?.docs?.source}}}})))()}export{p as a,_ as c,f as i,a as l,u as n,m as o,d as r,h as s,l as t};