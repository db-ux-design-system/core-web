import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./button-HiccZljf.js";import{n as a,t as o}from"./stack-C5UMBCnK.js";var s=t({DefaultNoClipping:()=>d,Wrap:()=>f,WrapFocusContainer:()=>p,__namedExportsOrder:()=>m,default:()=>u}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBStack/Focus Container`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},height:{control:`select`,options:[`full`,`auto`]},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{"data-testid":`default-stack`,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{"data-focus":`default`,children:`Focusable`}),(0,c.jsx)(`span`,{className:`dummy-component`,children:`Content 2`})]})},render:e=>(0,c.jsx)(`div`,{className:`fit-content-container`,children:(0,c.jsx)(o,{...e})})},f={args:{"data-testid":`wrap-stack`,wrap:!0,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{"data-focus":`default`,children:`Focusable`}),(0,c.jsx)(`span`,{className:`dummy-component`,children:`Content 2`}),(0,c.jsx)(`span`,{className:`dummy-component`,children:`Content 3`})]})},render:e=>(0,c.jsx)(`div`,{className:`fit-content-container`,style:{width:`160px`,height:`88px`},children:(0,c.jsx)(o,{...e})})},p={args:{"data-testid":`focus-container-stack`,"data-focus-container":`true`,wrap:!0,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{"data-focus":`default`,children:`Focusable`}),(0,c.jsx)(`span`,{className:`dummy-component`,children:`Content 2`}),(0,c.jsx)(`span`,{className:`dummy-component`,children:`Content 3`})]})},render:e=>(0,c.jsx)(`div`,{className:`fit-content-container`,style:{width:`160px`,height:`88px`},children:(0,c.jsx)(o,{...e})})},m=[`DefaultNoClipping`,`Wrap`,`WrapFocusContainer`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "default-stack",
    "children": <><DBButton data-focus="default">Focusable</DBButton><span className="dummy-component">Content 2</span></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBStack {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "wrap-stack",
    "wrap": true,
    "children": <><DBButton data-focus="default">Focusable</DBButton><span className="dummy-component">Content 2</span><span className="dummy-component">Content 3</span></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '160px',
    height: '88px'
  }}><DBStack {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "focus-container-stack",
    "data-focus-container": "true",
    "wrap": true,
    "children": <><DBButton data-focus="default">Focusable</DBButton><span className="dummy-component">Content 2</span><span className="dummy-component">Content 3</span></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '160px',
    height: '88px'
  }}><DBStack {...properties} /></div>
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,s as i,f as n,p as r,d as t};