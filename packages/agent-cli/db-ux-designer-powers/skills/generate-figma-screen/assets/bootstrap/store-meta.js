/* DB UX runtime meta — run AFTER store-0.js .. store-4.js.
 * Verifies every chunk (length + content checksum) and writes the "ready"
 * record ONLY if all of them are intact. */
const NS="dbuxRuntime",COUNT=5,CHUNK=17261,BYTES=86301;
const SUM=["66c5dd14","0f16e9b6","fa773570","0595ef62","f3205209"];
const _h=s=>{let v=0x811c9dc5;for(let i=0;i<s.length;i++){v^=s.charCodeAt(i);v=Math.imul(v,0x01000193)>>>0}return v.toString(16).padStart(8,"0")};
const bad=[];let total=0;
for(let i=0;i<COUNT;i++){const s=figma.root.getSharedPluginData(NS,"c"+i),len=s.length;
const want=i<COUNT-1?CHUNK:BYTES-CHUNK*(COUNT-1);total+=len;
if(len!==want){bad.push("c"+i+" is "+len+" chars, expected "+want);continue}
const got=_h(s);
if(got!==SUM[i])bad.push("c"+i+" has the right length but WRONG CONTENT (checksum "+got+", expected "+SUM[i]+") — one or more characters were altered, typically a \\uXXXX escape emitted as the literal character, a straight quote turned typographic, or a minified !0/!1 boolean changed");}
if(bad.length||total!==BYTES)throw new Error("[STOP] Bootstrap incomplete or corrupt — meta was NOT written, so the stored chunks stay inert and nothing in this file is broken. "+(bad.join("; ")||("total "+total+" != "+BYTES))+". Re-paste EXACTLY the listed store-<i>.js file(s) VERBATIM, then run this snippet again. If you cannot reproduce each chunk byte-for-byte, STOP NOW, change nothing, and tell the user: Runtime-Bootstrap erforderlich — bitte auf ein großes Modell wechseln (z. B. Claude Opus 5) und den Auftrag erneut senden. The bootstrap is needed once per Figma file; afterwards every model can render. Never shorten, merge, split, guess or hand-repair a chunk, never write the meta record yourself, and never fall back to hand-written Figma node code.");
figma.root.setSharedPluginData(NS,"meta","{\"count\":5,\"sha\":\"c81fa8cebfe1\",\"chunk\":17261,\"bytes\":86301}");
return figma.root.getSharedPluginData(NS,"meta");
