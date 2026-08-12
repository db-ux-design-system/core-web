import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./infotext-Fgn_57Rd.js";import{n as i,t as a}from"./divider-Dj0j_Q8A.js";import{n as o,t as s}from"./stack-DVk8WbtL.js";var c,l,u,d,f,p;function m(){return(m=e((()=>{i(),n(),o(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBStack/Variant`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{style:{padding:`var(--db-spacing-fixed-xs)`},children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`span`,{className:`dummy-component`,children:(0,c.jsx)(`a`,{href:`#`,children:`Content 1`})}),(0,c.jsx)(`span`,{className:`dummy-component`,children:`Content 2`}),(0,c.jsx)(`span`,{className:`dummy-component`,children:`Content 3`})]})},render:e=>(0,c.jsxs)(`div`,{style:{alignItems:`flex-start`,alignSelf:`flex-start`,display:`flex`,flexWrap:`nowrap`,flexDirection:`column`,gap:`var(--db-spacing-fixed-sm)`,width:`200px`},children:[(0,c.jsx)(r,{size:`small`,icon:`none`,semantic:`informational`,children:`(Default) Simple`}),(0,c.jsx)(s,{...e})]})},f={args:{variant:`divider`,style:{padding:`var(--db-spacing-fixed-xs)`},children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`span`,{className:`dummy-component`,children:(0,c.jsx)(`a`,{href:`#`,children:`Content 1`})}),(0,c.jsx)(a,{}),(0,c.jsx)(`span`,{className:`dummy-component`,children:`Content 2`}),(0,c.jsx)(a,{}),(0,c.jsx)(`span`,{className:`dummy-component`,children:`Content 3`})]})},render:e=>(0,c.jsxs)(`div`,{style:{alignItems:`flex-start`,alignSelf:`flex-start`,display:`flex`,flexWrap:`nowrap`,flexDirection:`column`,gap:`var(--db-spacing-fixed-sm)`,width:`200px`},children:[(0,c.jsx)(r,{size:`small`,icon:`none`,semantic:`informational`,children:`Divider`}),(0,c.jsx)(s,{...e})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`DefaultSimple`,`Divider`]})))()}m();export{d as DefaultSimple,f as Divider,p as __namedExportsOrder,u as default};