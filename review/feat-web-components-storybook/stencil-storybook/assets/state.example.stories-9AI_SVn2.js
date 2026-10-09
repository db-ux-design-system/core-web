import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBLoadingIndicator/State`,component:`db-loading-indicator`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},c={args:{state:`inactive`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Circular horizontal`)}</db-loading-indicator>`},l={args:{state:`inactive`,variant:`circular`,orientation:`vertical`,progressText:`42%`},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Circular vertical`)}</db-loading-indicator>`},u={args:{state:`inactive`,variant:`bar`,progressText:`42 of 100`},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Bar`)}</db-loading-indicator>`},d={args:{state:`active`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Circular horizontal`)}</db-loading-indicator>`},f={args:{state:`active`,variant:`circular`,orientation:`vertical`,progressText:`42%`},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Circular vertical`)}</db-loading-indicator>`},p={args:{state:`active`,variant:`bar`,progressText:`42 of 100`},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Bar`)}</db-loading-indicator>`},m={args:{state:`successful`,variant:`circular`,orientation:`horizontal`,progressText:`100 of 100`,propOverrides:{progress:{ariaLabel:`Success`}}},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Circular horizontal`)}</db-loading-indicator>`},h={args:{state:`successful`,variant:`circular`,orientation:`vertical`,progressText:`100%`,propOverrides:{progress:{ariaLabel:`Success`}}},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Circular vertical`)}</db-loading-indicator>`},g={args:{state:`successful`,variant:`bar`,progressText:`100 of 100`,propOverrides:{progress:{ariaLabel:`Success`}}},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Bar`)}</db-loading-indicator>`},_={args:{state:`critical`,variant:`circular`,orientation:`horizontal`,progressText:`100 of 100`,propOverrides:{progress:{ariaLabel:`Error`}}},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Circular horizontal`)}</db-loading-indicator>`},v={args:{state:`critical`,variant:`circular`,orientation:`vertical`,progressText:`100%`,propOverrides:{progress:{ariaLabel:`Error`}}},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Circular vertical`)}</db-loading-indicator>`},y={args:{state:`critical`,variant:`bar`,progressText:`100 of 100`,propOverrides:{progress:{ariaLabel:`Error`}}},render:({children:e,...n})=>t`<db-loading-indicator ${i(n)}>${r(`Bar`)}</db-loading-indicator>`},b=[`InactiveCircularhorizontal`,`InactiveCircularvertical`,`InactiveBar`,`ActiveCircularhorizontal`,`ActiveCircularvertical`,`ActiveBar`,`SuccessfulCircularhorizontal`,`SuccessfulCircularvertical`,`SuccessfulBar`,`CriticalCircularhorizontal`,`CriticalCircularvertical`,`CriticalBar`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "inactive",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular horizontal\`)}</db-loading-indicator>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "inactive",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular vertical\`)}</db-loading-indicator>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "inactive",
    "variant": "bar",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "active",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular horizontal\`)}</db-loading-indicator>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "active",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular vertical\`)}</db-loading-indicator>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "active",
    "variant": "bar",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "successful",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "100 of 100",
    "propOverrides": {
      progress: {
        ariaLabel: 'Success'
      }
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular horizontal\`)}</db-loading-indicator>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "successful",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "100%",
    "propOverrides": {
      progress: {
        ariaLabel: 'Success'
      }
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular vertical\`)}</db-loading-indicator>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "successful",
    "variant": "bar",
    "progressText": "100 of 100",
    "propOverrides": {
      progress: {
        ariaLabel: 'Success'
      }
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "critical",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "100 of 100",
    "propOverrides": {
      progress: {
        ariaLabel: 'Error'
      }
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular horizontal\`)}</db-loading-indicator>\`
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "critical",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "100%",
    "propOverrides": {
      progress: {
        ariaLabel: 'Error'
      }
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular vertical\`)}</db-loading-indicator>\`
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "critical",
    "variant": "bar",
    "progressText": "100 of 100",
    "propOverrides": {
      progress: {
        ariaLabel: 'Error'
      }
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...y.parameters?.docs?.source}}}})))()}x();export{p as ActiveBar,d as ActiveCircularhorizontal,f as ActiveCircularvertical,y as CriticalBar,_ as CriticalCircularhorizontal,v as CriticalCircularvertical,u as InactiveBar,c as InactiveCircularhorizontal,l as InactiveCircularvertical,g as SuccessfulBar,m as SuccessfulCircularhorizontal,h as SuccessfulCircularvertical,b as __namedExportsOrder,s as default};