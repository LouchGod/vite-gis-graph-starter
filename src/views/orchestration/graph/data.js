export const defaultGraph = {
  cells: [
    {
      position: {
        x: 530,
        y: -60,
      },
      size: {
        width: 250,
        height: 400,
      },
      view: 'vue-shape-view',
      shape: 'basic-node',
      zIndex: 99,
      ports: {
        groups: {
          in: {
            position: {
              name: 'top',
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
            zIndex: 99,
          },
          out: {
            position: {
              name: 'bottom',
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
            zIndex: 99,
          },
        },
        items: [
          {
            group: 'in',
            id: '6430fa4a-2465-416e-ae4d-82a5affc6ee9',
          },
          {
            group: 'out',
            id: '2d9cb7f8-2503-4043-ab82-82dfe7d56755',
          },
        ],
      },
      id: '6492b231-cbe6-41de-bb32-776432ad4bd1',
      data: {
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
                  width: '45%',
                  icon: '',
                },
                {
                  label: 'Host端口',
                  value: '8080',
                  width: '45%',
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
    },
    {
      position: {
        x: 530,
        y: 430,
      },
      size: {
        width: 250,
        height: 400,
      },
      view: 'vue-shape-view',
      shape: 'basic-node-rule',
      zIndex: 99,
      ports: {
        groups: {
          in: {
            position: {
              name: 'top',
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
            zIndex: 99,
          },
          out: {
            position: {
              name: 'bottom',
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
            zIndex: 99,
          },
          left: {
            position: {
              name: 'left',
              args: {
                dy: -10,
              },
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
            zIndex: 99,
          },
          right: {
            position: {
              name: 'right',
              args: {
                dy: -10,
              },
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
            zIndex: 99,
          },
          inLeftA: {
            position: {
              name: 'left',
              args: {
                dx: 10,
                dy: 45,
              },
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
          },
          inRightB: {
            position: {
              name: 'right',
              args: {
                dx: -10,
                dy: 85,
              },
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
          },
        },
        items: [
          {
            group: 'in',
            id: '22e74b1c-806f-4171-9b8a-d4ccf4367448',
          },
          {
            group: 'out',
            id: '0ce65889-a2e9-44b1-b560-3fdf37ce5152',
          },
          {
            group: 'inLeftA',
            id: '5ea15bbd-a73d-45b2-b410-027d8f8dd483',
          },
          {
            group: 'inRightB',
            id: 'daef2f83-0079-4340-bc67-e59c4e4c23d3',
          },
        ],
      },
      id: 'ce78be2e-6bb6-4673-a834-8e9ff85ca5e8',
      data: {
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
                  width: '45%',
                },
                {
                  label: '重试次数',
                  value: '9',
                  icon: '',
                  width: '45%',
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
    },
    {
      position: {
        x: 110,
        y: 460,
      },
      size: {
        width: 250,
        height: 300,
      },
      view: 'vue-shape-view',
      shape: 'rule-node-1',
      zIndex: 99,
      ports: {
        groups: {
          in: {
            position: {
              name: 'top',
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
            zIndex: 99,
          },
          out: {
            position: {
              name: 'bottom',
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
            zIndex: 99,
          },
          left: {
            position: {
              name: 'left',
              args: {
                dy: -10,
              },
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
            zIndex: 99,
          },
          right: {
            position: {
              name: 'right',
              args: {
                dy: -10,
              },
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
            zIndex: 99,
          },
          inLeftA: {
            position: {
              name: 'left',
              args: {
                dx: 10,
                dy: 45,
              },
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
          },
          inRightB: {
            position: {
              name: 'right',
              args: {
                dx: -10,
                dy: 85,
              },
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
          },
        },
        items: [
          {
            group: 'in',
            id: 'f927cf86-7219-4978-a9e4-f3adff4707ee',
          },
          {
            group: 'out',
            id: '30035995-90e7-4c3a-926d-3be5cf926670',
          },
          {
            group: 'left',
            id: '18f70712-cf73-4281-a98d-6174bd8eefdf',
          },
          {
            group: 'right',
            id: 'ffa72cc1-3715-446f-88e5-97762f569b89',
          },
        ],
      },
      id: 'ba7f03ae-43db-4f5c-a05d-6fa258634fa4',
      data: {
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
    },
    {
      position: {
        x: 970,
        y: 450,
      },
      size: {
        width: 250,
        height: 300,
      },
      view: 'vue-shape-view',
      shape: 'rule-node-1',
      zIndex: 99,
      ports: {
        groups: {
          in: {
            position: {
              name: 'top',
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
            zIndex: 99,
          },
          out: {
            position: {
              name: 'bottom',
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
            zIndex: 99,
          },
          left: {
            position: {
              name: 'left',
              args: {
                dy: -10,
              },
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
            zIndex: 99,
          },
          right: {
            position: {
              name: 'right',
              args: {
                dy: -10,
              },
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
            zIndex: 99,
          },
          inLeftA: {
            position: {
              name: 'left',
              args: {
                dx: 10,
                dy: 45,
              },
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
          },
          inRightB: {
            position: {
              name: 'right',
              args: {
                dx: -10,
                dy: 85,
              },
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
          },
        },
        items: [
          {
            group: 'in',
            id: 'c81321db-efe3-47dc-8225-04d07bf61a44',
          },
          {
            group: 'out',
            id: 'c50bc503-8fe4-48e0-9030-cefc8f2860f7',
          },
          {
            group: 'left',
            id: '5d4518c2-9150-4e3c-8601-d5665b9d6ff5',
          },
          {
            group: 'right',
            id: 'e86d1f8c-8464-42db-8d9f-41c7279acfb7',
          },
        ],
      },
      id: 'dd1b69c4-1361-4055-a533-640d3316816a',
      data: {
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
    },
    {
      position: {
        x: 530,
        y: 910,
      },
      size: {
        width: 250,
        height: 300,
      },
      view: 'vue-shape-view',
      shape: 'algo-node',
      zIndex: 99,
      ports: {
        groups: {
          in: {
            position: {
              name: 'top',
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
            zIndex: 99,
          },
          out: {
            position: {
              name: 'bottom',
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
            zIndex: 99,
          },
        },
        items: [
          {
            group: 'in',
            id: '774c3b5b-69e1-4464-b4e9-f9cd1ef78304',
          },
          {
            group: 'out',
            id: '619653a1-1996-4f9c-b4dd-c5b14501c1fa',
          },
        ],
      },
      id: 'ebca8a7f-e4e9-4ec4-8cf8-a75a355c7e9d',
      data: {
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
    },
    {
      position: {
        x: 970,
        y: 910,
      },
      size: {
        width: 250,
        height: 300,
      },
      view: 'vue-shape-view',
      shape: 'algo-node',
      zIndex: 99,
      ports: {
        groups: {
          in: {
            position: {
              name: 'top',
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
            zIndex: 99,
          },
          out: {
            position: {
              name: 'bottom',
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
            zIndex: 99,
          },
        },
        items: [
          {
            group: 'in',
            id: '4083898e-f527-4164-b160-5334d0450594',
          },
          {
            group: 'out',
            id: '25ae8c0f-f393-4ed4-885f-03c3c40054ed',
          },
        ],
      },
      id: 'a2f7f5a8-4f1b-406e-a4db-9b4b60f025f2',
      data: {
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
    },
    {
      position: {
        x: 120,
        y: 910,
      },
      size: {
        width: 250,
        height: 300,
      },
      view: 'vue-shape-view',
      shape: 'algo-node',
      zIndex: 99,
      ports: {
        groups: {
          in: {
            position: {
              name: 'top',
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
            zIndex: 99,
          },
          out: {
            position: {
              name: 'bottom',
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
            zIndex: 99,
          },
        },
        items: [
          {
            group: 'in',
            id: 'f92fec39-9737-4f71-b499-40c33f8ac6a3',
          },
          {
            group: 'out',
            id: 'd2eaa6dc-6dfe-4262-b93a-f0712b2edb87',
          },
        ],
      },
      id: 'cab57cb9-850f-42bc-8073-2aa4c44cf594',
      data: {
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
    },
    {
      position: {
        x: 530,
        y: 1300,
      },
      size: {
        width: 250,
        height: 300,
      },
      view: 'vue-shape-view',
      shape: 'algo-node',
      zIndex: 99,
      ports: {
        groups: {
          in: {
            position: {
              name: 'top',
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
            zIndex: 99,
          },
          out: {
            position: {
              name: 'bottom',
            },
            attrs: {
              circle: {
                r: 5,
                magnet: true,
                fill: '#79B8E8',
                fillOpacity: '1',
                stroke: '#79B8E8',
                strokeOpacity: '1',
                strokeWidth: 1,
                style: {
                  visibility: 'visible',
                },
              },
            },
            zIndex: 99,
          },
        },
        items: [
          {
            group: 'in',
            id: 'cc9b5430-2f26-492c-a1b5-f8053c696f1d',
          },
          {
            group: 'out',
            id: '20ca756f-843a-4f23-a5ed-ebdfe51dd926',
          },
        ],
      },
      id: 'ac39d796-13da-4faa-9f30-6f32a73b9434',
      data: {
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
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: '#31d0c6',
        },
      },
      id: 'ce9494fa-7951-40d3-be7d-7554cca58d63',
      source: {
        cell: 'ebca8a7f-e4e9-4ec4-8cf8-a75a355c7e9d',
        port: '619653a1-1996-4f9c-b4dd-c5b14501c1fa',
      },
      target: {
        cell: 'ac39d796-13da-4faa-9f30-6f32a73b9434',
        port: 'cc9b5430-2f26-492c-a1b5-f8053c696f1d',
      },
      zIndex: 100,
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: '#31d0c6',
        },
      },
      id: 'e4ec108c-03a4-4878-96ce-a416a62b87dd',
      source: {
        cell: 'ce78be2e-6bb6-4673-a834-8e9ff85ca5e8',
        port: '0ce65889-a2e9-44b1-b560-3fdf37ce5152',
      },
      target: {
        cell: 'ebca8a7f-e4e9-4ec4-8cf8-a75a355c7e9d',
        port: '774c3b5b-69e1-4464-b4e9-f9cd1ef78304',
      },
      zIndex: 101,
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: '#31d0c6',
        },
      },
      id: '398ac7ab-625c-4362-90ab-1253b52265ab',
      source: {
        cell: 'ce78be2e-6bb6-4673-a834-8e9ff85ca5e8',
        port: '0ce65889-a2e9-44b1-b560-3fdf37ce5152',
      },
      target: {
        cell: 'cab57cb9-850f-42bc-8073-2aa4c44cf594',
        port: 'f92fec39-9737-4f71-b499-40c33f8ac6a3',
      },
      zIndex: 102,
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: '#31d0c6',
        },
      },
      id: '8cea4fb7-c9a3-40a9-8327-b0164534c6ff',
      source: {
        cell: 'ce78be2e-6bb6-4673-a834-8e9ff85ca5e8',
        port: '0ce65889-a2e9-44b1-b560-3fdf37ce5152',
      },
      target: {
        cell: 'a2f7f5a8-4f1b-406e-a4db-9b4b60f025f2',
        port: '4083898e-f527-4164-b160-5334d0450594',
      },
      zIndex: 103,
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: '#31d0c6',
        },
      },
      id: '261b011f-97df-4fab-8bcb-c28c91f54c19',
      source: {
        cell: '6492b231-cbe6-41de-bb32-776432ad4bd1',
        port: '2d9cb7f8-2503-4043-ab82-82dfe7d56755',
      },
      target: {
        cell: 'ce78be2e-6bb6-4673-a834-8e9ff85ca5e8',
        port: '22e74b1c-806f-4171-9b8a-d4ccf4367448',
      },
      zIndex: 104,
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: '#31d0c6',
        },
      },
      id: 'bff7b635-2697-47de-ba06-5c7d7df3c749',
      source: {
        cell: 'ba7f03ae-43db-4f5c-a05d-6fa258634fa4',
        port: 'ffa72cc1-3715-446f-88e5-97762f569b89',
      },
      target: {
        cell: 'ce78be2e-6bb6-4673-a834-8e9ff85ca5e8',
        port: '5ea15bbd-a73d-45b2-b410-027d8f8dd483',
      },
      zIndex: 105,
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: '#31d0c6',
        },
      },
      id: 'f7c2c302-bfae-440c-9fdd-cb9e8c3f06c8',
      source: {
        cell: 'ce78be2e-6bb6-4673-a834-8e9ff85ca5e8',
        port: 'daef2f83-0079-4340-bc67-e59c4e4c23d3',
      },
      target: {
        cell: 'dd1b69c4-1361-4055-a533-640d3316816a',
        port: '5d4518c2-9150-4e3c-8601-d5665b9d6ff5',
      },
      zIndex: 106,
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: '#31d0c6',
        },
      },
      id: '5ba9defd-a2ac-4abd-8059-46515d965899',
      source: {
        cell: 'cab57cb9-850f-42bc-8073-2aa4c44cf594',
        port: 'd2eaa6dc-6dfe-4262-b93a-f0712b2edb87',
      },
      target: {
        cell: 'ac39d796-13da-4faa-9f30-6f32a73b9434',
        port: 'cc9b5430-2f26-492c-a1b5-f8053c696f1d',
      },
      zIndex: 107,
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: '#31d0c6',
        },
      },
      id: '22ba6739-9a91-4465-b1f7-01fee604e0c4',
      source: {
        cell: 'a2f7f5a8-4f1b-406e-a4db-9b4b60f025f2',
        port: '25ae8c0f-f393-4ed4-885f-03c3c40054ed',
      },
      target: {
        cell: 'ac39d796-13da-4faa-9f30-6f32a73b9434',
        port: 'cc9b5430-2f26-492c-a1b5-f8053c696f1d',
      },
      zIndex: 108,
    },
  ],
}
