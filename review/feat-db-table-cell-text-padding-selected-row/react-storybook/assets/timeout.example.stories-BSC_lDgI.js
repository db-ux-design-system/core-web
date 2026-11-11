import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./button-HiccZljf.js";import{n as a,t as o}from"./loading-indicator-DOELcZYH.js";var s=t({Timeout:()=>d,__namedExportsOrder:()=>f,default:()=>u}),c,l,u,d,f;function p(){return(p=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBLoadingIndicator/Examples: Timeout`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onTimeout:l()},argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},onTimeout:{action:`onTimeout`}}},d={args:{state:`inactive`,overlay:!0,onTimeout:l(),children:`Loading`},render:e=>(0,c.jsxs)(i,{icon:`x_placeholder`,onClick:e=>setLoadingState(`active`),children:[(0,c.jsx)(o,{...e}),`Start Timeout`]})},f=[`Timeout`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "state": 'inactive',
    "overlay": true,
    "onTimeout": fn(),
    "children": "Loading"
  },
  render: (properties: any) => <DBButton icon="x_placeholder" onClick={event => setLoadingState('active')}><DBLoadingIndicator {...properties} />
                Start Timeout
            </DBButton>
}`,...d.parameters?.docs?.source}}}})))()}export{p as n,s as r,d as t};