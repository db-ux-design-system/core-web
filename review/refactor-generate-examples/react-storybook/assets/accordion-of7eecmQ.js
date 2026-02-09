import{j as r}from"./jsx-runtime-u17CrQMm.js";import{u as y,c as v,g as w,f as T}from"./index-OxcJkKaM.js";import{r as t}from"./iframe-Duf2yS0l.js";import{D as x}from"./constants-BqjZCLvV.js";import{D as I}from"./accordion-item-DLiO14lO.js";function A(e,c){const a=c||t.useRef(c),[o,u]=t.useState(()=>x),[s,d]=t.useState(()=>""),[l,h]=t.useState(()=>!1),[m,f]=t.useState(()=>!1);function g(){try{return typeof e.items=="string"?JSON.parse(e.items):e.items}catch(n){console.error(n)}return[]}return t.useEffect(()=>{u(e.id||"accordion-"+y()),h(!0),f(!0)},[]),t.useEffect(()=>{l&&(e.behavior==="single"?e.name?s!==e.name&&d(e.name):s!==o&&o&&d(o):d(""))},[l,e.name,e.behavior,o]),t.useEffect(()=>{if(a.current){const n=a.current.getElementsByTagName("details");if(n)for(const i of Array.from(n))s===""?i.removeAttribute("name"):i.name=s??""}},[a.current,s]),t.useEffect(()=>{if(a.current&&m){if(e?.initOpenIndex&&e.initOpenIndex.length>0){const n=a.current.getElementsByTagName("details");if(n){const i=e.behavior==="single"&&e.initOpenIndex.length>1?[e.initOpenIndex[0]]:e.initOpenIndex;Array.from(n).forEach((b,p)=>{i?.includes(p)&&(b.open=!0)})}}f(!1)}},[a.current,m,e.initOpenIndex]),r.jsxs("ul",{ref:a,...T(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),id:o,...w(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),className:v("db-accordion",e.className),"data-variant":e.variant,children:[e.items?null:r.jsx(r.Fragment,{children:e.children}),e.items?r.jsx(r.Fragment,{children:g()?.map((n,i)=>r.jsx(I,{headlinePlain:n.headlinePlain,disabled:n.disabled,text:n.text},`accordion-item-${i}`))}):null]})}const D=t.forwardRef(A);D.__docgenInfo={description:"",methods:[],displayName:"DBAccordion",props:{behavior:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof AccordionBehaviorList)[number]"},description:"To allow multiple items open at the same time or only 1 item"},initOpenIndex:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"The index of items which should be open when loading the accordion"},items:{required:!1,tsType:{name:"union",raw:"DBAccordionItemDefaultProps[] | string",elements:[{name:"Array",elements:[{name:"intersection",raw:`{
  /**
   * Initial state for the accordion item
   */
  defaultOpen?: boolean;
  /**
   * The disabled attribute can be set to keep a user from clicking on the element.
   */
  disabled?: boolean | string;
  /**
   * Title of the accordion-item as slot
   */
  headline?: any;
  /**
   * Title of the accordion-item as plain text
   */
  headlinePlain?: string;
} & TextProps`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * Initial state for the accordion item
   */
  defaultOpen?: boolean;
  /**
   * The disabled attribute can be set to keep a user from clicking on the element.
   */
  disabled?: boolean | string;
  /**
   * Title of the accordion-item as slot
   */
  headline?: any;
  /**
   * Title of the accordion-item as plain text
   */
  headlinePlain?: string;
}`,signature:{properties:[{key:"defaultOpen",value:{name:"boolean",required:!1},description:"Initial state for the accordion item"},{key:"disabled",value:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}],required:!1},description:"The disabled attribute can be set to keep a user from clicking on the element."},{key:"headline",value:{name:"any",required:!1},description:"Title of the accordion-item as slot"},{key:"headlinePlain",value:{name:"string",required:!1},description:"Title of the accordion-item as plain text"}]}},{name:"signature",type:"object",raw:`{
  /**
   * Alternative for default slot/children.
   */
  text?: string;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!1},description:"Alternative for default slot/children."}]}}]}],raw:"DBAccordionItemDefaultProps[]"},{name:"string"}]},description:"Alternative to pass in a simple representation of accordion items"},name:{required:!1,tsType:{name:"string"},description:"Set details name for exclusive accordions, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#name"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(openAccordionItemIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"openAccordionItemIds"}],return:{name:"void"}}},description:"Informs about the changes in the internal state, which item is open"},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof AccordionVariantList)[number]"},description:`Defines the display of the accordion and the items:
"divider": with a dividing line between the items
"card": w/o dividing line, but items are shown in the card variant`},children:{required:!1,tsType:{name:"any"},description:"default slot"},className:{required:!1,tsType:{name:"string"},description:"React specific for adding className to the component."},class:{required:!1,tsType:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},description:"Workaround for TypeScript using class for all components."},id:{required:!1,tsType:{name:"string"},description:"[ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset."},autofocus:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Before using please check for the [accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_concerns)"}}};export{D};
