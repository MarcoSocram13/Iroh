/* ╔══════════════════════════════════════════════════════════════╗
   ║  DATOS EDITABLES — ACÁ CARGÁS TUS SERIES                      ║
   ║  Cada serie tiene: t = tipo, r = reps, p = peso, d = descanso ║
   ║  Tipo sugerido: "Aproximación" o "Efectiva (al fallo)"        ║
   ╚══════════════════════════════════════════════════════════════╝ */
const GRUPOS=[
{id:"pecho",nombre:"Pecho",hue:"#e5484d",desc:"Presión y aperturas: el torso que sostiene el fuego.",ejercicios:[
 {id:"pe-01",nombre:"Aperturas con mancuernas",nivel:"Intermedio",
  desc:"Pre-fatiga clásica de Mentzer: estiramiento profundo y contracción aislada del pectoral antes de la prensa. Codos suaves, nunca bloqueados.",
  tip:"El pecho se agota primero si la técnica es perfecta. No busques peso: buscá contracción.",
  series:[{t:"Aproximación",r:"8",p:"—",d:"60 s"},{t:"Efectiva (al fallo)",r:"6–10",p:"—",d:"—"}]},
 {id:"pe-02",nombre:"Press inclinado en Smith",nivel:"Avanzado",
  desc:"Inmediatamente después de las aperturas. Bajada en 4 segundos, pausa de 2 y subida en 4. La serie efectiva termina cuando el fallo es real.",
  tip:"La cadencia lenta convierte un peso moderado en una intensidad brutal.",
  series:[{t:"Aproximación",r:"8",p:"40 kg",d:"90 s"},{t:"Efectiva (al fallo)",r:"6–10",p:"60 kg",d:"—"}]},
 {id:"pe-03",nombre:"Fondos en paralelas",nivel:"Intermedio",
  desc:"Torso inclinado hacia adelante para enfatizar el pectoral. Una sola serie llevada al fallo; si superás las 10 reps, sumás lastre.",
  tip:"Bajá hasta el estiramiento completo. Subir a medias es robarse a uno mismo.",
  series:[{t:"Efectiva (al fallo)",r:"6–10 (+lastre)",p:"—",d:"—"}]},
 {id:"pe-04",nombre:"Cruce en polea / Pec Deck",nivel:"Todos",
  desc:"Contracción máxima en el cierre, sostenida un segundo. Ideal como finisher breve dentro del espíritu de una sola serie.",
  tip:"Apretá un segundo arriba: ahí vive la diferencia entre estimular y mover peso.",
  series:[{t:"Efectiva (al fallo)",r:"8–12",p:"—",d:"—"}]}]},
{id:"espalda",nombre:"Espalda",hue:"#5b8dbf",desc:"Amplitud y densidad: las alas del practicante.",ejercicios:[
 {id:"es-01",nombre:"Pullover (máquina o mancuerna)",nivel:"Todos",
  desc:"El ejercicio favorito de Mentzer para el dorsal: estiramiento total tras la última rep y expansión de caja.",
  tip:"Respirá hondo entre reps. El pullover también entrena la caja torácica.",
  series:[{t:"Aproximación",r:"8",p:"—",d:"60 s"},{t:"Efectiva (al fallo)",r:"6–10",p:"—",d:"—"}]},
 {id:"es-02",nombre:"Jalón al pecho, agarre cerrado",nivel:"Intermedio",
  desc:"Directamente después del pullover. Tirar con los codos, no con las manos; pausa abajo y control absoluto de la subida.",
  tip:"Imaginá que las manos son solo ganchos. El dorsal hace todo el trabajo.",
  series:[{t:"Aproximación",r:"8",p:"—",d:"90 s"},{t:"Efectiva (al fallo)",r:"6–10",p:"—",d:"—"}]},
 {id:"es-03",nombre:"Remo con barra, agarre supino",nivel:"Avanzado",
  desc:"Densidad para la espalda media. Torso firme, sin impulso lumbar: la barra viaja al ombligo.",
  tip:"Si tenés que balancearte, el peso es demasiado. El ego no construye dorsales.",
  series:[{t:"Aproximación",r:"8",p:"—",d:"90 s"},{t:"Efectiva (al fallo)",r:"6–10",p:"—",d:"—"}]},
 {id:"es-04",nombre:"Peso muerto",nivel:"Avanzado",
  desc:"Fuerza bruta con técnica sagrada. Una serie efectiva tras el calentamiento; espalda neutra siempre.",
  tip:"El peso muerto perdona todo menos la técnica. Respetalo.",
  series:[{t:"Aproximación",r:"6",p:"—",d:"120 s"},{t:"Efectiva (al fallo)",r:"5–8",p:"—",d:"—"}]}]},
{id:"hombros",nombre:"Hombros",hue:"#f0a340",desc:"Tres cabezas, un solo objetivo: hombros de piedra.",ejercicios:[
 {id:"ho-01",nombre:"Elevaciones laterales",nivel:"Todos",
  desc:"Aislamiento puro del deltoides medio. Subida controlada, sin balanceo; el codo guía el movimiento.",
  tip:"Menos peso y más pausa arriba: el deltoides responde a la precisión.",
  series:[{t:"Aproximación",r:"10",p:"—",d:"60 s"},{t:"Efectiva (al fallo)",r:"6–10",p:"—",d:"—"}]},
 {id:"ho-02",nombre:"Pájaros (posterior)",nivel:"Todos",
  desc:"Inclinado o en máquina, para el deltoides posterior: el gran olvidado del hombro completo.",
  tip:"Pensá en separar los omóplatos hacia afuera, no en levantar los brazos.",
  series:[{t:"Efectiva (al fallo)",r:"8–12",p:"—",d:"—"}]},
 {id:"ho-03",nombre:"Encogimientos con barra",nivel:"Intermedio",
  desc:"Trapecios: subida con pausa de dos segundos arriba y bajada en cuatro.",
  tip:"La pausa arriba es donde el trapecio entiende el mensaje.",
  series:[{t:"Aproximación",r:"8",p:"—",d:"60 s"},{t:"Efectiva (al fallo)",r:"6–10",p:"—",d:"—"}]},
 {id:"ho-04",nombre:"Press de hombros en máquina",nivel:"Intermedio",
  desc:"Prensa vertical controlada hasta el fallo. La máquina permite llegar al límite sin riesgo de caída.",
  tip:"Última rep: si no podés subir un centímetro más, ahí estaba la serie.",
  series:[{t:"Aproximación",r:"8",p:"—",d:"90 s"},{t:"Efectiva (al fallo)",r:"6–10",p:"—",d:"—"}]}]},
{id:"biceps",nombre:"Bíceps",hue:"#c96f3a",desc:"Pico y plenitud: brazos que hablan de disciplina.",ejercicios:[
 {id:"bi-01",nombre:"Curl con barra recta",nivel:"Todos",
  desc:"El constructor básico. Codos pegados al cuerpo, sin impulso lumbar; bajada en 4 segundos.",
  tip:"La bajada lenta construye tanto como la subida. No la dejes caer.",
  series:[{t:"Aproximación",r:"8",p:"—",d:"60 s"},{t:"Efectiva (al fallo)",r:"6–10",p:"—",d:"—"}]},
 {id:"bi-02",nombre:"Curl concentrado",nivel:"Todos",
  desc:"Aislamiento total: una mano, un brazo, toda la atención. Contracción máxima en el pico.",
  tip:"Mirá el bíceps trabajar. Conexión mente-músculo: eso también es Heavy Duty.",
  series:[{t:"Efectiva (al fallo)",r:"6–10 por lado",p:"—",d:"—"}]},
 {id:"bi-03",nombre:"Curl en banco inclinado",nivel:"Intermedio",
  desc:"Estiramiento completo del bíceps desde la posición reclinada. Prohibido adelantar los codos.",
  tip:"El estiramiento bajo carga es el estímulo más potente que existe.",
  series:[{t:"Efectiva (al fallo)",r:"6–10",p:"—",d:"—"}]}]},
{id:"triceps",nombre:"Tríceps",hue:"#d64f7a",desc:"Dos tercios del brazo se entrenan acá.",ejercicios:[
 {id:"tr-01",nombre:"Fondos entre bancos",nivel:"Todos",
  desc:"Cuerpo cerca de los bancos, bajada profunda. Una serie al fallo con el peso corporal o lastre.",
  tip:"Si es liviano, sumá un disco a la cintura. El fallo manda.",
  series:[{t:"Efectiva (al fallo)",r:"6–12",p:"—",d:"—"}]},
 {id:"tr-02",nombre:"Press francés / Rompecráneos",nivel:"Intermedio",
  desc:"Codos fijos apuntando al techo; extensión completa con pausa. La barra EZ cuida las muñecas.",
  tip:"Codos quietos como columnas: si se abren, se escapa el estímulo.",
  series:[{t:"Aproximación",r:"8",p:"—",d:"60 s"},{t:"Efectiva (al fallo)",r:"6–10",p:"—",d:"—"}]},
 {id:"tr-03",nombre:"Press con agarre cerrado",nivel:"Avanzado",
  desc:"El básico de fuerza del tríceps según Mentzer. Agarre a la altura de hombros, codos adentro.",
  tip:"Empujá con la intención de doblar la barra. Intensidad mental también.",
  series:[{t:"Aproximación",r:"8",p:"—",d:"90 s"},{t:"Efectiva (al fallo)",r:"6–10",p:"—",d:"—"}]}]},
{id:"piernas",nombre:"Piernas",hue:"#3f8f5f",desc:"La base del templo: intensidad con cabeza.",ejercicios:[
 {id:"pi-01",nombre:"Extensiones de cuádriceps",nivel:"Todos",
  desc:"Pre-fatiga: una serie al fallo con pausa de un segundo arriba antes de la prensa.",
  tip:"Cuando arde de verdad, recién empezás. Ahí cuenta cada rep.",
  series:[{t:"Aproximación",r:"10",p:"—",d:"60 s"},{t:"Efectiva (al fallo)",r:"8–15",p:"—",d:"—"}]},
 {id:"pi-02",nombre:"Sentadilla / Prensa",nivel:"Avanzado",
  desc:"Directamente después de las extensiones. Bajada profunda y controlada; una sola serie que lo define todo.",
  tip:"La serie de piernas de Mentzer dura poco y se recuerda siempre. Respirá y andá.",
  series:[{t:"Aproximación",r:"8",p:"—",d:"120 s"},{t:"Efectiva (al fallo)",r:"8–15",p:"—",d:"—"}]},
 {id:"pi-03",nombre:"Curl femoral",nivel:"Todos",
  desc:"Isquiotibiales en su rango completo. Cadera pegada al banco, sin despegar.",
  tip:"El femoral también quiere fallo: no lo trates como un trámite.",
  series:[{t:"Aproximación",r:"8",p:"—",d:"60 s"},{t:"Efectiva (al fallo)",r:"8–15",p:"—",d:"—"}]},
 {id:"pi-04",nombre:"Elevación de talones",nivel:"Todos",
  desc:"Gemelos: pausa de dos segundos en el estiramiento profundo, subida completa y contracción final.",
  tip:"El gemelo crece con pausas, no con rebotes.",
  series:[{t:"Aproximación",r:"10",p:"—",d:"45 s"},{t:"Efectiva (al fallo)",r:"12–20",p:"—",d:"—"}]}]},
{id:"core",nombre:"Core",hue:"#d9a441",desc:"El centro del fuego: abdomen fuerte, espalda sana.",ejercicios:[
 {id:"co-01",nombre:"Crunch en polea / máquina",nivel:"Todos",
  desc:"Resistencia progresiva para el abdomen: Mentzer lo trataba como cualquier otro músculo — una serie al fallo.",
  tip:"Enrollá la columna, no tires con los brazos. El abdomen flexiona, el resto acompaña.",
  series:[{t:"Efectiva (al fallo)",r:"12–20",p:"—",d:"—"}]},
 {id:"co-02",nombre:"Elevación de piernas colgado",nivel:"Intermedio",
  desc:"Abdomen inferior y flexores de cadera. Subida controlada; bajada sin balanceo.",
  tip:"Si te balanceás, colgate de nuevo y empezá de cero. Honestidad ante todo.",
  series:[{t:"Efectiva (al fallo)",r:"8–15",p:"—",d:"—"}]}]}
];

/* ╔══════════════════════════════════════════════════════════════════╗
   ║  CERTIFICADOS — 2 ESPACIOS · EDITÁ ACÁ                            ║
   ║  En "imagen" pegá la ruta del archivo:                            ║
   ║    "certificado-1.jpg"  → si está en la misma carpeta             ║
   ║    "img/certificado-1.jpg" → si está en una subcarpeta            ║
   ║  Mientras la dejes vacía (""), se muestra el marco de "pendiente".║
   ╚══════════════════════════════════════════════════════════════════╝ */
const CERTIFICADOS=[
  { titulo:"Entrenador Personal En ENtrenamiento Funcional",           // ← título del certificado 1
    ent:"AMAIP",     // ← entidad
    anio:"2025",                            // ← año
    imagen:"certificado-amaip (4)_page-0001.jpg" },                            // ← IMAGEN DEL CERTIFICADO 1
  { titulo:"Instructor en Musculación y Entrenador Personal",     // ← título del certificado 2
    ent:"AMAIP",     // ← entidad
    anio:"2025",                            // ← año
    imagen:"certificado-amaip (3)_page-0001.jpg" }                             // ← IMAGEN DEL CERTIFICADO 2
];

/* ── Frases del té ── */
const TEA=["El músculo se estimula con fuego, pero crece en la calma.",
 "Una serie perfecta vale más que mil a medias.",
 "El descanso no es ausencia de entrenamiento: es el entrenamiento invisible.",
 "Si no llegaste al fallo, la serie todavía no empezó.",
 "La paciencia es el músculo más fuerte."];

/* ══════════ ESTADO Y UTILIDADES ══════════ */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const store={
  progress:JSON.parse(localStorage.getItem("iroh-progress")||"{}"),
  plan:JSON.parse(localStorage.getItem("iroh-plan")||"[]")
};
const save=()=>{localStorage.setItem("iroh-progress",JSON.stringify(store.progress));
  localStorage.setItem("iroh-plan",JSON.stringify(store.plan));};
const findEx=id=>{for(const g of GRUPOS){const e=g.ejercicios.find(x=>x.id===id);if(e)return{g,e};}return{};};
const doneCount=e=>(store.progress[e.id]||[]).filter(Boolean).length;
const exDone=e=>doneCount(e)===e.series.length&&e.series.length>0;
const effLabel=e=>{const eff=e.series.filter(s=>/fectiva/i.test(s.t));
  return `${eff.length} efectiva${eff.length!==1?"s":""} · ${eff[0]?eff[0].r:"al fallo"}`;};
let toastT;
function toast(msg,title="IROH"){const t=$("#toast");t.innerHTML=`<small>${title}</small>${msg}`;
  t.classList.add("show");clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove("show"),3200);}

/* ══════════ CARTAS ══════════ */
function cardHTML(e,g){const p=e.series.length?Math.round(doneCount(e)/e.series.length*100):0;
  return `<button class="card ${exDone(e)?"is-done":""} ${store.plan.includes(e.id)?"in-plan":""}"
    data-card="${e.id}" style="--h:${g.hue}" aria-label="${e.nombre}">
    <span class="c-badge">HD</span>
    ${store.plan.includes(e.id)?'<span class="c-book" title="En tu plan">✔</span>':""}
    ${exDone(e)?'<span class="c-done">★ COMPLETADO</span>':""}
    <span class="c-name">${e.nombre}</span>
    <span class="c-sub">${effLabel(e)}</span>
    <span class="c-prog"><i style="width:${p}%"></i></span></button>`;}
function refreshCard(id){const{e}=findEx(id);if(!e)return;
  $$(`[data-card="${id}"]`).forEach(c=>{
    c.classList.toggle("is-done",exDone(e));c.classList.toggle("in-plan",store.plan.includes(id));
    c.querySelector(".c-prog i").style.width=(e.series.length?doneCount(e)/e.series.length*100:0)+"%";
    c.querySelector(".c-book")?.remove();c.querySelector(".c-done")?.remove();
    if(store.plan.includes(id))c.insertAdjacentHTML("afterbegin",'<span class="c-book">✔</span>');
    if(exDone(e))c.insertAdjacentHTML("afterbegin",'<span class="c-done">★ COMPLETADO</span>');});}

/* ══════════ CARPETAS ══════════ */
$("#folders").innerHTML=GRUPOS.map((g,i)=>`
 <article class="folder ${i===0?"open":""}" style="--h:${g.hue}" id="f-${g.id}">
  <button class="folder-head" aria-expanded="${i===0}">
    <span class="fh-idx">${String(i+1).padStart(2,"0")}</span>
    <span class="fh-chip">${g.nombre.slice(0,2).toUpperCase()}</span>
    <span class="fh-name">${g.nombre.toUpperCase()}</span>
    <span class="fh-count">${g.ejercicios.length} ejercicios</span>
    <span class="fh-open">Carpeta <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="m6 9 6 6 6-6"/></svg></span>
  </button>
  <div class="folder-body"><div class="fb-in">
    <p class="fh-desc">${g.desc}</p>
    <div class="row-wrap">
      <button class="row-btn prev" aria-label="Anterior">‹</button>
      <div class="row">${g.ejercicios.map(e=>cardHTML(e,g)).join("")}</div>
      <button class="row-btn next" aria-label="Siguiente">›</button>
    </div>
  </div></div></article>`).join("");

/* ══════════ CERTIFICADOS (render) ══════════ */
$("#certGrid").innerHTML=CERTIFICADOS.map((c,i)=>`
 <button class="cert-card" data-cert="${i}" aria-haspopup="dialog" aria-label="Agrandar certificado: ${c.titulo}">
   <span class="seal">★</span>
   <span class="cc-frame">
     ${c.imagen
       ?`<img src="${c.imagen}" alt="Certificado: ${c.titulo}">`
       :`<span class="cc-empty">CERTIFICADO Nº ${i+1}<br>CARGÁ TU IMAGEN EN<br>app.js → CERTIFICADOS</span>`}
   </span>
   <span class="cc-cap"><b>${c.titulo.toUpperCase()}</b><span>${c.ent.split("—")[0].trim()} · ${c.anio}</span></span>
   <span class="cc-hint">🔍 TOCÁ PARA AGRANDAR</span>
 </button>`).join("");

/* ══════════ INTERACCIÓN GLOBAL ══════════ */
document.addEventListener("click",ev=>{
  const card=ev.target.closest("[data-card]");if(card){openModal(card.dataset.card);return;}
  const head=ev.target.closest(".folder-head");
  if(head){const f=head.parentElement;const open=f.classList.toggle("open");
    head.setAttribute("aria-expanded",open);return;}
  const rb=ev.target.closest(".row-btn");
  if(rb){const row=rb.parentElement.querySelector(".row");
    row.scrollBy({left:(rb.classList.contains("next")?1:-1)*row.clientWidth*.75,behavior:"smooth"});return;}
  const cert=ev.target.closest("[data-cert]");
  if(cert){openCert(+cert.dataset.cert);return;}
  if(ev.target.closest("[data-close]")||ev.target.classList.contains("overlay")){
    closeOverlay(ev.target.classList.contains("overlay")?ev.target:ev.target.closest(".overlay"));}
});
function closeOverlay(o){if(!o)return;o.classList.remove("show");
  if(!$(".overlay.show"))document.body.style.overflow="";
  if(o.id==="modal")currentId=null;}

/* ══════════ MODAL DE EJERCICIO ══════════ */
let currentId=null;
function openModal(id){const{e,g}=findEx(id);if(!e)return;currentId=id;
  $("#mHero").style.setProperty("--h",g.hue);
  $("#mKicker").textContent=`MÉTODO HEAVY DUTY · GRUPO ${g.nombre.toUpperCase()}`;
  $("#mTitle").textContent=e.nombre;
  $("#mChips").innerHTML=`<span class="chip hl">${g.nombre}</span><span class="chip">${e.nivel}</span>
    <span class="chip">Al fallo</span><span class="chip">${e.series.length} series</span>`;
  $("#mDesc").textContent=e.desc;
  $("#mTip").innerHTML=`«${e.tip}»<cite>— Filosofía Mentzer</cite>`;
  const eff=e.series.find(s=>/fectiva/i.test(s.t));
  $("#mFile").innerHTML=`<span><b>FICHA</b></span>
    <span>Grupo muscular ······ ${g.nombre}</span>
    <span>Rango efectivo ······· ${eff?eff.r:"al fallo"}</span>
    <span>Cadencia sugerida ···· 4-2-4 (lenta y controlada)</span>
    <span>Descanso entre grupos · 72–96 horas</span>`;
  renderSets(e);$("#mPlan").textContent=store.plan.includes(id)?"✔ En tu plan":"＋ Mi plan";
  $("#modal").classList.add("show");document.body.style.overflow="hidden";}
function renderSets(e){const marks=store.progress[e.id]||[];
  $("#mSets").innerHTML=`<div class="set-row head"><span>#</span><span>TIPO</span><span>PESO</span><span>REPS</span><span>DESC.</span><span>✓</span></div>`+
   e.series.map((s,i)=>`<label class="set-row ${marks[i]?"done":""}">
     <span class="sr-i">${String(i+1).padStart(2,"0")}</span>
     <span class="sr-t ${/fectiva/i.test(s.t)?"eff":""}">${s.t}</span>
     <span class="sr-p">${s.p}</span><span class="sr-r">${s.r}</span><span class="sr-d">${s.d}</span>
     <input type="checkbox" data-set="${i}" ${marks[i]?"checked":""}><span class="sr-check">✓</span></label>`).join("");
  updateModalProg(e);}
function updateModalProg(e){const d=doneCount(e),n=e.series.length,p=n?Math.round(d/n*100):0;
  $("#mProgTxt").textContent=`${d}/${n}`;$("#mProgBar").style.width=p+"%";}
$("#mSets").addEventListener("change",ev=>{const cb=ev.target.closest("[data-set]");if(!cb||!currentId)return;
  const{e}=findEx(currentId);const marks=store.progress[currentId]||Array(e.series.length).fill(false);
  marks[+cb.dataset.set]=cb.checked;store.progress[currentId]=marks;save();
  cb.closest(".set-row").classList.toggle("done",cb.checked);
  updateModalProg(e);refreshCard(currentId);
  if(exDone(e))toast(`«${e.nombre}» completado. El fuego hizo su trabajo 🔥`,"SERIE REGISTRADA");});
$("#mAll").addEventListener("click",()=>{if(!currentId)return;const{e}=findEx(currentId);
  store.progress[currentId]=Array(e.series.length).fill(true);save();renderSets(e);refreshCard(currentId);
  toast("Todas las series marcadas. Ahora: descanso de sabio 🌙","IROH");});
$("#mReset").addEventListener("click",()=>{if(!currentId)return;
  store.progress[currentId]=[];save();const{e}=findEx(currentId);renderSets(e);refreshCard(currentId);});
$("#mPlan").addEventListener("click",()=>{if(currentId)togglePlan(currentId);});
function togglePlan(id){const{e}=findEx(id);const i=store.plan.indexOf(id);
  if(i>=0){store.plan.splice(i,1);toast(`«${e.nombre}» salió de tu plan.`,"MI PLAN");}
  else{store.plan.push(id);toast(`«${e.nombre}» sumado a tu plan 🔥`,"MI PLAN");}
  save();updatePlanBadge();refreshCard(id);
  if(currentId===id)$("#mPlan").textContent=store.plan.includes(id)?"✔ En tu plan":"＋ Mi plan";}
function updatePlanBadge(){$("#planCount").textContent=store.plan.length;}
updatePlanBadge();

/* ══════════ LIGHTBOX CERTIFICADO (agrandar) ══════════ */
function openCert(i){const c=CERTIFICADOS[i];if(!c)return;
  if(!c.imagen){toast(`Cargá la imagen del certificado Nº ${i+1} en el bloque CERTIFICADOS de app.js 📎`,"CERTIFICADO PENDIENTE");return;}
  $("#lbImg").src=c.imagen;
  $("#lbTitle").textContent=c.titulo.toUpperCase();
  $("#lbMeta").textContent=`${c.ent} · ${c.anio}`;
  $("#lightbox").classList.add("show");document.body.style.overflow="hidden";}

/* ══════════ BÚSQUEDA + MI PLAN ══════════ */
const searchWrap=$("#searchWrap"),searchInput=$("#searchInput");
$("#searchBtn").addEventListener("click",()=>{searchWrap.classList.toggle("open");searchInput.focus();});
searchInput.addEventListener("input",()=>{const q=searchInput.value.trim().toLowerCase();
  if(!q){hideResults();return;}
  const hits=[];GRUPOS.forEach(g=>g.ejercicios.forEach(e=>{
    if((e.nombre+" "+g.nombre+" "+e.desc).toLowerCase().includes(q))hits.push({e,g});}));
  showResults(hits,`Resultados para “${searchInput.value.trim()}”`);});
searchInput.addEventListener("keydown",ev=>{if(ev.key==="Escape"){searchInput.value="";hideResults();}});
$("#heroPlan").addEventListener("click",openPlan);
$("#planBtn").addEventListener("click",openPlan);
function openPlan(){const items=store.plan.map(id=>findEx(id)).filter(x=>x.e);
  if(!items.length){toast("Tu plan está vacío. Sumá ejercicios desde las carpetas 💪","MI PLAN");return;}
  showResults(items,"Mi plan de entrenamiento");}
function showResults(items,title){$("#resTitle").textContent=title;
  $("#resGrid").innerHTML=items.length?items.map(({e,g})=>cardHTML(e,g)).join("")
    :'<p style="color:var(--muted)">Sin coincidencias. Probá con otro término.</p>';
  $("#resultados").classList.remove("hidden");
  $("#resultados").scrollIntoView({behavior:"smooth",block:"start"});}
function hideResults(){$("#resultados").classList.add("hidden");}
$("#resClear").addEventListener("click",()=>{hideResults();searchInput.value="";});

/* ══════════ NAV / TECLADO ══════════ */
const nav=$("#nav");
addEventListener("scroll",()=>nav.classList.toggle("solid",scrollY>40),{passive:true});
$("#burger").addEventListener("click",()=>$("#navLinks").classList.toggle("open"));
$$("#navLinks a").forEach(a=>a.addEventListener("click",()=>$("#navLinks").classList.remove("open")));
document.addEventListener("keydown",ev=>{if(ev.key==="Escape"){closeOverlay($("#modal"));closeOverlay($("#lightbox"));}});

/* ══════════ TÉ DE LA SABIDURÍA ══════════ */
$("#teaBtn").addEventListener("click",()=>toast(TEA[Math.random()*TEA.length|0],"🍵 TÉ DE LA SABIDURÍA"));

/* ══════════ AMBIENTE: brasas, reveals, scramble, contadores ══════════ */
(function embers(){const box=$("#embers");
  for(let i=0;i<26;i++){const s=document.createElement("span");const sz=2+Math.random()*4;
    s.style.cssText=`left:${Math.random()*100}%;width:${sz}px;height:${sz}px;
      animation-duration:${9+Math.random()*14}s;animation-delay:${Math.random()*14}s;--dx:${(Math.random()*120-60)|0}px`;
    box.appendChild(s);}})();
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add("in");io.unobserve(en.target);}}),{threshold:.12});
$$(".reveal").forEach(el=>io.observe(el));
function scramble(el){const final=el.dataset.text||el.textContent;el.dataset.text=final;
  const chars="▓#%&IROH10";let f=0;
  const iv=setInterval(()=>{f++;el.textContent=final.split("").map((c,i)=>
    i<f?c:(c===" "?" ":chars[Math.random()*chars.length|0])).join("");
    if(f>=final.length)clearInterval(iv);},26);}
setTimeout(()=>scramble($("#kicker")),400);
const ioS=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){scramble(en.target);ioS.unobserve(en.target);}}),{threshold:.6});
$$(".scramble").forEach(el=>ioS.observe(el));
const ioC=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;
  const el=en.target,target=+el.dataset.count,pre=el.dataset.pre||"",suf=el.dataset.suf||"",t0=performance.now();
  const step=t=>{const k=Math.min((t-t0)/1300,1);
    el.textContent=pre+Math.round(target*(1-Math.pow(1-k,3)))+suf;
    if(k<1)requestAnimationFrame(step);};
  requestAnimationFrame(step);ioC.unobserve(el);}),{threshold:.6});
$$("[data-count]").forEach(el=>ioC.observe(el));