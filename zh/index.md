---
layout: page
---

<script setup>
    import {
        VPTeamPage,
        VPTeamPageTitle,
        VPTeamMembers
    } from 'vitepress/theme'

    const members = [
    {        
        avatar: "https://github.com/Lidamn.png",
        name: "李天籁",
        title: "算法工程师 | 数据分析师",
        links: [
            {icon: "github", link: "https://github.com/Lidamn"}
        ]
        }
    ]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
        我的资料
    </template>
    <template #lead>
        Duke ECE 研究生
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />

<div class="scroll-link-container">
    <div class="scroll-link-box">
        <a href="/zh/projects/NCCP" class="scroll-link">项目</a>
    </div>
    <span class="separator">|</span>
    <div class="scroll-link-box">
        <a href="/zh/blogs/start" class="scroll-link">博客</a>
    </div>
    <span class="separator">|</span>
    <div class="scroll-link-box">
        <a href="/zh/resume/resume" class="scroll-link">简历</a>
    </div>
</div>

</VPTeamPage>

<style>
  .scroll-link-container  {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 1em;
    margin-top: 1.5em;
    margin-left: auto;
    margin-right: auto;
    width: 23em;
    max-width: 600px;
    background: var(--vp-c-bg-soft);
  }

  .scroll-link-box {
    display: flex;
    margin-left: 1em;
    margin-right: 1em;
    align-items: center;
    justify-content: center;
  }

  .scroll-link {
    display: block;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    color: var(--vp-c-text-1);
    text-align: center;
    transition: transform 0.3s, opacity 0.3s, background 0.3s;
    border-radius: 5px;
  }

  .scroll-link:hover {
    transform: scale(1.2);
  }

  .scroll-link:not(:hover) {
    opacity: 0.6;
  }

  div::-webkit-scrollbar {
    display: none;
  }

  div {
    scrollbar-width: none;
  }
</style>