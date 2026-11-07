import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-DWUtRaHE.js";import{n as a,t as o}from"./icon-D9ZKuCeO.js";var s=t({DefaultDefault:()=>d,Filled:()=>f,__namedExportsOrder:()=>p,default:()=>u}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBIcon/Variant`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{icon:{control:`select`,options:`arrow_down.arrow_left.arrow_right.arrow_up.arrow_up_right.brand.calendar.check-circle.check.check_circle.chevron_down.chevron_left.chevron_right.chevron_up.circle.circular_arrows.clock.cross.cross_circle.exclamation_mark_circle.exclamation_mark_triangle.information_circle.magnifying_glass.menu.minus.plus.resize_handle_corner.x_placeholder`.split(`.`)},variant:{control:`text`},weight:{control:`select`,options:[`16`,`20`,`24`,`32`,`48`,`64`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{icon:`exclamation_mark_triangle`,weight:`32`},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`(Default) Default`}),(0,c.jsx)(o,{...e})]})},f={args:{icon:`exclamation_mark_triangle`,variant:`filled`,weight:`32`},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`Filled`}),(0,c.jsx)(o,{...e})]})},p=[`DefaultDefault`,`Filled`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "exclamation_mark_triangle",
    "weight": "32"
  },
  render: (properties: any) => <div><DBInfotext icon="none" size="small" semantic="informational">
                    (Default) Default
                </DBInfotext><DBIcon {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "exclamation_mark_triangle",
    "variant": "filled",
    "weight": "32"
  },
  render: (properties: any) => <div><DBInfotext icon="none" size="small" semantic="informational">
                    Filled
                </DBInfotext><DBIcon {...properties} /></div>
}`,...f.parameters?.docs?.source}}}})))()}export{s as i,f as n,m as r,d as t};