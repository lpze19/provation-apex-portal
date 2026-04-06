// ===== WORKFLOW DATA =====
const workflowSteps = [
  { id: 'clinic', icon: '🏥', label: 'Clinic', stepNum: 'Step 01', title: 'Clinic Arrival', body: 'The patient arrives at the clinic. This is the entry point of the Provation Apex workflow. The clinical team initiates the pre-registration process, confirming patient identity and reason for visit.', tags: ['Front Desk', 'Patient Arrival', 'Check-In'], milestone: null },
  { id: 'prereg', icon: '📝', label: 'Pre-Reg', stepNum: 'Step 02', title: 'Pre-Registration', body: 'Patient demographics, insurance information, and procedure details are pre-registered in the system. ADT (Admit, Discharge, Transfer) messages are generated via HL7 interface, automatically populating Provation Apex with patient data — eliminating manual entry.', tags: ['ADT Interface', 'HL7', 'Demographics', 'Insurance'], milestone: null },
  { id: 'preop', icon: '🩺', label: 'Pre-Op', stepNum: 'Step 03', title: 'Pre-Operative Assessment', body: 'The clinical team conducts the pre-operative assessment. Vital signs, allergies, medications, and consent documentation are reviewed and confirmed. The patient is prepared for the procedure.', tags: ['Clinical Assessment', 'Consent', 'Vitals', 'Nursing'], milestone: null },
  { id: 'reg', icon: '✅', label: 'Registration', stepNum: 'Step 04', title: 'Full Registration', body: 'The patient is formally registered for the procedure. The encounter is confirmed in the system, linking the patient to the scheduled procedure. Scheduling messages (SIU) from the scheduling system are received and matched to the Provation Apex case.', tags: ['SIU Message', 'Encounter', 'Scheduling'], milestone: null },
  { id: 'room', icon: '🚪', label: 'Placed in Room', stepNum: 'Step 05', title: 'Patient Placed in Room', body: 'The patient is physically placed in the procedure room. The room assignment is recorded in the system, and the clinical team begins preparing the environment for the procedure.', tags: ['Room Assignment', 'Procedure Room', 'Clinical Staff'], milestone: null },
  { id: 'case-open', icon: '💻', label: 'Case Opened', stepNum: 'Step 06', title: 'Case Opened in Provation Apex', body: 'A case is formally opened in Provation Apex. This is the critical system activation point — the case record is created, linking the patient encounter to the documentation workflow. All subsequent clinical activity is captured under this case.', tags: ['Case Creation', 'Provation Apex', 'Documentation Start'], milestone: '🔑 System Activation Point' },
  { id: 'bed', icon: '🛏️', label: 'Bed Assigned', stepNum: 'Step 07', title: 'Bed Assignment', body: 'A specific bed or procedure station is assigned to the patient within the case record. This ensures accurate location tracking and ties the physical setup to the digital case documentation.', tags: ['Bed Management', 'Location Tracking'], milestone: null },
  { id: 'physician', icon: '👨‍⚕️', label: 'Physician Assigned', stepNum: 'Step 08', title: 'Physician Assignment', body: 'The performing physician is assigned to the case in Provation Apex. This assignment is critical — it establishes accountability, enables physician-specific documentation templates, and prepares the case for the physician\'s electronic signature at completion.', tags: ['Physician', 'Assignment', 'Accountability'], milestone: null },
  { id: 'scope', icon: '🔬', label: 'Scope Selected', stepNum: 'Step 09', title: 'Scope Selection', body: 'The specific endoscope to be used is selected and assigned to the case. Provation Apex supports Olympus CV-180/190 and Pentax IMAGINA systems. Scope selection enables device-specific image capture and ensures proper equipment tracking and reprocessing documentation.', tags: ['Olympus', 'Pentax', 'Equipment', 'Scope Tracking'], milestone: '📸 Image Capture Now Enabled' },
  { id: 'scope-in', icon: '⏱️', label: 'Scope In', stepNum: 'Step 10', title: 'Scope In — Procedure Begins', body: 'The scope insertion time is recorded, marking the official start of the procedure. This timestamp is clinically and legally significant — it anchors the procedure timeline and triggers the active documentation phase. Images and video can now be captured in real time.', tags: ['Timestamp', 'Procedure Start', 'Image Capture', 'Real-Time'], milestone: '⏱️ Procedure Timer Started' },
  { id: 'section1', icon: '📍', label: 'Next Section', stepNum: 'Step 11', title: 'Anatomical Section Documentation', body: 'As the scope advances through anatomical sections, the physician or clinical staff documents findings at each section. Provation Apex provides structured templates for each anatomical location, ensuring consistent and complete documentation. Images are captured and tagged to the relevant section.', tags: ['Findings', 'Anatomy', 'Structured Documentation', 'Images'], milestone: null },
  { id: 'section2', icon: '📍', label: 'Next Section', stepNum: 'Step 12', title: 'Continued Section Documentation', body: 'Documentation continues as the procedure progresses through additional anatomical sections. Each section captures findings, measurements, and images. The structured workflow ensures no section is missed and all clinical observations are recorded in real time.', tags: ['Continued Documentation', 'Findings', 'Measurements'], milestone: null },
  { id: 'scope-out', icon: '🔚', label: 'Scope Out', stepNum: 'Step 13', title: 'Scope Out — Procedure Ends', body: 'The scope is withdrawn and the scope-out time is recorded. This marks the official end of the procedure. The total procedure duration is automatically calculated. The case transitions from active procedure to documentation completion phase.', tags: ['Procedure End', 'Timestamp', 'Duration Calculated'], milestone: '🔚 Procedure Complete' },
  { id: 'notes', icon: '📋', label: 'Case Notes', stepNum: 'Step 14', title: 'Case Notes & Final Documentation', body: 'The physician and clinical staff complete all case notes, including procedure findings, impressions, recommendations, and any complications. Specimen labels are generated if applicable. Charges are captured based on the documented procedure codes. The case is reviewed for completeness before signature.', tags: ['Case Notes', 'Findings', 'Charges', 'Specimen Labels', 'Billing'], milestone: null },
  { id: 'sign', icon: '✍️', label: 'Physician Signs', stepNum: 'Step 15', title: 'Physician Electronic Signature', body: 'The physician reviews the complete case documentation and applies their electronic signature. This is the legal finalization of the procedure record. The signature is timestamped and tied to the physician\'s credentials. Once signed, the document is locked and cannot be altered.', tags: ['E-Signature', 'Legal Finalization', 'Physician', 'Locked Record'], milestone: '✍️ Document Legally Finalized' },
  { id: 'chart', icon: '📤', label: 'Sent to Chart', stepNum: 'Step 16', title: 'Automatic Chart Distribution', body: 'Upon physician signature, Provation Apex automatically transmits the completed procedure document to the patient\'s EMR chart. No manual intervention is required. The document becomes immediately available to the care team, billing department, and any downstream consumers — completing the clinical documentation loop.', tags: ['EMR', 'Auto-Distribution', 'HL7', 'Chart Complete', 'Billing'], milestone: '🎯 Documentation Loop Complete' }
];

// ===== RESOURCES DATA =====
const resources = [
  { category: 'Clinical & Workflow', icon: '🏥', items: [
    { name: 'ADT Interface Specifications', type: 'PDF', file: '../../ADT Interface Specs.pdf' },
    { name: 'SIU Scheduling Message Spec', type: 'PDF', file: '../../SIU Scheduling Message Spec APEX.pdf' },
    { name: 'ORU Apex Procedure Documentation', type: 'PDF', file: '../../ORU Apex Procedure Documentation.pdf' },
    { name: 'Provation Workflow Overview', type: 'TXT', file: '../../Provation work flow.txt' },
    { name: 'Specimen Collection Workflow', type: 'DOC', file: '../../Provation apex specimen collection workflow.docx' },
  ]},
  { category: 'Architecture & Technical', icon: '⚙️', items: [
    { name: 'Apex Architecture Rev3', type: 'PDF', file: '../../Apex Architecture Rev3.pdf' },
    { name: 'Apex Technical Specifications v15', type: 'PDF', file: '../../Apex TechSpecsV15.pdf' },
    { name: 'Azure AD Setup QRG v3', type: 'PDF', file: '../../Azure AD Setup QRG v3.2021.pdf' },
    { name: 'Offline Mode Documentation', type: 'PDF', file: '../../Offline Mode.pdf' },
    { name: 'MD-Reports to Apex Data Migration', type: 'PDF', file: '../../MD-Reports to Provation Apex Data Migration.pdf' },
  ]},
  { category: 'Security & Compliance', icon: '🔒', items: [
    { name: 'Cybersecurity Fact Sheet', type: 'PDF', file: '../../Provation Apex Cybersecurity Fast Sheet.pdf' },
    { name: 'DHR Provider Documentation Memo', type: 'DOC', file: '../../DHR-HEALTH-MEMO-Provider documentation.docx' },
    { name: 'Demarcation Document', type: 'DOC', file: '../../Demarcation.docx' },
    { name: 'Provation Errors Log', type: 'DOC', file: '../../Provation errors.docx' },
  ]},
  { category: 'Go-Live & Readiness', icon: '🚀', items: [
    { name: 'Change Management Go-Live', type: 'XLS', file: '../../Change Management Go-Live.xlsx' },
    { name: 'Provation Go-Live Workbook', type: 'XLS', file: '../../Provation Go Live Workbook.xlsx' },
    { name: 'Ready for PV Apex Checklist', type: 'PDF', file: '../../Ready for PV Apex Checklist.pdf' },
    { name: 'Go-Live Week Documentation', type: 'DOC', file: '../../Provation Go Live Week.docx' },
    { name: 'Hardware Testing Phase 1', type: 'PDF', file: '../../Provation Apex Customer Hardware Testing - Phase 1.pdf' },
    { name: 'Hardware Testing Phase 2', type: 'PDF', file: '../../Provation Apex Customer Hardware Testing - Phase 2.pdf' },
  ]},
  { category: 'SOPs by Role', icon: '📖', items: [
    { name: 'SOP — End User', type: 'DOC', file: '../../_SOP End user Example.docx' },
    { name: 'SOP — Administrator', type: 'DOC', file: '../../_SOP Administrator Example.docx' },
    { name: 'SOP — Helpdesk', type: 'DOC', file: '../../_SOP Helpdesk Example.docx' },
    { name: 'Welcome to Provation Apex', type: 'DOC', file: '../../DHRXT Welcome to Your Provation Apex.docx' },
    { name: 'Apex Login & Training Guide', type: 'PDF', file: '../../Apex log in and training DHRXT01.pdf' },
    { name: 'Apex Support Flyer', type: 'PDF', file: '../../Apex Support Flyer DHRXT01.pdf' },
  ]},
  { category: 'Equipment & Infrastructure', icon: '🔧', items: [
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
  const typeIcon = { PDF: '📄', DOC: '📝', XLS: '📊', TXT: '📃', VSD: '📐' };
  resources.forEach(cat => {
    const itemsHtml = cat.items.map(item => `
      <a class="res-item" href="${item.file}" title="Open ${item.name}">
        <span class="res-item-icon">${typeIcon[item.type] || '📄'}</span>
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

// ===== SIDE NAV — always visible, adapts to bg =====
function initSideNav() {
  const sidenav = document.getElementById('sidenav');
  const links = sidenav.querySelectorAll('.sidenav-link');
  const sectionIds = [
    'overview','workflow','clinical-workflow',
    'cw-admission','cw-scheduling','cw-orders','cw-charting','cw-physician-note','cw-charges','cw-transfer','cw-discharge',
    'contacts','ct-departments','ct-leadership','ct-powerusers','ct-support',
    'functional-specs','fs-purpose','fs-features','fs-appworkflow','fs-testing',
    'technical-specs','ts-infrastructure','ts-interfaces','ts-security','ts-auth',
    'architecture','resources'
  ];
  const lightSections = new Set([
    'overview','cw-admission','cw-orders','cw-physician-note','cw-transfer',
    'ct-leadership','ct-powerusers','fs-purpose','fs-appworkflow','ts-infrastructure','ts-security','ts-auth',
    'architecture','resources'
  ]);

  function update() {
    let current = '';
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5) current = id;
    });
    links.forEach(l => l.classList.toggle('active', l.dataset.section === current));
    sidenav.classList.toggle('on-light', lightSections.has(current));
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
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
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // stagger siblings
        const siblings = entry.target.parentElement.querySelectorAll('.reveal');
        let delay = 0;
        siblings.forEach((sib, idx) => {
          if (sib === entry.target) delay = idx * 80;
        });
        setTimeout(() => entry.target.classList.add('in-view'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===== PARALLAX — layered depth =====
function initParallax() {
  const hero = document.querySelector('.hero');
  const grid = hero.querySelector('.hero-bg-grid');
  const orb1 = hero.querySelector('.hero-orb-1');
  const orb2 = hero.querySelector('.hero-orb-2');

  // Section depth layers
  const sections = document.querySelectorAll('.parallax-section');
  sections.forEach(sec => {
    const layer = document.createElement('div');
    layer.className = 'depth-layer';
    layer.style.cssText = `width:600px;height:600px;top:-100px;left:-100px;`;
    sec.style.position = 'relative';
    sec.insertBefore(layer, sec.firstChild);
  });

  function onScroll() {
    const sy = window.scrollY;

    // Hero grid subtle drift
    if (grid) grid.style.transform = `translateY(${sy * 0.25}px)`;
    if (orb1) orb1.style.transform = `translateY(${sy * 0.15}px)`;
    if (orb2) orb2.style.transform = `translateY(${sy * -0.1}px)`;

    // Section depth layers
    sections.forEach(sec => {
      const layer = sec.querySelector('.depth-layer');
      if (!layer) return;
      const rect = sec.getBoundingClientRect();
      const offset = (rect.top / window.innerHeight) * 40;
      layer.style.transform = `translateY(${offset}px) scale(${1 + Math.abs(offset) * 0.002})`;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ===== SMOOTH ANCHOR NAV with morph feel =====
function initSmoothNav() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      // View Transitions API if supported
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          target.scrollIntoView({ behavior: 'instant', block: 'start' });
        });
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

  // Build searchable index
  const index = [
    { icon: '🏥', label: 'Overview', section: 'Section', href: '#overview' },
    { icon: '🔄', label: 'Interactive Workflow', section: 'Section', href: '#workflow' },
    // Clinical Workflow
    { icon: '📋', label: 'Clinical Workflow Documentation', section: 'Section 1', href: '#clinical-workflow' },
    { icon: '🏥', label: 'Admission / Registration', section: 'Clinical Workflow', href: '#cw-admission' },
    { icon: '📅', label: 'Scheduling', section: 'Clinical Workflow', href: '#cw-scheduling' },
    { icon: '📋', label: 'Orders', section: 'Clinical Workflow', href: '#cw-orders' },
    { icon: '✏️', label: 'Charting / Documentation', section: 'Clinical Workflow', href: '#cw-charting' },
    { icon: '👨‍⚕️', label: 'Physician Note', section: 'Clinical Workflow', href: '#cw-physician-note' },
    { icon: '💰', label: 'Charges', section: 'Clinical Workflow', href: '#cw-charges' },
    { icon: '🔄', label: 'Transfer', section: 'Clinical Workflow', href: '#cw-transfer' },
    { icon: '🚪', label: 'Discharge', section: 'Clinical Workflow', href: '#cw-discharge' },
    // Contacts
    { icon: '👥', label: 'Contacts', section: 'Section 2', href: '#contacts' },
    { icon: '🏢', label: 'Departments & Locations', section: 'Contacts', href: '#ct-departments' },
    { icon: '👔', label: 'Decision Makers & Leadership', section: 'Contacts', href: '#ct-leadership' },
    { icon: '⚡', label: 'Power Users & Validation', section: 'Contacts', href: '#ct-powerusers' },
    { icon: '🛟', label: 'Support Tiers', section: 'Contacts', href: '#ct-support' },
    // Functional Specs
    { icon: '⚙️', label: 'Functional Specifications', section: 'Section 3', href: '#functional-specs' },
    { icon: '🎯', label: 'Application Purpose', section: 'Functional Specs', href: '#fs-purpose' },
    { icon: '✨', label: 'Features', section: 'Functional Specs', href: '#fs-features' },
    { icon: '🔄', label: 'Application Workflow', section: 'Functional Specs', href: '#fs-appworkflow' },
    { icon: '🧪', label: 'Testing, SOPs & KBAs', section: 'Functional Specs', href: '#fs-testing' },
    // Technical Specs
    { icon: '🖥️', label: 'Technical Specifications', section: 'Section 4', href: '#technical-specs' },
    { icon: '🖥️', label: 'Infrastructure & Servers', section: 'Technical Specs', href: '#ts-infrastructure' },
    { icon: '🔌', label: 'Interfaces & HL7', section: 'Technical Specs', href: '#ts-interfaces' },
    { icon: '🔒', label: 'Security & Network Config', section: 'Technical Specs', href: '#ts-security' },
    { icon: '🔑', label: 'Authentication — Azure AD', section: 'Technical Specs', href: '#ts-auth' },
    // Architecture + Resources
    { icon: '⚙️', label: 'System Architecture', section: 'Section', href: '#architecture' },
    { icon: '📚', label: 'Resources & References', section: 'Section', href: '#resources' },
    ...workflowSteps.map(s => ({ icon: s.icon, label: s.title, section: 'Workflow Step', href: '#workflow', stepId: s.id })),
    ...resources.flatMap(cat => cat.items.map(item => ({ icon: '📄', label: item.name, section: cat.category, href: item.file, isFile: true }))),
  ];

  let selected = 0;

  function open() {
    overlay.classList.add('open');
    input.value = '';
    input.focus();
    render('');
  }

  function close() {
    overlay.classList.remove('open');
    input.blur();
  }

  function render(query) {
    const q = query.toLowerCase().trim();
    const filtered = q
      ? index.filter(item => item.label.toLowerCase().includes(q) || item.section.toLowerCase().includes(q))
      : index.slice(0, 8);

    selected = 0;
    if (!filtered.length) {
      results.innerHTML = `<div class="cmd-empty">No results for "${query}"</div>`;
      return;
    }

    results.innerHTML = filtered.slice(0, 10).map((item, i) => `
      <div class="cmd-result-item${i === 0 ? ' selected' : ''}" data-idx="${i}" data-href="${item.href}" data-step="${item.stepId || ''}">
        <span class="cmd-result-icon">${item.icon}</span>
        <span class="cmd-result-label">${item.label}</span>
        <span class="cmd-result-section">${item.section}</span>
      </div>
    `).join('');

    results.querySelectorAll('.cmd-result-item').forEach(el => {
      el.addEventListener('mouseenter', () => {
        results.querySelectorAll('.cmd-result-item').forEach(e => e.classList.remove('selected'));
        el.classList.add('selected');
        selected = parseInt(el.dataset.idx);
      });
      el.addEventListener('click', () => navigate(el));
    });
  }

  function navigate(el) {
    const href = el.dataset.href;
    const stepId = el.dataset.step;
    close();
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        if (document.startViewTransition) {
          document.startViewTransition(() => { target.scrollIntoView({ behavior: 'instant', block: 'start' }); });
        } else {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // If workflow step, click it after scroll
        if (stepId) {
          setTimeout(() => {
            const stepEl = document.querySelector(`.wf-step[data-id="${stepId}"]`);
            if (stepEl) stepEl.click();
          }, 600);
        }
      }
    } else {
      window.location.href = href;
    }
  }

  input.addEventListener('input', () => render(input.value));

  input.addEventListener('keydown', e => {
    const items = results.querySelectorAll('.cmd-result-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selected = Math.min(selected + 1, items.length - 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selected = Math.max(selected - 1, 0);
    } else if (e.key === 'Enter') {
      if (items[selected]) navigate(items[selected]);
      return;
    } else if (e.key === 'Escape') {
      close(); return;
    }
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
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const duration = 1200;
  const step = ts => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        if (el.dataset.count) animateCounter(el, parseInt(el.dataset.count), el.dataset.suffix || '');
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => obs.observe(el));
}

// ===== ARCH NODE INTERACTION — context-aware highlights =====
function initArchInteraction() {
  document.querySelectorAll('.arch-node-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
      box.classList.add('node-active');
      // pulse the core
      document.querySelector('.arch-core').style.transform = 'scale(1.06)';
    });
    box.addEventListener('mouseleave', () => {
      box.classList.remove('node-active');
      document.querySelector('.arch-core').style.transform = '';
    });
  });
}

// ===== WORKFLOW PULSE =====
function initWorkflowPulse() {
  setTimeout(() => {
    const first = document.querySelector('.wf-step');
    if (first) first.click();
  }, 800);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
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
