export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'ダッシュボード',
        to: '/dashboard',
        icon: 'cil-speedometer',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'デモ用',
        to: '/demo',
        icon: 'cil-puzzle',
        badge: {
          color: 'primary',
          text: 'NEW'
        }
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Theme']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'カラー',
        to: '/theme/colors',
        icon: 'cil-drop'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'タイポグラフィー',
        to: '/theme/typography',
        icon: 'cil-pencil'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Components']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'ベース',
        route: '/base',
        icon: 'cil-puzzle',
        items: [
          {
            name: 'パンくず',
            to: '/base/breadcrumbs'
          },
          {
            name: 'カード',
            to: '/base/cards'
          },
          {
            name: 'カルーセル',
            to: '/base/carousels'
          }, 
          {
            name: 'アコーディオン',
            to: '/base/collapses'
          },
          {
            name: 'フォーム',
            to: '/base/forms'
          },
          {
            name: 'ジャンボトロン',
            to: '/base/jumbotrons'
          },
          {
            name: 'リストグループ',
            to: '/base/list-groups'
          },
          {
            name: 'ナビゲーション',
            to: '/base/navs'
          },
          {
            name: 'ナビゲーションバー',
            to: '/base/navbars'
          },
          {
            name: 'ページネーション',
            to: '/base/paginations'
          },
          {
            name: 'ポップオーバー',
            to: '/base/popovers'
          },
          {
            name: '進捗バー',
            to: '/base/progress-bars'
          },
          {
            name: 'スイッチ',
            to: '/base/switches'
          },
          {
            name: 'テーブル',
            to: '/base/tables'
          },
          {
            name: 'タブ',
            to: '/base/tabs'
          },
          {
            name: 'ツールチップ',
            to: '/base/tooltips'
          }
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'ボタン',
        route: '/buttons',
        icon: 'cil-cursor',
        items: [
          {
            name: 'ボタン',
            to: '/buttons/standard-buttons'
          },
          {
            name: 'ドロップダウン',
            to: '/buttons/dropdowns'
          },
          {
            name: 'ボタングループ',
            to: '/buttons/button-groups'
          },
          {
            name: 'ブランドボタン',
            to: '/buttons/brand-buttons'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'チャート',
        to: '/charts',
        icon: 'cil-chart-pie'
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'アイコン',
        route: '/icons',
        icon: 'cil-star',
        items: [
          {
            name: 'CoreUIアイコン',
            to: '/icons/coreui-icons',
            badge: {
              color: 'info',
              text: 'NEW'
            }
          },
          {
            name: 'ブランド',
            to: '/icons/brands'
          },
          {
            name: '国旗',
            to: '/icons/flags'
          }
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'お知らせ',
        route: '/notifications',
        icon: 'cil-bell',
        items: [
          {
            name: 'アラート',
            to: '/notifications/alerts'
          },
          {
            name: 'バッジ',
            to: '/notifications/badges'
          },
          {
            name: 'モーダル',
            to: '/notifications/modals'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'ウィジェット',
        to: '/widgets',
        icon: 'cil-calculator',
        badge: {
          color: 'primary',
          text: 'NEW',
          shape: 'pill'
        }
      },
      {
        _name: 'CSidebarNavDivider',
        _class: 'm-2'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Extras']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'ページ',
        route: '/pages',
        icon: 'cil-star',
        items: [
          {
            name: 'ログイン',
            to: '/pages/login'
          },
          {
            name: '登録',
            to: '/pages/register'
          },
          {
            name: 'Error 404',
            to: '/pages/404'
          },
          {
            name: 'Error 500',
            to: '/pages/500'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Download CoreUI',
        href: 'http://coreui.io/vue/',
        icon: { name: 'cil-cloud-download', class: 'text-white' },
        _class: 'bg-success text-white',
        target: '_blank'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Try CoreUI PRO',
        href: 'http://coreui.io/pro/vue/',
        icon: { name: 'cil-layers', class: 'text-white' },
        _class: 'bg-danger text-white',
        target: '_blank'
      }
    ]
  }
]