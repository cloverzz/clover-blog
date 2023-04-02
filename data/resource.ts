import { Friends } from './friend'

export interface Resource {
  name: string
  logo: string
  desc: string
  href: string
  tags?: string[]
}

export interface ResourceCategory {
  name: string
  resources: Resource[]
}

const friends: Resource[] = Friends.map(f => {
  return {
    ...f,
    name: f.title,
    desc: f.description,
    logo: f.avatar,
    href: f.website,
  }
})

export const resourceData: ResourceCategory[] = [
  {
    name: '友链👨‍💻',
    resources: friends,
  },
  {
    name: '每周必刷🔥',
    resources: [
      {
        name: '稀土掘金',
        desc: '稀土掘金是一个技术博客平台，是程序员发布自己的技术文章、分享知识的地方',
        logo: '/img/resource/juejin.png',
        href: 'https://juejin.cn/',
      },
      {
        name: 'OSS Insight',
        desc: 'Open Source Software Insight',
        logo: '/img/resource/ossinsight.png',
        href: 'https://ossinsight.io/',
      },
      {
        name: 'Javascript Weekly',
        desc: 'A newsletter of JavaScript articles, news and cool projects',
        logo: '/img/resource/javascript.svg',
        href: 'https://javascriptweekly.com/',
      },
      {
        name: 'State of JavaScript',
        desc: 'JavaScript 生态系统的年度开发人员调查',
        logo: '/img/resource/stateofjs.svg',
        href: 'https://stateofjs.com',
      },
      {
        name: '前端食堂',
        desc: '周周尝鲜，人工筛选前端圈每周最新资讯。—— 由 童欧巴 创作',
        logo: '/img/resource/zhubai.png',
        href: 'https://hungryturbo.zhubai.love/',
      },
    ],
  },
]
