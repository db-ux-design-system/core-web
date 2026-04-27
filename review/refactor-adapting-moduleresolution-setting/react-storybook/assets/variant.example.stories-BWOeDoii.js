import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DnaggZxp.js";import{D as n,b as r,c as i,t as a}from"./src-DK5dTc4z.js";var o,s,c,l,u,d;e((()=>{a(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBStack/Variant`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{style:{padding:`var(--db-spacing-fixed-xs)`},children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`span`,{className:`dummy-component`,children:(0,o.jsx)(`a`,{href:`#`,children:`Content 1`})}),(0,o.jsx)(`span`,{className:`dummy-component`,children:`Content 2`}),(0,o.jsx)(`span`,{className:`dummy-component`,children:`Content 3`})]})},render:e=>(0,o.jsxs)(`div`,{style:{alignItems:`flex-start`,alignSelf:`flex-start`,display:`flex`,flexWrap:`nowrap`,flexDirection:`column`,gap:`var(--db-spacing-fixed-sm)`,width:`200px`},children:[(0,o.jsx)(n,{size:`small`,icon:`none`,semantic:`informational`,children:`(Default) Simple`}),(0,o.jsx)(i,{...e})]})},u={args:{variant:`divider`,style:{padding:`var(--db-spacing-fixed-xs)`},children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`span`,{className:`dummy-component`,children:(0,o.jsx)(`a`,{href:`#`,children:`Content 1`})}),(0,o.jsx)(r,{}),(0,o.jsx)(`span`,{className:`dummy-component`,children:`Content 2`}),(0,o.jsx)(r,{}),(0,o.jsx)(`span`,{className:`dummy-component`,children:`Content 3`})]})},render:e=>(0,o.jsxs)(`div`,{style:{alignItems:`flex-start`,alignSelf:`flex-start`,display:`flex`,flexWrap:`nowrap`,flexDirection:`column`,gap:`var(--db-spacing-fixed-sm)`,width:`200px`},children:[(0,o.jsx)(n,{size:`small`,icon:`none`,semantic:`informational`,children:`Divider`}),(0,o.jsx)(i,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`DefaultSimple`,`Divider`]}))();export{l as DefaultSimple,u as Divider,d as __namedExportsOrder,c as default};