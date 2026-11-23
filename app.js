(() => {
  const DATA = window.APP_DATA;
  const STORAGE_KEY = 'lamarti_pdhi_app_v1';
  const THUMB_CACHE_KEY = 'lamarti_wiki_thumbs_v1';

  const POLE_ICONS = {
    factory: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20M4 20V10l6 4V10l6 4V4h4v16"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
    state: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M4 18h16M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 3l9 5H3l9-5Z"/></svg>',
    community: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
    chip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>',
    people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="7" r="3.5"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20v-1a5 5 0 0 1 10 0v1M14 20v-1a4 4 0 0 1 7 0v1"/></svg>',
    compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
    megaphone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 11 18-5v12L3 14v-3Z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>'
  };

  let thumbCache = {};
  try {
    thumbCache = JSON.parse(localStorage.getItem(THUMB_CACHE_KEY) || '{}');
  } catch (e) {
    thumbCache = {};
  }

  function getInitials(name) {
    return name
      .replace(/["'()]/g, '')
      .split(/\s+/)
      .filter((w) => w.length > 2 || w === 'Che')
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join('');
  }

  function fetchProfilePhoto(profile, imgEl) {
    if (!profile.wiki || !imgEl) return;
    if (thumbCache[profile.wiki]) {
      imgEl.src = thumbCache[profile.wiki];
      imgEl.classList.remove('hidden');
      return;
    }
    fetch(`https://es.wikipedia.org/api/rest_v1/page/summary/${profile.wiki}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((json) => {
        const src = json?.thumbnail?.source;
        if (src) {
          thumbCache[profile.wiki] = src;
          try {
            localStorage.setItem(THUMB_CACHE_KEY, JSON.stringify(thumbCache));
          } catch (e) {}
          imgEl.src = src;
          imgEl.classList.remove('hidden');
        }
      })
      .catch(() => {});
  }

  const PLENARIO_UNLOCK_AT = new Date('2026-12-10T00:00:00-03:00').getTime();
  function isPlenarioUnlocked() {
    return Date.now() >= PLENARIO_UNLOCK_AT;
  }

  const state = {
    section: 'hub', // 'hub' | 'formacion' | 'plenario'
    activeTab: 'forms-relevamiento',
    quizIndex: 0,
    answers: new Array(DATA.questions.length).fill(null),
    quizCompleted: false,
    gameIndex: 0,
    gameScore: 0,
    gameAnswered: false,
    eduFilter: 'all',
    groupFilter: 'all',
    groupNotes: {},
    formsNotes: { top: '', split: '', missing: '' }
  };

  // Load saved state
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (saved) {
      if (Array.isArray(saved.answers) && saved.answers.length === DATA.questions.length) {
        state.answers = saved.answers;
      }
      state.quizCompleted = Boolean(saved.quizCompleted);
      state.groupNotes = saved.groupNotes || {};
      state.formsNotes = saved.formsNotes || { top: '', split: '', missing: '' };
    }
  } catch (e) {
    console.warn('No se pudo cargar estado previo', e);
  }

  function saveState() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          answers: state.answers,
          quizCompleted: state.quizCompleted,
          groupNotes: state.groupNotes,
          formsNotes: state.formsNotes
        })
      );
    } catch (e) {
      // ignore
    }
  }

  function showToast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.remove('hidden');
    clearTimeout(el._timer);
    el._timer = setTimeout(() => el.classList.add('hidden'), 2600);
  }

  // HUB & SUBPAGE NAVIGATION
  function updatePlenarioLockUI() {
    const unlocked = isPlenarioUnlocked();
    const card = document.getElementById('hub-card-plenario');
    const badge = document.getElementById('plenario-badge');
    const title = document.getElementById('plenario-title');
    const btn = document.getElementById('btn-enter-plenario');
    if (!card || !badge || !title || !btn) return;

    if (unlocked) {
      card.classList.remove('hub-card-locked');
      card.classList.add('hub-card-active');
      badge.className = 'hub-badge active';
      badge.textContent = 'Activa';
      title.textContent = 'Plenario fin de año';
      btn.className = 'btn btn-navy btn-lg';
      btn.textContent = 'Entrar al Plenario →';
    } else {
      card.classList.add('hub-card-locked');
      badge.className = 'hub-badge locked';
      badge.textContent = '🔒 Próximamente';
      title.textContent = 'Plenario fin de año (Próximamente)';
      btn.className = 'btn btn-outline btn-lg';
      btn.textContent = 'Próximamente';
    }
  }

  function enterSection(section) {
    if (section === 'plenario' && !isPlenarioUnlocked()) {
      showToast('Disponible próximamente para el plenario de fin de año.');
      return;
    }
    state.section = section;
    const hubEl = document.getElementById('hub-view');
    const navForm = document.getElementById('nav-formacion');
    const navPlen = document.getElementById('nav-plenario');
    const subEl = document.getElementById('topbar-sub');

    if (section === 'hub') {
      hubEl.classList.remove('hidden');
      navForm.classList.add('hidden');
      navPlen.classList.add('hidden');
      document.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'));
      if (subEl) subEl.textContent = 'Elegí la instancia de formación o plenario';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    hubEl.classList.add('hidden');
    if (section === 'formacion') {
      navForm.classList.remove('hidden');
      navPlen.classList.add('hidden');
      if (subEl) subEl.textContent = 'Formación 23/11 · Profesorados e Instituciones de Formación Docente';
      switchTab('forms-relevamiento');
    } else if (section === 'plenario') {
      navForm.classList.add('hidden');
      navPlen.classList.remove('hidden');
      if (subEl) subEl.textContent = 'Plenario fin de año · Patria Grande & PDHI';
      switchTab('axes');
    }
  }

  function switchTab(tabId) {
    state.activeTab = tabId;
    document.querySelectorAll('.step-btn[data-tab]').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    document.querySelectorAll('.tab-panel').forEach((panel) => {
      panel.classList.toggle('active', panel.id === `tab-${tabId}`);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.getElementById('btn-enter-formacion')?.addEventListener('click', () => enterSection('formacion'));
  document.getElementById('btn-enter-plenario')?.addEventListener('click', () => enterSection('plenario'));
  document.getElementById('brand-home-btn')?.addEventListener('click', () => enterSection('hub'));
  document.querySelectorAll('[data-back-hub]').forEach((btn) => {
    btn.addEventListener('click', () => enterSection('hub'));
  });

  document.querySelectorAll('.step-btn[data-tab]').forEach((btn) => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  document.querySelectorAll('[data-goto]').forEach((btn) => {
    btn.addEventListener('click', () => switchTab(btn.dataset.goto));
  });

  updatePlenarioLockUI();

  // ==========================================
  // MODULE 1: 12 AXES PATRIA GRANDE
  // ==========================================
  const elIntro = document.getElementById('axes-intro');
  const elQuiz = document.getElementById('axes-quiz');
  const elResults = document.getElementById('axes-results');
  const btnViewSaved = document.getElementById('btn-view-saved-results');

  if (state.quizCompleted) {
    btnViewSaved.classList.remove('hidden');
  }

  document.getElementById('btn-start-quiz').addEventListener('click', () => {
    state.quizIndex = 0;
    state.answers.fill(null);
    state.quizCompleted = false;
    saveState();
    elIntro.classList.add('hidden');
    elResults.classList.add('hidden');
    elQuiz.classList.remove('hidden');
    renderQuestion();
  });

  btnViewSaved.addEventListener('click', () => {
    elIntro.classList.add('hidden');
    elQuiz.classList.add('hidden');
    elResults.classList.remove('hidden');
    renderResults();
  });

  document.getElementById('btn-retake-quiz').addEventListener('click', () => {
    state.quizIndex = 0;
    state.answers.fill(null);
    state.quizCompleted = false;
    saveState();
    elResults.classList.add('hidden');
    elQuiz.classList.remove('hidden');
    renderQuestion();
  });

  document.getElementById('btn-reset-quiz').addEventListener('click', () => {
    state.quizIndex = 0;
    state.answers.fill(null);
    renderQuestion();
  });

  document.getElementById('btn-prev-q').addEventListener('click', () => {
    if (state.quizIndex > 0) {
      state.quizIndex--;
      renderQuestion();
    }
  });

  function advanceOrFinish() {
    if (state.quizIndex < DATA.questions.length - 1) {
      state.quizIndex++;
      saveState();
      renderQuestion();
    } else {
      state.quizCompleted = true;
      saveState();
      btnViewSaved.classList.remove('hidden');
      elQuiz.classList.add('hidden');
      elResults.classList.remove('hidden');
      renderResults();
    }
  }

  document.getElementById('btn-next-q').addEventListener('click', () => {
    if (state.answers[state.quizIndex] === null) {
      state.answers[state.quizIndex] = 0; // neutral si saltea
    }
    advanceOrFinish();
  });

  document.querySelectorAll('.likert-btn-clean').forEach((btn) => {
    btn.addEventListener('click', () => {
      const val = Number(btn.dataset.value);
      state.answers[state.quizIndex] = val;
      saveState();
      const autoAdv = document.getElementById('chk-auto-advance')?.checked;
      if (autoAdv) {
        advanceOrFinish();
      } else {
        renderQuestion();
      }
    });
  });

  function buildRadarSVG(values6, accentColor = '#178548') {
    const cx = 140;
    const cy = 135;
    const maxR = 88;
    const n = 6;
    const labels = ['Desarrollo', 'Estado/Com.', 'Patria Gde.', 'Escuela', 'Tecnología', 'Método'];

    const pt = (idx, r) => {
      const ang = -Math.PI / 2 + (idx * 2 * Math.PI) / n;
      return [cx + r * Math.cos(ang), cy + r * Math.sin(ang)];
    };

    const rings = [0.25, 0.5, 0.75, 1]
      .map((f) => {
        const pts = Array.from({ length: n }, (_, i) => pt(i, maxR * f).map((v) => v.toFixed(1)).join(',')).join(' ');
        return `<polygon points="${pts}" fill="none" stroke="#dce2ec" stroke-width="1" />`;
      })
      .join('');

    const spokes = Array.from({ length: n }, (_, i) => {
      const [x, y] = pt(i, maxR);
      const [lx, ly] = pt(i, maxR + 20);
      return `
        <line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#dce2ec" stroke-width="1" />
        <text x="${lx.toFixed(1)}" y="${(ly + 3).toFixed(1)}" text-anchor="middle" font-size="9.5" font-weight="700" fill="#525d73">${labels[i]}</text>
      `;
    }).join('');

    const dataPts = values6.map((v, i) => pt(i, (Math.max(12, v) / 100) * maxR));
    const polyStr = dataPts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
    const dots = dataPts
      .map(([x, y]) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" fill="${accentColor}" stroke="#fff" stroke-width="1.5" />`)
      .join('');

    return `
      <svg viewBox="0 0 280 270" aria-label="Gráfico radar de 6 ejes">
        ${rings}
        ${spokes}
        <polygon points="${polyStr}" fill="${accentColor}" fill-opacity="0.22" stroke="${accentColor}" stroke-width="2.2" />
        <circle cx="${cx}" cy="${cy}" r="3" fill="#11223a" />
        ${dots}
      </svg>
    `;
  }

  // Hero radar presets & 01 / EL MODELO explorer
  const HERO_PRESETS = [
    { vec: [24, 22, 82, 28, 36, 20], axisIdx: 0, title: 'Perfil: Pedagogía Popular & Periferias', score: 78 },
    { vec: [84, 86, 48, 66, 72, 82], axisIdx: 1, title: 'Perfil: Estado Planificador & Industria', score: 85 },
    { vec: [54, 56, 62, 50, 64, 52], axisIdx: 5, title: 'Perfil: Síntesis PDHI & La Martí', score: 62 }
  ];

  function renderHeroRadar(presetIdx) {
    const p = HERO_PRESETS[presetIdx] || HERO_PRESETS[0];
    const wrap = document.getElementById('hero-radar-svg-wrap');
    const footer = document.getElementById('hero-radar-footer');
    if (wrap) wrap.innerHTML = buildRadarSVG(p.vec);
    if (footer) {
      footer.innerHTML = `
        <strong>${p.title}</strong>
        <span class="pill">Afinidad ${p.score}%</span>
      `;
    }
  }

  document.querySelectorAll('#hero-radar-tabs .radar-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('#hero-radar-tabs .radar-tab').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      renderHeroRadar(Number(tab.dataset.preset));
    });
  });
  renderHeroRadar(0);

  let selectedModelIdx = 0;
  function renderModelExplorer() {
    const listEl = document.getElementById('axes-selector-list');
    const focusEl = document.getElementById('axis-focus-card');
    if (!listEl || !focusEl) return;

    listEl.innerHTML = DATA.axes
      .map(
        (ax, idx) => `
        <button class="axis-sel-btn ${idx === selectedModelIdx ? 'active' : ''}" data-ax-idx="${idx}">
          <span class="axis-sel-num">0${idx + 1}</span>
          <span>${ax.name}</span>
        </button>
      `
      )
      .join('');

    listEl.querySelectorAll('.axis-sel-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        selectedModelIdx = Number(btn.dataset.axIdx);
        renderModelExplorer();
      });
    });

    const ax = DATA.axes[selectedModelIdx];
    const firstQ = DATA.questions.find((q) => q.axis === ax.id);
    focusEl.innerHTML = `
      <div class="focus-watermark">0${selectedModelIdx + 1}</div>
      <div class="eyebrow">12 AXES / EN FOCO</div>
      <h3 style="font-size:1.55rem; color:#11223a; margin-bottom:0.65rem;">${ax.name}</h3>
      <p style="color:var(--muted); margin:0;">“${firstQ ? firstQ.text : ''}”</p>
      <div class="focus-spectrum">
        <span style="color:${ax.leftColor}">${ax.leftName}</span>
        <div class="focus-line" style="background: linear-gradient(90deg, ${ax.leftColor}, ${ax.rightColor});"></div>
        <span style="color:${ax.rightColor}; text-align:right;">${ax.rightName}</span>
      </div>
    `;
  }
  renderModelExplorer();

  function renderQuestion() {
    const q = DATA.questions[state.quizIndex];
    const axisObj = DATA.axes.find((a) => a.id === q.axis);
    const total = DATA.questions.length;
    const answeredCount = state.answers.filter((a) => a !== null).length;
    const pct = Math.round((answeredCount / total) * 100);

    document.getElementById('quiz-progress-text').textContent = `Pregunta ${state.quizIndex + 1} de ${total}`;
    document.getElementById('quiz-pct-text').textContent = `${pct}% completo`;
    document.getElementById('quiz-watermark').textContent = String(state.quizIndex + 1).padStart(2, '0');

    const pillEl = document.getElementById('quiz-axis-pill');
    pillEl.style.background = `${axisObj.leftColor}18`;
    pillEl.style.color = axisObj.leftColor;
    pillEl.innerHTML = `${POLE_ICONS[axisObj.leftIcon] || ''}<span>${axisObj.name}</span>`;

    // 12-segment progress bar (2 questions per segment)
    const segsEl = document.getElementById('quiz-segments');
    const currentSeg = Math.floor(state.quizIndex / 2);
    segsEl.innerHTML = Array.from({ length: 12 }, (_, i) => {
      let cls = 'quiz-seg';
      if (i < currentSeg) cls += ' done';
      else if (i === currentSeg) cls += ' current';
      return `<div class="${cls}"></div>`;
    }).join('');

    const wrap = document.getElementById('quiz-question-wrap');
    if (wrap) {
      wrap.classList.remove('question-animate');
      void wrap.offsetWidth;
      wrap.classList.add('question-animate');
    }
    document.getElementById('quiz-question-text').textContent = q.text;
    document.getElementById('btn-prev-q').disabled = state.quizIndex === 0;
    document.getElementById('btn-next-q').textContent = state.quizIndex === total - 1 ? 'Ver resultados →' : 'Próximo →';

    const currentAns = state.answers[state.quizIndex];
    document.querySelectorAll('.likert-btn-clean').forEach((b) => {
      b.classList.toggle('selected', Number(b.dataset.value) === currentAns);
    });
  }

  // Keyboard shortcuts 1-5 and ArrowLeft when quiz is visible
  document.addEventListener('keydown', (e) => {
    if (state.activeTab !== 'axes' || elQuiz.classList.contains('hidden')) return;
    const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, '5': 4 };
    if (e.key in keyMap) {
      const btns = document.querySelectorAll('.likert-btn-clean');
      btns[keyMap[e.key]]?.click();
    } else if (e.key === 'ArrowLeft' && state.quizIndex > 0) {
      document.getElementById('btn-prev-q').click();
    }
  });

  function computeAxisScores() {
    return DATA.axes.map((axis) => {
      let raw = 0;
      let maxAbs = 0;
      DATA.questions.forEach((q, idx) => {
        if (q.axis === axis.id) {
          const ans = state.answers[idx] || 0;
          raw += ans * q.direction;
          maxAbs += 2; // max value per question is 2
        }
      });
      // Map [-maxAbs, +maxAbs] to [0, 100] for left pole
      const leftPct = Math.round(((raw + maxAbs) / (2 * maxAbs)) * 100);
      const rightPct = 100 - leftPct;
      return { axis, leftPct, rightPct };
    });
  }

  function getVerdict(leftPct, axis) {
    if (leftPct >= 70) return `Fuerte perfil: ${axis.leftName}`;
    if (leftPct >= 56) return `Inclinación a ${axis.leftName}`;
    if (leftPct <= 30) return `Fuerte perfil: ${axis.rightName}`;
    if (leftPct <= 44) return `Inclinación a ${axis.rightName}`;
    return 'Síntesis equilibrada';
  }

  function computeProfileMatches(userVector) {
    const maxDist = Math.sqrt(6 * 100 * 100);
    return DATA.profiles
      .map((p) => {
        let sumSq = 0;
        for (let i = 0; i < 6; i++) {
          const diff = userVector[i] - p.vector[i];
          sumSq += diff * diff;
        }
        const dist = Math.sqrt(sumSq);
        const affinity = Math.max(0, Math.round((1 - dist / maxDist) * 100));
        return { ...p, affinity };
      })
      .sort((a, b) => b.affinity - a.affinity);
  }

  function renderResults() {
    const scores = computeAxisScores();
    const barsEl = document.getElementById('axes-bars-container');
    barsEl.innerHTML = scores
      .map(({ axis, leftPct, rightPct }) => {
        const verdict = getVerdict(leftPct, axis);
        return `
          <div class="axis-item">
            <div class="axis-meta">
              <span class="axis-title">${axis.name}</span>
              <span class="axis-verdict">${verdict}</span>
            </div>
            <div class="axis-poles">
              <span>${axis.leftName}</span>
              <span>${axis.rightName}</span>
            </div>
            <div class="axis-bar-row">
              <div class="pole-badge" style="background:${axis.leftColor}" title="${axis.leftName}">
                ${POLE_ICONS[axis.leftIcon] || ''}
              </div>
              <div class="bar-wrapper">
                <div class="bar-left" data-target="${leftPct}" style="width:50%; background:${axis.leftColor}">
                  ${leftPct >= 14 ? leftPct + '%' : ''}
                </div>
                <div class="bar-right" data-target="${rightPct}" style="width:50%; background:${axis.rightColor}">
                  ${rightPct >= 14 ? rightPct + '%' : ''}
                </div>
              </div>
              <div class="pole-badge" style="background:${axis.rightColor}" title="${axis.rightName}">
                ${POLE_ICONS[axis.rightIcon] || ''}
              </div>
            </div>
          </div>
        `;
      })
      .join('');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        barsEl.querySelectorAll('.bar-left, .bar-right').forEach((bar) => {
          bar.style.width = `${bar.dataset.target}%`;
        });
      });
    });

    const userVec = scores.map((s) => s.leftPct);
    const resultsRadarWrap = document.getElementById('results-radar-svg-wrap');
    if (resultsRadarWrap) {
      resultsRadarWrap.innerHTML = buildRadarSVG(userVec, '#0e5930');
    }

    // Top 3 strongest poles with their historical milestones
    const strongestPoles = scores
      .map(({ axis, leftPct, rightPct }) => {
        const isLeft = leftPct >= rightPct;
        const pct = isLeft ? leftPct : rightPct;
        const key = `${axis.id}_${isLeft ? 'left' : 'right'}`;
        return {
          axisName: axis.name,
          pct,
          key,
          data: DATA.poleMilestones[key]
        };
      })
      .sort((a, b) => b.pct - a.pct)
      .slice(0, 3);

    document.getElementById('dominant-poles-milestones').innerHTML = strongestPoles
      .map(
        (sp, idx) => `
        <div class="match-card ${idx === 0 ? 'top-match' : ''}">
          <div class="match-head">
            <span class="match-type">${sp.axisName}</span>
            <span class="match-pct">${sp.pct}%</span>
          </div>
          <h4>${sp.data.title}</h4>
          <ul style="margin:0.35rem 0 0; padding-left:1.1rem; font-size:0.86rem;">
            ${sp.data.milestones.map((ms) => `<li>${ms}</li>`).join('')}
          </ul>
        </div>
      `
      )
      .join('');

    const totalScore = state.answers.reduce((acc, v) => acc + (v || 0), 0);
    const meanAgreement = totalScore / DATA.questions.length;
    const eeEl = document.getElementById('easter-egg-alert');

    if (meanAgreement <= -0.55) {
      let eeList = [];
      if (meanAgreement <= -1.3) {
        eeList = [
          {
            name: 'Javier Milei · Ley Bases y RIGI',
            type: 'Easter Egg · Fuera de Patria Grande',
            affinity: 96,
            wiki: 'Javier_Milei',
            bio: 'Rechazaste prácticamente todas las dimensiones del Desarrollo Humano Integral. Perfil compatible con el ajuste fiscal, la reprimarización, la Ley Bases y el RIGI.'
          },
          {
            name: 'Mauricio Macri',
            type: 'Easter Egg · Fuera de Patria Grande',
            affinity: 88,
            wiki: 'Mauricio_Macri',
            bio: 'Desfinanciamiento educativo, endeudamiento con el FMI y desregulación de mercado.'
          },
          {
            name: 'Carlos Menem',
            type: 'Easter Egg · Fuera de Patria Grande',
            affinity: 82,
            wiki: 'Carlos_Menem',
            bio: 'Privatizaciones, transferencia de escuelas sin financiamiento y reforma neoliberal de los 90.'
          }
        ];
      } else if (meanAgreement <= -0.9) {
        eeList = [
          {
            name: 'Mauricio Macri',
            type: 'Easter Egg · Fuera de Patria Grande',
            affinity: 87,
            wiki: 'Mauricio_Macri',
            bio: 'Perfil inclinado a la meritocracia individual, la apertura importadora y la desarticulación de políticas federales.'
          },
          {
            name: 'Miguel Ángel Pichetto',
            type: 'Easter Egg · Fuera de Patria Grande',
            affinity: 81,
            wiki: 'Miguel_Ángel_Pichetto',
            bio: 'Giro conservador, punitivismo y distancia de las organizaciones populares y las periferias.'
          },
          {
            name: 'Sergio Massa',
            type: 'Easter Egg · Fuera de Patria Grande',
            affinity: 74,
            wiki: 'Sergio_Massa',
            bio: 'Pragmatismo moderado con acuerdos de mercado y menor énfasis en la agenda transformadora del PDHI.'
          }
        ];
      } else {
        eeList = [
          {
            name: 'Sergio Massa',
            type: 'Easter Egg · Alerta de Brújula',
            affinity: 84,
            wiki: 'Sergio_Massa',
            bio: 'Tus respuestas muestran fuerte distancia tanto con el polo popular/comunitario como con las apuestas transformadoras del PDHI.'
          },
          {
            name: 'Guillermo Moreno',
            type: 'Easter Egg · Alerta de Brújula',
            affinity: 78,
            wiki: 'Guillermo_Moreno',
            bio: 'Nacionalismo tradicionalista alejado de la agenda contemporánea de economía popular, feminismos y ecología integral.'
          },
          {
            name: 'Miguel Ángel Pichetto',
            type: 'Easter Egg · Alerta de Brújula',
            affinity: 72,
            wiki: 'Miguel_Ángel_Pichetto',
            bio: 'Postura conservadora institucional en tensión con el protagonismo desde las periferias.'
          }
        ];
      }

      const mainEE = eeList[0];
      eeEl.innerHTML = `
        <div class="eyebrow" style="color:var(--crimson);">⚠️ EASTER EGG · ALERTA DE BRÚJULA</div>
        <h3 style="margin-bottom:0.35rem;">¿Seguro/a que no te confundiste de reunión?</h3>
        <p style="margin:0;">
          Te recomendamos replantearte si pertenecés a <strong>Patria Grande</strong> o revisar un poco tu manera de ver el mundo,
          ya que pusiste casi todo en desacuerdo y tenés un perfil más cercano a <strong>${mainEE.name}</strong>.
        </p>
      `;
      eeEl.classList.remove('hidden');

      const constEl = document.getElementById('constellation-matches');
      constEl.innerHTML = eeList
        .map(
          (m, idx) => `
          <div class="match-card ${idx === 0 ? 'top-match' : ''}" style="border-color:var(--crimson); background:#fdf3f2;">
            <div class="match-head">
              <span class="match-type" style="background:var(--crimson);">${m.type}</span>
              <span class="match-pct" style="color:var(--crimson);">${m.affinity}%</span>
            </div>
            <div class="match-identity">
              <div class="match-avatar">
                <span>${getInitials(m.name)}</span>
                <img class="hidden" alt="${m.name}" data-wiki-idx="ee_${idx}" />
              </div>
              <h4>${m.name}</h4>
            </div>
            <p>${m.bio}</p>
          </div>
        `
        )
        .join('');

      eeList.forEach((m, idx) => {
        const img = constEl.querySelector(`img[data-wiki-idx="ee_${idx}"]`);
        if (img) {
          img.onerror = () => img.classList.add('hidden');
          fetchProfilePhoto(m, img);
        }
      });

      document.getElementById('all-profiles-list').innerHTML = '';
      return;
    }

    eeEl.classList.add('hidden');
    eeEl.innerHTML = '';

    const matches = computeProfileMatches(userVec);

    // Pick balanced constellation: top 2 Referente/Prócer, top 1 Movimiento Histórico, top 1 Hito del PDHI
    const topPeople = matches.filter((m) => m.type === 'Referente' || m.type === 'Prócer').slice(0, 2);
    const topMov = matches.find((m) => m.type === 'Movimiento Histórico');
    const topHito = matches.find((m) => m.type === 'Hito del PDHI');
    const featured = [...topPeople, topMov, topHito].filter(Boolean).sort((a, b) => b.affinity - a.affinity);

    const constEl = document.getElementById('constellation-matches');
    constEl.innerHTML = featured
      .map(
        (m, idx) => `
        <div class="match-card ${idx === 0 ? 'top-match' : ''}">
          <div class="match-head">
            <span class="match-type">${m.type}</span>
            <span class="match-pct">${m.affinity}% afinidad</span>
          </div>
          <div class="match-identity">
            <div class="match-avatar">
              <span>${getInitials(m.name)}</span>
              <img class="hidden" alt="${m.name}" data-wiki-idx="${idx}" />
            </div>
            <h4>${m.name}</h4>
          </div>
          <p>${m.bio}</p>
        </div>
      `
      )
      .join('');

    featured.forEach((m, idx) => {
      const img = constEl.querySelector(`img[data-wiki-idx="${idx}"]`);
      if (img) {
        img.onerror = () => img.classList.add('hidden');
        fetchProfilePhoto(m, img);
      }
    });

    const allEl = document.getElementById('all-profiles-list');
    allEl.innerHTML = matches
      .map(
        (m, idx) => `
        <div class="profile-chip">
          <div class="chip-left">
            <div class="chip-avatar">
              <span>${getInitials(m.name)}</span>
              <img class="hidden" alt="${m.name}" data-all-idx="${idx}" />
            </div>
            <span>${m.name} <small style="color:var(--muted)">(${m.type})</small></span>
          </div>
          <strong>${m.affinity}%</strong>
        </div>
      `
      )
      .join('');

    matches.forEach((m, idx) => {
      const img = allEl.querySelector(`img[data-all-idx="${idx}"]`);
      if (img) {
        img.onerror = () => img.classList.add('hidden');
        fetchProfilePhoto(m, img);
      }
    });
  }

  document.getElementById('btn-toggle-all-profiles').addEventListener('click', () => {
    const list = document.getElementById('all-profiles-list');
    list.classList.toggle('hidden');
  });

  document.getElementById('btn-copy-results').addEventListener('click', () => {
    const scores = computeAxisScores();
    const matches = computeProfileMatches(scores.map((s) => s.leftPct));
    const lines = [
      '🧭 *Mi Brújula Patria Grande / La Martí (12 Axes)*',
      ...scores.map(
        (s) => `• *${s.axis.name}*: ${s.leftPct}% ${s.axis.leftName} / ${s.rightPct}% ${s.axis.rightName}`
      ),
      '',
      `✨ *Mayor afinidad*: ${matches[0].name} (${matches[0].affinity}%), ${matches[1].name} (${matches[1].affinity}%), ${matches[2].name} (${matches[2].affinity}%)`
    ];
    navigator.clipboard?.writeText(lines.join('\n')).then(() => {
      showToast('Resumen copiado al portapapeles');
    });
  });

  // ==========================================
  // MODULE 2: DESAFÍO PDHI (GAME + EXPLORER)
  // ==========================================
  state.gameStreak = 0;
  state.gameHistory = new Array(DATA.gameScenarios.length).fill(null);

  document.querySelectorAll('#game-mode-pills .filter-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#game-mode-pills .filter-pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      const isMap = pill.dataset.gameMode === 'map';
      document.getElementById('game-play-view').classList.toggle('hidden', isMap);
      document.getElementById('game-map-view').classList.toggle('hidden', !isMap);
    });
  });

  function renderGameFullExplorer() {
    const el = document.getElementById('game-full-explorer');
    if (!el) return;
    el.innerHTML = DATA.gameScenarios
      .map((sc) => {
        const correctOpt = sc.options.find((o) => o.correct);
        return `
          <div class="card" style="margin-bottom:0; padding:1.1rem;">
            <div class="eyebrow" style="margin-bottom:0.3rem;">${sc.chapter}</div>
            <h4 style="margin-bottom:0.4rem;">${sc.title}</h4>
            <p style="font-size:0.86rem; color:var(--muted); margin:0 0 0.6rem;">${sc.desc}</p>
            <div style="font-size:0.86rem; background:#eaf7f0; padding:0.55rem 0.7rem; border-radius:8px; color:#114b2d;">
              <strong>Propuesta PDHI:</strong> ${correctOpt ? correctOpt.text : ''}
            </div>
            <div class="edu-link-pill"><strong>Vínculo educativo:</strong> ${sc.eduLink}</div>
          </div>
        `;
      })
      .join('');
  }
  renderGameFullExplorer();

  function renderGameLiveMap() {
    const mapEl = document.getElementById('game-live-map');
    if (!mapEl) return;
    mapEl.innerHTML = DATA.gameScenarios
      .map((sc, idx) => {
        const res = state.gameHistory[idx];
        let cls = 'map-tile';
        let icon = '🔒';
        if (res === true) {
          cls += ' unlocked-ok';
          icon = '✓';
        } else if (res === false) {
          cls += ' unlocked-fail';
          icon = '✕';
        } else if (idx === state.gameIndex) {
          cls += ' current';
          icon = '▸';
        }
        return `<div class="${cls}">${icon} ${sc.shortLabel}</div>`;
      })
      .join('');
  }

  function renderGameScenario() {
    const sc = DATA.gameScenarios[state.gameIndex];
    const total = DATA.gameScenarios.length;
    state.gameAnswered = false;

    document.getElementById('game-progress-text').textContent = `Desafío ${state.gameIndex + 1} de ${total}`;
    document.getElementById('game-chapter-tag').textContent = sc.chapter;
    document.getElementById('game-watermark').textContent = String(state.gameIndex + 1).padStart(2, '0');
    document.getElementById('game-scenario-title').textContent = sc.title;
    document.getElementById('game-scenario-desc').textContent = sc.desc;
    document.getElementById('game-score').textContent = `${state.gameScore} / ${total}`;
    document.getElementById('game-streak').textContent = `${state.gameStreak} 🔥`;

    const segsEl = document.getElementById('game-segments');
    segsEl.innerHTML = Array.from({ length: total }, (_, i) => {
      let cls = 'quiz-seg';
      if (state.gameHistory[i] !== null) cls += ' done';
      else if (i === state.gameIndex) cls += ' current';
      return `<div class="${cls}"></div>`;
    }).join('');

    renderGameLiveMap();

    const fb = document.getElementById('game-feedback');
    fb.classList.add('hidden');
    fb.innerHTML = '';
    document.getElementById('btn-game-next').classList.add('hidden');

    const shuffledOpts = [...sc.options].sort(() => Math.random() - 0.5);
    const optsEl = document.getElementById('game-options');
    optsEl.innerHTML = shuffledOpts
      .map(
        (opt, i) => `
        <button class="game-opt-btn" data-opt-idx="${i}">${opt.text}</button>
      `
      )
      .join('');

    optsEl.querySelectorAll('.game-opt-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (state.gameAnswered) return;
        state.gameAnswered = true;
        const chosen = Number(btn.dataset.optIdx);
        const isCorrect = shuffledOpts[chosen].correct;
        state.gameHistory[state.gameIndex] = isCorrect;
        if (isCorrect) {
          state.gameScore++;
          state.gameStreak++;
        } else {
          state.gameStreak = 0;
        }
        document.getElementById('game-score').textContent = `${state.gameScore} / ${total}`;
        document.getElementById('game-streak').textContent = `${state.gameStreak} 🔥`;
        renderGameLiveMap();

        optsEl.querySelectorAll('.game-opt-btn').forEach((b, idx) => {
          b.disabled = true;
          if (shuffledOpts[idx].correct) b.classList.add('correct');
          else if (idx === chosen) b.classList.add('wrong');
        });

        fb.innerHTML = `
          <div><strong>${isCorrect ? '¡Exacto!' : 'No exactamente.'}</strong> ${sc.explanation}</div>
          <div class="edu-link-pill"><strong>📚 Conexión con Educación:</strong> ${sc.eduLink}</div>
        `;
        fb.classList.remove('hidden');

        const nextBtn = document.getElementById('btn-game-next');
        nextBtn.textContent = state.gameIndex < total - 1 ? 'Siguiente desafío →' : 'Ver resumen del Plan →';
        nextBtn.classList.remove('hidden');
      });
    });
  }

  document.getElementById('btn-game-next').addEventListener('click', () => {
    if (state.gameIndex < DATA.gameScenarios.length - 1) {
      state.gameIndex++;
      renderGameScenario();
    } else {
      document.getElementById('game-board').classList.add('hidden');
      document.getElementById('game-summary').classList.remove('hidden');
      document.getElementById('game-final-title').textContent = `Completaste el Desafío PDHI con ${state.gameScore} / ${DATA.gameScenarios.length} aciertos`;
      document.getElementById('game-final-text').textContent =
        'Estos 12 ejes sintetizan cómo el Plan de Desarrollo Humano Integral y Perspectivas estratégicas (2026) conectan la economía, la soberanía, el ambiente, el hábitat y la educación.';
      document.getElementById('game-unlocked-axes').innerHTML = DATA.gameScenarios
        .map(
          (s) => `
          <div class="unlocked-item">
            <strong>${s.chapter}</strong>
            <div>${s.title}</div>
            <div style="margin-top:0.35rem; font-size:0.8rem; color:var(--primary-dark);">→ ${s.eduLink}</div>
          </div>
        `
        )
        .join('');
    }
  });

  function restartGame() {
    state.gameIndex = 0;
    state.gameScore = 0;
    state.gameStreak = 0;
    state.gameHistory = new Array(DATA.gameScenarios.length).fill(null);
    document.getElementById('game-summary').classList.add('hidden');
    document.getElementById('game-board').classList.remove('hidden');
    renderGameScenario();
  }

  document.getElementById('btn-game-restart').addEventListener('click', restartGame);
  document.getElementById('btn-game-replay').addEventListener('click', restartGame);

  // ==========================================
  // MODULE 3: DIAGNÓSTICO Y PROPUESTAS EDUCATIVAS
  // ==========================================
  function renderEduModule() {
    document.getElementById('edu-stats-grid').innerHTML = DATA.eduStats
      .map(
        (st) => `
        <div class="stat-card ${st.accent}">
          <div class="stat-number">${st.number}</div>
          <div class="stat-label">${st.label}</div>
          <div class="stat-source">${st.source}</div>
        </div>
      `
      )
      .join('');

    renderEduProposals();
  }

  function renderEduProposals() {
    const items =
      state.eduFilter === 'all'
        ? DATA.eduProposals
        : DATA.eduProposals.filter((p) => p.category === state.eduFilter);

    document.getElementById('edu-proposals-grid').innerHTML = items
      .map(
        (p) => `
        <div class="proposal-card">
          <h4>${p.title}</h4>
          <ul>
            ${p.items.map((it) => `<li>${it}</li>`).join('')}
          </ul>
        </div>
      `
      )
      .join('');
  }

  document.querySelectorAll('#edu-filter-pills .filter-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      state.eduFilter = pill.dataset.eduCat;
      document.querySelectorAll('#edu-filter-pills .filter-pill').forEach((p) => {
        p.classList.toggle('active', p === pill);
      });
      renderEduProposals();
    });
  });

  // ==========================================
  // MODULE 4: 12 EJES + PIZARRÓN COLECTIVO EN VIVO + PDF
  // ==========================================
  let boardEntries = [];
  const PIZARRON_URL = DATA.firebaseDbUrl ? `${DATA.firebaseDbUrl.replace(/\/+$/, '')}/lamarti_pizarron.json` : '';

  function formatTime(ts) {
    if (!ts) return '';
    const d = new Date(ts);
    return d.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
  }

  function renderPizarron() {
    const countEl = document.getElementById('board-count');
    if (countEl) countEl.textContent = String(boardEntries.length);

    const grid = document.getElementById('pizarron-grid');
    if (!grid) return;

    grid.innerHTML = DATA.plan12Ejes
      .map((e) => {
        const items = boardEntries.filter((b) => Number(b.ejeNum) === e.num);
        return `
          <div class="pizarron-eje-card">
            <div class="eje-header">
              <span class="eje-num">Eje ${e.num}</span>
              <span class="eje-group-badge">${items.length} ${items.length === 1 ? 'aporte' : 'aportes'}</span>
            </div>
            <h4>${e.title}</h4>
            <div class="postit-list">
              ${
                items.length
                  ? items
                      .map(
                        (it) => `
                        <div class="postit-card">
                          <div class="postit-meta">
                            <span>${it.group || 'Grupo'}</span>
                            <span>${formatTime(it.createdAt)}</span>
                          </div>
                          <div>${it.text.replace(/</g, '&lt;').replace(/\n/g, '<br>')}</div>
                        </div>
                      `
                      )
                      .join('')
                  : '<div class="postit-empty">Todavía sin aportes enviados en este eje.</div>'
              }
            </div>
          </div>
        `;
      })
      .join('');
  }

  function fetchPizarron() {
    if (!PIZARRON_URL) return;
    fetch(`${PIZARRON_URL}?t=${Date.now()}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!data) {
          boardEntries = [];
        } else {
          boardEntries = Object.values(data).sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
        }
        renderPizarron();
      })
      .catch(() => {});
  }

  setInterval(() => {
    if (state.activeTab === 'plan-12-ejes') {
      fetchPizarron();
    }
  }, 3500);

  document.querySelectorAll('#plan-mode-pills .filter-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#plan-mode-pills .filter-pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      const isBoard = pill.dataset.planMode === 'board';
      document.getElementById('plan-ejes-view').classList.toggle('hidden', isBoard);
      document.getElementById('plan-board-view').classList.toggle('hidden', !isBoard);
      if (isBoard) fetchPizarron();
    });
  });

  document.getElementById('btn-refresh-board')?.addEventListener('click', () => {
    fetchPizarron();
    showToast('Pizarrón actualizado');
  });

  document.getElementById('btn-print-pdf')?.addEventListener('click', () => {
    fetchPizarron();
    setTimeout(() => window.print(), 250);
  });

  function render12Ejes() {
    const filtered =
      state.groupFilter === 'all'
        ? DATA.plan12Ejes
        : DATA.plan12Ejes.filter((e) => String(e.group) === state.groupFilter);

    const grid = document.getElementById('ejes-12-grid');
    grid.innerHTML = filtered
      .map((e) => {
        const noteVal = state.groupNotes[e.num] || '';
        return `
          <article class="eje-card">
            <div class="eje-header">
              <span class="eje-num">Eje ${e.num}</span>
              <span class="eje-group-badge">Bloque ${e.group}</span>
            </div>
            <h3>${e.title}</h3>
            <div class="eje-block">
              <strong>Descripción</strong>
              ${e.description}
            </div>
            <div class="eje-block">
              <strong>Justificación político-ideológica</strong>
              ${e.justification}
            </div>
            <div class="eje-block">
              <strong>Problemática real a resolver</strong>
              ${e.problem}
            </div>
            <div class="eje-block">
              <strong>Preguntas disparadoras para el grupo</strong>
              <ul style="margin:0.25rem 0 0; padding-left:1.1rem;">
                ${e.prompts.map((pr) => `<li>${pr}</li>`).join('')}
              </ul>
            </div>
            <div>
              <label style="font-size:0.78rem; font-weight:700; color:var(--muted);">Aporte de tu grupo:</label>
              <textarea class="eje-notes" data-eje-num="${e.num}" placeholder="Escribí acá las propuestas o consignas de tu grupo...">${noteVal}</textarea>
              <button class="btn btn-navy" data-send-eje="${e.num}" style="width:100%; margin-top:0.5rem;">
                Enviar al Pizarrón Colectivo ↗
              </button>
            </div>
          </article>
        `;
      })
      .join('');

    grid.querySelectorAll('.eje-notes').forEach((ta) => {
      ta.addEventListener('input', () => {
        state.groupNotes[ta.dataset.ejeNum] = ta.value;
        saveState();
      });
    });

    grid.querySelectorAll('[data-send-eje]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const ejeNum = Number(btn.dataset.sendEje);
        const text = (state.groupNotes[ejeNum] || '').trim();
        if (!text) {
          showToast('Escribí primero el aporte de tu grupo');
          return;
        }
        const group = document.getElementById('active-sender-group')?.value || 'Grupo';
        const entry = { ejeNum, group, text, createdAt: Date.now() };

        if (!PIZARRON_URL) {
          boardEntries.push(entry);
          renderPizarron();
          showToast('Guardado en el Pizarrón local');
          return;
        }

        btn.disabled = true;
        btn.textContent = 'Enviando...';
        fetch(PIZARRON_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(entry)
        })
          .then((r) => {
            if (!r.ok) throw new Error('Error Firebase');
            showToast(`¡Aporte de ${group} enviado al Pizarrón!`);
            state.groupNotes[ejeNum] = '';
            saveState();
            const ta = grid.querySelector(`.eje-notes[data-eje-num="${ejeNum}"]`);
            if (ta) ta.value = '';
            fetchPizarron();
          })
          .catch(() => {
            showToast('No se pudo enviar, revisá tu conexión');
          })
          .finally(() => {
            btn.disabled = false;
            btn.textContent = 'Enviar al Pizarrón Colectivo ↗';
          });
      });
    });
  }

  document.getElementById('group-filter').addEventListener('change', (ev) => {
    state.groupFilter = ev.target.value;
    render12Ejes();
  });

  document.getElementById('btn-export-notes').addEventListener('click', () => {
    const lines = ['# Pizarrón Colectivo · Formación 23/11 · Plan de Educación Humana Integral (La Martí)'];
    let hasItems = false;

    DATA.plan12Ejes.forEach((e) => {
      const items = boardEntries.filter((b) => Number(b.ejeNum) === e.num);
      if (items.length) {
        hasItems = true;
        lines.push(`\n## Eje ${e.num}: ${e.title}`);
        items.forEach((it) => {
          lines.push(`- **${it.group}**: ${it.text}`);
        });
      }
    });

    if (!hasItems) {
      showToast('Todavía no hay aportes en el Pizarrón');
      return;
    }
    navigator.clipboard?.writeText(lines.join('\n')).then(() => {
      showToast('Pizarrón copiado al portapapeles');
    });
  });

  fetchPizarron();

  // ==========================================
  // PASO 2: JUEGO PRESENCIAL POR GRUPOS (PARTICIPANTE vs ORGANIZADOR)
  // ==========================================
  const TEAMS_KEY = 'lamarti_teams_v2';
  const ORG_PASS = 'contraseña123';
  let userRole = null; // 'participant' | 'organizer'
  let physRoundIdx = 0;
  let physRevealed = false;
  let teams = [
    { name: 'Grupo 1', score: 0 },
    { name: 'Grupo 2', score: 0 },
    { name: 'Grupo 3', score: 0 },
    { name: 'Grupo 4', score: 0 }
  ];

  try {
    const savedGame = JSON.parse(localStorage.getItem(TEAMS_KEY) || 'null');
    if (savedGame) {
      if (Array.isArray(savedGame.teams) && savedGame.teams.length === 4) teams = savedGame.teams;
      if (typeof savedGame.physRoundIdx === 'number') physRoundIdx = savedGame.physRoundIdx;
      physRevealed = Boolean(savedGame.physRevealed);
    }
  } catch (e) {}

  const liveChannel = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('lamarti_live_game') : null;
  if (liveChannel) {
    liveChannel.onmessage = (ev) => {
      if (ev.data && ev.data.type === 'sync') {
        applyRemoteGameState(ev.data);
      }
    };
  }

  const DB_URL = (DATA.firebaseDbUrl || '').replace(/\/+$/, '');
  let pollTimer = null;

  function applyRemoteGameState(payload) {
    if (!payload) return;
    if (Array.isArray(payload.teams) && payload.teams.length === 4) teams = payload.teams;
    if (typeof payload.physRoundIdx === 'number') physRoundIdx = payload.physRoundIdx;
    physRevealed = Boolean(payload.physRevealed);
    renderScoreboard();
    renderPhysicalRound();
  }

  function saveGameSync() {
    const payload = { teams, physRoundIdx, physRevealed, updatedAt: Date.now() };
    try { localStorage.setItem(TEAMS_KEY, JSON.stringify(payload)); } catch (e) {}
    if (liveChannel) liveChannel.postMessage({ type: 'sync', ...payload });

    if (DB_URL && userRole === 'organizer') {
      fetch(`${DB_URL}/lamarti_game.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch((err) => console.warn('Error guardando en Firebase:', err));
    }
  }

  function fetchRemoteGameState() {
    if (!DB_URL) return;
    fetch(`${DB_URL}/lamarti_game.json?t=${Date.now()}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data) {
          applyRemoteGameState(data);
        }
      })
      .catch(() => {});
  }

  function startParticipantPolling() {
    if (!DB_URL) return;
    fetchRemoteGameState();
    clearInterval(pollTimer);
    pollTimer = setInterval(() => {
      if (state.activeTab === 'juego-grupos' && userRole === 'participant') {
        fetchRemoteGameState();
      }
    }, 2000);
  }

  function enterGameRole(role) {
    userRole = role;
    document.getElementById('role-gate')?.classList.add('hidden');
    document.getElementById('game-arena')?.classList.remove('hidden');

    const isOrg = role === 'organizer';
    const dbTag = DB_URL ? ' · 🟢 En vivo' : ' · 🟡 Local';
    document.getElementById('role-status-badge').textContent = (isOrg ? '🎛️ Modo Organizador' : '👁️ Modo Participante') + dbTag;
    document.querySelectorAll('.org-only').forEach((el) => el.classList.toggle('hidden', !isOrg));
    renderScoreboard();
    renderPhysicalRound();

    if (isOrg && DB_URL) {
      fetchRemoteGameState();
    } else if (!isOrg) {
      startParticipantPolling();
    }
  }

  document.getElementById('btn-choose-participant')?.addEventListener('click', () => {
    enterGameRole('participant');
  });

  document.getElementById('btn-choose-organizer')?.addEventListener('click', () => {
    document.getElementById('organizer-auth-box')?.classList.remove('hidden');
    document.getElementById('organizer-auth-error')?.classList.add('hidden');
    document.getElementById('organizer-pass-input')?.focus();
  });

  function attemptOrganizerLogin() {
    const inp = document.getElementById('organizer-pass-input');
    const errEl = document.getElementById('organizer-auth-error');
    const val = (inp?.value || '').trim();
    if (val === ORG_PASS) {
      if (inp) inp.value = '';
      enterGameRole('organizer');
    } else {
      if (errEl) {
        errEl.textContent = 'Contraseña incorrecta. Te invitamos a ingresar como Participante.';
        errEl.classList.remove('hidden');
      }
      setTimeout(() => {
        showToast('Ingresando como Participante...');
        enterGameRole('participant');
      }, 1400);
    }
  }

  document.getElementById('btn-organizer-login')?.addEventListener('click', attemptOrganizerLogin);
  document.getElementById('organizer-pass-input')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') attemptOrganizerLogin();
  });

  document.getElementById('btn-switch-role')?.addEventListener('click', () => {
    document.getElementById('game-arena')?.classList.add('hidden');
    document.getElementById('role-gate')?.classList.remove('hidden');
    document.getElementById('organizer-auth-box')?.classList.add('hidden');
  });

  function renderScoreboard() {
    const el = document.getElementById('team-scoreboard');
    if (!el) return;
    const isOrg = userRole === 'organizer';
    const sortedScores = [...new Set(teams.map((t) => t.score))].sort((a, b) => b - a);
    const maxScore = sortedScores[0];

    el.innerHTML = teams
      .map((t, idx) => {
        const rank = sortedScores.indexOf(t.score) + 1;
        const isLeader = t.score > 0 && t.score === maxScore;
        return `
          <div class="team-card ${isLeader ? 'leader' : ''}">
            <div class="team-top">
              ${
                isOrg
                  ? `<input class="team-name-input" type="text" value="${t.name}" data-team-name="${idx}" aria-label="Nombre del grupo ${idx + 1}" />`
                  : `<strong style="font-size:0.98rem;">${t.name}</strong>`
              }
              <span class="team-rank">${rank}°</span>
            </div>
            <div class="team-score">${t.score} pts</div>
            ${
              isOrg
                ? `<div class="team-btns">
                    <button class="team-pts-btn" data-team-idx="${idx}" data-delta="10">+10</button>
                    <button class="team-pts-btn" data-team-idx="${idx}" data-delta="5">+5</button>
                    <button class="team-pts-btn" data-team-idx="${idx}" data-delta="-5">-5</button>
                  </div>`
                : ''
            }
          </div>
        `;
      })
      .join('');

    if (isOrg) {
      el.querySelectorAll('[data-team-name]').forEach((inp) => {
        inp.addEventListener('change', () => {
          teams[Number(inp.dataset.teamName)].name = inp.value.trim() || `Grupo ${Number(inp.dataset.teamName) + 1}`;
          saveGameSync();
        });
      });

      el.querySelectorAll('[data-team-idx]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const idx = Number(btn.dataset.teamIdx);
          const delta = Number(btn.dataset.delta);
          teams[idx].score = Math.max(0, teams[idx].score + delta);
          saveGameSync();
          renderScoreboard();
        });
      });
    }
  }

  document.getElementById('btn-reset-scoreboard')?.addEventListener('click', () => {
    if (userRole !== 'organizer') return;
    teams.forEach((t) => { t.score = 0; });
    saveGameSync();
    renderScoreboard();
  });

  function renderPhysicalRound() {
    if (!DATA.physicalGameRounds || !document.getElementById('phys-title')) return;
    const rounds = DATA.physicalGameRounds;
    const item = rounds[physRoundIdx] || rounds[0];
    const total = rounds.length;

    document.getElementById('phys-watermark').textContent = String(physRoundIdx + 1).padStart(2, '0');
    document.getElementById('phys-progress').textContent = `Ronda ${physRoundIdx + 1} de ${total}`;
    document.getElementById('phys-block').textContent = item.block;
    document.getElementById('phys-title').textContent = item.title;
    document.getElementById('phys-prompt').textContent = item.prompt;

    const ansEl = document.getElementById('phys-answer-box');
    if (physRevealed) {
      ansEl.innerHTML = `<strong>Respuesta / Criterio:</strong> ${item.answer}`;
      ansEl.classList.remove('hidden');
    } else {
      ansEl.classList.add('hidden');
    }

    const prevBtn = document.getElementById('btn-phys-prev');
    const nextBtn = document.getElementById('btn-phys-next');
    if (prevBtn) prevBtn.disabled = physRoundIdx === 0;
    if (nextBtn) nextBtn.disabled = physRoundIdx === total - 1;
  }

  document.getElementById('btn-phys-reveal')?.addEventListener('click', () => {
    if (userRole !== 'organizer') return;
    physRevealed = !physRevealed;
    saveGameSync();
    renderPhysicalRound();
  });

  document.getElementById('btn-phys-prev')?.addEventListener('click', () => {
    if (userRole !== 'organizer' || physRoundIdx === 0) return;
    physRoundIdx--;
    physRevealed = false;
    saveGameSync();
    renderPhysicalRound();
  });

  document.getElementById('btn-phys-next')?.addEventListener('click', () => {
    if (userRole !== 'organizer' || physRoundIdx >= DATA.physicalGameRounds.length - 1) return;
    physRoundIdx++;
    physRevealed = false;
    saveGameSync();
    renderPhysicalRound();
  });

  // INIT
  renderScoreboard();
  renderPhysicalRound();
  renderGameScenario();
  renderEduModule();
  render12Ejes();
})();
