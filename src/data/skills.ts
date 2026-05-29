export interface Skill {
  name: string
  category: string
}

export const skills: Skill[] = [
  { name: 'JavaSE', category: '语言基础' },
  { name: 'SpringBoot', category: '框架' },
  { name: 'MyBatis', category: '框架' },
  { name: 'JVM', category: 'Java进阶' },
  { name: 'JUC', category: 'Java进阶' },
  { name: 'RabbitMQ', category: '中间件' },
  { name: 'Kafka', category: '中间件' },
  { name: 'MySQL', category: '数据库' },
  { name: 'Redis', category: '数据库' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Linux', category: 'DevOps' },
]
