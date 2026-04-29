import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{D as n,a as r,i,o as a,r as o,t as s}from"./src-CXJdFFf7.js";var c,l,u,d,f,p;e((()=>{s(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTabs/URL Sync`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},name:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{name:`url-sync-index`,initialSelectedIndex:2,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r,{children:[(0,c.jsx)(a,{children:`Overview`}),(0,c.jsx)(a,{children:`Details`}),(0,c.jsx)(a,{children:`Settings`})]}),(0,c.jsx)(i,{children:`Overview content`}),(0,c.jsx)(i,{children:`Details content`}),(0,c.jsx)(i,{children:`Settings content`})]})},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`3rd tab pre-selected via initialSelectedIndex with a value parsed from URL parameter:`}),(0,c.jsx)(o,{...e})]})},f={args:{name:`url-sync-value`,initialSelectedIndex:1,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r,{children:[(0,c.jsx)(a,{value:`overview`,children:`Overview`}),(0,c.jsx)(a,{value:`details`,children:`Details`}),(0,c.jsx)(a,{value:`settings`,children:`Settings`})]}),(0,c.jsx)(i,{children:`Overview content`}),(0,c.jsx)(i,{children:`Details content`}),(0,c.jsx)(i,{children:`Settings content`})]})},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`2nd tab pre-selected with value props and 'onValueChange':`}),(0,c.jsx)(o,{...e})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "url-sync-index",
    "initialSelectedIndex": 2,
    "children": <><DBTabList><DBTabItem>Overview</DBTabItem><DBTabItem>Details</DBTabItem><DBTabItem>Settings</DBTabItem></DBTabList><DBTabPanel>Overview content</DBTabPanel><DBTabPanel>Details content</DBTabPanel><DBTabPanel>Settings content</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    3rd tab pre-selected via initialSelectedIndex with a value
                    parsed from URL parameter:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "url-sync-value",
    "initialSelectedIndex": 1,
    "children": <><DBTabList><DBTabItem value="overview">Overview</DBTabItem><DBTabItem value="details">Details</DBTabItem><DBTabItem value="settings">Settings</DBTabItem></DBTabList><DBTabPanel>Overview content</DBTabPanel><DBTabPanel>Details content</DBTabPanel><DBTabPanel>Settings content</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    2nd tab pre-selected with value props and 'onValueChange':
                </DBInfotext><DBTabs {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p=[`initialSelectedIndexviaURL`,`valuebasedURLsync`]}))();export{p as __namedExportsOrder,u as default,d as initialSelectedIndexviaURL,f as valuebasedURLsync};