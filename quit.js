// ======================= 题库整合（单选 + 多选）=======================
const SINGLE_CHOICE_POOL = [
  { id:1, type:"single", question:"潮汕“半山客”的核心定义是（）", options:["纯客家人","受潮汕文化浸润的客家群体","纯潮汕人","畲族人"], answer:"受潮汕文化浸润的客家群体" },
  { id:2, type:"single", question:"揭西县20个乡镇中，客家乡镇数量为（）", options:["10个","13个","15个","18个"], answer:"13个" },
  { id:3, type:"single", question:"半山客华侨移居海外的人口总数，约为潮汕原地半山客人口的（）", options:["1倍","2倍","3倍","4倍"], answer:"2倍" },
  { id:4, type:"single", question:"半山客先祖出洋、返乡的核心港口是（）", options:["广州港","汕头港","深圳港","湛江港"], answer:"汕头港" },
  { id:5, type:"single", question:"半山客祠堂、大型民居主要采用（）", options:["客家围屋","潮式建筑","四合院","西式建筑"], answer:"潮式建筑" },
  { id:6, type:"single", question:"海外半山客在泰国成立的同乡会馆是（）", options:["泰国半山客会馆","嘉应会馆","潮州会馆","广府会馆"], answer:"泰国半山客会馆" },
  { id:7, type:"single", question:"半山客标志性饮食，也是海外侨胞传承的特色美食是（）", options:["火锅","擂茶","早茶","海鲜"], answer:"擂茶" },
  { id:8, type:"single", question:"洋务运动实干家、丰顺半山客名人是（）", options:["丁日昌","陈南枝","蔡达三","曾毅"], answer:"丁日昌" },
  { id:9, type:"single", question:"半山客文化“潮化”的核心原因不包括（）", options:["行政辖属","经济交流","潮客通婚","强制同化"], answer:"强制同化" },
  { id:10, type:"single", question:"三山国王信仰的起源地是（）", options:["梅州","揭西河婆","汕头","潮州"], answer:"揭西河婆" },
  { id:11, type:"single", question:"潮汕地区无客家乡镇的两个县是（）", options:["澄海、南澳","揭西、普宁","潮安、饶平"], answer:"澄海、南澳" },
  { id:12, type:"single", question:"长期从事侨务工作、半山客侨务领域代表人物是（）", options:["彭光涵","杨之光","张宏达","詹安泰"], answer:"彭光涵" },
  { id:13, type:"single", question:"半山客华侨支持家乡建设的核心领域不包括（）", options:["捐资办学","修桥铺路","军事扩张","公益慈善"], answer:"军事扩张" },
  { id:14, type:"single", question:"1921年河婆客家人创办的专业潮剧团是（）", options:["玉楼","老三正顺","老玉梨香","老玉堂"], answer:"玉楼" },
  { id:15, type:"single", question:"半山客方言融入了大量（）词汇，形成独特语言特色", options:["普通话","潮汕话","粤语","畲语"], answer:"潮汕话" }
];

const MULTIPLE_CHOICE_POOL = [
  { id:16, type:"multiple", question:"半山客文化“潮化”的主要表现有（）", options:["采用潮式建筑","喜爱潮剧潮乐","遵循潮式民俗","放弃客家语言"], answerTexts:["采用潮式建筑","喜爱潮剧潮乐","遵循潮式民俗"] },
  { id:17, type:"multiple", question:"半山客形成与发展的关键因素包括（）", options:["隶属潮州府管辖","榕江水路经济交流","潮客通婚","海外华侨反哺"], answerTexts:["隶属潮州府管辖","榕江水路经济交流","潮客通婚","海外华侨反哺"] },
  { id:18, type:"multiple", question:"半山客华侨在海外的核心活动有（）", options:["成立同乡会馆互助","传承半山客/潮客文化","支持家乡建设","传播三山国王信仰"], answerTexts:["成立同乡会馆互助","传承半山客/潮客文化","支持家乡建设","传播三山国王信仰"] },
  { id:19, type:"multiple", question:"半山客保留的客家与中原传统有（）", options:["崇文重教","妇女不缠脚","唱客家山歌","豪爽直率"], answerTexts:["崇文重教","妇女不缠脚","唱客家山歌","豪爽直率"] },
  { id:20, type:"multiple", question:"半山客华侨对家乡的贡献包括（）", options:["捐资建学校/医院","修桥筑路","支持抗日/革命","推动家乡实业发展"], answerTexts:["捐资建学校/医院","修桥筑路","支持抗日/革命","推动家乡实业发展"] },
  { id:21, type:"multiple", question:"海外半山客传承的本土文化有（）", options:["擂茶饮食","潮剧/客家山歌","三山国王信仰","工夫茶习俗"], answerTexts:["擂茶饮食","潮剧/客家山歌","三山国王信仰","工夫茶习俗"] },
  { id:22, type:"multiple", question:"属于潮式建筑的有（）", options:["四点金","下山虎","驷马拖车","九厅十八井"], answerTexts:["四点金","下山虎","驷马拖车","九厅十八井"] },
  { id:23, type:"multiple", question:"半山客名人中，投身侨务、华侨工作的有（）", options:["彭光涵","张伟超","徐家桢","黄承章"], answerTexts:["彭光涵","张伟超","徐家桢","黄承章"] },
  { id:24, type:"multiple", question:"半山客遵循的潮式民俗包括（）", options:["七月半祭祖","娘妈生祭祀","食糜配咸菜","潮式小吃制作"], answerTexts:["七月半祭祖","娘妈生祭祀","食糜配咸菜","潮式小吃制作"] },
  { id:25, type:"multiple", question:"榕江水路对半山客的意义有（）", options:["物资运输通道","华侨出洋返乡通道","文化交流纽带","族群融合载体"], answerTexts:["物资运输通道","华侨出洋返乡通道","文化交流纽带","族群融合载体"] }
];

const ALL_CHOICE_POOL = [...SINGLE_CHOICE_POOL, ...MULTIPLE_CHOICE_POOL];
const JUDGE_POOL = [
  { id:26, question:"半山客已完全被潮汕文化同化，失去客家与华侨文化根脉。", answer:"错误" },
  { id:27, question:"广东电台客家话播音使用梅县话，半山客话受其影响又融入潮语。", answer:"正确" },
  { id:28, question:"半山客华侨在海外仅注重经商，不传承本土文化。", answer:"错误" },
  { id:29, question:"三山国王信仰随半山客华侨传播到海外，成为侨胞精神纽带。", answer:"正确" },
  { id:30, question:"半山客华侨捐资家乡公益，是家国情怀的重要体现。", answer:"正确" }
];
const SUBJECTIVE_POOL = [
  { id:31, question:"半山客华侨下南洋、闯海外，在异国他乡团结互助、成立会馆，这种抱团求生、守望相助的精神，对当代大学生应对竞争、团队协作有什么启示？", reference:"单打独斗难成大事，团结协作、彼此扶持才能走得更远；青年要学会共情互助，凝聚集体力量。" },
  { id:32, question:"半山客华侨远离故土，却始终坚守擂茶、山歌、三山国王信仰等本土文化，文化根脉为何能跨越山海、代代相传？这对我们坚守文化自信有何启发？", reference:"文化是游子的精神家园；无论身在何处，守住文化根脉，才能找到身份认同与精神归属。" },
  { id:33, question:"半山客华侨捐资办学、修桥铺路、支持家乡抗日与建设，这种家国情怀、反哺故土的精神，作为新时代大学生，我们该如何传承与践行？", reference:"心怀家国、不忘本源，将个人成长与家乡发展、国家需要结合，用学识与行动回馈社会。" },
  { id:34, question:"半山客文化是客家+潮汕+华侨三重融合的产物，这种多元共生的文化形态，对我们理解“中华文化包容性”有什么新思考？", reference:"中华文化因包容而强大，不同文化碰撞融合，才能诞生更有生命力的新文明。" }
];

function getRandomItem(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

let currentChoice = null, currentJudge = null, currentSubjective = null;
let userChoiceAnswer = null, userJudgeAnswer = null, userSubjectiveText = "";

const container = document.getElementById('quizContainer');
const cooldownBar = document.getElementById('cooldownBar');
const stepChoicePanel = document.getElementById('stepChoicePanel');
const stepJudgePanel = document.getElementById('stepJudgePanel');
const stepSubjectivePanel = document.getElementById('stepSubjectivePanel');
const resultPanel = document.getElementById('resultPanel');
const progressSteps = document.querySelectorAll('.step');
const retakeBtn = document.getElementById('retakeBtn');
const nextToJudge = document.getElementById('nextToJudgeBtn');
const nextToSubjective = document.getElementById('nextToSubjectiveBtn');
const submitBtn = document.getElementById('submitQuizBtn');

const COOLDOWN_SEC = 60;
let cooldownTimer = null;
const STORAGE_LAST_TIME = 'semishanke_lastQuizFinish';
const STORAGE_LAST_STATE = 'semishanke_lastQuizState';

function getLastCompleteTime() {
  const t = localStorage.getItem(STORAGE_LAST_TIME);
  return t ? parseInt(t, 10) : 0;
}
function setLastCompleteTime(now) {
  localStorage.setItem(STORAGE_LAST_TIME, now.toString());
}
function isInCooldown() {
  const last = getLastCompleteTime();
  if (!last) return false;
  const diff = Date.now() - last;
  return diff < COOLDOWN_SEC * 1000;
}
function getRemainingCooldownSec() {
  const last = getLastCompleteTime();
  if (!last) return 0;
  const elapsed = (Date.now() - last) / 1000;
  if (elapsed >= COOLDOWN_SEC) return 0;
  return Math.ceil(COOLDOWN_SEC - elapsed);
}

function saveCurrentState() {
  const state = {
    currentChoice,
    currentJudge,
    currentSubjective,
    userChoiceAnswer,
    userJudgeAnswer,
    userSubjectiveText,
    choiceCorrect: isChoiceCorrect(),
    judgeCorrect: (userJudgeAnswer === currentJudge?.answer)
  };
  localStorage.setItem(STORAGE_LAST_STATE, JSON.stringify(state));
}

function restoreSavedState() {
  const saved = localStorage.getItem(STORAGE_LAST_STATE);
  if (!saved) return false;
  try {
    const state = JSON.parse(saved);
    if (!state.currentChoice) return false;
    currentChoice = state.currentChoice;
    currentJudge = state.currentJudge;
    currentSubjective = state.currentSubjective;
    userChoiceAnswer = state.userChoiceAnswer;
    userJudgeAnswer = state.userJudgeAnswer;
    userSubjectiveText = state.userSubjectiveText || "";

    renderResultPanel(state.choiceCorrect, state.judgeCorrect);
    return true;
  } catch(e) { return false; }
}

function clearSavedState() {
  localStorage.removeItem(STORAGE_LAST_STATE);
}

function applyCooldownUI() {
  const inCd = isInCooldown();
  if (inCd) {
    const remain = getRemainingCooldownSec();
    cooldownBar.classList.add('show');
    cooldownBar.innerHTML = `⏳ 冷却中，请 ${remain} 秒后再开始新的答题（每套问卷限1次/分钟）`;
    container.classList.add('cooldown-active');
    if (retakeBtn) retakeBtn.disabled = true;
    if (nextToJudge) nextToJudge.disabled = true;
    if (nextToSubjective) nextToSubjective.disabled = true;
    if (submitBtn) submitBtn.disabled = true;
  } else {
    cooldownBar.classList.remove('show');
    container.classList.remove('cooldown-active');
    if (retakeBtn) retakeBtn.disabled = false;
    refreshButtonsByAnswers();
  }
}

function refreshButtonsByAnswers() {
  if (isInCooldown()) return;
  const choicePanelVisible = !stepChoicePanel.classList.contains('hidden-step');
  const judgePanelVisible = !stepJudgePanel.classList.contains('hidden-step');
  const subPanelVisible = !stepSubjectivePanel.classList.contains('hidden-step');
  if (choicePanelVisible) {
    const hasAnswer = currentChoice.type === 'single' ? (userChoiceAnswer !== null) : (Array.isArray(userChoiceAnswer) && userChoiceAnswer.length > 0);
    nextToJudge.disabled = !hasAnswer;
  } else if (judgePanelVisible) {
    nextToSubjective.disabled = (userJudgeAnswer === null);
  } else if (subPanelVisible) {
    submitBtn.disabled = false;
  }
}

function startCooldownWatcher() {
  if (cooldownTimer) clearInterval(cooldownTimer);
  cooldownTimer = setInterval(() => {
    const inCd = isInCooldown();
    if (inCd) {
      const remain = getRemainingCooldownSec();
      cooldownBar.innerHTML = `⏳ 冷却中，请 ${remain} 秒后再开始新的答题（每套问卷限1次/分钟）`;
      if (!container.classList.contains('cooldown-active')) {
        container.classList.add('cooldown-active');
        if (retakeBtn) retakeBtn.disabled = true;
        if (nextToJudge) nextToJudge.disabled = true;
        if (nextToSubjective) nextToSubjective.disabled = true;
        if (submitBtn) submitBtn.disabled = true;
      }
    } else {
      if (container.classList.contains('cooldown-active')) {
        cooldownBar.classList.remove('show');
        container.classList.remove('cooldown-active');
        if (retakeBtn) retakeBtn.disabled = false;
        refreshButtonsByAnswers();
      }
    }
  }, 500);
}

function markQuizComplete() {
  saveCurrentState();
  setLastCompleteTime(Date.now());
  applyCooldownUI();
  startCooldownWatcher();
}

function refreshQuestions() {
  currentChoice = getRandomItem(ALL_CHOICE_POOL);
  currentJudge = getRandomItem(JUDGE_POOL);
  currentSubjective = getRandomItem(SUBJECTIVE_POOL);
  userChoiceAnswer = (currentChoice.type === 'multiple') ? [] : null;
  userJudgeAnswer = null;
  userSubjectiveText = "";
}

function renderChoice() {
  const q = currentChoice;
  document.getElementById('choiceQuestionText').innerText = q.question;
  const hintSpan = document.getElementById('choiceHint');
  const containerOpt = document.getElementById('choiceOptionsArea');
  containerOpt.innerHTML = '';
  if (q.type === 'multiple') {
    hintSpan.style.display = 'inline-block';
    hintSpan.innerText = '📌 多选题 · 可选择多个答案';
    userChoiceAnswer = [];
    q.options.forEach(opt => {
      const optDiv = document.createElement('div');
      optDiv.className = 'quiz-option';
      optDiv.innerText = opt;
      optDiv.addEventListener('click', (e) => {
        if (isInCooldown()) { alert('冷却中，暂不能作答'); return; }
        if (optDiv.classList.contains('selected')) {
          optDiv.classList.remove('selected');
          userChoiceAnswer = userChoiceAnswer.filter(item => item !== opt);
        } else {
          optDiv.classList.add('selected');
          userChoiceAnswer.push(opt);
        }
        refreshButtonsByAnswers();
      });
      containerOpt.appendChild(optDiv);
    });
  } else {
    hintSpan.style.display = 'none';
    q.options.forEach(opt => {
      const optDiv = document.createElement('div');
      optDiv.className = 'quiz-option';
      optDiv.innerText = opt;
      optDiv.addEventListener('click', () => {
        if (isInCooldown()) { alert('冷却中，暂不能作答'); return; }
        containerOpt.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
        optDiv.classList.add('selected');
        userChoiceAnswer = opt;
        refreshButtonsByAnswers();
      });
      containerOpt.appendChild(optDiv);
    });
    userChoiceAnswer = null;
  }
  refreshButtonsByAnswers();
}

function renderJudge() {
  document.getElementById('judgeQuestionText').innerText = currentJudge.question;
  const judgeOpts = document.querySelectorAll('#judgeOptionsArea .judge-opt');
  judgeOpts.forEach(opt => {
    opt.classList.remove('selected');
    opt.onclick = () => {
      if (isInCooldown()) { alert('冷却中，暂不能作答'); return; }
      judgeOpts.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      userJudgeAnswer = opt.getAttribute('data-value');
      refreshButtonsByAnswers();
    };
  });
  userJudgeAnswer = null;
  refreshButtonsByAnswers();
}

function renderSubjective() {
  document.getElementById('subjectiveQuestionText').innerText = currentSubjective.question;
  document.getElementById('subjectiveAnswer').value = '';
  refreshButtonsByAnswers();
}

function isChoiceCorrect() {
  const q = currentChoice;
  if (!q) return false;
  if (q.type === 'single') return userChoiceAnswer === q.answer;
  if (!Array.isArray(userChoiceAnswer)) return false;
  const correctSet = new Set(q.answerTexts);
  if (userChoiceAnswer.length !== correctSet.size) return false;
  return userChoiceAnswer.every(opt => correctSet.has(opt));
}

// 渲染结果面板 - 主观题字体颜色区分
function renderResultPanel(choiceCorrect, judgeCorrect) {
  const score = (choiceCorrect ? 1 : 0) + (judgeCorrect ? 1 : 0);
  document.getElementById('finalScoreSpan').innerHTML = `📖 ${score} / 2`;
  const detailsDiv = document.getElementById('resultDetails');

  // 选择题部分
  let choiceHtml = '';
  if (currentChoice.type === 'single') {
    const userAns = userChoiceAnswer || '未选';
    const correctAns = currentChoice.answer;
    choiceHtml = `
      <div class="question-title">🥢 单选题</div>
      <div>${currentChoice.question}</div>
      <div class="answer-compare">
        <span class="user-answer">📝 你的答案：${escapeHtml(userAns)}</span>
        ${!choiceCorrect ? `<span class="correct-answer">✅ 正确答案：${escapeHtml(correctAns)}</span>` : ''}
        <span class="result-badge ${choiceCorrect ? 'correct' : 'wrong'}">${choiceCorrect ? '✓ 回答正确' : '✗ 回答错误'}</span>
      </div>
    `;
  } else {
    const userAns = (Array.isArray(userChoiceAnswer) && userChoiceAnswer.length) ? userChoiceAnswer.join('、') : '未选';
    const correctAns = currentChoice.answerTexts.join('、');
    choiceHtml = `
      <div class="question-title">🥢 多选题</div>
      <div>${currentChoice.question}</div>
      <div class="answer-compare">
        <span class="user-answer">📝 你的答案：${escapeHtml(userAns)}</span>
        ${!choiceCorrect ? `<span class="correct-answer">✅ 正确答案：${escapeHtml(correctAns)}</span>` : ''}
        <span class="result-badge ${choiceCorrect ? 'correct' : 'wrong'}">${choiceCorrect ? '✓ 回答正确' : '✗ 回答错误'}</span>
      </div>
    `;
  }

  // 判断题部分
  const judgeUser = userJudgeAnswer || '未选';
  const judgeCorrectAns = currentJudge.answer;
  const judgeHtml = `
    <div class="question-title">⚖️ 判断题</div>
    <div>${currentJudge.question}</div>
    <div class="answer-compare">
      <span class="user-answer">📝 你的判断：${escapeHtml(judgeUser)}</span>
      ${!judgeCorrect ? `<span class="correct-answer">✅ 正确答案：${escapeHtml(judgeCorrectAns)}</span>` : ''}
      <span class="result-badge ${judgeCorrect ? 'correct' : 'wrong'}">${judgeCorrect ? '✓ 判断正确' : '✗ 判断错误'}</span>
    </div>
  `;

  // 主观题部分 - 用户回答文字颜色加深，参考启发颜色较淡
  const subjectiveHtml = `
    <div class="question-title">✍️ 主观申论</div>
    <div>${currentSubjective.question}</div>
    <div class="subjective-answer">
      <div style="font-weight: 600; margin-bottom: 6px;">🌱 你的分享：</div>
      <div class="subjective-user-text">${escapeHtml(userSubjectiveText)}</div>
    </div>
    <div class="ref-hint">
      💡 文化回响 · 启发参考：<br> ${currentSubjective.reference}
    </div>
  `;

  detailsDiv.innerHTML = `
    <div class="feedback-item ${choiceCorrect ? 'correct-feedback' : 'wrong-feedback'}">${choiceHtml}</div>
    <div class="feedback-item ${judgeCorrect ? 'correct-feedback' : 'wrong-feedback'}">${judgeHtml}</div>
    <div class="feedback-item reflection">${subjectiveHtml}</div>
  `;
}

function showFinalResult() {
  if (isInCooldown()) { alert('冷却中，无法提交新结果'); return; }
  const choiceCorrect = isChoiceCorrect();
  const judgeCorrect = (userJudgeAnswer === currentJudge.answer);
  const userSub = document.getElementById('subjectiveAnswer').value.trim();
  userSubjectiveText = userSub || "（暂未填写，但思考已予敬意）";
  
  renderResultPanel(choiceCorrect, judgeCorrect);
  markQuizComplete();
}

function escapeHtml(str) {
  return str.replace(/[&<>]/g, function(m) {
    if(m === '&') return '&amp;';
    if(m === '<') return '&lt;';
    if(m === '>') return '&gt;';
    return m;
  });
}

function setActiveStep(stepIndex) {
  progressSteps.forEach((step, idx) => {
    if (idx + 1 === stepIndex) step.classList.add('active'), step.classList.remove('step-done');
    else if (idx + 1 < stepIndex) step.classList.add('step-done'), step.classList.remove('active');
    else step.classList.remove('active', 'step-done');
  });
}

function goToJudge() {
  if (isInCooldown()) { alert('冷却中，请稍后再继续'); return; }
  if (currentChoice.type === 'single' && !userChoiceAnswer) return;
  if (currentChoice.type === 'multiple' && (!Array.isArray(userChoiceAnswer) || userChoiceAnswer.length === 0)) return;
  stepChoicePanel.classList.add('hidden-step');
  stepJudgePanel.classList.remove('hidden-step');
  setActiveStep(2);
  refreshButtonsByAnswers();
}

function goToSubjective() {
  if (isInCooldown()) { alert('冷却中，请稍后再继续'); return; }
  if (!userJudgeAnswer) return;
  stepJudgePanel.classList.add('hidden-step');
  stepSubjectivePanel.classList.remove('hidden-step');
  setActiveStep(3);
  refreshButtonsByAnswers();
}

function onSubmit() {
  if (isInCooldown()) { alert('冷却中，请稍后再提交'); return; }
  showFinalResult();
  stepSubjectivePanel.classList.add('hidden-step');
  resultPanel.classList.remove('hidden-step');
  setActiveStep(4);
  refreshButtonsByAnswers();
}

function resetAndNewSession() {
  if (isInCooldown()) {
    const remain = getRemainingCooldownSec();
    alert(`请等待 ${remain} 秒后再开始新的答题 🙏 文化传承需耐心。`);
    return;
  }
  clearSavedState();
  refreshQuestions();
  renderChoice();
  renderJudge();
  renderSubjective();
  stepChoicePanel.classList.remove('hidden-step');
  stepJudgePanel.classList.add('hidden-step');
  stepSubjectivePanel.classList.add('hidden-step');
  resultPanel.classList.add('hidden-step');
  setActiveStep(1);
  refreshButtonsByAnswers();
  nextToJudge.disabled = true;
  nextToSubjective.disabled = true;
  submitBtn.disabled = false;
}

function initialize() {
  const inCd = isInCooldown();
  if (inCd) {
    const restored = restoreSavedState();
    if (restored) {
      stepChoicePanel.classList.add('hidden-step');
      stepJudgePanel.classList.add('hidden-step');
      stepSubjectivePanel.classList.add('hidden-step');
      resultPanel.classList.remove('hidden-step');
      setActiveStep(4);
    } else {
      refreshQuestions();
      renderChoice();
      renderJudge();
      renderSubjective();
      stepChoicePanel.classList.remove('hidden-step');
      stepJudgePanel.classList.add('hidden-step');
      stepSubjectivePanel.classList.add('hidden-step');
      resultPanel.classList.add('hidden-step');
      setActiveStep(1);
    }
  } else {
    clearSavedState();
    refreshQuestions();
    renderChoice();
    renderJudge();
    renderSubjective();
    stepChoicePanel.classList.remove('hidden-step');
    stepJudgePanel.classList.add('hidden-step');
    stepSubjectivePanel.classList.add('hidden-step');
    resultPanel.classList.add('hidden-step');
    setActiveStep(1);
  }
  applyCooldownUI();
  refreshButtonsByAnswers();
  startCooldownWatcher();
}

nextToJudge.addEventListener('click', goToJudge);
nextToSubjective.addEventListener('click', goToSubjective);
submitBtn.addEventListener('click', onSubmit);
retakeBtn.addEventListener('click', resetAndNewSession);

initialize();