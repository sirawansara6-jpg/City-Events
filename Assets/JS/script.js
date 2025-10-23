const btnEn = document.getElementById("btn-en");
const btnAr = document.getElementById("btn-ar");
const darkSwitch = document.getElementById("darkSwitch");

const savedLang  = localStorage.getItem("site_lang")  || "en";
const savedTheme = localStorage.getItem("site_theme") || "light";

const dictEN2AR = {
  "City Events": "فعاليات المدينة",
  "Home": "الرئيسية",
  "Events": "الفعاليات",
  "About Us": "من نحن",
  "Contact Us": "تواصل معنا",
  "Dark": "داكن",
  "© 2025 City Events Booker | All Rights Reserved": "© 2025 فعاليات المدينة | جميع الحقوق محفوظة",

  "Discover City Events": "اكتشف فعاليات المدينة",
  "Concerts • Sports • Festivals • Family Fun": "حفلات • رياضة • مهرجانات • ترفيه عائلي",
  "Explore Events": "استكشف الفعاليات",

  "Ready for New Thrills?": "جاهز لتجارب جديدة؟",
  "Damascus": "دمشق",
  "Aleppo": "حلب",
  "Homs": "حمص",
  "Hama": "حماة",
  "Latakia": "اللاذقية",
  "Tartous": "طرطوس",
  "Tartus": "طرطوس",
  "Idlib": "إدلب",
  "Daraa": "درعا",
  "Sweida": "السويداء",
  "Deir Ezzor": "دير الزور",
  "Raqqa": "الرقة",
  "Hasakah": "الحسكة",
  "Quneitra": "القنيطرة",
  "Rural Damascus": "ريف دمشق",

  "Our Team": "فريقنا",
  "ID:": "الرقم الجامعي:",
  "Sara Sirawan": "سارة سيروان",
  "Razan Alkhatib": "رزان الخطيب",
  "Shahd Alkhatib": "شهد الخطيب",
  "Marah Mahdi": "مرح مهدي",
  "Fatima Qusaad": "فاطمة قصاد",
  "Leen Alkurdi": "لين الكردي",

  "290103": "٢٩٠١٠٣",
  "234405": "٢٣٤٤٠٥",
  "315024": "٣١٥٠٢٤",
  "232033": "٢٣٢٠٣٣",
  "239375": "٢٣٩٣٧٥",
  "251223": "٢٥١٢٢٣",

  "All Events": "كل الفعاليات",
  "All Categories": "كل الأنواع",
  "All Provinces": "كل المحافظات",
  "Search by title, venue...": "ابحث حسب العنوان أو المكان...",
  "Reset": "إعادة تعيين",
  "Details": "تفاصيل",

  "Music": "موسيقى",
  "Sports": "رياضة",
  "Art": "فن",
  "Culture": "ثقافة",
  "Food": "طعام",
  "Family": "عائلي",

  "Music Night": "ليلة موسيقية",
  "Umauyeen Square": "ساحة الأمويين",
  "Simple student concert.": "حفلة طلابية بسيطة.",

  "City Run": "جري المدينة",
  "Mogambo": "مغانبو",
  "Local fun run.": "سباق محلي ممتع.",

  "Food Fest": "مهرجان طعام",
  "Rastan Square": "ساحة الرستن",
  "Street food stands.": "أكشاك طعام الشارع.",

  "Art Show": "عرض فني",
  "Aasi Yard": "ساحة العاصي",
  "Local paintings.": "لوحات محلية.",

  "Beach Day": "يوم الشاطئ",
  "Corniche": "الكورنيش",
  "Family games.": "ألعاب عائلية.",

  "Small Fair": "بازار صغير",
  "Port Area": "منطقة الميناء",
  "Crafts & music.": "حرف وموسيقى.",

  "Community Meet": "لقاء مجتمعي",
  "Ibla City": "مدينة إبلا",
  "Friendly meetup.": "لمة ودية.",

  "Street Food": "طعام الشارع",
  "Sawame3": "السوامع",
  "Tasty stalls.": "أكشاك لذيذة.",

  "Poetry Night": "أمسية شعر",
  "Theatre": "المسرح",
  "Soft music & poems.": "موسيقى هادئة وأشعار.",

  "Family Day": "يوم عائلي",
  "Central Park": "الحديقة المركزية",
  "Games & music.": "ألعاب وموسيقى.",

  "Football Cup": "كأس كرة القدم",
  "Dierah": "ديةرة",
  "Youth teams.": "فرق شبابية.",

  "Cultural Day": "يوم ثقافي",
  "Hasakah Castle": "قلعة الحسكة",
  "Traditional show.": "عرض تراثي.",

  "Family Fun": "مرح عائلي",
  "Mamura Forest": "غابة معمورة",
  "Kids area.": "منطقة للأطفال.",

  "Saidnaya Tour": "جولة صيدنايا",
  "Saidnaya": "صيدنايا",
  "Crafts & food.": "حرف وطعام.",

  "25 Oct 2025": "٢٥ تشرين الأول ٢٠٢٥",
  "12 Nov 2025": "١٢ تشرين الثاني ٢٠٢٥",
  "01 Jan 2026": "٠١ كانون الثاني ٢٠٢٦",
  "20 Oct 2025": "٢٠ تشرين الأول ٢٠٢٥",
  "15 Sep 2025": "١٥ أيلول ٢٠٢٥",
  "05 Nov 2025": "٠٥ تشرين الثاني ٢٠٢٥",
  "22 Aug 2025": "٢٢ آب ٢٠٢٥",
  "02 Nov 2025": "٠٢ تشرين الثاني ٢٠٢٥",
  "28 Nov 2025": "٢٨ تشرين الثاني ٢٠٢٥",
  "14 Feb 2026": "١٤ شباط ٢٠٢٦",
  "30 Dec 2025": "٣٠ كانون الأول ٢٠٢٥",
  "11 Oct 2025": "١١ تشرين الأول ٢٠٢٥",
  "19 Nov 2025": "١٩ تشرين الثاني ٢٠٢٥",
  "29 Sep 2025": "٢٩ أيلول ٢٠٢٥",

  "Event Details": "تفاصيل الفعالية",
  "Date:": "التاريخ:",
  "Province:": "المحافظة:",
  "Venue:": "المكان:",
  "Category:": "الفئة:",
  "Gallery": "المعرض",
  "Related Events": "فعاليات مشابهة",
  "Related Music Events": "فعاليات موسيقية مشابهة",
  "Share": "مشاركة",
  "Add to Calendar": "إضافة إلى التقويم",
  "Register": "تسجيل",
  "Simple student concert with open-air stage and casual atmosphere for youth and families.": "حفلة طلابية بسيطة على مسرح مفتوح وأجواء لطيفة للشباب والعائلات.",

  "About the Project": "عن المشروع",
  "City Events is a student project using HTML, CSS, JS, and Bootstrap.": "فعاليات المدينة مشروع طلابي باستخدام HTML وCSS وJS وBootstrap.",
  "It shows events from all Syrian provinces.": "يعرض فعاليات من جميع المحافظات السورية.",
  "Project for Web1 course at SVU.": "مشروع لمقرر Web1 في الجامعة الافتراضية السورية.",
  "Supervised by Dr. Basel Al-Khatib.": "بإشراف الدكتور باسل الخطيب.",
  "For educational purposes only.": "لأغراض تعليمية فقط.",

  "Contact Form": "نموذج التواصل",
  "We’d love to hear from you! Please fill out the form below and we’ll get back to you soon.": "يسعدنا تواصلك! املأ النموذج أدناه وسنرد عليك قريباً.",
  "Full Name": "الاسم الكامل",
  "Email Address": "البريد الإلكتروني",
  "Message": "الرسالة",
  "Send Message": "إرسال الرسالة",
  "Other Ways to Reach Us": "طرق أخرى للتواصل معنا",
  "Follow us on social media:": "تابعنا على وسائل التواصل:",
  "Facebook": "فيسبوك",
  "YouTube": "يوتيوب",
  "Twitter": "تويتر"
};



const dictAR2EN = Object.fromEntries(Object.entries(dictEN2AR).map(([key, value]) => [value, key]));




function tr(text, toLang){
  if (!text) return text;
  const trimmed = text.trim();
  if (!trimmed) return text;
  if (toLang === "ar") {
    return dictEN2AR[trimmed] || text;
  } else {
    return dictAR2EN[trimmed] || text;
  }
}


function translateDOM(lang){
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node){
      if(!node.nodeValue) return NodeFilter.FILTER_REJECT;
      const s = node.nodeValue.trim();
      if(!s) return NodeFilter.FILTER_REJECT;
      if(node.parentElement && ["SCRIPT","STYLE"].includes(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const texts = [];
  while(walker.nextNode()) texts.push(walker.currentNode);

  texts.forEach(node=>{
    const original = node.nodeValue;
    const converted = tr(original, lang);
    if (converted !== original) node.nodeValue = converted;
  });


  document.querySelectorAll("input[placeholder],textarea[placeholder]").forEach(el=>{
    const ph = el.getAttribute("placeholder");
    const conv = tr(ph, lang);
    if (conv !== ph) el.setAttribute("placeholder", conv);
  });
  document.querySelectorAll("select option").forEach(opt=>{
    const txt = opt.textContent;
    const conv = tr(txt, lang);
    if (conv !== txt) opt.textContent = conv;
  });


  document.documentElement.lang = lang;
  document.body.dir = (lang === "ar") ? "rtl" : "ltr";
  document.body.classList.toggle("text-end", lang === "ar");
  document.body.classList.toggle("text-start", lang !== "ar");

  localStorage.setItem("site_lang", lang);
}


function setDark(on){
  const body = document.body;
  const navs = document.querySelectorAll("[data-theme-nav]");
  const cards= document.querySelectorAll("[data-theme-card]");
  const foots= document.querySelectorAll("[data-theme-footer]");

  body.classList.toggle("bg-dark", on);
  body.classList.toggle("text-light", on);

  navs.forEach(n=>{
    n.classList.toggle("navbar-dark", on);
    n.classList.toggle("bg-dark", on);
    n.classList.toggle("navbar-light", !on);
    n.classList.toggle("bg-light", !on);
  });

  cards.forEach(c=>{
    c.classList.toggle("bg-dark", on);
    c.classList.toggle("border", on);
    c.classList.toggle("border-secondary", on);
    c.querySelectorAll("h1,h2,h3,h4,h5,h6,p,span,small,div,a,li,td,th").forEach(t=>{
      t.classList.toggle("text-light", on);
    });
  });

  foots.forEach(f=>{
    f.classList.add("text-white");
    f.classList.toggle("bg-black", on);
    if(!on){ f.classList.add("bg-dark"); }
  });

  localStorage.setItem("site_theme", on ? "dark" : "light");
}


function runFilters(){
  const s = document.getElementById("searchInput");
  const p = document.getElementById("filterProvince");
  const c = document.getElementById("filterCategory");
  const q = (s ? s.value : "").toLowerCase();
  const pv = (p ? p.value : "all");
  const cv = (c ? c.value : "all");

  document.querySelectorAll(".event-card-container").forEach(col=>{
    const card = col.querySelector(".event-card, .card");
    if(!card){ col.style.display=""; return; }
    const cp = (card.getAttribute("data-province")||"");
    const cc = (card.getAttribute("data-category")||"");
    const hay = col.textContent.toLowerCase();
    const ok = (pv==="all"||pv===cp) && (cv==="all"||cv===cc) && (!q || hay.includes(q));
    col.style.display = ok ? "" : "none";
  });
}


function setupContact(){
  const form = document.getElementById("contactForm");
  if(!form) return;
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = (document.getElementById("name")||{}).value||"";
    const email= (document.getElementById("email")||{}).value||"";
    const msg  = (document.getElementById("message")||{}).value||"";
    const alertBox = document.getElementById("formAlert");
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!name.trim() || !email.trim() || !re.test(email) || !msg.trim()){
      alertBox.className="alert alert-danger mt-3";
      alertBox.textContent = (savedLang==="ar") ? "يرجى ملء جميع الحقول." : "Please fill out all fields.";
      return;
    }
    alertBox.className="alert alert-success mt-3";
    alertBox.textContent = (savedLang==="ar") ? "تم إرسال الرسالة بنجاح!" : "Message sent successfully!";
    form.reset();
  });
}

function setupEventButtons(){
  const share = document.getElementById("shareEvent");
  const add   = document.getElementById("addToCalendar");
  const reg   = document.getElementById("registerEvent");
  if (share){
    share.addEventListener("click", ()=>{
      const url = location.href;
      if(navigator.share) navigator.share({title:document.title, url});
      else if(navigator.clipboard) navigator.clipboard.writeText(url).then(()=>alert(savedLang==="ar"?"تم نسخ الرابط":"Link copied"));
      else alert(url);
    });
  }
  if(add) add.addEventListener("click", ()=>alert(savedLang==="ar"?"(تجريبي) تمّت الإضافة للتقويم":"(Demo) Added to calendar"));
  if(reg) reg.addEventListener("click", ()=>alert(savedLang==="ar"?"(تجريبي) تمّ التسجيل":"(Demo) Registered"));
}


document.addEventListener("DOMContentLoaded", ()=>{
  translateDOM(savedLang);
  setDark(savedTheme==="dark");

  if (btnEn) btnEn.addEventListener("click", ()=>translateDOM("en"));
  if (btnAr) btnAr.addEventListener("click", ()=>translateDOM("ar"));

  if (darkSwitch){
    darkSwitch.checked = (savedTheme==="dark");
    darkSwitch.addEventListener("change", ()=> setDark(darkSwitch.checked));
  }

  const s = document.getElementById("searchInput");
  const p = document.getElementById("filterProvince");
  const c = document.getElementById("filterCategory");
  const r = document.getElementById("filterReset");
  if(s) s.addEventListener("input", runFilters);
  if(p) p.addEventListener("change", runFilters);
  if(c) c.addEventListener("change", runFilters);
  if(r) r.addEventListener("click", ()=>{
    if(s) s.value="";
    if(p) p.value="all";
    if(c) c.value="all";
    runFilters();
  });
  runFilters();

  setupContact();
  setupEventButtons();
});
