<div align="center">

<img src="assets/banner-zh.jpg" alt="akinator — 为 AI 编程助手打造的零认知负担意图推断引擎" width="100%">

告别提示词倦怠。当你疲惫、精力透支或完全不想长篇大论时，Akinator 会自动深度扫描代码库上下文，以极简单选提问锁定意图，通过否定式提问生成清晰规范（Spec），并立即自主执行。

[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](LICENSE)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-Plugin-black)](https://code.claude.com/docs)
[![Antigravity](https://img.shields.io/badge/Antigravity-Skill-black)](https://antigravity.google)
[![Version 2.0.0](https://img.shields.io/badge/Version-2.0.0-black)](#)

[English](README.md) · [Español](README.es.md) · 中文

</div>

---

## 核心痛点

每位开发者都经历过这种**认知超载状态**：在经历了数小时的上下文切换后，你坐在终端前，明知有任务要推进，却根本没有精力去构思一段 500 字的 Prompt 来解释当前代码进度。

当你向常规 AI 助手抛出模糊指令（例如 *“接下来做什么？”* 或 *“继续”*）时，通常会遭遇两大痛点：
1. **盘问陷阱：** AI 吐出一份长达 10 项的繁杂清单，并抛回 5 个开放式问题让你逐一解答。
2. **幻觉误判：** AI 被临时缓存或无关日志误导，开始修改不相干的代码。

**Akinator 通过两种深度模式彻底化解了这一问题：下一步模式（Next-Step Depth）与规范推断模式（Spec Depth）。**

---

## 两种运作模式

### 1. 下一步模式（基于现有仓库）
当代码库中已有进行中的任务时：
- **静默上下文预检（<1 分钟）：** 读取 `git status -s`、最近 5 次提交、未提交 diff 以及待办追踪（`TODO.md`、`ROADMAP.md`）。自动剔除所有缓存、构建和依赖噪音。
- **具象假设直达：** 若上下文指向明确（如报错测试、未完成任务），直接跳过提问，提供 3 个带具体文件与行号的选项，最可能的一项置顶，加一项“以上皆非”。
- **空任务电量探针：** 若仓库干净无未完任务，仅问一轮 2 个极简问题：
  - *“今天还剩多少电量？”*（少量 / 中等 / 充沛 → 15分钟小修 / 独立小功能 / 深度重构）。
  - *“想推进哪类改动？”*（看得到的界面 / 底层逻辑 / 整理清理）。
- **即刻自主执行：** 用户一点选，Akinator 立即开始编码，零废话无多余确认。

### 2. 规范推断模式（从模糊想法起步）
当你想做一个新产品或新功能，但没有清晰思路时：
- **否定优先（Via Negativa）：** 先问不想要什么、先剔除什么。最讨厌什么？什么是明确不做？
- **连续字母极简卡片：** 选项采用全卡片连续字母（`a–c`、`d–f`、`g–i`、`j–l`），单行回复（如 `b f i j`）即可精准解析，彻底杜绝位置歧义。
- **生活隐喻映射设计规则：** *“如果这是一款食物：街头快餐、标准套餐还是高级定制？”* 隐喻直接转化为代码和架构约束。
- **心理咨询式回响：** 每轮过后以单行进度条和反思句快速对齐认知。
- **规范（Spec）随最终推断一并交付：** 在最终猜想给出的同时，直接在 `specs/<slug>.md` 产出完备可执行的工程规范，包含：
  - **核心范围（What's in）** 与 **明确不做（What's out）**
  - **交互质感与基调**
  - **可观测验收标准**（`[ ]`）
  - **潜在风险与默认假设**
  - **启动的第一步**

---

## 🎨 极简交互体验

问题以清爽卡片呈现，仅需在单行回复字母：

```
akinator ▪ round 1 of 2

1. 谁是核心使用者？              a) 你自己   b) 客户   c) 团队成员
2. 一觉醒来它已经做好了，首先注意到什么？
   d) 不用再把下午耗在这件事上   e) 订单变多了   f) 大家不用问就知道干嘛
3. 最让你抓狂的情况是？          g) 太慢   h) 太丑   i) 流程太繁琐
4. 如果这是一款食物……            j) 街头快餐   k) 便民快餐   l) 精致大餐

在单行输入字母，如 "b f i j" · ok = 推荐默认 · ? = 无所谓 · go = 直接猜
无错误选项；随时输入 "go" 结束提问并给出推断。
```

收到回复后，Akinator 简要回响确认：

```
▰▰▱▱ 明白：面向团队、移动端优先、短平快无多余装饰（街头快餐风格），无需登录账号。
```

并在给出最终猜想时一并交付完整 Spec：

```
> 我猜你想做的是…… TeamRun：固定在群聊里的极简移动端网页卡片。展示周六跑步路线、出发时间，并提供一键姓名报名以便统计咖啡人数。无账号、无 Strava 集成、无费用。完整规范已保存至 specs/team-run.md。

a) 是的，立即开工 · b) 是的，只看规范 · c) 接近了 · d) 猜偏了
```

---

## 方案对比

| 维度 | Akinator v2 | 普通 AI 助手 | 手动编写 Prompt |
|---|---|---|---|
| **认知负担** | **极低（单行字母或单次按键）** | 高（阅读大段文本与开放式追问） | 极高（需梳理全部上下文并手写长文） |
| **交互摩擦** | 单字母（`a d g j` 或 `ok`） | 来回多轮长篇对话 | 需花费精力构思长 Prompt |
| **歧义消除** | 连续字母编码（`a–c`、`d–f`...） | 容易按位置错位推断 | 依赖人工反复修正 |
| **交付物质量** | 包含否定边界与风险的完备 Spec | 零碎想法与半成品建议 | 取决于单次提问的完整度 |
| **执行触发** | **确认后立即启动工程实现** | 需要多轮额外验证 | 需多次输入跟进指令 |

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
> 请分两次发送上述指令。安装完成后开启新会话以加载插件。

---

### 方式 2：直接安装 Skill（Claude Code、Antigravity、Codex）

因为 Skill 文件位于仓库内的 `skills/akinator/`，请克隆后建立软链接：

```bash
# 1. 克隆代码仓库
git clone https://github.com/obeskay/akinator.git ~/tools/akinator

# 2. 为你的助手创建软链接：
# Claude Code:
mkdir -p ~/.claude/skills && ln -s ~/tools/akinator/skills/akinator ~/.claude/skills/akinator

# Antigravity (AGY):
mkdir -p ~/.gemini/config/skills && ln -s ~/tools/akinator/skills/akinator ~/.gemini/config/skills/akinator

# Codex / Agent 系统:
mkdir -p .agents/skills && cp -r ~/tools/akinator/skills/akinator .agents/skills/
```

**单行快速复制命令：**
```bash
git clone --depth 1 https://github.com/obeskay/akinator.git /tmp/akinator && \
  mkdir -p ~/.claude/skills && cp -r /tmp/akinator/skills/akinator ~/.claude/skills/ && \
  rm -rf /tmp/akinator
```

---

## 触发词与日常用法

疲惫不想打字时自然输入即可：

```
tengo hueva
```
```
léeme la mente
```
```
接下来该做什么？
```
```
想做个东西但没头绪，问我问题吧
```
```
/akinator
```

---

## 开源协议

[MIT](LICENSE) © [obeskay](https://github.com/obeskay)
