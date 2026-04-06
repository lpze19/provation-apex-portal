// ===== WORKFLOW DATA =====
const workflowSteps = [
  { id: 'clinic', icon: '\u{1F3E5}', label: 'Clinic', stepNum: 'Step 01', title: 'Clinic Arrival', body: 'The patient arrives at the clinic. This is the entry point of the Provation Apex workflow. The clinical team initiates the pre-registration process, confirming patient identity and reason for visit.', tags: ['Front Desk', 'Patient Arrival', 'Check-In'], milestone: null },
  { id: 'prereg', icon: '\u{1F4DD}', label: 'Pre-Reg', stepNum: 'Step 02', title: 'Pre-Registration', body: 'Patient demographics, insurance information, and procedure details are pre-registered in the system. ADT messages are generated via HL7 interface, automatically populating Provation Apex with patient data \u2014 eliminating manual entry.', tags: ['ADT Interface', 'HL7', 'Demographics', 'Insurance'], milestone: null },
  { id: 'preop', icon: '\u{1FA7A}', label: 'Pre-Op', stepNum: 'Step 03', title: 'Pre-Operative Assessment', body: 'The clinical team conducts the pre-operative assessment. Vital signs, allergies, medications, and consent documentation are reviewed and confirmed.', tags: ['Clinical Assessment', 'Consent', 'Vitals', 'Nursing'], milestone: null },
  { id: 'reg', icon: '\u2705', label: 'Registration', stepNum: 'Step 04', title: 'Full Registration', body: 'The patient is formally registered for the procedure. The encounter is confirmed in the system, linking the patient to the scheduled procedure.', tags: ['SIU Message', 'Encounter', 'Scheduling'], milestone: null },
  { id: 'room', icon: '\u{1F6AA}', label: 'Placed in Room', stepNum: 'Step 05', title: 'Patient Placed in Room', body: 'The patient is physically placed in the procedure room. The room assignment is recorded in the system.', tags: ['Room Assignment', 'Procedure Room', 'Clinical Staff'], milestone: null },
  { id: 'case-open', icon: '\u{1F4BB}', label: 'Case Opened', stepNum: 'Step 06', title: 'Case Opened in Provation Apex', body: 'A case is formally opened in Provation Apex. This is the critical system activation point \u2014 the case record is created, linking the patient encounter to the documentation workflow.', tags: ['Case Creation', 'Provation Apex', 'Documentation Start'], milestone: '\u{1F511} System Activation Point' },
  { id: 'bed', icon: '\u{1F6CF}\uFE0F', label: 'Bed Assigned', stepNum: 'Step 07', title: 'Bed Assignment', body: 'A specific bed or procedure station is assigned to the patient within the case record.', tags: ['Bed Management', 'Location Tracking'], milestone: null },
  { id: 'physician', icon: '\u{1F468}\u200D\u2695\uFE0F', label: 'Physician Assigned', stepNum: 'Step 08', title: 'Physician Assignment', body: 'The performing physician is assigned to the case in Provation Apex. This assignment establishes accountability and enables physician-specific documentation templates.', tags: ['Physician', 'Assignment', 'Accountability'], milestone: null },
  { id: 'scope', icon: '\u{1F52C}', label: 'Scope Selected', stepNum: 'Step 09', title: 'Scope Selection', body: 'The specific endoscope to be used is selected and assigned to the case. Provation Apex supports Olympus CV-180/190 and Pentax IMAGINA systems.', tags: ['Olympus', 'Pentax', 'Equipment', 'Scope Tracking'], milestone: '\u{1F4F8} Image Capture Now Enabled' },
  { id: 'scope-in', icon: '\u23F1\uFE0F', label: 'Scope In', stepNum: 'Step 10', title: 'Scope In \u2014 Procedure Begins', body: 'The scope insertion time is recorded, marking the official start of the procedure. This timestamp is clinically and legally significant.', tags: ['Timestamp', 'Procedure Start', 'Image Capture', 'Real-Time'], milestone: '\u23F1\uFE0F Procedure Timer Started' },
  { id: 'section1', icon: '\u{1F4CD}', label: 'Next Section', stepNum: 'Step 11', title: 'Anatomical Section Documentation', body: 'As the scope advances through anatomical sections, the physician documents findings at each section using structured templates.', tags: ['Findings', 'Anatomy', 'Structured Documentation', 'Images'], milestone: null },
  { id: 'section2', icon: '\u{1F4CD}', label: 'Next Section', stepNum: 'Step 12', title: 'Continued Section Documentation', body: 'Documentation continues as the procedure progresses through additional anatomical sections.', tags: ['Continued Documentation', 'Findings', 'Measurements'], milestone: null },
  { id: 'scope-out', icon: '\u{1F51A}', label: 'Scope Out', stepNum: 'Step 13', title: 'Scope Out \u2014 Procedure Ends', body: 'The scope is withdrawn and the scope-out time is recorded. This marks the official end of the procedure.', tags: ['Procedure End', 'Timestamp', 'Duration Calculated'], milestone: '\u{1F51A} Procedure Complete' },
  { id: 'notes', icon: '\u{1F4CB}', label: 'Case Notes', stepNum: 'Step 14', title: 'Case Notes & Final Documentation', body: 'The physician and clinical staff complete all case notes, including procedure findings, impressions, recommendations, and any complications.', tags: ['Case Notes', 'Findings', 'Charges', 'Specimen Labels', 'Billing'], milestone: null },
  { id: 'sign', icon: '\u270D\uFE0F', label: 'Physician Signs', stepNum: 'Step 15', title: 'Physician Electronic Signature', body: 'The physician reviews the complete case documentation and applies their electronic signature. The document is locked and cannot be altered.', tags: ['E-Signature', 'Legal Finalization', 'Physician', 'Locked Record'], milestone: '\u270D\uFE0F Document Legally Finalized' },
  { id: 'chart', icon: '\u{1F4E4}', label: 'Sent to Chart', stepNum: 'Step 16', title: 'Automatic Chart Distribution', body: 'Upon physician signature, Provation Apex automatically transmits the completed procedure document to the patient\'s EMR chart.', tags: ['EMR', 'Auto-Distribution', 'HL7', 'Chart Complete', 'Billing'], milestone: '\u{1F3AF} Documentation Loop Complete' }
];

// ===== RESOURCES DATA =====
const resources = [
  { category: 'Clinical & Workflow', icon: '\u{1F3E5}', items: [
    { name: 'ADT Interface Specifications', type: 'PDF', file: '../../ADT Interface Specs.pdf' },
    { name: 'SIU Scheduling Message Spec', type: 'PDF', file: '../../SIU Scheduling Message Spec APEX.pdf' },
    { name: 'ORU Apex Procedure Documentation', type: 'PDF', file: '../../ORU Apex Procedure Documentation.pdf' },
    { name: 'Provation Workflow Overview', type: 'TXT', file: '../../Provation work flow.txt' },
    { name: 'Specimen Collection Workflow', type: 'DOC', file: '../../Provation apex specimen collection workflow.docx' },
  ]},
  { category: 'Architecture & Technical', icon: '\u2699\uFE0F', items: [
    { name: 'Apex Architecture Rev3', type: 'PDF', file: '../../Apex Architecture Rev3.pdf' },
    { name: 'Apex Technical Specifications v15', type: 'PDF', file: '../../Apex TechSpecsV15.pdf' },
    { name: 'Azure AD Setup QRG v3', type: 'PDF', file: '../../Azure AD Setup QRG v3.2021.pdf' },
    { name: 'Offline Mode Documentation', type: 'PDF', file: '../../Offline Mode.pdf' },
    { name: 'MD-Reports to Apex Data Migration', type: 'PDF', file: '../../MD-Reports to Provation Apex Data Migration.pdf' },
  ]},
  { category: 'Security & Compliance', icon: '\u{1F512}', items: [
    { name: 'Cybersecurity Fact Sheet', type: 'PDF', file: '../../Provation Apex Cybersecurity Fast Sheet.pdf' },
    { name: 'DHR Provider Documentation Memo', type: 'DOC', file: '../../DHR-HEALTH-MEMO-Provider documentation.docx' },
    { name: 'Demarcation Document', type: 'DOC', file: '../../Demarcation.docx' },
    { name: 'Provation Errors Log', type: 'DOC', file: '../../Provation errors.docx' },
  ]},
  { category: 'Go-Live & Readiness', icon: '\u{1F680}', items: [
    { name: 'Change Management Go-Live', type: 'XLS', file: '../../Change Management Go-Live.xlsx' },
    { name: 'Provation Go-Live Workbook', type: 'XLS', file: '../../Provation Go Live Workbook.xlsx' },
    { name: 'Ready for PV Apex Checklist', type: 'PDF', file: '../../Ready for PV Apex Checklist.pdf' },
    { name: 'Go-Live Week Documentation', type: 'DOC', file: '../../Provation Go Live Week.docx' },
    { name: 'Hardware Testing Phase 1', type: 'PDF', file: '../../Provation Apex Customer Hardware Testing - Phase 1.pdf' },
    { name: 'Hardware Testing Phase 2', type: 'PDF', file: '../../Provation Apex Customer Hardware Testing - Phase 2.pdf' },
  ]},
  { category: 'SOPs by Role', icon: '\u{1F4D6}', items: [
    { name: 'SOP \u2014 End User', type: 'DOC', file: '../../_SOP End user Example.docx' },
    { name: 'SOP \u2014 Administrator', type: 'DOC', file: '../../_SOP Administrator Example.docx' },
    { name: 'SOP \u2014 Helpdesk', type: 'DOC', file: '../../_SOP Helpdesk Example.docx' },
    { name: 'Welcome to Provation Apex', type: 'DOC', file: '../../DHRXT Welcome to Your Provation Apex.docx' },
    { name: 'Apex Login & Training Guide', type: 'PDF', file: '../../Apex log in and training DHRXT01.pdf' },
    { name: 'Apex Support Flyer', type: 'PDF', file: '../../Apex Support Flyer DHRXT01.pdf' },
  ]},
  { category: 'Equipment & Infrastructure', icon: '\u{1F527}', items: [
    { name: 'Olympus CV-180 Cabling Diagram', type: 'PDF', file: '../../Olympus CV-180 Cabling Diagram.pdf' },
    { name: 'Olympus CV-190 Cabling Diagram', type: 'PDF', file: '../../Olympus CV-190 Cabling Diagram.pdf' },
    { name: 'Pentax IMAGINA Wiring Diagrams', type: 'PDF', file: '../../Pentax IMAGINA Wiring Diagrams.pdf' },
    { name: 'Current Provation Workstations', type: 'XLS', file: '../../Current Provation workstations.xlsx' },
    { name: 'Transfer Images from Olympus', type: 'DOC', file: '../../Transfer images directly from Olympus.docx' },
  ]},
];

// ===== BUILD WORKFLOW =====
function buildWorkflow() {
  const track = document.getElementById('workflowTrack');
  workflowSteps.forEach((step, i) => {
    const stepEl = document.createElement('div');
    stepEl.className = 'wf-step' + (step.milestone ? ' milestone' : '');
    stepEl.dataset.id = step.id;
    stepEl.style.animationDelay = `${i * 60}ms`;
    stepEl.innerHTML = `
      <div class="wf-node">
        <div class="wf-circle">${step.icon}</div>
        <div class="wf-label">${step.label}</div>
      </div>
      ${i < workflowSteps.length - 1 ? '<div class="wf-arrow">→</div>' : ''}
    `;
    stepEl.addEventListener('click', () => showDetail(step, stepEl));
    track.appendChild(stepEl);
  });
}

// ===== SHOW DETAIL =====
function showDetail(step, el) {
  document.querySelectorAll('.wf-step').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  const detail = document.getElementById('workflowDetail');
  detail.classList.add('panel-flash');
  setTimeout(() => detail.classList.remove('panel-flash'), 400);
  const tagsHtml = step.tags.map(t => `<span class="detail-tag">${t}</span>`).join('');
  const milestoneHtml = step.milestone ? `<div class="detail-milestone">${step.milestone}</div>` : '';
  detail.innerHTML = `
    <div class="detail-content visible">
      <div class="detail-header">
        <div class="detail-icon">${step.icon}</div>
        <div>
          <div class="detail-step-num">${step.stepNum} of ${workflowSteps.length}</div>
          <div class="detail-title">${step.title}</div>
        </div>
      </div>
      <div class="detail-body">${step.body}</div>
      ${milestoneHtml}
      <div class="detail-tags">${tagsHtml}</div>
    </div>
  `;
}

// ===== BUILD RESOURCES =====
function buildResources() {
  const grid = document.getElementById('resourcesGrid');
  const typeIcon = { PDF: "📄", DOC: "📝", XLS: "📊", TXT: "📃", VSD: "📐" };
  resources.forEach(cat => {
    const itemsHtml = cat.items.map(item => `
      <a class="res-item" href="${item.file}" title="Open ${item.name}">
        <span class="res-item-icon">${typeIcon[item.type] || "📄"}</span>
        <span class="res-item-name">${item.name}</span>
        <span class="res-item-type">${item.type}</span>
        <span class="res-item-open">↗</span>
      </a>
    `).join('');
    const card = document.createElement('div');
    card.className = 'res-category reveal';
    card.innerHTML = `
      <div class="res-cat-header">
        <span class="res-cat-icon">${cat.icon}</span>
        <span class="res-cat-title">${cat.category}</span>
      </div>
      <div class="res-items">${itemsHtml}</div>
    `;
    grid.appendChild(card);
  });
}


// ===== REEL NAV =====
function initSideNav() {
  const reelNav = document.getElementById('reelNav');
  const track = document.getElementById('reelTrack');
  const labelSection = document.getElementById('reelLabelSection');
  const labelTitle = document.getElementById('reelLabelTitle');
  const counterEl = document.getElementById('reelCounter');
  const btnUp = document.getElementById('reelUp');
  const btnDown = document.getElementById('reelDown');
  const hint = document.getElementById('reelHint');

  const items = [
    {id:'overview',label:'Overview',parent:null,isPrimary:true,group:0},
    {id:'clinical-workflow',label:'Clinical Workflow',parent:null,isPrimary:true,group:1},
    {id:'cw-admission',label:'Admission',parent:'clinical-workflow',group:1},
    {id:'cw-scheduling',label:'Scheduling',parent:'clinical-workflow',group:1},
    {id:'cw-orders',label:'Orders',parent:'clinical-workflow',group:1},
    {id:'cw-charting',label:'Charting',parent:'clinical-workflow',group:1},
    {id:'cw-physician-note',label:'Physician Note',parent:'clinical-workflow',group:1},
    {id:'cw-charges',label:'Charges',parent:'clinical-workflow',group:1},
    {id:'cw-transfer',label:'Transfer',parent:'clinical-workflow',group:1},
    {id:'cw-discharge',label:'Discharge',parent:'clinical-workflow',group:1},
    {id:'contacts',label:'Contacts',parent:null,isPrimary:true,group:2},
    {id:'ct-departments',label:'Departments',parent:'contacts',group:2},
    {id:'ct-leadership',label:'Leadership',parent:'contacts',group:2},
    {id:'ct-powerusers',label:'Power Users',parent:'contacts',group:2},
    {id:'ct-support',label:'Support',parent:'contacts',group:2},
    {id:'functional-specs',label:'Functional Specs',parent:null,isPrimary:true,group:3},
    {id:'fs-purpose',label:'Purpose',parent:'functional-specs',group:3},
    {id:'fs-features',label:'Features',parent:'functional-specs',group:3},
    {id:'fs-appworkflow',label:'App Workflow',parent:'functional-specs',group:3},
    {id:'fs-testing',label:'Testing & SOPs',parent:'functional-specs',group:3},
    {id:'technical-specs',label:'Technical Specs',parent:null,isPrimary:true,group:4},
    {id:'ts-infrastructure',label:'Infrastructure',parent:'technical-specs',group:4},
    {id:'ts-interfaces',label:'Interfaces',parent:'technical-specs',group:4},
    {id:'ts-security',label:'Security',parent:'technical-specs',group:4},
    {id:'ts-auth',label:'Authentication',parent:'technical-specs',group:4},
    {id:'architecture',label:'Architecture',parent:null,isPrimary:true,group:5},
    {id:'resources',label:'Resources',parent:null,isPrimary:true,group:6},
  ];
  const N = items.length;
  const ITEM_H = 20; // px per item in the vertical list
  const VISIBLE = 11; // items visible at once (odd for center)
  let aIdx = 0;
  let isNav = false;
  let firstInt = true;
  const lightS = new Set(['overview','cw-admission','cw-orders','cw-physician-note','cw-transfer','ct-leadership','ct-powerusers','fs-purpose','fs-appworkflow','ts-infrastructure','ts-security','ts-auth','architecture','resources']);

  // Build DOM items
  const els = items.map((item, i) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'reel-item' + (item.isPrimary ? ' primary' : '');
    wrapper.dataset.idx = i;
    const inner = document.createElement('div');
    inner.className = 'reel-item-inner';
    inner.innerHTML = '<div class="reel-tick"></div><span class="reel-item-label">' + item.label + '</span>';
    wrapper.appendChild(inner);
    track.appendChild(wrapper);
    // Click handler — real DOM click, always works
    inner.addEventListener('click', () => goTo(i));
    return wrapper;
  });

  function layout() {
    const centerY = 280; // half of 560
    els.forEach((el, i) => {
      const offset = i - aIdx;
      const y = centerY + offset * ITEM_H;
      const absOff = Math.abs(offset);
      const halfVis = Math.floor(VISIBLE / 2);
      el.style.position = 'absolute';
      el.style.left = '14px';
      el.style.top = y + 'px';
      el.style.transition = 'top 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.3s';
      // Visibility
      el.classList.remove('visible', 'dimmed', 'active');
      if (absOff <= halfVis) {
        el.classList.add('visible');
        if (absOff > halfVis - 2) el.classList.add('dimmed');
      }
      if (i === aIdx) el.classList.add('active');
    });
  }

  function updateReadout() {
    const ac = items[aIdx];
    const par = ac.parent ? items.find(x => x.id === ac.parent) : null;
    const tt = ac.label;
    if (labelTitle.textContent !== tt) {
      labelSection.textContent = par ? par.label : '';
      labelTitle.textContent = tt;
      counterEl.textContent = (aIdx + 1) + ' / ' + N;
      labelTitle.classList.remove('tick');
      void labelTitle.offsetWidth;
      labelTitle.classList.add('tick');
    }
  }

  function updateTheme() {
    reelNav.classList.toggle('on-light', lightS.has(items[aIdx].id));
  }

  function goTo(idx, scroll) {
    if (scroll === undefined) scroll = true;
    idx = Math.max(0, Math.min(N - 1, idx));
    if (idx === aIdx) return;
    if (firstInt) { firstInt = false; hint.classList.add('hidden'); }
    aIdx = idx;
    layout();
    updateReadout();
    updateTheme();
    if (scroll) {
      var t = document.getElementById(items[idx].id);
      if (t) {
        isNav = true;
        if (document.startViewTransition) {
          document.startViewTransition(function() { t.scrollIntoView({ behavior: 'instant', block: 'start' }); });
        } else {
          t.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setTimeout(function() { isNav = false; }, 800);
      }
    }
  }

  // Scroll tracking
  function onScroll() {
    if (isNav) return;
    var b = 0, bd = Infinity;
    items.forEach(function(it, i) {
      var el = document.getElementById(it.id);
      if (!el) return;
      var d = Math.abs(el.getBoundingClientRect().top - window.innerHeight * 0.3);
      if (d < bd) { bd = d; b = i; }
    });
    if (b !== aIdx) {
      aIdx = b;
      layout();
      updateReadout();
      updateTheme();
    }
  }

  // Arrow buttons — real DOM, always work
  btnUp.addEventListener('click', function(e) { e.stopPropagation(); goTo(aIdx - 1); });
  btnDown.addEventListener('click', function(e) { e.stopPropagation(); goTo(aIdx + 1); });

  // Mouse wheel on the nav area
  reelNav.addEventListener('wheel', function(e) {
    e.preventDefault();
    goTo(aIdx + (e.deltaY > 0 ? 1 : -1));
  }, { passive: false });

  // Keyboard
  document.addEventListener('keydown', function(e) {
    if (document.getElementById('cmdOverlay').classList.contains('open')) return;
    if (e.key === 'ArrowUp') { e.preventDefault(); goTo(aIdx - 1); }
    if (e.key === 'ArrowDown') { e.preventDefault(); goTo(aIdx + 1); }
  });

  window.addEventListener('scroll', onScroll, { passive: true });

  // Init
  layout();
  updateReadout();
  updateTheme();
  onScroll();
}


// ===== NAVBAR SCROLL =====
function initNavScroll() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 20
      ? 'rgba(10,22,40,0.98)' : 'rgba(10,22,40,0.95)';
  }, { passive: true });
}

// ===== SCROLL PROGRESS BAR =====
function initScrollProgress() {
  const bar = document.getElementById('scrollBar');
  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (window.scrollY / max * 100) + '%';
  }, { passive: true });
}

// ===== CINEMATIC SCROLL REVEAL =====
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const siblings = entry.target.parentElement.querySelectorAll('.reveal');
        let delay = 0;
        siblings.forEach((sib, idx) => { if (sib === entry.target) delay = idx * 80; });
        setTimeout(() => entry.target.classList.add('in-view'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===== PARALLAX =====
function initParallax() {
  const hero = document.querySelector('.hero');
  const grid = hero.querySelector('.hero-bg-grid');
  const orb1 = hero.querySelector('.hero-orb-1');
  const orb2 = hero.querySelector('.hero-orb-2');
  const sections = document.querySelectorAll('.parallax-section');
  sections.forEach(sec => {
    const layer = document.createElement('div');
    layer.className = 'depth-layer';
    layer.style.cssText = 'width:600px;height:600px;top:-100px;left:-100px;';
    sec.style.position = 'relative';
    sec.insertBefore(layer, sec.firstChild);
  });
  function onScroll() {
    const sy = window.scrollY;
    if (grid) grid.style.transform = 'translateY(' + (sy * 0.25) + 'px)';
    if (orb1) orb1.style.transform = 'translateY(' + (sy * 0.15) + 'px)';
    if (orb2) orb2.style.transform = 'translateY(' + (sy * -0.1) + 'px)';
    sections.forEach(sec => {
      const layer = sec.querySelector('.depth-layer');
      if (!layer) return;
      const rect = sec.getBoundingClientRect();
      const offset = (rect.top / window.innerHeight) * 40;
      layer.style.transform = 'translateY(' + offset + 'px) scale(' + (1 + Math.abs(offset) * 0.002) + ')';
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ===== SMOOTH ANCHOR NAV =====
function initSmoothNav() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      if (document.startViewTransition) {
        document.startViewTransition(() => { target.scrollIntoView({ behavior: 'instant', block: 'start' }); });
      } else {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ===== COMMAND PALETTE =====
function initCommandPalette() {
  const overlay = document.getElementById('cmdOverlay');
  const input = document.getElementById('cmdInput');
  const results = document.getElementById('cmdResults');
  const trigger = document.getElementById('cmdTrigger');
  const index = [
    { icon: '🏥', label: 'Overview', section: 'Section', href: '#overview' },
    { icon: '🔄', label: 'Interactive Workflow', section: 'Section', href: '#workflow' },
    { icon: '📋', label: 'Clinical Workflow Documentation', section: 'Section 1', href: '#clinical-workflow' },
    { icon: '🏥', label: 'Admission / Registration', section: 'Clinical Workflow', href: '#cw-admission' },
    { icon: '📅', label: 'Scheduling', section: 'Clinical Workflow', href: '#cw-scheduling' },
    { icon: '📋', label: 'Orders', section: 'Clinical Workflow', href: '#cw-orders' },
    { icon: '✏️', label: 'Charting / Documentation', section: 'Clinical Workflow', href: '#cw-charting' },
    { icon: '👨‍⚕️', label: 'Physician Note', section: 'Clinical Workflow', href: '#cw-physician-note' },
    { icon: '💰', label: 'Charges', section: 'Clinical Workflow', href: '#cw-charges' },
    { icon: '🔄', label: 'Transfer', section: 'Clinical Workflow', href: '#cw-transfer' },
    { icon: '🚪', label: 'Discharge', section: 'Clinical Workflow', href: '#cw-discharge' },
    { icon: '👥', label: 'Contacts', section: 'Section 2', href: '#contacts' },
    { icon: '🏢', label: 'Departments & Locations', section: 'Contacts', href: '#ct-departments' },
    { icon: '👔', label: 'Decision Makers & Leadership', section: 'Contacts', href: '#ct-leadership' },
    { icon: '⚡', label: 'Power Users & Validation', section: 'Contacts', href: '#ct-powerusers' },
    { icon: '🛟', label: 'Support Tiers', section: 'Contacts', href: '#ct-support' },
    { icon: '⚙️', label: 'Functional Specifications', section: 'Section 3', href: '#functional-specs' },
    { icon: '🎯', label: 'Application Purpose', section: 'Functional Specs', href: '#fs-purpose' },
    { icon: '✨', label: 'Features', section: 'Functional Specs', href: '#fs-features' },
    { icon: '🔄', label: 'Application Workflow', section: 'Functional Specs', href: '#fs-appworkflow' },
    { icon: '🧪', label: 'Testing, SOPs & KBAs', section: 'Functional Specs', href: '#fs-testing' },
    { icon: '🖥️', label: 'Technical Specifications', section: 'Section 4', href: '#technical-specs' },
    { icon: '🖥️', label: 'Infrastructure & Servers', section: 'Technical Specs', href: '#ts-infrastructure' },
    { icon: '🔌', label: 'Interfaces & HL7', section: 'Technical Specs', href: '#ts-interfaces' },
    { icon: '🔒', label: 'Security & Network Config', section: 'Technical Specs', href: '#ts-security' },
    { icon: '🔑', label: 'Authentication — Azure AD', section: 'Technical Specs', href: '#ts-auth' },
    { icon: '⚙️', label: 'System Architecture', section: 'Section', href: '#architecture' },
    { icon: '📚', label: 'Resources & References', section: 'Section', href: '#resources' },
    ...workflowSteps.map(s => ({ icon: s.icon, label: s.title, section: 'Workflow Step', href: '#workflow', stepId: s.id })),
    ...resources.flatMap(cat => cat.items.map(item => ({ icon: '📄', label: item.name, section: cat.category, href: item.file, isFile: true }))),
  ];
  let selected = 0;
  function open() { overlay.classList.add('open'); input.value = ''; input.focus(); render(''); }
  function close() { overlay.classList.remove('open'); input.blur(); }
  function render(query) {
    const q = query.toLowerCase().trim();
    const filtered = q ? index.filter(item => item.label.toLowerCase().includes(q) || item.section.toLowerCase().includes(q)) : index.slice(0, 8);
    selected = 0;
    if (!filtered.length) { results.innerHTML = '<div class="cmd-empty">No results for "' + query + '"</div>'; return; }
    results.innerHTML = filtered.slice(0, 10).map((item, i) =>
      '<div class="cmd-result-item' + (i === 0 ? ' selected' : '') + '" data-idx="' + i + '" data-href="' + item.href + '" data-step="' + (item.stepId || '') + '">' +
      '<span class="cmd-result-icon">' + item.icon + '</span><span class="cmd-result-label">' + item.label + '</span><span class="cmd-result-section">' + item.section + '</span></div>'
    ).join('');
    results.querySelectorAll('.cmd-result-item').forEach(el => {
      el.addEventListener('mouseenter', () => { results.querySelectorAll('.cmd-result-item').forEach(e => e.classList.remove('selected')); el.classList.add('selected'); selected = parseInt(el.dataset.idx); });
      el.addEventListener('click', () => navigate(el));
    });
  }
  function navigate(el) {
    const href = el.dataset.href, stepId = el.dataset.step; close();
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        if (document.startViewTransition) { document.startViewTransition(() => { target.scrollIntoView({ behavior: 'instant', block: 'start' }); }); }
        else { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        if (stepId) { setTimeout(() => { const s = document.querySelector('.wf-step[data-id="' + stepId + '"]'); if (s) s.click(); }, 600); }
      }
    } else { window.location.href = href; }
  }
  input.addEventListener('input', () => render(input.value));
  input.addEventListener('keydown', e => {
    const items = results.querySelectorAll('.cmd-result-item');
    if (e.key === 'ArrowDown') { e.preventDefault(); selected = Math.min(selected + 1, items.length - 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); selected = Math.max(selected - 1, 0); }
    else if (e.key === 'Enter') { if (items[selected]) navigate(items[selected]); return; }
    else if (e.key === 'Escape') { close(); return; }
    items.forEach((el, i) => el.classList.toggle('selected', i === selected));
    if (items[selected]) items[selected].scrollIntoView({ block: 'nearest' });
  });
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  trigger.addEventListener('click', open);
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); overlay.classList.contains('open') ? close() : open(); }
    if (e.key === 'Escape' && overlay.classList.contains('open')) close();
  });
}

// ===== ANIMATED COUNTER =====
function animateCounter(el, target, suffix) {
  suffix = suffix || '';
  var start = 0, duration = 1200;
  function step(ts) {
    if (!start) start = ts;
    var p = Math.min((ts - start) / duration, 1);
    el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
function initCounters() {
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        var el = e.target;
        if (el.dataset.count) animateCounter(el, parseInt(el.dataset.count), el.dataset.suffix || '');
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(function(el) { obs.observe(el); });
}

// ===== ARCH NODE INTERACTION =====
function initArchInteraction() {
  document.querySelectorAll('.arch-node-box').forEach(function(box) {
    box.addEventListener('mouseenter', function() {
      box.classList.add('node-active');
      document.querySelector('.arch-core').style.transform = 'scale(1.06)';
    });
    box.addEventListener('mouseleave', function() {
      box.classList.remove('node-active');
      document.querySelector('.arch-core').style.transform = '';
    });
  });
}

// ===== WORKFLOW PULSE =====
function initWorkflowPulse() {
  setTimeout(function() {
    var first = document.querySelector('.wf-step');
    if (first) first.click();
  }, 800);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
  buildWorkflow();
  buildResources();
  initNavScroll();
  initScrollProgress();
  initSideNav();
  initReveal();
  initParallax();
  initSmoothNav();
  initCommandPalette();
  initCounters();
  initWorkflowPulse();
  initArchInteraction();
});
