import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-BrqREugs.js";import{n as a,t as o}from"./divider-ClGwNHOV.js";import{n as s,t as c}from"./stack-C5UMBCnK.js";var l=t({DefaultSimple:()=>p,Divider:()=>m,__namedExportsOrder:()=>h,default:()=>f}),u,d,f,p,m,h;function g(){return(g=e((()=>{a(),r(),s(),u=n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBStack/Variant`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},height:{control:`select`,options:[`full`,`auto`]},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},p={args:{style:{padding:`var(--db-spacing-fixed-xs)`},children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`span`,{className:`dummy-component`,children:(0,u.jsx)(`a`,{href:`#`,children:`Content 1`})}),(0,u.jsx)(`span`,{className:`dummy-component`,children:`Content 2`}),(0,u.jsx)(`span`,{className:`dummy-component`,children:`Content 3`})]})},render:e=>(0,u.jsxs)(`div`,{style:{alignItems:`flex-start`,alignSelf:`flex-start`,display:`flex`,flexWrap:`nowrap`,flexDirection:`column`,gap:`var(--db-spacing-fixed-sm)`,width:`200px`},children:[(0,u.jsx)(i,{size:`small`,icon:`none`,semantic:`informational`,children:`(Default) Simple`}),(0,u.jsx)(c,{...e})]})},m={args:{variant:`divider`,style:{padding:`var(--db-spacing-fixed-xs)`},children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`span`,{className:`dummy-component`,children:(0,u.jsx)(`a`,{href:`#`,children:`Content 1`})}),(0,u.jsx)(o,{}),(0,u.jsx)(`span`,{className:`dummy-component`,children:`Content 2`}),(0,u.jsx)(o,{}),(0,u.jsx)(`span`,{className:`dummy-component`,children:`Content 3`})]})},render:e=>(0,u.jsxs)(`div`,{style:{alignItems:`flex-start`,alignSelf:`flex-start`,display:`flex`,flexWrap:`nowrap`,flexDirection:`column`,gap:`var(--db-spacing-fixed-sm)`,width:`200px`},children:[(0,u.jsx)(i,{size:`small`,icon:`none`,semantic:`informational`,children:`Divider`}),(0,u.jsx)(c,{...e})]})},h=[`DefaultSimple`,`Divider`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    },
    "children": <><span className="dummy-component"><a href="#">Content 1</a></span><span className="dummy-component">Content 2</span><span className="dummy-component">Content 3</span></>
  },
  render: (properties: any) => <div style={{
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    gap: 'var(--db-spacing-fixed-sm)',
    width: '200px'
  }}><DBInfotext size="small" icon="none" semantic="informational">
                    (Default) Simple
                </DBInfotext><DBStack {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "divider",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    },
    "children": <><span className="dummy-component"><a href="#">Content 1</a></span><DBDivider /><span className="dummy-component">Content 2</span><DBDivider /><span className="dummy-component">Content 3</span></>
  },
  render: (properties: any) => <div style={{
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    gap: 'var(--db-spacing-fixed-sm)',
    width: '200px'
  }}><DBInfotext size="small" icon="none" semantic="informational">
                    Divider
                </DBInfotext><DBStack {...properties} /></div>
}`,...m.parameters?.docs?.source}}}})))()}export{l as i,m as n,g as r,p as t};