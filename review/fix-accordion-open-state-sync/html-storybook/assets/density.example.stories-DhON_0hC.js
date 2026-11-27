import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-BrqREugs.js";import{n as a,t as o}from"./divider-ClGwNHOV.js";var s=t({DefaultRegular:()=>f,Expressive:()=>p,Functional:()=>d,__namedExportsOrder:()=>m,default:()=>u}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDivider/Density`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`auto`]},variant:{control:`select`,options:[`horizontal`,`vertical`]},emphasis:{control:`select`,options:[`weak`,`strong`]},margin:{control:`select`,options:[`medium`,`small`,`large`,`none`,`_`]},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{width:`full`},render:e=>(0,c.jsxs)(`div`,{"data-density":`functional`,style:{width:`200px`,height:`200px`,display:`grid`,gridTemplateRows:`auto 1fr`},children:[(0,c.jsx)(i,{size:`small`,semantic:`informational`,children:`Functional`}),(0,c.jsx)(o,{...e})]})},f={args:{width:`full`},render:e=>(0,c.jsxs)(`div`,{"data-density":`regular`,style:{width:`200px`,height:`200px`,display:`grid`,gridTemplateRows:`auto 1fr`},children:[(0,c.jsx)(i,{size:`small`,semantic:`informational`,children:`(Default) Regular`}),(0,c.jsx)(o,{...e})]})},p={args:{width:`full`},render:e=>(0,c.jsxs)(`div`,{"data-density":`expressive`,style:{width:`200px`,height:`200px`,display:`grid`,gridTemplateRows:`auto 1fr`},children:[(0,c.jsx)(i,{size:`small`,semantic:`informational`,children:`Expressive`}),(0,c.jsx)(o,{...e})]})},m=[`Functional`,`DefaultRegular`,`Expressive`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: (properties: any) => <div data-density="functional" style={{
    width: '200px',
    height: '200px',
    display: 'grid',
    gridTemplateRows: 'auto 1fr'
  }}><DBInfotext size="small" semantic="informational">
                    Functional
                </DBInfotext><DBDivider {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: (properties: any) => <div data-density="regular" style={{
    width: '200px',
    height: '200px',
    display: 'grid',
    gridTemplateRows: 'auto 1fr'
  }}><DBInfotext size="small" semantic="informational">
                    (Default) Regular
                </DBInfotext><DBDivider {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: (properties: any) => <div data-density="expressive" style={{
    width: '200px',
    height: '200px',
    display: 'grid',
    gridTemplateRows: 'auto 1fr'
  }}><DBInfotext size="small" semantic="informational">
                    Expressive
                </DBInfotext><DBDivider {...properties} /></div>
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,s as i,p as n,d as r,f as t};