import type { BlockInfo } from '@/types/block'

export const blocks: BlockInfo[] = [
    {
      id: '1',
      type: 'quote',
      label: '引述',
      props: {
        content:'引述文本'
      }
    },
    {
      id: '2',
      type: 'notes',
      label: '笔记',
      props: {
        content:`<p>笔记内容</p>`
      }
    },
    {
      id: '3',
      type: 'heroTitle',
      label: '超级标题',
      props: {
        content: '超级标题',
      }
    },
    {
      id: '4',
      type: 'image',
      label: '图片',
      props: {
        url:'https://img0.baidu.com/it/u=2601877379,2549788249&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400'
      }
    },
    {
      id: '5',
      type: 'view',
      label: '视图',
      props: {
        fields:{
          'id':{
            type:'text'
          }
        },
        fieldProps:[],
        data:[]
      }
    },
    {
      id: '6',
      type: 'chart',
      label: '图表',
      props: {
        chartType:'echarts'
      }
    },
    {
      id: '7',
      type: 'button',
      label: '按钮',
      props: {
        content: '按钮文案',
      }
    },
    {
      id: '8',
      type: 'form',
      label: '表单',
      props: {
        fields: [],
      }
    }
  ]