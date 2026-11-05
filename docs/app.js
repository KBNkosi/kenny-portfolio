'use strict';

const needs = {
  connect: {
    title: 'Connect your website and business tools.',
    description: 'I build the connection that gets information from one place to another, using the connection options your tools support.',
    example: 'A website enquiry saved into your records so your team can follow up.',
    deliverables: ['A working connection for one agreed flow of information.', 'Checks for missing information and connection errors.', 'A walkthrough and setup notes for the finished connection.'],
    input: 'Tell me which tools you use, what information should move, and when. I’ll check the connection options and arrange any required access once we agree the scope.',
    evidence: 'Voice appointment system →', project: 'voice',
    boundary: 'Personal-project evidence: Vapi, FastAPI and PostgreSQL working together. Your tools and requirements need a separate review.'
  },
  interface: {
    title: 'Build a working web application.',
    description: 'I turn an agreed idea, design or prototype into working screens and features, including the connections behind them where needed.',
    example: 'A customer enquiry form and a screen where staff can view the submitted details.',
    deliverables: ['The screens and features we agree for a useful first version.', 'Layouts that work on desktop and mobile, with the required data connections.', 'Checks of the agreed user journey, plus a walkthrough and setup notes.'],
    input: 'Start with your goal and the steps people need to take. Share a design, example or existing application if you have one. We’ll work out the technical details and agree the scope together.',
    evidence: 'Nomad54 marketplace MVP →', project: 'nomad',
    boundary: 'Startup experience: made founder-provided screens functional and backend-connected. NeighborTrust adds independent frontend-prototype evidence.'
  },
  booking: {
    title: 'Build an appointment-booking workflow.',
    description: 'I build the steps that receive a booking request, check your availability rules, and save the agreed result. Voice integration can be included in the scope.',
    example: 'Check a requested time, suggest an alternative if it’s taken, and save a confirmed appointment.',
    deliverables: ['The agreed booking steps and information collection.', 'Availability checks, conflict handling and saved appointment records.', 'Checks of the booking flow, plus setup and handover notes.'],
    input: 'Explain your services, available times and the details you collect from customers. Mention any existing calendar or phone setup. We’ll agree which connections and running costs are needed.',
    evidence: 'Voice appointment system →', project: 'voice',
    boundary: 'The existing system is a personal project, not a live client service. Calendar, telephony and production requirements are scoped separately.'
  },
  fix: {
    title: 'Fix an incomplete or broken feature.',
    description: 'I investigate why a feature isn’t working and explain what needs to change. We agree a repair once the cause and scope are clear.',
    example: 'A page opens, but the information it should display never appears.',
    deliverables: ['A focused investigation and a plain-language explanation of the findings.', 'An agreed repair where the issue is within scope.', 'Checks of the affected feature and notes on any remaining work.'],
    input: 'Describe what you expect to happen, what goes wrong, and where it happens. Share screenshots or error messages if available. We can arrange access to the application and code for the investigation.',
    evidence: 'Career Recommendation System →', project: 'career',
    boundary: 'Team-project evidence: resolved a frontend–backend CORS issue. At Nomad54, resolved a FlutterFlow configuration issue causing blank screens.'
  }
};

const projects = {
  nomad: {
    category: 'Startup experience · May–August 2025', title: 'Nomad54: making the MVP work.',
    intro: 'A quotation-based B2B marketplace MVP, developed with a founder and a small remote team.',
    tags: ['FlutterFlow', 'Supabase', 'Interface implementation', 'Startup collaboration'],
    problem: 'The team needed functional marketplace screens and working backend connections as the MVP moved towards an investor presentation.',
    contribution: ['Built initial merchant and customer interfaces, then made founder-provided screens functional, responsive and connected to existing backend functionality.', 'Checked existing Supabase tables, fields and FlutterFlow calls while investigating screens that weren’t displaying data.', 'Resolved a FlutterFlow configuration issue causing blank screens, helping restore the application for demonstration.', 'Worked directly with the founder and remote team to translate product requirements into usable features.'],
    service: 'Implementing a feature within an existing product, connecting no-code interfaces to backend functionality, and troubleshooting across the interface and data layers.',
    scope: 'Startup MVP contribution using existing Supabase structures. My work focused on functional interfaces, backend connections and demonstration readiness within the founder’s wider product.',
    links: [], need: 'interface'
  },
  voice: {
    category: 'Personal project · Backend & voice integration', title: 'From a conversation to an appointment.',
    intro: 'A voice appointment system that connects Vapi to a Python backend and a PostgreSQL database.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Vapi'],
    problem: 'A booking conversation needs more than a response. It needs to check availability, handle conflicts, and distinguish a request from a confirmed appointment.',
    contribution: ['Configured Vapi and implemented the backend tools and booking workflows that connect voice requests to application logic.', 'Handled availability checks, appointment conflicts, alternative times and persistence of confirmed appointments.', 'Addressed timezone-aware and naive datetime handling in the booking flow.', 'Built checks around the backend behaviour; the project’s recorded validation included 48 passing tests.'],
    service: 'Connecting an external service to an API, implementing rules for a workflow, and storing useful records in a relational database.',
    scope: 'A personal project developed with AI assistance, with 48 passing tests recorded during development. Client deployment, ongoing operation and third-party service costs would need their own scope.',
    links: [['Watch the project demo', 'https://youtu.be/SKPvAFXAOqU'], ['View source on GitHub', 'https://github.com/KBNkosi/ai-booking-system']], need: 'booking'
  },
  career: {
    category: 'Six-person university team project', title: 'Career Recommendation System.',
    intro: 'A Flask and React application that combines structured education information and recommendation logic to help users explore career directions.',
    tags: ['Python', 'Flask', 'React', 'Data preparation', 'DISC logic'],
    problem: 'The application needed usable education and survey data, relevant recommendation logic, and a frontend and backend that could communicate successfully.',
    contribution: ['Gathered, cleaned and structured education and survey data, addressing missing or inconsistent information.', 'Contributed part of the recommendation logic and adapted the personality approach towards the DISC model.', 'Diagnosed and resolved a CORS preflight issue affecting frontend–backend communication.', 'Collaborated within a six-member team on the wider application.'],
    service: 'Preparing data for an application, translating rules into software behaviour, and investigating integration issues in a team codebase.',
    scope: 'A shared six-person team project. My individual contribution covered data preparation, part of the recommendation logic and integration troubleshooting.',
    links: [['Open project site', 'https://career-match-system.netlify.app/'], ['View source on GitHub', 'https://github.com/KBNkosi/career-recommendation-system']], need: 'fix'
  },
  neighbor: {
    category: 'Independent frontend prototype', title: 'NeighborTrust: a usable discovery journey.',
    intro: 'An interactive frontend prototype for finding and engaging with trusted local service providers.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Frontend prototype'],
    problem: 'People exploring local services need to find relevant providers, view useful profile information, and navigate a clear engagement journey.',
    contribution: ['Built the frontend prototype and its navigable service-discovery journey.', 'Implemented search and filtering interactions alongside provider profiles, ratings and review interfaces.', 'Created upload and engagement interactions as part of the prototype experience.'],
    service: 'Turning an idea into an interactive frontend, building responsive interface components, and making a proposed user journey tangible before backend work is commissioned.',
    scope: 'A frontend prototype covering search, upload and engagement interactions. Backend integration, production operation and provider verification remain separate work.',
    links: [['Explore prototype', 'https://community-service-marketplace.vercel.app/'], ['View source on GitHub', 'https://github.com/KBNkosi/NeighborTrust']], need: 'interface'
  }
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
let selectedNeed = 'connect';
let activeProject = null;

function renderNeed(key) {
  selectedNeed = key;
  const item = needs[key];
  $$('[role="tab"]').forEach(tab => {
    const selected = tab.dataset.need === key;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    tab.querySelector('.tab-action').textContent = selected ? 'Selected' : 'View details →';
  });
  $('#need-panel').setAttribute('aria-labelledby', 'tab-' + key);
  $('#need-title').textContent = item.title;
  $('#need-description').textContent = item.description;
  $('#need-example').textContent = item.example;
  $('#need-input').textContent = item.input;
  $('#need-deliverables').replaceChildren(...item.deliverables.map(text => {
    const li = document.createElement('li'); li.textContent = text; return li;
  }));
  $('#need-evidence').textContent = item.evidence;
  $('#need-boundary').textContent = item.boundary;
}

$$('[role="tab"]').forEach((tab, index, tabs) => {
  tab.addEventListener('click', event => {
    renderNeed(tab.dataset.need);
    if (event.detail > 0 && matchMedia('(max-width: 600px)').matches) {
      $('#need-panel').focus({preventScroll:true});
      $('#need-panel').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
    }
  });
  tab.addEventListener('keydown', event => {
    const offsets = {ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1};
    let next;
    if (event.key in offsets) next = (index + offsets[event.key] + tabs.length) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else return;
    event.preventDefault(); renderNeed(tabs[next].dataset.need); tabs[next].focus();
  });
});

function goToBrief(key) {
  $('#project-need').value = key;
  updateBrief();
  $('#brief').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  $('#project-outcome').focus({preventScroll:true});
}
$('#choose-scope').addEventListener('click', () => goToBrief(selectedNeed));

const dialog = $('#case-dialog');
function openCase(key) {
  activeProject = key;
  const project = projects[key];
  $('#case-category').textContent = project.category;
  $('#case-title').textContent = project.title;
  $('#case-intro').textContent = project.intro;
  $('#case-problem').textContent = project.problem;
  $('#case-service').textContent = project.service;
  $('#case-scope').textContent = project.scope;
  $('#case-tags').replaceChildren(...project.tags.map(text => {
    const tag = document.createElement('span'); tag.textContent = text; return tag;
  }));
  $('#case-contribution').replaceChildren(...project.contribution.map(text => {
    const li = document.createElement('li'); li.textContent = text; return li;
  }));
  $('#case-links').replaceChildren(...project.links.map(([text, url]) => {
    const link = document.createElement('a'); link.textContent = text + ' ↗'; link.href = url;
    link.target = '_blank'; link.rel = 'noopener noreferrer'; return link;
  }));
  dialog.showModal(); dialog.scrollTop = 0;
}
$$('[data-case]').forEach(button => button.addEventListener('click', () => openCase(button.dataset.case)));
$('#need-evidence').addEventListener('click', () => openCase(needs[selectedNeed].project));
$('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
$('#case-discuss').addEventListener('click', () => { const key = projects[activeProject].need; dialog.close(); goToBrief(key); });

const form = $('#brief-form');
function buildBrief() {
  const selected = $('#project-need').selectedOptions[0].textContent;
  const outcome = $('#project-outcome').value.trim();
  const tools = $('#project-tools').value.trim();
  const constraints = $('#project-constraints').value.trim();
  return ['Hi Kenny,', '', 'I’d like to discuss a paid implementation project.', '',
    'Enquiry: ' + $('#project-role').value,
    'Help needed: ' + selected, '',
    'Desired result: ' + (outcome || '[Describe the result you need]'),
    tools ? '\nExisting tools / context: ' + tools : '',
    constraints ? '\nBudget / timing / constraints: ' + constraints : '', '',
    'Could we review the requirements and agree a useful first scope?'
  ].filter((line, index, all) => line !== '' || all[index - 1] !== '').join('\n');
}
function updateBrief() { $('#project-outcome').setCustomValidity(''); $('#brief-output').textContent = buildBrief(); $('#brief-status').textContent = ''; }
function validateBrief() {
  $('#project-outcome').setCustomValidity($('#project-outcome').value.trim() ? '' : 'Describe the result you need before creating a brief.');
  return form.reportValidity();
}
form.addEventListener('input', updateBrief);
form.addEventListener('change', updateBrief);
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!validateBrief()) return;
  const subject = 'Implementation enquiry — ' + $('#project-need').selectedOptions[0].textContent;
  const url = 'mailto:nkosikenny9@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(buildBrief());
  window.location.href = url;
  $('#brief-status').textContent = 'Email draft requested. If no email app opened, copy the brief and email it to nkosikenny9@gmail.com.';
});
$('#copy-brief').addEventListener('click', async () => {
  if (!validateBrief()) return;
  try {
    await navigator.clipboard.writeText(buildBrief());
    $('#brief-status').textContent = 'Brief copied. Paste it into an email to nkosikenny9@gmail.com.';
  } catch {
    $('.brief-preview').open = true;
    const range = document.createRange(); range.selectNodeContents($('#brief-output'));
    const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
    $('#brief-status').textContent = 'Copy the selected brief with Ctrl+C (or Command+C), then paste it into your email.';
  }
});

renderNeed(selectedNeed);
updateBrief();
