<div align="center">

<img src="assets/banner-zh.jpg" alt="akinator — 为 AI 编程助手打造的零认知负担意图推断引擎" width="100%">

告别提示词倦怠。当你疲惫、精力透支或完全不想长篇大论时，Akinator 会自动深度扫描代码库上下文，以 2 步 Typeform 风格极简分流锁定意图，并立即自主执行。

[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](LICENSE)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-Plugin-black)](https://code.claude.com/docs)
[![Antigravity](https://img.shields.io/badge/Antigravity-Skill-black)](https://antigravity.google)
[![Typeform 风格](https://img.shields.io/badge/UI-Typeform%20Aesthetic-black)](#-typeform-极简体验)

[English](README.md) · [Español](README.es.md) · 中文

</div>

---

## 核心痛点

每位开发者都经历过这种**认知超载状态**：在经历了数小时的上下文切换后，你坐在终端前，明知有任务要推进，却根本没有精力去构思一段长篇大论的 Prompt 来解释当前代码进度。

当你向常规 AI 助手抛出模糊指令（例如 *“接下来做什么？”* 或 *“继续”*）时，通常会遭遇两大痛点：
1. **盘问陷阱：** AI 吐出一份长达 10 项的繁杂清单，并抛回 5 个开放式问题让你逐一解答。
2. **幻觉误判：** AI 被临时缓存或无关日志误导，开始修改不相干的代码。

**Akinator 通过重构交互形态彻底化解了这一问题。**

---

## 运作机制

Akinator 将意图推断转化为零摩擦、零认知负担的自动化流水线：

- **深度上下文预检：** 自动检查 `git status`、近期提交记录（`git log -n 5`）、未提交 diff 以及项目追踪文件（`TODO.md`、`ROADMAP.md`、`ESTADO.md`）。
- **严格噪声过滤：** 在推断意图前，自动剥除临时文件与缓存干扰（`.cache`、`tmp`、`node_modules`、`dist`、`build`、lockfiles）。
- **2 步 Typeform 极简分流：** 将真实状态提炼为宽敞、低密度的卡片（`[ 1 ]`、`[ 2 ]`、`[ 3 ]`）。你只需输入单个数字。
- **即时自主执行：** 一旦确认选项（`1`、`2` 或 `3`），Akinator 省去所有客套废话，立即启动高质量工程实现。

---

## 🎨 Typeform 极简体验

摒弃密密麻麻的文本堆砌，Akinator 采用高留白交互卡片，最大程度减轻视觉与认知压力：

```markdown
✨  **AKINATOR**  •  第 1 题（共 2 题）


### 今天我们要推进哪个业务领域？

---


   [ 1 ]   核心功能迭代
           实现未完成的 API 接口、业务逻辑或前端用户流程。




   [ 2 ]   重构与代码质量提升
           清理技术债、强化 TypeScript 类型安全或解耦复杂模块。




   [ 3 ]   测试套件、工具链与 CI/CD
           修复报错的单元测试、校验部署流水线或优化打包构建。


---

👉 *仅需回复 `1`、`2` 或 `3`*
```

在你输入单个字符（如 `1`）后，Akinator 会给出精准的执行假设：

```markdown
✨  **AKINATOR**  •  第 2 题（共 2 题）


### 基于你最近的代码变更，建议立即执行以下任务：

---


   [ 1 ]   补全身份认证中间件
           完成在 `src/auth/guard.ts` 中尚未写完的 JWT 校验逻辑。




   [ 2 ]   修复 Webhook 签名验证缺陷
           修正 Stripe Webhook 接口中的签名对比逻辑错误。




   [ 3 ]   运行数据库迁移与集成测试
           应用最新的数据库 Schema 变更并运行全量测试套件。


---

👉 *回复 `1`、`2` 或 `3` 立即开始执行*
```

---

## 方案对比

| 维度 | Akinator | 普通 AI 助手 | 手动编写 Prompt |
|---|---|---|---|
| **认知负担** | **极低（敲击 2 次键盘）** | 高（阅读大段文本与提问） | 极高（需梳理全部上下文并码字） |
| **交互摩擦** | 仅需输入 `1`、`2` 或 `3` | 来回多轮长篇对话 | 需花费精力编写长 Prompt |
| **噪声过滤** | 自动剔除临时文件与缓存 | 极易被缓存/日志带偏 | 依赖开发者手动筛选 |
| **执行触发** | **第 2 步确认后立即自动执行** | 往往需要反复确认 | 需多次输入跟进指令 |
| **界面呈现** | Typeform 高留白卡片流 | 密集无序的项目符号 | 原始非结构化文本 |

---

## 安装指南

### 方式 1：Claude Code 插件安装（推荐）

```
/plugin marketplace add obeskay/akinator
```
```
/plugin install akinator@akinator
```

> [!NOTE]
> 请分两次发送上述指令。安装完成后请开启新会话以加载插件。

---

### 方式 2：直接安装 Skill

将 `skills/akinator/` 目录复制或克隆到对应路径：

**Claude Code：**
```bash
git clone https://github.com/obeskay/akinator.git ~/.claude/skills/akinator
```

**Antigravity (AGY)：**
```bash
git clone https://github.com/obeskay/akinator.git ~/.gemini/config/skills/akinator
```

**Codex / Agent 体系：**
```bash
mkdir -p .agents/skills && cp -r /path/to/akinator/skills/akinator .agents/skills/
```

---

## 触发词与日常用法

无需刻意记忆复杂命令，在疲惫不想打字时自然输入即可：

```
tengo hueva
```
```
léceme la mente
```
```
接下来该做什么？
```
```
累了，帮我搞定下一步
```
```
/akinator
```

---

## 架构流程

```
  ┌───────────────────────────────────────────────────────────┐
  │  开发者输入: "tengo hueva" / "接下来干嘛" / "/akinator"   │
  └─────────────────────────────┬─────────────────────────────┘
                                │
                                ▼
  ┌───────────────────────────────────────────────────────────┐
  │  1. 深度上下文预检                                        │
  │     • git status -s 与 git log -n 5                       │
  │     • 未提交的代码差异 (diff)                             │
  │     • TODO.md / ROADMAP.md / 状态笔记                     │
  └─────────────────────────────┬─────────────────────────────┘
                                │
                                ▼
  ┌───────────────────────────────────────────────────────────┐
  │  2. 严格噪声过滤                                          │
  │     • 剔除: tmp/, .cache/, node_modules/, dist/, build/   │
  └─────────────────────────────┬─────────────────────────────┘
                                │
                                ▼
  ┌───────────────────────────────────────────────────────────┐
  │  3. 2 步 Typeform 极简分流                                │
  │     • 第 1 步: 宏观业务领域 ([ 1 ], [ 2 ], [ 3 ])         │
  │     • 第 2 步: 具象行动假设                               │
  └─────────────────────────────┬─────────────────────────────┘
                                │ (用户仅回复 '1', '2' 或 '3')
                                ▼
  ┌───────────────────────────────────────────────────────────┐
  │  4. 即时自主执行                                          │
  │     • 零废话客套                                          │
  │     • 交付生产级完整实现                                  │
  └───────────────────────────────────────────────────────────┘
```

---

## 开源共建

欢迎提交 Issue、Pull Request 与优化建议。请始终遵循核心设计哲学：**零认知负担、极简交互与高品质视觉。**

---

## 开源协议

[MIT](LICENSE) © [obeskay](https://github.com/obeskay)
