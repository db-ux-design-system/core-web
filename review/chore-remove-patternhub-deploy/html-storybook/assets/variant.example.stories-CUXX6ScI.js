import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-DWUtRaHE.js";import{n as a,t as o}from"./divider-B_Gdey1w.js";var s=t({AdaptiveVertical:()=>f,DefaultAdaptiveHorizontal:()=>d,__namedExportsOrder:()=>p,default:()=>u}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDivider/Variant`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`auto`]},variant:{control:`select`,options:[`horizontal`,`vertical`]},emphasis:{control:`select`,options:[`weak`,`strong`]},margin:{control:`select`,options:[`medium`,`small`,`large`,`none`,`_`]},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{width:`full`},render:e=>(0,c.jsxs)(`div`,{style:{width:`200px`,height:`200px`,display:`grid`,gridTemplateRows:`auto 1fr`},children:[(0,c.jsx)(i,{size:`small`,semantic:`informational`,children:`(Default) Adaptive - Horizontal`}),(0,c.jsx)(o,{...e})]})},f={args:{variant:`vertical`,width:`full`},render:e=>(0,c.jsxs)(`div`,{style:{height:`100px`,display:`grid`,gridTemplateRows:`auto 1fr`},children:[(0,c.jsx)(i,{size:`small`,semantic:`informational`,children:`Adaptive - Vertical`}),(0,c.jsx)(o,{...e})]})},p=[`DefaultAdaptiveHorizontal`,`AdaptiveVertical`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: (properties: any) => <div style={{
    width: '200px',
    height: '200px',
    display: 'grid',
    gridTemplateRows: 'auto 1fr'
  }}><DBInfotext size="small" semantic="informational">
                    (Default) Adaptive - Horizontal
                </DBInfotext><DBDivider {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "vertical",
    "width": "full"
  },
  render: (properties: any) => <div style={{
    height: '100px',
    display: 'grid',
    gridTemplateRows: 'auto 1fr'
  }}><DBInfotext size="small" semantic="informational">
                    Adaptive - Vertical
                </DBInfotext><DBDivider {...properties} /></div>
}`,...f.parameters?.docs?.source}}}})))()}export{s as i,d as n,m as r,f as t};