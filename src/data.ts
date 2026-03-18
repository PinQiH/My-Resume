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
  },
  summary: "具備三年 Node.js 後端開發經驗，精通 Express、Sequelize 與 PostgreSQL，擅長設計高擴展性的 API 架構。長期關注生成式 AI 技術落地，開發多套 RAG (檢索增強生成) 與多代理人 (Multi-Agent) 架構應用。具備從資料特徵工程、向量資料庫建置到 LLM 代理人協作的完整系統整合經驗，致力於結合穩健的後端工程與創新的 AI 技術解決商業痛點。",
  about: [
    "我是一名具備 SA (系統分析) → SD (系統設計) → 開發 全生命週期掌控能力的後端工程師。專精於以 Node.js、PostgreSQL 與 RabbitMQ 為核心技術堆疊，建構高併發、高擴展性的企業級系統。我深信穩健的後端基石是技術創新的前提，因此致力於將 Clean Architecture 與 DevOps 規範導入團隊，確保系統在快速迭代中仍保有極高的健壯性。",
    "▍核心優勢一：AI 賦能開發流程 (AI-Driven Development) 與風險控管\n我不僅是 AI 的使用者，更能將 AI 深度整合至日常工程流程中，打造端到端的開發閉環：\n• 流程自動化與防護：利用 NotebookLM 快速建立需求上下文，透過 Agent 盤點架構，並結合 ESLint、Husky 與自製 AI Code Review 插件，建立堅固的品質防線。\n• Agent 邊界與風險控管：具備成熟的 AI 工具落地經驗，例如設計客製化 Git Commit Workflow，嚴格限制輸入來源 (僅讀取 Staged Diff)、加入人工確認機制，確保 AI 產出穩定且符合規範。\n• 推動團隊技術轉型：主動向團隊引入「AI 輔助 TDD 開發」流程，降低撰寫測試的門檻，成功將測試規範制度化，顯著降低系統出錯率。",
    "▍核心優勢二：卓越的後端工程與效能優化能力\n在技術深耕的歷程中，我擅長處理高複雜度的系統設計與效能挑戰：\n• 大規模系統設計：主導設計支撐 50+ 張資料表 的複雜關聯架構，並導入 Repository Pattern 與 Joi 驗證層，實現業務邏輯與資料存取的深度解耦。\n• 極致效能調優：具備深厚的資料庫診斷經驗，曾透過索引優化與查詢重構，將關鍵頁面加載時間從 40 秒大幅縮減至 5 秒內，顯著提升用戶體驗。\n• 嚴謹的權限與資安設計：具備細緻化權限模型 (RBAC) 設計經驗，落實越權防護與邊界測試，並嚴格控管敏感資料 (如 Log 過濾與離線儲存)，確保系統安全性。",
    "▍核心優勢三：生成式 AI 落地與 RAG 架構實踐\n更專注於解決 Generative AI 落地於生產環境時的工程挑戰，實現端到端的 AI 產品化：\n• 高準確率 RAG 引擎：主導開發專業領域 RAG 系統，實作語意切塊 (Semantic Chunking) 與意圖分類過濾，防止 Prompt Injection，並導入 RAGAS 評分架構進行品質追蹤。\n• 高品質回饋循環：設計內部審核機制的反饋迴圈，將高評分的優質回答經人工確認後回寫至向量資料庫，持續優化模型回覆語氣與精準度。\n• 地端與雲端整合：具備地端 LLM 部署、量化評估及 AWS AI 服務整合經驗，作品成功入圍 經濟部智慧創新大賞決賽。",
    "▍未來展望：以穩健基石驅動前瞻創新\n我致力於在 AI 浪潮中保持技術領先，不僅追求 AI 模型的應用深度，更在乎後端系統的工程高度。我期望將這份「穩健後端」與「前瞻 AI」兼具的雙重優勢，轉化為具備商業競爭力的解決方案，為企業解決最棘手的技術難題。"
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
        "【AI 賦能開發與工程標準化】\n• AI 端到端開發閉環：將 AI 深度導入日常開發，涵蓋需求釐清 (NotebookLM)、架構盤點 (Agent)、TDD 測試生成，並結合 ESLint/Husky 與自製 AI Code Review 插件，建立堅固的品質防線。\n• Agent 邊界與風險控管：開發客製化 Git Commit Workflow，嚴格限制 AI 僅讀取 Staged Diff 並加入人工確認機制，實現可控的 AI 自動化流程落地。\n• 推動團隊品質文化：主動向團隊引入「AI 輔助 TDD 開發」流程，降低撰寫測試的門檻，成功將測試規範制度化，顯著降低系統出錯率。",
        "【系統架構與設計規範】\n• 全域架構規劃：跨足 SA 與 SD，主導 Node.js + Express + PostgreSQL 的系統開發框架，針對業務需求設計 50+ 張資料表及複雜外鍵關聯，確保數據一致性與擴展性。\n• 嚴謹的權限模型 (RBAC)：重新設計並實作多角色權限架構，落實越權防護與邊界測試，並嚴格控管敏感資料 (Log 過濾與離線儲存)，確保系統安全性。",
        "【生成式 AI (LLM) 與 RAG 落地】\n• RAG 系統開發：自主研發多套 RAG 系統，實作語意切塊與意圖分類過濾防止 Prompt Injection，並導入 RAGAS 評分架構與人工審核回饋機制，持續優化模型精準度。\n• AI 工程化實踐：設計 AI 方案整合流程，負責從技術選型到架構實作。憑藉創新的 AI 落地應用，代表團隊入圍 經濟部智慧創新大賞決賽。",
        "【高效開發與效能優化】\n• 極速 API 交付：維持高度產出，曾達成單週交付 20+ 支高品質 API 之紀錄；文件詳盡涵蓋資料流、權限控管與資料庫影響評估，確保前後端無縫協作。\n• 效能調優：精通資料庫效能診斷，透過 Index 優化與 Sequelize Query 調整，成功將核心頁面載入時間從 40 秒縮短至 5 秒內。"
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
      period: "近期專案",
      description: "針對運動員檢測資料庫進行後端重構與權限細緻化。在時程緊迫且單人負責後端的情況下，全面導入 AI 輔助開發流程，成功兼顧開發速度與程式碼品質。",
      techStack: "Node.js, PostgreSQL, Antigravity Agent, NotebookLM, TDD, Husky",
      achievements: [
        "AI 端到端開發閉環：利用 NotebookLM 快速建立歷史需求上下文，並透過 Agent 盤點架構，大幅縮短需求釐清時間。",
        "TDD 與自動化防護：透過 AI 輔助優先撰寫 Unit/Integration Test，並結合 ESLint 與 Husky 建立品質防線，確保重構過程的穩定性。",
        "細緻化權限模型 (RBAC)：重新設計並實作多角色 (系統管理員、資料管理員、教練、運動員) 的資料可見範圍與越權防護，並涵蓋完整的邊界測試 (Edge Cases)。",
        "推動團隊品質文化：主動向團隊引入「AI 輔助 TDD 開發」流程，降低撰寫測試的門檻，成功將測試規範制度化，顯著降低系統出錯率。"
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
