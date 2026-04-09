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
    { name: 'Specimen Collection Workflow', type: 'DOC', file: '../../Provation apex specimen collection work flow.docx' },
  ]},
  { category: 'Architecture & Technical', icon: '\u2699\uFE0F', items: [
    { name: 'Apex Architecture Rev3', type: 'PDF', file: '../../Apex Architecture Rev3.pdf' },
    { name: 'Apex Technical Specifications v15', type: 'PDF', file: '../../ApexTechSpecv15.pdf' },
    { name: 'Azure AD Setup QRG v3', type: 'PDF', file: '../../Azure AD Setup QRG v3.2021.pdf' },
    { name: 'Offline Mode Documentation', type: 'PDF', file: '../../Offline Mode.pdf' },
    { name: 'MD-Reports to Apex Data Migration', type: 'PDF', file: '../../MD-Reports to Provation Apex Data Migration Infographic.pdf' },
  ]},
  { category: 'Security & Compliance', icon: '\u{1F512}', items: [
    { name: 'Cybersecurity Fact Sheet', type: 'PDF', file: '../../Provation Apex Cybersecurity Fact Sheet.pdf' },
    { name: 'DHR Provider Documentation Memo', type: 'DOC', file: '../../DHR-HEALTH-MEMO-Provider documentation.docx' },
    { name: 'Demarcation Document', type: 'DOC', file: '../../Demarcation.docx' },
    { name: 'Provation Errors Log', type: 'DOC', file: '../../Provation errors.docx' },
  ]},
  { category: 'Go-Live & Readiness', icon: '\u{1F680}', items: [
    { name: 'Change Management Go-Live', type: 'XLS', file: '../../Change Management Go-Live.xlsx' },
    { name: 'Provation Go-Live Workbook', type: 'XLS', file: '../../Provation Go Live Workbook.xlsx' },
    { name: 'Ready for PV Apex Checklist', type: 'PDF', file: '../../Ready for PV Apex Checklist.pdf' },
    { name: 'Go-Live Week Documentation', type: 'DOC', file: '../../Provation Go Live Week.docx' },
    { name: 'Hardware Testing \u2014 Olympus 180', type: 'PDF', file: '../../Provation Apex Customer Hardware Testing  - Olympus 180.pdf' },
    { name: 'Hardware Testing \u2014 Olympus 190', type: 'PDF', file: '../../Provation Apex Customer Hardware Testing  - Olympus 190.pdf' },
    { name: 'Hardware Testing \u2014 Pentax EPK-i5010', type: 'PDF', file: '../../Provation Apex Customer Hardware Testing  - Pentax EPK-i5010.pdf' },
    { name: 'Hardware Testing \u2014 Pentax EPK-i7010', type: 'PDF', file: '../../Provation Apex Customer Hardware Testing  - Pentax EPK-i7010.pdf' },
  ]},
  { category: 'SOPs & Training', icon: '\u{1F4D6}', items: [
    { name: 'End User Login Support', type: 'PDF', file: '../../SOPs and KBs/Provation Apex End User Login Support.pdf' },
    { name: 'Logging into Provation Apex', type: 'PDF', file: '../../SOPs and KBs/Logging into Provation Apex.pdf' },
    { name: 'Endoscopy Apex Work Flow', type: 'PDF', file: '../../SOPs and KBs/Endoscopy Apex Work Flow.pdf' },
    { name: 'Welcome to Provation Apex', type: 'DOC', file: '../../DHRTX Welcome to Your Provation Apex Future.docx' },
    { name: 'Apex Login & Training Guide', type: 'PDF', file: '../../Apex log in and training DHRTX01.pdf' },
    { name: 'Apex Support Flyer', type: 'PDF', file: '../../Apex Support Flyer DHRTX01.pdf' },
  ]},
  { category: 'Equipment & Infrastructure', icon: '\u{1F527}', items: [
    { name: 'Olympus CV-180 Cabling Diagram', type: 'PDF', file: '../../Olympus CV-180 Cabiling Diagram.pdf' },
    { name: 'Olympus CV-190 Cabling Diagram', type: 'PDF', file: '../../Olympus CV-190 Cabiling Diagram.pdf' },
    { name: 'Pentax IMAGINA Wiring Diagrams', type: 'PDF', file: '../../Pentax IMAGINA Wiring Diagrams.pdf' },
    { name: 'Current Provation Workstations', type: 'XLS', file: '../../Current Provation workstations.xlsx' },
    { name: 'Transfer Images from Olympus', type: 'DOC', file: '../../Transfer images directly from Olympus (1).docx' },
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
      <a class="res-item" href="${item.file}" target="_blank" rel="noopener noreferrer" title="Open ${item.name}">
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


// ===== SPLIT NAV — left (sections) + right (subsections) =====
function initSideNav() {
  var leftNav = document.getElementById('leftNav');
  var rightNav = document.getElementById('rightNav');
  var rightHeader = document.getElementById('rightNavHeader');
  var rightItems = document.getElementById('rightNavItems');
  var leftSections = document.getElementById('leftNavSections');
  var btnUp = document.getElementById('sectionUp');
  var btnDown = document.getElementById('sectionDown');

  var NAV_MODEL = [
    { id: 'clinical-workflow', label: 'Clinical Workflow', items: [
      { id: 'cw-admission', label: 'Admission' },
      { id: 'cw-scheduling', label: 'Scheduling' },
      { id: 'cw-orders', label: 'Orders' },
      { id: 'cw-charting', label: 'Charting' },
      { id: 'cw-physician-note', label: 'Physician Note' },
      { id: 'cw-charges', label: 'Charges' },
      { id: 'cw-transfer', label: 'Transfer' },
      { id: 'cw-discharge', label: 'Discharge' }
    ]},
    { id: 'contacts', label: 'Contacts', items: [
      { id: 'ct-departments', label: 'Departments' },
      { id: 'ct-leadership', label: 'Decision Makers' },
      { id: 'ct-powerusers', label: 'Power Users' },
      { id: 'ct-support', label: 'Support' }
    ]},
    { id: 'functional-specs', label: 'Functional Specs', items: [
      { id: 'fs-purpose', label: 'Purpose' },
      { id: 'fs-features', label: 'Features' },
      { id: 'fs-appworkflow', label: 'App Workflow' },
      { id: 'fs-testing', label: 'Testing & SOPs' }
    ]},
    { id: 'technical-specs', label: 'Technical Specs', items: [
      { id: 'ts-infrastructure', label: 'Infrastructure' },
      { id: 'ts-interfaces', label: 'Interfaces' },
      { id: 'ts-security', label: 'Security' },
      { id: 'ts-auth', label: 'Authentication' }
    ]}
  ];

  var lightSections = new Set([
    'cw-admission','cw-orders','cw-physician-note','cw-transfer',
    'ct-departments','ct-powerusers',
    'fs-purpose','fs-appworkflow',
    'ts-infrastructure','ts-security','ts-auth'
  ]);

  var sectionIdx = 0;
  var subIdx = -1; // active subsection (-1 = none)
  var leftDots = [];

  // ---- Build left nav dots ----
  NAV_MODEL.forEach(function(sec, i) {
    var dot = document.createElement('button');
    dot.className = 'left-nav-item' + (i === 0 ? ' active' : '');
    dot.setAttribute('data-label', sec.label);
    dot.setAttribute('aria-label', sec.label);
    dot.addEventListener('click', function() { goToSection(i); });
    leftSections.appendChild(dot);
    leftDots.push(dot);
  });

  // ---- Build right nav for current section ----
  function buildRightNav() {
    var sec = NAV_MODEL[sectionIdx];
    rightHeader.textContent = sec.label;
    rightItems.innerHTML = '';
    sec.items.forEach(function(item, i) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.className = 'right-nav-link';
      a.innerHTML = '<span class="right-nav-link-label">' + item.label + '</span>' +
                    '<span class="right-nav-link-tick"></span>';
      a.addEventListener('click', function(e) {
        e.preventDefault();
        subIdx = i;
        updateRightActive();
        var target = document.getElementById(item.id);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      li.appendChild(a);
      rightItems.appendChild(li);
    });
    subIdx = -1;
    updateRightActive();
  }

  function updateRightActive() {
    var links = rightItems.querySelectorAll('.right-nav-link');
    links.forEach(function(link, i) {
      link.classList.toggle('active', i === subIdx);
    });
  }

  function updateLeftActive() {
    leftDots.forEach(function(dot, i) {
      dot.classList.toggle('active', i === sectionIdx);
    });
  }

  function updateTheme() {
    var sec = NAV_MODEL[sectionIdx];
    var id = (subIdx >= 0 && sec.items[subIdx]) ? sec.items[subIdx].id : sec.id;
    var isLight = lightSections.has(id);
    leftNav.classList.toggle('on-light', isLight);
    rightNav.classList.toggle('on-light', isLight);
  }

  function goToSection(idx) {
    if (idx < 0 || idx >= NAV_MODEL.length) return;
    sectionIdx = idx;
    updateLeftActive();
    buildRightNav();
    updateTheme();
    // Scroll to section landing
    var target = document.getElementById(NAV_MODEL[idx].id);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ---- Scroll tracking — determines which section/subsection is visible ----
  function onScroll() {
    var bestSec = 0, bestSub = -1, bestDist = Infinity;
    NAV_MODEL.forEach(function(sec, si) {
      // Check section landing
      var el = document.getElementById(sec.id);
      if (el) {
        var d = Math.abs(el.getBoundingClientRect().top - window.innerHeight * 0.3);
        if (d < bestDist) { bestDist = d; bestSec = si; bestSub = -1; }
      }
      // Check subsections
      sec.items.forEach(function(item, ii) {
        var el2 = document.getElementById(item.id);
        if (el2) {
          var d2 = Math.abs(el2.getBoundingClientRect().top - window.innerHeight * 0.3);
          if (d2 < bestDist) { bestDist = d2; bestSec = si; bestSub = ii; }
        }
      });
    });
    if (bestSec !== sectionIdx) {
      sectionIdx = bestSec;
      updateLeftActive();
      buildRightNav();
    }
    if (bestSub !== subIdx) {
      subIdx = bestSub;
      updateRightActive();
    }
    updateTheme();

    // Show/hide right nav — only visible inside doc subsections
    var docSectionIds = new Set([
      'clinical-workflow','cw-admission','cw-scheduling','cw-orders','cw-charting','cw-physician-note','cw-charges','cw-transfer','cw-discharge',
      'contacts','ct-departments','ct-leadership','ct-powerusers','ct-support',
      'functional-specs','fs-purpose','fs-features','fs-appworkflow','fs-testing',
      'technical-specs','ts-infrastructure','ts-interfaces','ts-security','ts-auth'
    ]);
    var visibleId = '';
    docSectionIds.forEach(function(sid) {
      var el = document.getElementById(sid);
      if (el) {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.5 && r.bottom > window.innerHeight * 0.3) {
          visibleId = sid;
        }
      }
    });
    rightNav.classList.toggle('hidden', !visibleId);
  }

  // ---- Arrow buttons ----
  btnUp.addEventListener('click', function(e) { e.stopPropagation(); goToSection(sectionIdx - 1); });
  btnDown.addEventListener('click', function(e) { e.stopPropagation(); goToSection(sectionIdx + 1); });

  window.addEventListener('scroll', onScroll, { passive: true });

  // ---- Init ----
  buildRightNav();
  updateLeftActive();
  updateTheme();
  rightNav.classList.add('hidden');
  onScroll();
}

// ===== BACK TO TOP =====
function initBackToTop() {
  var btn = document.getElementById('backToTop');
  window.addEventListener('scroll', function() {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
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
  var overlay = document.getElementById('cmdOverlay');
  var input = document.getElementById('cmdInput');
  var results = document.getElementById('cmdResults');
  var trigger = document.getElementById('cmdTrigger');

  // Full hierarchy index
  var index = [
    // Top-level pages (no section label)
    { label: 'Home', href: '#hero', tier: 0 },
    { label: 'Overview', href: '#overview', tier: 0 },
    { label: 'Interactive Workflow', href: '#workflow', tier: 0 },
    { label: 'System Architecture', href: '#architecture', tier: 0 },
    // Section 1
    { label: '1. Clinical Workflow Documentation', href: '#clinical-workflow', tier: 1 },
    { label: 'a. Admission / Registration', href: '#cw-admission', tier: 2, parent: 'Clinical Workflow' },
    { label: 'b. Scheduling', href: '#cw-scheduling', tier: 2, parent: 'Clinical Workflow' },
    { label: 'c. Orders', href: '#cw-orders', tier: 2, parent: 'Clinical Workflow' },
    { label: 'd. Charting / Documentation', href: '#cw-charting', tier: 2, parent: 'Clinical Workflow' },
    { label: 'e. Physician Note', href: '#cw-physician-note', tier: 2, parent: 'Clinical Workflow' },
    { label: 'f. Charges', href: '#cw-charges', tier: 2, parent: 'Clinical Workflow' },
    { label: 'g. Transfer', href: '#cw-transfer', tier: 2, parent: 'Clinical Workflow' },
    { label: 'h. Discharge', href: '#cw-discharge', tier: 2, parent: 'Clinical Workflow' },
    // Section 2
    { label: '2. Contacts', href: '#contacts', tier: 1 },
    { label: 'a. Department, building, location, address', href: '#ct-departments', tier: 2, parent: 'Contacts' },
    { label: 'b. Decision makers, directors, VPs', href: '#ct-leadership', tier: 2, parent: 'Contacts' },
    { label: 'c. Power users, validation resources', href: '#ct-powerusers', tier: 2, parent: 'Contacts' },
    { label: 'd. Support', href: '#ct-support', tier: 2, parent: 'Contacts' },
    // Section 3
    { label: '3. Application Functional Specifications', href: '#functional-specs', tier: 1 },
    { label: 'a. What does the application do', href: '#fs-purpose', tier: 2, parent: 'Functional Specs' },
    { label: 'b. What features does it offer', href: '#fs-features', tier: 2, parent: 'Functional Specs' },
    { label: 'c. Application workflow', href: '#fs-appworkflow', tier: 2, parent: 'Functional Specs' },
    { label: 'd. Testing plans, SOPs and KBAs', href: '#fs-testing', tier: 2, parent: 'Functional Specs' },
    // Section 4
    { label: '4. Technical and Operational Specifications', href: '#technical-specs', tier: 1 },
    { label: 'a. Server, PC, and hardware list with specs', href: '#ts-infrastructure', tier: 2, parent: 'Technical Specs' },
    { label: 'b. Interface workflows, filters, and scripts', href: '#ts-interfaces', tier: 2, parent: 'Technical Specs' },
    { label: 'c. Whitelisted websites, ports, security/AV exclusions', href: '#ts-security', tier: 2, parent: 'Technical Specs' },
    { label: 'd. Authentication method used', href: '#ts-auth', tier: 2, parent: 'Technical Specs' },
    // Resources at the very bottom
    { label: 'Resources & References', href: '#resources', tier: 0 },
    // Workflow steps (searchable only)
    ...workflowSteps.map(function(s) { return { label: s.title, href: '#workflow', stepId: s.id, tier: 3, parent: 'Workflow Step', searchOnly: true }; }),
    // Resource files (searchable only, open in new tab)
    ...resources.flatMap(function(cat) { return cat.items.map(function(item) { return { label: item.name, href: item.file, tier: 3, parent: cat.category, isFile: true, searchOnly: true }; }); }),
  ];

  var selected = 0;
  var isOpen = false;

  function open() {
    if (isOpen) return;
    isOpen = true;
    overlay.classList.add('open');
    input.value = '';
    // Delay focus slightly to ensure overlay is rendered
    requestAnimationFrame(function() { input.focus(); });
    render('');
  }

  function close() {
    if (!isOpen) return;
    isOpen = false;
    overlay.classList.remove('open');
    input.blur();
  }

  function render(query) {
    var q = query.toLowerCase().trim();
    var filtered = q
      ? index.filter(function(item) { return item.label.toLowerCase().indexOf(q) !== -1 || (item.parent && item.parent.toLowerCase().indexOf(q) !== -1); })
      : index.filter(function(item) { return !item.searchOnly; });
    selected = 0;
    if (!filtered.length) {
      results.innerHTML = '<div class="cmd-empty">No results for "' + query + '"</div>';
      return;
    }
    results.innerHTML = filtered.slice(0, 40).map(function(item, i) {
      var cls = 'cmd-result-item cmd-tier-' + (item.tier || 0);
      if (i === 0) cls += ' selected';
      var parentHtml = item.parent ? '<span class="cmd-result-parent">' + item.parent + '</span>' : '';
      var fileHint = item.isFile ? '<span class="cmd-result-file-hint">\u2197</span>' : '';
      return '<div class="' + cls + '" data-idx="' + i + '" data-href="' + item.href + '" data-step="' + (item.stepId || '') + '" data-file="' + (item.isFile ? '1' : '') + '">' +
        '<span class="cmd-result-label">' + item.label + '</span>' + parentHtml + fileHint + '</div>';
    }).join('');
    results.querySelectorAll('.cmd-result-item').forEach(function(el) {
      el.addEventListener('mouseenter', function() {
        results.querySelectorAll('.cmd-result-item').forEach(function(e) { e.classList.remove('selected'); });
        el.classList.add('selected');
        selected = parseInt(el.dataset.idx);
      });
      el.addEventListener('click', function() { navigate(el); });
    });
  }

  function navigate(el) {
    var href = el.dataset.href;
    var stepId = el.dataset.step;
    var isFile = el.dataset.file === '1';
    close();
    if (isFile) {
      window.open(href, '_blank');
    } else if (href.startsWith('#')) {
      var target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (stepId) {
          setTimeout(function() {
            var s = document.querySelector('.wf-step[data-id="' + stepId + '"]');
            if (s) s.click();
          }, 600);
        }
      }
    } else {
      window.open(href, '_blank');
    }
  }

  input.addEventListener('input', function() { render(input.value); });

  input.addEventListener('keydown', function(e) {
    var items = results.querySelectorAll('.cmd-result-item');
    if (e.key === 'ArrowDown') { e.preventDefault(); selected = Math.min(selected + 1, items.length - 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); selected = Math.max(selected - 1, 0); }
    else if (e.key === 'Enter') { e.preventDefault(); if (items[selected]) navigate(items[selected]); return; }
    else if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    else { return; }
    items.forEach(function(el, i) { el.classList.toggle('selected', i === selected); });
    if (items[selected]) items[selected].scrollIntoView({ block: 'nearest' });
  });

  overlay.addEventListener('click', function(e) { if (e.target === overlay) close(); });
  trigger.addEventListener('click', open);

  // Ctrl+K / Cmd+K — top-priority handler, capture phase
  document.addEventListener('keydown', function(e) {
    // Ctrl+K or Cmd+K — always toggle command palette
    if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      if (isOpen) { close(); } else { open(); }
      return;
    }
    // Escape closes if open
    if (e.key === 'Escape' && isOpen) {
      e.preventDefault();
      close();
    }
  }, true); // capture phase — fires before any other keydown handlers
}

// ===== APEX HERO VISUALIZATION — IMAGING LENS =====
function initApexVisualization() {
  var canvas = document.getElementById('apexCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var dpr = window.devicePixelRatio || 1;
  var W, H, cx, cy, R;
  function resize() {
    var rect = canvas.getBoundingClientRect();
    W = rect.width; H = rect.height;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cx = W / 2; cy = H / 2; R = Math.min(W, H) * 0.47;
  }
  resize(); window.addEventListener('resize', resize);

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  function easeOutQuint(t) { return 1 - Math.pow(1 - t, 5); }
  function easeInOutCubic(t) { return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2; }
  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }

  var TEAL=[0,169,157],TL=[0,201,187],CYAN=[0,220,240],W_=[255,255,255],DP=[8,28,56];
  function rgba(c,a){return 'rgba('+c[0]+','+c[1]+','+c[2]+','+(a<0?0:a)+')';}

  var lensRings = [
    {rf:1.00,w:2.0,tp:'h',spd:0,del:0.3},{rf:0.96,w:0.6,tp:'c',spd:0.12,del:0.5},
    {rf:0.88,w:1.4,tp:'g',spd:-0.04,del:0.7},{rf:0.82,w:0.5,tp:'c',spd:0.08,del:0.9},
    {rf:0.74,w:1.0,tp:'s',spd:-0.06,del:1.1},{rf:0.66,w:0.4,tp:'c',spd:0.15,del:1.3},
    {rf:0.56,w:0.8,tp:'g',spd:0.03,del:1.5},{rf:0.46,w:0.5,tp:'s',spd:-0.10,del:1.7}
  ];
  var TK=72,MJ=6;
  var labels=['Admit','Capture','Document','Review','Sign','Distribute'];
  var N=6,nodes=[];
  for(var i=0;i<N;i++) nodes.push({a:-Math.PI/2+(Math.PI*2/N)*i,lb:labels[i],p:0,gl:0});

  var st=null,done=false,gA=0,cB=0,sA=0,pls=[],iT=0,nP=0;
  var blinkPhase=0; // 0-1 during blink, used for intensity flicker
  var onStabilized=null; // callback when lens locks in

  function drawBg(pr){
    var g=ctx.createRadialGradient(cx,cy,0,cx,cy,R);
    g.addColorStop(0,rgba(TEAL,0.04*pr));g.addColorStop(0.5,rgba(DP,0.06*pr));
    g.addColorStop(0.85,rgba(TEAL,0.02*pr));g.addColorStop(1,'rgba(0,0,0,0)');
    ctx.beginPath();ctx.arc(cx,cy,R,0,Math.PI*2);ctx.fillStyle=g;ctx.fill();
  }
  function drawRing(rn,t,mp){
    var rP=clamp01((mp-rn.del)/0.6);if(rP<=0)return;
    var ep=easeOutQuint(rP),rr=R*rn.rf*(0.6+0.4*ep),al=ep*gA;
    ctx.save();ctx.translate(cx,cy);ctx.rotate(t*rn.spd);
    if(rn.tp==='h'){
      ctx.beginPath();ctx.arc(0,0,rr,0,Math.PI*2);
      ctx.strokeStyle=rgba(TEAL,0.35*al);ctx.lineWidth=rn.w*ep;ctx.stroke();
      ctx.beginPath();ctx.arc(0,0,rr+3,0,Math.PI*2);
      ctx.strokeStyle=rgba(TL,0.08*al);ctx.lineWidth=6;ctx.stroke();
    }else if(rn.tp==='g'){
      ctx.beginPath();ctx.arc(0,0,rr,0,Math.PI*2);
      ctx.strokeStyle=rgba(CYAN,0.12*al);ctx.lineWidth=rn.w*ep;ctx.stroke();
      ctx.beginPath();ctx.arc(0,0,rr-2,0,Math.PI*2);
      ctx.strokeStyle=rgba(TL,0.04*al);ctx.lineWidth=4;ctx.stroke();
    }else if(rn.tp==='c'){
      ctx.beginPath();ctx.arc(0,0,rr,0,Math.PI*2);
      ctx.strokeStyle=rgba(TEAL,0.1*al);ctx.lineWidth=rn.w*ep;
      ctx.setLineDash([2,6]);ctx.stroke();ctx.setLineDash([]);
      for(var ti=0;ti<TK;ti++){
        var ta=(Math.PI*2/TK)*ti,mj=ti%MJ===0,tl=mj?8:4;
        ctx.beginPath();ctx.moveTo(Math.cos(ta)*rr,Math.sin(ta)*rr);
        ctx.lineTo(Math.cos(ta)*(rr-tl*ep),Math.sin(ta)*(rr-tl*ep));
        ctx.strokeStyle=rgba(TL,(mj?0.25:0.1)*al);ctx.lineWidth=mj?1.2:0.6;ctx.stroke();
      }
    }else if(rn.tp==='s'){
      var sw=Math.PI*0.6,of=t*0.3;
      ctx.beginPath();ctx.arc(0,0,rr,of,of+sw*ep);
      ctx.strokeStyle=rgba(TL,0.18*al);ctx.lineWidth=rn.w*ep;ctx.stroke();
      ctx.beginPath();ctx.arc(0,0,rr,of+Math.PI,of+Math.PI+sw*0.4*ep);
      ctx.strokeStyle=rgba(TEAL,0.1*al);ctx.lineWidth=rn.w*0.6*ep;ctx.stroke();
    }
    ctx.restore();
  }
  function drawScan(t,pr){
    if(pr<0.3)return;var bp=clamp01((pr-0.3)/0.5),al=easeOutCubic(bp)*gA*0.15,bR=R*0.74;
    ctx.save();ctx.translate(cx,cy);ctx.rotate(sA);
    var g=ctx.createLinearGradient(0,0,bR,0);
    g.addColorStop(0,rgba(TL,al));g.addColorStop(0.7,rgba(TL,al*0.3));g.addColorStop(1,rgba(TL,0));
    ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(bR,0);ctx.strokeStyle=g;ctx.lineWidth=1.5;ctx.stroke();
    ctx.restore();
  }
  function drawCore(t,mp){
    var cp=clamp01((mp-0.8)/1.0);if(cp<=0)return;
    var ep=easeOutCubic(cp),br=done?Math.sin(cB)*0.03+1:1;
    var cR=R*0.18*ep*br,al=ep*gA;
    var hg=ctx.createRadialGradient(cx,cy,cR*0.3,cx,cy,cR*3.5);
    hg.addColorStop(0,rgba(TEAL,0.12*al));hg.addColorStop(0.4,rgba(TEAL,0.04*al));hg.addColorStop(1,rgba(TEAL,0));
    ctx.beginPath();ctx.arc(cx,cy,cR*3.5,0,Math.PI*2);ctx.fillStyle=hg;ctx.fill();
    var cg=ctx.createRadialGradient(cx,cy,0,cx,cy,cR);
    cg.addColorStop(0,rgba(TEAL,0.22*al));cg.addColorStop(0.6,rgba(TEAL,0.1*al));cg.addColorStop(1,rgba(TEAL,0.04*al));
    ctx.beginPath();ctx.arc(cx,cy,cR,0,Math.PI*2);ctx.fillStyle=cg;ctx.fill();
    ctx.beginPath();ctx.arc(cx,cy,cR,0,Math.PI*2);ctx.strokeStyle=rgba(TL,0.5*al);ctx.lineWidth=1.2;ctx.stroke();
    ctx.save();ctx.translate(cx,cy);ctx.rotate(-t*0.15);
    ctx.beginPath();ctx.arc(0,0,cR+8,0,Math.PI*2);ctx.strokeStyle=rgba(TEAL,0.1*al);
    ctx.lineWidth=0.6;ctx.setLineDash([3,7]);ctx.stroke();ctx.setLineDash([]);ctx.restore();
    var fs=Math.max(12,cR*0.52);
    ctx.font='700 '+fs+'px Inter,sans-serif';ctx.fillStyle=rgba(TL,0.9*al);
    ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('APEX',cx,cy-fs*0.18);
    var ss=Math.max(7,cR*0.26);ctx.font='600 '+ss+'px Inter,sans-serif';
    ctx.fillStyle=rgba(TL,0.4*al);ctx.fillText('ENGINE',cx,cy+fs*0.52);
  }
  function drawNodes(){
    var nR=R*0.36,sc=W/520;
    nodes.forEach(function(nd,i){
      if(nd.p<=0)return;var ep=easeOutCubic(clamp01(nd.p));
      var px=cx+Math.cos(nd.a)*nR,py=cy+Math.sin(nd.a)*nR,dr=4*ep*sc,al=ep*gA;
      if(nd.gl>0){var gg=ctx.createRadialGradient(px,py,dr,px,py,dr+16*sc);
        gg.addColorStop(0,rgba(TL,0.3*nd.gl*al));gg.addColorStop(1,rgba(TL,0));
        ctx.beginPath();ctx.arc(px,py,dr+16*sc,0,Math.PI*2);ctx.fillStyle=gg;ctx.fill();}
      ctx.beginPath();ctx.arc(px,py,dr+3*sc,0,Math.PI*2);
      ctx.strokeStyle=rgba(TEAL,0.18*al);ctx.lineWidth=0.7;ctx.stroke();
      ctx.beginPath();ctx.arc(px,py,dr,0,Math.PI*2);ctx.fillStyle=rgba(TL,0.85*al);ctx.fill();
      var ni=(i+1)%N;if(nodes[ni].p>0){
        var nx=cx+Math.cos(nodes[ni].a)*nR,ny=cy+Math.sin(nodes[ni].a)*nR;
        var lp=clamp01(Math.min(nd.p,nodes[ni].p));
        ctx.beginPath();ctx.moveTo(px,py);ctx.lineTo(px+(nx-px)*lp,py+(ny-py)*lp);
        ctx.strokeStyle=rgba(TEAL,0.12*lp*al);ctx.lineWidth=0.8;ctx.stroke();}
      ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+(px-cx)*ep*0.85,cy+(py-cy)*ep*0.85);
      ctx.strokeStyle=rgba(TEAL,0.06*al);ctx.lineWidth=0.5;ctx.stroke();
      if(ep>0.6){var la=(ep-0.6)/0.4;
        var lx=cx+Math.cos(nd.a)*(nR+16*sc),ly=cy+Math.sin(nd.a)*(nR+16*sc);
        ctx.font='600 '+Math.max(8,9*sc)+'px Inter,sans-serif';
        ctx.fillStyle=rgba(W_,0.38*la*al);ctx.textAlign='center';ctx.textBaseline='middle';
        ctx.fillText(nd.lb.toUpperCase(),lx,ly);}
    });
  }
  function drawPulses(){
    var nR=R*0.36,sc=W/520;
    pls.forEach(function(p){if(p.pr<0||p.pr>1)return;
      var a=nodes[p.f],b=nodes[p.t];
      var ax=cx+Math.cos(a.a)*nR,ay=cy+Math.sin(a.a)*nR;
      var bx=cx+Math.cos(b.a)*nR,by=cy+Math.sin(b.a)*nR;
      var ep=easeInOutCubic(p.pr),px=ax+(bx-ax)*ep,py=ay+(by-ay)*ep;
      var al=Math.sin(p.pr*Math.PI)*gA;
      var pg=ctx.createRadialGradient(px,py,0,px,py,8*sc);
      pg.addColorStop(0,rgba(W_,0.7*al));pg.addColorStop(0.3,rgba(TL,0.4*al));pg.addColorStop(1,rgba(TL,0));
      ctx.beginPath();ctx.arc(px,py,8*sc,0,Math.PI*2);ctx.fillStyle=pg;ctx.fill();
      ctx.beginPath();ctx.arc(px,py,2*sc,0,Math.PI*2);ctx.fillStyle=rgba(W_,0.9*al);ctx.fill();
    });
  }
  function updEntrance(t){
    // Phase 1: 0-2.5s — optical activation with blink
    // Phase 2: 2.5-4.0s — stabilization (velocity decays, glow steadies)
    // Phase 3: 4.0-4.5s — scan beam fades, system locked
    // 4.5s — fire callback, enter idle

    // Master alpha with blink flicker during 1.5-2.5s
    var baseAlpha=clamp01(t/0.5);
    if(t>1.5&&t<2.8){
      blinkPhase=(t-1.5)/1.3;
      var flicker=1-Math.pow(Math.sin(blinkPhase*Math.PI*6),2)*0.25*(1-blinkPhase);
      gA=baseAlpha*flicker;
    }else{gA=baseAlpha;}

    // Scan beam — fast sweep then decelerate and fade
    if(t<3.5){sA=easeOutQuint(clamp01(t/3.5))*Math.PI*3;}
    else{sA+=0.02*(1-clamp01((t-3.5)/1.0));} // decaying rotation

    // Nodes resolve after blink phase
    nodes.forEach(function(nd,i){nd.p=clamp01((t-(2.2+i*0.2))/0.5);});

    // Glow sweep — signal acquisition confirmation
    nodes.forEach(function(nd,i){var gs=3.4+i*0.08,ge=gs+0.35;
      if(t>=gs&&t<=ge)nd.gl=Math.sin(((t-gs)/(ge-gs))*Math.PI);
      else if(t>ge)nd.gl*=0.95;});

    if(t>4.5){
      done=true;
      if(onStabilized){onStabilized();onStabilized=null;}
    }
  }
  function updIdle(dt){
    cB+=dt*0.7;sA+=dt*0.08;iT+=dt;
    if(iT>2.0){iT=0;pls.push({f:nP,t:(nP+1)%N,pr:0,sp:0.45});nP=(nP+1)%N;}
    for(var i=pls.length-1;i>=0;i--){pls[i].pr+=dt*pls[i].sp;if(pls[i].pr>1.2)pls.splice(i,1);}
    nodes.forEach(function(nd){nd.gl*=0.94;});
    pls.forEach(function(p){if(p.pr>0.7&&p.pr<1.1)
      nodes[p.t].gl=Math.max(nodes[p.t].gl,Math.sin((p.pr-0.7)/0.4*Math.PI)*0.5);});
  }
  var lF=0;
  function frame(ts){
    if(!st){st=ts;lF=ts;}var t=(ts-st)/1000,dt=Math.min((ts-lF)/1000,0.05);lF=ts;
    ctx.clearRect(0,0,W,H);var mp=done?99:t;
    if(!done)updEntrance(t);else updIdle(dt);
    drawBg(gA);lensRings.forEach(function(rn){drawRing(rn,t,mp);});
    drawScan(t,done?0:clamp01(t/2.0)*(1-clamp01((t-3.5)/1.0)));drawCore(t,mp);drawNodes();drawPulses();
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  // Expose callback for external sync
  return { onStabilized: function(fn){ onStabilized=fn; } };
}

// ===== HERO TYPOGRAPHY CHOREOGRAPHY =====
function initHeroTypography(lensApi) {
  var line1 = document.getElementById('heroLine1');
  var line2 = document.getElementById('heroLine2');
  var badge = document.getElementById('heroBadge');
  var sub = document.getElementById('heroSub');
  if (!line1 || !line2) return;

  // Wrap text into individual char spans
  function wrapChars(el, text) {
    el.innerHTML = '';
    text.split('').forEach(function(ch) {
      var span = document.createElement('span');
      span.className = 'char';
      span.textContent = ch === ' ' ? '\u00A0' : ch;
      el.appendChild(span);
    });
  }
  wrapChars(line1, 'Provation Apex');
  wrapChars(line2, 'Clinical Workflow Portal');

  function reveal() {
    // Badge fade
    anime({
      targets: badge,
      opacity: [0, 1],
      translateY: [8, 0],
      duration: 500,
      easing: 'easeOutCubic'
    });

    // Line 1 — spectral title, letter by letter
    anime({
      targets: '#heroLine1 .char',
      opacity: [0, 1],
      translateY: [16, 0],
      duration: 450,
      delay: anime.stagger(35, { start: 250 }),
      easing: 'easeOutCubic'
    });

    // Line 2 — subtitle line, slightly later
    anime({
      targets: '#heroLine2 .char',
      opacity: [0, 1],
      translateY: [12, 0],
      duration: 400,
      delay: anime.stagger(25, { start: 900 }),
      easing: 'easeOutCubic'
    });

    // Description
    anime({
      targets: sub,
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 600,
      delay: 1500,
      easing: 'easeOutCubic'
    });
  }

  if (lensApi) {
    lensApi.onStabilized(reveal);
  } else {
    setTimeout(reveal, 500);
  }
}

// ===== TOP NAV SCROLL TRACKING =====
function initNavLinks() {
  var links = document.querySelectorAll('.nav-link');
  var sections = [];
  links.forEach(function(link) {
    var id = link.getAttribute('data-section');
    if (id) sections.push({ id: id, el: document.getElementById(id), link: link });
  });
  function update() {
    var best = null, bestDist = Infinity;
    sections.forEach(function(s) {
      if (!s.el) return;
      var d = Math.abs(s.el.getBoundingClientRect().top - window.innerHeight * 0.3);
      if (d < bestDist) { bestDist = d; best = s; }
    });
    links.forEach(function(l) { l.classList.remove('active'); });
    if (best) best.link.classList.add('active');
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
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
  initBackToTop();
  var lensApi = initApexVisualization();
  initHeroTypography(lensApi);
  initNavLinks();
  initWorkflowPulse();
  initArchInteraction();
});
