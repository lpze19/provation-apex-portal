// ===== WORKFLOW DATA =====
const workflowSteps = [
  {
    id: 'clinic', icon: '🏥', label: 'Clinic', stepNum: 'Step 01',
    title: 'Clinic Arrival',
    body: 'The patient arrives at the clinic. This is the entry point of the Provation Apex workflow. The clinical team initiates the pre-registration process, confirming patient identity and reason for visit.',
    tags: ['Front Desk', 'Patient Arrival', 'Check-In'], milestone: null
  },
  {
    id: 'prereg', icon: '📝', label: 'Pre-Reg', stepNum: 'Step 02',
    title: 'Pre-Registration',
    body: 'Patient demographics, insurance information, and procedure details are pre-registered in the system. ADT (Admit, Discharge, Transfer) messages are generated via HL7 interface, automatically populating Provation Apex with patient data — eliminating manual entry.',
    tags: ['ADT Interface', 'HL7', 'Demographics', 'Insurance'], milestone: null
  },
  {
    id: 'preop', icon: '🩺', label: 'Pre-Op', stepNum: 'Step 03',
    title: 'Pre-Operative Assessment',
    body: 'The clinical team conducts the pre-operative assessment. Vital signs, allergies, medications, and consent documentation are reviewed and confirmed. The patient is prepared for the procedure.',
    tags: ['Clinical Assessment', 'Consent', 'Vitals', 'Nursing'], milestone: null
  },
  {
    id: 'reg', icon: '✅', label: 'Registration', stepNum: 'Step 04',
    title: 'Full Registration',
    body: 'The patient is formally registered for the procedure. The encounter is confirmed in the system, linking the patient to the scheduled procedure. Scheduling messages (SIU) from the scheduling system are received and matched to the Provation Apex case.',
    tags: ['SIU Message', 'Encounter', 'Scheduling'], milestone: null
  },
  {
    id: 'room', icon: '🚪', label: 'Placed in Room', stepNum: 'Step 05',
    title: 'Patient Placed in Room',
    body: 'The patient is physically placed in the procedure room. The room assignment is recorded in the system, and the clinical team begins preparing the environment for the procedure.',
    tags: ['Room Assignment', 'Procedure Room', 'Clinical Staff'], milestone: null
  },
  {
    id: 'case-open', icon: '💻', label: 'Case Opened', stepNum: 'Step 06',
    title: 'Case Opened in Provation Apex',
    body: 'A case is formally opened in Provation Apex. This is the critical system activation point — the case record is created, linking the patient encounter to the documentation workflow. All subsequent clinical activity is captured under this case.',
    tags: ['Case Creation', 'Provation Apex', 'Documentation Start'],
    milestone: '🔑 System Activation Point'
  },
  {
    id: 'bed', icon: '🛏️', label: 'Bed Assigned', stepNum: 'Step 07',
    title: 'Bed Assignment',
    body: 'A specific bed or procedure station is assigned to the patient within the case record. This ensures accurate location tracking and ties the physical setup to the digital case documentation.',
    tags: ['Bed Management', 'Location Tracking'], milestone: null
  },
  {
    id: 'physician', icon: '👨‍⚕️', label: 'Physician Assigned', stepNum: 'Step 08',
    title: 'Physician Assignment',
    body: 'The performing physician is assigned to the case in Provation Apex. This assignment is critical — it establishes accountability, enables physician-specific documentation templates, and prepares the case for the physician\'s electronic signature at completion.',
    tags: ['Physician', 'Assignment', 'Accountability'], milestone: null
  },
  {
    id: 'scope', icon: '🔬', label: 'Scope Selected', stepNum: 'Step 09',
    title: 'Scope Selection',
    body: 'The specific endoscope to be used is selected and assigned to the case. Provation Apex supports Olympus CV-180/190 and Pentax IMAGINA systems. Scope selection enables device-specific image capture and ensures proper equipment tracking and reprocessing documentation.',
    tags: ['Olympus', 'Pentax', 'Equipment', 'Scope Tracking'],
    milestone: '📸 Image Capture Now Enabled'
  },
  {
    id: 'scope-in', icon: '⏱️', label: 'Scope In', stepNum: 'Step 10',
    title: 'Scope In — Procedure Begins',
    body: 'The scope insertion time is recorded, marking the official start of the procedure. This timestamp is clinically and legally significant — it anchors the procedure timeline and triggers the active documentation phase. Images and video can now be captured in real time.',
    tags: ['Timestamp', 'Procedure Start', 'Image Capture', 'Real-Time'],
    milestone: '⏱️ Procedure Timer Started'
  },
  {
    id: 'section1', icon: '📍', label: 'Next Section', stepNum: 'Step 11',
    title: 'Anatomical Section Documentation',
    body: 'As the scope advances through anatomical sections, the physician or clinical staff documents findings at each section. Provation Apex provides structured templates for each anatomical location, ensuring consistent and complete documentation. Images are captured and tagged to the relevant section.',
    tags: ['Findings', 'Anatomy', 'Structured Documentation', 'Images'], milestone: null
  },
  {
    id: 'section2', icon: '📍', label: 'Next Section', stepNum: 'Step 12',
    title: 'Continued Section Documentation',
    body: 'Documentation continues as the procedure progresses through additional anatomical sections. Each section captures findings, measurements, and images. The structured workflow ensures no section is missed and all clinical observations are recorded in real time.',
    tags: ['Continued Documentation', 'Findings', 'Measurements'], milestone: null
  },
  {
    id: 'scope-out', icon: '🔚', label: 'Scope Out', stepNum: 'Step 13',
    title: 'Scope Out — Procedure Ends',
    body: 'The scope is withdrawn and the scope-out time is recorded. This marks the official end of the procedure. The total procedure duration is automatically calculated. The case transitions from active procedure to documentation completion phase.',
    tags: ['Procedure End', 'Timestamp', 'Duration Calculated'],
    milestone: '🔚 Procedure Complete'
  },
  {
    id: 'notes', icon: '📋', label: 'Case Notes', stepNum: 'Step 14',
    title: 'Case Notes & Final Documentation',
    body: 'The physician and clinical staff complete all case notes, including procedure findings, impressions, recommendations, and any complications. Specimen labels are generated if applicable. Charges are captured based on the documented procedure codes. The case is reviewed for completeness before signature.',
    tags: ['Case Notes', 'Findings', 'Charges', 'Specimen Labels', 'Billing'], milestone: null
  },
  {
    id: 'sign', icon: '✍️', label: 'Physician Signs', stepNum: 'Step 15',
    title: 'Physician Electronic Signature',
    body: 'The physician reviews the complete case documentation and applies their electronic signature. This is the legal finalization of the procedure record. The signature is timestamped and tied to the physician\'s credentials. Once signed, the document is locked and cannot be altered.',
    tags: ['E-Signature', 'Legal Finalization', 'Physician', 'Locked Record'],
    milestone: '✍️ Document Legally Finalized'
  },
  {
    id: 'chart', icon: '📤', label: 'Sent to Chart', stepNum: 'Step 16',
    title: 'Automatic Chart Distribution',
    body: 'Upon physician signature, Provation Apex automatically transmits the completed procedure document to the patient\'s EMR chart. No manual intervention is required. The document becomes immediately available to the care team, billing department, and any downstream consumers — completing the clinical documentation loop.',
    tags: ['EMR', 'Auto-Distribution', 'HL7', 'Chart Complete', 'Billing'],
    milestone: '🎯 Documentation Loop Complete'
  }
];

// ===== RESOURCES DATA =====
// file: path relative to docs/ folder — place actual files in provation-apex-portal/docs/
const resources = [
  {
    category: 'Clinical & Workflow', icon: '🏥',
    items: [
      { name: 'ADT Interface Specifications',       type: 'PDF', file: 'docs/ADT Interface Specs.pdf' },
      { name: 'SIU Scheduling Message Spec',        type: 'PDF', file: 'docs/SIU Scheduling Message Spec APEX.pdf' },
      { name: 'ORU Apex Procedure Documentation',   type: 'PDF', file: 'docs/ORU Apex Procedure Documentation.pdf' },
      { name: 'Provation Workflow Overview',        type: 'TXT', file: 'docs/Provation work flow.txt' },
      { name: 'Specimen Collection Workflow',       type: 'DOC', file: 'docs/Provation apex specimen collection workflow.docx' },
    ]
  },
  {
    category: 'Architecture & Technical', icon: '⚙️',
    items: [
      { name: 'Apex Architecture Rev3',             type: 'PDF', file: 'docs/Apex Architecture Rev3.pdf' },
      { name: 'Apex Technical Specifications v15',  type: 'PDF', file: 'docs/Apex TechSpecsV15.pdf' },
      { name: 'Azure AD Setup QRG v3',              type: 'PDF', file: 'docs/Azure AD Setup QRG v3.2021.pdf' },
      { name: 'Offline Mode Documentation',         type: 'PDF', file: 'docs/Offline Mode.pdf' },
      { name: 'MD-Reports to Apex Data Migration',  type: 'PDF', file: 'docs/MD-Reports to Provation Apex Data Migration.pdf' },
    ]
  },
  {
    category: 'Security & Compliance', icon: '🔒',
    items: [
      { name: 'Cybersecurity Fact Sheet',           type: 'PDF', file: 'docs/Provation Apex Cybersecurity Fast Sheet.pdf' },
      { name: 'DHR Provider Documentation Memo',   type: 'DOC', file: 'docs/DHR-HEALTH-MEMO-Provider documentation.docx' },
      { name: 'Demarcation Document',               type: 'DOC', file: 'docs/Demarcation.docx' },
      { name: 'Provation Errors Log',               type: 'DOC', file: 'docs/Provation errors.docx' },
    ]
  },
  {
    category: 'Go-Live & Readiness', icon: '🚀',
    items: [
      { name: 'Change Management Go-Live',          type: 'XLS', file: 'docs/Change Management Go-Live.xlsx' },
      { name: 'Provation Go-Live Workbook',         type: 'XLS', file: 'docs/Provation Go Live Workbook.xlsx' },
      { name: 'Ready for PV Apex Checklist',        type: 'PDF', file: 'docs/Ready for PV Apex Checklist.pdf' },
      { name: 'Go-Live Week Documentation',         type: 'DOC', file: 'docs/Provation Go Live Week.docx' },
      { name: 'Hardware Testing Phase 1',           type: 'PDF', file: 'docs/Provation Apex Customer Hardware Testing - Phase 1.pdf' },
      { name: 'Hardware Testing Phase 2',           type: 'PDF', file: 'docs/Provation Apex Customer Hardware Testing - Phase 2.pdf' },
    ]
  },
  {
    category: 'SOPs by Role', icon: '📖',
    items: [
      { name: 'SOP — End User',                    type: 'DOC', file: 'docs/_SOP End user Example.docx' },
      { name: 'SOP — Administrator',               type: 'DOC', file: 'docs/_SOP Administrator Example.docx' },
      { name: 'SOP — Helpdesk',                    type: 'DOC', file: 'docs/_SOP Helpdesk Example.docx' },
      { name: 'Welcome to Provation Apex',         type: 'DOC', file: 'docs/DHRXT Welcome to Your Provation Apex.docx' },
      { name: 'Apex Login & Training Guide',       type: 'PDF', file: 'docs/Apex log in and training DHRXT01.pdf' },
      { name: 'Apex Support Flyer',                type: 'PDF', file: 'docs/Apex Support Flyer DHRXT01.pdf' },
    ]
  },
  {
    category: 'Equipment & Infrastructure', icon: '🔧',
    items: [
      { name: 'Olympus CV-180 Cabling Diagram',    type: 'PDF', file: 'docs/Olympus CV-180 Cabling Diagram.pdf' },
      { name: 'Olympus CV-190 Cabling Diagram',    type: 'PDF', file: 'docs/Olympus CV-190 Cabling Diagram.pdf' },
      { name: 'Pentax IMAGINA Wiring Diagrams',    type: 'PDF', file: 'docs/Pentax IMAGINA Wiring Diagrams.pdf' },
      { name: 'Current Provation Workstations',    type: 'XLS', file: 'docs/Current Provation workstations.xlsx' },
      { name: 'Transfer Images from Olympus',      type: 'DOC', file: 'docs/Transfer images directly from Olympus.docx' },
    ]
  }
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
  const milestoneHtml = step.milestone
    ? `<div class="detail-milestone">${step.milestone}</div>` : '';

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
      <a class="res-item" href="${item.file}" target="_blank" rel="noopener" title="Open ${item.name}">
        <span class="res-item-icon">${typeIcon[item.type] || '📄'}</span>
        <span class="res-item-name">${item.name}</span>
        <span class="res-item-type">${item.type}</span>
        <span class="res-item-open">↗</span>
      </a>
    `).join('');

    const card = document.createElement('div');
    card.className = 'res-category';
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

// ===== INTERSECTION OBSERVER — scroll animations =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.ov-card, .res-category, .spec-item, .arch-node-box, .hero-card')
    .forEach((el, i) => {
      el.classList.add('fade-up');
      el.style.transitionDelay = `${(i % 4) * 80}ms`;
      observer.observe(el);
    });
}

// ===== NAVBAR SCROLL =====
function initNavScroll() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 20
      ? 'rgba(10, 22, 40, 0.98)'
      : 'rgba(10, 22, 40, 0.95)';
  });
}

// ===== ANIMATED COUNTER =====
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const duration = 1200;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const val = el.dataset.count;
        const suffix = el.dataset.suffix || '';
        if (val) animateCounter(el, parseInt(val), suffix);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
}

// ===== PULSE ANIMATION on workflow nodes =====
function initWorkflowPulse() {
  // Auto-highlight first step on load after a short delay
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
  initScrollAnimations();
  initCounters();
  initWorkflowPulse();
});
