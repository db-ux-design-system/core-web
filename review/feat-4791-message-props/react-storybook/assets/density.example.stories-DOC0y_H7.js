import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-BrqREugs.js";import{n as a,t as o}from"./icon-CWm84KeR.js";var s=t({DefaultRegular:()=>f,Expressive:()=>p,Functional:()=>d,__namedExportsOrder:()=>m,default:()=>u}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBIcon/Density`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{icon:{control:`select`,options:`arrow_down.arrow_left.arrow_right.arrow_up.arrow_up_right.brand.calendar.check-circle.check.check_circle.chevron_down.chevron_left.chevron_right.chevron_up.circle.circular_arrows.clock.cross.cross_circle.exclamation_mark_circle.exclamation_mark_triangle.information_circle.magnifying_glass.menu.minus.plus.resize_handle_corner.x_placeholder`.split(`.`)},variant:{control:`text`},weight:{control:`select`,options:[`16`,`20`,`24`,`32`,`48`,`64`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{icon:`x_placeholder`,children:`Functional`},render:e=>(0,c.jsxs)(`div`,{"data-density":`functional`,children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`Functional`}),(0,c.jsx)(o,{...e})]})},f={args:{icon:`x_placeholder`,children:`(Default) Regular`},render:e=>(0,c.jsxs)(`div`,{"data-density":`regular`,children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`(Default) Regular`}),(0,c.jsx)(o,{...e})]})},p={args:{icon:`x_placeholder`,children:`Expressive`},render:e=>(0,c.jsxs)(`div`,{"data-density":`expressive`,children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`Expressive`}),(0,c.jsx)(o,{...e})]})},m=[`Functional`,`DefaultRegular`,`Expressive`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "children": "Functional"
  },
  render: (properties: any) => <div data-density="functional"><DBInfotext icon="none" size="small" semantic="informational">
                    Functional
                </DBInfotext><DBIcon {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "children": "(Default) Regular"
  },
  render: (properties: any) => <div data-density="regular"><DBInfotext icon="none" size="small" semantic="informational">
                    (Default) Regular
                </DBInfotext><DBIcon {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "children": "Expressive"
  },
  render: (properties: any) => <div data-density="expressive"><DBInfotext icon="none" size="small" semantic="informational">
                    Expressive
                </DBInfotext><DBIcon {...properties} /></div>
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,s as i,p as n,d as r,f as t};