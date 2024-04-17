import type { BlockType } from '@/types/block'

export const blocks: {
    id: string
    type: BlockType
    label: string
    props: Record<string, string>
  }[] = [
    {
      id: '1',
      type: 'quote',
      label: '引述',
      props: {
        title: '引述标题',
        subTitle: '引述副标题'
      }
    },
    {
      id: '2',
      type: 'notes',
      label: '笔记',
      props: {
        title: '笔记标题',
        subTitle: '笔记副标题'
      }
    },
    {
      id: '3',
      type: 'heroTitle',
      label: '超级标题',
      props: {
        title: '超级标题',
        subTitle: '超级副标题'
      }
    },
    {
      id: '4',
      type: 'image',
      label: '图片',
      props: {
        title: '图片标题',
        subTitle: '图片副标题'
      }
    },
    {
      id: '5',
      type: 'view',
      label: '视图',
      props: {
        title: '视图标题',
        subTitle: '视图副标题'
      }
    },
    {
      id: '6',
      type: 'chart',
      label: '图表',
      props: {
        title: '图表标题',
        subTitle: '图表副标题'
      }
    },
    {
      id: '7',
      type: 'button',
      label: '按钮',
      props: {
        title: '按钮标题',
        subTitle: '按钮副标题'
      }
    },
    {
      id: '8',
      type: 'form',
      label: '表单',
      props: {
        title: '表单标题',
        subTitle: '表单副标题'
      }
    }
  ]