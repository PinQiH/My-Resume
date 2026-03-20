export const resumeData = {
  name: "黃品綺 (Cassie)",
  profileImage: "./profile.jpg", // 替換為您的照片 URL 或本地路徑 (例如: /profile.jpg)
  title: "AI 軟體工程師 / 後端工程師",
  tags: ["好學", "勇於挑戰", "耐心", "自律", "生成式AI", "後端"],
  contact: {
    email: "cassie34131@gmail.com",
    phone: "0972-723-890",
    contactNote: "聯絡請以 Email 為主",
    location: "桃園市桃園區",
    github: "https://github.com/cassie34131",
    linkedin: "https://www.linkedin.com/in/cassie-ba743537b",
    birthday: "2000.11.29",
  },
  summary: "具備三年 Node.js 後端開發經驗，精通 Express、Sequelize 與 PostgreSQL，擅長設計高擴展性的 API 架構。長期關注生成式 AI 技術落地，開發多套 RAG (檢索增強生成) 與多代理人 (Multi-Agent) 架構應用。具備從資料特徵工程、向量資料庫建置到 LLM 代理人協作的完整系統整合經驗，致力於結合穩健的後端工程與創新的 AI 技術解決商業痛點。",
  about: [
    "我是一名兼具「系統分析 (SA) 到全端開發」全生命週期掌控力，且具備強烈產品當責精神 (Ownership) 的後端/AI 軟體工程師。深信「穩健的架構基石是技術創新的前提」，我的職涯專注於透過 Node.js 與微服務架構建構高併發的企業級平台。我追求的不僅是程式碼的健壯性，更重視技術如何確切解決真實的商業與流程痛點。",
    "▍超越代碼的專案統籌與跨界彈性\n與單純接受指令的開發者不同，我具備從零規劃全域架構的能力，並擁有豐富的大型專案跨職能協作經驗。在面臨團隊資源短缺時，我能主動補位技術專案管理 (Tech PM) 甚至跨域支援前端開發，建立進度追蹤並擔綱客戶與團隊間的溝通樞紐。對我而言，工程師的職責不應侷限於技術邊界，確保團隊能順利推進並達成商業目標，才是我最大的成就感來源。",
    "▍以 AI 驅動開發的現代化工程實踐\n面對生成式 AI 浪潮，我專注於「工程化落地」與「風險控管」。在日常協作中，我主導將 AI 工具無縫整合至團隊 CI/CD 流程，打造自動化測試與 Code Review 閉環；在產品設計上，我擁有深厚的實戰經驗，設計以 RAG 架構為核心的企業級知識庫與推薦引擎，並深諳如何建立 AI 安全防護邊界 (Guardrails)，嚴密防止模型幻覺與惡意指令 (Prompt Injection)。",
    "▍效能至上與極致的品質要求\n面對大型政府標案與大流量媒體專案，我擅長排解高複雜度的資料關聯與效能瓶頸。無論是透過資料庫重配將查詢時間大幅縮減、導入 RabbitMQ 非同步處理機制吸收高載流量，或是落實細緻化的 RBAC 權限，我堅持導入 Clean Architecture 與 TDD 驅動開發思維，確保系統在敏捷迭代的商戰中，永遠保持極致響應速度與資訊安全。",
    "▍未來展望\n我深知在技術快速發展的時代，對生成式 AI 的深刻理解與實戰落地能力是我目前最大的競爭優勢。我期許自己能緊抓這波 AI 浪潮持續進步，不僅將最前沿的技術轉化為解決商業痛點的實用工具，更致力於探索 AI 與企業級後端生態系的深層融合。期望能加入具備高度技術挑戰與創新願景的團隊，以不斷進化的 AI 洞察力與穩固的工程基石，共同打造出具備深遠影響力的卓越產品。"
  ],
  skills: [
    {
      category: "後端開發與架構設計 (Backend & Architecture)",
      items: [
        { name: "核心技術", desc: "精通 Node.js (Express) 開發高併發 RESTful API，具備 SA/SD 經驗，能從零規劃系統架構與資料庫模型。" },
        { name: "資料庫管理", desc: "深厚 PostgreSQL 實務經驗，擅長使用 Sequelize ORM 進行複雜多表關聯設計、交易處理 (Transaction) 與效能調優（曾有將 40s 查詢優化至 <5s 實績）。" },
        { name: "架構模式", desc: "落實 Middleware、Router 與 Repository 層分層設計，確保代碼高度解耦與可維護性。" },
        { name: "異步與排程", desc: "專精 RabbitMQ 訊息隊列處理大量併發任務，並設計 node-cron 動態排程系統監控執行狀態。" }
      ],
      tags: ["#PostgreSQL", "#Node.js", "#RDBMS"]
    },
    {
      category: "生成式 AI 與 RAG 應用 (Generative AI / LLM)",
      items: [
        { name: "AI 落地實作", desc: "具備 OpenAI API 整合及地端 LLM 部署經驗，成功開發多套 RAG (檢索增強生成) 系統，入圍經濟部智慧創新大賞決賽，並曾受邀參與 2024 年 AWS 生成式 AI 創新產業應用日展示。" },
        { name: "向量檢索優化", desc: "熟悉向量資料庫應用，並透過 Hybrid Search 等策略優化檢索準確度，解決專業領域的 AI 幻覺問題。" }
      ],
      tags: ["#AI", "#LLM", "#語言模型", "#提示工程", "#Prompt", "#生成式AI"]
    },
    {
      category: "資訊安全與工程品質 (Security & Quality)",
      items: [
        { name: "AI 賦能開發", desc: "精通將 AI 納入日常工程流程，利用 Agent 盤點架構、TDD 輔助測試生成，並設計客製化 Git Commit Workflow，具備成熟的 AI 邊界與風險控管能力。" },
        { name: "資安與驗證", desc: "實作 JWT 與 RBAC 權限控管；導入 Joi 進行嚴格輸入驗證，從源頭阻擋 SQL Injection 與髒資料。" },
        { name: "自動化品質守門 (DevOps)", desc: "串接 Git CI 流程，並配置 Husky (Git Hooks) 實作 Pre-commit 檢查（Linting/Testing），確保進入版本庫的程式碼皆符合規範。" },
        { name: "現代化開發規範", desc: "推動團隊轉型 TypeScript 以強化型別安全；導入 TDD (測試驅動開發) 概念，確保核心邏輯具備高測試覆蓋率與系統穩定性。" }
      ],
      tags: ["#Git", "#Security", "#AI-Driven"]
    }
  ],
  experience: [
    {
      company: "凌群電腦股份有限公司",
      title: "軟體工程師",
      period: "2023/7 ~ 仍在職",
      location: "台北市萬華區",
      description: "主導系統全生命週期開發，整合生成式 AI 技術落地，並推動 AI 賦能開發流程",
      details: [
        "【AI 賦能開發與工程標準化】\n• AI 端到端開發閉環：將 AI 深度導入日常開發，涵蓋需求釐清 (NotebookLM)、架構盤點 (Agent) 與 TDD 測試生成，並結合 ESLint/Husky 建立起堅固的程式碼品質防線。\n• 建立安全可控的 AI 工作流：自主開發 AI Code Review 擴充套件，並導入自動化 Git Commit 訊息生成。所有生成的審查建議與提交記錄，發布前皆強制由工程師人工確認，確保工具使用絕對安全不越界。\n• 推動團隊品質文化：主動向團隊引入「AI 輔助 TDD 開發」流程，降低撰寫測試的門檻，成功將測試規範制度化，顯著降低系統出錯率。",
        "【系統架構與設計規範】\n• 全域架構規劃：跨足 SA 與 SD，主導 Node.js + Express + PostgreSQL 的系統開發框架，針對業務需求設計 50+ 張資料表及複雜外鍵關聯，確保數據一致性與擴展性。\n• 嚴謹的權限模型 (RBAC)：重新設計並實作多角色權限架構，落實越權防護與邊界測試，並嚴格控管敏感資料 (Log 過濾與離線儲存)，確保系統安全性。",
        "【生成式 AI (LLM) 與 RAG 落地】\n• RAG 系統開發：自主研發多套 RAG 系統，實作語意切塊與意圖分類過濾防止 Prompt Injection，並導入 RAGAS 評分架構與人工審核回饋機制，持續優化模型精準度。\n• AI 工程化實踐：設計 AI 方案整合流程，負責從技術選型到架構實作。憑藉創新的 AI 落地應用，代表公司入圍經濟部智慧創新大賞決賽並參加 AWS 生成式 AI 創新產業應用日。",
        "【高效開發與效能優化】\n• 極速 API 交付：維持高度產出，曾達成單週交付 20+ 支高品質 API 之紀錄；文件詳盡涵蓋資料流、權限控管與資料庫影響評估，確保前後端無縫協作。\n• 效能調優：精通資料庫效能診斷，透過 Index 優化與 Sequelize Query 調整，成功將核心頁面載入時間從 40 秒縮短至 5 秒內。",
        "【跨領域專案開發 (參與 10+ 專案)】\n• 高產能開發與業務落地：任職期間主導或參與 10+ 個專案。熟悉複雜業務邏輯，獨立參與運動員檢測資料庫平台、課程媒合平台等 Node.js 後端開發，展現極高產能。\n• 跨技術棧維護與自動化維運：具備高度技術適應力，跨語言支援大型電信商戶客帳系統 (ASP.NET)、行動通訊業務 (PHP) 等高併發平台；並運用 Python 開發設備配置 (Device Configuration) 自動化備份腳本，有效降低人工維護成本。"
      ]
    },
    {
      company: "艾陽科技股份有限公司",
      title: "AI人工智慧圖像標註(兼)",
      period: "2023/3 ~ 仍在職",
      location: "新北市新店區",
      description: "在大四下學期時，我參與了校外的實習計畫，進入艾陽科技從事圖片標註的工作，該公司主要業務範圍為 AI 系統的開發，因此我在該公司了解了很多 AI 相關的實際應用，而我認為圖片標註這份工作雖然難度不高，但卻是 AI 模型成功與否的重大關鍵，因此需要很仔細謹慎地標註資料，在此實習工作當中，我不只增進了 AI 相關的硬實力，也增強了讓自己進下心來，對工作保持專注和細心的軟實力。",
      details: ["#LabelImg #進行數據判讀及標註作業 #確認所標註資料的準確度及一致性 #學習 AI 與機器學習的基礎觀念"]
    },
    {
      company: "義匠義式湯麵",
      title: "內外場服務員",
      period: "2019/5 ~ 2022/11",
      location: "桃園市桃園區",
      description: "我在義匠義式湯麵擔任服務員已三年，這三年來我做過內場、外場，相比之下，我認為外場對我來說是個比較合適的工作，雖然不是每個客人都會用禮貌對待服務人員，但我仍然認為與客人互動是一件有趣的事，能透過自身的能力去滿足顧客的需求，並且解決所有的突發狀況，這件事情本身就能讓我有滿滿的成就感。",
      details: ["#食物製前準備 #廚房器具使用維護 #櫃檯門市接待與需求服務 #產品介紹及解說銷售 #電話接聽與人員接待事項 #客訴案件處理"]
    }
  ],
  projects: [
    {
      name: "運動員檢測資料庫平台 (後端架構與權限優化)",
      period: "2025/09 ~2025/11",
      description: "針對運動員檢測資料庫進行後端重構與權限細緻化。在時程緊迫且單人負責後端的情況下，全面導入 AI 輔助開發流程，成功兼顧開發速度與程式碼品質。",
      techStack: "Node.js, PostgreSQL, Antigravity Agent, NotebookLM, TDD, Husky",
      achievements: [
        "極速重構與業務穩定：成功於 2 個月內完成全站 API 重構，徹底解決系統技術債，並顯著降低系統上線後的使用者客訴次數。",
        "AI 端到端開發閉環：利用 NotebookLM 快速建立歷史需求上下文，並透過 Agent 盤點架構，大幅縮短需求釐清時間。",
        "TDD 與自動化防護：透過 AI 輔助優先撰寫 Unit/Integration Test，並結合 ESLint 與 Husky 建立品質防線，確保重構過程的穩定性。",
        "細緻化權限模型 (RBAC)：重新設計並實作多角色 (系統管理員、資料管理員、教練、運動員) 的資料可見範圍與越權防護，並涵蓋完整的邊界測試 (Edge Cases)。",
        "推動團隊品質文化：主動向團隊引入「AI 輔助 TDD 開發」流程，降低撰寫測試的門檻，成功將測試規範制度化，顯著降低系統出錯率。"
      ]
    },
    {
      name: "國家級教育廣播平台改版專案 (後端核心開發與跨職能協作)",
      period: "2025/02 ~ 2025/08",
      description: "擔任後端核心開發並兼任專案協調角色。在原 PM 請長假且 SA 資源緊缺期間，補位擔綱對外客戶溝通與對內進度追蹤之橋樑，更於專案中期開始主導後端架構設計與任務分派，同時維持極高的 API 核心產出。",
      techStack: "Project Coordination, SA (System Analysis), Node.js, RabbitMQ, Message Queue, AI Tagging",
      achievements: [
        "主動補位與跨職能協調：在專案管理資源短缺期間，擔綱客戶與開發團隊的溝通樞紐，負責每週開發進度控管與任務拆解。專案中期擔起主力設計，獨立規劃近乎全站的後端功能架構，經資深 SA 驗證後順利轉為工單落地，引導團隊開發。後期因前端開發人力極度短缺，主動擴展技術守備範圍支援前端開發，確保專案整體進度不受阻礙。",
        "跨域雙棲的高強產能：在兼任大量跨職能溝通、客戶會議與系統規劃等滿載工作量的同時，自身核心 API 的交付產能與程式碼品質絲毫未減，展現極高的敏捷性與專案推進抗壓力。",
        "微服務架構導入 (RabbitMQ)：將 RabbitMQ 訊息佇列 (Message Queue) 技術導入系統架構中，建立非同步 Worker 處理機制以吸收龐大影音平台的耗時運算任務，大幅提升系統吞吐量 (Throughput) 與整體穩定性。",
        "AI 智能標籤與推薦系統加值：引進大語言模型 (LLM) 實作單集節目的 AI 智慧標籤化 (AI Tagging) 機制。為海量廣播內容自動生成具體的關聯標籤，不僅優化了全站搜尋的精準度，更大幅強化了節目推薦引擎與內容推廣的商業成效。"
      ]
    },
    {
      name: "基於 Agentic RAG 架構之 Spotify 個人化音樂推薦系統",
      period: "2025/11 ~ 2025/12",
      description: "這個專案的目標是打造一個「不但能推薦好歌，還能解釋為什麼推薦」的 AI 助手。它解決了傳統推薦系統在沒有用戶歷史數據時無法運作的問題（冷啟動），並透過 AI 代理人（Agents）來模仿人類的推理過程。",
      techStack: "Python, ChromaDB, Scikit-learn, OpenAI API (GPT-4o), OpenRouter API, Pandas, PCA等等",
      achievements: [
        "解決冷啟動問題：在缺乏真實用戶數據的情況下，利用 ItemRAG 架構與 合成用戶畫像 (Synthetic Personas) 技術，成功構建針對 11.4 萬首 Spotify 歌曲的個人化推薦引擎。",
        "高維特徵工程：執行特徵標準化、對數轉換及 調性週期編碼 (Cyclic Encoding)，並透過 PCA 主成分分析 將維度降維（前 5 主成分解釋 70% 變異量），建立高效率的特徵相似度檢索庫。",
        "多代理人協作 (Multi-Agent System)：實作 ARAG 架構，部署「用戶理解」與「排序生成」代理人，結合 ChromaDB 向量檢索，實現具備 可解釋性 (Explainable AI) 的音樂推薦，能依據 BPM 與情緒數值生成推薦理由。"
      ]
    },
    {
      name: "AI 多媒體智慧解析平台",
      period: "2025/12 ~ 2025/12",
      description: "本專案是一個基於 AI 技術的音訊處理系統。旨在提供從音訊上傳、自動語音轉錄、智慧錯字修正到自動化內容摘要的一站式解決方案。透過本地運行的高精準度語音模型與雲端大語言模型 (LLM) 的結合，實現了高效、準確且具備時間戳記導讀功能的數位內容萃取工具。",
      techStack: "Backend: Python / FastAPI, Frontend: Streamlit, AI: OpenAI Whisper / Google Gemini API, DB: PostgreSQL / Supabase / SQLite, Tools: FFmpeg",
      achievements: [
        "混合雲端處理架構：成功整合「本地 Whisper 轉錄」與「雲端 Gemini 語意解析」，平衡了計算成本與模型精準度。",
        "智慧化內容增強：開發了自動錯字修正與繁簡轉換引擎，解決了語音轉文字常見的語音標點與語法不通順問題，大幅降低人工校對時間。",
        "自動化時間戳摘要：實作了帶有精準時間戳記的摘要演算法，讓使用者能快速點擊並定位至關鍵音訊片段，並提供字幕檔下載。",
        "低成本產品化路徑：規劃並實作了基於免費/低成本方案 (Supabase) 的資料庫遷移，成功從單機測試環境擴展至具備可伸縮性的雲端架構。"
      ]
    },
    {
      name: "大型軌道運輸智能客服與知識庫 (生成式 AI 架構規劃)",
      period: "2025/01 ~ 2025/05",
      description: "擔任此大型專案的技術組長 (Tech Lead)，主導軌道運輸業者之生成式 AI 智能客服與內部知識庫架構規劃。不僅負責底層技術選型與產出 RAG (檢索增強生成) 落地架構，更全面統整團隊開發進度與對外競賽事務。",
      techStack: "Tech Leadership, Project Management, AI System Architecture, RAG, LLM",
      achievements: [
        "AI 系統架構設計：主導規劃智能客服系統底層架構，運用 RAG 技術深度整合軌道運輸領域之龐大專業知識庫，大幅提升系統問答精準度與客服支援效率。",
        "邊界防護與風險控管：針對公共運輸之嚴格安全性要求，設計多層意圖分類(Intent Classification)機制與 AI 回覆安全邊界防護(Guardrails)，徹底防止模型幻覺與 Prompt Injection 攻擊。",
        "技術領導與專案管理：建立進度追蹤機制引導團隊方向，定期組織技術會議排解開發障礙並提供系統解決方案；熟稔所有開發與活動流程，帶領團隊打通從開發到產品化的最後一哩路。",
        "競賽統籌與指標性肯定：全面負責競賽報告撰寫與技術文件整合。帶領團隊代表公司參賽，憑藉高商業落地價值之 AI 解決方案，成功入圍「2025 年經濟部智慧創新大賞」決賽。"
      ]
    },
    {
      name: "衛教助理 — LLM 與 RAG 引擎創新服務",
      period: "2024/5 ~ 2024/10",
      description: "針對醫療現場醫護人力不足及專業術語溝通斷層之痛點，主導開發一套智能衛教平台。系統透過 RAG (檢索增強生成) 技術與 AWS 語音服務，將醫院專業衛教單張轉化為可即時互動、語音化的個性化衛教助理，協助患者在門診或遠距健康諮詢中獲得精準的健康指導。",
      techStack: "LLM (GPT-4/Llama), RAG, ChromaDB, Python, Django, AWS Transcribe, AWS Polly",
      achievements: [
        "高精準度檢索設計：利用 ChromaDB 處理大量醫院公開衛教單張，設計高效的資料清洗與索引流水線，確保 AI 回覆內容皆有法源與醫學文獻依據，有效消除模型幻覺。",
        "防護與評估機制：實作語意切塊 (Semantic Chunking) 與意圖分類過濾，防止 Prompt Injection；導入 RAGAS 評分架構進行離線評估與品質追蹤。",
        "高品質回饋循環：設計內部審核機制的反饋迴圈，將高評分的優質回答經人工確認後回寫至向量資料庫，持續優化模型回覆語氣與精準度。",
        "多模態語音整合：串接 AWS Transcribe 與 Polly，實現醫病對話即時轉錄與自動化語音衛教，顯著降低患者閱讀專業術語的門檻，提升學習吸收率。",
        "異步處理架構：設計非同步任務流程處理大規模文獻 Embedding 索引，確保系統在更新衛教知識庫時仍能維持高性能響應。",
        "技術權威認可：於 2024 年 AWS 生成式 AI 創新產業應用日 受邀展示，並獲得高度評價與產業關注。"
      ]
    }
  ],
  education: [
    {
      school: "臺北市立大學",
      department: "資訊科學學系 在職碩士就讀中",
      period: "2025/9 ~ 2027/6"
    },
    {
      school: "輔仁大學",
      department: "資訊管理學系 大學畢業",
      period: "2019/9 ~ 2023/6"
    },
    {
      school: "國立桃園高中",
      department: "普通科 高中畢業",
      period: "2016/9 ~ 2019/6"
    }
  ],
  certifications: [
    "Certificate of Completion: AI Fluency Framework & Foundations - Anthropic (2026/03)",
    "Certificate of Completion: Claude 101 - Anthropic (2026/03)",
    "Claude Code in Action - Anthropic (2026/03)",
    "Gemini Certified Faculty - Google for Education (2026/02)",
    "Gemini Certified University Student - Google for Education (2026/02)",
    "Gemini Certified Educator - Google for Education (2026/02)",
    "Building AI-Powered Search with MongoDB Vector Search - MongoDB (2025/09)",
    "AWS Certified AI Practitioner - Amazon Web Services (2024/10)",
    "AI-900 - Microsoft (2023/06)",
    "TOEIC (多益測驗) 720"
  ]
};
