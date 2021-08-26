import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')
const Demo = () => import('@/views/Demo')

const Colors = () => import('@/views/theme/Colors')
const Typography = () => import('@/views/theme/Typography')

const Charts = () => import('@/views/charts/Charts')
const Widgets = () => import('@/views/widgets/Widgets')

// Views - Components
const Cards = () => import('@/views/base/Cards')
const Forms = () => import('@/views/base/Forms')
const Switches = () => import('@/views/base/Switches')
const Tables = () => import('@/views/base/Tables')
const Tabs = () => import('@/views/base/Tabs')
const Breadcrumbs = () => import('@/views/base/Breadcrumbs')
const Carousels = () => import('@/views/base/Carousels')
const Collapses = () => import('@/views/base/Collapses')
const Jumbotrons = () => import('@/views/base/Jumbotrons')
const ListGroups = () => import('@/views/base/ListGroups')
const Navs = () => import('@/views/base/Navs')
const Navbars = () => import('@/views/base/Navbars')
const Paginations = () => import('@/views/base/Paginations')
const Popovers = () => import('@/views/base/Popovers')
const ProgressBars = () => import('@/views/base/ProgressBars')
const Tooltips = () => import('@/views/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('@/views/buttons/StandardButtons')
const ButtonGroups = () => import('@/views/buttons/ButtonGroups')
const Dropdowns = () => import('@/views/buttons/Dropdowns')
const BrandButtons = () => import('@/views/buttons/BrandButtons')

// Views - Icons
const CoreUIIcons = () => import('@/views/icons/CoreUIIcons')
const Brands = () => import('@/views/icons/Brands')
const Flags = () => import('@/views/icons/Flags')

// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts')
const Badges = () => import('@/views/notifications/Badges')
const Modals = () => import('@/views/notifications/Modals')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'ホーム',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'ダッシュボード',
          component: Dashboard
        },
        {
          path: 'demo',
          name: 'デモ用',
          component: Demo
        },
        {
          path: 'theme',
          redirect: '/theme/colors',
          name: 'テーマ',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'colors',
              name: 'カラー',
              component: Colors
            },
            {
              path: 'typography',
              name: 'タイポグラフィー',
              component: Typography
            }
          ]
        },
        {
          path: 'charts',
          name: 'チャート',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'ウィジェット',
          component: Widgets
        },
        {
          path: 'users',
          meta: {
            label: 'ユーザー一覧'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'ユーザー',
              component: Users
            },
            {
              path: ':id',
              meta: {
                label: 'ユーザー詳細'
              },
              name: 'ユーザー',
              component: User
            }
          ]
        },
        {
          path: 'base',
          redirect: '/base/cards',
          name: 'ベース',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'cards',
              name: 'カード',
              component: Cards
            },
            {
              path: 'forms',
              name: 'フォーム',
              component: Forms
            },
            {
              path: 'switches',
              name: 'スイッチ',
              component: Switches
            },
            {
              path: 'tables',
              name: 'テーブル',
              component: Tables
            },
            {
              path: 'tabs',
              name: 'タブ',
              component: Tabs
            },
            {
              path: 'breadcrumbs',
              name: 'パンくず',
              component: Breadcrumbs
            },
            {
              path: 'carousels',
              name: 'カルーセル',
              component: Carousels
            },
            {
              path: 'collapses',
              name: 'アコーディオン',
              component: Collapses
            },
            {
              path: 'jumbotrons',
              name: 'ジャンボトロン',
              component: Jumbotrons
            },
            {
              path: 'list-groups',
              name: 'リストグループ',
              component: ListGroups
            },
            {
              path: 'navs',
              name: 'ナビゲーション',
              component: Navs
            },
            {
              path: 'navbars',
              name: 'ナビゲーションバー',
              component: Navbars
            },
            {
              path: 'paginations',
              name: 'ページネーション',
              component: Paginations
            },
            {
              path: 'popovers',
              name: 'ポップオーバー',
              component: Popovers
            },
            {
              path: 'progress-bars',
              name: '進捗バー',
              component: ProgressBars
            },
            {
              path: 'tooltips',
              name: 'ツールチップ',
              component: Tooltips
            }
          ]
        },
        {
          path: 'buttons',
          redirect: '/buttons/standard-buttons',
          name: 'ボタン',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'standard-buttons',
              name: 'Standard Buttons',
              component: StandardButtons
            },
            {
              path: 'button-groups',
              name: 'Button Groups',
              component: ButtonGroups
            },
            {
              path: 'dropdowns',
              name: 'Dropdowns',
              component: Dropdowns
            },
            {
              path: 'brand-buttons',
              name: 'Brand Buttons',
              component: BrandButtons
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/coreui-icons',
          name: 'CoreUI Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'coreui-icons',
              name: 'Icons library',
              component: CoreUIIcons
            },
            {
              path: 'brands',
              name: 'Brands',
              component: Brands
            },
            {
              path: 'flags',
              name: 'Flags',
              component: Flags
            }
          ]
        },
        {
          path: 'notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'badges',
              name: 'Badges',
              component: Badges
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
}

