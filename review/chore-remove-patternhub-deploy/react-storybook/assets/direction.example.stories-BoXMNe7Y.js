import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-DWUtRaHE.js";import{n as a,t as o}from"./stack-CErZe1OY.js";var s=t({DefaultColumn:()=>d,Row:()=>f,__namedExportsOrder:()=>p,default:()=>u}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBStack/Direction`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},height:{control:`select`,options:[`full`,`auto`]},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{style:{padding:`var(--db-spacing-fixed-xs)`},children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`span`,{className:`dummy-component`,children:(0,c.jsx)(`a`,{href:`#`,children:`Content 1`})}),(0,c.jsx)(`span`,{className:`dummy-component`,children:`Content 2`}),(0,c.jsx)(`span`,{className:`dummy-component`,children:`Content 3`})]})},render:e=>(0,c.jsxs)(`div`,{style:{alignItems:`flex-start`,alignSelf:`flex-start`,display:`flex`,flexWrap:`nowrap`,flexDirection:`column`,gap:`var(--db-spacing-fixed-sm)`,width:`200px`},children:[(0,c.jsx)(i,{size:`small`,icon:`none`,semantic:`informational`,children:`(Default) Column`}),(0,c.jsx)(o,{...e})]})},f={args:{direction:`row`,style:{padding:`var(--db-spacing-fixed-xs)`},children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`span`,{className:`dummy-component`,children:(0,c.jsx)(`a`,{href:`#`,children:`Content 1`})}),(0,c.jsx)(`span`,{className:`dummy-component`,children:`Content 2`}),(0,c.jsx)(`span`,{className:`dummy-component`,children:`Content 3`})]})},render:e=>(0,c.jsxs)(`div`,{style:{alignItems:`flex-start`,alignSelf:`flex-start`,display:`flex`,flexWrap:`nowrap`,flexDirection:`column`,gap:`var(--db-spacing-fixed-sm)`,height:`100px`},children:[(0,c.jsx)(i,{size:`small`,icon:`none`,semantic:`informational`,children:`Row`}),(0,c.jsx)(o,{...e})]})},p=[`DefaultColumn`,`Row`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
                    (Default) Column
                </DBInfotext><DBStack {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "row",
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
    height: '100px'
  }}><DBInfotext size="small" icon="none" semantic="informational">
                    Row
                </DBInfotext><DBStack {...properties} /></div>
}`,...f.parameters?.docs?.source}}}})))()}export{m as i,f as n,s as r,d as t};