/* DB UX runtime check + model gate. ready:true → paste render.js and render.
 * ready:false → BOOTSTRAP REQUIRED: follow `gate` EXACTLY, do not improvise. */
const NS="dbuxRuntime",SHA="bdace0b962c9",COUNT=10,BYTES=65801;
const SUM=["fbfe3d79","07a1863e","b87784e5","90196445","b9376127","51e0013a","6611a3cd","2e35d27a","3cada5f5","9c3362ad"];
const _h=s=>{let v=0x811c9dc5;for(let i=0;i<s.length;i++){v^=s.charCodeAt(i);v=Math.imul(v,0x01000193)>>>0}return v.toString(16).padStart(8,"0")};
const m=JSON.parse(figma.root.getSharedPluginData(NS,"meta")||"{}");
let stored=0;const bad=[];
for(let i=0;i<(m.count||0);i++){const s=figma.root.getSharedPluginData(NS,"c"+i);stored+=s.length;
if(i<COUNT&&_h(s)!==SUM[i])bad.push("c"+i);}
const ready=m.sha===SHA&&m.count===COUNT&&stored===BYTES&&bad.length===0;
return JSON.stringify({ready,storedSha:m.sha||null,expectedSha:SHA,storedBytes:stored,expectedBytes:BYTES,chunks:COUNT,corruptChunks:bad,
gate:ready?"OK — runtime is current. Do NOT bootstrap. Paste bootstrap/render.js plus the plan.":(bad.length?"CORRUPT STORE — chunk(s) "+bad.join(", ")+" have the right length but altered content, so the stored runtime is NOT the built one. Do NOT patch chunks and do NOT hand-roll a renderer: re-paste those store-<i>.js file(s) VERBATIM and run store-meta.js again. ":"")+"BOOTSTRAP REQUIRED — "+COUNT+" chunks of up to "+7000+" chars must be pasted VERBATIM (~"+BYTES+" chars total). If you cannot reproduce each chunk byte-for-byte, STOP NOW, change nothing, and tell the user: Runtime-Bootstrap erforderlich — bitte auf ein großes Modell wechseln (z. B. Claude Opus 5) und den Auftrag erneut senden. The bootstrap is needed once per Figma file; afterwards every model can render. Never shorten, merge, split, guess or hand-repair a chunk, never write the meta record yourself, and never fall back to hand-written Figma node code."});
