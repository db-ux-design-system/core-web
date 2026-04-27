import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DC6t-S6Q.js";import{D as n,c as r,t as i}from"./src-Dg0IbgPT.js";var a,o,s,c,l,u;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBStack/Direction`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{style:{padding:`var(--db-spacing-fixed-xs)`},children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`span`,{className:`dummy-component`,children:(0,a.jsx)(`a`,{href:`#`,children:`Content 1`})}),(0,a.jsx)(`span`,{className:`dummy-component`,children:`Content 2`}),(0,a.jsx)(`span`,{className:`dummy-component`,children:`Content 3`})]})},render:e=>(0,a.jsxs)(`div`,{style:{alignItems:`flex-start`,alignSelf:`flex-start`,display:`flex`,flexWrap:`nowrap`,flexDirection:`column`,gap:`var(--db-spacing-fixed-sm)`,width:`200px`},children:[(0,a.jsx)(n,{size:`small`,icon:`none`,semantic:`informational`,children:`(Default) Column`}),(0,a.jsx)(r,{...e})]})},l={args:{direction:`row`,style:{padding:`var(--db-spacing-fixed-xs)`},children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`span`,{className:`dummy-component`,children:(0,a.jsx)(`a`,{href:`#`,children:`Content 1`})}),(0,a.jsx)(`span`,{className:`dummy-component`,children:`Content 2`}),(0,a.jsx)(`span`,{className:`dummy-component`,children:`Content 3`})]})},render:e=>(0,a.jsxs)(`div`,{style:{alignItems:`flex-start`,alignSelf:`flex-start`,display:`flex`,flexWrap:`nowrap`,flexDirection:`column`,gap:`var(--db-spacing-fixed-sm)`,height:`100px`},children:[(0,a.jsx)(n,{size:`small`,icon:`none`,semantic:`informational`,children:`Row`}),(0,a.jsx)(r,{...e})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`DefaultColumn`,`Row`]}))();export{c as DefaultColumn,l as Row,u as __namedExportsOrder,s as default};