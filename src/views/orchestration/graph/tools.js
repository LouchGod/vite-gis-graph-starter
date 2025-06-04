export const toolsData = [
  {
    type: 'basic',
    label: '结构',
    nodes: [
      {
        uid: 's-1',
        label: '服务接口',
        type: 'basic-node',
        config: {
          title: '服务接口',
          icon: 'i-carbon-earth-filled',
          iconColor: 'bg-green-6',
          category: [
            {
              text: '服务基本信息',
              items: [
                {
                  label: '服务名称',
                  value: '并行调用服务',
                  icon: 'i-carbon-edit',
                  width: '100%',
                },

                {
                  label: '链接类型',
                  value: 'URL',
                  icon: 'i-carbon-chevron-down',
                  width: '100%',
                },

                {
                  label: '接口地址',
                  value: 'GET /dev-api/simulation/simulationResetS...',
                  icon: '',
                  width: '100%',
                },
              ],
            },

            {
              text: '接口状态',
              items: [
                {
                  label: 'IP地址',
                  value: '192.168.0.1',
                  width: '50%',
                  icon: '',
                },

                {
                  label: 'Host端口',
                  value: '8080',
                  width: '50%',
                  icon: 'i-carbon-chevron-down',
                },

                {
                  label: '响应状态',
                  value: '200   OK',
                  width: '100%',
                  icon: '',
                },
              ],
            },
          ],
        },
      },
      {
        uid: 's-2',
        label: '分支组件',
        type: 'basic-node-rule',
        config: {
          title: '并行组件',
          icon: 'i-carbon-share',
          iconColor: 'bg-yellow-6',
          category: [
            {
              text: '基本规则',
              items: [
                {
                  label: '是否重试',
                  value: '是',
                  icon: 'i-carbon-edit',
                  width: '50%',
                },

                {
                  label: '重试次数',
                  value: '9',
                  icon: '',
                  width: '50%',
                },

                {
                  label: '结果反馈时间',
                  value: '5分钟',
                  icon: '',
                  width: '100%',
                },
              ],
            },

            {
              text: '拓展规则',
              items: [
                {
                  label: '',
                  value: '规则库',
                  width: '100%',
                  icon: '',
                },

                {
                  label: '',
                  value: '规则库',
                  width: '100%',
                  icon: '',
                },

                {
                  label: '',
                  value: '添加',
                  width: '100%',
                  icon: 'i-carbon-add',
                  isCenter: true,
                },
              ],
            },
          ],
        },
      },
      {
        uid: 's-3',
        label: '并行组件',
        type: 'basic-node-rule',
        config: {
          title: '并行组件',
          icon: 'i-carbon-share',
          iconColor: 'bg-yellow-6',
          category: [
            {
              text: '基本规则',
              items: [
                {
                  label: '是否重试',
                  value: '是',
                  icon: 'i-carbon-edit',
                  width: '50%',
                },

                {
                  label: '重试次数',
                  value: '9',
                  icon: '',
                  width: '50%',
                },

                {
                  label: '结果反馈时间',
                  value: '5分钟',
                  icon: '',
                  width: '100%',
                },
              ],
            },

            {
              text: '拓展规则',
              items: [
                {
                  label: '',
                  value: '规则库',
                  width: '100%',
                  icon: '',
                },

                {
                  label: '',
                  value: '规则库',
                  width: '100%',
                  icon: '',
                },

                {
                  label: '',
                  value: '添加',
                  width: '100%',
                  icon: 'i-carbon-add',
                  isCenter: true,
                },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    type: 'rule',
    label: '规则库',
    nodes: [
      {
        uid: 'r-1',
        label: '算法策略规则库',
        type: 'rule-node-1',

        config: {
          title: '规则库',
          icon: 'i-carbon-rule',
          iconColor: 'bg-green-6',
          items: [
            {
              label: '选择规则库',
              value: '任务筹划规则库',
              icon: 'i-carbon-edit',
              width: '100%',
            },

            {
              label: '图谱版本',
              value: '1.0',
              icon: 'i-carbon-chevron-down',
              width: '100%',
            },

            {
              label: '数据库选择',
              value: '1.0',
              icon: 'i-carbon-chevron-down',
              width: '100%',
            },
            {
              label: 'Code',
              value: '1.0',
              icon: 'i-carbon-chevron-down',
              width: '100%',
            },
          ],
        },
      },
      {
        uid: 'r-2',
        label: '天地资源知识库',
        type: 'rule-node-1',
        config: {
          title: '知识库',
          icon: 'i-carbon-share-knowledge',
          iconColor: 'bg-blue-3',
          items: [
            {
              label: '选择知识库',
              value: '天地资源知识库',
              icon: 'i-carbon-edit',
              width: '100%',
            },

            {
              label: '图谱版本',
              value: '1.0',
              icon: 'i-carbon-chevron-down',
              width: '100%',
            },

            {
              label: '数据库选择',
              value: '1.0',
              icon: 'i-carbon-chevron-down',
              width: '100%',
            },
            {
              label: 'Code',
              value: '1.0',
              icon: 'i-carbon-chevron-down',
              width: '100%',
            },
          ],
        },
      },
      {
        uid: 'r-3',
        label: '任务与目标知识库',
        type: 'rule-node',
        config: {
          title: '知识库',
          icon: 'i-carbon-share-knowledge',
          iconColor: 'bg-blue-3',
          items: [
            {
              label: '选择知识库',
              value: '任务与目标知识库',
              icon: 'i-carbon-edit',
              width: '100%',
            },

            {
              label: '图谱版本',
              value: '1.0',
              icon: 'i-carbon-chevron-down',
              width: '100%',
            },

            {
              label: '数据库选择',
              value: '1.0',
              icon: 'i-carbon-chevron-down',
              width: '100%',
            },
            {
              label: 'Code',
              value: '108251599',
              icon: 'i-carbon-chevron-down',
              width: '100%',
            },
          ],
        },
      },
    ],
  },
  {
    type: 'algo',
    label: '算法组件',
    nodes: [
      {
        uid: 'a-1',
        label: '普通算法',
        type: 'algo-node',
        config: {
          title: '普通算法',
          icon: 'i-carbon-code',
          iconColor: 'bg-green-6',
          items: [
            {
              label: '算法名称',
              value: '任务筹划算法',
              icon: 'i-carbon-edit',
              width: '100%',
            },

            {
              label: '算法来源',
              value: '国防科技大学',
              icon: '',
              width: '100%',
            },

            {
              label: '算法版本',
              value: '1.2.0',
              icon: 'i-carbon-chevron-down',
              width: '100%',
            },
            {
              label: '调用规则',
              value: '跟随规则库',
              icon: 'i-carbon-chevron-down',
              width: '100%',
            },
          ],
        },
      },
      {
        uid: 'a-2',
        label: '问答算法',
        type: 'algo-node',
        config: {
          title: '输出',
          icon: 'i-carbon-document-export',
          iconColor: 'bg-green-6',
          items: [
            {
              label: '输出规则',
              value: '最优算法',
              icon: 'i-carbon-chevron-down',
              width: '100%',
            },

            {
              label: '评估指标',
              value: '准确度',
              icon: '',
              width: '100%',
            },

            {
              label: '',
              value: '完成率',
              icon: '',
              width: '100%',
            },

            {
              label: '',
              value: '响应时间',
              icon: '',
              width: '100%',
            },
          ],
        },
      },
      // { uid: 'a-3', label: '并行组件', type: 'algo' },
    ],
  },
];
