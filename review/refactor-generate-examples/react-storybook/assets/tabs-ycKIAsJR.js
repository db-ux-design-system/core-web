import{j as s}from"./jsx-runtime-u17CrQMm.js";import{u as h,c as y,g as v,f as w}from"./index-OxcJkKaM.js";import{r as a}from"./iframe-Duf2yS0l.js";import{D as L}from"./button-CXbufVX4.js";import{D as H}from"./tab-item-CDHNNIDd.js";import{D as A}from"./constants-BqjZCLvV.js";function G(e,l){const o=l||a.useRef(l),[u,g]=a.useState(()=>A);return a.useEffect(()=>{g(e.id||"tab-list-"+h())},[]),s.jsx("div",{ref:o,...w(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),id:u,...v(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),className:y("db-tab-list",e.className),children:s.jsx("ul",{role:"tablist",children:e.children})})}const z=a.forwardRef(G);z.__docgenInfo={description:"",methods:[],displayName:"DBTabList",props:{children:{required:!1,tsType:{name:"any"},description:"default slot"},className:{required:!1,tsType:{name:"string"},description:"React specific for adding className to the component."},class:{required:!1,tsType:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},description:"Workaround for TypeScript using class for all components."},id:{required:!1,tsType:{name:"string"},description:"[ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset."},autofocus:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Before using please check for the [accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_concerns)"}}};function U(e,l){const o=l||a.useRef(l);return a.useEffect(()=>{},[]),s.jsxs("section",{role:"tabpanel",ref:o,...w(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),...v(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),className:y("db-tab-panel",e.className),id:e.id,children:[e.content?s.jsx(s.Fragment,{children:e.content}):null,e.children]})}const N=a.forwardRef(U);N.__docgenInfo={description:"",methods:[],displayName:"DBTabPanel",props:{content:{required:!1,tsType:{name:"string"},description:"The content if you don't want to use children."},children:{required:!1,tsType:{name:"any"},description:"default slot"},className:{required:!1,tsType:{name:"string"},description:"React specific for adding className to the component."},class:{required:!1,tsType:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},description:"Workaround for TypeScript using class for all components."},id:{required:!1,tsType:{name:"string"},description:"[ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset."},autofocus:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Before using please check for the [accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_concerns)"}}};function O(e,l){const o=l||a.useRef(l),[u,g]=a.useState(()=>"tabs-"+h()),[m,P]=a.useState(()=>""),[T,k]=a.useState(()=>!1),[B,W]=a.useState(()=>!1),[j,M]=a.useState(()=>!1),[R,C]=a.useState(()=>null),[S,I]=a.useState(()=>{});function q(){try{return typeof e.tabs=="string"?JSON.parse(e.tabs):e.tabs}catch(n){console.error(n)}return[]}function p(n){const t=n.scrollWidth>n.clientWidth;W(t&&n.scrollLeft>1),M(t&&n.scrollLeft<n.scrollWidth-n.clientWidth)}function _(n){let t=Number(e.arrowScrollDistance)||100;n&&(t*=-1),R?.scrollBy({top:0,left:t,behavior:"smooth"})}function x(){if(o.current){const n=o.current.querySelector(".db-tab-list");if(n){const t=n.querySelector('[role="tablist"]');if(t&&(t.setAttribute("aria-orientation",e.orientation||"horizontal"),e.behavior==="arrows"&&(C(t),p(t),t.addEventListener("scroll",()=>{p(t)}),!S))){const r=new ResizeObserver(()=>{p(t)});r.observe(t),I(r)}}}}function D(n){if(o.current){const t=Array.from(o.current.getElementsByClassName("db-tab-item")),r=Array.from(o.current.querySelectorAll(":is(:scope > .db-tab-panel, :scope > db-tab-panel > .db-tab-panel)"));for(const i of t){const c=t.indexOf(i),f=i.querySelector("label"),d=i.querySelector("input");if(d&&f){if(!d.id){const b=`${m}-tab-${c}`;f.setAttribute("for",b),d.id=b,d.setAttribute("name",m),r.length>c&&d.setAttribute("aria-controls",`${m}-tab-panel-${c}`)}if(n){const b=!e.initialSelectedMode||e.initialSelectedMode==="auto",F=e.initialSelectedIndex==null&&c===0||Number(e.initialSelectedIndex)===c;b&&F&&d.click()}}}for(const i of r){if(i.id)continue;const c=r.indexOf(i);i.id=`${m}-tab-panel-${c}`,i.setAttribute("aria-labelledby",`${m}-tab-${c}`)}}}function E(n){if(n.stopPropagation(),n.target){const r=n.target.parentElement;if(r&&r.parentElement&&r.parentElement?.nodeName==="LI"){const i=r.parentElement;if(i){const c=i.parentElement;if(c){const f=Array.from(c.children).indexOf(i);e.onIndexChange&&e.onIndexChange(f),e.onTabSelect&&e.onTabSelect(n)}}}}}return a.useEffect(()=>{g(e.id||u),P(`tabs-${e.name||h()}`),k(!0)},[]),a.useEffect(()=>{if(o.current&&T){x(),D(!0);const n=o.current.querySelector(".db-tab-list");n&&new MutationObserver(r=>{r.forEach(i=>{(i.removedNodes.length||i.addedNodes.length)&&(x(),D())})}).observe(n,{childList:!0,subtree:!0}),k(!1)}},[o.current,T]),a.useEffect(()=>()=>{S?.disconnect(),I(void 0)},[]),s.jsxs("div",{ref:o,...w(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density","onTabSelect","onIndexChange"]),id:u,...v(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),className:y("db-tabs",e.className),"data-orientation":e.orientation,"data-scroll-behavior":e.behavior,"data-alignment":e.alignment??"start","data-width":e.width??"auto",onInput:n=>E(n),onChange:n=>E(n),children:[B?s.jsx(L,{className:"tabs-scroll-left",variant:"ghost",icon:"chevron_left",type:"button",noText:!0,onClick:n=>_(!0),children:"Scroll left"}):null,e.tabs?s.jsxs(s.Fragment,{children:[s.jsx(z,{children:q()?.map((n,t)=>s.jsx(H,{active:n.active,label:n.label,iconTrailing:n.iconTrailing,icon:n.icon,noText:n.noText},e.name+"tab-item"+t))}),q()?.map((n,t)=>s.jsx(N,{content:n.content,children:n.children},e.name+"tab-panel"+t))]}):null,j?s.jsx(L,{className:"tabs-scroll-right",variant:"ghost",icon:"chevron_right",type:"button",noText:!0,onClick:n=>_(),children:"Scroll right"}):null,e.children]})}const $=a.forwardRef(O);$.__docgenInfo={description:"",methods:[],displayName:"DBTabs",props:{arrowScrollDistance:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:'Change amount of distance if you click on an arrow, only available with behavior="arrows"'},behavior:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof TabsBehaviorList)[number]"},description:"Show a scrollbar or buttons with arrows to navigate for horizontal tabs with overflow visible"},initialSelectedIndex:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Default behavior is auto selecting the first tab, change selected tab by index"},initialSelectedMode:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof TabsInitialSelectedModeList)[number]"},description:"Default behavior is auto selecting the first tab, disable it with 'manually'"},name:{required:!1,tsType:{name:"string"},description:"The name of the tab bar, is required for grouping multiple tabs together. Will overwrite names from children."},tabs:{required:!1,tsType:{name:"union",raw:"DBSimpleTabProps[] | string",elements:[{name:"Array",elements:[{name:"intersection",raw:"DBTabItemProps & DBTabPanelProps",elements:[{name:"intersection",raw:"GlobalProps & DBTabItemDefaultProps & IconProps & IconTrailingProps & IconLeadingProps & ShowIconLeadingProps & ShowIconTrailingProps & ActiveProps & ChangeEventProps<HTMLInputElement> & ShowIconProps & NameProps",elements:[{name:"signature",type:"object",raw:`{
  /**
   * default slot
   */

  children?: any;

  /**
   * React specific for adding className to the component.
   */
  className?: string;

  /**
   * Workaround for TypeScript using class for all components.
   */
  class?: string | any;

  /**
   * [ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset.
   */
  id?: string;

  /**
   * Before using please check for the [accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_concerns)
   */
  autofocus?: boolean | string;
}`,signature:{properties:[{key:"children",value:{name:"any",required:!1},description:"default slot"},{key:"className",value:{name:"string",required:!1},description:"React specific for adding className to the component."},{key:"class",value:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}],required:!1},description:"Workaround for TypeScript using class for all components."},{key:"id",value:{name:"string",required:!1},description:"[ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset."},{key:"autofocus",value:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}],required:!1},description:"Before using please check for the [accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_concerns)"}]}},{name:"signature",type:"object",raw:`{
  /**
   * To control the component
   */
  checked?: boolean | string;

  /**
   * The disabled attribute can be set to keep a user from clicking on the tab-item.
   */
  disabled?: boolean | string;
  /**
   * The label of the tab-item, if you don't want to use children.
   */
  label?: string;
  /**
   * Define the text next to the icon specified via the icon Property to get hidden.
   */
  noText?: boolean | string;
}`,signature:{properties:[{key:"checked",value:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}],required:!1},description:"To control the component"},{key:"disabled",value:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}],required:!1},description:"The disabled attribute can be set to keep a user from clicking on the tab-item."},{key:"label",value:{name:"string",required:!1},description:"The label of the tab-item, if you don't want to use children."},{key:"noText",value:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}],required:!1},description:"Define the text next to the icon specified via the icon Property to get hidden."}]}},{name:"signature",type:"object",raw:`{
  /**
   * Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content.
   */
  icon?: IconTypes;
}`,signature:{properties:[{key:"icon",value:{name:"IconTypes",required:!1},description:"Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content."}]}},{name:"signature",type:"object",raw:`{
  /**
   * Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content.
   */
  iconTrailing?: IconTypes;
}`,signature:{properties:[{key:"iconTrailing",value:{name:"IconTypes",required:!1},description:"Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content."}]}},{name:"signature",type:"object",raw:`{
  /**
   * Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content.
   */
  iconLeading?: IconTypes;
}`,signature:{properties:[{key:"iconLeading",value:{name:"IconTypes",required:!1},description:"Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content."}]}},{name:"signature",type:"object",raw:`{
  /**
   * Enables or disables the visibility of the leading icon.
   * For many components this property is optional to reflect Figma properties.
   */
  showIconLeading?: boolean | string;
}`,signature:{properties:[{key:"showIconLeading",value:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}],required:!1},description:`Enables or disables the visibility of the leading icon.
For many components this property is optional to reflect Figma properties.`}]}},{name:"signature",type:"object",raw:`{
  /**
   * Enables or disables the visibility of the trailing icon.
   * For many components this property is optional to reflect Figma properties.
   */
  showIconTrailing?: boolean | string;
}`,signature:{properties:[{key:"showIconTrailing",value:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}],required:!1},description:`Enables or disables the visibility of the trailing icon.
For many components this property is optional to reflect Figma properties.`}]}},{name:"signature",type:"object",raw:`{
  /**
   * If the tab is checked/active.
   */
  active?: boolean | string;
}`,signature:{properties:[{key:"active",value:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}],required:!1},description:"If the tab is checked/active."}]}},{name:"signature",type:"object",raw:`{
  change?: (event: ChangeEvent<T>) => void;
  onChange?: (event: ChangeEvent<T>) => void;
}`,signature:{properties:[{key:"change",value:{name:"signature",type:"function",raw:"(event: ChangeEvent<T>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<T>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}},required:!1}},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: ChangeEvent<T>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<T>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}},required:!1}}]}},{name:"signature",type:"object",raw:`{
  /**
   * Enables or disables the visibility of the icon. The default value depends on the component.
   * For many components this property is optional to reflect Figma properties.
   */
  showIcon?: boolean | string;
}`,signature:{properties:[{key:"showIcon",value:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}],required:!1},description:`Enables or disables the visibility of the icon. The default value depends on the component.
For many components this property is optional to reflect Figma properties.`}]}},{name:"signature",type:"object",raw:`{
  /**
   * The name attribute gives the name of the element to group it.
   */
  name?: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1},description:"The name attribute gives the name of the element to group it."}]}}]},{name:"intersection",raw:"DBTabPanelDefaultProps & GlobalProps",elements:[{name:"signature",type:"object",raw:`{
  /**
   * The content if you don't want to use children.
   */
  content?: string;
}`,signature:{properties:[{key:"content",value:{name:"string",required:!1},description:"The content if you don't want to use children."}]}},{name:"signature",type:"object",raw:`{
  /**
   * default slot
   */

  children?: any;

  /**
   * React specific for adding className to the component.
   */
  className?: string;

  /**
   * Workaround for TypeScript using class for all components.
   */
  class?: string | any;

  /**
   * [ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset.
   */
  id?: string;

  /**
   * Before using please check for the [accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_concerns)
   */
  autofocus?: boolean | string;
}`,signature:{properties:[{key:"children",value:{name:"any",required:!1},description:"default slot"},{key:"className",value:{name:"string",required:!1},description:"React specific for adding className to the component."},{key:"class",value:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}],required:!1},description:"Workaround for TypeScript using class for all components."},{key:"id",value:{name:"string",required:!1},description:"[ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset."},{key:"autofocus",value:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}],required:!1},description:"Before using please check for the [accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_concerns)"}]}}]}]}],raw:"DBSimpleTabProps[]"},{name:"string"}]},description:"Provide simple tabs with label + text as content"},children:{required:!1,tsType:{name:"any"},description:"default slot"},className:{required:!1,tsType:{name:"string"},description:"React specific for adding className to the component."},class:{required:!1,tsType:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},description:"Workaround for TypeScript using class for all components."},id:{required:!1,tsType:{name:"string"},description:"[ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset."},autofocus:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Before using please check for the [accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_concerns)"},orientation:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof OrientationList)[number]"},description:"Change the orientation. Defaults to horizontal."},width:{required:!1,tsType:{name:"union",raw:"WidthType | string",elements:[{name:"unknown[number]",raw:"(typeof WidthList)[number]"},{name:"string"}]},description:"Width of the component. Auto width based on children size, full width based on parent elements width."},alignment:{required:!1,tsType:{name:"union",raw:"AlignmentType | string",elements:[{name:"unknown[number]",raw:"(typeof AlignmentList)[number]"},{name:"string"}]},description:"Define the content alignment in full width"},indexChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index?: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Informs the user if the current tab index has changed."},onIndexChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index?: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Informs the user if the current tab index has changed."},onTabSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(event?: InputEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFormEvent",raw:"React.FormEvent<T>",elements:[{name:"HTMLElement"}]},name:"event"}],return:{name:"void"}}},description:"Informs the user if another tab has been selected."},tabSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(event?: InputEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactFormEvent",raw:"React.FormEvent<T>",elements:[{name:"HTMLElement"}]},name:"event"}],return:{name:"void"}}},description:"Informs the user if another tab has been selected."}}};export{$ as D,z as a,N as b};
