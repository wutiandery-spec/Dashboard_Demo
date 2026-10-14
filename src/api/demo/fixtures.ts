import type { DemoFixtures } from './types'

/**
 * 演示数据（由 scripts/record-demo.mjs 生成，请勿手动编辑）
 * 录制时间：2026-10-14T15:08:16.880Z
 * 录制来源：http://ceshi13.dishait.cn/admin
 * 仅包含只读接口数据；写接口为本地桩响应，未对后端做任何写操作。
 */
const fixtures: DemoFixtures = {
  "generatedAt": "2026-10-14T15:08:16.880Z",
  "baseURL": "http://ceshi13.dishait.cn/admin",
  "endpoints": [
    {
      "note": "登录",
      "method": "POST",
      "pattern": "/login",
      "kind": "static",
      "data": {
        "msg": "ok",
        "data": {
          "token": "<演示数据已脱敏>"
        },
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      }
    },
    {
      "note": "用户信息与菜单",
      "method": "POST",
      "pattern": "/getinfo",
      "kind": "static",
      "data": {
        "msg": "ok",
        "data": {
          "id": 3,
          "username": "admin",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62af03d1b2aeb.jpg",
          "super": 1,
          "role": {
            "id": 2,
            "name": "超级管理员"
          },
          "menus": [
            {
              "id": 5,
              "rule_id": 0,
              "status": 1,
              "create_time": "2019-08-11 13:36:09",
              "update_time": "2021-12-21 19:31:11",
              "name": "后台面板",
              "desc": "index",
              "frontpath": null,
              "condition": null,
              "menu": 1,
              "order": 1,
              "icon": "help",
              "method": "GET",
              "child": [
                {
                  "id": 10,
                  "rule_id": 5,
                  "status": 1,
                  "create_time": "2019-08-11 13:37:02",
                  "update_time": "2021-12-21 20:21:23",
                  "name": "主控台",
                  "desc": "index",
                  "frontpath": "/",
                  "condition": null,
                  "menu": 1,
                  "order": 20,
                  "icon": "home-filled",
                  "method": "GET",
                  "child": []
                }
              ]
            },
            {
              "id": 6,
              "rule_id": 0,
              "status": 1,
              "create_time": "2019-08-11 13:36:36",
              "update_time": "2021-12-21 19:37:11",
              "name": "商品管理",
              "desc": "shop_goods_list",
              "frontpath": null,
              "condition": null,
              "menu": 1,
              "order": 2,
              "icon": "shopping-bag",
              "method": "GET",
              "child": [
                {
                  "id": 13,
                  "rule_id": 6,
                  "status": 1,
                  "create_time": "2019-12-28 13:42:13",
                  "update_time": "2021-12-21 20:21:42",
                  "name": "商品管理",
                  "desc": "shop_goods_list",
                  "frontpath": "/goods/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "shopping-cart-full",
                  "method": "GET",
                  "child": []
                },
                {
                  "id": 14,
                  "rule_id": 6,
                  "status": 1,
                  "create_time": "2019-12-28 13:44:00",
                  "update_time": "2021-12-21 20:22:00",
                  "name": "分类管理",
                  "desc": "shop_category_list",
                  "frontpath": "/category/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "menu",
                  "method": "GET",
                  "child": []
                },
                {
                  "id": 15,
                  "rule_id": 6,
                  "status": 1,
                  "create_time": "2019-12-28 13:44:32",
                  "update_time": "2021-12-21 20:22:11",
                  "name": "规格管理",
                  "desc": "shop_sku_list",
                  "frontpath": "/skus/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "aim",
                  "method": "GET",
                  "child": []
                },
                {
                  "id": 157,
                  "rule_id": 6,
                  "status": 1,
                  "create_time": "2021-06-12 21:57:02",
                  "update_time": "2021-12-21 20:22:52",
                  "name": "优惠券管理",
                  "desc": "shop_coupon_list",
                  "frontpath": "/coupon/list",
                  "condition": "",
                  "menu": 1,
                  "order": 50,
                  "icon": "postcard",
                  "method": "GET",
                  "child": []
                }
              ]
            },
            {
              "id": 173,
              "rule_id": 0,
              "status": 1,
              "create_time": "2021-12-21 19:38:21",
              "update_time": "2021-12-21 19:38:21",
              "name": "用户管理",
              "desc": "",
              "frontpath": "",
              "condition": "",
              "menu": 1,
              "order": 3,
              "icon": "user",
              "method": "GET",
              "child": [
                {
                  "id": 21,
                  "rule_id": 173,
                  "status": 1,
                  "create_time": "2019-12-28 13:46:45",
                  "update_time": "2021-12-21 20:22:35",
                  "name": "用户管理",
                  "desc": "user_user-list_list",
                  "frontpath": "/user/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "user-filled",
                  "method": "GET",
                  "child": []
                },
                {
                  "id": 22,
                  "rule_id": 173,
                  "status": 1,
                  "create_time": "2019-12-28 13:46:59",
                  "update_time": "2021-12-21 20:22:44",
                  "name": "会员等级",
                  "desc": "user_user-level_list",
                  "frontpath": "/level/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "data-analysis",
                  "method": "GET",
                  "child": []
                }
              ]
            },
            {
              "id": 7,
              "rule_id": 0,
              "status": 1,
              "create_time": "2019-08-11 13:36:40",
              "update_time": "2021-12-21 19:37:18",
              "name": "订单管理",
              "desc": "order_order_list",
              "frontpath": null,
              "condition": null,
              "menu": 1,
              "order": 4,
              "icon": "message-box",
              "method": "GET",
              "child": [
                {
                  "id": 18,
                  "rule_id": 7,
                  "status": 1,
                  "create_time": "2019-12-28 13:45:42",
                  "update_time": "2021-12-21 20:23:02",
                  "name": "订单管理",
                  "desc": "order_order_list",
                  "frontpath": "/order/list",
                  "condition": "",
                  "menu": 1,
                  "order": 1,
                  "icon": "reading",
                  "method": "GET",
                  "child": []
                },
                {
                  "id": 17,
                  "rule_id": 7,
                  "status": 1,
                  "create_time": "2019-12-28 13:44:56",
                  "update_time": "2021-12-21 20:22:26",
                  "name": "评论管理",
                  "desc": "shop_comment_list",
                  "frontpath": "/comment/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "comment",
                  "method": "GET",
                  "child": []
                }
              ]
            },
            {
              "id": 8,
              "rule_id": 0,
              "status": 1,
              "create_time": "2019-08-11 13:36:43",
              "update_time": "2021-12-21 19:37:25",
              "name": "管理员管理",
              "desc": "user_user-list_list",
              "frontpath": null,
              "condition": null,
              "menu": 1,
              "order": 5,
              "icon": "management",
              "method": "GET",
              "child": [
                {
                  "id": 25,
                  "rule_id": 8,
                  "status": 1,
                  "create_time": "2019-12-28 13:47:39",
                  "update_time": "2021-12-21 20:23:53",
                  "name": "管理员管理",
                  "desc": "set_manager",
                  "frontpath": "/manager/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "coordinate",
                  "method": "GET",
                  "child": []
                },
                {
                  "id": 27,
                  "rule_id": 8,
                  "status": 1,
                  "create_time": "2020-01-03 21:05:50",
                  "update_time": "2021-12-21 20:24:04",
                  "name": "权限管理",
                  "desc": "",
                  "frontpath": "/access/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "connection",
                  "method": "GET",
                  "child": []
                },
                {
                  "id": 33,
                  "rule_id": 8,
                  "status": 1,
                  "create_time": "2020-01-04 18:15:47",
                  "update_time": "2021-12-21 20:18:11",
                  "name": "角色管理",
                  "desc": "",
                  "frontpath": "/role/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "histogram",
                  "method": "GET",
                  "child": []
                }
              ]
            },
            {
              "id": 9,
              "rule_id": 0,
              "status": 1,
              "create_time": "2019-08-11 13:36:50",
              "update_time": "2021-12-21 19:10:15",
              "name": "系统设置",
              "desc": "set_base",
              "frontpath": null,
              "condition": null,
              "menu": 1,
              "order": 6,
              "icon": "setting",
              "method": "GET",
              "child": [
                {
                  "id": 23,
                  "rule_id": 9,
                  "status": 1,
                  "create_time": "2019-12-28 13:47:15",
                  "update_time": "2021-12-21 20:23:12",
                  "name": "基础设置",
                  "desc": "set_base",
                  "frontpath": "/setting/base",
                  "condition": "",
                  "menu": 1,
                  "order": 19,
                  "icon": "baseball",
                  "method": "GET",
                  "child": []
                },
                {
                  "id": 26,
                  "rule_id": 9,
                  "status": 1,
                  "create_time": "2019-12-28 13:47:57",
                  "update_time": "2021-12-21 20:23:22",
                  "name": "交易设置",
                  "desc": "set_payment",
                  "frontpath": "/setting/buy",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "credit-card",
                  "method": "GET",
                  "child": []
                },
                {
                  "id": 24,
                  "rule_id": 9,
                  "status": 1,
                  "create_time": "2019-12-28 13:47:27",
                  "update_time": "2021-12-21 20:20:53",
                  "name": "物流设置",
                  "desc": "set_express",
                  "frontpath": "/setting/ship",
                  "condition": "",
                  "menu": 1,
                  "order": 21,
                  "icon": "bicycle",
                  "method": "GET",
                  "child": []
                }
              ]
            },
            {
              "id": 177,
              "rule_id": 0,
              "status": 1,
              "create_time": "2022-06-18 00:12:10",
              "update_time": "2022-06-18 00:12:10",
              "name": "分销模块",
              "desc": null,
              "frontpath": "",
              "condition": "",
              "menu": 1,
              "order": 7,
              "icon": "shopping-cart",
              "method": "GET",
              "child": [
                {
                  "id": 178,
                  "rule_id": 177,
                  "status": 1,
                  "create_time": "2022-06-18 00:14:58",
                  "update_time": "2022-06-18 00:14:58",
                  "name": "分销员管理",
                  "desc": null,
                  "frontpath": "/distribution/index",
                  "condition": "",
                  "menu": 1,
                  "order": 50,
                  "icon": "user-filled",
                  "method": "GET",
                  "child": []
                },
                {
                  "id": 179,
                  "rule_id": 177,
                  "status": 1,
                  "create_time": "2022-06-18 00:15:25",
                  "update_time": "2022-06-18 00:15:25",
                  "name": "分销设置",
                  "desc": null,
                  "frontpath": "/distribution/setting",
                  "condition": "",
                  "menu": 1,
                  "order": 50,
                  "icon": "set-up",
                  "method": "GET",
                  "child": []
                }
              ]
            },
            {
              "id": 172,
              "rule_id": 0,
              "status": 1,
              "create_time": "2021-12-21 19:10:34",
              "update_time": "2021-12-21 19:10:47",
              "name": "其他模块",
              "desc": "",
              "frontpath": "",
              "condition": "",
              "menu": 1,
              "order": 8,
              "icon": "mostly-cloudy",
              "method": "GET",
              "child": [
                {
                  "id": 11,
                  "rule_id": 172,
                  "status": 1,
                  "create_time": "2019-12-28 13:38:32",
                  "update_time": "2021-12-21 20:23:43",
                  "name": "图库管理",
                  "desc": "image",
                  "frontpath": "/image/list",
                  "condition": null,
                  "menu": 1,
                  "order": 20,
                  "icon": "picture-filled",
                  "method": "GET",
                  "child": []
                },
                {
                  "id": 149,
                  "rule_id": 172,
                  "status": 1,
                  "create_time": "2021-06-11 23:21:24",
                  "update_time": "2021-12-21 20:23:33",
                  "name": "公告管理",
                  "desc": "set_notice",
                  "frontpath": "/notice/list",
                  "condition": "",
                  "menu": 1,
                  "order": 50,
                  "icon": "notification",
                  "method": "GET",
                  "child": []
                }
              ]
            }
          ],
          "ruleNames": [
            "createRule,POST",
            "updateRule,POST",
            "deleteRule,POST",
            "getRuleList,GET",
            "updateRuleStatus,POST",
            "createRole,POST",
            "updateRole,POST",
            "deleteRole,POST",
            "getRoleList,GET",
            "updateRoleStatus,POST",
            "getGoodsList,GET",
            "getCurrentImageList,GET",
            "getImageClassList,GET",
            "createImageClass,POST",
            "updateImageClass,POST",
            "deleteImageClass,POST",
            "uploadImage,POST",
            "deleteImage,POST",
            "updateImage,POST",
            "getCategoryList,GET",
            "createCategory,POST",
            "sortCategory,POST",
            "updateCategory,POST",
            "updateCategoryStatus,POST",
            "deleteCategory,DELETE",
            "getSkusList,GET",
            "createSkus,POST",
            "deleteSkus,POST",
            "updateSkus,POST",
            "updateSkusStatus,POST",
            "getOrderList,GET",
            "deleteOrder,POST",
            "shipOrder,POST",
            "refundOrder,POST",
            "exportOrder,POST",
            "getCommentList,GET",
            "reviewComment,POST",
            "updateCommentStatus,POST",
            "getUserList,GET",
            "createUser,POST",
            "updateUser,POST",
            "updateUserStatus,POST",
            "deleteUser,POST",
            "getUserLevelList,GET",
            "createUserLevel,POST",
            "updateUserLevel,POST",
            "updateUserLevelStatus,POST",
            "deleteUserLevel,POST",
            "deleteManager,POST",
            "getManagerList,GET",
            "createManager,POST",
            "updateManager,POST",
            "updateManagerStatus,POST",
            "getSysSetting,GET",
            "sysconfigUpload,POST",
            "setSysSetting,POST",
            "getSysSetting,GET",
            "setSysSetting,GET",
            "readGoods,GET",
            "updateGoodsSkus,POST",
            "setGoodsBanner,POST",
            "restoreGoods,POST",
            "destroyGoods,POST",
            "deleteGoods,POST",
            "updateGoodsStatus,POST",
            "createGoods,POST",
            "updateGoods,POST",
            "checkGoods,POST",
            "createGoodsSkusCard,POST",
            "sortGoodsSkusCard,POST",
            "updateGoodsSkusCard,POST",
            "deleteGoodsSkusCard,POST",
            "createGoodsSkusCardValue,POST",
            "updateGoodsSkusCardValue,POST",
            "deleteGoodsSkusCardValue,POST",
            "getNoticeList,GET",
            "createNotice,POST",
            "updateNotice,POST",
            "deleteNotice,POST",
            "getCouponList,GET",
            "createCoupon,POST",
            "updateCoupon,POST",
            "updateCouponStatus,POST",
            "getCategoryGoods,GET",
            "connectCategoryGoods,POST",
            "deleteCategoryGoods,POST",
            "getStatistics1,GET",
            "getStatistics2,GET",
            "getStatistics3,GET",
            "setRoleRules,POST",
            "deleteCoupon,POST",
            "getShipInfo,GET",
            "getExpressCompanyList,GET",
            "getAgentStatistics,GET",
            "getAgentList,GET",
            "getUserBillList,GET",
            "getDistributionSetting,GET",
            "setDistributionSetting,POST"
          ]
        },
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      }
    },
    {
      "note": "首页统计卡片",
      "method": "GET",
      "pattern": "/statistics1",
      "kind": "static",
      "data": {
        "msg": "ok",
        "data": {
          "panels": [
            {
              "title": "支付订单",
              "value": 51,
              "unit": "年",
              "unitColor": "success",
              "subTitle": "总支付订单",
              "subValue": 51,
              "subUnit": ""
            },
            {
              "title": "订单量",
              "value": 555,
              "unit": "周",
              "unitColor": "danger",
              "subTitle": "转化率",
              "subValue": "60%",
              "subUnit": ""
            },
            {
              "title": "销售额",
              "value": 3.74,
              "unit": "年",
              "unitColor": "",
              "subTitle": "总销售额",
              "subValue": 3.74,
              "subUnit": ""
            },
            {
              "title": "新增用户",
              "value": 33,
              "unit": "年",
              "unitColor": "warning",
              "subTitle": "总用户",
              "subValue": 33,
              "subUnit": "人"
            }
          ]
        },
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      }
    },
    {
      "note": "店铺与交易提示",
      "method": "GET",
      "pattern": "/statistics2",
      "kind": "static",
      "data": {
        "msg": "ok",
        "data": {
          "goods": [
            {
              "label": "审核中",
              "value": 8
            },
            {
              "label": "销售中",
              "value": 83
            },
            {
              "label": "已下架",
              "value": 137
            },
            {
              "label": "库存预警",
              "value": 16
            }
          ],
          "order": [
            {
              "label": "待付款",
              "value": 171
            },
            {
              "label": "待发货",
              "value": 16
            },
            {
              "label": "已发货",
              "value": 1
            },
            {
              "label": "退款中",
              "value": 17
            }
          ]
        },
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      }
    },
    {
      "note": "订单趋势图 · hour",
      "method": "GET",
      "pattern": "/statistics3",
      "params": {
        "type": "hour"
      },
      "kind": "static",
      "data": {
        "msg": "ok",
        "data": {
          "x": [
            "00",
            "23",
            "22",
            "21",
            "20",
            "19",
            "18",
            "17",
            "16",
            "15",
            "14",
            "13",
            "12",
            "11",
            "10",
            "09",
            "08",
            "07",
            "06",
            "05",
            "04",
            "03",
            "02",
            "01"
          ],
          "y": [
            0,
            0,
            0,
            0,
            0,
            4,
            6,
            3,
            0,
            6,
            3,
            0,
            0,
            11,
            18,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        },
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      }
    },
    {
      "note": "订单趋势图 · week",
      "method": "GET",
      "pattern": "/statistics3",
      "params": {
        "type": "week"
      },
      "kind": "static",
      "data": {
        "msg": "ok",
        "data": {
          "x": [
            "07-24",
            "07-23",
            "07-22",
            "07-21",
            "07-20",
            "07-19",
            "07-18"
          ],
          "y": [
            51,
            0,
            1,
            1,
            0,
            2,
            1
          ]
        },
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      }
    },
    {
      "note": "订单趋势图 · month",
      "method": "GET",
      "pattern": "/statistics3",
      "params": {
        "type": "month"
      },
      "kind": "static",
      "data": {
        "msg": "ok",
        "data": {
          "x": [
            "07-24",
            "07-23",
            "07-22",
            "07-21",
            "07-20",
            "07-19",
            "07-18",
            "07-17",
            "07-16",
            "07-15",
            "07-14",
            "07-13",
            "07-12",
            "07-11",
            "07-10",
            "07-09",
            "07-08",
            "07-07",
            "07-06",
            "07-05",
            "07-04",
            "07-03",
            "07-02",
            "07-01",
            "06-30",
            "06-29",
            "06-28",
            "06-27",
            "06-26",
            "06-25"
          ],
          "y": [
            51,
            0,
            1,
            1,
            0,
            2,
            1,
            0,
            0,
            0,
            2,
            0,
            1,
            0,
            5,
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            4,
            6,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        },
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      }
    },
    {
      "note": "系统设置",
      "method": "GET",
      "pattern": "/sysconfig",
      "kind": "static",
      "data": {
        "msg": "ok",
        "data": {
          "id": 1,
          "open_reg": 1,
          "reg_method": "username",
          "password_min": 7,
          "password_encrypt": ",0,1,2",
          "upload_method": "oss",
          "upload_config": {
            "Bucket": "",
            "http": "",
            "ACCESS_KEY": "<演示数据已脱敏>",
            "SECRET_KEY": "<演示数据已脱敏>"
          },
          "api_safe": 1,
          "api_secret": "<演示数据已脱敏>",
          "close_order_minute": 30,
          "auto_received_day": 7,
          "after_sale_day": 23,
          "alipay": {
            "app_id": "****已配置****",
            "ali_public_key": "****已配置****",
            "private_key": "<演示数据已脱敏>"
          },
          "wxpay": {
            "app_id": "****已配置****",
            "miniapp_id": "****已配置****",
            "secret": "<演示数据已脱敏>",
            "appid": "****已配置****",
            "mch_id": "****已配置****",
            "key": "<演示数据已脱敏>",
            "cert_client": "<演示数据已脱敏>",
            "cert_key": "<演示数据已脱敏>"
          },
          "ship": "****已配置****"
        },
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      }
    },
    {
      "note": "分销配置",
      "method": "GET",
      "pattern": "/distribution_setting/get",
      "kind": "static",
      "data": {
        "msg": "ok",
        "data": {
          "id": 1,
          "distribution_open": 1,
          "store_first_rebate": 10,
          "store_second_rebate": 10,
          "spread_banners": [
            "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62710076cd93e.png"
          ],
          "is_self_brokerage": 0,
          "settlement_days": 7,
          "brokerage_method": "hand"
        },
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      }
    },
    {
      "note": "分销统计",
      "method": "GET",
      "pattern": "/agent/statistics",
      "kind": "static",
      "data": {
        "msg": "ok",
        "data": {
          "panels": [
            {
              "color": "bg-blue-400",
              "label": "分销员人数(人)",
              "value": 33
            },
            {
              "color": "bg-orange-400",
              "label": "订单数(单)",
              "value": 2
            },
            {
              "color": "bg-green-400",
              "label": "订单金额(元)",
              "value": 0.2
            },
            {
              "color": "bg-indigo-400",
              "label": "提现次数(次)",
              "value": 0
            }
          ]
        },
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      }
    },
    {
      "note": "快递公司",
      "method": "GET",
      "pattern": "/express_company/:id",
      "kind": "static",
      "data": {
        "msg": "ok",
        "data": {
          "list": [
            {
              "id": 9,
              "name": "宅急送",
              "code": "zhaijisong",
              "order": 50,
              "create_time": "2018-09-03 10:46:38",
              "update_time": "2018-09-03 10:46:38"
            },
            {
              "id": 8,
              "name": "天天快递",
              "code": "tiantian",
              "order": 50,
              "create_time": "2018-09-03 10:46:23",
              "update_time": "2018-09-03 10:46:23"
            },
            {
              "id": 7,
              "name": "中通快递",
              "code": "zhongtong",
              "order": 50,
              "create_time": "2018-09-03 10:46:04",
              "update_time": "2018-09-03 10:46:04"
            },
            {
              "id": 6,
              "name": "百世快递",
              "code": "huitongkuaidi",
              "order": 50,
              "create_time": "2018-09-03 10:45:43",
              "update_time": "2018-09-03 10:45:43"
            },
            {
              "id": 5,
              "name": "韵达快递",
              "code": "yunda",
              "order": 50,
              "create_time": "2018-09-03 10:45:11",
              "update_time": "2018-09-03 10:45:11"
            },
            {
              "id": 4,
              "name": "申通快递",
              "code": "shentong",
              "order": 50,
              "create_time": "2018-09-03 10:44:54",
              "update_time": "2018-09-03 10:44:54"
            },
            {
              "id": 3,
              "name": "圆通速递",
              "code": "yuantong",
              "order": 50,
              "create_time": "2018-09-03 10:44:35",
              "update_time": "2018-09-03 10:44:35"
            },
            {
              "id": 2,
              "name": "邮政国内",
              "code": "yzguonei",
              "order": 50,
              "create_time": "2018-09-03 10:44:13",
              "update_time": "2018-09-03 10:44:13"
            },
            {
              "id": 1,
              "name": "顺丰速运",
              "code": "shunfeng",
              "order": 50,
              "create_time": "2018-08-25 09:33:17",
              "update_time": "2018-08-25 09:33:17"
            }
          ],
          "totalCount": 9
        },
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      }
    },
    {
      "note": "商品列表 · all",
      "method": "GET",
      "pattern": "/goods/{page}",
      "params": {
        "tab": "all"
      },
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {
          "cates": [
            {
              "id": 3,
              "name": "运动旅行",
              "status": 1,
              "create_time": "2019-08-17 00:57:12",
              "update_time": "2026-10-14 16:06:03",
              "category_id": 0,
              "order": 3,
              "level": 0
            },
            {
              "id": 4,
              "name": "居家生活",
              "status": 1,
              "create_time": "2019-08-17 00:57:12",
              "update_time": "2026-09-25 20:31:31",
              "category_id": 0,
              "order": 4,
              "level": 0
            },
            {
              "id": 5,
              "name": "手机数码",
              "status": 1,
              "create_time": "2021-12-19 15:45:43",
              "update_time": "2026-10-14 10:54:23",
              "category_id": 0,
              "order": 0,
              "level": 0
            },
            {
              "id": 372,
              "name": "智能家电",
              "status": 1,
              "create_time": "2021-12-19 15:45:43",
              "update_time": "2026-09-24 19:36:05",
              "category_id": 0,
              "order": 49,
              "level": 0
            },
            {
              "id": 1124,
              "name": "数码产品",
              "status": 1,
              "create_time": "2026-10-12 15:52:13",
              "update_time": "2026-10-14 16:06:03",
              "category_id": 0,
              "order": 50,
              "level": 0
            },
            {
              "id": 1130,
              "name": "123",
              "status": 1,
              "create_time": "2026-10-14 16:06:00",
              "update_time": "2026-10-14 16:06:00",
              "category_id": 0,
              "order": 50,
              "level": 0
            }
          ]
        },
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 1365,
          "title": "戴森吹风机 Supersonic HD15",
          "category_id": 372,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef07366f5.jpg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "2699.00",
          "min_oprice": "2999.00",
          "desc": "快速干发，减少热损伤",
          "unit": "台",
          "stock": 90,
          "min_stock": 10,
          "ischeck": 1,
          "status": 0,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-14 10:57:22",
          "update_time": "2026-10-14 19:37:14",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 372,
            "name": "智能家电",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-09-24 19:36:05",
            "category_id": 0,
            "order": 49
          },
          "goods_banner": [
            {
              "id": 3592,
              "goods_id": 1365,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef4fd9c15.jpg",
              "create_time": "2026-10-14 11:04:47",
              "update_time": "2026-10-14 11:04:47"
            },
            {
              "id": 3593,
              "goods_id": 1365,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef47b0b97.png",
              "create_time": "2026-10-14 11:04:47",
              "update_time": "2026-10-14 11:04:47"
            },
            {
              "id": 3594,
              "goods_id": 1365,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef19d7804.jpg",
              "create_time": "2026-10-14 11:04:47",
              "update_time": "2026-10-14 11:04:47"
            }
          ],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": [
            {
              "id": 3224,
              "goods_id": 1365,
              "name": "颜色",
              "type": 0,
              "order": 50,
              "goods_skus_card_value": []
            }
          ]
        },
        {
          "id": 1364,
          "title": "海尔冰箱 对开门 变频节能",
          "category_id": 372,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceeef694919.png",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "3999.00",
          "min_oprice": "5999.00",
          "desc": "551L大容量，智能控温",
          "unit": "台",
          "stock": 30,
          "min_stock": 3,
          "ischeck": 1,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-14 10:57:22",
          "update_time": "2026-10-14 19:37:17",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 372,
            "name": "智能家电",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-09-24 19:36:05",
            "category_id": 0,
            "order": 49
          },
          "goods_banner": [
            {
              "id": 3574,
              "goods_id": 1364,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef19d7804.jpg",
              "create_time": "2026-10-14 10:57:57",
              "update_time": "2026-10-14 10:57:57"
            },
            {
              "id": 3575,
              "goods_id": 1364,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef07366f5.jpg",
              "create_time": "2026-10-14 10:57:57",
              "update_time": "2026-10-14 10:57:57"
            },
            {
              "id": 3576,
              "goods_id": 1364,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceeef694919.png",
              "create_time": "2026-10-14 10:57:57",
              "update_time": "2026-10-14 10:57:57"
            }
          ],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1363,
          "title": "小米电视 65寸 4K超清智能屏",
          "category_id": 372,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef19d7804.jpg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "2999.00",
          "min_oprice": "3999.00",
          "desc": "AI语音控制，全面屏设计",
          "unit": "台",
          "stock": 45,
          "min_stock": 5,
          "ischeck": 2,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-14 10:57:21",
          "update_time": "2026-10-14 19:37:26",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 372,
            "name": "智能家电",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-09-24 19:36:05",
            "category_id": 0,
            "order": 49
          },
          "goods_banner": [
            {
              "id": 3583,
              "goods_id": 1363,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceeef694919.png",
              "create_time": "2026-10-14 10:59:41",
              "update_time": "2026-10-14 10:59:41"
            },
            {
              "id": 3584,
              "goods_id": 1363,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceee0e1dc1f.png",
              "create_time": "2026-10-14 10:59:41",
              "update_time": "2026-10-14 10:59:41"
            },
            {
              "id": 3585,
              "goods_id": 1363,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef01756524.png",
              "create_time": "2026-10-14 10:59:41",
              "update_time": "2026-10-14 10:59:41"
            }
          ],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1362,
          "title": "乳胶床垫 泰国进口天然乳胶",
          "category_id": 4,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef47b0b97.png",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "1599.00",
          "min_oprice": "2599.00",
          "desc": "7.5cm厚度，抑菌防螨",
          "unit": "张",
          "stock": 40,
          "min_stock": 5,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-14 10:57:20",
          "update_time": "2026-10-14 10:57:20",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 4,
            "name": "居家生活",
            "status": 1,
            "create_time": "2019-08-17 00:57:12",
            "update_time": "2026-09-25 20:31:31",
            "category_id": 0,
            "order": 4
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": [
            {
              "id": 3225,
              "goods_id": 1362,
              "name": "尺寸",
              "type": 0,
              "order": 50,
              "goods_skus_card_value": []
            }
          ]
        },
        {
          "id": 1361,
          "title": "智能扫地机器人 扫拖一体",
          "category_id": 4,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef4fd9c15.jpg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "1299.00",
          "min_oprice": "1999.00",
          "desc": "激光导航，自动回充",
          "unit": "台",
          "stock": 60,
          "min_stock": 10,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-14 10:57:20",
          "update_time": "2026-10-14 10:57:20",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 4,
            "name": "居家生活",
            "status": 1,
            "create_time": "2019-08-17 00:57:12",
            "update_time": "2026-09-25 20:31:31",
            "category_id": 0,
            "order": 4
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1360,
          "title": "全棉四件套 简约纯色床品",
          "category_id": 4,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef07366f5.jpg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "299.00",
          "min_oprice": "499.00",
          "desc": "100%纯棉，柔软舒适",
          "unit": "套",
          "stock": 150,
          "min_stock": 15,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-14 10:57:19",
          "update_time": "2026-10-14 10:57:19",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 4,
            "name": "居家生活",
            "status": 1,
            "create_time": "2019-08-17 00:57:12",
            "update_time": "2026-09-25 20:31:31",
            "category_id": 0,
            "order": 4
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": [
            {
              "id": 3226,
              "goods_id": 1360,
              "name": "尺寸",
              "type": 0,
              "order": 50,
              "goods_skus_card_value": []
            }
          ]
        },
        {
          "id": 1359,
          "title": "AirPods Pro 3 代蓝牙耳机",
          "category_id": 5,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceeef694919.png",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "1799.00",
          "min_oprice": "1999.00",
          "desc": "主动降噪，空间音频",
          "unit": "副",
          "stock": 200,
          "min_stock": 20,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-14 10:57:18",
          "update_time": "2026-10-14 10:57:18",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1358,
          "title": "华为Mate 60 Pro 旗舰手机",
          "category_id": 5,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef19d7804.jpg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "6999.00",
          "min_oprice": "7999.00",
          "desc": "麒麟9000S芯片，卫星通话",
          "unit": "台",
          "stock": 50,
          "min_stock": 5,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-14 10:57:17",
          "update_time": "2026-10-14 10:57:17",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": [
            {
              "id": 3218,
              "goods_id": 1358,
              "name": "容量",
              "type": 0,
              "order": 50,
              "goods_skus_card_value": []
            },
            {
              "id": 3219,
              "goods_id": 1358,
              "name": "版本",
              "type": 0,
              "order": 50,
              "goods_skus_card_value": []
            }
          ]
        },
        {
          "id": 1357,
          "title": "小米14 Ultra 影像旗舰",
          "category_id": 5,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef47b0b97.png",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "5999.00",
          "min_oprice": "6999.00",
          "desc": "徕卡全明星四摄，骁龙8 Gen3",
          "unit": "台",
          "stock": 80,
          "min_stock": 10,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-14 10:57:17",
          "update_time": "2026-10-14 10:57:17",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": [
            {
              "id": 3220,
              "goods_id": 1357,
              "name": "容量",
              "type": 0,
              "order": 50,
              "goods_skus_card_value": []
            },
            {
              "id": 3221,
              "goods_id": 1357,
              "name": "版本",
              "type": 0,
              "order": 50,
              "goods_skus_card_value": []
            }
          ]
        },
        {
          "id": 1356,
          "title": "iPhone 15 Pro Max 智能手机",
          "category_id": 5,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef4fd9c15.jpg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "9999.00",
          "min_oprice": "11999.00",
          "desc": "全新A17 Pro芯片，钛金属设计",
          "unit": "台",
          "stock": 100,
          "min_stock": 10,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-14 10:57:17",
          "update_time": "2026-10-14 10:57:17",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": [
            {
              "id": 3222,
              "goods_id": 1356,
              "name": "容量",
              "type": 0,
              "order": 50,
              "goods_skus_card_value": []
            },
            {
              "id": 3223,
              "goods_id": 1356,
              "name": "版本",
              "type": 0,
              "order": 50,
              "goods_skus_card_value": []
            }
          ]
        },
        {
          "id": 1138,
          "title": "阿斯顿马丁·火神",
          "category_id": 3,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6ab109056cefb.jpg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "100.00",
          "min_oprice": "120.00",
          "desc": "阿斯顿马丁·火神全球限量款",
          "unit": "辆",
          "stock": 100,
          "min_stock": 10,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": {
            "oprice": 100,
            "pprice": 100,
            "cprice": 100,
            "weight": 100,
            "volume": 100
          },
          "content": null,
          "discount": 0,
          "create_time": "2026-09-21 18:38:46",
          "update_time": "2026-09-21 19:08:27",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 3,
            "name": "运动旅行",
            "status": 1,
            "create_time": "2019-08-17 00:57:12",
            "update_time": "2026-10-14 16:06:03",
            "category_id": 0,
            "order": 3
          },
          "goods_banner": [
            {
              "id": 3501,
              "goods_id": 1138,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6ab1103a32444.jpg",
              "create_time": "2026-09-21 19:08:44",
              "update_time": "2026-09-21 19:08:44"
            },
            {
              "id": 3502,
              "goods_id": 1138,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6ab1103a3922b.jpg",
              "create_time": "2026-09-21 19:08:44",
              "update_time": "2026-09-21 19:08:44"
            }
          ],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 29,
          "title": "小米-商品31",
          "category_id": 372,
          "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/765a18a017acf0b5c012ce765696be6f.png",
          "rating": 5,
          "sale_count": 1,
          "review_count": 0,
          "min_price": "0.05",
          "min_oprice": "30.00",
          "desc": "全新十代酷睿处理器 / MX250独显 / 14寸超窄边框高清屏 / 小米手环极速解锁 / 炫酷多彩任你挑选",
          "unit": "kg",
          "stock": 179,
          "min_stock": 10,
          "ischeck": 1,
          "status": 1,
          "stock_display": 1,
          "express_id": 1,
          "sku_type": 0,
          "sku_value": {
            "oprice": 1,
            "pprice": 1,
            "cprice": 1,
            "weight": 1,
            "volume": 1
          },
          "content": "<p>&nbsp;</p>\n<div class=\"divide-bar\" style=\"margin: 0px; padding: 0.08rem 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; background-color: #f7f7f7; color: #999999; display: flex; justify-content: center; align-items: center; font-size: 0px; font-family: 'Microsoft YaHei';\">\n<div class=\"icon-info\" style=\"margin: 0px 0.08rem; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; position: relative; top: -0.01rem; display: flex; flex-direction: row; align-items: center; justify-content: center;\"><span class=\"taobao-iconfont \" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-size: 0.18rem; -webkit-font-smoothing: antialiased; -webkit-text-stroke-width: 0.2px; position: relative; font-family: taobao !important;\"></span><span class=\"icon-text\" style=\"margin: 0px 0px 0px 0.01rem; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-size: 0.12rem;\">详情</span></div>\n</div>\n<div class=\"desc-root\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-family: 'Microsoft YaHei'; font-size: 16px; background-color: #f7f7f7;\">\n<div class=\"descV6-container\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent;\">\n<div class=\"descV6-mobile-container\" style=\"margin: 0px; padding: 12px 0px 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; width: 1349px; background-color: #ffffff;\">2222222<img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1084.59px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2qIKTqpGWBuNjy0FbXXb4sXXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 937.109px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2KavKqER1BeNjy0FmXXb0wVXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1152.94px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2e2_MqrSYBuNjSspfXXcZCpXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1719.53px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2Ya3jqDlYBeNjSszcXXbwhFXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1554.05px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN01d0bgZU28uNyAPxpFJ_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1322.02px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN011mwqNC28uNyCTHdUC_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1244.67px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB2TIB0icuYBuNkSmRyXXcA3pXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1030.64px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2IyYYqx9YBuNjy0FfXXXIsVXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1019.84px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2LkVUihuTBuNkHFNRXXc9qpXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1025.23px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2RRmWqxSYBuNjSsphXXbGvVXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1028.84px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB21U2oquOSBuNjy0FdXXbDnVXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1023.44px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB209qhindYBeNkSmLyXXXfnVXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1041.42px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2jHcjqDlYBeNjSszcXXbwhFXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1070.2px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2GAu1qqSWBuNjSsrbXXa0mVXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1498.3px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2eibrqr5YBuNjSspoXXbeNFXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1043.23px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01VY8oQA28uNyCA12gK_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 2088.25px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/O1CN01WM2jER28uNy6GgCIL_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1525.27px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01JdblOV28uNyEQ78ZQ_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1316.62px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2oZhQuASWBuNjSszdXXbeSpXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1629.59px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2UDE9uk9WBuNjSspeXXaz5VXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 777.031px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Bskmuf9TBuNjy0FcXXbeiFXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1395.77px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB2osEwukKWBuNjy1zjXXcOypXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1311.23px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Lqw7ukyWBuNjy0FpXXassXXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1320.22px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Th4luxSYBuNjSspjXXX73VXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1688.95px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2uEdfur9YBuNjy0FgXXcxcXXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 2088.25px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN0195dRR128uNyF3E6fa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 78.2344px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01jS3HoM28uNyCPhBPF_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1440.73px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2ZpZBuXGWBuNjy0FbXXb4sXXa_!!2639307992.jpg\"></div>\n<p>&nbsp;</p>\n</div>\n</div>",
          "discount": 10,
          "create_time": "1970-01-01 08:33:39",
          "update_time": "2026-09-21 19:18:02",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 372,
            "name": "智能家电",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-09-24 19:36:05",
            "category_id": 0,
            "order": 49
          },
          "goods_banner": [
            {
              "id": 3503,
              "goods_id": 29,
              "url": "http://x.com/a.jpg",
              "create_time": "2026-09-21 19:17:17",
              "update_time": "2026-09-21 19:17:17"
            }
          ],
          "goods_attrs": [
            {
              "id": 11,
              "goods_id": 29,
              "order": 50,
              "value": "蛟龙845八核",
              "name": "CPU",
              "default": "默认值",
              "type": "0"
            },
            {
              "id": 12,
              "goods_id": 29,
              "order": 50,
              "value": "蛟龙845八核",
              "name": "CPU",
              "default": "默认值",
              "type": "0"
            }
          ],
          "goods_skus": [],
          "goods_skus_card": [
            {
              "id": 2289,
              "goods_id": 29,
              "name": "电池1",
              "type": 0,
              "order": 1,
              "goods_skus_card_value": [
                {
                  "id": 7390,
                  "goods_skus_card_id": 2289,
                  "name": "电池1",
                  "value": "碱性",
                  "order": 50
                }
              ]
            },
            {
              "id": 3130,
              "goods_id": 29,
              "name": "尺寸",
              "type": 0,
              "order": 50,
              "goods_skus_card_value": [
                {
                  "id": 8348,
                  "goods_skus_card_id": 3130,
                  "name": "尺寸",
                  "value": "m",
                  "order": 50
                },
                {
                  "id": 8347,
                  "goods_skus_card_id": 3130,
                  "name": "尺寸",
                  "value": "xl",
                  "order": 50
                }
              ]
            }
          ]
        },
        {
          "id": 28,
          "title": "小米-商品2",
          "category_id": 3,
          "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/575977783cdaf86f36c41df05bd9885b.png",
          "rating": 5,
          "sale_count": 1,
          "review_count": 0,
          "min_price": "0.05",
          "min_oprice": "30.00",
          "desc": "全新十代酷睿处理器 / MX250独显 / 14寸超窄边框高清屏 / 小米手环极速解锁 / 炫酷多彩任你挑选",
          "unit": "kg",
          "stock": 173,
          "min_stock": 10,
          "ischeck": 1,
          "status": 1,
          "stock_display": 1,
          "express_id": 1,
          "sku_type": 1,
          "sku_value": {
            "oprice": 1,
            "pprice": 2,
            "cprice": 3,
            "weight": 4,
            "volume": 5
          },
          "content": "<p>测试详情更新</p>",
          "discount": 10,
          "create_time": "1970-01-01 08:32:50",
          "update_time": "2026-09-22 16:04:43",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 3,
            "name": "运动旅行",
            "status": 1,
            "create_time": "2019-08-17 00:57:12",
            "update_time": "2026-10-14 16:06:03",
            "category_id": 0,
            "order": 3
          },
          "goods_banner": [],
          "goods_attrs": [
            {
              "id": 9,
              "goods_id": 28,
              "order": 50,
              "value": "蛟龙845八核",
              "name": "CPU",
              "default": "默认值",
              "type": "0"
            },
            {
              "id": 10,
              "goods_id": 28,
              "order": 50,
              "value": "蛟龙845八核",
              "name": "CPU",
              "default": "默认值",
              "type": "0"
            }
          ],
          "goods_skus": [
            {
              "id": 4746,
              "image": null,
              "pprice": "199.00",
              "oprice": "169.00",
              "cprice": "120.00",
              "stock": 5,
              "volume": 0,
              "weight": 0.5,
              "code": null,
              "goods_id": 28,
              "skus": {
                "0": {
                  "id": "6459",
                  "goods_skus_card_id": "2309"
                },
                "1": {
                  "id": "4805",
                  "goods_skus_card_id": "1722"
                }
              }
            },
            {
              "id": 4747,
              "image": null,
              "pprice": "100.00",
              "oprice": "99.00",
              "cprice": "50.00",
              "stock": 10,
              "volume": 0,
              "weight": 0.5,
              "code": null,
              "goods_id": 28,
              "skus": {
                "0": {
                  "id": "8328",
                  "goods_skus_card_id": "2309"
                },
                "1": {
                  "id": "8346",
                  "goods_skus_card_id": "1722"
                }
              }
            }
          ],
          "goods_skus_card": [
            {
              "id": 2309,
              "goods_id": 28,
              "name": "尺寸",
              "type": 0,
              "order": 1,
              "goods_skus_card_value": [
                {
                  "id": 8328,
                  "goods_skus_card_id": 2309,
                  "name": "尺寸",
                  "value": "M",
                  "order": 50
                },
                {
                  "id": 6459,
                  "goods_skus_card_id": 2309,
                  "name": "尺寸",
                  "value": "S",
                  "order": 50
                }
              ]
            },
            {
              "id": 1722,
              "goods_id": 28,
              "name": "颜色",
              "type": 0,
              "order": 2,
              "goods_skus_card_value": [
                {
                  "id": 8346,
                  "goods_skus_card_id": 1722,
                  "name": "颜色",
                  "value": "蓝色",
                  "order": 50
                },
                {
                  "id": 4805,
                  "goods_skus_card_id": 1722,
                  "name": "颜色",
                  "value": "黄色",
                  "order": 50
                }
              ]
            }
          ]
        },
        {
          "id": 27,
          "title": "小米-商品1",
          "category_id": 5,
          "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/eb5a2d258905e0a6096af057946b0bf0.png",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "0.03",
          "min_oprice": "30.00",
          "desc": "全新十代酷睿处理器 / MX250独显 / 14寸超窄边框高清屏 / 小米手环极速解锁 / 炫酷多彩任你挑选",
          "unit": "kg",
          "stock": 169,
          "min_stock": 10,
          "ischeck": 1,
          "status": 1,
          "stock_display": 1,
          "express_id": 1,
          "sku_type": 1,
          "sku_value": {
            "oprice": 20,
            "pprice": 30,
            "cprice": 20,
            "weight": 10,
            "volume": 20
          },
          "content": "<p>&nbsp;</p>\r\n<div class=\"divide-bar\" style=\"margin: 0px; padding: 0.08rem 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; background-color: #f7f7f7; color: #999999; display: flex; justify-content: center; align-items: center; font-size: 0px; font-family: 'Microsoft YaHei';\">\r\n<div class=\"icon-info\" style=\"margin: 0px 0.08rem; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; position: relative; top: -0.01rem; display: flex; flex-direction: row; align-items: center; justify-content: center;\"><span class=\"taobao-iconfont \" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-size: 0.18rem; -webkit-font-smoothing: antialiased; -webkit-text-stroke-width: 0.2px; position: relative; font-family: taobao !important;\"></span><span class=\"icon-text\" style=\"margin: 0px 0px 0px 0.01rem; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-size: 0.12rem;\">详情</span></div>\r\n</div>\r\n<div class=\"desc-root\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-family: 'Microsoft YaHei'; font-size: 16px; background-color: #f7f7f7;\">\r\n<div class=\"descV6-container\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent;\">\r\n<div class=\"descV6-mobile-container\" style=\"margin: 0px; padding: 12px 0px 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; width: 1349px; background-color: #ffffff;\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1291.44px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2z4cLqCtYBeNjSspaXXaOOFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1084.59px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2qIKTqpGWBuNjy0FbXXb4sXXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 937.109px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2KavKqER1BeNjy0FmXXb0wVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1152.94px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2e2_MqrSYBuNjSspfXXcZCpXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1719.53px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2Ya3jqDlYBeNjSszcXXbwhFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1554.05px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN01d0bgZU28uNyAPxpFJ_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1322.02px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN011mwqNC28uNyCTHdUC_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1244.67px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB2TIB0icuYBuNkSmRyXXcA3pXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1030.64px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2IyYYqx9YBuNjy0FfXXXIsVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1019.84px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2LkVUihuTBuNkHFNRXXc9qpXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1025.23px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2RRmWqxSYBuNjSsphXXbGvVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1028.84px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB21U2oquOSBuNjy0FdXXbDnVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1023.44px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB209qhindYBeNkSmLyXXXfnVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1041.42px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2jHcjqDlYBeNjSszcXXbwhFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1070.2px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2GAu1qqSWBuNjSsrbXXa0mVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1498.3px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2eibrqr5YBuNjSspoXXbeNFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1043.23px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01VY8oQA28uNyCA12gK_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 2088.25px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/O1CN01WM2jER28uNy6GgCIL_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1525.27px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01JdblOV28uNyEQ78ZQ_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1316.62px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2oZhQuASWBuNjSszdXXbeSpXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1629.59px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2UDE9uk9WBuNjSspeXXaz5VXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 777.031px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Bskmuf9TBuNjy0FcXXbeiFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1395.77px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB2osEwukKWBuNjy1zjXXcOypXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1311.23px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Lqw7ukyWBuNjy0FpXXassXXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1320.22px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Th4luxSYBuNjSspjXXX73VXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1688.95px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2uEdfur9YBuNjy0FgXXcxcXXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 2088.25px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN0195dRR128uNyF3E6fa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 78.2344px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01jS3HoM28uNyCPhBPF_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1440.73px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2ZpZBuXGWBuNjy0FbXXb4sXXa_!!2639307992.jpg\" /></div>\r\n<p>&nbsp;</p>\r\n</div>\r\n</div>",
          "discount": 10,
          "create_time": "1970-01-01 08:33:39",
          "update_time": "2026-09-10 21:50:37",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [
            {
              "id": 1835,
              "goods_id": 27,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5d883bf4ef8b9.jpg",
              "create_time": "2026-02-04 15:37:19",
              "update_time": "2026-02-04 15:37:19"
            },
            {
              "id": 1836,
              "goods_id": 27,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6969e0fec30e5.jpg",
              "create_time": "2026-02-04 15:37:19",
              "update_time": "2026-02-04 15:37:19"
            }
          ],
          "goods_attrs": [
            {
              "id": 7,
              "goods_id": 27,
              "order": 50,
              "value": "蛟龙845八核",
              "name": "CPU",
              "default": "默认值",
              "type": "0"
            },
            {
              "id": 8,
              "goods_id": 27,
              "order": 50,
              "value": "蛟龙845八核",
              "name": "CPU",
              "default": "默认值",
              "type": "0"
            }
          ],
          "goods_skus": [
            {
              "id": 4715,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "",
              "goods_id": 27,
              "skus": {
                "0": {
                  "goods_skus_card_id": "3141",
                  "name": "颜色",
                  "order": 50,
                  "value": "黑色",
                  "id": "8371",
                  "text": "黑色"
                }
              }
            }
          ],
          "goods_skus_card": [
            {
              "id": 3141,
              "goods_id": 27,
              "name": "颜色",
              "type": 0,
              "order": 50,
              "goods_skus_card_value": [
                {
                  "id": 8371,
                  "goods_skus_card_id": 3141,
                  "name": "颜色",
                  "value": "黑色",
                  "order": 50
                }
              ]
            }
          ]
        },
        {
          "id": 26,
          "title": "小米-天鹅绒柔暖四件套",
          "category_id": 5,
          "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
          "rating": 5,
          "sale_count": 1,
          "review_count": 0,
          "min_price": "0.02",
          "min_oprice": "30.00",
          "desc": "天鹅绒面，丝绒时髦高级感",
          "unit": "kg",
          "stock": 200,
          "min_stock": 10,
          "ischeck": 1,
          "status": 1,
          "stock_display": 1,
          "express_id": 1,
          "sku_type": 1,
          "sku_value": {
            "oprice": 20,
            "pprice": 30,
            "cprice": 20,
            "weight": 10,
            "volume": 20
          },
          "content": "<p>&nbsp;</p>\n<div class=\"divide-bar\" style=\"margin: 0px; padding: 0.08rem 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; background-color: #f7f7f7; color: #999999; display: flex; justify-content: center; align-items: center; font-size: 0px; font-family: 'Microsoft YaHei';\">\n<div class=\"icon-info\" style=\"margin: 0px 0.08rem; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; position: relative; top: -0.01rem; display: flex; flex-direction: row; align-items: center; justify-content: center;\"><span class=\"taobao-iconfont \" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-size: 0.18rem; -webkit-font-smoothing: antialiased; -webkit-text-stroke-width: 0.2px; position: relative; font-family: taobao !important;\"></span><span class=\"icon-text\" style=\"margin: 0px 0px 0px 0.01rem; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-size: 0.12rem;\">详情</span></div>\n</div>\n<div class=\"desc-root\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-family: 'Microsoft YaHei'; font-size: 16px; background-color: #f7f7f7;\">\n<div class=\"descV6-container\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent;\">\n<div class=\"descV6-mobile-container\" style=\"margin: 0px; padding: 12px 0px 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; width: 1349px; background-color: #ffffff;\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1291.44px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2z4cLqCtYBeNjSspaXXaOOFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1084.59px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2qIKTqpGWBuNjy0FbXXb4sXXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 937.109px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2KavKqER1BeNjy0FmXXb0wVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1152.94px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2e2_MqrSYBuNjSspfXXcZCpXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1719.53px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2Ya3jqDlYBeNjSszcXXbwhFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1554.05px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN01d0bgZU28uNyAPxpFJ_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1322.02px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN011mwqNC28uNyCTHdUC_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1244.67px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB2TIB0icuYBuNkSmRyXXcA3pXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1030.64px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2IyYYqx9YBuNjy0FfXXXIsVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1019.84px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2LkVUihuTBuNkHFNRXXc9qpXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1025.23px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2RRmWqxSYBuNjSsphXXbGvVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1028.84px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB21U2oquOSBuNjy0FdXXbDnVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1023.44px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB209qhindYBeNkSmLyXXXfnVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1041.42px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2jHcjqDlYBeNjSszcXXbwhFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1070.2px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2GAu1qqSWBuNjSsrbXXa0mVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1498.3px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2eibrqr5YBuNjSspoXXbeNFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1043.23px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01VY8oQA28uNyCA12gK_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 2088.25px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/O1CN01WM2jER28uNy6GgCIL_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1525.27px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01JdblOV28uNyEQ78ZQ_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1316.62px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2oZhQuASWBuNjSszdXXbeSpXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1629.59px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2UDE9uk9WBuNjSspeXXaz5VXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 777.031px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Bskmuf9TBuNjy0FcXXbeiFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1395.77px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB2osEwukKWBuNjy1zjXXcOypXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1311.23px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Lqw7ukyWBuNjy0FpXXassXXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1320.22px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Th4luxSYBuNjSspjXXX73VXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1688.95px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2uEdfur9YBuNjy0FgXXcxcXXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 2088.25px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN0195dRR128uNyF3E6fa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 78.2344px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01jS3HoM28uNyCPhBPF_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1440.73px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2ZpZBuXGWBuNjy0FbXXb4sXXa_!!2639307992.jpg\" /></div>\n<p>&nbsp;</p>\n</div>\n</div>",
          "discount": 10,
          "create_time": "1970-01-01 08:33:39",
          "update_time": "2026-09-29 21:06:39",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [
            {
              "id": 1374,
              "goods_id": 26,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/694132a077854.jpg",
              "create_time": "2025-12-17 08:54:54",
              "update_time": "2025-12-17 08:54:54"
            },
            {
              "id": 1375,
              "goods_id": 26,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/694132a077854.jpg",
              "create_time": "2025-12-17 08:54:54",
              "update_time": "2025-12-17 08:54:54"
            },
            {
              "id": 1376,
              "goods_id": 26,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/693d3043b488c.jpg",
              "create_time": "2025-12-17 08:54:54",
              "update_time": "2025-12-17 08:54:54"
            },
            {
              "id": 1377,
              "goods_id": 26,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/693ad508a0e9d.png",
              "create_time": "2025-12-17 08:54:54",
              "update_time": "2025-12-17 08:54:54"
            }
          ],
          "goods_attrs": [
            {
              "id": 5,
              "goods_id": 26,
              "order": 50,
              "value": "蛟龙845八核",
              "name": "CPU",
              "default": "默认值",
              "type": "0"
            },
            {
              "id": 6,
              "goods_id": 26,
              "order": 50,
              "value": "蛟龙845八核",
              "name": "CPU",
              "default": "默认值",
              "type": "0"
            }
          ],
          "goods_skus": [
            {
              "id": 5166,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 7394,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "xl",
                  "order": 50
                },
                "2": {
                  "id": 7396,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "蓝色",
                  "order": 50
                }
              }
            },
            {
              "id": 5167,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 7394,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "xl",
                  "order": 50
                },
                "2": {
                  "id": 8071,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "绿色",
                  "order": 50
                }
              }
            },
            {
              "id": 5168,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 7394,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "xl",
                  "order": 50
                },
                "2": {
                  "id": 7477,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "红色",
                  "order": 50
                }
              }
            },
            {
              "id": 5169,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 7394,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "xl",
                  "order": 50
                },
                "2": {
                  "id": 7395,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "黄色",
                  "order": 50
                }
              }
            },
            {
              "id": 5170,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 6756,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "M",
                  "order": 50
                },
                "2": {
                  "id": 7396,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "蓝色",
                  "order": 50
                }
              }
            },
            {
              "id": 5171,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 6756,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "M",
                  "order": 50
                },
                "2": {
                  "id": 8071,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "绿色",
                  "order": 50
                }
              }
            },
            {
              "id": 5172,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 6756,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "M",
                  "order": 50
                },
                "2": {
                  "id": 7477,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "红色",
                  "order": 50
                }
              }
            },
            {
              "id": 5173,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 6756,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "M",
                  "order": 50
                },
                "2": {
                  "id": 7395,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "黄色",
                  "order": 50
                }
              }
            },
            {
              "id": 5174,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 6755,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "S",
                  "order": 50
                },
                "2": {
                  "id": 7396,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "蓝色",
                  "order": 50
                }
              }
            },
            {
              "id": 5175,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 6755,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "S",
                  "order": 50
                },
                "2": {
                  "id": 8071,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "绿色",
                  "order": 50
                }
              }
            },
            {
              "id": 5176,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 6755,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "S",
                  "order": 50
                },
                "2": {
                  "id": 7477,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "红色",
                  "order": 50
                }
              }
            },
            {
              "id": 5177,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 6755,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "S",
                  "order": 50
                },
                "2": {
                  "id": 7395,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "黄色",
                  "order": 50
                }
              }
            },
            {
              "id": 5178,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 7394,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "xl",
                  "order": 50
                },
                "2": {
                  "id": 7396,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "蓝色",
                  "order": 50
                }
              }
            },
            {
              "id": 5179,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 7394,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "xl",
                  "order": 50
                },
                "2": {
                  "id": 8071,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "绿色",
                  "order": 50
                }
              }
            },
            {
              "id": 5180,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 7394,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "xl",
                  "order": 50
                },
                "2": {
                  "id": 7477,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "红色",
                  "order": 50
                }
              }
            },
            {
              "id": 5181,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 7394,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "xl",
                  "order": 50
                },
                "2": {
                  "id": 7395,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "黄色",
                  "order": 50
                }
              }
            },
            {
              "id": 5182,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 6756,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "M",
                  "order": 50
                },
                "2": {
                  "id": 7396,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "蓝色",
                  "order": 50
                }
              }
            },
            {
              "id": 5183,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 6756,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "M",
                  "order": 50
                },
                "2": {
                  "id": 8071,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "绿色",
                  "order": 50
                }
              }
            },
            {
              "id": 5184,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 6756,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "M",
                  "order": 50
                },
                "2": {
                  "id": 7477,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "红色",
                  "order": 50
                }
              }
            },
            {
              "id": 5185,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 6756,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "M",
                  "order": 50
                },
                "2": {
                  "id": 7395,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "黄色",
                  "order": 50
                }
              }
            },
            {
              "id": 5186,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 6755,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "S",
                  "order": 50
                },
                "2": {
                  "id": 7396,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "蓝色",
                  "order": 50
                }
              }
            },
            {
              "id": 5187,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 6755,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "S",
                  "order": 50
                },
                "2": {
                  "id": 8071,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "绿色",
                  "order": 50
                }
              }
            },
            {
              "id": 5188,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 6755,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "S",
                  "order": 50
                },
                "2": {
                  "id": 7477,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "红色",
                  "order": 50
                }
              }
            },
            {
              "id": 5189,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": null,
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 6755,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "S",
                  "order": 50
                },
                "2": {
                  "id": 7395,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "黄色",
                  "order": 50
                }
              }
            }
          ],
          "goods_skus_card": [
            {
              "id": 1713,
              "goods_id": 26,
              "name": "性别",
              "type": 0,
              "order": 1,
              "goods_skus_card_value": [
                {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                }
              ]
            },
            {
              "id": 2490,
              "goods_id": 26,
              "name": "尺寸",
              "type": 0,
              "order": 2,
              "goods_skus_card_value": [
                {
                  "id": 7394,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "xl",
                  "order": 50
                },
                {
                  "id": 6756,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "M",
                  "order": 50
                },
                {
                  "id": 6755,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "S",
                  "order": 50
                }
              ]
            },
            {
              "id": 2709,
              "goods_id": 26,
              "name": "颜色",
              "type": 0,
              "order": 3,
              "goods_skus_card_value": [
                {
                  "id": 8071,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "绿色",
                  "order": 50
                },
                {
                  "id": 7477,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "红色",
                  "order": 50
                },
                {
                  "id": 7396,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "蓝色",
                  "order": 50
                },
                {
                  "id": 7395,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "黄色",
                  "order": 50
                }
              ]
            }
          ]
        },
        {
          "id": 25,
          "title": "小米-百支酒店风抱枕套",
          "category_id": 5,
          "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
          "rating": 5,
          "sale_count": 1,
          "review_count": 0,
          "min_price": "0.01",
          "min_oprice": "30.00",
          "desc": "酒店格调，简约品味/双雕方空，繁艺简呈/新疆纯棉，百支醇密",
          "unit": "kg",
          "stock": 200,
          "min_stock": 100,
          "ischeck": 1,
          "status": 1,
          "stock_display": 1,
          "express_id": 1,
          "sku_type": 1,
          "sku_value": {
            "oprice": 0,
            "pprice": 0,
            "cprice": 0,
            "weight": 0,
            "volume": 0
          },
          "content": "<p><img style=\"width: 100%;\" src=\"http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6995712278d0a.jpg\"><img style=\"width: 100%;\" src=\"http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6995712278f1e.jpg\"></p>",
          "discount": 10,
          "create_time": "1970-01-01 08:33:39",
          "update_time": "2026-09-30 17:37:43",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [
            {
              "id": 2896,
              "goods_id": 25,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/60bf2a510e681.jpg",
              "create_time": "2026-05-21 15:48:14",
              "update_time": "2026-05-21 15:48:14"
            },
            {
              "id": 2897,
              "goods_id": 25,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6a0e779caad01.jpg",
              "create_time": "2026-05-21 15:48:14",
              "update_time": "2026-05-21 15:48:14"
            }
          ],
          "goods_attrs": [
            {
              "id": 60,
              "goods_id": 25,
              "order": 50,
              "value": "蛟龙845八核",
              "name": "CPU",
              "default": null,
              "type": "input"
            },
            {
              "id": 61,
              "goods_id": 25,
              "order": 50,
              "value": "蛟龙845八核",
              "name": "CPU",
              "default": null,
              "type": "input"
            },
            {
              "id": 62,
              "goods_id": 25,
              "order": 50,
              "value": "强",
              "name": "性能",
              "default": null,
              "type": "input"
            }
          ],
          "goods_skus": [
            {
              "id": 5192,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 25,
              "skus": {
                "0": {
                  "id": 6741,
                  "goods_skus_card_id": 2483,
                  "name": "尺寸",
                  "value": "L",
                  "order": 50
                },
                "1": {
                  "id": 8395,
                  "goods_skus_card_id": 2484,
                  "name": "水果",
                  "value": "香蕉",
                  "order": 50
                }
              }
            },
            {
              "id": 5193,
              "image": "",
              "pprice": "2.00",
              "oprice": "2.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 25,
              "skus": {
                "0": {
                  "id": 6741,
                  "goods_skus_card_id": 2483,
                  "name": "尺寸",
                  "value": "L",
                  "order": 50
                },
                "1": {
                  "id": 7778,
                  "goods_skus_card_id": 2484,
                  "name": "水果",
                  "value": "西瓜",
                  "order": 50
                }
              }
            },
            {
              "id": 5194,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 25,
              "skus": {
                "0": {
                  "goods_skus_card_id": 2483,
                  "name": "尺寸",
                  "order": 50,
                  "value": "M",
                  "id": "8415"
                },
                "1": {
                  "id": 8395,
                  "goods_skus_card_id": 2484,
                  "name": "水果",
                  "value": "香蕉",
                  "order": 50
                }
              }
            },
            {
              "id": 5195,
              "image": "",
              "pprice": "3.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 25,
              "skus": {
                "0": {
                  "goods_skus_card_id": 2483,
                  "name": "尺寸",
                  "order": 50,
                  "value": "M",
                  "id": "8415"
                },
                "1": {
                  "id": 7778,
                  "goods_skus_card_id": 2484,
                  "name": "水果",
                  "value": "西瓜",
                  "order": 50
                }
              }
            }
          ],
          "goods_skus_card": [
            {
              "id": 2484,
              "goods_id": 25,
              "name": "水果",
              "type": 0,
              "order": 1,
              "goods_skus_card_value": [
                {
                  "id": 7778,
                  "goods_skus_card_id": 2484,
                  "name": "水果",
                  "value": "苹果",
                  "order": 50
                },
                {
                  "id": 8395,
                  "goods_skus_card_id": 2484,
                  "name": "水果",
                  "value": "香蕉",
                  "order": 50
                }
              ]
            },
            {
              "id": 2483,
              "goods_id": 25,
              "name": "尺寸",
              "type": 0,
              "order": 2,
              "goods_skus_card_value": [
                {
                  "id": 8417,
                  "goods_skus_card_id": 2483,
                  "name": "尺寸",
                  "value": "S",
                  "order": 50
                },
                {
                  "id": 8415,
                  "goods_skus_card_id": 2483,
                  "name": "尺寸",
                  "value": "M",
                  "order": 50
                },
                {
                  "id": 6741,
                  "goods_skus_card_id": 2483,
                  "name": "尺寸",
                  "value": "L",
                  "order": 50
                }
              ]
            }
          ]
        }
      ],
      "totalCount": 16,
      "sourceTotalCount": 16
    },
    {
      "note": "商品列表 · checking",
      "method": "GET",
      "pattern": "/goods/{page}",
      "params": {
        "tab": "checking"
      },
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {
          "cates": [
            {
              "id": 3,
              "name": "运动旅行",
              "status": 1,
              "create_time": "2019-08-17 00:57:12",
              "update_time": "2026-10-14 16:06:03",
              "category_id": 0,
              "order": 3,
              "level": 0
            },
            {
              "id": 4,
              "name": "居家生活",
              "status": 1,
              "create_time": "2019-08-17 00:57:12",
              "update_time": "2026-09-25 20:31:31",
              "category_id": 0,
              "order": 4,
              "level": 0
            },
            {
              "id": 5,
              "name": "手机数码",
              "status": 1,
              "create_time": "2021-12-19 15:45:43",
              "update_time": "2026-10-14 10:54:23",
              "category_id": 0,
              "order": 0,
              "level": 0
            },
            {
              "id": 372,
              "name": "智能家电",
              "status": 1,
              "create_time": "2021-12-19 15:45:43",
              "update_time": "2026-09-24 19:36:05",
              "category_id": 0,
              "order": 49,
              "level": 0
            },
            {
              "id": 1124,
              "name": "数码产品",
              "status": 1,
              "create_time": "2026-10-12 15:52:13",
              "update_time": "2026-10-14 16:06:03",
              "category_id": 0,
              "order": 50,
              "level": 0
            },
            {
              "id": 1130,
              "name": "123",
              "status": 1,
              "create_time": "2026-10-14 16:06:00",
              "update_time": "2026-10-14 16:06:00",
              "category_id": 0,
              "order": 50,
              "level": 0
            }
          ]
        },
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 1362,
          "title": "乳胶床垫 泰国进口天然乳胶",
          "category_id": 4,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef47b0b97.png",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "1599.00",
          "min_oprice": "2599.00",
          "desc": "7.5cm厚度，抑菌防螨",
          "unit": "张",
          "stock": 40,
          "min_stock": 5,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-14 10:57:20",
          "update_time": "2026-10-14 10:57:20",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 4,
            "name": "居家生活",
            "status": 1,
            "create_time": "2019-08-17 00:57:12",
            "update_time": "2026-09-25 20:31:31",
            "category_id": 0,
            "order": 4
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": [
            {
              "id": 3225,
              "goods_id": 1362,
              "name": "尺寸",
              "type": 0,
              "order": 50,
              "goods_skus_card_value": []
            }
          ]
        },
        {
          "id": 1361,
          "title": "智能扫地机器人 扫拖一体",
          "category_id": 4,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef4fd9c15.jpg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "1299.00",
          "min_oprice": "1999.00",
          "desc": "激光导航，自动回充",
          "unit": "台",
          "stock": 60,
          "min_stock": 10,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-14 10:57:20",
          "update_time": "2026-10-14 10:57:20",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 4,
            "name": "居家生活",
            "status": 1,
            "create_time": "2019-08-17 00:57:12",
            "update_time": "2026-09-25 20:31:31",
            "category_id": 0,
            "order": 4
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1360,
          "title": "全棉四件套 简约纯色床品",
          "category_id": 4,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef07366f5.jpg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "299.00",
          "min_oprice": "499.00",
          "desc": "100%纯棉，柔软舒适",
          "unit": "套",
          "stock": 150,
          "min_stock": 15,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-14 10:57:19",
          "update_time": "2026-10-14 10:57:19",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 4,
            "name": "居家生活",
            "status": 1,
            "create_time": "2019-08-17 00:57:12",
            "update_time": "2026-09-25 20:31:31",
            "category_id": 0,
            "order": 4
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": [
            {
              "id": 3226,
              "goods_id": 1360,
              "name": "尺寸",
              "type": 0,
              "order": 50,
              "goods_skus_card_value": []
            }
          ]
        },
        {
          "id": 1359,
          "title": "AirPods Pro 3 代蓝牙耳机",
          "category_id": 5,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceeef694919.png",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "1799.00",
          "min_oprice": "1999.00",
          "desc": "主动降噪，空间音频",
          "unit": "副",
          "stock": 200,
          "min_stock": 20,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-14 10:57:18",
          "update_time": "2026-10-14 10:57:18",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1358,
          "title": "华为Mate 60 Pro 旗舰手机",
          "category_id": 5,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef19d7804.jpg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "6999.00",
          "min_oprice": "7999.00",
          "desc": "麒麟9000S芯片，卫星通话",
          "unit": "台",
          "stock": 50,
          "min_stock": 5,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-14 10:57:17",
          "update_time": "2026-10-14 10:57:17",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": [
            {
              "id": 3218,
              "goods_id": 1358,
              "name": "容量",
              "type": 0,
              "order": 50,
              "goods_skus_card_value": []
            },
            {
              "id": 3219,
              "goods_id": 1358,
              "name": "版本",
              "type": 0,
              "order": 50,
              "goods_skus_card_value": []
            }
          ]
        },
        {
          "id": 1357,
          "title": "小米14 Ultra 影像旗舰",
          "category_id": 5,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef47b0b97.png",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "5999.00",
          "min_oprice": "6999.00",
          "desc": "徕卡全明星四摄，骁龙8 Gen3",
          "unit": "台",
          "stock": 80,
          "min_stock": 10,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-14 10:57:17",
          "update_time": "2026-10-14 10:57:17",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": [
            {
              "id": 3220,
              "goods_id": 1357,
              "name": "容量",
              "type": 0,
              "order": 50,
              "goods_skus_card_value": []
            },
            {
              "id": 3221,
              "goods_id": 1357,
              "name": "版本",
              "type": 0,
              "order": 50,
              "goods_skus_card_value": []
            }
          ]
        },
        {
          "id": 1356,
          "title": "iPhone 15 Pro Max 智能手机",
          "category_id": 5,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef4fd9c15.jpg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "9999.00",
          "min_oprice": "11999.00",
          "desc": "全新A17 Pro芯片，钛金属设计",
          "unit": "台",
          "stock": 100,
          "min_stock": 10,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-14 10:57:17",
          "update_time": "2026-10-14 10:57:17",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": [
            {
              "id": 3222,
              "goods_id": 1356,
              "name": "容量",
              "type": 0,
              "order": 50,
              "goods_skus_card_value": []
            },
            {
              "id": 3223,
              "goods_id": 1356,
              "name": "版本",
              "type": 0,
              "order": 50,
              "goods_skus_card_value": []
            }
          ]
        },
        {
          "id": 1138,
          "title": "阿斯顿马丁·火神",
          "category_id": 3,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6ab109056cefb.jpg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "100.00",
          "min_oprice": "120.00",
          "desc": "阿斯顿马丁·火神全球限量款",
          "unit": "辆",
          "stock": 100,
          "min_stock": 10,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": {
            "oprice": 100,
            "pprice": 100,
            "cprice": 100,
            "weight": 100,
            "volume": 100
          },
          "content": null,
          "discount": 0,
          "create_time": "2026-09-21 18:38:46",
          "update_time": "2026-09-21 19:08:27",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 3,
            "name": "运动旅行",
            "status": 1,
            "create_time": "2019-08-17 00:57:12",
            "update_time": "2026-10-14 16:06:03",
            "category_id": 0,
            "order": 3
          },
          "goods_banner": [
            {
              "id": 3501,
              "goods_id": 1138,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6ab1103a32444.jpg",
              "create_time": "2026-09-21 19:08:44",
              "update_time": "2026-09-21 19:08:44"
            },
            {
              "id": 3502,
              "goods_id": 1138,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6ab1103a3922b.jpg",
              "create_time": "2026-09-21 19:08:44",
              "update_time": "2026-09-21 19:08:44"
            }
          ],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        }
      ],
      "totalCount": 8,
      "sourceTotalCount": 8
    },
    {
      "note": "商品列表 · saling",
      "method": "GET",
      "pattern": "/goods/{page}",
      "params": {
        "tab": "saling"
      },
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {
          "cates": [
            {
              "id": 3,
              "name": "运动旅行",
              "status": 1,
              "create_time": "2019-08-17 00:57:12",
              "update_time": "2026-10-14 16:06:03",
              "category_id": 0,
              "order": 3,
              "level": 0
            },
            {
              "id": 4,
              "name": "居家生活",
              "status": 1,
              "create_time": "2019-08-17 00:57:12",
              "update_time": "2026-09-25 20:31:31",
              "category_id": 0,
              "order": 4,
              "level": 0
            },
            {
              "id": 5,
              "name": "手机数码",
              "status": 1,
              "create_time": "2021-12-19 15:45:43",
              "update_time": "2026-10-14 10:54:23",
              "category_id": 0,
              "order": 0,
              "level": 0
            },
            {
              "id": 372,
              "name": "智能家电",
              "status": 1,
              "create_time": "2021-12-19 15:45:43",
              "update_time": "2026-09-24 19:36:05",
              "category_id": 0,
              "order": 49,
              "level": 0
            },
            {
              "id": 1124,
              "name": "数码产品",
              "status": 1,
              "create_time": "2026-10-12 15:52:13",
              "update_time": "2026-10-14 16:06:03",
              "category_id": 0,
              "order": 50,
              "level": 0
            },
            {
              "id": 1130,
              "name": "123",
              "status": 1,
              "create_time": "2026-10-14 16:06:00",
              "update_time": "2026-10-14 16:06:00",
              "category_id": 0,
              "order": 50,
              "level": 0
            }
          ]
        },
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 1364,
          "title": "海尔冰箱 对开门 变频节能",
          "category_id": 372,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceeef694919.png",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "3999.00",
          "min_oprice": "5999.00",
          "desc": "551L大容量，智能控温",
          "unit": "台",
          "stock": 30,
          "min_stock": 3,
          "ischeck": 1,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-14 10:57:22",
          "update_time": "2026-10-14 19:37:17",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 372,
            "name": "智能家电",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-09-24 19:36:05",
            "category_id": 0,
            "order": 49
          },
          "goods_banner": [
            {
              "id": 3574,
              "goods_id": 1364,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef19d7804.jpg",
              "create_time": "2026-10-14 10:57:57",
              "update_time": "2026-10-14 10:57:57"
            },
            {
              "id": 3575,
              "goods_id": 1364,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef07366f5.jpg",
              "create_time": "2026-10-14 10:57:57",
              "update_time": "2026-10-14 10:57:57"
            },
            {
              "id": 3576,
              "goods_id": 1364,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceeef694919.png",
              "create_time": "2026-10-14 10:57:57",
              "update_time": "2026-10-14 10:57:57"
            }
          ],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 29,
          "title": "小米-商品31",
          "category_id": 372,
          "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/765a18a017acf0b5c012ce765696be6f.png",
          "rating": 5,
          "sale_count": 1,
          "review_count": 0,
          "min_price": "0.05",
          "min_oprice": "30.00",
          "desc": "全新十代酷睿处理器 / MX250独显 / 14寸超窄边框高清屏 / 小米手环极速解锁 / 炫酷多彩任你挑选",
          "unit": "kg",
          "stock": 179,
          "min_stock": 10,
          "ischeck": 1,
          "status": 1,
          "stock_display": 1,
          "express_id": 1,
          "sku_type": 0,
          "sku_value": {
            "oprice": 1,
            "pprice": 1,
            "cprice": 1,
            "weight": 1,
            "volume": 1
          },
          "content": "<p>&nbsp;</p>\n<div class=\"divide-bar\" style=\"margin: 0px; padding: 0.08rem 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; background-color: #f7f7f7; color: #999999; display: flex; justify-content: center; align-items: center; font-size: 0px; font-family: 'Microsoft YaHei';\">\n<div class=\"icon-info\" style=\"margin: 0px 0.08rem; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; position: relative; top: -0.01rem; display: flex; flex-direction: row; align-items: center; justify-content: center;\"><span class=\"taobao-iconfont \" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-size: 0.18rem; -webkit-font-smoothing: antialiased; -webkit-text-stroke-width: 0.2px; position: relative; font-family: taobao !important;\"></span><span class=\"icon-text\" style=\"margin: 0px 0px 0px 0.01rem; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-size: 0.12rem;\">详情</span></div>\n</div>\n<div class=\"desc-root\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-family: 'Microsoft YaHei'; font-size: 16px; background-color: #f7f7f7;\">\n<div class=\"descV6-container\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent;\">\n<div class=\"descV6-mobile-container\" style=\"margin: 0px; padding: 12px 0px 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; width: 1349px; background-color: #ffffff;\">2222222<img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1084.59px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2qIKTqpGWBuNjy0FbXXb4sXXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 937.109px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2KavKqER1BeNjy0FmXXb0wVXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1152.94px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2e2_MqrSYBuNjSspfXXcZCpXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1719.53px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2Ya3jqDlYBeNjSszcXXbwhFXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1554.05px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN01d0bgZU28uNyAPxpFJ_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1322.02px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN011mwqNC28uNyCTHdUC_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1244.67px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB2TIB0icuYBuNkSmRyXXcA3pXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1030.64px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2IyYYqx9YBuNjy0FfXXXIsVXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1019.84px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2LkVUihuTBuNkHFNRXXc9qpXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1025.23px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2RRmWqxSYBuNjSsphXXbGvVXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1028.84px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB21U2oquOSBuNjy0FdXXbDnVXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1023.44px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB209qhindYBeNkSmLyXXXfnVXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1041.42px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2jHcjqDlYBeNjSszcXXbwhFXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1070.2px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2GAu1qqSWBuNjSsrbXXa0mVXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1498.3px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2eibrqr5YBuNjSspoXXbeNFXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1043.23px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01VY8oQA28uNyCA12gK_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 2088.25px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/O1CN01WM2jER28uNy6GgCIL_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1525.27px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01JdblOV28uNyEQ78ZQ_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1316.62px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2oZhQuASWBuNjSszdXXbeSpXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1629.59px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2UDE9uk9WBuNjSspeXXaz5VXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 777.031px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Bskmuf9TBuNjy0FcXXbeiFXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1395.77px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB2osEwukKWBuNjy1zjXXcOypXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1311.23px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Lqw7ukyWBuNjy0FpXXassXXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1320.22px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Th4luxSYBuNjSspjXXX73VXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1688.95px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2uEdfur9YBuNjy0FgXXcxcXXa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 2088.25px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN0195dRR128uNyF3E6fa_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 78.2344px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01jS3HoM28uNyCPhBPF_!!2639307992.jpg\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1440.73px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2ZpZBuXGWBuNjy0FbXXb4sXXa_!!2639307992.jpg\"></div>\n<p>&nbsp;</p>\n</div>\n</div>",
          "discount": 10,
          "create_time": "1970-01-01 08:33:39",
          "update_time": "2026-09-21 19:18:02",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 372,
            "name": "智能家电",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-09-24 19:36:05",
            "category_id": 0,
            "order": 49
          },
          "goods_banner": [
            {
              "id": 3503,
              "goods_id": 29,
              "url": "http://x.com/a.jpg",
              "create_time": "2026-09-21 19:17:17",
              "update_time": "2026-09-21 19:17:17"
            }
          ],
          "goods_attrs": [
            {
              "id": 11,
              "goods_id": 29,
              "order": 50,
              "value": "蛟龙845八核",
              "name": "CPU",
              "default": "默认值",
              "type": "0"
            },
            {
              "id": 12,
              "goods_id": 29,
              "order": 50,
              "value": "蛟龙845八核",
              "name": "CPU",
              "default": "默认值",
              "type": "0"
            }
          ],
          "goods_skus": [],
          "goods_skus_card": [
            {
              "id": 2289,
              "goods_id": 29,
              "name": "电池1",
              "type": 0,
              "order": 1,
              "goods_skus_card_value": [
                {
                  "id": 7390,
                  "goods_skus_card_id": 2289,
                  "name": "电池1",
                  "value": "碱性",
                  "order": 50
                }
              ]
            },
            {
              "id": 3130,
              "goods_id": 29,
              "name": "尺寸",
              "type": 0,
              "order": 50,
              "goods_skus_card_value": [
                {
                  "id": 8348,
                  "goods_skus_card_id": 3130,
                  "name": "尺寸",
                  "value": "m",
                  "order": 50
                },
                {
                  "id": 8347,
                  "goods_skus_card_id": 3130,
                  "name": "尺寸",
                  "value": "xl",
                  "order": 50
                }
              ]
            }
          ]
        },
        {
          "id": 28,
          "title": "小米-商品2",
          "category_id": 3,
          "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/575977783cdaf86f36c41df05bd9885b.png",
          "rating": 5,
          "sale_count": 1,
          "review_count": 0,
          "min_price": "0.05",
          "min_oprice": "30.00",
          "desc": "全新十代酷睿处理器 / MX250独显 / 14寸超窄边框高清屏 / 小米手环极速解锁 / 炫酷多彩任你挑选",
          "unit": "kg",
          "stock": 173,
          "min_stock": 10,
          "ischeck": 1,
          "status": 1,
          "stock_display": 1,
          "express_id": 1,
          "sku_type": 1,
          "sku_value": {
            "oprice": 1,
            "pprice": 2,
            "cprice": 3,
            "weight": 4,
            "volume": 5
          },
          "content": "<p>测试详情更新</p>",
          "discount": 10,
          "create_time": "1970-01-01 08:32:50",
          "update_time": "2026-09-22 16:04:43",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 3,
            "name": "运动旅行",
            "status": 1,
            "create_time": "2019-08-17 00:57:12",
            "update_time": "2026-10-14 16:06:03",
            "category_id": 0,
            "order": 3
          },
          "goods_banner": [],
          "goods_attrs": [
            {
              "id": 9,
              "goods_id": 28,
              "order": 50,
              "value": "蛟龙845八核",
              "name": "CPU",
              "default": "默认值",
              "type": "0"
            },
            {
              "id": 10,
              "goods_id": 28,
              "order": 50,
              "value": "蛟龙845八核",
              "name": "CPU",
              "default": "默认值",
              "type": "0"
            }
          ],
          "goods_skus": [
            {
              "id": 4746,
              "image": null,
              "pprice": "199.00",
              "oprice": "169.00",
              "cprice": "120.00",
              "stock": 5,
              "volume": 0,
              "weight": 0.5,
              "code": null,
              "goods_id": 28,
              "skus": {
                "0": {
                  "id": "6459",
                  "goods_skus_card_id": "2309"
                },
                "1": {
                  "id": "4805",
                  "goods_skus_card_id": "1722"
                }
              }
            },
            {
              "id": 4747,
              "image": null,
              "pprice": "100.00",
              "oprice": "99.00",
              "cprice": "50.00",
              "stock": 10,
              "volume": 0,
              "weight": 0.5,
              "code": null,
              "goods_id": 28,
              "skus": {
                "0": {
                  "id": "8328",
                  "goods_skus_card_id": "2309"
                },
                "1": {
                  "id": "8346",
                  "goods_skus_card_id": "1722"
                }
              }
            }
          ],
          "goods_skus_card": [
            {
              "id": 2309,
              "goods_id": 28,
              "name": "尺寸",
              "type": 0,
              "order": 1,
              "goods_skus_card_value": [
                {
                  "id": 8328,
                  "goods_skus_card_id": 2309,
                  "name": "尺寸",
                  "value": "M",
                  "order": 50
                },
                {
                  "id": 6459,
                  "goods_skus_card_id": 2309,
                  "name": "尺寸",
                  "value": "S",
                  "order": 50
                }
              ]
            },
            {
              "id": 1722,
              "goods_id": 28,
              "name": "颜色",
              "type": 0,
              "order": 2,
              "goods_skus_card_value": [
                {
                  "id": 8346,
                  "goods_skus_card_id": 1722,
                  "name": "颜色",
                  "value": "蓝色",
                  "order": 50
                },
                {
                  "id": 4805,
                  "goods_skus_card_id": 1722,
                  "name": "颜色",
                  "value": "黄色",
                  "order": 50
                }
              ]
            }
          ]
        },
        {
          "id": 27,
          "title": "小米-商品1",
          "category_id": 5,
          "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/eb5a2d258905e0a6096af057946b0bf0.png",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "0.03",
          "min_oprice": "30.00",
          "desc": "全新十代酷睿处理器 / MX250独显 / 14寸超窄边框高清屏 / 小米手环极速解锁 / 炫酷多彩任你挑选",
          "unit": "kg",
          "stock": 169,
          "min_stock": 10,
          "ischeck": 1,
          "status": 1,
          "stock_display": 1,
          "express_id": 1,
          "sku_type": 1,
          "sku_value": {
            "oprice": 20,
            "pprice": 30,
            "cprice": 20,
            "weight": 10,
            "volume": 20
          },
          "content": "<p>&nbsp;</p>\r\n<div class=\"divide-bar\" style=\"margin: 0px; padding: 0.08rem 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; background-color: #f7f7f7; color: #999999; display: flex; justify-content: center; align-items: center; font-size: 0px; font-family: 'Microsoft YaHei';\">\r\n<div class=\"icon-info\" style=\"margin: 0px 0.08rem; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; position: relative; top: -0.01rem; display: flex; flex-direction: row; align-items: center; justify-content: center;\"><span class=\"taobao-iconfont \" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-size: 0.18rem; -webkit-font-smoothing: antialiased; -webkit-text-stroke-width: 0.2px; position: relative; font-family: taobao !important;\"></span><span class=\"icon-text\" style=\"margin: 0px 0px 0px 0.01rem; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-size: 0.12rem;\">详情</span></div>\r\n</div>\r\n<div class=\"desc-root\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-family: 'Microsoft YaHei'; font-size: 16px; background-color: #f7f7f7;\">\r\n<div class=\"descV6-container\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent;\">\r\n<div class=\"descV6-mobile-container\" style=\"margin: 0px; padding: 12px 0px 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; width: 1349px; background-color: #ffffff;\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1291.44px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2z4cLqCtYBeNjSspaXXaOOFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1084.59px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2qIKTqpGWBuNjy0FbXXb4sXXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 937.109px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2KavKqER1BeNjy0FmXXb0wVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1152.94px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2e2_MqrSYBuNjSspfXXcZCpXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1719.53px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2Ya3jqDlYBeNjSszcXXbwhFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1554.05px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN01d0bgZU28uNyAPxpFJ_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1322.02px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN011mwqNC28uNyCTHdUC_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1244.67px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB2TIB0icuYBuNkSmRyXXcA3pXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1030.64px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2IyYYqx9YBuNjy0FfXXXIsVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1019.84px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2LkVUihuTBuNkHFNRXXc9qpXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1025.23px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2RRmWqxSYBuNjSsphXXbGvVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1028.84px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB21U2oquOSBuNjy0FdXXbDnVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1023.44px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB209qhindYBeNkSmLyXXXfnVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1041.42px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2jHcjqDlYBeNjSszcXXbwhFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1070.2px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2GAu1qqSWBuNjSsrbXXa0mVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1498.3px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2eibrqr5YBuNjSspoXXbeNFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1043.23px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01VY8oQA28uNyCA12gK_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 2088.25px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/O1CN01WM2jER28uNy6GgCIL_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1525.27px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01JdblOV28uNyEQ78ZQ_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1316.62px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2oZhQuASWBuNjSszdXXbeSpXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1629.59px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2UDE9uk9WBuNjSspeXXaz5VXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 777.031px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Bskmuf9TBuNjy0FcXXbeiFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1395.77px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB2osEwukKWBuNjy1zjXXcOypXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1311.23px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Lqw7ukyWBuNjy0FpXXassXXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1320.22px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Th4luxSYBuNjSspjXXX73VXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1688.95px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2uEdfur9YBuNjy0FgXXcxcXXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 2088.25px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN0195dRR128uNyF3E6fa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 78.2344px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01jS3HoM28uNyCPhBPF_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1440.73px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2ZpZBuXGWBuNjy0FbXXb4sXXa_!!2639307992.jpg\" /></div>\r\n<p>&nbsp;</p>\r\n</div>\r\n</div>",
          "discount": 10,
          "create_time": "1970-01-01 08:33:39",
          "update_time": "2026-09-10 21:50:37",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [
            {
              "id": 1835,
              "goods_id": 27,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5d883bf4ef8b9.jpg",
              "create_time": "2026-02-04 15:37:19",
              "update_time": "2026-02-04 15:37:19"
            },
            {
              "id": 1836,
              "goods_id": 27,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6969e0fec30e5.jpg",
              "create_time": "2026-02-04 15:37:19",
              "update_time": "2026-02-04 15:37:19"
            }
          ],
          "goods_attrs": [
            {
              "id": 7,
              "goods_id": 27,
              "order": 50,
              "value": "蛟龙845八核",
              "name": "CPU",
              "default": "默认值",
              "type": "0"
            },
            {
              "id": 8,
              "goods_id": 27,
              "order": 50,
              "value": "蛟龙845八核",
              "name": "CPU",
              "default": "默认值",
              "type": "0"
            }
          ],
          "goods_skus": [
            {
              "id": 4715,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "",
              "goods_id": 27,
              "skus": {
                "0": {
                  "goods_skus_card_id": "3141",
                  "name": "颜色",
                  "order": 50,
                  "value": "黑色",
                  "id": "8371",
                  "text": "黑色"
                }
              }
            }
          ],
          "goods_skus_card": [
            {
              "id": 3141,
              "goods_id": 27,
              "name": "颜色",
              "type": 0,
              "order": 50,
              "goods_skus_card_value": [
                {
                  "id": 8371,
                  "goods_skus_card_id": 3141,
                  "name": "颜色",
                  "value": "黑色",
                  "order": 50
                }
              ]
            }
          ]
        },
        {
          "id": 26,
          "title": "小米-天鹅绒柔暖四件套",
          "category_id": 5,
          "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
          "rating": 5,
          "sale_count": 1,
          "review_count": 0,
          "min_price": "0.02",
          "min_oprice": "30.00",
          "desc": "天鹅绒面，丝绒时髦高级感",
          "unit": "kg",
          "stock": 200,
          "min_stock": 10,
          "ischeck": 1,
          "status": 1,
          "stock_display": 1,
          "express_id": 1,
          "sku_type": 1,
          "sku_value": {
            "oprice": 20,
            "pprice": 30,
            "cprice": 20,
            "weight": 10,
            "volume": 20
          },
          "content": "<p>&nbsp;</p>\n<div class=\"divide-bar\" style=\"margin: 0px; padding: 0.08rem 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; background-color: #f7f7f7; color: #999999; display: flex; justify-content: center; align-items: center; font-size: 0px; font-family: 'Microsoft YaHei';\">\n<div class=\"icon-info\" style=\"margin: 0px 0.08rem; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; position: relative; top: -0.01rem; display: flex; flex-direction: row; align-items: center; justify-content: center;\"><span class=\"taobao-iconfont \" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-size: 0.18rem; -webkit-font-smoothing: antialiased; -webkit-text-stroke-width: 0.2px; position: relative; font-family: taobao !important;\"></span><span class=\"icon-text\" style=\"margin: 0px 0px 0px 0.01rem; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-size: 0.12rem;\">详情</span></div>\n</div>\n<div class=\"desc-root\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-family: 'Microsoft YaHei'; font-size: 16px; background-color: #f7f7f7;\">\n<div class=\"descV6-container\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent;\">\n<div class=\"descV6-mobile-container\" style=\"margin: 0px; padding: 12px 0px 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; width: 1349px; background-color: #ffffff;\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1291.44px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2z4cLqCtYBeNjSspaXXaOOFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1084.59px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2qIKTqpGWBuNjy0FbXXb4sXXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 937.109px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2KavKqER1BeNjy0FmXXb0wVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1152.94px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2e2_MqrSYBuNjSspfXXcZCpXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1719.53px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2Ya3jqDlYBeNjSszcXXbwhFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1554.05px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN01d0bgZU28uNyAPxpFJ_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1322.02px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN011mwqNC28uNyCTHdUC_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1244.67px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB2TIB0icuYBuNkSmRyXXcA3pXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1030.64px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2IyYYqx9YBuNjy0FfXXXIsVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1019.84px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2LkVUihuTBuNkHFNRXXc9qpXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1025.23px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2RRmWqxSYBuNjSsphXXbGvVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1028.84px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB21U2oquOSBuNjy0FdXXbDnVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1023.44px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB209qhindYBeNkSmLyXXXfnVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1041.42px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2jHcjqDlYBeNjSszcXXbwhFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1070.2px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2GAu1qqSWBuNjSsrbXXa0mVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1498.3px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2eibrqr5YBuNjSspoXXbeNFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1043.23px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01VY8oQA28uNyCA12gK_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 2088.25px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/O1CN01WM2jER28uNy6GgCIL_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1525.27px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01JdblOV28uNyEQ78ZQ_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1316.62px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2oZhQuASWBuNjSszdXXbeSpXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1629.59px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2UDE9uk9WBuNjSspeXXaz5VXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 777.031px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Bskmuf9TBuNjy0FcXXbeiFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1395.77px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB2osEwukKWBuNjy1zjXXcOypXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1311.23px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Lqw7ukyWBuNjy0FpXXassXXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1320.22px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Th4luxSYBuNjSspjXXX73VXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1688.95px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2uEdfur9YBuNjy0FgXXcxcXXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 2088.25px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN0195dRR128uNyF3E6fa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 78.2344px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01jS3HoM28uNyCPhBPF_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1440.73px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2ZpZBuXGWBuNjy0FbXXb4sXXa_!!2639307992.jpg\" /></div>\n<p>&nbsp;</p>\n</div>\n</div>",
          "discount": 10,
          "create_time": "1970-01-01 08:33:39",
          "update_time": "2026-09-29 21:06:39",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [
            {
              "id": 1374,
              "goods_id": 26,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/694132a077854.jpg",
              "create_time": "2025-12-17 08:54:54",
              "update_time": "2025-12-17 08:54:54"
            },
            {
              "id": 1375,
              "goods_id": 26,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/694132a077854.jpg",
              "create_time": "2025-12-17 08:54:54",
              "update_time": "2025-12-17 08:54:54"
            },
            {
              "id": 1376,
              "goods_id": 26,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/693d3043b488c.jpg",
              "create_time": "2025-12-17 08:54:54",
              "update_time": "2025-12-17 08:54:54"
            },
            {
              "id": 1377,
              "goods_id": 26,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/693ad508a0e9d.png",
              "create_time": "2025-12-17 08:54:54",
              "update_time": "2025-12-17 08:54:54"
            }
          ],
          "goods_attrs": [
            {
              "id": 5,
              "goods_id": 26,
              "order": 50,
              "value": "蛟龙845八核",
              "name": "CPU",
              "default": "默认值",
              "type": "0"
            },
            {
              "id": 6,
              "goods_id": 26,
              "order": 50,
              "value": "蛟龙845八核",
              "name": "CPU",
              "default": "默认值",
              "type": "0"
            }
          ],
          "goods_skus": [
            {
              "id": 5166,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 7394,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "xl",
                  "order": 50
                },
                "2": {
                  "id": 7396,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "蓝色",
                  "order": 50
                }
              }
            },
            {
              "id": 5167,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 7394,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "xl",
                  "order": 50
                },
                "2": {
                  "id": 8071,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "绿色",
                  "order": 50
                }
              }
            },
            {
              "id": 5168,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 7394,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "xl",
                  "order": 50
                },
                "2": {
                  "id": 7477,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "红色",
                  "order": 50
                }
              }
            },
            {
              "id": 5169,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 7394,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "xl",
                  "order": 50
                },
                "2": {
                  "id": 7395,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "黄色",
                  "order": 50
                }
              }
            },
            {
              "id": 5170,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 6756,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "M",
                  "order": 50
                },
                "2": {
                  "id": 7396,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "蓝色",
                  "order": 50
                }
              }
            },
            {
              "id": 5171,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 6756,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "M",
                  "order": 50
                },
                "2": {
                  "id": 8071,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "绿色",
                  "order": 50
                }
              }
            },
            {
              "id": 5172,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 6756,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "M",
                  "order": 50
                },
                "2": {
                  "id": 7477,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "红色",
                  "order": 50
                }
              }
            },
            {
              "id": 5173,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 6756,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "M",
                  "order": 50
                },
                "2": {
                  "id": 7395,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "黄色",
                  "order": 50
                }
              }
            },
            {
              "id": 5174,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 6755,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "S",
                  "order": 50
                },
                "2": {
                  "id": 7396,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "蓝色",
                  "order": 50
                }
              }
            },
            {
              "id": 5175,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 6755,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "S",
                  "order": 50
                },
                "2": {
                  "id": 8071,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "绿色",
                  "order": 50
                }
              }
            },
            {
              "id": 5176,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 6755,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "S",
                  "order": 50
                },
                "2": {
                  "id": 7477,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "红色",
                  "order": 50
                }
              }
            },
            {
              "id": 5177,
              "image": "",
              "pprice": "1.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                "1": {
                  "id": 6755,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "S",
                  "order": 50
                },
                "2": {
                  "id": 7395,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "黄色",
                  "order": 50
                }
              }
            },
            {
              "id": 5178,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 7394,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "xl",
                  "order": 50
                },
                "2": {
                  "id": 7396,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "蓝色",
                  "order": 50
                }
              }
            },
            {
              "id": 5179,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 7394,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "xl",
                  "order": 50
                },
                "2": {
                  "id": 8071,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "绿色",
                  "order": 50
                }
              }
            },
            {
              "id": 5180,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 7394,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "xl",
                  "order": 50
                },
                "2": {
                  "id": 7477,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "红色",
                  "order": 50
                }
              }
            },
            {
              "id": 5181,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 7394,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "xl",
                  "order": 50
                },
                "2": {
                  "id": 7395,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "黄色",
                  "order": 50
                }
              }
            },
            {
              "id": 5182,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 6756,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "M",
                  "order": 50
                },
                "2": {
                  "id": 7396,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "蓝色",
                  "order": 50
                }
              }
            },
            {
              "id": 5183,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 6756,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "M",
                  "order": 50
                },
                "2": {
                  "id": 8071,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "绿色",
                  "order": 50
                }
              }
            },
            {
              "id": 5184,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 6756,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "M",
                  "order": 50
                },
                "2": {
                  "id": 7477,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "红色",
                  "order": 50
                }
              }
            },
            {
              "id": 5185,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 6756,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "M",
                  "order": 50
                },
                "2": {
                  "id": 7395,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "黄色",
                  "order": 50
                }
              }
            },
            {
              "id": 5186,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 6755,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "S",
                  "order": 50
                },
                "2": {
                  "id": 7396,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "蓝色",
                  "order": 50
                }
              }
            },
            {
              "id": 5187,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 6755,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "S",
                  "order": 50
                },
                "2": {
                  "id": 8071,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "绿色",
                  "order": 50
                }
              }
            },
            {
              "id": 5188,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 6755,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "S",
                  "order": 50
                },
                "2": {
                  "id": 7477,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "红色",
                  "order": 50
                }
              }
            },
            {
              "id": 5189,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": null,
              "goods_id": 26,
              "skus": {
                "0": {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                },
                "1": {
                  "id": 6755,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "S",
                  "order": 50
                },
                "2": {
                  "id": 7395,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "黄色",
                  "order": 50
                }
              }
            }
          ],
          "goods_skus_card": [
            {
              "id": 1713,
              "goods_id": 26,
              "name": "性别",
              "type": 0,
              "order": 1,
              "goods_skus_card_value": [
                {
                  "id": 8081,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "女",
                  "order": 50
                },
                {
                  "id": 4774,
                  "goods_skus_card_id": 1713,
                  "name": "性别",
                  "value": "男",
                  "order": 50
                }
              ]
            },
            {
              "id": 2490,
              "goods_id": 26,
              "name": "尺寸",
              "type": 0,
              "order": 2,
              "goods_skus_card_value": [
                {
                  "id": 7394,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "xl",
                  "order": 50
                },
                {
                  "id": 6756,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "M",
                  "order": 50
                },
                {
                  "id": 6755,
                  "goods_skus_card_id": 2490,
                  "name": "尺寸",
                  "value": "S",
                  "order": 50
                }
              ]
            },
            {
              "id": 2709,
              "goods_id": 26,
              "name": "颜色",
              "type": 0,
              "order": 3,
              "goods_skus_card_value": [
                {
                  "id": 8071,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "绿色",
                  "order": 50
                },
                {
                  "id": 7477,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "红色",
                  "order": 50
                },
                {
                  "id": 7396,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "蓝色",
                  "order": 50
                },
                {
                  "id": 7395,
                  "goods_skus_card_id": 2709,
                  "name": "颜色",
                  "value": "黄色",
                  "order": 50
                }
              ]
            }
          ]
        },
        {
          "id": 25,
          "title": "小米-百支酒店风抱枕套",
          "category_id": 5,
          "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
          "rating": 5,
          "sale_count": 1,
          "review_count": 0,
          "min_price": "0.01",
          "min_oprice": "30.00",
          "desc": "酒店格调，简约品味/双雕方空，繁艺简呈/新疆纯棉，百支醇密",
          "unit": "kg",
          "stock": 200,
          "min_stock": 100,
          "ischeck": 1,
          "status": 1,
          "stock_display": 1,
          "express_id": 1,
          "sku_type": 1,
          "sku_value": {
            "oprice": 0,
            "pprice": 0,
            "cprice": 0,
            "weight": 0,
            "volume": 0
          },
          "content": "<p><img style=\"width: 100%;\" src=\"http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6995712278d0a.jpg\"><img style=\"width: 100%;\" src=\"http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6995712278f1e.jpg\"></p>",
          "discount": 10,
          "create_time": "1970-01-01 08:33:39",
          "update_time": "2026-09-30 17:37:43",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [
            {
              "id": 2896,
              "goods_id": 25,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/60bf2a510e681.jpg",
              "create_time": "2026-05-21 15:48:14",
              "update_time": "2026-05-21 15:48:14"
            },
            {
              "id": 2897,
              "goods_id": 25,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6a0e779caad01.jpg",
              "create_time": "2026-05-21 15:48:14",
              "update_time": "2026-05-21 15:48:14"
            }
          ],
          "goods_attrs": [
            {
              "id": 60,
              "goods_id": 25,
              "order": 50,
              "value": "蛟龙845八核",
              "name": "CPU",
              "default": null,
              "type": "input"
            },
            {
              "id": 61,
              "goods_id": 25,
              "order": 50,
              "value": "蛟龙845八核",
              "name": "CPU",
              "default": null,
              "type": "input"
            },
            {
              "id": 62,
              "goods_id": 25,
              "order": 50,
              "value": "强",
              "name": "性能",
              "default": null,
              "type": "input"
            }
          ],
          "goods_skus": [
            {
              "id": 5192,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 25,
              "skus": {
                "0": {
                  "id": 6741,
                  "goods_skus_card_id": 2483,
                  "name": "尺寸",
                  "value": "L",
                  "order": 50
                },
                "1": {
                  "id": 8395,
                  "goods_skus_card_id": 2484,
                  "name": "水果",
                  "value": "香蕉",
                  "order": 50
                }
              }
            },
            {
              "id": 5193,
              "image": "",
              "pprice": "2.00",
              "oprice": "2.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 25,
              "skus": {
                "0": {
                  "id": 6741,
                  "goods_skus_card_id": 2483,
                  "name": "尺寸",
                  "value": "L",
                  "order": 50
                },
                "1": {
                  "id": 7778,
                  "goods_skus_card_id": 2484,
                  "name": "水果",
                  "value": "西瓜",
                  "order": 50
                }
              }
            },
            {
              "id": 5194,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 25,
              "skus": {
                "0": {
                  "goods_skus_card_id": 2483,
                  "name": "尺寸",
                  "order": 50,
                  "value": "M",
                  "id": "8415"
                },
                "1": {
                  "id": 8395,
                  "goods_skus_card_id": 2484,
                  "name": "水果",
                  "value": "香蕉",
                  "order": 50
                }
              }
            },
            {
              "id": 5195,
              "image": "",
              "pprice": "3.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "0",
              "goods_id": 25,
              "skus": {
                "0": {
                  "goods_skus_card_id": 2483,
                  "name": "尺寸",
                  "order": 50,
                  "value": "M",
                  "id": "8415"
                },
                "1": {
                  "id": 7778,
                  "goods_skus_card_id": 2484,
                  "name": "水果",
                  "value": "西瓜",
                  "order": 50
                }
              }
            }
          ],
          "goods_skus_card": [
            {
              "id": 2484,
              "goods_id": 25,
              "name": "水果",
              "type": 0,
              "order": 1,
              "goods_skus_card_value": [
                {
                  "id": 7778,
                  "goods_skus_card_id": 2484,
                  "name": "水果",
                  "value": "苹果",
                  "order": 50
                },
                {
                  "id": 8395,
                  "goods_skus_card_id": 2484,
                  "name": "水果",
                  "value": "香蕉",
                  "order": 50
                }
              ]
            },
            {
              "id": 2483,
              "goods_id": 25,
              "name": "尺寸",
              "type": 0,
              "order": 2,
              "goods_skus_card_value": [
                {
                  "id": 8417,
                  "goods_skus_card_id": 2483,
                  "name": "尺寸",
                  "value": "S",
                  "order": 50
                },
                {
                  "id": 8415,
                  "goods_skus_card_id": 2483,
                  "name": "尺寸",
                  "value": "M",
                  "order": 50
                },
                {
                  "id": 6741,
                  "goods_skus_card_id": 2483,
                  "name": "尺寸",
                  "value": "L",
                  "order": 50
                }
              ]
            }
          ]
        }
      ],
      "totalCount": 6,
      "sourceTotalCount": 6
    },
    {
      "note": "商品列表 · off",
      "method": "GET",
      "pattern": "/goods/{page}",
      "params": {
        "tab": "off"
      },
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {
          "cates": [
            {
              "id": 3,
              "name": "运动旅行",
              "status": 1,
              "create_time": "2019-08-17 00:57:12",
              "update_time": "2026-10-14 16:06:03",
              "category_id": 0,
              "order": 3,
              "level": 0
            },
            {
              "id": 4,
              "name": "居家生活",
              "status": 1,
              "create_time": "2019-08-17 00:57:12",
              "update_time": "2026-09-25 20:31:31",
              "category_id": 0,
              "order": 4,
              "level": 0
            },
            {
              "id": 5,
              "name": "手机数码",
              "status": 1,
              "create_time": "2021-12-19 15:45:43",
              "update_time": "2026-10-14 10:54:23",
              "category_id": 0,
              "order": 0,
              "level": 0
            },
            {
              "id": 372,
              "name": "智能家电",
              "status": 1,
              "create_time": "2021-12-19 15:45:43",
              "update_time": "2026-09-24 19:36:05",
              "category_id": 0,
              "order": 49,
              "level": 0
            },
            {
              "id": 1124,
              "name": "数码产品",
              "status": 1,
              "create_time": "2026-10-12 15:52:13",
              "update_time": "2026-10-14 16:06:03",
              "category_id": 0,
              "order": 50,
              "level": 0
            },
            {
              "id": 1130,
              "name": "123",
              "status": 1,
              "create_time": "2026-10-14 16:06:00",
              "update_time": "2026-10-14 16:06:00",
              "category_id": 0,
              "order": 50,
              "level": 0
            }
          ]
        },
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 1365,
          "title": "戴森吹风机 Supersonic HD15",
          "category_id": 372,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef07366f5.jpg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "2699.00",
          "min_oprice": "2999.00",
          "desc": "快速干发，减少热损伤",
          "unit": "台",
          "stock": 90,
          "min_stock": 10,
          "ischeck": 1,
          "status": 0,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-14 10:57:22",
          "update_time": "2026-10-14 19:37:14",
          "delete_time": null,
          "order": 50,
          "category": {
            "id": 372,
            "name": "智能家电",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-09-24 19:36:05",
            "category_id": 0,
            "order": 49
          },
          "goods_banner": [
            {
              "id": 3592,
              "goods_id": 1365,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef4fd9c15.jpg",
              "create_time": "2026-10-14 11:04:47",
              "update_time": "2026-10-14 11:04:47"
            },
            {
              "id": 3593,
              "goods_id": 1365,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef47b0b97.png",
              "create_time": "2026-10-14 11:04:47",
              "update_time": "2026-10-14 11:04:47"
            },
            {
              "id": 3594,
              "goods_id": 1365,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef19d7804.jpg",
              "create_time": "2026-10-14 11:04:47",
              "update_time": "2026-10-14 11:04:47"
            }
          ],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": [
            {
              "id": 3224,
              "goods_id": 1365,
              "name": "颜色",
              "type": 0,
              "order": 50,
              "goods_skus_card_value": []
            }
          ]
        }
      ],
      "totalCount": 1,
      "sourceTotalCount": 1
    },
    {
      "note": "商品列表 · min_stock",
      "method": "GET",
      "pattern": "/goods/{page}",
      "params": {
        "tab": "min_stock"
      },
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {
          "cates": [
            {
              "id": 3,
              "name": "运动旅行",
              "status": 1,
              "create_time": "2019-08-17 00:57:12",
              "update_time": "2026-10-14 16:06:03",
              "category_id": 0,
              "order": 3,
              "level": 0
            },
            {
              "id": 4,
              "name": "居家生活",
              "status": 1,
              "create_time": "2019-08-17 00:57:12",
              "update_time": "2026-09-25 20:31:31",
              "category_id": 0,
              "order": 4,
              "level": 0
            },
            {
              "id": 5,
              "name": "手机数码",
              "status": 1,
              "create_time": "2021-12-19 15:45:43",
              "update_time": "2026-10-14 10:54:23",
              "category_id": 0,
              "order": 0,
              "level": 0
            },
            {
              "id": 372,
              "name": "智能家电",
              "status": 1,
              "create_time": "2021-12-19 15:45:43",
              "update_time": "2026-09-24 19:36:05",
              "category_id": 0,
              "order": 49,
              "level": 0
            },
            {
              "id": 1124,
              "name": "数码产品",
              "status": 1,
              "create_time": "2026-10-12 15:52:13",
              "update_time": "2026-10-14 16:06:03",
              "category_id": 0,
              "order": 50,
              "level": 0
            },
            {
              "id": 1130,
              "name": "123",
              "status": 1,
              "create_time": "2026-10-14 16:06:00",
              "update_time": "2026-10-14 16:06:00",
              "category_id": 0,
              "order": 50,
              "level": 0
            }
          ]
        },
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [],
      "totalCount": 0,
      "sourceTotalCount": 0
    },
    {
      "note": "商品列表 · delete",
      "method": "GET",
      "pattern": "/goods/{page}",
      "params": {
        "tab": "delete"
      },
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {
          "cates": [
            {
              "id": 3,
              "name": "运动旅行",
              "status": 1,
              "create_time": "2019-08-17 00:57:12",
              "update_time": "2026-10-14 16:06:03",
              "category_id": 0,
              "order": 3,
              "level": 0
            },
            {
              "id": 4,
              "name": "居家生活",
              "status": 1,
              "create_time": "2019-08-17 00:57:12",
              "update_time": "2026-09-25 20:31:31",
              "category_id": 0,
              "order": 4,
              "level": 0
            },
            {
              "id": 5,
              "name": "手机数码",
              "status": 1,
              "create_time": "2021-12-19 15:45:43",
              "update_time": "2026-10-14 10:54:23",
              "category_id": 0,
              "order": 0,
              "level": 0
            },
            {
              "id": 372,
              "name": "智能家电",
              "status": 1,
              "create_time": "2021-12-19 15:45:43",
              "update_time": "2026-09-24 19:36:05",
              "category_id": 0,
              "order": 49,
              "level": 0
            },
            {
              "id": 1124,
              "name": "数码产品",
              "status": 1,
              "create_time": "2026-10-12 15:52:13",
              "update_time": "2026-10-14 16:06:03",
              "category_id": 0,
              "order": 50,
              "level": 0
            },
            {
              "id": 1130,
              "name": "123",
              "status": 1,
              "create_time": "2026-10-14 16:06:00",
              "update_time": "2026-10-14 16:06:00",
              "category_id": 0,
              "order": 50,
              "level": 0
            }
          ]
        },
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 49,
          "title": "哈哈哈哈啊11",
          "category_id": 5,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/61c773d716296.png",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "1.00",
          "min_oprice": "2.00",
          "desc": "哈哈哈哈啊11商品描述",
          "unit": "件",
          "stock": 100,
          "min_stock": 10,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": {
            "oprice": 0,
            "pprice": 0,
            "cprice": 0,
            "weight": 0,
            "volume": 0
          },
          "content": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>&nbsp;<img style=\"width: 100%;\" src=\"http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/61c773e91e874.png\" /> &nbsp;<img style=\"width: 100%;\" src=\"http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/61c773d716296.png\" />&nbsp;123456</p>\n<table style=\"border-collapse: collapse; width: 100%;\" border=\"1\">\n<tbody>\n<tr>\n<td style=\"width: 24.4165%;\">&nbsp;</td>\n<td style=\"width: 24.4165%;\">&nbsp;</td>\n<td style=\"width: 24.4165%;\">&nbsp;</td>\n<td style=\"width: 24.4165%;\">&nbsp;</td>\n</tr>\n<tr>\n<td style=\"width: 24.4165%;\">&nbsp;</td>\n<td style=\"width: 24.4165%;\">&nbsp;</td>\n<td style=\"width: 24.4165%;\">&nbsp;</td>\n<td style=\"width: 24.4165%;\">&nbsp;</td>\n</tr>\n<tr>\n<td style=\"width: 24.4165%;\">&nbsp;</td>\n<td style=\"width: 24.4165%;\">&nbsp;</td>\n<td style=\"width: 24.4165%;\">&nbsp;</td>\n<td style=\"width: 24.4165%;\">&nbsp;</td>\n</tr>\n<tr>\n<td style=\"width: 24.4165%;\">&nbsp;</td>\n<td style=\"width: 24.4165%;\">&nbsp;</td>\n<td style=\"width: 24.4165%;\">&nbsp;</td>\n<td style=\"width: 24.4165%;\">&nbsp;</td>\n</tr>\n</tbody>\n</table>\n",
          "discount": 0,
          "create_time": "2021-12-27 04:05:32",
          "update_time": "2026-05-31 19:47:46",
          "delete_time": 1780228066,
          "order": 1001,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [
            {
              "id": 2971,
              "goods_id": 49,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6a18fe8a9ddb6.jpeg",
              "create_time": "2026-05-31 01:27:48",
              "update_time": "2026-05-31 01:27:48"
            },
            {
              "id": 2972,
              "goods_id": 49,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62ad209e78584.jpg",
              "create_time": "2026-05-31 01:27:48",
              "update_time": "2026-05-31 01:27:48"
            },
            {
              "id": 2973,
              "goods_id": 49,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62ad209e77866.png",
              "create_time": "2026-05-31 01:27:48",
              "update_time": "2026-05-31 01:27:48"
            },
            {
              "id": 2974,
              "goods_id": 49,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/61c773d716296.png",
              "create_time": "2026-05-31 01:27:48",
              "update_time": "2026-05-31 01:27:48"
            }
          ],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1355,
          "title": "dsad",
          "category_id": 1104,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceec6960292.jpg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "0.00",
          "min_oprice": "0.00",
          "desc": "dsad",
          "unit": "件",
          "stock": 100,
          "min_stock": 10,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-14 10:44:04",
          "update_time": "2026-10-14 10:44:38",
          "delete_time": 1791945878,
          "order": 50,
          "category": null,
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1354,
          "title": "zrui航",
          "category_id": 1099,
          "cover": "",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "1.00",
          "min_oprice": "0.01",
          "desc": "挺好的",
          "unit": "1件",
          "stock": 1,
          "min_stock": 1,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-13 15:19:37",
          "update_time": "2026-10-14 10:53:53",
          "delete_time": 1791946433,
          "order": 50,
          "category": null,
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1352,
          "title": "小米手环",
          "category_id": 1124,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acbbda003298.png",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "200.00",
          "min_oprice": "299.00",
          "desc": "小米手环",
          "unit": "件",
          "stock": 500,
          "min_stock": 10,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-12 15:54:50",
          "update_time": "2026-10-14 10:53:53",
          "delete_time": 1791946433,
          "order": 50,
          "category": {
            "id": 1124,
            "name": "数码产品",
            "status": 1,
            "create_time": "2026-10-12 15:52:13",
            "update_time": "2026-10-14 16:06:03",
            "category_id": 0,
            "order": 50
          },
          "goods_banner": [
            {
              "id": 3570,
              "goods_id": 1352,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acca95d0879d.png",
              "create_time": "2026-10-14 10:47:14",
              "update_time": "2026-10-14 10:47:14"
            }
          ],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1351,
          "title": "小米",
          "category_id": 5,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acbbda003298.png",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "2499.00",
          "min_oprice": "2999.00",
          "desc": "小米手机",
          "unit": "件",
          "stock": 100,
          "min_stock": 5,
          "ischeck": 1,
          "status": 0,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-12 15:47:27",
          "update_time": "2026-10-14 10:53:53",
          "delete_time": 1791946433,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1343,
          "title": "吴明阳",
          "category_id": 4,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acc3a92aa24f.png",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "200000.00",
          "min_oprice": "400000.00",
          "desc": "腰子",
          "unit": "件",
          "stock": 2,
          "min_stock": 0,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-12 09:41:12",
          "update_time": "2026-10-12 09:41:53",
          "delete_time": 1791769313,
          "order": 50,
          "category": {
            "id": 4,
            "name": "居家生活",
            "status": 1,
            "create_time": "2019-08-17 00:57:12",
            "update_time": "2026-09-25 20:31:31",
            "category_id": 0,
            "order": 4
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1342,
          "title": "111",
          "category_id": 5,
          "cover": "",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "0.00",
          "min_oprice": "0.00",
          "desc": "111",
          "unit": "件",
          "stock": 100,
          "min_stock": 10,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-12 09:08:24",
          "update_time": "2026-10-12 09:08:37",
          "delete_time": 1791767317,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1337,
          "title": "测试",
          "category_id": 5,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6ac9ad259b6ac.png",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "0.00",
          "min_oprice": "1.00",
          "desc": "",
          "unit": "件",
          "stock": 100,
          "min_stock": 10,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": "<p>萨达大厦</p>",
          "discount": 0,
          "create_time": "2026-10-10 11:12:59",
          "update_time": "2026-10-10 11:15:22",
          "delete_time": 1791602122,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [
            {
              "id": 3552,
              "goods_id": 1337,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6ac9adbda3f76.png",
              "create_time": "2026-10-10 11:15:13",
              "update_time": "2026-10-10 11:15:13"
            },
            {
              "id": 3553,
              "goods_id": 1337,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6ac9adc03966b.png",
              "create_time": "2026-10-10 11:15:13",
              "update_time": "2026-10-10 11:15:13"
            }
          ],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1336,
          "title": "testitem",
          "category_id": 5,
          "cover": "http://a.jpg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": null,
          "min_oprice": "80.00",
          "desc": null,
          "unit": "?",
          "stock": 100,
          "min_stock": 0,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 1,
          "sku_value": null,
          "content": "<p>111</p>",
          "discount": 0,
          "create_time": "2026-10-10 08:17:23",
          "update_time": "2026-10-12 09:09:21",
          "delete_time": 1791767361,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [
            {
              "id": 3561,
              "goods_id": 1336,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acc332c00fbb.png",
              "create_time": "2026-10-12 09:09:01",
              "update_time": "2026-10-12 09:09:01"
            }
          ],
          "goods_attrs": [],
          "goods_skus": [
            {
              "id": 5243,
              "image": "",
              "pprice": "0.00",
              "oprice": "0.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "",
              "goods_id": 1336,
              "skus": {
                "0": {
                  "goods_skus_card_id": "3191",
                  "name": "11",
                  "order": 1,
                  "value": "11",
                  "id": "8479",
                  "text": "11"
                },
                "1": {
                  "goods_skus_card_id": "3192",
                  "name": "尺码",
                  "order": 2,
                  "value": "m",
                  "id": "8480",
                  "text": "m"
                }
              }
            }
          ],
          "goods_skus_card": []
        },
        {
          "id": 1335,
          "title": "测试商品001",
          "category_id": 5,
          "cover": "http://img.test.com/a.jpg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": null,
          "min_oprice": "99.00",
          "desc": null,
          "unit": "份",
          "stock": 100,
          "min_stock": 10,
          "ischeck": 1,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-09 12:42:53",
          "update_time": "2026-10-09 16:17:32",
          "delete_time": 1791533852,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [
            {
              "id": 3551,
              "goods_id": 1335,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6ac87a81a90c2.jpg",
              "create_time": "2026-10-09 13:24:19",
              "update_time": "2026-10-09 13:24:19"
            }
          ],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1334,
          "title": "dwadwa1231321",
          "category_id": 5,
          "cover": "http://localhost:5178/local-img/1791506727023_alo433.png",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "0.00",
          "min_oprice": "0.00",
          "desc": "dwadaw",
          "unit": "件",
          "stock": 106,
          "min_stock": 10,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": {
            "oprice": 6,
            "pprice": 8,
            "cprice": 1,
            "weight": 0,
            "volume": 0
          },
          "content": "dwadaw",
          "discount": 0,
          "create_time": "2026-10-09 08:45:49",
          "update_time": "2026-10-09 08:49:18",
          "delete_time": 1791506958,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [
            {
              "id": 3549,
              "goods_id": 1334,
              "url": "http://localhost:5178/local-img/1791506833334_r2iesb.png",
              "create_time": "2026-10-09 08:47:35",
              "update_time": "2026-10-09 08:47:35"
            },
            {
              "id": 3550,
              "goods_id": 1334,
              "url": "http://localhost:5178/local-img/1791506836555_vu1liz.png",
              "create_time": "2026-10-09 08:47:35",
              "update_time": "2026-10-09 08:47:35"
            }
          ],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1333,
          "title": "测试Vite商品",
          "category_id": 5,
          "cover": "",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": null,
          "min_oprice": "89.00",
          "desc": null,
          "unit": "件",
          "stock": 100,
          "min_stock": 1,
          "ischeck": 2,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-08 09:39:21",
          "update_time": "2026-10-08 21:30:28",
          "delete_time": 1791466228,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1332,
          "title": "测试Vite商品",
          "category_id": 5,
          "cover": "",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": null,
          "min_oprice": "89.00",
          "desc": null,
          "unit": "件",
          "stock": 100,
          "min_stock": 1,
          "ischeck": 1,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-08 09:39:21",
          "update_time": "2026-10-08 21:30:38",
          "delete_time": 1791466238,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1331,
          "title": "测试Vite商品",
          "category_id": 5,
          "cover": "",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": null,
          "min_oprice": "89.00",
          "desc": null,
          "unit": "件",
          "stock": 100,
          "min_stock": 1,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-08 09:39:20",
          "update_time": "2026-10-08 21:30:38",
          "delete_time": 1791466238,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1330,
          "title": "测试Vite商品",
          "category_id": 5,
          "cover": "",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": null,
          "min_oprice": "89.00",
          "desc": null,
          "unit": "件",
          "stock": 100,
          "min_stock": 1,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-08 09:39:19",
          "update_time": "2026-10-08 21:30:38",
          "delete_time": 1791466238,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1329,
          "title": "测试Vite商品",
          "category_id": 5,
          "cover": "",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": null,
          "min_oprice": "89.00",
          "desc": null,
          "unit": "件",
          "stock": 100,
          "min_stock": 1,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-08 09:39:19",
          "update_time": "2026-10-08 21:30:38",
          "delete_time": 1791466238,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1328,
          "title": "测试Vite商品",
          "category_id": 5,
          "cover": "",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": null,
          "min_oprice": "89.00",
          "desc": null,
          "unit": "件",
          "stock": 100,
          "min_stock": 1,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-08 09:39:18",
          "update_time": "2026-10-08 21:30:38",
          "delete_time": 1791466238,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1327,
          "title": "测试Vite商品",
          "category_id": 5,
          "cover": "",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": null,
          "min_oprice": "89.00",
          "desc": null,
          "unit": "件",
          "stock": 100,
          "min_stock": 1,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-08 09:39:18",
          "update_time": "2026-10-08 21:30:38",
          "delete_time": 1791466238,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1326,
          "title": "测试Vite商品",
          "category_id": 5,
          "cover": "",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": null,
          "min_oprice": "89.00",
          "desc": null,
          "unit": "件",
          "stock": 100,
          "min_stock": 1,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-08 09:39:17",
          "update_time": "2026-10-08 21:30:38",
          "delete_time": 1791466238,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1325,
          "title": "测试Vite商品",
          "category_id": 5,
          "cover": "",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": null,
          "min_oprice": "89.00",
          "desc": null,
          "unit": "件",
          "stock": 100,
          "min_stock": 1,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-08 09:39:17",
          "update_time": "2026-10-08 21:30:38",
          "delete_time": 1791466238,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1324,
          "title": "更新测试商品",
          "category_id": 5,
          "cover": "",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": null,
          "min_oprice": "89.00",
          "desc": null,
          "unit": "件",
          "stock": 100,
          "min_stock": 1,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-08 09:39:16",
          "update_time": "2026-10-08 21:30:50",
          "delete_time": 1791466250,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1323,
          "title": "测试商品",
          "category_id": 5,
          "cover": null,
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "0.00",
          "min_oprice": "0.00",
          "desc": "测试",
          "unit": "件",
          "stock": 100,
          "min_stock": 10,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 1,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-07 23:22:47",
          "update_time": "2026-10-08 21:30:50",
          "delete_time": 1791466250,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [
            {
              "id": 5223,
              "image": "",
              "pprice": "1.00",
              "oprice": "1.00",
              "cprice": "0.00",
              "stock": 3,
              "volume": 1,
              "weight": 1,
              "code": "",
              "goods_id": 1323,
              "skus": {
                "0": {
                  "id": 8452,
                  "goods_skus_card_id": 3179,
                  "name": "尺码",
                  "value": "S",
                  "order": 50,
                  "text": "S"
                }
              }
            }
          ],
          "goods_skus_card": []
        },
        {
          "id": 1322,
          "title": "测试",
          "category_id": 5,
          "cover": null,
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "1.00",
          "min_oprice": "1.00",
          "desc": "测试",
          "unit": "件",
          "stock": 101,
          "min_stock": 11,
          "ischeck": 0,
          "status": 0,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 1,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-07 23:05:37",
          "update_time": "2026-10-07 23:22:26",
          "delete_time": 1791386546,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [
            {
              "id": 5216,
              "image": "",
              "pprice": "10.00",
              "oprice": "10.00",
              "cprice": "3.00",
              "stock": 50,
              "volume": 1,
              "weight": 1,
              "code": "",
              "goods_id": 1322,
              "skus": {
                "0": {
                  "goods_skus_card_id": "3176",
                  "name": "尺码",
                  "value": "S",
                  "order": 50,
                  "id": "8447",
                  "text": "S"
                }
              }
            }
          ],
          "goods_skus_card": []
        },
        {
          "id": 1321,
          "title": "修改后名称",
          "category_id": 4,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6a81315f6bc42.jpeg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "0.00",
          "min_oprice": "500.00",
          "desc": "好吃的很",
          "unit": "份",
          "stock": 200,
          "min_stock": 5,
          "ischeck": 1,
          "status": 0,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 1,
          "sku_value": {
            "oprice": 1,
            "pprice": 1,
            "cprice": 1,
            "weight": 1,
            "volume": 1
          },
          "content": "<p>hello world123</p>",
          "discount": 0,
          "create_time": "2026-10-07 22:39:50",
          "update_time": "2026-10-14 10:53:53",
          "delete_time": 1791946433,
          "order": 50,
          "category": {
            "id": 4,
            "name": "居家生活",
            "status": 1,
            "create_time": "2019-08-17 00:57:12",
            "update_time": "2026-09-25 20:31:31",
            "category_id": 0,
            "order": 4
          },
          "goods_banner": [
            {
              "id": 3569,
              "goods_id": 1321,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acc5c5f1b9b0.png",
              "create_time": "2026-10-14 10:47:14",
              "update_time": "2026-10-14 10:47:14"
            }
          ],
          "goods_attrs": [],
          "goods_skus": [
            {
              "id": 5321,
              "image": "",
              "pprice": "5.00",
              "oprice": "2.00",
              "cprice": "2.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "",
              "goods_id": 1321,
              "skus": {
                "0": {
                  "name": "规格1",
                  "order": 1,
                  "goods_skus_card_id": 3209
                },
                "1": {
                  "name": "体重",
                  "order": 2,
                  "goods_skus_card_id": 3210
                }
              }
            },
            {
              "id": 5322,
              "image": "",
              "pprice": "5.00",
              "oprice": "22.00",
              "cprice": "20.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "",
              "goods_id": 1321,
              "skus": {
                "0": {
                  "name": "规格1",
                  "order": 1,
                  "goods_skus_card_id": 3209
                },
                "1": {
                  "name": "体重",
                  "order": 2,
                  "goods_skus_card_id": 3210
                }
              }
            },
            {
              "id": 5323,
              "image": "",
              "pprice": "5.00",
              "oprice": "2.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "",
              "goods_id": 1321,
              "skus": {
                "0": {
                  "name": "规格1",
                  "order": 1,
                  "goods_skus_card_id": 3209
                },
                "1": {
                  "name": "体重",
                  "order": 2,
                  "goods_skus_card_id": 3210
                }
              }
            },
            {
              "id": 5324,
              "image": "",
              "pprice": "5.00",
              "oprice": "20.00",
              "cprice": "0.00",
              "stock": 0,
              "volume": 0,
              "weight": 0,
              "code": "",
              "goods_id": 1321,
              "skus": {
                "0": {
                  "name": "规格1",
                  "order": 1,
                  "goods_skus_card_id": 3209
                },
                "1": {
                  "name": "体重",
                  "order": 2,
                  "goods_skus_card_id": 3210
                }
              }
            }
          ],
          "goods_skus_card": []
        },
        {
          "id": 1320,
          "title": "手机测试222",
          "category_id": 5,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6a98f1ac8ccc4.jpg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "1000.00",
          "min_oprice": "1000.00",
          "desc": "手机测试222",
          "unit": "台",
          "stock": 100,
          "min_stock": 10,
          "ischeck": 1,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": {
            "oprice": 1000,
            "pprice": 100,
            "cprice": 1000,
            "weight": 1000,
            "volume": 1000
          },
          "content": "<h1>商品详情</h1>",
          "discount": 0,
          "create_time": "2026-10-05 10:50:16",
          "update_time": "2026-10-14 10:53:53",
          "delete_time": 1791946433,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [
            {
              "id": 3559,
              "goods_id": 1320,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6a98f1ac8ccc4.jpg",
              "create_time": "2026-10-11 12:51:20",
              "update_time": "2026-10-11 12:51:20"
            },
            {
              "id": 3560,
              "goods_id": 1320,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62ad209e78584.jpg",
              "create_time": "2026-10-11 12:51:20",
              "update_time": "2026-10-11 12:51:20"
            }
          ],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1318,
          "title": "新手机222",
          "category_id": 5,
          "cover": null,
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "1000.00",
          "min_oprice": "1000.00",
          "desc": "新手机222",
          "unit": "件",
          "stock": 100,
          "min_stock": 10,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-04 17:13:16",
          "update_time": "2026-10-05 10:44:11",
          "delete_time": 1791168251,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1316,
          "title": "0000",
          "category_id": 5,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6ac066298ce66.jpeg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "0.00",
          "min_oprice": "0.00",
          "desc": null,
          "unit": "件",
          "stock": 100,
          "min_stock": 10,
          "ischeck": 0,
          "status": 0,
          "stock_display": 0,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": "<p>123</p>",
          "discount": 0,
          "create_time": "2026-10-03 10:19:56",
          "update_time": "2026-10-05 10:44:11",
          "delete_time": 1791168251,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1315,
          "title": "新手机22",
          "category_id": 5,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6a98f1ac8ccc4.jpg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "9999.00",
          "min_oprice": "9999.00",
          "desc": "新手机22",
          "unit": "件",
          "stock": 100,
          "min_stock": 10,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-02 18:02:29",
          "update_time": "2026-10-02 18:03:02",
          "delete_time": 1790935382,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [
            {
              "id": 3546,
              "goods_id": 1315,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aa7cd6212284.png",
              "create_time": "2026-10-02 18:02:56",
              "update_time": "2026-10-02 18:02:56"
            }
          ],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1314,
          "title": "新手机22",
          "category_id": 5,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6a98f1ac8ccc4.jpg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "1000.00",
          "min_oprice": "1000.00",
          "desc": "新手机",
          "unit": "件",
          "stock": 100,
          "min_stock": 10,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-02 15:34:59",
          "update_time": "2026-10-02 15:35:22",
          "delete_time": 1790926522,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        },
        {
          "id": 1313,
          "title": "新手机22",
          "category_id": 5,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6a98f1ac8ccc4.jpg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "9999.00",
          "min_oprice": "9999.00",
          "desc": "",
          "unit": "件",
          "stock": 100,
          "min_stock": 10,
          "ischeck": 0,
          "status": 1,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-02 12:06:17",
          "update_time": "2026-10-02 12:08:47",
          "delete_time": 1790914127,
          "order": 50,
          "category": {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0
          },
          "goods_banner": [],
          "goods_attrs": [],
          "goods_skus": [],
          "goods_skus_card": []
        }
      ],
      "totalCount": 30,
      "sourceTotalCount": 536
    },
    {
      "note": "订单列表 · all",
      "method": "GET",
      "pattern": "/order/{page}",
      "params": {
        "tab": "all"
      },
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {},
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 608,
          "no": "20211209234311144192",
          "user_id": 4,
          "address": {
            "id": 156,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "bbbb",
            "zip": 2123000,
            "name": "aaa",
            "phone": "13100010001",
            "last_used_time": 1639064591,
            "create_time": "2021-10-19 10:16:49",
            "update_time": "2021-12-09 23:43:11"
          },
          "total_price": "0.10",
          "remark": "",
          "paid_time": 1639064591,
          "payment_method": "alipay",
          "payment_no": "2019122622001446221403706833",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-12-09 23:43:11",
          "update_time": "2021-12-09 23:43:11",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 750,
              "order_id": 608,
              "shop_id": 71,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 607,
          "no": "20211207203904079879",
          "user_id": 4,
          "address": {
            "id": 156,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "bbbb",
            "zip": 2123000,
            "name": "aaa",
            "phone": "13100010001",
            "last_used_time": 1638880744,
            "create_time": "2021-10-19 10:16:49",
            "update_time": "2021-12-07 20:39:04"
          },
          "total_price": "0.10",
          "remark": "",
          "paid_time": 1638880794,
          "payment_method": "alipay",
          "payment_no": "20211207203904079879",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-12-07 20:39:04",
          "update_time": "2021-12-07 20:39:54",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 749,
              "order_id": 607,
              "shop_id": 70,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 606,
          "no": "20211206163134068828",
          "user_id": 4,
          "address": {
            "id": 156,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "bbbb",
            "zip": 2123000,
            "name": "aaa",
            "phone": "13100010001",
            "last_used_time": 1638779494,
            "create_time": "2021-10-19 10:16:49",
            "update_time": "2021-12-06 16:31:34"
          },
          "total_price": "0.10",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-12-06 16:31:34",
          "update_time": "2021-12-07 20:39:56",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 748,
              "order_id": 606,
              "shop_id": 70,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 605,
          "no": "20211205110617768298",
          "user_id": 4,
          "address": {
            "id": 156,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "bbbb",
            "zip": 2123000,
            "name": "aaa",
            "phone": "13100010001",
            "last_used_time": 1638673577,
            "create_time": "2021-10-19 10:16:49",
            "update_time": "2021-12-05 11:06:17"
          },
          "total_price": "30.00",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-12-05 11:06:17",
          "update_time": "2021-12-07 20:39:58",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 747,
              "order_id": 605,
              "shop_id": 28,
              "goods_id": 28,
              "num": 1,
              "price": "30.00",
              "skus_type": 0,
              "goods_item": {
                "id": 28,
                "title": "小米-商品2",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/575977783cdaf86f36c41df05bd9885b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 604,
          "no": "20211204234439818045",
          "user_id": 4,
          "address": {
            "id": 156,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "bbbb",
            "zip": 2123000,
            "name": "aaa",
            "phone": "13100010001",
            "last_used_time": 1638632679,
            "create_time": "2021-10-19 10:16:49",
            "update_time": "2021-12-04 23:44:39"
          },
          "total_price": "0.50",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-12-04 23:44:39",
          "update_time": "2021-12-07 20:40:01",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 746,
              "order_id": 604,
              "shop_id": 84,
              "goods_id": 32,
              "num": 1,
              "price": "0.50",
              "skus_type": 1,
              "goods_item": null,
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 603,
          "no": "20211203225727179794",
          "user_id": 4,
          "address": {
            "id": 156,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "bbbb",
            "zip": 2123000,
            "name": "aaa",
            "phone": "13100010001",
            "last_used_time": 1638543447,
            "create_time": "2021-10-19 10:16:49",
            "update_time": "2021-12-03 22:57:27"
          },
          "total_price": "0.10",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-12-03 22:57:27",
          "update_time": "2021-12-07 20:40:03",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 745,
              "order_id": 603,
              "shop_id": 70,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 602,
          "no": "20211202202727897702",
          "user_id": 4,
          "address": {
            "id": 156,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "bbbb",
            "zip": 2123000,
            "name": "aaa",
            "phone": "13100010001",
            "last_used_time": 1638448047,
            "create_time": "2021-10-19 10:16:49",
            "update_time": "2021-12-02 20:27:27"
          },
          "total_price": "30.00",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-12-02 20:27:27",
          "update_time": "2021-12-02 20:27:37",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 744,
              "order_id": 602,
              "shop_id": 29,
              "goods_id": 29,
              "num": 1,
              "price": "30.00",
              "skus_type": 0,
              "goods_item": {
                "id": 29,
                "title": "小米-商品31",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/765a18a017acf0b5c012ce765696be6f.png",
                "sku_type": 0
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 601,
          "no": "20211201141052326636",
          "user_id": 4,
          "address": {
            "id": 156,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "bbbb",
            "zip": 2123000,
            "name": "aaa",
            "phone": "13100010001",
            "last_used_time": 1638339052,
            "create_time": "2021-10-19 10:16:49",
            "update_time": "2021-12-01 14:10:52"
          },
          "total_price": "0.10",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-12-01 14:10:52",
          "update_time": "2021-12-07 20:40:05",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 743,
              "order_id": 601,
              "shop_id": 70,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 600,
          "no": "20211201140914999700",
          "user_id": 4,
          "address": {
            "id": 141,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "。。。。。。",
            "zip": 830000,
            "name": "是的123",
            "phone": "18890416087",
            "last_used_time": 1638338954,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2021-12-01 14:09:14"
          },
          "total_price": "60.70",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-12-01 14:09:14",
          "update_time": "2021-12-07 20:40:07",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 739,
              "order_id": 600,
              "shop_id": 77,
              "goods_id": 40,
              "num": 1,
              "price": "0.50",
              "skus_type": 1,
              "goods_item": null,
              "goods_skus": null
            },
            {
              "id": 740,
              "order_id": 600,
              "shop_id": 30,
              "goods_id": 30,
              "num": 1,
              "price": "30.00",
              "skus_type": 0,
              "goods_item": null,
              "goods_skus": null
            },
            {
              "id": 741,
              "order_id": 600,
              "shop_id": 70,
              "goods_id": 25,
              "num": 2,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            },
            {
              "id": 742,
              "order_id": 600,
              "shop_id": 28,
              "goods_id": 28,
              "num": 1,
              "price": "30.00",
              "skus_type": 0,
              "goods_item": {
                "id": 28,
                "title": "小米-商品2",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/575977783cdaf86f36c41df05bd9885b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 599,
          "no": "20211126130137256233",
          "user_id": 4,
          "address": {
            "id": 141,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "。。。。。。",
            "zip": 830000,
            "name": "是的123",
            "phone": "18890416087",
            "last_used_time": 1637902897,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2021-11-26 13:01:37"
          },
          "total_price": "61.10",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-26 13:01:37",
          "update_time": "2021-11-26 13:02:05",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 736,
              "order_id": 599,
              "shop_id": 82,
              "goods_id": 26,
              "num": 2,
              "price": "0.50",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            },
            {
              "id": 737,
              "order_id": 599,
              "shop_id": 30,
              "goods_id": 30,
              "num": 2,
              "price": "30.00",
              "skus_type": 0,
              "goods_item": null,
              "goods_skus": null
            },
            {
              "id": 738,
              "order_id": 599,
              "shop_id": 71,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 598,
          "no": "20211125152312304607",
          "user_id": 4,
          "address": {
            "id": 141,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "。。。。。。",
            "zip": 830000,
            "name": "是的123",
            "phone": "18890416087",
            "last_used_time": 1637824992,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2021-11-25 15:23:12"
          },
          "total_price": "0.50",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-25 15:23:12",
          "update_time": "2021-12-07 20:40:09",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 735,
              "order_id": 598,
              "shop_id": 84,
              "goods_id": 32,
              "num": 1,
              "price": "0.50",
              "skus_type": 1,
              "goods_item": null,
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 597,
          "no": "20211122104821637825",
          "user_id": 4,
          "address": {
            "id": 158,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "123456678",
            "zip": 300000,
            "name": "zxh5566",
            "phone": "15822222222",
            "last_used_time": 1637549301,
            "create_time": "1970-01-01 08:33:41",
            "update_time": "2021-11-22 10:48:21"
          },
          "total_price": "30.50",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-22 10:48:21",
          "update_time": "2021-12-07 20:40:18",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 733,
              "order_id": 597,
              "shop_id": 84,
              "goods_id": 32,
              "num": 1,
              "price": "0.50",
              "skus_type": 1,
              "goods_item": null,
              "goods_skus": null
            },
            {
              "id": 734,
              "order_id": 597,
              "shop_id": 27,
              "goods_id": 27,
              "num": 1,
              "price": "30.00",
              "skus_type": 0,
              "goods_item": {
                "id": 27,
                "title": "小米-商品1",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/eb5a2d258905e0a6096af057946b0bf0.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 596,
          "no": "20211122095614993825",
          "user_id": 4,
          "address": {
            "id": 141,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "。。。。。。",
            "zip": 830000,
            "name": "是的123",
            "phone": "18890416087",
            "last_used_time": 1637546174,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2021-11-22 09:56:14"
          },
          "total_price": "0.50",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-22 09:56:14",
          "update_time": "2021-12-07 20:40:14",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 732,
              "order_id": 596,
              "shop_id": 84,
              "goods_id": 32,
              "num": 1,
              "price": "0.50",
              "skus_type": 1,
              "goods_item": null,
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 595,
          "no": "20211117125124625565",
          "user_id": 4,
          "address": {
            "id": 141,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "。。。。。。",
            "zip": 830000,
            "name": "是的123",
            "phone": "18890416087",
            "last_used_time": 1637124684,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2021-11-17 12:51:24"
          },
          "total_price": "0.50",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-17 12:51:24",
          "update_time": "2021-12-07 20:40:20",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 731,
              "order_id": 595,
              "shop_id": 82,
              "goods_id": 26,
              "num": 1,
              "price": "0.50",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 594,
          "no": "20211117121856694206",
          "user_id": 4,
          "address": {
            "id": 141,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "。。。。。。",
            "zip": 830000,
            "name": "是的123",
            "phone": "18890416087",
            "last_used_time": 1637122736,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2021-11-17 12:18:56"
          },
          "total_price": "90.00",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-17 12:18:56",
          "update_time": "2021-12-07 20:40:32",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 730,
              "order_id": 594,
              "shop_id": 38,
              "goods_id": 38,
              "num": 1,
              "price": "90.00",
              "skus_type": 0,
              "goods_item": null,
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 593,
          "no": "20211117121733362120",
          "user_id": 4,
          "address": {
            "id": 141,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "。。。。。。",
            "zip": 830000,
            "name": "是的123",
            "phone": "18890416087",
            "last_used_time": 1637122653,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2021-11-17 12:17:33"
          },
          "total_price": "180.00",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-17 12:17:33",
          "update_time": "2021-12-07 20:40:35",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 729,
              "order_id": 593,
              "shop_id": 38,
              "goods_id": 38,
              "num": 2,
              "price": "90.00",
              "skus_type": 0,
              "goods_item": null,
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 592,
          "no": "20211116210912058902",
          "user_id": 4,
          "address": {
            "id": 141,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "。。。。。。",
            "zip": 830000,
            "name": "是的123",
            "phone": "18890416087",
            "last_used_time": 1637068152,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2021-11-16 21:09:12"
          },
          "total_price": "0.50",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-16 21:09:12",
          "update_time": "2021-12-07 20:40:39",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 728,
              "order_id": 592,
              "shop_id": 76,
              "goods_id": 40,
              "num": 1,
              "price": "0.50",
              "skus_type": 1,
              "goods_item": null,
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 591,
          "no": "20211116174318484146",
          "user_id": 4,
          "address": {
            "id": 141,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "。。。。。。",
            "zip": 830000,
            "name": "是的123",
            "phone": "18890416087",
            "last_used_time": 1637055798,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2021-11-16 17:43:18"
          },
          "total_price": "92.20",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-16 17:43:18",
          "update_time": "2021-12-07 20:40:43",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 723,
              "order_id": 591,
              "shop_id": 70,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            },
            {
              "id": 724,
              "order_id": 591,
              "shop_id": 77,
              "goods_id": 40,
              "num": 1,
              "price": "0.50",
              "skus_type": 1,
              "goods_item": null,
              "goods_skus": null
            },
            {
              "id": 725,
              "order_id": 591,
              "shop_id": 38,
              "goods_id": 38,
              "num": 1,
              "price": "90.00",
              "skus_type": 0,
              "goods_item": null,
              "goods_skus": null
            },
            {
              "id": 726,
              "order_id": 591,
              "shop_id": 76,
              "goods_id": 40,
              "num": 3,
              "price": "0.50",
              "skus_type": 1,
              "goods_item": null,
              "goods_skus": null
            },
            {
              "id": 727,
              "order_id": 591,
              "shop_id": 73,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 590,
          "no": "20211115113218159187",
          "user_id": 4,
          "address": {
            "id": 141,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "。。。。。。",
            "zip": 830000,
            "name": "是的123",
            "phone": "18890416087",
            "last_used_time": 1636947138,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2021-11-15 11:32:18"
          },
          "total_price": "0.10",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-15 11:32:18",
          "update_time": "2021-11-15 13:49:28",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 722,
              "order_id": 590,
              "shop_id": 70,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 589,
          "no": "20211111130615048350",
          "user_id": 4,
          "address": {
            "id": 158,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "123456678",
            "zip": 300000,
            "name": "zxh5566",
            "phone": "15822222222",
            "last_used_time": 1636607175,
            "create_time": "1970-01-01 08:33:41",
            "update_time": "2021-11-11 13:06:15"
          },
          "total_price": "0.50",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-11 13:06:15",
          "update_time": "2021-11-11 13:06:15",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 721,
              "order_id": 589,
              "shop_id": 82,
              "goods_id": 26,
              "num": 1,
              "price": "0.50",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        }
      ],
      "totalCount": 20,
      "sourceTotalCount": 555
    },
    {
      "note": "订单列表 · nopay",
      "method": "GET",
      "pattern": "/order/{page}",
      "params": {
        "tab": "nopay"
      },
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {},
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 589,
          "no": "20211111130615048350",
          "user_id": 4,
          "address": {
            "id": 158,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "123456678",
            "zip": 300000,
            "name": "zxh5566",
            "phone": "15822222222",
            "last_used_time": 1636607175,
            "create_time": "1970-01-01 08:33:41",
            "update_time": "2021-11-11 13:06:15"
          },
          "total_price": "0.50",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-11 13:06:15",
          "update_time": "2021-11-11 13:06:15",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 721,
              "order_id": 589,
              "shop_id": 82,
              "goods_id": 26,
              "num": 1,
              "price": "0.50",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 588,
          "no": "20211111114053126901",
          "user_id": 4,
          "address": {
            "id": 158,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "123456678",
            "zip": 300000,
            "name": "zxh5566",
            "phone": "15822222222",
            "last_used_time": 1636602053,
            "create_time": "1970-01-01 08:33:41",
            "update_time": "2021-11-11 11:40:53"
          },
          "total_price": "0.10",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-11 11:40:53",
          "update_time": "2021-11-11 11:40:53",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 720,
              "order_id": 588,
              "shop_id": 70,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 587,
          "no": "20211110112236228381",
          "user_id": 4,
          "address": {
            "id": 158,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "123456678",
            "zip": 300000,
            "name": "zxh5566",
            "phone": "15822222222",
            "last_used_time": 1636514556,
            "create_time": "1970-01-01 08:33:41",
            "update_time": "2021-11-10 11:22:36"
          },
          "total_price": "0.10",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-10 11:22:36",
          "update_time": "2021-11-10 11:22:36",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 719,
              "order_id": 587,
              "shop_id": 71,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 586,
          "no": "20211108223058376533",
          "user_id": 4,
          "address": {
            "id": 158,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "123456678",
            "zip": 300000,
            "name": "zxh5566",
            "phone": "15822222222",
            "last_used_time": 1636381858,
            "create_time": "1970-01-01 08:33:41",
            "update_time": "2021-11-08 22:30:58"
          },
          "total_price": "0.30",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-08 22:30:58",
          "update_time": "2021-11-08 22:30:58",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 718,
              "order_id": 586,
              "shop_id": 70,
              "goods_id": 25,
              "num": 3,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 584,
          "no": "20211108195821680606",
          "user_id": 4,
          "address": {
            "id": 158,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "123456678",
            "zip": 300000,
            "name": "zxh5566",
            "phone": "15822222222",
            "last_used_time": 1636372701,
            "create_time": "1970-01-01 08:33:41",
            "update_time": "2021-11-08 19:58:21"
          },
          "total_price": "0.10",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-08 19:58:21",
          "update_time": "2021-11-08 19:58:21",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 716,
              "order_id": 584,
              "shop_id": 70,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 581,
          "no": "20211102103827276489",
          "user_id": 4,
          "address": {
            "id": 158,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "123456678",
            "zip": 300000,
            "name": "zxh5566",
            "phone": "15822222222",
            "last_used_time": 1635820707,
            "create_time": "1970-01-01 08:33:41",
            "update_time": "2021-11-02 10:38:27"
          },
          "total_price": "90.00",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-02 10:38:27",
          "update_time": "2021-11-02 10:38:27",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 709,
              "order_id": 581,
              "shop_id": 38,
              "goods_id": 38,
              "num": 1,
              "price": "90.00",
              "skus_type": 0,
              "goods_item": null,
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 580,
          "no": "20211102085552059277",
          "user_id": 4,
          "address": {
            "id": 158,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "123456678",
            "zip": 300000,
            "name": "zxh5566",
            "phone": "15822222222",
            "last_used_time": 1635814552,
            "create_time": "1970-01-01 08:33:41",
            "update_time": "2021-11-02 08:55:52"
          },
          "total_price": "3.40",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-02 08:55:52",
          "update_time": "2021-11-02 08:55:52",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 706,
              "order_id": 580,
              "shop_id": 82,
              "goods_id": 26,
              "num": 6,
              "price": "0.50",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            },
            {
              "id": 707,
              "order_id": 580,
              "shop_id": 71,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            },
            {
              "id": 708,
              "order_id": 580,
              "shop_id": 75,
              "goods_id": 25,
              "num": 3,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 579,
          "no": "20211101145258028892",
          "user_id": 4,
          "address": {
            "id": 158,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "123456678",
            "zip": 300000,
            "name": "zxh5566",
            "phone": "15822222222",
            "last_used_time": 1635749578,
            "create_time": "1970-01-01 08:33:41",
            "update_time": "2021-11-01 14:52:58"
          },
          "total_price": "0.10",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-01 14:52:58",
          "update_time": "2021-11-01 14:52:58",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 705,
              "order_id": 579,
              "shop_id": 70,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 578,
          "no": "20211101135111457302",
          "user_id": 4,
          "address": {
            "id": 158,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "123456678",
            "zip": 300000,
            "name": "zxh5566",
            "phone": "15822222222",
            "last_used_time": 1635745871,
            "create_time": "1970-01-01 08:33:41",
            "update_time": "2021-11-01 13:51:11"
          },
          "total_price": "1.00",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-01 13:51:11",
          "update_time": "2021-11-01 13:51:11",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 704,
              "order_id": 578,
              "shop_id": 83,
              "goods_id": 26,
              "num": 2,
              "price": "0.50",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 577,
          "no": "20211101134958171906",
          "user_id": 4,
          "address": {
            "id": 139,
            "user_id": 4,
            "province": "内蒙古自治区",
            "city": "呼和浩特市",
            "district": "新城区",
            "address": "1111111222",
            "zip": 11,
            "name": "111qqqq",
            "phone": "18812365655",
            "last_used_time": 1635745798,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2021-11-01 13:49:58"
          },
          "total_price": "0.10",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-01 13:49:58",
          "update_time": "2021-11-01 13:49:58",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 703,
              "order_id": 577,
              "shop_id": 70,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        }
      ],
      "totalCount": 10,
      "sourceTotalCount": 171
    },
    {
      "note": "订单列表 · noship",
      "method": "GET",
      "pattern": "/order/{page}",
      "params": {
        "tab": "noship"
      },
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {},
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 608,
          "no": "20211209234311144192",
          "user_id": 4,
          "address": {
            "id": 156,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "bbbb",
            "zip": 2123000,
            "name": "aaa",
            "phone": "13100010001",
            "last_used_time": 1639064591,
            "create_time": "2021-10-19 10:16:49",
            "update_time": "2021-12-09 23:43:11"
          },
          "total_price": "0.10",
          "remark": "",
          "paid_time": 1639064591,
          "payment_method": "alipay",
          "payment_no": "2019122622001446221403706833",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-12-09 23:43:11",
          "update_time": "2021-12-09 23:43:11",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 750,
              "order_id": 608,
              "shop_id": 71,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 607,
          "no": "20211207203904079879",
          "user_id": 4,
          "address": {
            "id": 156,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "bbbb",
            "zip": 2123000,
            "name": "aaa",
            "phone": "13100010001",
            "last_used_time": 1638880744,
            "create_time": "2021-10-19 10:16:49",
            "update_time": "2021-12-07 20:39:04"
          },
          "total_price": "0.10",
          "remark": "",
          "paid_time": 1638880794,
          "payment_method": "alipay",
          "payment_no": "20211207203904079879",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-12-07 20:39:04",
          "update_time": "2021-12-07 20:39:54",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 749,
              "order_id": 607,
              "shop_id": 70,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 274,
          "no": "20191230095504712656",
          "user_id": 3,
          "address": {
            "id": 2,
            "user_id": 3,
            "province": "天津市",
            "city": "市辖区",
            "district": "和平区",
            "address": "阅江西路222号广州塔",
            "zip": 0,
            "name": "靓仔哈",
            "phone": "13564568789",
            "last_used_time": 1577670904,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2019-12-30 09:55:04"
          },
          "total_price": "0.02",
          "remark": "",
          "paid_time": 1577670923,
          "payment_method": "alipay",
          "payment_no": "2019123022001481731405128440",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2019-12-30 09:55:04",
          "update_time": "2019-12-30 09:55:23",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 314,
              "order_id": 274,
              "shop_id": 3,
              "goods_id": 26,
              "num": 2,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 164,
          "no": "20191217224340832328",
          "user_id": 3,
          "address": {
            "id": 44,
            "user_id": 3,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "54645",
            "zip": 22233,
            "name": "sss",
            "phone": "15757409856",
            "last_used_time": 1576593820,
            "create_time": "1970-01-01 08:33:39",
            "update_time": "2019-12-17 22:43:40"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1576594683,
          "payment_method": "wechat",
          "payment_no": "20191217224340832328",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2019-12-17 22:43:40",
          "update_time": "2019-12-17 22:58:03",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 161,
              "order_id": 164,
              "shop_id": 3,
              "goods_id": 26,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 163,
          "no": "20191217224257022620",
          "user_id": 3,
          "address": {
            "id": 44,
            "user_id": 3,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "54645",
            "zip": 22233,
            "name": "sss",
            "phone": "15757409856",
            "last_used_time": 1576593777,
            "create_time": "1970-01-01 08:33:39",
            "update_time": "2019-12-17 22:42:57"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1576594629,
          "payment_method": "wechat",
          "payment_no": "20191217224257022620",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2019-12-17 22:42:57",
          "update_time": "2019-12-17 22:57:09",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 160,
              "order_id": 163,
              "shop_id": 3,
              "goods_id": 26,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 162,
          "no": "20191217224041656160",
          "user_id": 3,
          "address": {
            "id": 44,
            "user_id": 3,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "54645",
            "zip": 22233,
            "name": "sss",
            "phone": "15757409856",
            "last_used_time": 1576593641,
            "create_time": "1970-01-01 08:33:39",
            "update_time": "2019-12-17 22:40:41"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1576594491,
          "payment_method": "wechat",
          "payment_no": "20191217224041656160",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2019-12-17 22:40:41",
          "update_time": "2019-12-17 22:54:51",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 159,
              "order_id": 162,
              "shop_id": 3,
              "goods_id": 26,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 161,
          "no": "20191217223858158865",
          "user_id": 3,
          "address": {
            "id": 44,
            "user_id": 3,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "54645",
            "zip": 22233,
            "name": "sss",
            "phone": "15757409856",
            "last_used_time": 1576593538,
            "create_time": "1970-01-01 08:33:39",
            "update_time": "2019-12-17 22:38:58"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1576594391,
          "payment_method": "wechat",
          "payment_no": "20191217223858158865",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2019-12-17 22:38:58",
          "update_time": "2019-12-17 22:53:11",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 158,
              "order_id": 161,
              "shop_id": 3,
              "goods_id": 26,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 145,
          "no": "20191217144305912063",
          "user_id": 3,
          "address": {
            "id": 44,
            "user_id": 3,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "54645",
            "zip": 22233,
            "name": "sss",
            "phone": "15757409856",
            "last_used_time": 1576564985,
            "create_time": "1970-01-01 08:33:39",
            "update_time": "2019-12-17 14:43:05"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1576565008,
          "payment_method": "alipay",
          "payment_no": "2019121722001493930535981662",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2019-12-17 14:43:05",
          "update_time": "2019-12-17 14:43:28",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 142,
              "order_id": 145,
              "shop_id": 3,
              "goods_id": 26,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 144,
          "no": "20191217143732524061",
          "user_id": 3,
          "address": {
            "id": 44,
            "user_id": 3,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "54645",
            "zip": 22233,
            "name": "sss",
            "phone": "15757409856",
            "last_used_time": 1576564652,
            "create_time": "1970-01-01 08:33:39",
            "update_time": "2019-12-17 14:37:32"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1576564769,
          "payment_method": "alipay",
          "payment_no": "2019121722001493930536496613",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2019-12-17 14:37:32",
          "update_time": "2019-12-17 14:39:29",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 141,
              "order_id": 144,
              "shop_id": 3,
              "goods_id": 26,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 131,
          "no": "20191215022555844604",
          "user_id": 3,
          "address": {
            "id": 2,
            "user_id": 3,
            "province": "天津市",
            "city": "市辖区",
            "district": "和平区",
            "address": "阅江西路222号广州塔",
            "zip": 0,
            "name": "靓仔哈",
            "phone": "13564568789",
            "last_used_time": 1576347955,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2019-12-15 02:25:55"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1576347977,
          "payment_method": "alipay",
          "payment_no": "2019121522001423140549522210",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2019-12-15 02:25:55",
          "update_time": "2019-12-15 02:26:17",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 128,
              "order_id": 131,
              "shop_id": 14,
              "goods_id": 28,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 28,
                "title": "小米-商品2",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/575977783cdaf86f36c41df05bd9885b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        }
      ],
      "totalCount": 10,
      "sourceTotalCount": 16
    },
    {
      "note": "订单列表 · shiped",
      "method": "GET",
      "pattern": "/order/{page}",
      "params": {
        "tab": "shiped"
      },
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {},
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 152,
          "no": "20191217202951273494",
          "user_id": 3,
          "address": {
            "id": 44,
            "user_id": 3,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "54645",
            "zip": 22233,
            "name": "sss",
            "phone": "15757409856",
            "last_used_time": 1576585791,
            "create_time": "1970-01-01 08:33:39",
            "update_time": "2019-12-17 20:29:51"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1576585799,
          "payment_method": "alipay",
          "payment_no": "2019121722001423140562410526",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "delivered",
          "ship_data": {
            "express_company": "韵达快运",
            "express_no": "432447792412564",
            "express_time": 1576588942
          },
          "extra": null,
          "create_time": "2019-12-17 20:29:51",
          "update_time": "2019-12-17 21:32:31",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 149,
              "order_id": 152,
              "shop_id": 10,
              "goods_id": 26,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        }
      ],
      "totalCount": 1,
      "sourceTotalCount": 1
    },
    {
      "note": "订单列表 · received",
      "method": "GET",
      "pattern": "/order/{page}",
      "params": {
        "tab": "received"
      },
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {},
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 350,
          "no": "20210613211011309759",
          "user_id": 4,
          "address": {
            "id": 61,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "XXX街道",
            "zip": 0,
            "name": "小明",
            "phone": "13546213541",
            "last_used_time": 1623589811,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2021-06-13 21:10:11"
          },
          "total_price": "0.10",
          "remark": "",
          "paid_time": 1623589915,
          "payment_method": "alipay",
          "payment_no": "2021061322001423141426077727",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "received",
          "ship_data": {
            "express_company": "顺丰快递",
            "express_no": "123456",
            "express_time": 1577019590
          },
          "extra": null,
          "create_time": "2021-06-13 21:10:11",
          "update_time": "2021-07-12 15:30:57",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 406,
              "order_id": 350,
              "shop_id": 71,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 348,
          "no": "20210613182220167590",
          "user_id": 4,
          "address": {
            "id": 61,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "XXX街道",
            "zip": 0,
            "name": "小明",
            "phone": "13546213541",
            "last_used_time": 1623579740,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2021-06-13 18:22:20"
          },
          "total_price": "0.30",
          "remark": "",
          "paid_time": 1623587879,
          "payment_method": "wechat",
          "payment_no": "20210613182220167590",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "received",
          "ship_data": {
            "express_company": "韵达快运",
            "express_no": "432447792412564",
            "express_time": 1577019590
          },
          "extra": null,
          "create_time": "2021-06-13 18:22:20",
          "update_time": "2021-06-14 03:19:06",
          "reviewed": 1,
          "coupon_user_id": 14,
          "order_items": [
            {
              "id": 404,
              "order_id": 348,
              "shop_id": 41,
              "goods_id": 41,
              "num": 1,
              "price": "0.50",
              "skus_type": 0,
              "goods_item": null,
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 344,
          "no": "20200117173712440843",
          "user_id": 3,
          "address": {
            "id": 2,
            "user_id": 3,
            "province": "天津市",
            "city": "市辖区",
            "district": "和平区",
            "address": "阅江西路222号广州塔",
            "zip": 100089,
            "name": "靓仔",
            "phone": "13564568789",
            "last_used_time": 1579253832,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2020-01-17 17:37:12"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1579253843,
          "payment_method": "alipay",
          "payment_no": "2020011722001447111410518084",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "received",
          "ship_data": {
            "express_company": "韵达快运",
            "express_no": "432447792412564",
            "express_time": 1577019590
          },
          "extra": null,
          "create_time": "2020-01-17 17:37:12",
          "update_time": "2020-02-17 15:23:01",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 399,
              "order_id": 344,
              "shop_id": 3,
              "goods_id": 26,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 336,
          "no": "20200114192923913369",
          "user_id": 3,
          "address": {
            "id": 2,
            "user_id": 3,
            "province": "天津市",
            "city": "市辖区",
            "district": "和平区",
            "address": "阅江西路222号广州塔",
            "zip": 100089,
            "name": "靓仔",
            "phone": "13564568789",
            "last_used_time": 1579001363,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2020-01-14 19:29:23"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1579001385,
          "payment_method": "alipay",
          "payment_no": "2020011422001458971411193162",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "received",
          "ship_data": {
            "express_company": "韵达快运",
            "express_no": "432447792412564",
            "express_time": 1577019590
          },
          "extra": {
            "refund_reason": "测试测试",
            "refund_disagree_reason": "理由不充分"
          },
          "create_time": "2020-01-14 19:29:23",
          "update_time": "2020-02-17 15:23:01",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 388,
              "order_id": 336,
              "shop_id": 3,
              "goods_id": 26,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 166,
          "no": "20191217224643362047",
          "user_id": 3,
          "address": {
            "id": 44,
            "user_id": 3,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "54645",
            "zip": 22233,
            "name": "sss",
            "phone": "15757409856",
            "last_used_time": 1576594003,
            "create_time": "1970-01-01 08:33:39",
            "update_time": "2019-12-17 22:46:43"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1576594254,
          "payment_method": "wechat",
          "payment_no": "20191217224643362047",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "received",
          "ship_data": {
            "express_company": "韵达快运",
            "express_no": "432447792412564",
            "express_time": 1577019590
          },
          "extra": null,
          "create_time": "2019-12-17 22:46:43",
          "update_time": "2019-12-22 20:15:12",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 163,
              "order_id": 166,
              "shop_id": 3,
              "goods_id": 26,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 165,
          "no": "20191217224506965716",
          "user_id": 3,
          "address": {
            "id": 44,
            "user_id": 3,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "54645",
            "zip": 22233,
            "name": "sss",
            "phone": "15757409856",
            "last_used_time": 1576593906,
            "create_time": "1970-01-01 08:33:39",
            "update_time": "2019-12-17 22:45:06"
          },
          "total_price": "0.50",
          "remark": "",
          "paid_time": 1576594758,
          "payment_method": "wechat",
          "payment_no": "20191217224506965716",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "received",
          "ship_data": {
            "express_company": "韵达快运",
            "express_no": "432447792412564",
            "express_time": 1577019590
          },
          "extra": null,
          "create_time": "2019-12-17 22:45:06",
          "update_time": "2019-12-24 11:13:37",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 162,
              "order_id": 165,
              "shop_id": 2,
              "goods_id": 25,
              "num": 1,
              "price": "0.50",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 154,
          "no": "20191217215212272569",
          "user_id": 3,
          "address": {
            "id": 44,
            "user_id": 3,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "54645",
            "zip": 22233,
            "name": "sss",
            "phone": "15757409856",
            "last_used_time": 1576590732,
            "create_time": "1970-01-01 08:33:39",
            "update_time": "2019-12-17 21:52:12"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1576590746,
          "payment_method": "alipay",
          "payment_no": "2019121722001423140567731056",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "received",
          "ship_data": {
            "express_company": "百世快递",
            "express_no": "70303808964270",
            "express_time": 1576590808
          },
          "extra": null,
          "create_time": "2019-12-17 21:52:12",
          "update_time": "2019-12-17 21:53:54",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 151,
              "order_id": 154,
              "shop_id": 10,
              "goods_id": 26,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        }
      ],
      "totalCount": 7,
      "sourceTotalCount": 7
    },
    {
      "note": "订单列表 · finish",
      "method": "GET",
      "pattern": "/order/{page}",
      "params": {
        "tab": "finish"
      },
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {},
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 350,
          "no": "20210613211011309759",
          "user_id": 4,
          "address": {
            "id": 61,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "XXX街道",
            "zip": 0,
            "name": "小明",
            "phone": "13546213541",
            "last_used_time": 1623589811,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2021-06-13 21:10:11"
          },
          "total_price": "0.10",
          "remark": "",
          "paid_time": 1623589915,
          "payment_method": "alipay",
          "payment_no": "2021061322001423141426077727",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "received",
          "ship_data": {
            "express_company": "顺丰快递",
            "express_no": "123456",
            "express_time": 1577019590
          },
          "extra": null,
          "create_time": "2021-06-13 21:10:11",
          "update_time": "2021-07-12 15:30:57",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 406,
              "order_id": 350,
              "shop_id": 71,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 348,
          "no": "20210613182220167590",
          "user_id": 4,
          "address": {
            "id": 61,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "XXX街道",
            "zip": 0,
            "name": "小明",
            "phone": "13546213541",
            "last_used_time": 1623579740,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2021-06-13 18:22:20"
          },
          "total_price": "0.30",
          "remark": "",
          "paid_time": 1623587879,
          "payment_method": "wechat",
          "payment_no": "20210613182220167590",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "received",
          "ship_data": {
            "express_company": "韵达快运",
            "express_no": "432447792412564",
            "express_time": 1577019590
          },
          "extra": null,
          "create_time": "2021-06-13 18:22:20",
          "update_time": "2021-06-14 03:19:06",
          "reviewed": 1,
          "coupon_user_id": 14,
          "order_items": [
            {
              "id": 404,
              "order_id": 348,
              "shop_id": 41,
              "goods_id": 41,
              "num": 1,
              "price": "0.50",
              "skus_type": 0,
              "goods_item": null,
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 344,
          "no": "20200117173712440843",
          "user_id": 3,
          "address": {
            "id": 2,
            "user_id": 3,
            "province": "天津市",
            "city": "市辖区",
            "district": "和平区",
            "address": "阅江西路222号广州塔",
            "zip": 100089,
            "name": "靓仔",
            "phone": "13564568789",
            "last_used_time": 1579253832,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2020-01-17 17:37:12"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1579253843,
          "payment_method": "alipay",
          "payment_no": "2020011722001447111410518084",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "received",
          "ship_data": {
            "express_company": "韵达快运",
            "express_no": "432447792412564",
            "express_time": 1577019590
          },
          "extra": null,
          "create_time": "2020-01-17 17:37:12",
          "update_time": "2020-02-17 15:23:01",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 399,
              "order_id": 344,
              "shop_id": 3,
              "goods_id": 26,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 336,
          "no": "20200114192923913369",
          "user_id": 3,
          "address": {
            "id": 2,
            "user_id": 3,
            "province": "天津市",
            "city": "市辖区",
            "district": "和平区",
            "address": "阅江西路222号广州塔",
            "zip": 100089,
            "name": "靓仔",
            "phone": "13564568789",
            "last_used_time": 1579001363,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2020-01-14 19:29:23"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1579001385,
          "payment_method": "alipay",
          "payment_no": "2020011422001458971411193162",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "received",
          "ship_data": {
            "express_company": "韵达快运",
            "express_no": "432447792412564",
            "express_time": 1577019590
          },
          "extra": {
            "refund_reason": "测试测试",
            "refund_disagree_reason": "理由不充分"
          },
          "create_time": "2020-01-14 19:29:23",
          "update_time": "2020-02-17 15:23:01",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 388,
              "order_id": 336,
              "shop_id": 3,
              "goods_id": 26,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 166,
          "no": "20191217224643362047",
          "user_id": 3,
          "address": {
            "id": 44,
            "user_id": 3,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "54645",
            "zip": 22233,
            "name": "sss",
            "phone": "15757409856",
            "last_used_time": 1576594003,
            "create_time": "1970-01-01 08:33:39",
            "update_time": "2019-12-17 22:46:43"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1576594254,
          "payment_method": "wechat",
          "payment_no": "20191217224643362047",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "received",
          "ship_data": {
            "express_company": "韵达快运",
            "express_no": "432447792412564",
            "express_time": 1577019590
          },
          "extra": null,
          "create_time": "2019-12-17 22:46:43",
          "update_time": "2019-12-22 20:15:12",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 163,
              "order_id": 166,
              "shop_id": 3,
              "goods_id": 26,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 165,
          "no": "20191217224506965716",
          "user_id": 3,
          "address": {
            "id": 44,
            "user_id": 3,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "54645",
            "zip": 22233,
            "name": "sss",
            "phone": "15757409856",
            "last_used_time": 1576593906,
            "create_time": "1970-01-01 08:33:39",
            "update_time": "2019-12-17 22:45:06"
          },
          "total_price": "0.50",
          "remark": "",
          "paid_time": 1576594758,
          "payment_method": "wechat",
          "payment_no": "20191217224506965716",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "received",
          "ship_data": {
            "express_company": "韵达快运",
            "express_no": "432447792412564",
            "express_time": 1577019590
          },
          "extra": null,
          "create_time": "2019-12-17 22:45:06",
          "update_time": "2019-12-24 11:13:37",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 162,
              "order_id": 165,
              "shop_id": 2,
              "goods_id": 25,
              "num": 1,
              "price": "0.50",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 154,
          "no": "20191217215212272569",
          "user_id": 3,
          "address": {
            "id": 44,
            "user_id": 3,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "54645",
            "zip": 22233,
            "name": "sss",
            "phone": "15757409856",
            "last_used_time": 1576590732,
            "create_time": "1970-01-01 08:33:39",
            "update_time": "2019-12-17 21:52:12"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1576590746,
          "payment_method": "alipay",
          "payment_no": "2019121722001423140567731056",
          "refund_status": "pending",
          "refund_no": null,
          "closed": 0,
          "ship_status": "received",
          "ship_data": {
            "express_company": "百世快递",
            "express_no": "70303808964270",
            "express_time": 1576590808
          },
          "extra": null,
          "create_time": "2019-12-17 21:52:12",
          "update_time": "2019-12-17 21:53:54",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 151,
              "order_id": 154,
              "shop_id": 10,
              "goods_id": 26,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        }
      ],
      "totalCount": 7,
      "sourceTotalCount": 7
    },
    {
      "note": "订单列表 · closed",
      "method": "GET",
      "pattern": "/order/{page}",
      "params": {
        "tab": "closed"
      },
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {},
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 606,
          "no": "20211206163134068828",
          "user_id": 4,
          "address": {
            "id": 156,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "bbbb",
            "zip": 2123000,
            "name": "aaa",
            "phone": "13100010001",
            "last_used_time": 1638779494,
            "create_time": "2021-10-19 10:16:49",
            "update_time": "2021-12-06 16:31:34"
          },
          "total_price": "0.10",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-12-06 16:31:34",
          "update_time": "2021-12-07 20:39:56",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 748,
              "order_id": 606,
              "shop_id": 70,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 605,
          "no": "20211205110617768298",
          "user_id": 4,
          "address": {
            "id": 156,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "bbbb",
            "zip": 2123000,
            "name": "aaa",
            "phone": "13100010001",
            "last_used_time": 1638673577,
            "create_time": "2021-10-19 10:16:49",
            "update_time": "2021-12-05 11:06:17"
          },
          "total_price": "30.00",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-12-05 11:06:17",
          "update_time": "2021-12-07 20:39:58",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 747,
              "order_id": 605,
              "shop_id": 28,
              "goods_id": 28,
              "num": 1,
              "price": "30.00",
              "skus_type": 0,
              "goods_item": {
                "id": 28,
                "title": "小米-商品2",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/575977783cdaf86f36c41df05bd9885b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 604,
          "no": "20211204234439818045",
          "user_id": 4,
          "address": {
            "id": 156,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "bbbb",
            "zip": 2123000,
            "name": "aaa",
            "phone": "13100010001",
            "last_used_time": 1638632679,
            "create_time": "2021-10-19 10:16:49",
            "update_time": "2021-12-04 23:44:39"
          },
          "total_price": "0.50",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-12-04 23:44:39",
          "update_time": "2021-12-07 20:40:01",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 746,
              "order_id": 604,
              "shop_id": 84,
              "goods_id": 32,
              "num": 1,
              "price": "0.50",
              "skus_type": 1,
              "goods_item": null,
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 603,
          "no": "20211203225727179794",
          "user_id": 4,
          "address": {
            "id": 156,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "bbbb",
            "zip": 2123000,
            "name": "aaa",
            "phone": "13100010001",
            "last_used_time": 1638543447,
            "create_time": "2021-10-19 10:16:49",
            "update_time": "2021-12-03 22:57:27"
          },
          "total_price": "0.10",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-12-03 22:57:27",
          "update_time": "2021-12-07 20:40:03",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 745,
              "order_id": 603,
              "shop_id": 70,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 602,
          "no": "20211202202727897702",
          "user_id": 4,
          "address": {
            "id": 156,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "bbbb",
            "zip": 2123000,
            "name": "aaa",
            "phone": "13100010001",
            "last_used_time": 1638448047,
            "create_time": "2021-10-19 10:16:49",
            "update_time": "2021-12-02 20:27:27"
          },
          "total_price": "30.00",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-12-02 20:27:27",
          "update_time": "2021-12-02 20:27:37",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 744,
              "order_id": 602,
              "shop_id": 29,
              "goods_id": 29,
              "num": 1,
              "price": "30.00",
              "skus_type": 0,
              "goods_item": {
                "id": 29,
                "title": "小米-商品31",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/765a18a017acf0b5c012ce765696be6f.png",
                "sku_type": 0
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 601,
          "no": "20211201141052326636",
          "user_id": 4,
          "address": {
            "id": 156,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "bbbb",
            "zip": 2123000,
            "name": "aaa",
            "phone": "13100010001",
            "last_used_time": 1638339052,
            "create_time": "2021-10-19 10:16:49",
            "update_time": "2021-12-01 14:10:52"
          },
          "total_price": "0.10",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-12-01 14:10:52",
          "update_time": "2021-12-07 20:40:05",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 743,
              "order_id": 601,
              "shop_id": 70,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 600,
          "no": "20211201140914999700",
          "user_id": 4,
          "address": {
            "id": 141,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "。。。。。。",
            "zip": 830000,
            "name": "是的123",
            "phone": "18890416087",
            "last_used_time": 1638338954,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2021-12-01 14:09:14"
          },
          "total_price": "60.70",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-12-01 14:09:14",
          "update_time": "2021-12-07 20:40:07",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 739,
              "order_id": 600,
              "shop_id": 77,
              "goods_id": 40,
              "num": 1,
              "price": "0.50",
              "skus_type": 1,
              "goods_item": null,
              "goods_skus": null
            },
            {
              "id": 740,
              "order_id": 600,
              "shop_id": 30,
              "goods_id": 30,
              "num": 1,
              "price": "30.00",
              "skus_type": 0,
              "goods_item": null,
              "goods_skus": null
            },
            {
              "id": 741,
              "order_id": 600,
              "shop_id": 70,
              "goods_id": 25,
              "num": 2,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            },
            {
              "id": 742,
              "order_id": 600,
              "shop_id": 28,
              "goods_id": 28,
              "num": 1,
              "price": "30.00",
              "skus_type": 0,
              "goods_item": {
                "id": 28,
                "title": "小米-商品2",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/575977783cdaf86f36c41df05bd9885b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 599,
          "no": "20211126130137256233",
          "user_id": 4,
          "address": {
            "id": 141,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "。。。。。。",
            "zip": 830000,
            "name": "是的123",
            "phone": "18890416087",
            "last_used_time": 1637902897,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2021-11-26 13:01:37"
          },
          "total_price": "61.10",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-26 13:01:37",
          "update_time": "2021-11-26 13:02:05",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 736,
              "order_id": 599,
              "shop_id": 82,
              "goods_id": 26,
              "num": 2,
              "price": "0.50",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            },
            {
              "id": 737,
              "order_id": 599,
              "shop_id": 30,
              "goods_id": 30,
              "num": 2,
              "price": "30.00",
              "skus_type": 0,
              "goods_item": null,
              "goods_skus": null
            },
            {
              "id": 738,
              "order_id": 599,
              "shop_id": 71,
              "goods_id": 25,
              "num": 1,
              "price": "0.10",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 598,
          "no": "20211125152312304607",
          "user_id": 4,
          "address": {
            "id": 141,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "。。。。。。",
            "zip": 830000,
            "name": "是的123",
            "phone": "18890416087",
            "last_used_time": 1637824992,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2021-11-25 15:23:12"
          },
          "total_price": "0.50",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-25 15:23:12",
          "update_time": "2021-12-07 20:40:09",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 735,
              "order_id": 598,
              "shop_id": 84,
              "goods_id": 32,
              "num": 1,
              "price": "0.50",
              "skus_type": 1,
              "goods_item": null,
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 597,
          "no": "20211122104821637825",
          "user_id": 4,
          "address": {
            "id": 158,
            "user_id": 4,
            "province": "北京市",
            "city": "市辖区",
            "district": "西城区",
            "address": "123456678",
            "zip": 300000,
            "name": "zxh5566",
            "phone": "15822222222",
            "last_used_time": 1637549301,
            "create_time": "1970-01-01 08:33:41",
            "update_time": "2021-11-22 10:48:21"
          },
          "total_price": "30.50",
          "remark": "",
          "paid_time": null,
          "payment_method": null,
          "payment_no": null,
          "refund_status": "pending",
          "refund_no": null,
          "closed": 1,
          "ship_status": "pending",
          "ship_data": null,
          "extra": null,
          "create_time": "2021-11-22 10:48:21",
          "update_time": "2021-12-07 20:40:18",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 733,
              "order_id": 597,
              "shop_id": 84,
              "goods_id": 32,
              "num": 1,
              "price": "0.50",
              "skus_type": 1,
              "goods_item": null,
              "goods_skus": null
            },
            {
              "id": 734,
              "order_id": 597,
              "shop_id": 27,
              "goods_id": 27,
              "num": 1,
              "price": "30.00",
              "skus_type": 0,
              "goods_item": {
                "id": 27,
                "title": "小米-商品1",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/eb5a2d258905e0a6096af057946b0bf0.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 4,
            "nickname": "昵称",
            "username": "user2",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        }
      ],
      "totalCount": 10,
      "sourceTotalCount": 339
    },
    {
      "note": "订单列表 · refunding",
      "method": "GET",
      "pattern": "/order/{page}",
      "params": {
        "tab": "refunding"
      },
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {},
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 317,
          "no": "20200108210344675336",
          "user_id": 3,
          "address": {
            "id": 47,
            "user_id": 3,
            "province": "浙江省",
            "city": "杭州市",
            "district": "上城区",
            "address": "666",
            "zip": 0,
            "name": "汉堡",
            "phone": "17792352523",
            "last_used_time": 1578488624,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2020-01-08 21:03:44"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1578488655,
          "payment_method": "alipay",
          "payment_no": "2020010822001438531407187389",
          "refund_status": "applied",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": {
            "refund_reason": "1111"
          },
          "create_time": "2020-01-08 21:03:44",
          "update_time": "2020-01-09 16:49:42",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 365,
              "order_id": 317,
              "shop_id": 10,
              "goods_id": 26,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 302,
          "no": "20200108110717323296",
          "user_id": 3,
          "address": {
            "id": 2,
            "user_id": 3,
            "province": "天津市",
            "city": "市辖区",
            "district": "和平区",
            "address": "阅江西路222号广州塔",
            "zip": 100089,
            "name": "靓仔哈",
            "phone": "13564568789",
            "last_used_time": 1578452837,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2020-01-08 11:07:17"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1578452850,
          "payment_method": "alipay",
          "payment_no": "2020010822001496141407543427",
          "refund_status": "applied",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": {
            "refund_reason": "就是要退"
          },
          "create_time": "2020-01-08 11:07:17",
          "update_time": "2020-01-08 11:19:05",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 350,
              "order_id": 302,
              "shop_id": 13,
              "goods_id": 28,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 28,
                "title": "小米-商品2",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/575977783cdaf86f36c41df05bd9885b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 285,
          "no": "20200101151139415194",
          "user_id": 3,
          "address": {
            "id": 3,
            "user_id": 3,
            "province": "广东省",
            "city": "广州市",
            "district": "荔湾区",
            "address": "阅江西路232号",
            "zip": 0,
            "name": "帅哥小米手机ffyu",
            "phone": "13564568781",
            "last_used_time": 1577862699,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2020-01-01 15:11:39"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1577862714,
          "payment_method": "alipay",
          "payment_no": "2020010122001412711405915671",
          "refund_status": "applied",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": {
            "refund_reason": "下错单了"
          },
          "create_time": "2020-01-01 15:11:39",
          "update_time": "2020-01-01 15:12:40",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 329,
              "order_id": 285,
              "shop_id": 6,
              "goods_id": 29,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 29,
                "title": "小米-商品31",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/765a18a017acf0b5c012ce765696be6f.png",
                "sku_type": 0
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 283,
          "no": "20191231223720135043",
          "user_id": 3,
          "address": {
            "id": 35,
            "user_id": 3,
            "province": "辽宁省",
            "city": "沈阳市",
            "district": "和平区",
            "address": "213123213",
            "zip": 231,
            "name": "两株红1颜",
            "phone": "13395080823",
            "last_used_time": 1577803040,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2019-12-31 22:37:20"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1577803554,
          "payment_method": "wechat",
          "payment_no": "20191231223720135043",
          "refund_status": "applied",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": {
            "refund_reason": "sadsadsad"
          },
          "create_time": "2019-12-31 22:37:20",
          "update_time": "2020-01-08 15:56:48",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 326,
              "order_id": 283,
              "shop_id": 3,
              "goods_id": 26,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 282,
          "no": "20191231213538890211",
          "user_id": 3,
          "address": {
            "id": 35,
            "user_id": 3,
            "province": "辽宁省",
            "city": "沈阳市",
            "district": "和平区",
            "address": "213123213",
            "zip": 231,
            "name": "两株红1颜",
            "phone": "13395080823",
            "last_used_time": 1577799338,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2019-12-31 21:35:38"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1577800974,
          "payment_method": "wechat",
          "payment_no": "20191231213538890211",
          "refund_status": "applied",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": {
            "refund_reason": "sadasd"
          },
          "create_time": "2019-12-31 21:35:38",
          "update_time": "2020-01-08 15:59:51",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 325,
              "order_id": 282,
              "shop_id": 3,
              "goods_id": 26,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 275,
          "no": "20191230154644087891",
          "user_id": 3,
          "address": {
            "id": 2,
            "user_id": 3,
            "province": "天津市",
            "city": "市辖区",
            "district": "和平区",
            "address": "阅江西路222号广州塔",
            "zip": 0,
            "name": "靓仔哈",
            "phone": "13564568789",
            "last_used_time": 1577692004,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2019-12-30 15:46:44"
          },
          "total_price": "0.04",
          "remark": "",
          "paid_time": 1577692039,
          "payment_method": "alipay",
          "payment_no": "2019123022001481731405123462",
          "refund_status": "applied",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": {
            "refund_reason": "买错了"
          },
          "create_time": "2019-12-30 15:46:44",
          "update_time": "2019-12-30 17:00:17",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 315,
              "order_id": 275,
              "shop_id": 6,
              "goods_id": 29,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 29,
                "title": "小米-商品31",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/765a18a017acf0b5c012ce765696be6f.png",
                "sku_type": 0
              },
              "goods_skus": null
            },
            {
              "id": 316,
              "order_id": 275,
              "shop_id": 12,
              "goods_id": 29,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 29,
                "title": "小米-商品31",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/765a18a017acf0b5c012ce765696be6f.png",
                "sku_type": 0
              },
              "goods_skus": null
            },
            {
              "id": 317,
              "order_id": 275,
              "shop_id": 3,
              "goods_id": 26,
              "num": 2,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 268,
          "no": "20191229204123634631",
          "user_id": 3,
          "address": {
            "id": 3,
            "user_id": 3,
            "province": "广东省",
            "city": "广州市",
            "district": "荔湾区",
            "address": "阅江西路232号",
            "zip": 0,
            "name": "帅哥小米手机ffyu",
            "phone": "13564568781",
            "last_used_time": 1577623283,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2019-12-29 20:41:23"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1577625990,
          "payment_method": "wechat",
          "payment_no": "20191229204123634631",
          "refund_status": "applied",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": {
            "refund_reason": "法大師傅"
          },
          "create_time": "2019-12-29 20:41:23",
          "update_time": "2020-01-16 17:26:14",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 308,
              "order_id": 268,
              "shop_id": 3,
              "goods_id": 26,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 256,
          "no": "20191226134010473784",
          "user_id": 3,
          "address": {
            "id": 35,
            "user_id": 3,
            "province": "辽宁省",
            "city": "沈阳市",
            "district": "和平区",
            "address": "213123213",
            "zip": 231,
            "name": "两株红1颜",
            "phone": "13395080823",
            "last_used_time": 1577338810,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2019-12-26 13:40:10"
          },
          "total_price": "0.01",
          "remark": "",
          "paid_time": 1577338838,
          "payment_method": "alipay",
          "payment_no": "2019122622001446221403706833",
          "refund_status": "applied",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": {
            "refund_reason": "测试"
          },
          "create_time": "2019-12-26 13:40:10",
          "update_time": "2019-12-26 15:13:02",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 296,
              "order_id": 256,
              "shop_id": 3,
              "goods_id": 26,
              "num": 1,
              "price": "0.01",
              "skus_type": 1,
              "goods_item": {
                "id": 26,
                "title": "小米-天鹅绒柔暖四件套",
                "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 245,
          "no": "20191225173752951296",
          "user_id": 3,
          "address": {
            "id": 2,
            "user_id": 3,
            "province": "天津市",
            "city": "市辖区",
            "district": "和平区",
            "address": "阅江西路222号广州塔",
            "zip": 0,
            "name": "靓仔哈",
            "phone": "13564568789",
            "last_used_time": 1577266672,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2019-12-25 17:37:52"
          },
          "total_price": "0.26",
          "remark": "",
          "paid_time": 1577266680,
          "payment_method": "alipay",
          "payment_no": "2019122522001476991403541055",
          "refund_status": "applied",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": {
            "refund_reason": "就想退款"
          },
          "create_time": "2019-12-25 17:37:52",
          "update_time": "2019-12-26 15:49:47",
          "reviewed": 0,
          "coupon_user_id": 9,
          "order_items": [
            {
              "id": 277,
              "order_id": 245,
              "shop_id": 8,
              "goods_id": 25,
              "num": 4,
              "price": "0.07",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        },
        {
          "id": 244,
          "no": "20191225173457714354",
          "user_id": 3,
          "address": {
            "id": 2,
            "user_id": 3,
            "province": "天津市",
            "city": "市辖区",
            "district": "和平区",
            "address": "阅江西路222号广州塔",
            "zip": 0,
            "name": "靓仔哈",
            "phone": "13564568789",
            "last_used_time": 1577266497,
            "create_time": "1970-01-01 08:32:50",
            "update_time": "2019-12-25 17:34:57"
          },
          "total_price": "0.50",
          "remark": "",
          "paid_time": 1577266517,
          "payment_method": "alipay",
          "payment_no": "2019122522001476991403504982",
          "refund_status": "applied",
          "refund_no": null,
          "closed": 0,
          "ship_status": "pending",
          "ship_data": null,
          "extra": {
            "refund_reason": "记录"
          },
          "create_time": "2019-12-25 17:34:57",
          "update_time": "2019-12-26 19:11:25",
          "reviewed": 0,
          "coupon_user_id": 0,
          "order_items": [
            {
              "id": 276,
              "order_id": 244,
              "shop_id": 2,
              "goods_id": 25,
              "num": 1,
              "price": "0.50",
              "skus_type": 1,
              "goods_item": {
                "id": 25,
                "title": "小米-百支酒店风抱枕套",
                "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
                "sku_type": 1
              },
              "goods_skus": null
            }
          ],
          "user": {
            "id": 3,
            "nickname": "昵称",
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
          }
        }
      ],
      "totalCount": 10,
      "sourceTotalCount": 17
    },
    {
      "note": "推广员列表",
      "method": "GET",
      "pattern": "/agent/{page}",
      "params": {
        "type": "all"
      },
      "ignoreParams": true,
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {},
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 375,
          "username": "12312dawdaw12312",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef7c5261d4.jpg",
          "nickname": "213123",
          "phone": "17212345678",
          "email": "123@1.com",
          "user_level_id": 289,
          "create_time": "2026-10-14 10:48:38",
          "update_time": "2026-10-14 20:09:38",
          "last_login_time": null,
          "status": 0,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_info": {
            "id": 375,
            "user_id": 375,
            "sex": null,
            "birthday": null,
            "name": null
          }
        },
        {
          "id": 372,
          "username": "1238",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceebfaca9f1.png",
          "nickname": "",
          "phone": "",
          "email": "",
          "user_level_id": 4,
          "create_time": "2026-10-14 10:42:16",
          "update_time": "2026-10-14 20:09:11",
          "last_login_time": null,
          "status": 0,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_info": {
            "id": 372,
            "user_id": 372,
            "sex": null,
            "birthday": null,
            "name": null
          }
        },
        {
          "id": 358,
          "username": "dwaw",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acee3b9c3e2b.png",
          "nickname": "3213",
          "phone": "",
          "email": "",
          "user_level_id": 3,
          "create_time": "2026-10-13 15:41:44",
          "update_time": "2026-10-14 20:08:22",
          "last_login_time": null,
          "status": 0,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_info": {
            "id": 358,
            "user_id": 358,
            "sex": null,
            "birthday": null,
            "name": null
          }
        },
        {
          "id": 356,
          "username": "qwer",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acdddb175c9a.png",
          "nickname": "12312321",
          "phone": "13767452345",
          "email": "123456@1.com",
          "user_level_id": 4,
          "create_time": "2026-10-13 15:28:39",
          "update_time": "2026-10-14 20:08:22",
          "last_login_time": null,
          "status": 0,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_info": {
            "id": 356,
            "user_id": 356,
            "sex": null,
            "birthday": null,
            "name": null
          }
        },
        {
          "id": 355,
          "username": "admin2",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acdddf092af4.png",
          "nickname": "12331241",
          "phone": "17245678901",
          "email": "12331212@1.cpm",
          "user_level_id": 321,
          "create_time": "2026-10-13 15:27:43",
          "update_time": "2026-10-14 20:08:22",
          "last_login_time": null,
          "status": 0,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_info": {
            "id": 355,
            "user_id": 355,
            "sex": null,
            "birthday": null,
            "name": null
          }
        },
        {
          "id": 353,
          "username": "1234567",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acddfc10f352.png",
          "nickname": "1234567",
          "phone": "",
          "email": "",
          "user_level_id": 3,
          "create_time": "2026-10-13 09:16:47",
          "update_time": "2026-10-14 20:08:22",
          "last_login_time": null,
          "status": 0,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_info": {
            "id": 353,
            "user_id": 353,
            "sex": null,
            "birthday": null,
            "name": null
          }
        },
        {
          "id": 351,
          "username": "curltest03",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acee9be9c97f.png",
          "nickname": "Curl3",
          "phone": "13900000000",
          "email": "",
          "user_level_id": 3,
          "create_time": "2026-10-13 09:06:40",
          "update_time": "2026-10-14 20:08:22",
          "last_login_time": null,
          "status": 0,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_info": {
            "id": 351,
            "user_id": 351,
            "sex": null,
            "birthday": null,
            "name": null
          }
        },
        {
          "id": 350,
          "username": "curltest02",
          "avatar": null,
          "nickname": "CurlTest2",
          "phone": "13800000000",
          "email": null,
          "user_level_id": 3,
          "create_time": "2026-10-13 09:02:31",
          "update_time": "2026-10-14 20:08:22",
          "last_login_time": null,
          "status": 0,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_info": {
            "id": 350,
            "user_id": 350,
            "sex": null,
            "birthday": null,
            "name": null
          }
        },
        {
          "id": 349,
          "username": "啊发发地",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acca98000bee.png",
          "nickname": "",
          "phone": "",
          "email": "",
          "user_level_id": 3,
          "create_time": "2026-10-12 17:21:14",
          "update_time": "2026-10-14 20:08:22",
          "last_login_time": null,
          "status": 0,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_info": {
            "id": 349,
            "user_id": 349,
            "sex": null,
            "birthday": null,
            "name": null
          }
        },
        {
          "id": 348,
          "username": "wenjun",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acbbda003298.png",
          "nickname": "",
          "phone": "",
          "email": "",
          "user_level_id": 6,
          "create_time": "2026-10-12 16:16:26",
          "update_time": "2026-10-14 20:08:22",
          "last_login_time": null,
          "status": 0,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_info": {
            "id": 348,
            "user_id": 348,
            "sex": null,
            "birthday": null,
            "name": null
          }
        },
        {
          "id": 346,
          "username": "admin",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acc5e9860221.jpg",
          "nickname": "",
          "phone": "",
          "email": "",
          "user_level_id": 3,
          "create_time": "2026-10-12 12:14:24",
          "update_time": "2026-10-12 12:14:24",
          "last_login_time": null,
          "status": 1,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_info": {
            "id": 346,
            "user_id": 346,
            "sex": null,
            "birthday": null,
            "name": null
          }
        },
        {
          "id": 345,
          "username": "邹holiday",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acc554543b83.jpg",
          "nickname": "zsb",
          "phone": null,
          "email": null,
          "user_level_id": 289,
          "create_time": "2026-10-12 11:34:52",
          "update_time": "2026-10-12 11:34:52",
          "last_login_time": null,
          "status": 1,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_info": {
            "id": 345,
            "user_id": 345,
            "sex": null,
            "birthday": null,
            "name": null
          }
        },
        {
          "id": 344,
          "username": "美味葱花",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acc556b6da24.jpg",
          "nickname": "cch",
          "phone": null,
          "email": null,
          "user_level_id": 289,
          "create_time": "2026-10-12 11:31:24",
          "update_time": "2026-10-12 11:35:38",
          "last_login_time": null,
          "status": 1,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_info": {
            "id": 344,
            "user_id": 344,
            "sex": null,
            "birthday": null,
            "name": null
          }
        },
        {
          "id": 343,
          "username": "呆萌水煮蛋",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acc559aa1300.jpg",
          "nickname": "zjl",
          "phone": null,
          "email": null,
          "user_level_id": 289,
          "create_time": "2026-10-12 11:30:45",
          "update_time": "2026-10-12 11:36:43",
          "last_login_time": null,
          "status": 1,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_info": {
            "id": 343,
            "user_id": 343,
            "sex": null,
            "birthday": null,
            "name": null
          }
        },
        {
          "id": 342,
          "username": "翠翠灰灰",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acc53fd09269.png",
          "nickname": "cch",
          "phone": null,
          "email": null,
          "user_level_id": 289,
          "create_time": "2026-10-12 11:29:26",
          "update_time": "2026-10-12 11:29:26",
          "last_login_time": null,
          "status": 1,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_info": {
            "id": 342,
            "user_id": 342,
            "sex": null,
            "birthday": null,
            "name": null
          }
        },
        {
          "id": 336,
          "username": "ceshi2026",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acc3db0809d3.png",
          "nickname": "测试用户",
          "phone": "",
          "email": "",
          "user_level_id": 5,
          "create_time": "2026-10-10 11:41:09",
          "update_time": "2026-10-12 11:28:36",
          "last_login_time": null,
          "status": 1,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_info": {
            "id": 336,
            "user_id": 336,
            "sex": null,
            "birthday": null,
            "name": null
          }
        },
        {
          "id": 335,
          "username": "1232112233332",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acc3db7e0b6f.png",
          "nickname": "cch",
          "phone": null,
          "email": null,
          "user_level_id": 3,
          "create_time": "2026-10-10 11:28:01",
          "update_time": "2026-10-12 11:28:37",
          "last_login_time": null,
          "status": 1,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_info": {
            "id": 335,
            "user_id": 335,
            "sex": null,
            "birthday": null,
            "name": null
          }
        },
        {
          "id": 41,
          "username": "test1",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/60bf2fe6e9e53.jpg",
          "nickname": null,
          "phone": null,
          "email": null,
          "user_level_id": 6,
          "create_time": "2021-12-17 00:02:26",
          "update_time": "2021-12-26 16:48:21",
          "last_login_time": null,
          "status": 1,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_info": {
            "id": 40,
            "user_id": 41,
            "sex": null,
            "birthday": null,
            "name": null
          }
        },
        {
          "id": 40,
          "username": "13126340523",
          "avatar": null,
          "nickname": null,
          "phone": null,
          "email": null,
          "user_level_id": 3,
          "create_time": "2021-10-24 07:57:47",
          "update_time": "2021-12-02 13:21:39",
          "last_login_time": null,
          "status": 1,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_info": {
            "id": 39,
            "user_id": 40,
            "sex": null,
            "birthday": null,
            "name": null
          }
        },
        {
          "id": 39,
          "username": "17634030352",
          "avatar": null,
          "nickname": null,
          "phone": null,
          "email": null,
          "user_level_id": null,
          "create_time": "2021-10-16 00:33:09",
          "update_time": "2021-10-16 00:33:09",
          "last_login_time": null,
          "status": 1,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_info": {
            "id": 38,
            "user_id": 39,
            "sex": null,
            "birthday": null,
            "name": null
          }
        }
      ],
      "totalCount": 20,
      "sourceTotalCount": 33
    },
    {
      "note": "推广订单列表",
      "method": "GET",
      "pattern": "/user_bill/{page}",
      "params": {
        "type": "all"
      },
      "ignoreParams": true,
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {},
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 1,
          "user_id": 3,
          "level": 1,
          "order_id": 348,
          "commission": "0.05",
          "status": 1,
          "create_time": "2021-06-13 20:37:59",
          "update_time": "2021-06-13 20:37:59",
          "order": {
            "id": 348,
            "no": "20210613182220167590",
            "user_id": 4,
            "user": {
              "id": 4,
              "username": "user2",
              "nickname": "昵称",
              "phone": "15632654659"
            }
          }
        },
        {
          "id": 2,
          "user_id": 3,
          "level": 1,
          "order_id": 155,
          "commission": "0.05",
          "status": 1,
          "create_time": "2021-06-13 20:37:59",
          "update_time": "2021-06-13 20:37:59",
          "order": {
            "id": 155,
            "no": "20191217220207547581",
            "user_id": 3,
            "user": {
              "id": 3,
              "username": "user",
              "nickname": "昵称",
              "phone": "15632654658"
            }
          }
        }
      ],
      "totalCount": 2,
      "sourceTotalCount": 2
    },
    {
      "note": "图库分类",
      "method": "GET",
      "pattern": "/image_class/{page}",
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {},
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 168,
          "name": "化妆品",
          "order": 1001,
          "images_count": 187
        },
        {
          "id": 133,
          "name": "智能家电",
          "order": 1001,
          "images_count": 7
        },
        {
          "id": 3115,
          "name": "农贸产品",
          "order": 1000,
          "images_count": 8
        },
        {
          "id": -1,
          "name": "你好同学",
          "order": 1000,
          "images_count": 0
        },
        {
          "id": 3796,
          "name": "美女合集（别删）",
          "order": 100,
          "images_count": 7
        },
        {
          "id": 3778,
          "name": "衣服鞋帽",
          "order": 50,
          "images_count": 3
        },
        {
          "id": 3666,
          "name": "美食鉴赏",
          "order": 50,
          "images_count": 3
        },
        {
          "id": 3662,
          "name": "铠甲勇士",
          "order": 50,
          "images_count": 6
        },
        {
          "id": 3621,
          "name": "表情包",
          "order": 50,
          "images_count": 2
        },
        {
          "id": 3618,
          "name": "表情",
          "order": 50,
          "images_count": 7
        },
        {
          "id": 3551,
          "name": "卫浴",
          "order": 50,
          "images_count": 1
        },
        {
          "id": 3524,
          "name": "唯美手机",
          "order": 50,
          "images_count": 7
        },
        {
          "id": 174,
          "name": "123",
          "order": 50,
          "images_count": 1
        },
        {
          "id": 173,
          "name": "服装服饰",
          "order": 50,
          "images_count": 0
        },
        {
          "id": 172,
          "name": "毛巾",
          "order": 50,
          "images_count": 0
        },
        {
          "id": 171,
          "name": "其他品类",
          "order": 50,
          "images_count": 1
        },
        {
          "id": 170,
          "name": "手表手机",
          "order": 50,
          "images_count": 0
        },
        {
          "id": 169,
          "name": "健身器材",
          "order": 50,
          "images_count": 0
        },
        {
          "id": 3512,
          "name": "原神",
          "order": 10,
          "images_count": 4
        },
        {
          "id": 107,
          "name": "运动旅行",
          "order": 9,
          "images_count": 1
        }
      ],
      "totalCount": 20,
      "sourceTotalCount": 26
    },
    {
      "note": "用户列表",
      "method": "GET",
      "pattern": "/user/{page}",
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {
          "user_level": [
            {
              "id": 3,
              "name": "普通会员"
            },
            {
              "id": 4,
              "name": "白银会员"
            },
            {
              "id": 5,
              "name": "黄金会员"
            },
            {
              "id": 6,
              "name": "钻石会员"
            },
            {
              "id": 289,
              "name": "白金会员"
            },
            {
              "id": 321,
              "name": "黑金会员"
            }
          ]
        },
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 375,
          "username": "12312dawdaw12312",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef7c5261d4.jpg",
          "nickname": "213123",
          "phone": "17212345678",
          "email": "123@1.com",
          "user_level_id": 289,
          "create_time": "2026-10-14 10:48:38",
          "update_time": "2026-10-14 20:09:38",
          "last_login_time": null,
          "status": 0,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_level": {
            "id": 289,
            "name": "白金会员"
          }
        },
        {
          "id": 372,
          "username": "1238",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceebfaca9f1.png",
          "nickname": "",
          "phone": "",
          "email": "",
          "user_level_id": 4,
          "create_time": "2026-10-14 10:42:16",
          "update_time": "2026-10-14 20:09:11",
          "last_login_time": null,
          "status": 0,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_level": {
            "id": 4,
            "name": "白银会员"
          }
        },
        {
          "id": 358,
          "username": "dwaw",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acee3b9c3e2b.png",
          "nickname": "3213",
          "phone": "",
          "email": "",
          "user_level_id": 3,
          "create_time": "2026-10-13 15:41:44",
          "update_time": "2026-10-14 20:08:22",
          "last_login_time": null,
          "status": 0,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_level": {
            "id": 3,
            "name": "普通会员"
          }
        },
        {
          "id": 356,
          "username": "qwer",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acdddb175c9a.png",
          "nickname": "12312321",
          "phone": "13767452345",
          "email": "123456@1.com",
          "user_level_id": 4,
          "create_time": "2026-10-13 15:28:39",
          "update_time": "2026-10-14 20:08:22",
          "last_login_time": null,
          "status": 0,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_level": {
            "id": 4,
            "name": "白银会员"
          }
        },
        {
          "id": 355,
          "username": "admin2",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acdddf092af4.png",
          "nickname": "12331241",
          "phone": "17245678901",
          "email": "12331212@1.cpm",
          "user_level_id": 321,
          "create_time": "2026-10-13 15:27:43",
          "update_time": "2026-10-14 20:08:22",
          "last_login_time": null,
          "status": 0,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_level": {
            "id": 321,
            "name": "黑金会员"
          }
        },
        {
          "id": 353,
          "username": "1234567",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acddfc10f352.png",
          "nickname": "1234567",
          "phone": "",
          "email": "",
          "user_level_id": 3,
          "create_time": "2026-10-13 09:16:47",
          "update_time": "2026-10-14 20:08:22",
          "last_login_time": null,
          "status": 0,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_level": {
            "id": 3,
            "name": "普通会员"
          }
        },
        {
          "id": 351,
          "username": "curltest03",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acee9be9c97f.png",
          "nickname": "Curl3",
          "phone": "13900000000",
          "email": "",
          "user_level_id": 3,
          "create_time": "2026-10-13 09:06:40",
          "update_time": "2026-10-14 20:08:22",
          "last_login_time": null,
          "status": 0,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_level": {
            "id": 3,
            "name": "普通会员"
          }
        },
        {
          "id": 350,
          "username": "curltest02",
          "avatar": null,
          "nickname": "CurlTest2",
          "phone": "13800000000",
          "email": null,
          "user_level_id": 3,
          "create_time": "2026-10-13 09:02:31",
          "update_time": "2026-10-14 20:08:22",
          "last_login_time": null,
          "status": 0,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_level": {
            "id": 3,
            "name": "普通会员"
          }
        },
        {
          "id": 349,
          "username": "啊发发地",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acca98000bee.png",
          "nickname": "",
          "phone": "",
          "email": "",
          "user_level_id": 3,
          "create_time": "2026-10-12 17:21:14",
          "update_time": "2026-10-14 20:08:22",
          "last_login_time": null,
          "status": 0,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_level": {
            "id": 3,
            "name": "普通会员"
          }
        },
        {
          "id": 348,
          "username": "wenjun",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acbbda003298.png",
          "nickname": "",
          "phone": "",
          "email": "",
          "user_level_id": 6,
          "create_time": "2026-10-12 16:16:26",
          "update_time": "2026-10-14 20:08:22",
          "last_login_time": null,
          "status": 0,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_level": {
            "id": 6,
            "name": "钻石会员"
          }
        },
        {
          "id": 346,
          "username": "admin",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acc5e9860221.jpg",
          "nickname": "",
          "phone": "",
          "email": "",
          "user_level_id": 3,
          "create_time": "2026-10-12 12:14:24",
          "update_time": "2026-10-12 12:14:24",
          "last_login_time": null,
          "status": 1,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_level": {
            "id": 3,
            "name": "普通会员"
          }
        },
        {
          "id": 345,
          "username": "邹holiday",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acc554543b83.jpg",
          "nickname": "zsb",
          "phone": null,
          "email": null,
          "user_level_id": 289,
          "create_time": "2026-10-12 11:34:52",
          "update_time": "2026-10-12 11:34:52",
          "last_login_time": null,
          "status": 1,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_level": {
            "id": 289,
            "name": "白金会员"
          }
        },
        {
          "id": 344,
          "username": "美味葱花",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acc556b6da24.jpg",
          "nickname": "cch",
          "phone": null,
          "email": null,
          "user_level_id": 289,
          "create_time": "2026-10-12 11:31:24",
          "update_time": "2026-10-12 11:35:38",
          "last_login_time": null,
          "status": 1,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_level": {
            "id": 289,
            "name": "白金会员"
          }
        },
        {
          "id": 343,
          "username": "呆萌水煮蛋",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acc559aa1300.jpg",
          "nickname": "zjl",
          "phone": null,
          "email": null,
          "user_level_id": 289,
          "create_time": "2026-10-12 11:30:45",
          "update_time": "2026-10-12 11:36:43",
          "last_login_time": null,
          "status": 1,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_level": {
            "id": 289,
            "name": "白金会员"
          }
        },
        {
          "id": 342,
          "username": "翠翠灰灰",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acc53fd09269.png",
          "nickname": "cch",
          "phone": null,
          "email": null,
          "user_level_id": 289,
          "create_time": "2026-10-12 11:29:26",
          "update_time": "2026-10-12 11:29:26",
          "last_login_time": null,
          "status": 1,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_level": {
            "id": 289,
            "name": "白金会员"
          }
        },
        {
          "id": 336,
          "username": "ceshi2026",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acc3db0809d3.png",
          "nickname": "测试用户",
          "phone": "",
          "email": "",
          "user_level_id": 5,
          "create_time": "2026-10-10 11:41:09",
          "update_time": "2026-10-12 11:28:36",
          "last_login_time": null,
          "status": 1,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_level": {
            "id": 5,
            "name": "黄金会员"
          }
        },
        {
          "id": 335,
          "username": "1232112233332",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acc3db7e0b6f.png",
          "nickname": "cch",
          "phone": null,
          "email": null,
          "user_level_id": 3,
          "create_time": "2026-10-10 11:28:01",
          "update_time": "2026-10-12 11:28:37",
          "last_login_time": null,
          "status": 1,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_level": {
            "id": 3,
            "name": "普通会员"
          }
        },
        {
          "id": 41,
          "username": "test1",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/60bf2fe6e9e53.jpg",
          "nickname": null,
          "phone": null,
          "email": null,
          "user_level_id": 6,
          "create_time": "2021-12-17 00:02:26",
          "update_time": "2021-12-26 16:48:21",
          "last_login_time": null,
          "status": 1,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_level": {
            "id": 6,
            "name": "钻石会员"
          }
        },
        {
          "id": 40,
          "username": "13126340523",
          "avatar": null,
          "nickname": null,
          "phone": null,
          "email": null,
          "user_level_id": 3,
          "create_time": "2021-10-24 07:57:47",
          "update_time": "2021-12-02 13:21:39",
          "last_login_time": null,
          "status": 1,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_level": {
            "id": 3,
            "name": "普通会员"
          }
        },
        {
          "id": 39,
          "username": "17634030352",
          "avatar": null,
          "nickname": null,
          "phone": null,
          "email": null,
          "user_level_id": null,
          "create_time": "2021-10-16 00:33:09",
          "update_time": "2021-10-16 00:33:09",
          "last_login_time": null,
          "status": 1,
          "wechat_openid": null,
          "share_num": 0,
          "share_order_num": 0,
          "order_price": "0.00",
          "commission": "0.00",
          "cash_out_price": "0.00",
          "cash_out_time": 0,
          "no_cash_out_price": "0.00",
          "p1": null,
          "p2": null,
          "user_level": null
        }
      ],
      "totalCount": 20,
      "sourceTotalCount": 33
    },
    {
      "note": "会员等级",
      "method": "GET",
      "pattern": "/user_level/{page}",
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {},
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 321,
          "name": "黑金会员",
          "level": 60,
          "status": 1,
          "discount": 75,
          "max_price": 0,
          "max_times": 0
        },
        {
          "id": 289,
          "name": "白金会员",
          "level": 40,
          "status": 1,
          "discount": 85,
          "max_price": 1000,
          "max_times": 50
        },
        {
          "id": 6,
          "name": "钻石会员",
          "level": 888,
          "status": 1,
          "discount": 50,
          "max_price": 1,
          "max_times": 1
        },
        {
          "id": 5,
          "name": "黄金会员",
          "level": 30,
          "status": 1,
          "discount": 90,
          "max_price": 300,
          "max_times": 6
        },
        {
          "id": 4,
          "name": "白银会员",
          "level": 20,
          "status": 1,
          "discount": 95,
          "max_price": 100,
          "max_times": 2
        },
        {
          "id": 3,
          "name": "普通会员",
          "level": 10,
          "status": 1,
          "discount": 0,
          "max_price": 0,
          "max_times": 0
        }
      ],
      "totalCount": 6,
      "sourceTotalCount": 6
    },
    {
      "note": "管理员列表",
      "method": "GET",
      "pattern": "/manager/{page}",
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {
          "roles": [
            {
              "id": 2,
              "name": "超级管理员"
            },
            {
              "id": 3,
              "name": "运营"
            },
            {
              "id": 9,
              "name": "测试12"
            },
            {
              "id": 19,
              "name": "销售"
            },
            {
              "id": 21,
              "name": "技术"
            },
            {
              "id": 31,
              "name": "普通管理员1"
            },
            {
              "id": 35,
              "name": "倡议成员单位"
            },
            {
              "id": 36,
              "name": "普通员工"
            },
            {
              "id": 38,
              "name": "供应商22"
            },
            {
              "id": 759,
              "name": "哈基米"
            },
            {
              "id": 839,
              "name": "8546135"
            },
            {
              "id": 842,
              "name": "运营经理"
            },
            {
              "id": 843,
              "name": "商品专员"
            },
            {
              "id": 844,
              "name": "客服专员"
            },
            {
              "id": 845,
              "name": "仓储物流专员123"
            },
            {
              "id": 846,
              "name": "分销运营专员"
            },
            {
              "id": 847,
              "name": "系统管理员"
            },
            {
              "id": 871,
              "name": "NB1"
            }
          ]
        },
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 2404,
          "status": 1,
          "create_time": "2026-10-14 16:02:12",
          "update_time": "2026-10-14 16:02:12",
          "username": "解思杰",
          "avatar": "",
          "role_id": 871,
          "super": 0,
          "role": {
            "id": 871,
            "name": "NB1"
          }
        },
        {
          "id": 2401,
          "status": 0,
          "create_time": "2026-10-14 11:50:16",
          "update_time": "2026-10-14 19:10:44",
          "username": "123",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acefbf0b3e52.jpg",
          "role_id": 845,
          "super": 0,
          "role": {
            "id": 845,
            "name": "仓储物流专员123"
          }
        },
        {
          "id": 2399,
          "status": 1,
          "create_time": "2026-10-14 11:43:22",
          "update_time": "2026-10-14 11:49:42",
          "username": "jia bao",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acefbd1e62ad.jpg",
          "role_id": 2,
          "super": 0,
          "role": {
            "id": 2,
            "name": "超级管理员"
          }
        },
        {
          "id": 2398,
          "status": 1,
          "create_time": "2026-10-14 11:42:29",
          "update_time": "2026-10-14 16:06:35",
          "username": "12312",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acefa23a023a.png",
          "role_id": 2,
          "super": 0,
          "role": {
            "id": 2,
            "name": "超级管理员"
          }
        },
        {
          "id": 2396,
          "status": 0,
          "create_time": "2026-10-14 11:19:30",
          "update_time": "2026-10-14 11:36:11",
          "username": "ad",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef8aa7728a.jpg",
          "role_id": 38,
          "super": 0,
          "role": {
            "id": 38,
            "name": "供应商22"
          }
        },
        {
          "id": 2395,
          "status": 1,
          "create_time": "2026-10-14 11:14:06",
          "update_time": "2026-10-14 11:14:06",
          "username": "02",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef3194a00e.png",
          "role_id": 9,
          "super": 0,
          "role": {
            "id": 9,
            "name": "测试12"
          }
        },
        {
          "id": 2394,
          "status": 1,
          "create_time": "2026-10-14 11:13:03",
          "update_time": "2026-10-14 11:13:03",
          "username": "1",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef332d8b85.png",
          "role_id": 3,
          "super": 0,
          "role": {
            "id": 3,
            "name": "运营"
          }
        },
        {
          "id": 2390,
          "status": 1,
          "create_time": "2026-10-14 10:54:53",
          "update_time": "2026-10-14 11:12:02",
          "username": "122",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef19f83f8e.jpg",
          "role_id": 2,
          "super": 0,
          "role": {
            "id": 2,
            "name": "超级管理员"
          }
        },
        {
          "id": 2383,
          "status": 0,
          "create_time": "2026-10-14 10:49:20",
          "update_time": "2026-10-14 10:50:37",
          "username": "adwwa131231231",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceedaded7d9.png",
          "role_id": 3,
          "super": 0,
          "role": {
            "id": 3,
            "name": "运营"
          }
        },
        {
          "id": 2382,
          "status": 0,
          "create_time": "2026-10-14 10:48:33",
          "update_time": "2026-10-14 11:37:01",
          "username": "010203",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceed6c02a5b.jpg",
          "role_id": 847,
          "super": 0,
          "role": {
            "id": 847,
            "name": "系统管理员"
          }
        },
        {
          "id": 2379,
          "status": 0,
          "create_time": "2026-10-14 10:41:56",
          "update_time": "2026-10-14 10:50:04",
          "username": "1231",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceebf2be412.png",
          "role_id": 2,
          "super": 0,
          "role": {
            "id": 2,
            "name": "超级管理员"
          }
        },
        {
          "id": 2374,
          "status": 0,
          "create_time": "2026-10-14 10:30:00",
          "update_time": "2026-10-14 10:50:04",
          "username": "081200",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acee9ab35efd.png",
          "role_id": 2,
          "super": 0,
          "role": {
            "id": 2,
            "name": "超级管理员"
          }
        },
        {
          "id": 2373,
          "status": 0,
          "create_time": "2026-10-14 10:29:53",
          "update_time": "2026-10-14 10:50:04",
          "username": "admi",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acee91ad3a00.png",
          "role_id": 2,
          "super": 0,
          "role": {
            "id": 2,
            "name": "超级管理员"
          }
        },
        {
          "id": 2372,
          "status": 0,
          "create_time": "2026-10-14 10:29:45",
          "update_time": "2026-10-14 10:50:04",
          "username": "admin123",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acee911baff1.png",
          "role_id": 3,
          "super": 0,
          "role": {
            "id": 3,
            "name": "运营"
          }
        },
        {
          "id": 2371,
          "status": 0,
          "create_time": "2026-10-14 10:29:41",
          "update_time": "2026-10-14 10:50:05",
          "username": "asdas",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acee914eaa6c.png",
          "role_id": 759,
          "super": 0,
          "role": {
            "id": 759,
            "name": "哈基米"
          }
        },
        {
          "id": 2370,
          "status": 0,
          "create_time": "2026-10-14 10:29:05",
          "update_time": "2026-10-14 10:50:05",
          "username": "123855",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acee918e7e6e.jpg",
          "role_id": 847,
          "super": 0,
          "role": {
            "id": 847,
            "name": "系统管理员"
          }
        },
        {
          "id": 2368,
          "status": 0,
          "create_time": "2026-10-14 10:27:49",
          "update_time": "2026-10-14 10:50:05",
          "username": "1231231dawdaw12312",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acee89b01ed8.png",
          "role_id": 3,
          "super": 0,
          "role": {
            "id": 3,
            "name": "运营"
          }
        },
        {
          "id": 2358,
          "status": 0,
          "create_time": "2026-10-14 10:15:43",
          "update_time": "2026-10-14 10:50:05",
          "username": "1221212",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acee5ce36c3e.png",
          "role_id": 2,
          "super": 0,
          "role": {
            "id": 2,
            "name": "超级管理员"
          }
        },
        {
          "id": 2350,
          "status": 0,
          "create_time": "2026-10-13 18:07:56",
          "update_time": "2026-10-14 10:48:47",
          "username": "what",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6ab222b2d80fc.jpg",
          "role_id": 3,
          "super": 0,
          "role": {
            "id": 3,
            "name": "运营"
          }
        },
        {
          "id": 2349,
          "status": 0,
          "create_time": "2026-10-13 14:42:18",
          "update_time": "2026-10-14 10:46:46",
          "username": "Atc",
          "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6ab3dcaaeaa1b.jpg",
          "role_id": 2,
          "super": 0,
          "role": {
            "id": 2,
            "name": "超级管理员"
          }
        }
      ],
      "totalCount": 20,
      "sourceTotalCount": 42
    },
    {
      "note": "角色列表",
      "method": "GET",
      "pattern": "/role/{page}",
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {},
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 871,
          "status": 1,
          "create_time": "2026-10-13 11:15:38",
          "update_time": "2026-10-14 13:24:56",
          "name": "NB1",
          "desc": "aa",
          "rules": [
            {
              "id": 5,
              "pivot": {
                "id": 44406,
                "role_id": 871,
                "rule_id": 5
              }
            },
            {
              "id": 10,
              "pivot": {
                "id": 44407,
                "role_id": 871,
                "rule_id": 10
              }
            },
            {
              "id": 176,
              "pivot": {
                "id": 44410,
                "role_id": 871,
                "rule_id": 176
              }
            },
            {
              "id": 6,
              "pivot": {
                "id": 44411,
                "role_id": 871,
                "rule_id": 6
              }
            },
            {
              "id": 13,
              "pivot": {
                "id": 44412,
                "role_id": 871,
                "rule_id": 13
              }
            },
            {
              "id": 61,
              "pivot": {
                "id": 44413,
                "role_id": 871,
                "rule_id": 61
              }
            },
            {
              "id": 127,
              "pivot": {
                "id": 44414,
                "role_id": 871,
                "rule_id": 127
              }
            },
            {
              "id": 128,
              "pivot": {
                "id": 44415,
                "role_id": 871,
                "rule_id": 128
              }
            },
            {
              "id": 129,
              "pivot": {
                "id": 44416,
                "role_id": 871,
                "rule_id": 129
              }
            },
            {
              "id": 131,
              "pivot": {
                "id": 44417,
                "role_id": 871,
                "rule_id": 131
              }
            },
            {
              "id": 132,
              "pivot": {
                "id": 44418,
                "role_id": 871,
                "rule_id": 132
              }
            },
            {
              "id": 133,
              "pivot": {
                "id": 44419,
                "role_id": 871,
                "rule_id": 133
              }
            },
            {
              "id": 134,
              "pivot": {
                "id": 44420,
                "role_id": 871,
                "rule_id": 134
              }
            },
            {
              "id": 135,
              "pivot": {
                "id": 44421,
                "role_id": 871,
                "rule_id": 135
              }
            },
            {
              "id": 136,
              "pivot": {
                "id": 44422,
                "role_id": 871,
                "rule_id": 136
              }
            },
            {
              "id": 137,
              "pivot": {
                "id": 44423,
                "role_id": 871,
                "rule_id": 137
              }
            },
            {
              "id": 140,
              "pivot": {
                "id": 44424,
                "role_id": 871,
                "rule_id": 140
              }
            },
            {
              "id": 141,
              "pivot": {
                "id": 44425,
                "role_id": 871,
                "rule_id": 141
              }
            },
            {
              "id": 142,
              "pivot": {
                "id": 44426,
                "role_id": 871,
                "rule_id": 142
              }
            },
            {
              "id": 143,
              "pivot": {
                "id": 44427,
                "role_id": 871,
                "rule_id": 143
              }
            },
            {
              "id": 145,
              "pivot": {
                "id": 44428,
                "role_id": 871,
                "rule_id": 145
              }
            },
            {
              "id": 147,
              "pivot": {
                "id": 44429,
                "role_id": 871,
                "rule_id": 147
              }
            },
            {
              "id": 148,
              "pivot": {
                "id": 44430,
                "role_id": 871,
                "rule_id": 148
              }
            },
            {
              "id": 14,
              "pivot": {
                "id": 44431,
                "role_id": 871,
                "rule_id": 14
              }
            },
            {
              "id": 71,
              "pivot": {
                "id": 44432,
                "role_id": 871,
                "rule_id": 71
              }
            },
            {
              "id": 72,
              "pivot": {
                "id": 44433,
                "role_id": 871,
                "rule_id": 72
              }
            },
            {
              "id": 73,
              "pivot": {
                "id": 44434,
                "role_id": 871,
                "rule_id": 73
              }
            },
            {
              "id": 74,
              "pivot": {
                "id": 44435,
                "role_id": 871,
                "rule_id": 74
              }
            },
            {
              "id": 75,
              "pivot": {
                "id": 44436,
                "role_id": 871,
                "rule_id": 75
              }
            },
            {
              "id": 76,
              "pivot": {
                "id": 44437,
                "role_id": 871,
                "rule_id": 76
              }
            },
            {
              "id": 162,
              "pivot": {
                "id": 44438,
                "role_id": 871,
                "rule_id": 162
              }
            },
            {
              "id": 163,
              "pivot": {
                "id": 44439,
                "role_id": 871,
                "rule_id": 163
              }
            },
            {
              "id": 164,
              "pivot": {
                "id": 44440,
                "role_id": 871,
                "rule_id": 164
              }
            },
            {
              "id": 15,
              "pivot": {
                "id": 44441,
                "role_id": 871,
                "rule_id": 15
              }
            },
            {
              "id": 77,
              "pivot": {
                "id": 44442,
                "role_id": 871,
                "rule_id": 77
              }
            },
            {
              "id": 78,
              "pivot": {
                "id": 44443,
                "role_id": 871,
                "rule_id": 78
              }
            },
            {
              "id": 79,
              "pivot": {
                "id": 44444,
                "role_id": 871,
                "rule_id": 79
              }
            },
            {
              "id": 80,
              "pivot": {
                "id": 44445,
                "role_id": 871,
                "rule_id": 80
              }
            },
            {
              "id": 81,
              "pivot": {
                "id": 44446,
                "role_id": 871,
                "rule_id": 81
              }
            },
            {
              "id": 157,
              "pivot": {
                "id": 44447,
                "role_id": 871,
                "rule_id": 157
              }
            },
            {
              "id": 158,
              "pivot": {
                "id": 44448,
                "role_id": 871,
                "rule_id": 158
              }
            },
            {
              "id": 159,
              "pivot": {
                "id": 44449,
                "role_id": 871,
                "rule_id": 159
              }
            },
            {
              "id": 160,
              "pivot": {
                "id": 44450,
                "role_id": 871,
                "rule_id": 160
              }
            },
            {
              "id": 161,
              "pivot": {
                "id": 44451,
                "role_id": 871,
                "rule_id": 161
              }
            },
            {
              "id": 181,
              "pivot": {
                "id": 44452,
                "role_id": 871,
                "rule_id": 181
              }
            },
            {
              "id": 174,
              "pivot": {
                "id": 44453,
                "role_id": 871,
                "rule_id": 174
              }
            }
          ]
        },
        {
          "id": 847,
          "status": 1,
          "create_time": "2026-09-07 18:50:30",
          "update_time": "2026-09-30 22:47:31",
          "name": "系统管理员",
          "desc": "负责系统参数配置、后台账号与权限管理",
          "rules": [
            {
              "id": 5,
              "pivot": {
                "id": 44123,
                "role_id": 847,
                "rule_id": 5
              }
            },
            {
              "id": 10,
              "pivot": {
                "id": 44124,
                "role_id": 847,
                "rule_id": 10
              }
            },
            {
              "id": 175,
              "pivot": {
                "id": 44126,
                "role_id": 847,
                "rule_id": 175
              }
            },
            {
              "id": 176,
              "pivot": {
                "id": 44127,
                "role_id": 847,
                "rule_id": 176
              }
            },
            {
              "id": 6,
              "pivot": {
                "id": 44128,
                "role_id": 847,
                "rule_id": 6
              }
            },
            {
              "id": 13,
              "pivot": {
                "id": 44129,
                "role_id": 847,
                "rule_id": 13
              }
            },
            {
              "id": 61,
              "pivot": {
                "id": 44130,
                "role_id": 847,
                "rule_id": 61
              }
            },
            {
              "id": 127,
              "pivot": {
                "id": 44131,
                "role_id": 847,
                "rule_id": 127
              }
            },
            {
              "id": 128,
              "pivot": {
                "id": 44132,
                "role_id": 847,
                "rule_id": 128
              }
            },
            {
              "id": 129,
              "pivot": {
                "id": 44133,
                "role_id": 847,
                "rule_id": 129
              }
            },
            {
              "id": 131,
              "pivot": {
                "id": 44134,
                "role_id": 847,
                "rule_id": 131
              }
            },
            {
              "id": 132,
              "pivot": {
                "id": 44135,
                "role_id": 847,
                "rule_id": 132
              }
            },
            {
              "id": 133,
              "pivot": {
                "id": 44136,
                "role_id": 847,
                "rule_id": 133
              }
            },
            {
              "id": 134,
              "pivot": {
                "id": 44137,
                "role_id": 847,
                "rule_id": 134
              }
            },
            {
              "id": 135,
              "pivot": {
                "id": 44138,
                "role_id": 847,
                "rule_id": 135
              }
            },
            {
              "id": 136,
              "pivot": {
                "id": 44139,
                "role_id": 847,
                "rule_id": 136
              }
            },
            {
              "id": 137,
              "pivot": {
                "id": 44140,
                "role_id": 847,
                "rule_id": 137
              }
            },
            {
              "id": 140,
              "pivot": {
                "id": 44141,
                "role_id": 847,
                "rule_id": 140
              }
            },
            {
              "id": 141,
              "pivot": {
                "id": 44142,
                "role_id": 847,
                "rule_id": 141
              }
            },
            {
              "id": 142,
              "pivot": {
                "id": 44143,
                "role_id": 847,
                "rule_id": 142
              }
            },
            {
              "id": 143,
              "pivot": {
                "id": 44144,
                "role_id": 847,
                "rule_id": 143
              }
            },
            {
              "id": 145,
              "pivot": {
                "id": 44145,
                "role_id": 847,
                "rule_id": 145
              }
            },
            {
              "id": 147,
              "pivot": {
                "id": 44146,
                "role_id": 847,
                "rule_id": 147
              }
            },
            {
              "id": 148,
              "pivot": {
                "id": 44147,
                "role_id": 847,
                "rule_id": 148
              }
            },
            {
              "id": 14,
              "pivot": {
                "id": 44148,
                "role_id": 847,
                "rule_id": 14
              }
            },
            {
              "id": 71,
              "pivot": {
                "id": 44149,
                "role_id": 847,
                "rule_id": 71
              }
            },
            {
              "id": 72,
              "pivot": {
                "id": 44150,
                "role_id": 847,
                "rule_id": 72
              }
            },
            {
              "id": 73,
              "pivot": {
                "id": 44151,
                "role_id": 847,
                "rule_id": 73
              }
            },
            {
              "id": 74,
              "pivot": {
                "id": 44152,
                "role_id": 847,
                "rule_id": 74
              }
            },
            {
              "id": 75,
              "pivot": {
                "id": 44153,
                "role_id": 847,
                "rule_id": 75
              }
            },
            {
              "id": 76,
              "pivot": {
                "id": 44154,
                "role_id": 847,
                "rule_id": 76
              }
            },
            {
              "id": 162,
              "pivot": {
                "id": 44155,
                "role_id": 847,
                "rule_id": 162
              }
            },
            {
              "id": 163,
              "pivot": {
                "id": 44156,
                "role_id": 847,
                "rule_id": 163
              }
            },
            {
              "id": 164,
              "pivot": {
                "id": 44157,
                "role_id": 847,
                "rule_id": 164
              }
            },
            {
              "id": 15,
              "pivot": {
                "id": 44158,
                "role_id": 847,
                "rule_id": 15
              }
            },
            {
              "id": 77,
              "pivot": {
                "id": 44159,
                "role_id": 847,
                "rule_id": 77
              }
            },
            {
              "id": 78,
              "pivot": {
                "id": 44160,
                "role_id": 847,
                "rule_id": 78
              }
            },
            {
              "id": 79,
              "pivot": {
                "id": 44161,
                "role_id": 847,
                "rule_id": 79
              }
            },
            {
              "id": 80,
              "pivot": {
                "id": 44162,
                "role_id": 847,
                "rule_id": 80
              }
            },
            {
              "id": 81,
              "pivot": {
                "id": 44163,
                "role_id": 847,
                "rule_id": 81
              }
            },
            {
              "id": 157,
              "pivot": {
                "id": 44164,
                "role_id": 847,
                "rule_id": 157
              }
            },
            {
              "id": 158,
              "pivot": {
                "id": 44165,
                "role_id": 847,
                "rule_id": 158
              }
            },
            {
              "id": 159,
              "pivot": {
                "id": 44166,
                "role_id": 847,
                "rule_id": 159
              }
            },
            {
              "id": 160,
              "pivot": {
                "id": 44167,
                "role_id": 847,
                "rule_id": 160
              }
            },
            {
              "id": 161,
              "pivot": {
                "id": 44168,
                "role_id": 847,
                "rule_id": 161
              }
            },
            {
              "id": 181,
              "pivot": {
                "id": 44169,
                "role_id": 847,
                "rule_id": 181
              }
            },
            {
              "id": 173,
              "pivot": {
                "id": 44170,
                "role_id": 847,
                "rule_id": 173
              }
            },
            {
              "id": 21,
              "pivot": {
                "id": 44171,
                "role_id": 847,
                "rule_id": 21
              }
            },
            {
              "id": 97,
              "pivot": {
                "id": 44172,
                "role_id": 847,
                "rule_id": 97
              }
            },
            {
              "id": 98,
              "pivot": {
                "id": 44173,
                "role_id": 847,
                "rule_id": 98
              }
            },
            {
              "id": 99,
              "pivot": {
                "id": 44174,
                "role_id": 847,
                "rule_id": 99
              }
            },
            {
              "id": 100,
              "pivot": {
                "id": 44175,
                "role_id": 847,
                "rule_id": 100
              }
            },
            {
              "id": 101,
              "pivot": {
                "id": 44176,
                "role_id": 847,
                "rule_id": 101
              }
            },
            {
              "id": 22,
              "pivot": {
                "id": 44177,
                "role_id": 847,
                "rule_id": 22
              }
            },
            {
              "id": 102,
              "pivot": {
                "id": 44178,
                "role_id": 847,
                "rule_id": 102
              }
            },
            {
              "id": 103,
              "pivot": {
                "id": 44179,
                "role_id": 847,
                "rule_id": 103
              }
            },
            {
              "id": 104,
              "pivot": {
                "id": 44180,
                "role_id": 847,
                "rule_id": 104
              }
            },
            {
              "id": 105,
              "pivot": {
                "id": 44181,
                "role_id": 847,
                "rule_id": 105
              }
            },
            {
              "id": 106,
              "pivot": {
                "id": 44182,
                "role_id": 847,
                "rule_id": 106
              }
            },
            {
              "id": 18,
              "pivot": {
                "id": 44183,
                "role_id": 847,
                "rule_id": 18
              }
            },
            {
              "id": 89,
              "pivot": {
                "id": 44184,
                "role_id": 847,
                "rule_id": 89
              }
            },
            {
              "id": 90,
              "pivot": {
                "id": 44185,
                "role_id": 847,
                "rule_id": 90
              }
            },
            {
              "id": 91,
              "pivot": {
                "id": 44186,
                "role_id": 847,
                "rule_id": 91
              }
            },
            {
              "id": 92,
              "pivot": {
                "id": 44187,
                "role_id": 847,
                "rule_id": 92
              }
            },
            {
              "id": 93,
              "pivot": {
                "id": 44188,
                "role_id": 847,
                "rule_id": 93
              }
            },
            {
              "id": 182,
              "pivot": {
                "id": 44189,
                "role_id": 847,
                "rule_id": 182
              }
            },
            {
              "id": 183,
              "pivot": {
                "id": 44190,
                "role_id": 847,
                "rule_id": 183
              }
            },
            {
              "id": 17,
              "pivot": {
                "id": 44191,
                "role_id": 847,
                "rule_id": 17
              }
            },
            {
              "id": 94,
              "pivot": {
                "id": 44192,
                "role_id": 847,
                "rule_id": 94
              }
            },
            {
              "id": 95,
              "pivot": {
                "id": 44193,
                "role_id": 847,
                "rule_id": 95
              }
            },
            {
              "id": 96,
              "pivot": {
                "id": 44194,
                "role_id": 847,
                "rule_id": 96
              }
            },
            {
              "id": 7,
              "pivot": {
                "id": 44195,
                "role_id": 847,
                "rule_id": 7
              }
            },
            {
              "id": 8,
              "pivot": {
                "id": 44196,
                "role_id": 847,
                "rule_id": 8
              }
            },
            {
              "id": 25,
              "pivot": {
                "id": 44197,
                "role_id": 847,
                "rule_id": 25
              }
            },
            {
              "id": 108,
              "pivot": {
                "id": 44198,
                "role_id": 847,
                "rule_id": 108
              }
            },
            {
              "id": 109,
              "pivot": {
                "id": 44199,
                "role_id": 847,
                "rule_id": 109
              }
            },
            {
              "id": 110,
              "pivot": {
                "id": 44200,
                "role_id": 847,
                "rule_id": 110
              }
            },
            {
              "id": 111,
              "pivot": {
                "id": 44201,
                "role_id": 847,
                "rule_id": 111
              }
            },
            {
              "id": 112,
              "pivot": {
                "id": 44202,
                "role_id": 847,
                "rule_id": 112
              }
            },
            {
              "id": 27,
              "pivot": {
                "id": 44203,
                "role_id": 847,
                "rule_id": 27
              }
            },
            {
              "id": 28,
              "pivot": {
                "id": 44204,
                "role_id": 847,
                "rule_id": 28
              }
            },
            {
              "id": 29,
              "pivot": {
                "id": 44205,
                "role_id": 847,
                "rule_id": 29
              }
            },
            {
              "id": 30,
              "pivot": {
                "id": 44206,
                "role_id": 847,
                "rule_id": 30
              }
            },
            {
              "id": 31,
              "pivot": {
                "id": 44207,
                "role_id": 847,
                "rule_id": 31
              }
            },
            {
              "id": 32,
              "pivot": {
                "id": 44208,
                "role_id": 847,
                "rule_id": 32
              }
            },
            {
              "id": 33,
              "pivot": {
                "id": 44209,
                "role_id": 847,
                "rule_id": 33
              }
            },
            {
              "id": 34,
              "pivot": {
                "id": 44210,
                "role_id": 847,
                "rule_id": 34
              }
            },
            {
              "id": 35,
              "pivot": {
                "id": 44211,
                "role_id": 847,
                "rule_id": 35
              }
            },
            {
              "id": 36,
              "pivot": {
                "id": 44212,
                "role_id": 847,
                "rule_id": 36
              }
            },
            {
              "id": 37,
              "pivot": {
                "id": 44213,
                "role_id": 847,
                "rule_id": 37
              }
            },
            {
              "id": 38,
              "pivot": {
                "id": 44214,
                "role_id": 847,
                "rule_id": 38
              }
            },
            {
              "id": 180,
              "pivot": {
                "id": 44215,
                "role_id": 847,
                "rule_id": 180
              }
            },
            {
              "id": 9,
              "pivot": {
                "id": 44216,
                "role_id": 847,
                "rule_id": 9
              }
            },
            {
              "id": 23,
              "pivot": {
                "id": 44217,
                "role_id": 847,
                "rule_id": 23
              }
            },
            {
              "id": 121,
              "pivot": {
                "id": 44218,
                "role_id": 847,
                "rule_id": 121
              }
            },
            {
              "id": 123,
              "pivot": {
                "id": 44219,
                "role_id": 847,
                "rule_id": 123
              }
            },
            {
              "id": 26,
              "pivot": {
                "id": 44220,
                "role_id": 847,
                "rule_id": 26
              }
            },
            {
              "id": 122,
              "pivot": {
                "id": 44221,
                "role_id": 847,
                "rule_id": 122
              }
            },
            {
              "id": 124,
              "pivot": {
                "id": 44222,
                "role_id": 847,
                "rule_id": 124
              }
            },
            {
              "id": 125,
              "pivot": {
                "id": 44223,
                "role_id": 847,
                "rule_id": 125
              }
            },
            {
              "id": 24,
              "pivot": {
                "id": 44224,
                "role_id": 847,
                "rule_id": 24
              }
            },
            {
              "id": 177,
              "pivot": {
                "id": 44225,
                "role_id": 847,
                "rule_id": 177
              }
            },
            {
              "id": 178,
              "pivot": {
                "id": 44226,
                "role_id": 847,
                "rule_id": 178
              }
            },
            {
              "id": 342,
              "pivot": {
                "id": 44227,
                "role_id": 847,
                "rule_id": 342
              }
            },
            {
              "id": 343,
              "pivot": {
                "id": 44228,
                "role_id": 847,
                "rule_id": 343
              }
            },
            {
              "id": 344,
              "pivot": {
                "id": 44229,
                "role_id": 847,
                "rule_id": 344
              }
            },
            {
              "id": 179,
              "pivot": {
                "id": 44230,
                "role_id": 847,
                "rule_id": 179
              }
            },
            {
              "id": 345,
              "pivot": {
                "id": 44231,
                "role_id": 847,
                "rule_id": 345
              }
            },
            {
              "id": 346,
              "pivot": {
                "id": 44232,
                "role_id": 847,
                "rule_id": 346
              }
            },
            {
              "id": 172,
              "pivot": {
                "id": 44233,
                "role_id": 847,
                "rule_id": 172
              }
            },
            {
              "id": 11,
              "pivot": {
                "id": 44234,
                "role_id": 847,
                "rule_id": 11
              }
            },
            {
              "id": 62,
              "pivot": {
                "id": 44235,
                "role_id": 847,
                "rule_id": 62
              }
            },
            {
              "id": 63,
              "pivot": {
                "id": 44236,
                "role_id": 847,
                "rule_id": 63
              }
            },
            {
              "id": 64,
              "pivot": {
                "id": 44237,
                "role_id": 847,
                "rule_id": 64
              }
            },
            {
              "id": 65,
              "pivot": {
                "id": 44238,
                "role_id": 847,
                "rule_id": 65
              }
            },
            {
              "id": 66,
              "pivot": {
                "id": 44239,
                "role_id": 847,
                "rule_id": 66
              }
            },
            {
              "id": 67,
              "pivot": {
                "id": 44240,
                "role_id": 847,
                "rule_id": 67
              }
            },
            {
              "id": 68,
              "pivot": {
                "id": 44241,
                "role_id": 847,
                "rule_id": 68
              }
            },
            {
              "id": 69,
              "pivot": {
                "id": 44242,
                "role_id": 847,
                "rule_id": 69
              }
            },
            {
              "id": 149,
              "pivot": {
                "id": 44243,
                "role_id": 847,
                "rule_id": 149
              }
            },
            {
              "id": 150,
              "pivot": {
                "id": 44244,
                "role_id": 847,
                "rule_id": 150
              }
            },
            {
              "id": 151,
              "pivot": {
                "id": 44245,
                "role_id": 847,
                "rule_id": 151
              }
            },
            {
              "id": 152,
              "pivot": {
                "id": 44246,
                "role_id": 847,
                "rule_id": 152
              }
            },
            {
              "id": 153,
              "pivot": {
                "id": 44247,
                "role_id": 847,
                "rule_id": 153
              }
            }
          ]
        },
        {
          "id": 846,
          "status": 1,
          "create_time": "2026-09-07 18:50:30",
          "update_time": "2026-09-18 15:31:09",
          "name": "分销运营专员",
          "desc": "负责分销渠道拓展、分销政策配置与推广数据分析",
          "rules": [
            {
              "id": 5,
              "pivot": {
                "id": 42357,
                "role_id": 846,
                "rule_id": 5
              }
            },
            {
              "id": 10,
              "pivot": {
                "id": 42358,
                "role_id": 846,
                "rule_id": 10
              }
            },
            {
              "id": 174,
              "pivot": {
                "id": 42359,
                "role_id": 846,
                "rule_id": 174
              }
            },
            {
              "id": 175,
              "pivot": {
                "id": 42360,
                "role_id": 846,
                "rule_id": 175
              }
            },
            {
              "id": 176,
              "pivot": {
                "id": 42361,
                "role_id": 846,
                "rule_id": 176
              }
            },
            {
              "id": 177,
              "pivot": {
                "id": 42362,
                "role_id": 846,
                "rule_id": 177
              }
            },
            {
              "id": 178,
              "pivot": {
                "id": 42363,
                "role_id": 846,
                "rule_id": 178
              }
            },
            {
              "id": 342,
              "pivot": {
                "id": 42364,
                "role_id": 846,
                "rule_id": 342
              }
            },
            {
              "id": 343,
              "pivot": {
                "id": 42365,
                "role_id": 846,
                "rule_id": 343
              }
            },
            {
              "id": 344,
              "pivot": {
                "id": 42366,
                "role_id": 846,
                "rule_id": 344
              }
            },
            {
              "id": 179,
              "pivot": {
                "id": 42367,
                "role_id": 846,
                "rule_id": 179
              }
            },
            {
              "id": 345,
              "pivot": {
                "id": 42368,
                "role_id": 846,
                "rule_id": 345
              }
            },
            {
              "id": 346,
              "pivot": {
                "id": 42369,
                "role_id": 846,
                "rule_id": 346
              }
            }
          ]
        },
        {
          "id": 845,
          "status": 1,
          "create_time": "2026-09-07 18:50:29",
          "update_time": "2026-10-13 16:12:06",
          "name": "仓储物流专员123",
          "desc": "负责订单履约、发货与物流信息跟踪",
          "rules": [
            {
              "id": 10,
              "pivot": {
                "id": 44115,
                "role_id": 845,
                "rule_id": 10
              }
            },
            {
              "id": 176,
              "pivot": {
                "id": 44118,
                "role_id": 845,
                "rule_id": 176
              }
            },
            {
              "id": 5,
              "pivot": {
                "id": 44119,
                "role_id": 845,
                "rule_id": 5
              }
            },
            {
              "id": 175,
              "pivot": {
                "id": 44121,
                "role_id": 845,
                "rule_id": 175
              }
            },
            {
              "id": 174,
              "pivot": {
                "id": 44122,
                "role_id": 845,
                "rule_id": 174
              }
            }
          ]
        },
        {
          "id": 844,
          "status": 1,
          "create_time": "2026-09-07 18:50:29",
          "update_time": "2026-09-28 23:12:23",
          "name": "客服专员",
          "desc": "处理订单售后退款与用户评价，响应用户咨询",
          "rules": [
            {
              "id": 5,
              "pivot": {
                "id": 42320,
                "role_id": 844,
                "rule_id": 5
              }
            },
            {
              "id": 10,
              "pivot": {
                "id": 42321,
                "role_id": 844,
                "rule_id": 10
              }
            },
            {
              "id": 174,
              "pivot": {
                "id": 42322,
                "role_id": 844,
                "rule_id": 174
              }
            },
            {
              "id": 175,
              "pivot": {
                "id": 42323,
                "role_id": 844,
                "rule_id": 175
              }
            },
            {
              "id": 176,
              "pivot": {
                "id": 42324,
                "role_id": 844,
                "rule_id": 176
              }
            },
            {
              "id": 6,
              "pivot": {
                "id": 42325,
                "role_id": 844,
                "rule_id": 6
              }
            },
            {
              "id": 13,
              "pivot": {
                "id": 42326,
                "role_id": 844,
                "rule_id": 13
              }
            },
            {
              "id": 61,
              "pivot": {
                "id": 42327,
                "role_id": 844,
                "rule_id": 61
              }
            },
            {
              "id": 127,
              "pivot": {
                "id": 42328,
                "role_id": 844,
                "rule_id": 127
              }
            },
            {
              "id": 173,
              "pivot": {
                "id": 42329,
                "role_id": 844,
                "rule_id": 173
              }
            },
            {
              "id": 21,
              "pivot": {
                "id": 42330,
                "role_id": 844,
                "rule_id": 21
              }
            },
            {
              "id": 97,
              "pivot": {
                "id": 42331,
                "role_id": 844,
                "rule_id": 97
              }
            },
            {
              "id": 18,
              "pivot": {
                "id": 42333,
                "role_id": 844,
                "rule_id": 18
              }
            },
            {
              "id": 89,
              "pivot": {
                "id": 42334,
                "role_id": 844,
                "rule_id": 89
              }
            },
            {
              "id": 92,
              "pivot": {
                "id": 42335,
                "role_id": 844,
                "rule_id": 92
              }
            },
            {
              "id": 182,
              "pivot": {
                "id": 42336,
                "role_id": 844,
                "rule_id": 182
              }
            },
            {
              "id": 183,
              "pivot": {
                "id": 42337,
                "role_id": 844,
                "rule_id": 183
              }
            },
            {
              "id": 128,
              "pivot": {
                "id": 42718,
                "role_id": 844,
                "rule_id": 128
              }
            },
            {
              "id": 129,
              "pivot": {
                "id": 42719,
                "role_id": 844,
                "rule_id": 129
              }
            },
            {
              "id": 131,
              "pivot": {
                "id": 42720,
                "role_id": 844,
                "rule_id": 131
              }
            },
            {
              "id": 132,
              "pivot": {
                "id": 42721,
                "role_id": 844,
                "rule_id": 132
              }
            },
            {
              "id": 133,
              "pivot": {
                "id": 42722,
                "role_id": 844,
                "rule_id": 133
              }
            },
            {
              "id": 134,
              "pivot": {
                "id": 42723,
                "role_id": 844,
                "rule_id": 134
              }
            },
            {
              "id": 135,
              "pivot": {
                "id": 42724,
                "role_id": 844,
                "rule_id": 135
              }
            },
            {
              "id": 136,
              "pivot": {
                "id": 42725,
                "role_id": 844,
                "rule_id": 136
              }
            },
            {
              "id": 137,
              "pivot": {
                "id": 42726,
                "role_id": 844,
                "rule_id": 137
              }
            },
            {
              "id": 140,
              "pivot": {
                "id": 42727,
                "role_id": 844,
                "rule_id": 140
              }
            },
            {
              "id": 141,
              "pivot": {
                "id": 42728,
                "role_id": 844,
                "rule_id": 141
              }
            },
            {
              "id": 142,
              "pivot": {
                "id": 42729,
                "role_id": 844,
                "rule_id": 142
              }
            },
            {
              "id": 143,
              "pivot": {
                "id": 42730,
                "role_id": 844,
                "rule_id": 143
              }
            },
            {
              "id": 145,
              "pivot": {
                "id": 42731,
                "role_id": 844,
                "rule_id": 145
              }
            },
            {
              "id": 147,
              "pivot": {
                "id": 42732,
                "role_id": 844,
                "rule_id": 147
              }
            },
            {
              "id": 148,
              "pivot": {
                "id": 42733,
                "role_id": 844,
                "rule_id": 148
              }
            },
            {
              "id": 14,
              "pivot": {
                "id": 42734,
                "role_id": 844,
                "rule_id": 14
              }
            },
            {
              "id": 71,
              "pivot": {
                "id": 42735,
                "role_id": 844,
                "rule_id": 71
              }
            },
            {
              "id": 72,
              "pivot": {
                "id": 42736,
                "role_id": 844,
                "rule_id": 72
              }
            },
            {
              "id": 73,
              "pivot": {
                "id": 42737,
                "role_id": 844,
                "rule_id": 73
              }
            },
            {
              "id": 74,
              "pivot": {
                "id": 42738,
                "role_id": 844,
                "rule_id": 74
              }
            },
            {
              "id": 75,
              "pivot": {
                "id": 42739,
                "role_id": 844,
                "rule_id": 75
              }
            },
            {
              "id": 76,
              "pivot": {
                "id": 42740,
                "role_id": 844,
                "rule_id": 76
              }
            },
            {
              "id": 162,
              "pivot": {
                "id": 42741,
                "role_id": 844,
                "rule_id": 162
              }
            },
            {
              "id": 163,
              "pivot": {
                "id": 42742,
                "role_id": 844,
                "rule_id": 163
              }
            },
            {
              "id": 164,
              "pivot": {
                "id": 42743,
                "role_id": 844,
                "rule_id": 164
              }
            },
            {
              "id": 15,
              "pivot": {
                "id": 42744,
                "role_id": 844,
                "rule_id": 15
              }
            },
            {
              "id": 77,
              "pivot": {
                "id": 42745,
                "role_id": 844,
                "rule_id": 77
              }
            },
            {
              "id": 78,
              "pivot": {
                "id": 42746,
                "role_id": 844,
                "rule_id": 78
              }
            },
            {
              "id": 79,
              "pivot": {
                "id": 42747,
                "role_id": 844,
                "rule_id": 79
              }
            },
            {
              "id": 80,
              "pivot": {
                "id": 42748,
                "role_id": 844,
                "rule_id": 80
              }
            },
            {
              "id": 81,
              "pivot": {
                "id": 42749,
                "role_id": 844,
                "rule_id": 81
              }
            },
            {
              "id": 157,
              "pivot": {
                "id": 42750,
                "role_id": 844,
                "rule_id": 157
              }
            },
            {
              "id": 158,
              "pivot": {
                "id": 42751,
                "role_id": 844,
                "rule_id": 158
              }
            },
            {
              "id": 159,
              "pivot": {
                "id": 42752,
                "role_id": 844,
                "rule_id": 159
              }
            },
            {
              "id": 160,
              "pivot": {
                "id": 42753,
                "role_id": 844,
                "rule_id": 160
              }
            },
            {
              "id": 161,
              "pivot": {
                "id": 42754,
                "role_id": 844,
                "rule_id": 161
              }
            },
            {
              "id": 181,
              "pivot": {
                "id": 42755,
                "role_id": 844,
                "rule_id": 181
              }
            },
            {
              "id": 98,
              "pivot": {
                "id": 42756,
                "role_id": 844,
                "rule_id": 98
              }
            },
            {
              "id": 99,
              "pivot": {
                "id": 42757,
                "role_id": 844,
                "rule_id": 99
              }
            },
            {
              "id": 100,
              "pivot": {
                "id": 42758,
                "role_id": 844,
                "rule_id": 100
              }
            },
            {
              "id": 101,
              "pivot": {
                "id": 42759,
                "role_id": 844,
                "rule_id": 101
              }
            },
            {
              "id": 22,
              "pivot": {
                "id": 42760,
                "role_id": 844,
                "rule_id": 22
              }
            },
            {
              "id": 102,
              "pivot": {
                "id": 42761,
                "role_id": 844,
                "rule_id": 102
              }
            },
            {
              "id": 103,
              "pivot": {
                "id": 42762,
                "role_id": 844,
                "rule_id": 103
              }
            },
            {
              "id": 104,
              "pivot": {
                "id": 42763,
                "role_id": 844,
                "rule_id": 104
              }
            },
            {
              "id": 105,
              "pivot": {
                "id": 42764,
                "role_id": 844,
                "rule_id": 105
              }
            },
            {
              "id": 106,
              "pivot": {
                "id": 42765,
                "role_id": 844,
                "rule_id": 106
              }
            },
            {
              "id": 90,
              "pivot": {
                "id": 42766,
                "role_id": 844,
                "rule_id": 90
              }
            },
            {
              "id": 91,
              "pivot": {
                "id": 42767,
                "role_id": 844,
                "rule_id": 91
              }
            },
            {
              "id": 93,
              "pivot": {
                "id": 42768,
                "role_id": 844,
                "rule_id": 93
              }
            },
            {
              "id": 8,
              "pivot": {
                "id": 42769,
                "role_id": 844,
                "rule_id": 8
              }
            },
            {
              "id": 25,
              "pivot": {
                "id": 42770,
                "role_id": 844,
                "rule_id": 25
              }
            },
            {
              "id": 108,
              "pivot": {
                "id": 42771,
                "role_id": 844,
                "rule_id": 108
              }
            },
            {
              "id": 109,
              "pivot": {
                "id": 42772,
                "role_id": 844,
                "rule_id": 109
              }
            },
            {
              "id": 110,
              "pivot": {
                "id": 42773,
                "role_id": 844,
                "rule_id": 110
              }
            },
            {
              "id": 111,
              "pivot": {
                "id": 42774,
                "role_id": 844,
                "rule_id": 111
              }
            },
            {
              "id": 112,
              "pivot": {
                "id": 42775,
                "role_id": 844,
                "rule_id": 112
              }
            },
            {
              "id": 27,
              "pivot": {
                "id": 42776,
                "role_id": 844,
                "rule_id": 27
              }
            },
            {
              "id": 28,
              "pivot": {
                "id": 42777,
                "role_id": 844,
                "rule_id": 28
              }
            },
            {
              "id": 29,
              "pivot": {
                "id": 42778,
                "role_id": 844,
                "rule_id": 29
              }
            },
            {
              "id": 30,
              "pivot": {
                "id": 42779,
                "role_id": 844,
                "rule_id": 30
              }
            },
            {
              "id": 31,
              "pivot": {
                "id": 42780,
                "role_id": 844,
                "rule_id": 31
              }
            },
            {
              "id": 32,
              "pivot": {
                "id": 42781,
                "role_id": 844,
                "rule_id": 32
              }
            },
            {
              "id": 33,
              "pivot": {
                "id": 42782,
                "role_id": 844,
                "rule_id": 33
              }
            },
            {
              "id": 34,
              "pivot": {
                "id": 42783,
                "role_id": 844,
                "rule_id": 34
              }
            },
            {
              "id": 35,
              "pivot": {
                "id": 42784,
                "role_id": 844,
                "rule_id": 35
              }
            },
            {
              "id": 36,
              "pivot": {
                "id": 42785,
                "role_id": 844,
                "rule_id": 36
              }
            },
            {
              "id": 37,
              "pivot": {
                "id": 42786,
                "role_id": 844,
                "rule_id": 37
              }
            },
            {
              "id": 38,
              "pivot": {
                "id": 42787,
                "role_id": 844,
                "rule_id": 38
              }
            },
            {
              "id": 180,
              "pivot": {
                "id": 42788,
                "role_id": 844,
                "rule_id": 180
              }
            },
            {
              "id": 9,
              "pivot": {
                "id": 42789,
                "role_id": 844,
                "rule_id": 9
              }
            },
            {
              "id": 23,
              "pivot": {
                "id": 42790,
                "role_id": 844,
                "rule_id": 23
              }
            },
            {
              "id": 121,
              "pivot": {
                "id": 42791,
                "role_id": 844,
                "rule_id": 121
              }
            },
            {
              "id": 123,
              "pivot": {
                "id": 42792,
                "role_id": 844,
                "rule_id": 123
              }
            },
            {
              "id": 26,
              "pivot": {
                "id": 42793,
                "role_id": 844,
                "rule_id": 26
              }
            },
            {
              "id": 122,
              "pivot": {
                "id": 42794,
                "role_id": 844,
                "rule_id": 122
              }
            },
            {
              "id": 124,
              "pivot": {
                "id": 42795,
                "role_id": 844,
                "rule_id": 124
              }
            },
            {
              "id": 125,
              "pivot": {
                "id": 42796,
                "role_id": 844,
                "rule_id": 125
              }
            },
            {
              "id": 24,
              "pivot": {
                "id": 42797,
                "role_id": 844,
                "rule_id": 24
              }
            },
            {
              "id": 177,
              "pivot": {
                "id": 42798,
                "role_id": 844,
                "rule_id": 177
              }
            },
            {
              "id": 178,
              "pivot": {
                "id": 42799,
                "role_id": 844,
                "rule_id": 178
              }
            },
            {
              "id": 342,
              "pivot": {
                "id": 42800,
                "role_id": 844,
                "rule_id": 342
              }
            },
            {
              "id": 343,
              "pivot": {
                "id": 42801,
                "role_id": 844,
                "rule_id": 343
              }
            },
            {
              "id": 344,
              "pivot": {
                "id": 42802,
                "role_id": 844,
                "rule_id": 344
              }
            },
            {
              "id": 179,
              "pivot": {
                "id": 42803,
                "role_id": 844,
                "rule_id": 179
              }
            },
            {
              "id": 345,
              "pivot": {
                "id": 42804,
                "role_id": 844,
                "rule_id": 345
              }
            },
            {
              "id": 346,
              "pivot": {
                "id": 42805,
                "role_id": 844,
                "rule_id": 346
              }
            },
            {
              "id": 172,
              "pivot": {
                "id": 42806,
                "role_id": 844,
                "rule_id": 172
              }
            },
            {
              "id": 11,
              "pivot": {
                "id": 42807,
                "role_id": 844,
                "rule_id": 11
              }
            },
            {
              "id": 62,
              "pivot": {
                "id": 42808,
                "role_id": 844,
                "rule_id": 62
              }
            },
            {
              "id": 63,
              "pivot": {
                "id": 42809,
                "role_id": 844,
                "rule_id": 63
              }
            },
            {
              "id": 64,
              "pivot": {
                "id": 42810,
                "role_id": 844,
                "rule_id": 64
              }
            },
            {
              "id": 65,
              "pivot": {
                "id": 42811,
                "role_id": 844,
                "rule_id": 65
              }
            },
            {
              "id": 66,
              "pivot": {
                "id": 42812,
                "role_id": 844,
                "rule_id": 66
              }
            },
            {
              "id": 67,
              "pivot": {
                "id": 42813,
                "role_id": 844,
                "rule_id": 67
              }
            },
            {
              "id": 68,
              "pivot": {
                "id": 42814,
                "role_id": 844,
                "rule_id": 68
              }
            },
            {
              "id": 69,
              "pivot": {
                "id": 42815,
                "role_id": 844,
                "rule_id": 69
              }
            },
            {
              "id": 149,
              "pivot": {
                "id": 42816,
                "role_id": 844,
                "rule_id": 149
              }
            },
            {
              "id": 150,
              "pivot": {
                "id": 42817,
                "role_id": 844,
                "rule_id": 150
              }
            },
            {
              "id": 151,
              "pivot": {
                "id": 42818,
                "role_id": 844,
                "rule_id": 151
              }
            },
            {
              "id": 152,
              "pivot": {
                "id": 42819,
                "role_id": 844,
                "rule_id": 152
              }
            },
            {
              "id": 153,
              "pivot": {
                "id": 42820,
                "role_id": 844,
                "rule_id": 153
              }
            }
          ]
        },
        {
          "id": 843,
          "status": 1,
          "create_time": "2026-09-07 18:50:28",
          "update_time": "2026-09-07 18:50:28",
          "name": "商品专员",
          "desc": "负责商品资料录入与维护、分类与图片素材管理",
          "rules": [
            {
              "id": 5,
              "pivot": {
                "id": 42273,
                "role_id": 843,
                "rule_id": 5
              }
            },
            {
              "id": 10,
              "pivot": {
                "id": 42274,
                "role_id": 843,
                "rule_id": 10
              }
            },
            {
              "id": 174,
              "pivot": {
                "id": 42275,
                "role_id": 843,
                "rule_id": 174
              }
            },
            {
              "id": 175,
              "pivot": {
                "id": 42276,
                "role_id": 843,
                "rule_id": 175
              }
            },
            {
              "id": 176,
              "pivot": {
                "id": 42277,
                "role_id": 843,
                "rule_id": 176
              }
            },
            {
              "id": 6,
              "pivot": {
                "id": 42278,
                "role_id": 843,
                "rule_id": 6
              }
            },
            {
              "id": 13,
              "pivot": {
                "id": 42279,
                "role_id": 843,
                "rule_id": 13
              }
            },
            {
              "id": 61,
              "pivot": {
                "id": 42280,
                "role_id": 843,
                "rule_id": 61
              }
            },
            {
              "id": 127,
              "pivot": {
                "id": 42281,
                "role_id": 843,
                "rule_id": 127
              }
            },
            {
              "id": 128,
              "pivot": {
                "id": 42282,
                "role_id": 843,
                "rule_id": 128
              }
            },
            {
              "id": 129,
              "pivot": {
                "id": 42283,
                "role_id": 843,
                "rule_id": 129
              }
            },
            {
              "id": 131,
              "pivot": {
                "id": 42284,
                "role_id": 843,
                "rule_id": 131
              }
            },
            {
              "id": 134,
              "pivot": {
                "id": 42285,
                "role_id": 843,
                "rule_id": 134
              }
            },
            {
              "id": 135,
              "pivot": {
                "id": 42286,
                "role_id": 843,
                "rule_id": 135
              }
            },
            {
              "id": 136,
              "pivot": {
                "id": 42287,
                "role_id": 843,
                "rule_id": 136
              }
            },
            {
              "id": 140,
              "pivot": {
                "id": 42288,
                "role_id": 843,
                "rule_id": 140
              }
            },
            {
              "id": 141,
              "pivot": {
                "id": 42289,
                "role_id": 843,
                "rule_id": 141
              }
            },
            {
              "id": 142,
              "pivot": {
                "id": 42290,
                "role_id": 843,
                "rule_id": 142
              }
            },
            {
              "id": 143,
              "pivot": {
                "id": 42291,
                "role_id": 843,
                "rule_id": 143
              }
            },
            {
              "id": 145,
              "pivot": {
                "id": 42292,
                "role_id": 843,
                "rule_id": 145
              }
            },
            {
              "id": 147,
              "pivot": {
                "id": 42293,
                "role_id": 843,
                "rule_id": 147
              }
            },
            {
              "id": 148,
              "pivot": {
                "id": 42294,
                "role_id": 843,
                "rule_id": 148
              }
            },
            {
              "id": 14,
              "pivot": {
                "id": 42295,
                "role_id": 843,
                "rule_id": 14
              }
            },
            {
              "id": 71,
              "pivot": {
                "id": 42296,
                "role_id": 843,
                "rule_id": 71
              }
            },
            {
              "id": 72,
              "pivot": {
                "id": 42297,
                "role_id": 843,
                "rule_id": 72
              }
            },
            {
              "id": 73,
              "pivot": {
                "id": 42298,
                "role_id": 843,
                "rule_id": 73
              }
            },
            {
              "id": 74,
              "pivot": {
                "id": 42299,
                "role_id": 843,
                "rule_id": 74
              }
            },
            {
              "id": 75,
              "pivot": {
                "id": 42300,
                "role_id": 843,
                "rule_id": 75
              }
            },
            {
              "id": 162,
              "pivot": {
                "id": 42301,
                "role_id": 843,
                "rule_id": 162
              }
            },
            {
              "id": 163,
              "pivot": {
                "id": 42302,
                "role_id": 843,
                "rule_id": 163
              }
            },
            {
              "id": 164,
              "pivot": {
                "id": 42303,
                "role_id": 843,
                "rule_id": 164
              }
            },
            {
              "id": 15,
              "pivot": {
                "id": 42304,
                "role_id": 843,
                "rule_id": 15
              }
            },
            {
              "id": 77,
              "pivot": {
                "id": 42305,
                "role_id": 843,
                "rule_id": 77
              }
            },
            {
              "id": 78,
              "pivot": {
                "id": 42306,
                "role_id": 843,
                "rule_id": 78
              }
            },
            {
              "id": 79,
              "pivot": {
                "id": 42307,
                "role_id": 843,
                "rule_id": 79
              }
            },
            {
              "id": 80,
              "pivot": {
                "id": 42308,
                "role_id": 843,
                "rule_id": 80
              }
            },
            {
              "id": 81,
              "pivot": {
                "id": 42309,
                "role_id": 843,
                "rule_id": 81
              }
            },
            {
              "id": 172,
              "pivot": {
                "id": 42310,
                "role_id": 843,
                "rule_id": 172
              }
            },
            {
              "id": 11,
              "pivot": {
                "id": 42311,
                "role_id": 843,
                "rule_id": 11
              }
            },
            {
              "id": 62,
              "pivot": {
                "id": 42312,
                "role_id": 843,
                "rule_id": 62
              }
            },
            {
              "id": 63,
              "pivot": {
                "id": 42313,
                "role_id": 843,
                "rule_id": 63
              }
            },
            {
              "id": 64,
              "pivot": {
                "id": 42314,
                "role_id": 843,
                "rule_id": 64
              }
            },
            {
              "id": 65,
              "pivot": {
                "id": 42315,
                "role_id": 843,
                "rule_id": 65
              }
            },
            {
              "id": 66,
              "pivot": {
                "id": 42316,
                "role_id": 843,
                "rule_id": 66
              }
            },
            {
              "id": 67,
              "pivot": {
                "id": 42317,
                "role_id": 843,
                "rule_id": 67
              }
            },
            {
              "id": 68,
              "pivot": {
                "id": 42318,
                "role_id": 843,
                "rule_id": 68
              }
            },
            {
              "id": 69,
              "pivot": {
                "id": 42319,
                "role_id": 843,
                "rule_id": 69
              }
            },
            {
              "id": 76,
              "pivot": {
                "id": 44109,
                "role_id": 843,
                "rule_id": 76
              }
            }
          ]
        },
        {
          "id": 842,
          "status": 1,
          "create_time": "2026-09-07 18:50:27",
          "update_time": "2026-10-08 12:45:03",
          "name": "运营经理",
          "desc": "统筹商品、营销与用户运营，负责商品上下架、活动策划与内容发布",
          "rules": [
            {
              "id": 5,
              "pivot": {
                "id": 42198,
                "role_id": 842,
                "rule_id": 5
              }
            },
            {
              "id": 10,
              "pivot": {
                "id": 42199,
                "role_id": 842,
                "rule_id": 10
              }
            },
            {
              "id": 174,
              "pivot": {
                "id": 42200,
                "role_id": 842,
                "rule_id": 174
              }
            },
            {
              "id": 175,
              "pivot": {
                "id": 42201,
                "role_id": 842,
                "rule_id": 175
              }
            },
            {
              "id": 176,
              "pivot": {
                "id": 42202,
                "role_id": 842,
                "rule_id": 176
              }
            },
            {
              "id": 6,
              "pivot": {
                "id": 42203,
                "role_id": 842,
                "rule_id": 6
              }
            },
            {
              "id": 13,
              "pivot": {
                "id": 42204,
                "role_id": 842,
                "rule_id": 13
              }
            },
            {
              "id": 61,
              "pivot": {
                "id": 42205,
                "role_id": 842,
                "rule_id": 61
              }
            },
            {
              "id": 127,
              "pivot": {
                "id": 42206,
                "role_id": 842,
                "rule_id": 127
              }
            },
            {
              "id": 128,
              "pivot": {
                "id": 42207,
                "role_id": 842,
                "rule_id": 128
              }
            },
            {
              "id": 129,
              "pivot": {
                "id": 42208,
                "role_id": 842,
                "rule_id": 129
              }
            },
            {
              "id": 131,
              "pivot": {
                "id": 42209,
                "role_id": 842,
                "rule_id": 131
              }
            },
            {
              "id": 132,
              "pivot": {
                "id": 42210,
                "role_id": 842,
                "rule_id": 132
              }
            },
            {
              "id": 133,
              "pivot": {
                "id": 42211,
                "role_id": 842,
                "rule_id": 133
              }
            },
            {
              "id": 134,
              "pivot": {
                "id": 42212,
                "role_id": 842,
                "rule_id": 134
              }
            },
            {
              "id": 135,
              "pivot": {
                "id": 42213,
                "role_id": 842,
                "rule_id": 135
              }
            },
            {
              "id": 136,
              "pivot": {
                "id": 42214,
                "role_id": 842,
                "rule_id": 136
              }
            },
            {
              "id": 137,
              "pivot": {
                "id": 42215,
                "role_id": 842,
                "rule_id": 137
              }
            },
            {
              "id": 140,
              "pivot": {
                "id": 42216,
                "role_id": 842,
                "rule_id": 140
              }
            },
            {
              "id": 141,
              "pivot": {
                "id": 42217,
                "role_id": 842,
                "rule_id": 141
              }
            },
            {
              "id": 142,
              "pivot": {
                "id": 42218,
                "role_id": 842,
                "rule_id": 142
              }
            },
            {
              "id": 143,
              "pivot": {
                "id": 42219,
                "role_id": 842,
                "rule_id": 143
              }
            },
            {
              "id": 145,
              "pivot": {
                "id": 42220,
                "role_id": 842,
                "rule_id": 145
              }
            },
            {
              "id": 147,
              "pivot": {
                "id": 42221,
                "role_id": 842,
                "rule_id": 147
              }
            },
            {
              "id": 148,
              "pivot": {
                "id": 42222,
                "role_id": 842,
                "rule_id": 148
              }
            },
            {
              "id": 14,
              "pivot": {
                "id": 42223,
                "role_id": 842,
                "rule_id": 14
              }
            },
            {
              "id": 71,
              "pivot": {
                "id": 42224,
                "role_id": 842,
                "rule_id": 71
              }
            },
            {
              "id": 72,
              "pivot": {
                "id": 42225,
                "role_id": 842,
                "rule_id": 72
              }
            },
            {
              "id": 73,
              "pivot": {
                "id": 42226,
                "role_id": 842,
                "rule_id": 73
              }
            },
            {
              "id": 74,
              "pivot": {
                "id": 42227,
                "role_id": 842,
                "rule_id": 74
              }
            },
            {
              "id": 75,
              "pivot": {
                "id": 42228,
                "role_id": 842,
                "rule_id": 75
              }
            },
            {
              "id": 76,
              "pivot": {
                "id": 42229,
                "role_id": 842,
                "rule_id": 76
              }
            },
            {
              "id": 162,
              "pivot": {
                "id": 42230,
                "role_id": 842,
                "rule_id": 162
              }
            },
            {
              "id": 163,
              "pivot": {
                "id": 42231,
                "role_id": 842,
                "rule_id": 163
              }
            },
            {
              "id": 164,
              "pivot": {
                "id": 42232,
                "role_id": 842,
                "rule_id": 164
              }
            },
            {
              "id": 15,
              "pivot": {
                "id": 42233,
                "role_id": 842,
                "rule_id": 15
              }
            },
            {
              "id": 77,
              "pivot": {
                "id": 42234,
                "role_id": 842,
                "rule_id": 77
              }
            },
            {
              "id": 78,
              "pivot": {
                "id": 42235,
                "role_id": 842,
                "rule_id": 78
              }
            },
            {
              "id": 79,
              "pivot": {
                "id": 42236,
                "role_id": 842,
                "rule_id": 79
              }
            },
            {
              "id": 80,
              "pivot": {
                "id": 42237,
                "role_id": 842,
                "rule_id": 80
              }
            },
            {
              "id": 81,
              "pivot": {
                "id": 42238,
                "role_id": 842,
                "rule_id": 81
              }
            },
            {
              "id": 157,
              "pivot": {
                "id": 42239,
                "role_id": 842,
                "rule_id": 157
              }
            },
            {
              "id": 158,
              "pivot": {
                "id": 42240,
                "role_id": 842,
                "rule_id": 158
              }
            },
            {
              "id": 159,
              "pivot": {
                "id": 42241,
                "role_id": 842,
                "rule_id": 159
              }
            },
            {
              "id": 160,
              "pivot": {
                "id": 42242,
                "role_id": 842,
                "rule_id": 160
              }
            },
            {
              "id": 161,
              "pivot": {
                "id": 42243,
                "role_id": 842,
                "rule_id": 161
              }
            },
            {
              "id": 181,
              "pivot": {
                "id": 42244,
                "role_id": 842,
                "rule_id": 181
              }
            },
            {
              "id": 173,
              "pivot": {
                "id": 42245,
                "role_id": 842,
                "rule_id": 173
              }
            },
            {
              "id": 21,
              "pivot": {
                "id": 42246,
                "role_id": 842,
                "rule_id": 21
              }
            },
            {
              "id": 97,
              "pivot": {
                "id": 42247,
                "role_id": 842,
                "rule_id": 97
              }
            },
            {
              "id": 98,
              "pivot": {
                "id": 42248,
                "role_id": 842,
                "rule_id": 98
              }
            },
            {
              "id": 99,
              "pivot": {
                "id": 42249,
                "role_id": 842,
                "rule_id": 99
              }
            },
            {
              "id": 100,
              "pivot": {
                "id": 42250,
                "role_id": 842,
                "rule_id": 100
              }
            },
            {
              "id": 101,
              "pivot": {
                "id": 42251,
                "role_id": 842,
                "rule_id": 101
              }
            },
            {
              "id": 22,
              "pivot": {
                "id": 42252,
                "role_id": 842,
                "rule_id": 22
              }
            },
            {
              "id": 102,
              "pivot": {
                "id": 42253,
                "role_id": 842,
                "rule_id": 102
              }
            },
            {
              "id": 103,
              "pivot": {
                "id": 42254,
                "role_id": 842,
                "rule_id": 103
              }
            },
            {
              "id": 104,
              "pivot": {
                "id": 42255,
                "role_id": 842,
                "rule_id": 104
              }
            },
            {
              "id": 105,
              "pivot": {
                "id": 42256,
                "role_id": 842,
                "rule_id": 105
              }
            },
            {
              "id": 106,
              "pivot": {
                "id": 42257,
                "role_id": 842,
                "rule_id": 106
              }
            },
            {
              "id": 172,
              "pivot": {
                "id": 42258,
                "role_id": 842,
                "rule_id": 172
              }
            },
            {
              "id": 11,
              "pivot": {
                "id": 42259,
                "role_id": 842,
                "rule_id": 11
              }
            },
            {
              "id": 62,
              "pivot": {
                "id": 42260,
                "role_id": 842,
                "rule_id": 62
              }
            },
            {
              "id": 63,
              "pivot": {
                "id": 42261,
                "role_id": 842,
                "rule_id": 63
              }
            },
            {
              "id": 64,
              "pivot": {
                "id": 42262,
                "role_id": 842,
                "rule_id": 64
              }
            },
            {
              "id": 65,
              "pivot": {
                "id": 42263,
                "role_id": 842,
                "rule_id": 65
              }
            },
            {
              "id": 66,
              "pivot": {
                "id": 42264,
                "role_id": 842,
                "rule_id": 66
              }
            },
            {
              "id": 67,
              "pivot": {
                "id": 42265,
                "role_id": 842,
                "rule_id": 67
              }
            },
            {
              "id": 68,
              "pivot": {
                "id": 42266,
                "role_id": 842,
                "rule_id": 68
              }
            },
            {
              "id": 69,
              "pivot": {
                "id": 42267,
                "role_id": 842,
                "rule_id": 69
              }
            },
            {
              "id": 149,
              "pivot": {
                "id": 42268,
                "role_id": 842,
                "rule_id": 149
              }
            },
            {
              "id": 150,
              "pivot": {
                "id": 42269,
                "role_id": 842,
                "rule_id": 150
              }
            },
            {
              "id": 151,
              "pivot": {
                "id": 42270,
                "role_id": 842,
                "rule_id": 151
              }
            },
            {
              "id": 152,
              "pivot": {
                "id": 42271,
                "role_id": 842,
                "rule_id": 152
              }
            },
            {
              "id": 153,
              "pivot": {
                "id": 42272,
                "role_id": 842,
                "rule_id": 153
              }
            }
          ]
        },
        {
          "id": 839,
          "status": 1,
          "create_time": "2026-09-01 08:42:20",
          "update_time": "2026-09-03 22:51:11",
          "name": "8546135",
          "desc": "4753",
          "rules": [
            {
              "id": 5,
              "pivot": {
                "id": 41958,
                "role_id": 839,
                "rule_id": 5
              }
            },
            {
              "id": 10,
              "pivot": {
                "id": 41959,
                "role_id": 839,
                "rule_id": 10
              }
            },
            {
              "id": 176,
              "pivot": {
                "id": 41962,
                "role_id": 839,
                "rule_id": 176
              }
            },
            {
              "id": 175,
              "pivot": {
                "id": 42031,
                "role_id": 839,
                "rule_id": 175
              }
            },
            {
              "id": 174,
              "pivot": {
                "id": 42051,
                "role_id": 839,
                "rule_id": 174
              }
            },
            {
              "id": 91,
              "pivot": {
                "id": 42116,
                "role_id": 839,
                "rule_id": 91
              }
            },
            {
              "id": 92,
              "pivot": {
                "id": 42117,
                "role_id": 839,
                "rule_id": 92
              }
            },
            {
              "id": 93,
              "pivot": {
                "id": 42118,
                "role_id": 839,
                "rule_id": 93
              }
            },
            {
              "id": 182,
              "pivot": {
                "id": 42119,
                "role_id": 839,
                "rule_id": 182
              }
            },
            {
              "id": 183,
              "pivot": {
                "id": 42120,
                "role_id": 839,
                "rule_id": 183
              }
            },
            {
              "id": 17,
              "pivot": {
                "id": 42121,
                "role_id": 839,
                "rule_id": 17
              }
            },
            {
              "id": 94,
              "pivot": {
                "id": 42122,
                "role_id": 839,
                "rule_id": 94
              }
            },
            {
              "id": 95,
              "pivot": {
                "id": 42123,
                "role_id": 839,
                "rule_id": 95
              }
            },
            {
              "id": 96,
              "pivot": {
                "id": 42124,
                "role_id": 839,
                "rule_id": 96
              }
            },
            {
              "id": 18,
              "pivot": {
                "id": 42125,
                "role_id": 839,
                "rule_id": 18
              }
            },
            {
              "id": 7,
              "pivot": {
                "id": 42126,
                "role_id": 839,
                "rule_id": 7
              }
            },
            {
              "id": 89,
              "pivot": {
                "id": 42445,
                "role_id": 839,
                "rule_id": 89
              }
            },
            {
              "id": 90,
              "pivot": {
                "id": 42446,
                "role_id": 839,
                "rule_id": 90
              }
            },
            {
              "id": 128,
              "pivot": {
                "id": 42447,
                "role_id": 839,
                "rule_id": 128
              }
            },
            {
              "id": 129,
              "pivot": {
                "id": 42448,
                "role_id": 839,
                "rule_id": 129
              }
            },
            {
              "id": 131,
              "pivot": {
                "id": 42449,
                "role_id": 839,
                "rule_id": 131
              }
            },
            {
              "id": 132,
              "pivot": {
                "id": 42450,
                "role_id": 839,
                "rule_id": 132
              }
            },
            {
              "id": 133,
              "pivot": {
                "id": 42451,
                "role_id": 839,
                "rule_id": 133
              }
            },
            {
              "id": 134,
              "pivot": {
                "id": 42452,
                "role_id": 839,
                "rule_id": 134
              }
            },
            {
              "id": 135,
              "pivot": {
                "id": 42453,
                "role_id": 839,
                "rule_id": 135
              }
            },
            {
              "id": 136,
              "pivot": {
                "id": 42454,
                "role_id": 839,
                "rule_id": 136
              }
            },
            {
              "id": 137,
              "pivot": {
                "id": 42455,
                "role_id": 839,
                "rule_id": 137
              }
            },
            {
              "id": 140,
              "pivot": {
                "id": 42456,
                "role_id": 839,
                "rule_id": 140
              }
            },
            {
              "id": 141,
              "pivot": {
                "id": 42457,
                "role_id": 839,
                "rule_id": 141
              }
            },
            {
              "id": 142,
              "pivot": {
                "id": 42458,
                "role_id": 839,
                "rule_id": 142
              }
            },
            {
              "id": 143,
              "pivot": {
                "id": 42459,
                "role_id": 839,
                "rule_id": 143
              }
            },
            {
              "id": 145,
              "pivot": {
                "id": 42460,
                "role_id": 839,
                "rule_id": 145
              }
            },
            {
              "id": 147,
              "pivot": {
                "id": 42461,
                "role_id": 839,
                "rule_id": 147
              }
            },
            {
              "id": 148,
              "pivot": {
                "id": 42462,
                "role_id": 839,
                "rule_id": 148
              }
            },
            {
              "id": 14,
              "pivot": {
                "id": 42463,
                "role_id": 839,
                "rule_id": 14
              }
            },
            {
              "id": 71,
              "pivot": {
                "id": 42464,
                "role_id": 839,
                "rule_id": 71
              }
            },
            {
              "id": 72,
              "pivot": {
                "id": 42465,
                "role_id": 839,
                "rule_id": 72
              }
            },
            {
              "id": 73,
              "pivot": {
                "id": 42466,
                "role_id": 839,
                "rule_id": 73
              }
            },
            {
              "id": 74,
              "pivot": {
                "id": 42467,
                "role_id": 839,
                "rule_id": 74
              }
            },
            {
              "id": 75,
              "pivot": {
                "id": 42468,
                "role_id": 839,
                "rule_id": 75
              }
            },
            {
              "id": 76,
              "pivot": {
                "id": 42469,
                "role_id": 839,
                "rule_id": 76
              }
            },
            {
              "id": 162,
              "pivot": {
                "id": 42470,
                "role_id": 839,
                "rule_id": 162
              }
            },
            {
              "id": 163,
              "pivot": {
                "id": 42471,
                "role_id": 839,
                "rule_id": 163
              }
            },
            {
              "id": 164,
              "pivot": {
                "id": 42472,
                "role_id": 839,
                "rule_id": 164
              }
            },
            {
              "id": 15,
              "pivot": {
                "id": 42473,
                "role_id": 839,
                "rule_id": 15
              }
            },
            {
              "id": 77,
              "pivot": {
                "id": 42474,
                "role_id": 839,
                "rule_id": 77
              }
            },
            {
              "id": 78,
              "pivot": {
                "id": 42475,
                "role_id": 839,
                "rule_id": 78
              }
            },
            {
              "id": 79,
              "pivot": {
                "id": 42476,
                "role_id": 839,
                "rule_id": 79
              }
            },
            {
              "id": 80,
              "pivot": {
                "id": 42477,
                "role_id": 839,
                "rule_id": 80
              }
            },
            {
              "id": 81,
              "pivot": {
                "id": 42478,
                "role_id": 839,
                "rule_id": 81
              }
            },
            {
              "id": 157,
              "pivot": {
                "id": 42479,
                "role_id": 839,
                "rule_id": 157
              }
            },
            {
              "id": 158,
              "pivot": {
                "id": 42480,
                "role_id": 839,
                "rule_id": 158
              }
            },
            {
              "id": 159,
              "pivot": {
                "id": 42481,
                "role_id": 839,
                "rule_id": 159
              }
            },
            {
              "id": 160,
              "pivot": {
                "id": 42482,
                "role_id": 839,
                "rule_id": 160
              }
            },
            {
              "id": 161,
              "pivot": {
                "id": 42483,
                "role_id": 839,
                "rule_id": 161
              }
            },
            {
              "id": 181,
              "pivot": {
                "id": 42484,
                "role_id": 839,
                "rule_id": 181
              }
            },
            {
              "id": 13,
              "pivot": {
                "id": 42485,
                "role_id": 839,
                "rule_id": 13
              }
            },
            {
              "id": 6,
              "pivot": {
                "id": 42486,
                "role_id": 839,
                "rule_id": 6
              }
            }
          ]
        },
        {
          "id": 759,
          "status": 0,
          "create_time": "2026-06-11 16:48:00",
          "update_time": "2026-10-11 15:01:06",
          "name": "哈基米",
          "desc": "哈基米南北绿豆\n",
          "rules": [
            {
              "id": 15,
              "pivot": {
                "id": 42511,
                "role_id": 759,
                "rule_id": 15
              }
            },
            {
              "id": 77,
              "pivot": {
                "id": 42512,
                "role_id": 759,
                "rule_id": 77
              }
            },
            {
              "id": 78,
              "pivot": {
                "id": 42513,
                "role_id": 759,
                "rule_id": 78
              }
            },
            {
              "id": 79,
              "pivot": {
                "id": 42514,
                "role_id": 759,
                "rule_id": 79
              }
            },
            {
              "id": 80,
              "pivot": {
                "id": 42515,
                "role_id": 759,
                "rule_id": 80
              }
            },
            {
              "id": 81,
              "pivot": {
                "id": 42516,
                "role_id": 759,
                "rule_id": 81
              }
            }
          ]
        },
        {
          "id": 38,
          "status": 1,
          "create_time": "2021-12-19 03:47:51",
          "update_time": "2026-08-28 14:44:56",
          "name": "供应商22",
          "desc": "供应商121\n",
          "rules": [
            {
              "id": 5,
              "pivot": {
                "id": 35291,
                "role_id": 38,
                "rule_id": 5
              }
            },
            {
              "id": 10,
              "pivot": {
                "id": 35292,
                "role_id": 38,
                "rule_id": 10
              }
            },
            {
              "id": 174,
              "pivot": {
                "id": 35506,
                "role_id": 38,
                "rule_id": 174
              }
            },
            {
              "id": 176,
              "pivot": {
                "id": 35744,
                "role_id": 38,
                "rule_id": 176
              }
            },
            {
              "id": 13,
              "pivot": {
                "id": 37609,
                "role_id": 38,
                "rule_id": 13
              }
            },
            {
              "id": 61,
              "pivot": {
                "id": 37610,
                "role_id": 38,
                "rule_id": 61
              }
            },
            {
              "id": 127,
              "pivot": {
                "id": 37611,
                "role_id": 38,
                "rule_id": 127
              }
            },
            {
              "id": 128,
              "pivot": {
                "id": 37612,
                "role_id": 38,
                "rule_id": 128
              }
            },
            {
              "id": 129,
              "pivot": {
                "id": 37613,
                "role_id": 38,
                "rule_id": 129
              }
            },
            {
              "id": 131,
              "pivot": {
                "id": 37614,
                "role_id": 38,
                "rule_id": 131
              }
            },
            {
              "id": 132,
              "pivot": {
                "id": 37615,
                "role_id": 38,
                "rule_id": 132
              }
            },
            {
              "id": 133,
              "pivot": {
                "id": 37616,
                "role_id": 38,
                "rule_id": 133
              }
            },
            {
              "id": 134,
              "pivot": {
                "id": 37617,
                "role_id": 38,
                "rule_id": 134
              }
            },
            {
              "id": 135,
              "pivot": {
                "id": 37618,
                "role_id": 38,
                "rule_id": 135
              }
            },
            {
              "id": 136,
              "pivot": {
                "id": 37619,
                "role_id": 38,
                "rule_id": 136
              }
            },
            {
              "id": 137,
              "pivot": {
                "id": 37620,
                "role_id": 38,
                "rule_id": 137
              }
            },
            {
              "id": 140,
              "pivot": {
                "id": 37621,
                "role_id": 38,
                "rule_id": 140
              }
            },
            {
              "id": 141,
              "pivot": {
                "id": 37622,
                "role_id": 38,
                "rule_id": 141
              }
            },
            {
              "id": 142,
              "pivot": {
                "id": 37623,
                "role_id": 38,
                "rule_id": 142
              }
            },
            {
              "id": 143,
              "pivot": {
                "id": 37624,
                "role_id": 38,
                "rule_id": 143
              }
            },
            {
              "id": 145,
              "pivot": {
                "id": 37625,
                "role_id": 38,
                "rule_id": 145
              }
            },
            {
              "id": 147,
              "pivot": {
                "id": 37626,
                "role_id": 38,
                "rule_id": 147
              }
            },
            {
              "id": 148,
              "pivot": {
                "id": 37627,
                "role_id": 38,
                "rule_id": 148
              }
            },
            {
              "id": 15,
              "pivot": {
                "id": 37628,
                "role_id": 38,
                "rule_id": 15
              }
            },
            {
              "id": 77,
              "pivot": {
                "id": 37629,
                "role_id": 38,
                "rule_id": 77
              }
            },
            {
              "id": 78,
              "pivot": {
                "id": 37630,
                "role_id": 38,
                "rule_id": 78
              }
            },
            {
              "id": 79,
              "pivot": {
                "id": 37631,
                "role_id": 38,
                "rule_id": 79
              }
            },
            {
              "id": 80,
              "pivot": {
                "id": 37632,
                "role_id": 38,
                "rule_id": 80
              }
            },
            {
              "id": 81,
              "pivot": {
                "id": 37633,
                "role_id": 38,
                "rule_id": 81
              }
            },
            {
              "id": 157,
              "pivot": {
                "id": 37634,
                "role_id": 38,
                "rule_id": 157
              }
            },
            {
              "id": 158,
              "pivot": {
                "id": 37635,
                "role_id": 38,
                "rule_id": 158
              }
            },
            {
              "id": 159,
              "pivot": {
                "id": 37636,
                "role_id": 38,
                "rule_id": 159
              }
            },
            {
              "id": 160,
              "pivot": {
                "id": 37637,
                "role_id": 38,
                "rule_id": 160
              }
            },
            {
              "id": 161,
              "pivot": {
                "id": 37638,
                "role_id": 38,
                "rule_id": 161
              }
            },
            {
              "id": 181,
              "pivot": {
                "id": 37639,
                "role_id": 38,
                "rule_id": 181
              }
            },
            {
              "id": 6,
              "pivot": {
                "id": 37640,
                "role_id": 38,
                "rule_id": 6
              }
            },
            {
              "id": 175,
              "pivot": {
                "id": 37641,
                "role_id": 38,
                "rule_id": 175
              }
            }
          ]
        },
        {
          "id": 36,
          "status": 0,
          "create_time": "2021-04-01 08:49:38",
          "update_time": "2026-09-03 22:51:27",
          "name": "普通员工",
          "desc": "普通",
          "rules": [
            {
              "id": 6,
              "pivot": {
                "id": 12755,
                "role_id": 36,
                "rule_id": 6
              }
            },
            {
              "id": 13,
              "pivot": {
                "id": 12756,
                "role_id": 36,
                "rule_id": 13
              }
            },
            {
              "id": 61,
              "pivot": {
                "id": 12757,
                "role_id": 36,
                "rule_id": 61
              }
            },
            {
              "id": 14,
              "pivot": {
                "id": 12775,
                "role_id": 36,
                "rule_id": 14
              }
            },
            {
              "id": 71,
              "pivot": {
                "id": 12776,
                "role_id": 36,
                "rule_id": 71
              }
            },
            {
              "id": 72,
              "pivot": {
                "id": 12777,
                "role_id": 36,
                "rule_id": 72
              }
            },
            {
              "id": 73,
              "pivot": {
                "id": 12778,
                "role_id": 36,
                "rule_id": 73
              }
            },
            {
              "id": 74,
              "pivot": {
                "id": 12779,
                "role_id": 36,
                "rule_id": 74
              }
            },
            {
              "id": 75,
              "pivot": {
                "id": 12780,
                "role_id": 36,
                "rule_id": 75
              }
            },
            {
              "id": 76,
              "pivot": {
                "id": 12781,
                "role_id": 36,
                "rule_id": 76
              }
            },
            {
              "id": 162,
              "pivot": {
                "id": 12782,
                "role_id": 36,
                "rule_id": 162
              }
            },
            {
              "id": 163,
              "pivot": {
                "id": 12783,
                "role_id": 36,
                "rule_id": 163
              }
            },
            {
              "id": 164,
              "pivot": {
                "id": 12784,
                "role_id": 36,
                "rule_id": 164
              }
            },
            {
              "id": 172,
              "pivot": {
                "id": 15282,
                "role_id": 36,
                "rule_id": 172
              }
            },
            {
              "id": 11,
              "pivot": {
                "id": 15283,
                "role_id": 36,
                "rule_id": 11
              }
            },
            {
              "id": 62,
              "pivot": {
                "id": 15284,
                "role_id": 36,
                "rule_id": 62
              }
            },
            {
              "id": 63,
              "pivot": {
                "id": 15285,
                "role_id": 36,
                "rule_id": 63
              }
            },
            {
              "id": 64,
              "pivot": {
                "id": 15286,
                "role_id": 36,
                "rule_id": 64
              }
            },
            {
              "id": 65,
              "pivot": {
                "id": 15287,
                "role_id": 36,
                "rule_id": 65
              }
            },
            {
              "id": 66,
              "pivot": {
                "id": 15288,
                "role_id": 36,
                "rule_id": 66
              }
            },
            {
              "id": 67,
              "pivot": {
                "id": 15289,
                "role_id": 36,
                "rule_id": 67
              }
            },
            {
              "id": 68,
              "pivot": {
                "id": 15290,
                "role_id": 36,
                "rule_id": 68
              }
            },
            {
              "id": 69,
              "pivot": {
                "id": 15291,
                "role_id": 36,
                "rule_id": 69
              }
            },
            {
              "id": 149,
              "pivot": {
                "id": 15292,
                "role_id": 36,
                "rule_id": 149
              }
            },
            {
              "id": 150,
              "pivot": {
                "id": 15293,
                "role_id": 36,
                "rule_id": 150
              }
            },
            {
              "id": 151,
              "pivot": {
                "id": 15294,
                "role_id": 36,
                "rule_id": 151
              }
            },
            {
              "id": 152,
              "pivot": {
                "id": 15295,
                "role_id": 36,
                "rule_id": 152
              }
            },
            {
              "id": 153,
              "pivot": {
                "id": 15296,
                "role_id": 36,
                "rule_id": 153
              }
            },
            {
              "id": 127,
              "pivot": {
                "id": 30915,
                "role_id": 36,
                "rule_id": 127
              }
            },
            {
              "id": 128,
              "pivot": {
                "id": 30916,
                "role_id": 36,
                "rule_id": 128
              }
            },
            {
              "id": 129,
              "pivot": {
                "id": 30917,
                "role_id": 36,
                "rule_id": 129
              }
            },
            {
              "id": 131,
              "pivot": {
                "id": 30918,
                "role_id": 36,
                "rule_id": 131
              }
            },
            {
              "id": 132,
              "pivot": {
                "id": 30919,
                "role_id": 36,
                "rule_id": 132
              }
            },
            {
              "id": 133,
              "pivot": {
                "id": 30920,
                "role_id": 36,
                "rule_id": 133
              }
            },
            {
              "id": 134,
              "pivot": {
                "id": 30921,
                "role_id": 36,
                "rule_id": 134
              }
            },
            {
              "id": 135,
              "pivot": {
                "id": 30922,
                "role_id": 36,
                "rule_id": 135
              }
            },
            {
              "id": 136,
              "pivot": {
                "id": 30923,
                "role_id": 36,
                "rule_id": 136
              }
            },
            {
              "id": 137,
              "pivot": {
                "id": 30924,
                "role_id": 36,
                "rule_id": 137
              }
            },
            {
              "id": 140,
              "pivot": {
                "id": 30925,
                "role_id": 36,
                "rule_id": 140
              }
            },
            {
              "id": 141,
              "pivot": {
                "id": 30926,
                "role_id": 36,
                "rule_id": 141
              }
            },
            {
              "id": 142,
              "pivot": {
                "id": 30927,
                "role_id": 36,
                "rule_id": 142
              }
            },
            {
              "id": 143,
              "pivot": {
                "id": 30928,
                "role_id": 36,
                "rule_id": 143
              }
            },
            {
              "id": 145,
              "pivot": {
                "id": 30929,
                "role_id": 36,
                "rule_id": 145
              }
            },
            {
              "id": 147,
              "pivot": {
                "id": 30930,
                "role_id": 36,
                "rule_id": 147
              }
            },
            {
              "id": 148,
              "pivot": {
                "id": 30931,
                "role_id": 36,
                "rule_id": 148
              }
            },
            {
              "id": 177,
              "pivot": {
                "id": 30932,
                "role_id": 36,
                "rule_id": 177
              }
            },
            {
              "id": 178,
              "pivot": {
                "id": 30933,
                "role_id": 36,
                "rule_id": 178
              }
            },
            {
              "id": 342,
              "pivot": {
                "id": 30934,
                "role_id": 36,
                "rule_id": 342
              }
            },
            {
              "id": 343,
              "pivot": {
                "id": 30935,
                "role_id": 36,
                "rule_id": 343
              }
            },
            {
              "id": 344,
              "pivot": {
                "id": 30936,
                "role_id": 36,
                "rule_id": 344
              }
            },
            {
              "id": 179,
              "pivot": {
                "id": 30937,
                "role_id": 36,
                "rule_id": 179
              }
            },
            {
              "id": 345,
              "pivot": {
                "id": 30938,
                "role_id": 36,
                "rule_id": 345
              }
            },
            {
              "id": 346,
              "pivot": {
                "id": 30939,
                "role_id": 36,
                "rule_id": 346
              }
            },
            {
              "id": 5,
              "pivot": {
                "id": 32469,
                "role_id": 36,
                "rule_id": 5
              }
            },
            {
              "id": 10,
              "pivot": {
                "id": 32470,
                "role_id": 36,
                "rule_id": 10
              }
            },
            {
              "id": 174,
              "pivot": {
                "id": 32471,
                "role_id": 36,
                "rule_id": 174
              }
            },
            {
              "id": 173,
              "pivot": {
                "id": 32475,
                "role_id": 36,
                "rule_id": 173
              }
            },
            {
              "id": 21,
              "pivot": {
                "id": 32476,
                "role_id": 36,
                "rule_id": 21
              }
            },
            {
              "id": 97,
              "pivot": {
                "id": 32477,
                "role_id": 36,
                "rule_id": 97
              }
            },
            {
              "id": 98,
              "pivot": {
                "id": 32478,
                "role_id": 36,
                "rule_id": 98
              }
            },
            {
              "id": 99,
              "pivot": {
                "id": 32479,
                "role_id": 36,
                "rule_id": 99
              }
            },
            {
              "id": 100,
              "pivot": {
                "id": 32480,
                "role_id": 36,
                "rule_id": 100
              }
            },
            {
              "id": 101,
              "pivot": {
                "id": 32481,
                "role_id": 36,
                "rule_id": 101
              }
            },
            {
              "id": 22,
              "pivot": {
                "id": 32482,
                "role_id": 36,
                "rule_id": 22
              }
            },
            {
              "id": 102,
              "pivot": {
                "id": 32483,
                "role_id": 36,
                "rule_id": 102
              }
            },
            {
              "id": 103,
              "pivot": {
                "id": 32484,
                "role_id": 36,
                "rule_id": 103
              }
            },
            {
              "id": 104,
              "pivot": {
                "id": 32485,
                "role_id": 36,
                "rule_id": 104
              }
            },
            {
              "id": 105,
              "pivot": {
                "id": 32486,
                "role_id": 36,
                "rule_id": 105
              }
            },
            {
              "id": 106,
              "pivot": {
                "id": 32487,
                "role_id": 36,
                "rule_id": 106
              }
            },
            {
              "id": 7,
              "pivot": {
                "id": 32488,
                "role_id": 36,
                "rule_id": 7
              }
            },
            {
              "id": 18,
              "pivot": {
                "id": 32489,
                "role_id": 36,
                "rule_id": 18
              }
            },
            {
              "id": 89,
              "pivot": {
                "id": 32490,
                "role_id": 36,
                "rule_id": 89
              }
            },
            {
              "id": 90,
              "pivot": {
                "id": 32491,
                "role_id": 36,
                "rule_id": 90
              }
            },
            {
              "id": 91,
              "pivot": {
                "id": 32492,
                "role_id": 36,
                "rule_id": 91
              }
            },
            {
              "id": 92,
              "pivot": {
                "id": 32493,
                "role_id": 36,
                "rule_id": 92
              }
            },
            {
              "id": 93,
              "pivot": {
                "id": 32494,
                "role_id": 36,
                "rule_id": 93
              }
            },
            {
              "id": 182,
              "pivot": {
                "id": 32495,
                "role_id": 36,
                "rule_id": 182
              }
            },
            {
              "id": 183,
              "pivot": {
                "id": 32496,
                "role_id": 36,
                "rule_id": 183
              }
            },
            {
              "id": 17,
              "pivot": {
                "id": 32497,
                "role_id": 36,
                "rule_id": 17
              }
            },
            {
              "id": 94,
              "pivot": {
                "id": 32498,
                "role_id": 36,
                "rule_id": 94
              }
            },
            {
              "id": 95,
              "pivot": {
                "id": 32499,
                "role_id": 36,
                "rule_id": 95
              }
            },
            {
              "id": 96,
              "pivot": {
                "id": 32500,
                "role_id": 36,
                "rule_id": 96
              }
            },
            {
              "id": 9,
              "pivot": {
                "id": 32501,
                "role_id": 36,
                "rule_id": 9
              }
            },
            {
              "id": 23,
              "pivot": {
                "id": 32502,
                "role_id": 36,
                "rule_id": 23
              }
            },
            {
              "id": 121,
              "pivot": {
                "id": 32503,
                "role_id": 36,
                "rule_id": 121
              }
            },
            {
              "id": 123,
              "pivot": {
                "id": 32504,
                "role_id": 36,
                "rule_id": 123
              }
            },
            {
              "id": 26,
              "pivot": {
                "id": 32505,
                "role_id": 36,
                "rule_id": 26
              }
            },
            {
              "id": 122,
              "pivot": {
                "id": 32506,
                "role_id": 36,
                "rule_id": 122
              }
            },
            {
              "id": 124,
              "pivot": {
                "id": 32507,
                "role_id": 36,
                "rule_id": 124
              }
            },
            {
              "id": 125,
              "pivot": {
                "id": 32508,
                "role_id": 36,
                "rule_id": 125
              }
            },
            {
              "id": 24,
              "pivot": {
                "id": 32509,
                "role_id": 36,
                "rule_id": 24
              }
            },
            {
              "id": 175,
              "pivot": {
                "id": 35335,
                "role_id": 36,
                "rule_id": 175
              }
            },
            {
              "id": 176,
              "pivot": {
                "id": 41642,
                "role_id": 36,
                "rule_id": 176
              }
            }
          ]
        },
        {
          "id": 35,
          "status": 0,
          "create_time": "2020-11-30 13:40:43",
          "update_time": "2026-08-28 14:47:19",
          "name": "倡议成员单位",
          "desc": "倡议成员单位",
          "rules": [
            {
              "id": 7,
              "pivot": {
                "id": 40447,
                "role_id": 35,
                "rule_id": 7
              }
            },
            {
              "id": 18,
              "pivot": {
                "id": 40448,
                "role_id": 35,
                "rule_id": 18
              }
            },
            {
              "id": 89,
              "pivot": {
                "id": 40449,
                "role_id": 35,
                "rule_id": 89
              }
            },
            {
              "id": 90,
              "pivot": {
                "id": 40450,
                "role_id": 35,
                "rule_id": 90
              }
            },
            {
              "id": 91,
              "pivot": {
                "id": 40451,
                "role_id": 35,
                "rule_id": 91
              }
            },
            {
              "id": 92,
              "pivot": {
                "id": 40452,
                "role_id": 35,
                "rule_id": 92
              }
            },
            {
              "id": 93,
              "pivot": {
                "id": 40453,
                "role_id": 35,
                "rule_id": 93
              }
            },
            {
              "id": 182,
              "pivot": {
                "id": 40454,
                "role_id": 35,
                "rule_id": 182
              }
            },
            {
              "id": 183,
              "pivot": {
                "id": 40455,
                "role_id": 35,
                "rule_id": 183
              }
            },
            {
              "id": 17,
              "pivot": {
                "id": 40456,
                "role_id": 35,
                "rule_id": 17
              }
            },
            {
              "id": 94,
              "pivot": {
                "id": 40457,
                "role_id": 35,
                "rule_id": 94
              }
            },
            {
              "id": 95,
              "pivot": {
                "id": 40458,
                "role_id": 35,
                "rule_id": 95
              }
            },
            {
              "id": 96,
              "pivot": {
                "id": 40459,
                "role_id": 35,
                "rule_id": 96
              }
            },
            {
              "id": 8,
              "pivot": {
                "id": 40460,
                "role_id": 35,
                "rule_id": 8
              }
            },
            {
              "id": 25,
              "pivot": {
                "id": 40461,
                "role_id": 35,
                "rule_id": 25
              }
            },
            {
              "id": 108,
              "pivot": {
                "id": 40462,
                "role_id": 35,
                "rule_id": 108
              }
            },
            {
              "id": 109,
              "pivot": {
                "id": 40463,
                "role_id": 35,
                "rule_id": 109
              }
            },
            {
              "id": 110,
              "pivot": {
                "id": 40464,
                "role_id": 35,
                "rule_id": 110
              }
            },
            {
              "id": 111,
              "pivot": {
                "id": 40465,
                "role_id": 35,
                "rule_id": 111
              }
            },
            {
              "id": 112,
              "pivot": {
                "id": 40466,
                "role_id": 35,
                "rule_id": 112
              }
            },
            {
              "id": 27,
              "pivot": {
                "id": 40467,
                "role_id": 35,
                "rule_id": 27
              }
            },
            {
              "id": 28,
              "pivot": {
                "id": 40468,
                "role_id": 35,
                "rule_id": 28
              }
            },
            {
              "id": 29,
              "pivot": {
                "id": 40469,
                "role_id": 35,
                "rule_id": 29
              }
            },
            {
              "id": 30,
              "pivot": {
                "id": 40470,
                "role_id": 35,
                "rule_id": 30
              }
            },
            {
              "id": 31,
              "pivot": {
                "id": 40471,
                "role_id": 35,
                "rule_id": 31
              }
            },
            {
              "id": 32,
              "pivot": {
                "id": 40472,
                "role_id": 35,
                "rule_id": 32
              }
            },
            {
              "id": 33,
              "pivot": {
                "id": 40473,
                "role_id": 35,
                "rule_id": 33
              }
            },
            {
              "id": 34,
              "pivot": {
                "id": 40474,
                "role_id": 35,
                "rule_id": 34
              }
            },
            {
              "id": 35,
              "pivot": {
                "id": 40475,
                "role_id": 35,
                "rule_id": 35
              }
            },
            {
              "id": 36,
              "pivot": {
                "id": 40476,
                "role_id": 35,
                "rule_id": 36
              }
            },
            {
              "id": 37,
              "pivot": {
                "id": 40477,
                "role_id": 35,
                "rule_id": 37
              }
            },
            {
              "id": 38,
              "pivot": {
                "id": 40478,
                "role_id": 35,
                "rule_id": 38
              }
            },
            {
              "id": 180,
              "pivot": {
                "id": 40479,
                "role_id": 35,
                "rule_id": 180
              }
            },
            {
              "id": 9,
              "pivot": {
                "id": 40480,
                "role_id": 35,
                "rule_id": 9
              }
            },
            {
              "id": 23,
              "pivot": {
                "id": 40481,
                "role_id": 35,
                "rule_id": 23
              }
            },
            {
              "id": 121,
              "pivot": {
                "id": 40482,
                "role_id": 35,
                "rule_id": 121
              }
            },
            {
              "id": 123,
              "pivot": {
                "id": 40483,
                "role_id": 35,
                "rule_id": 123
              }
            },
            {
              "id": 26,
              "pivot": {
                "id": 40484,
                "role_id": 35,
                "rule_id": 26
              }
            },
            {
              "id": 122,
              "pivot": {
                "id": 40485,
                "role_id": 35,
                "rule_id": 122
              }
            },
            {
              "id": 124,
              "pivot": {
                "id": 40486,
                "role_id": 35,
                "rule_id": 124
              }
            },
            {
              "id": 125,
              "pivot": {
                "id": 40487,
                "role_id": 35,
                "rule_id": 125
              }
            },
            {
              "id": 24,
              "pivot": {
                "id": 40488,
                "role_id": 35,
                "rule_id": 24
              }
            }
          ]
        },
        {
          "id": 31,
          "status": 1,
          "create_time": "2020-11-08 16:37:14",
          "update_time": "2026-08-23 22:55:51",
          "name": "普通管理员1",
          "desc": "普通管理员1",
          "rules": [
            {
              "id": 149,
              "pivot": {
                "id": 41848,
                "role_id": 31,
                "rule_id": 149
              }
            },
            {
              "id": 150,
              "pivot": {
                "id": 41849,
                "role_id": 31,
                "rule_id": 150
              }
            },
            {
              "id": 151,
              "pivot": {
                "id": 41850,
                "role_id": 31,
                "rule_id": 151
              }
            },
            {
              "id": 152,
              "pivot": {
                "id": 41851,
                "role_id": 31,
                "rule_id": 152
              }
            },
            {
              "id": 153,
              "pivot": {
                "id": 41852,
                "role_id": 31,
                "rule_id": 153
              }
            },
            {
              "id": 179,
              "pivot": {
                "id": 41853,
                "role_id": 31,
                "rule_id": 179
              }
            },
            {
              "id": 346,
              "pivot": {
                "id": 41855,
                "role_id": 31,
                "rule_id": 346
              }
            },
            {
              "id": 25,
              "pivot": {
                "id": 41856,
                "role_id": 31,
                "rule_id": 25
              }
            },
            {
              "id": 108,
              "pivot": {
                "id": 41857,
                "role_id": 31,
                "rule_id": 108
              }
            },
            {
              "id": 109,
              "pivot": {
                "id": 41858,
                "role_id": 31,
                "rule_id": 109
              }
            },
            {
              "id": 110,
              "pivot": {
                "id": 41859,
                "role_id": 31,
                "rule_id": 110
              }
            },
            {
              "id": 111,
              "pivot": {
                "id": 41860,
                "role_id": 31,
                "rule_id": 111
              }
            },
            {
              "id": 112,
              "pivot": {
                "id": 41861,
                "role_id": 31,
                "rule_id": 112
              }
            },
            {
              "id": 8,
              "pivot": {
                "id": 41862,
                "role_id": 31,
                "rule_id": 8
              }
            },
            {
              "id": 177,
              "pivot": {
                "id": 41863,
                "role_id": 31,
                "rule_id": 177
              }
            },
            {
              "id": 172,
              "pivot": {
                "id": 41864,
                "role_id": 31,
                "rule_id": 172
              }
            }
          ]
        },
        {
          "id": 21,
          "status": 1,
          "create_time": "1970-01-01 08:33:40",
          "update_time": "2026-08-28 14:47:21",
          "name": "技术",
          "desc": "技术测试2",
          "rules": []
        },
        {
          "id": 19,
          "status": 1,
          "create_time": "2020-02-16 21:16:23",
          "update_time": "2026-10-06 13:51:13",
          "name": "销售",
          "desc": "销售",
          "rules": [
            {
              "id": 5,
              "pivot": {
                "id": 37135,
                "role_id": 19,
                "rule_id": 5
              }
            },
            {
              "id": 10,
              "pivot": {
                "id": 37136,
                "role_id": 19,
                "rule_id": 10
              }
            },
            {
              "id": 174,
              "pivot": {
                "id": 37137,
                "role_id": 19,
                "rule_id": 174
              }
            },
            {
              "id": 175,
              "pivot": {
                "id": 37138,
                "role_id": 19,
                "rule_id": 175
              }
            },
            {
              "id": 176,
              "pivot": {
                "id": 37139,
                "role_id": 19,
                "rule_id": 176
              }
            },
            {
              "id": 177,
              "pivot": {
                "id": 37140,
                "role_id": 19,
                "rule_id": 177
              }
            },
            {
              "id": 178,
              "pivot": {
                "id": 37141,
                "role_id": 19,
                "rule_id": 178
              }
            },
            {
              "id": 342,
              "pivot": {
                "id": 37142,
                "role_id": 19,
                "rule_id": 342
              }
            },
            {
              "id": 344,
              "pivot": {
                "id": 37144,
                "role_id": 19,
                "rule_id": 344
              }
            },
            {
              "id": 179,
              "pivot": {
                "id": 37145,
                "role_id": 19,
                "rule_id": 179
              }
            },
            {
              "id": 345,
              "pivot": {
                "id": 37146,
                "role_id": 19,
                "rule_id": 345
              }
            }
          ]
        },
        {
          "id": 9,
          "status": 0,
          "create_time": "1970-01-01 08:33:40",
          "update_time": "2026-09-02 12:10:45",
          "name": "测试12",
          "desc": "测试人员",
          "rules": [
            {
              "id": 142,
              "pivot": {
                "id": 38000,
                "role_id": 9,
                "rule_id": 142
              }
            },
            {
              "id": 143,
              "pivot": {
                "id": 38001,
                "role_id": 9,
                "rule_id": 143
              }
            },
            {
              "id": 145,
              "pivot": {
                "id": 38002,
                "role_id": 9,
                "rule_id": 145
              }
            },
            {
              "id": 147,
              "pivot": {
                "id": 38003,
                "role_id": 9,
                "rule_id": 147
              }
            },
            {
              "id": 148,
              "pivot": {
                "id": 38004,
                "role_id": 9,
                "rule_id": 148
              }
            },
            {
              "id": 14,
              "pivot": {
                "id": 38005,
                "role_id": 9,
                "rule_id": 14
              }
            },
            {
              "id": 71,
              "pivot": {
                "id": 38006,
                "role_id": 9,
                "rule_id": 71
              }
            },
            {
              "id": 72,
              "pivot": {
                "id": 38007,
                "role_id": 9,
                "rule_id": 72
              }
            },
            {
              "id": 73,
              "pivot": {
                "id": 38008,
                "role_id": 9,
                "rule_id": 73
              }
            },
            {
              "id": 74,
              "pivot": {
                "id": 38009,
                "role_id": 9,
                "rule_id": 74
              }
            },
            {
              "id": 75,
              "pivot": {
                "id": 38010,
                "role_id": 9,
                "rule_id": 75
              }
            },
            {
              "id": 76,
              "pivot": {
                "id": 38011,
                "role_id": 9,
                "rule_id": 76
              }
            },
            {
              "id": 162,
              "pivot": {
                "id": 38012,
                "role_id": 9,
                "rule_id": 162
              }
            },
            {
              "id": 163,
              "pivot": {
                "id": 38013,
                "role_id": 9,
                "rule_id": 163
              }
            },
            {
              "id": 164,
              "pivot": {
                "id": 38014,
                "role_id": 9,
                "rule_id": 164
              }
            },
            {
              "id": 15,
              "pivot": {
                "id": 38015,
                "role_id": 9,
                "rule_id": 15
              }
            },
            {
              "id": 6,
              "pivot": {
                "id": 38029,
                "role_id": 9,
                "rule_id": 6
              }
            },
            {
              "id": 78,
              "pivot": {
                "id": 38101,
                "role_id": 9,
                "rule_id": 78
              }
            },
            {
              "id": 79,
              "pivot": {
                "id": 38102,
                "role_id": 9,
                "rule_id": 79
              }
            },
            {
              "id": 80,
              "pivot": {
                "id": 38103,
                "role_id": 9,
                "rule_id": 80
              }
            },
            {
              "id": 81,
              "pivot": {
                "id": 38104,
                "role_id": 9,
                "rule_id": 81
              }
            },
            {
              "id": 173,
              "pivot": {
                "id": 38227,
                "role_id": 9,
                "rule_id": 173
              }
            },
            {
              "id": 21,
              "pivot": {
                "id": 38228,
                "role_id": 9,
                "rule_id": 21
              }
            },
            {
              "id": 101,
              "pivot": {
                "id": 38230,
                "role_id": 9,
                "rule_id": 101
              }
            },
            {
              "id": 18,
              "pivot": {
                "id": 38231,
                "role_id": 9,
                "rule_id": 18
              }
            },
            {
              "id": 7,
              "pivot": {
                "id": 38232,
                "role_id": 9,
                "rule_id": 7
              }
            },
            {
              "id": 89,
              "pivot": {
                "id": 38233,
                "role_id": 9,
                "rule_id": 89
              }
            },
            {
              "id": 90,
              "pivot": {
                "id": 38234,
                "role_id": 9,
                "rule_id": 90
              }
            },
            {
              "id": 13,
              "pivot": {
                "id": 38235,
                "role_id": 9,
                "rule_id": 13
              }
            },
            {
              "id": 23,
              "pivot": {
                "id": 38236,
                "role_id": 9,
                "rule_id": 23
              }
            },
            {
              "id": 26,
              "pivot": {
                "id": 38237,
                "role_id": 9,
                "rule_id": 26
              }
            },
            {
              "id": 9,
              "pivot": {
                "id": 38238,
                "role_id": 9,
                "rule_id": 9
              }
            },
            {
              "id": 123,
              "pivot": {
                "id": 38239,
                "role_id": 9,
                "rule_id": 123
              }
            },
            {
              "id": 125,
              "pivot": {
                "id": 38240,
                "role_id": 9,
                "rule_id": 125
              }
            },
            {
              "id": 122,
              "pivot": {
                "id": 41841,
                "role_id": 9,
                "rule_id": 122
              }
            },
            {
              "id": 149,
              "pivot": {
                "id": 41842,
                "role_id": 9,
                "rule_id": 149
              }
            },
            {
              "id": 150,
              "pivot": {
                "id": 41843,
                "role_id": 9,
                "rule_id": 150
              }
            },
            {
              "id": 151,
              "pivot": {
                "id": 41844,
                "role_id": 9,
                "rule_id": 151
              }
            },
            {
              "id": 152,
              "pivot": {
                "id": 41845,
                "role_id": 9,
                "rule_id": 152
              }
            },
            {
              "id": 153,
              "pivot": {
                "id": 41846,
                "role_id": 9,
                "rule_id": 153
              }
            },
            {
              "id": 172,
              "pivot": {
                "id": 41847,
                "role_id": 9,
                "rule_id": 172
              }
            }
          ]
        },
        {
          "id": 3,
          "status": 1,
          "create_time": "2019-10-28 02:19:43",
          "update_time": "2021-12-19 03:46:45",
          "name": "运营",
          "desc": "上架商品等权限",
          "rules": [
            {
              "id": 5,
              "pivot": {
                "id": 195,
                "role_id": 3,
                "rule_id": 5
              }
            },
            {
              "id": 10,
              "pivot": {
                "id": 196,
                "role_id": 3,
                "rule_id": 10
              }
            },
            {
              "id": 11,
              "pivot": {
                "id": 197,
                "role_id": 3,
                "rule_id": 11
              }
            },
            {
              "id": 6,
              "pivot": {
                "id": 199,
                "role_id": 3,
                "rule_id": 6
              }
            },
            {
              "id": 13,
              "pivot": {
                "id": 200,
                "role_id": 3,
                "rule_id": 13
              }
            },
            {
              "id": 14,
              "pivot": {
                "id": 201,
                "role_id": 3,
                "rule_id": 14
              }
            },
            {
              "id": 15,
              "pivot": {
                "id": 202,
                "role_id": 3,
                "rule_id": 15
              }
            },
            {
              "id": 7,
              "pivot": {
                "id": 203,
                "role_id": 3,
                "rule_id": 7
              }
            },
            {
              "id": 18,
              "pivot": {
                "id": 204,
                "role_id": 3,
                "rule_id": 18
              }
            }
          ]
        },
        {
          "id": 2,
          "status": 1,
          "create_time": "2019-08-11 15:34:39",
          "update_time": "2021-12-19 03:43:28",
          "name": "超级管理员",
          "desc": "最高权限",
          "rules": [
            {
              "id": 11,
              "pivot": {
                "id": 114,
                "role_id": 2,
                "rule_id": 11
              }
            },
            {
              "id": 5,
              "pivot": {
                "id": 163,
                "role_id": 2,
                "rule_id": 5
              }
            },
            {
              "id": 10,
              "pivot": {
                "id": 164,
                "role_id": 2,
                "rule_id": 10
              }
            },
            {
              "id": 6,
              "pivot": {
                "id": 165,
                "role_id": 2,
                "rule_id": 6
              }
            },
            {
              "id": 13,
              "pivot": {
                "id": 166,
                "role_id": 2,
                "rule_id": 13
              }
            },
            {
              "id": 14,
              "pivot": {
                "id": 167,
                "role_id": 2,
                "rule_id": 14
              }
            },
            {
              "id": 15,
              "pivot": {
                "id": 168,
                "role_id": 2,
                "rule_id": 15
              }
            },
            {
              "id": 17,
              "pivot": {
                "id": 170,
                "role_id": 2,
                "rule_id": 17
              }
            },
            {
              "id": 7,
              "pivot": {
                "id": 171,
                "role_id": 2,
                "rule_id": 7
              }
            },
            {
              "id": 18,
              "pivot": {
                "id": 172,
                "role_id": 2,
                "rule_id": 18
              }
            },
            {
              "id": 8,
              "pivot": {
                "id": 175,
                "role_id": 2,
                "rule_id": 8
              }
            },
            {
              "id": 21,
              "pivot": {
                "id": 176,
                "role_id": 2,
                "rule_id": 21
              }
            },
            {
              "id": 22,
              "pivot": {
                "id": 177,
                "role_id": 2,
                "rule_id": 22
              }
            },
            {
              "id": 9,
              "pivot": {
                "id": 178,
                "role_id": 2,
                "rule_id": 9
              }
            },
            {
              "id": 23,
              "pivot": {
                "id": 179,
                "role_id": 2,
                "rule_id": 23
              }
            },
            {
              "id": 24,
              "pivot": {
                "id": 180,
                "role_id": 2,
                "rule_id": 24
              }
            },
            {
              "id": 25,
              "pivot": {
                "id": 181,
                "role_id": 2,
                "rule_id": 25
              }
            },
            {
              "id": 26,
              "pivot": {
                "id": 182,
                "role_id": 2,
                "rule_id": 26
              }
            },
            {
              "id": 27,
              "pivot": {
                "id": 183,
                "role_id": 2,
                "rule_id": 27
              }
            },
            {
              "id": 28,
              "pivot": {
                "id": 184,
                "role_id": 2,
                "rule_id": 28
              }
            },
            {
              "id": 29,
              "pivot": {
                "id": 185,
                "role_id": 2,
                "rule_id": 29
              }
            },
            {
              "id": 30,
              "pivot": {
                "id": 186,
                "role_id": 2,
                "rule_id": 30
              }
            },
            {
              "id": 31,
              "pivot": {
                "id": 187,
                "role_id": 2,
                "rule_id": 31
              }
            },
            {
              "id": 32,
              "pivot": {
                "id": 188,
                "role_id": 2,
                "rule_id": 32
              }
            },
            {
              "id": 33,
              "pivot": {
                "id": 189,
                "role_id": 2,
                "rule_id": 33
              }
            },
            {
              "id": 34,
              "pivot": {
                "id": 190,
                "role_id": 2,
                "rule_id": 34
              }
            },
            {
              "id": 35,
              "pivot": {
                "id": 191,
                "role_id": 2,
                "rule_id": 35
              }
            },
            {
              "id": 36,
              "pivot": {
                "id": 192,
                "role_id": 2,
                "rule_id": 36
              }
            },
            {
              "id": 37,
              "pivot": {
                "id": 193,
                "role_id": 2,
                "rule_id": 37
              }
            },
            {
              "id": 38,
              "pivot": {
                "id": 194,
                "role_id": 2,
                "rule_id": 38
              }
            },
            {
              "id": 94,
              "pivot": {
                "id": 317,
                "role_id": 2,
                "rule_id": 94
              }
            },
            {
              "id": 95,
              "pivot": {
                "id": 318,
                "role_id": 2,
                "rule_id": 95
              }
            },
            {
              "id": 96,
              "pivot": {
                "id": 319,
                "role_id": 2,
                "rule_id": 96
              }
            },
            {
              "id": 89,
              "pivot": {
                "id": 320,
                "role_id": 2,
                "rule_id": 89
              }
            },
            {
              "id": 90,
              "pivot": {
                "id": 321,
                "role_id": 2,
                "rule_id": 90
              }
            },
            {
              "id": 91,
              "pivot": {
                "id": 322,
                "role_id": 2,
                "rule_id": 91
              }
            },
            {
              "id": 92,
              "pivot": {
                "id": 323,
                "role_id": 2,
                "rule_id": 92
              }
            },
            {
              "id": 93,
              "pivot": {
                "id": 324,
                "role_id": 2,
                "rule_id": 93
              }
            },
            {
              "id": 97,
              "pivot": {
                "id": 325,
                "role_id": 2,
                "rule_id": 97
              }
            },
            {
              "id": 98,
              "pivot": {
                "id": 326,
                "role_id": 2,
                "rule_id": 98
              }
            },
            {
              "id": 99,
              "pivot": {
                "id": 327,
                "role_id": 2,
                "rule_id": 99
              }
            },
            {
              "id": 100,
              "pivot": {
                "id": 328,
                "role_id": 2,
                "rule_id": 100
              }
            },
            {
              "id": 101,
              "pivot": {
                "id": 329,
                "role_id": 2,
                "rule_id": 101
              }
            },
            {
              "id": 102,
              "pivot": {
                "id": 330,
                "role_id": 2,
                "rule_id": 102
              }
            },
            {
              "id": 103,
              "pivot": {
                "id": 331,
                "role_id": 2,
                "rule_id": 103
              }
            },
            {
              "id": 104,
              "pivot": {
                "id": 332,
                "role_id": 2,
                "rule_id": 104
              }
            },
            {
              "id": 105,
              "pivot": {
                "id": 333,
                "role_id": 2,
                "rule_id": 105
              }
            },
            {
              "id": 106,
              "pivot": {
                "id": 334,
                "role_id": 2,
                "rule_id": 106
              }
            },
            {
              "id": 173,
              "pivot": {
                "id": 335,
                "role_id": 2,
                "rule_id": 173
              }
            },
            {
              "id": 174,
              "pivot": {
                "id": 336,
                "role_id": 2,
                "rule_id": 174
              }
            },
            {
              "id": 175,
              "pivot": {
                "id": 337,
                "role_id": 2,
                "rule_id": 175
              }
            },
            {
              "id": 176,
              "pivot": {
                "id": 338,
                "role_id": 2,
                "rule_id": 176
              }
            },
            {
              "id": 61,
              "pivot": {
                "id": 339,
                "role_id": 2,
                "rule_id": 61
              }
            },
            {
              "id": 127,
              "pivot": {
                "id": 340,
                "role_id": 2,
                "rule_id": 127
              }
            },
            {
              "id": 128,
              "pivot": {
                "id": 341,
                "role_id": 2,
                "rule_id": 128
              }
            },
            {
              "id": 129,
              "pivot": {
                "id": 342,
                "role_id": 2,
                "rule_id": 129
              }
            },
            {
              "id": 131,
              "pivot": {
                "id": 343,
                "role_id": 2,
                "rule_id": 131
              }
            },
            {
              "id": 132,
              "pivot": {
                "id": 344,
                "role_id": 2,
                "rule_id": 132
              }
            },
            {
              "id": 133,
              "pivot": {
                "id": 345,
                "role_id": 2,
                "rule_id": 133
              }
            },
            {
              "id": 134,
              "pivot": {
                "id": 346,
                "role_id": 2,
                "rule_id": 134
              }
            },
            {
              "id": 135,
              "pivot": {
                "id": 347,
                "role_id": 2,
                "rule_id": 135
              }
            },
            {
              "id": 136,
              "pivot": {
                "id": 348,
                "role_id": 2,
                "rule_id": 136
              }
            },
            {
              "id": 137,
              "pivot": {
                "id": 349,
                "role_id": 2,
                "rule_id": 137
              }
            },
            {
              "id": 140,
              "pivot": {
                "id": 350,
                "role_id": 2,
                "rule_id": 140
              }
            },
            {
              "id": 141,
              "pivot": {
                "id": 351,
                "role_id": 2,
                "rule_id": 141
              }
            },
            {
              "id": 142,
              "pivot": {
                "id": 352,
                "role_id": 2,
                "rule_id": 142
              }
            },
            {
              "id": 143,
              "pivot": {
                "id": 353,
                "role_id": 2,
                "rule_id": 143
              }
            },
            {
              "id": 145,
              "pivot": {
                "id": 354,
                "role_id": 2,
                "rule_id": 145
              }
            },
            {
              "id": 147,
              "pivot": {
                "id": 355,
                "role_id": 2,
                "rule_id": 147
              }
            },
            {
              "id": 148,
              "pivot": {
                "id": 356,
                "role_id": 2,
                "rule_id": 148
              }
            },
            {
              "id": 71,
              "pivot": {
                "id": 357,
                "role_id": 2,
                "rule_id": 71
              }
            },
            {
              "id": 72,
              "pivot": {
                "id": 358,
                "role_id": 2,
                "rule_id": 72
              }
            },
            {
              "id": 73,
              "pivot": {
                "id": 359,
                "role_id": 2,
                "rule_id": 73
              }
            },
            {
              "id": 74,
              "pivot": {
                "id": 360,
                "role_id": 2,
                "rule_id": 74
              }
            },
            {
              "id": 75,
              "pivot": {
                "id": 361,
                "role_id": 2,
                "rule_id": 75
              }
            },
            {
              "id": 76,
              "pivot": {
                "id": 362,
                "role_id": 2,
                "rule_id": 76
              }
            },
            {
              "id": 162,
              "pivot": {
                "id": 363,
                "role_id": 2,
                "rule_id": 162
              }
            },
            {
              "id": 163,
              "pivot": {
                "id": 364,
                "role_id": 2,
                "rule_id": 163
              }
            },
            {
              "id": 164,
              "pivot": {
                "id": 365,
                "role_id": 2,
                "rule_id": 164
              }
            },
            {
              "id": 77,
              "pivot": {
                "id": 366,
                "role_id": 2,
                "rule_id": 77
              }
            },
            {
              "id": 78,
              "pivot": {
                "id": 367,
                "role_id": 2,
                "rule_id": 78
              }
            },
            {
              "id": 79,
              "pivot": {
                "id": 368,
                "role_id": 2,
                "rule_id": 79
              }
            },
            {
              "id": 80,
              "pivot": {
                "id": 369,
                "role_id": 2,
                "rule_id": 80
              }
            },
            {
              "id": 81,
              "pivot": {
                "id": 370,
                "role_id": 2,
                "rule_id": 81
              }
            },
            {
              "id": 157,
              "pivot": {
                "id": 371,
                "role_id": 2,
                "rule_id": 157
              }
            },
            {
              "id": 158,
              "pivot": {
                "id": 372,
                "role_id": 2,
                "rule_id": 158
              }
            },
            {
              "id": 159,
              "pivot": {
                "id": 373,
                "role_id": 2,
                "rule_id": 159
              }
            },
            {
              "id": 160,
              "pivot": {
                "id": 374,
                "role_id": 2,
                "rule_id": 160
              }
            },
            {
              "id": 161,
              "pivot": {
                "id": 375,
                "role_id": 2,
                "rule_id": 161
              }
            },
            {
              "id": 108,
              "pivot": {
                "id": 376,
                "role_id": 2,
                "rule_id": 108
              }
            },
            {
              "id": 109,
              "pivot": {
                "id": 377,
                "role_id": 2,
                "rule_id": 109
              }
            },
            {
              "id": 110,
              "pivot": {
                "id": 378,
                "role_id": 2,
                "rule_id": 110
              }
            },
            {
              "id": 111,
              "pivot": {
                "id": 379,
                "role_id": 2,
                "rule_id": 111
              }
            },
            {
              "id": 112,
              "pivot": {
                "id": 380,
                "role_id": 2,
                "rule_id": 112
              }
            },
            {
              "id": 121,
              "pivot": {
                "id": 381,
                "role_id": 2,
                "rule_id": 121
              }
            },
            {
              "id": 123,
              "pivot": {
                "id": 382,
                "role_id": 2,
                "rule_id": 123
              }
            },
            {
              "id": 122,
              "pivot": {
                "id": 383,
                "role_id": 2,
                "rule_id": 122
              }
            },
            {
              "id": 124,
              "pivot": {
                "id": 384,
                "role_id": 2,
                "rule_id": 124
              }
            },
            {
              "id": 125,
              "pivot": {
                "id": 385,
                "role_id": 2,
                "rule_id": 125
              }
            },
            {
              "id": 172,
              "pivot": {
                "id": 386,
                "role_id": 2,
                "rule_id": 172
              }
            },
            {
              "id": 62,
              "pivot": {
                "id": 387,
                "role_id": 2,
                "rule_id": 62
              }
            },
            {
              "id": 63,
              "pivot": {
                "id": 388,
                "role_id": 2,
                "rule_id": 63
              }
            },
            {
              "id": 64,
              "pivot": {
                "id": 389,
                "role_id": 2,
                "rule_id": 64
              }
            },
            {
              "id": 65,
              "pivot": {
                "id": 390,
                "role_id": 2,
                "rule_id": 65
              }
            },
            {
              "id": 66,
              "pivot": {
                "id": 391,
                "role_id": 2,
                "rule_id": 66
              }
            },
            {
              "id": 67,
              "pivot": {
                "id": 392,
                "role_id": 2,
                "rule_id": 67
              }
            },
            {
              "id": 68,
              "pivot": {
                "id": 393,
                "role_id": 2,
                "rule_id": 68
              }
            },
            {
              "id": 69,
              "pivot": {
                "id": 394,
                "role_id": 2,
                "rule_id": 69
              }
            },
            {
              "id": 149,
              "pivot": {
                "id": 395,
                "role_id": 2,
                "rule_id": 149
              }
            },
            {
              "id": 150,
              "pivot": {
                "id": 396,
                "role_id": 2,
                "rule_id": 150
              }
            },
            {
              "id": 151,
              "pivot": {
                "id": 397,
                "role_id": 2,
                "rule_id": 151
              }
            },
            {
              "id": 152,
              "pivot": {
                "id": 398,
                "role_id": 2,
                "rule_id": 152
              }
            },
            {
              "id": 153,
              "pivot": {
                "id": 399,
                "role_id": 2,
                "rule_id": 153
              }
            },
            {
              "id": 177,
              "pivot": {
                "id": 400,
                "role_id": 2,
                "rule_id": 177
              }
            },
            {
              "id": 178,
              "pivot": {
                "id": 401,
                "role_id": 2,
                "rule_id": 178
              }
            },
            {
              "id": 179,
              "pivot": {
                "id": 402,
                "role_id": 2,
                "rule_id": 179
              }
            },
            {
              "id": 181,
              "pivot": {
                "id": 403,
                "role_id": 2,
                "rule_id": 181
              }
            },
            {
              "id": 182,
              "pivot": {
                "id": 404,
                "role_id": 2,
                "rule_id": 182
              }
            },
            {
              "id": 183,
              "pivot": {
                "id": 405,
                "role_id": 2,
                "rule_id": 183
              }
            },
            {
              "id": 180,
              "pivot": {
                "id": 406,
                "role_id": 2,
                "rule_id": 180
              }
            }
          ]
        }
      ],
      "totalCount": 18,
      "sourceTotalCount": 18
    },
    {
      "note": "公告列表",
      "method": "GET",
      "pattern": "/notice/{page}",
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {},
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 3850,
          "title": "杭州是个好地方",
          "content": "杭州是个好地方",
          "order": 50,
          "create_time": "2026-10-04 08:49:41",
          "update_time": "2026-10-14 15:20:31"
        },
        {
          "id": 3848,
          "title": "山西是个好地方",
          "content": "山西是个好地方",
          "order": 50,
          "create_time": "2026-10-04 08:49:22",
          "update_time": "2026-10-04 08:49:22"
        },
        {
          "id": 3847,
          "title": "国庆节大促销",
          "content": "国庆节大促销国庆节大促销国庆节大促销国庆节大促销",
          "order": 50,
          "create_time": "2026-10-02 18:11:43",
          "update_time": "2026-10-03 10:30:50"
        },
        {
          "id": 2,
          "title": "第一条公告",
          "content": "第一条公告内容",
          "order": 0,
          "create_time": "2021-06-11 23:45:44",
          "update_time": "2021-06-11 23:45:44"
        }
      ],
      "totalCount": 4,
      "sourceTotalCount": 4
    },
    {
      "note": "优惠券列表",
      "method": "GET",
      "pattern": "/coupon/{page}",
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {},
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 636,
          "name": "85折限时折扣",
          "type": 1,
          "value": "85.00",
          "total": 300,
          "used": 0,
          "min_price": "200.00",
          "start_time": "2026-10-14 10:58:42",
          "end_time": "2027-01-12 10:58:37",
          "status": 1,
          "create_time": "2026-10-14 10:58:39",
          "update_time": "2026-10-14 10:58:39",
          "order": 25,
          "desc": "限时85折"
        },
        {
          "id": 635,
          "name": "9折会员专享券",
          "type": 1,
          "value": "90.00",
          "total": 500,
          "used": 0,
          "min_price": "100.00",
          "start_time": "2026-10-14 10:58:41",
          "end_time": "2027-01-12 10:58:37",
          "status": 1,
          "create_time": "2026-10-14 10:58:38",
          "update_time": "2026-10-14 10:58:38",
          "order": 35,
          "desc": "会员专享"
        },
        {
          "id": 634,
          "name": "95折通用折扣券",
          "type": 1,
          "value": "95.00",
          "total": 2000,
          "used": 0,
          "min_price": "50.00",
          "start_time": "2026-10-14 10:58:40",
          "end_time": "2027-01-12 10:58:37",
          "status": 1,
          "create_time": "2026-10-14 10:58:38",
          "update_time": "2026-10-14 10:58:38",
          "order": 60,
          "desc": "全店95折"
        },
        {
          "id": 633,
          "name": "满500减100大额券",
          "type": 0,
          "value": "100.00",
          "total": 200,
          "used": 0,
          "min_price": "500.00",
          "start_time": "2026-10-14 10:58:39",
          "end_time": "2027-01-12 10:58:37",
          "status": 1,
          "create_time": "2026-10-14 10:58:37",
          "update_time": "2026-10-14 10:58:37",
          "order": 30,
          "desc": "大额满减"
        },
        {
          "id": 632,
          "name": "满200减50优惠券",
          "type": 0,
          "value": "50.00",
          "total": 500,
          "used": 0,
          "min_price": "200.00",
          "start_time": "2026-10-14 10:58:38",
          "end_time": "2027-01-12 10:58:37",
          "status": 1,
          "create_time": "2026-10-14 10:58:37",
          "update_time": "2026-10-14 10:58:37",
          "order": 40,
          "desc": "限时优惠"
        },
        {
          "id": 631,
          "name": "新人专享满100减20",
          "type": 0,
          "value": "20.00",
          "total": 1000,
          "used": 0,
          "min_price": "100.00",
          "start_time": "2026-10-14 10:58:21",
          "end_time": "2027-01-12 10:58:21",
          "status": 1,
          "create_time": "2026-10-14 10:58:21",
          "update_time": "2026-10-14 10:58:21",
          "order": 50,
          "desc": "全场通用，满100可用"
        },
        {
          "id": 624,
          "name": "自选商场大V发给不能喝",
          "type": 1,
          "value": "2.00",
          "total": 100,
          "used": 0,
          "min_price": "2.00",
          "start_time": "2026-10-20 00:00:00",
          "end_time": "2026-11-22 00:00:00",
          "status": 0,
          "create_time": "2026-10-14 09:27:36",
          "update_time": "2026-10-14 10:55:03",
          "order": 1,
          "desc": ""
        },
        {
          "id": 623,
          "name": "dfvgbnh",
          "type": 1,
          "value": "2.00",
          "total": 102,
          "used": 0,
          "min_price": "2.00",
          "start_time": "2026-10-29 00:00:00",
          "end_time": "2026-11-22 00:00:00",
          "status": 0,
          "create_time": "2026-10-14 09:24:10",
          "update_time": "2026-10-14 10:55:04",
          "order": 2,
          "desc": ""
        },
        {
          "id": 622,
          "name": "dfghj",
          "type": 1,
          "value": "3.00",
          "total": 100,
          "used": 0,
          "min_price": "2.00",
          "start_time": "2026-10-29 00:00:00",
          "end_time": "2026-11-25 00:00:00",
          "status": 0,
          "create_time": "2026-10-14 09:23:42",
          "update_time": "2026-10-14 10:55:04",
          "order": 6,
          "desc": ""
        },
        {
          "id": 607,
          "name": "8。5",
          "type": 1,
          "value": "5.00",
          "total": 5,
          "used": 0,
          "min_price": "10.00",
          "start_time": "2026-10-14 00:00:00",
          "end_time": "2026-10-22 00:00:00",
          "status": 1,
          "create_time": "2026-10-13 15:41:39",
          "update_time": "2026-10-13 15:41:39",
          "order": 5,
          "desc": "无"
        },
        {
          "id": 606,
          "name": "8.5折",
          "type": 1,
          "value": "5.00",
          "total": 5,
          "used": 0,
          "min_price": "10.00",
          "start_time": "2026-10-14 00:00:00",
          "end_time": "2026-10-17 00:00:00",
          "status": 1,
          "create_time": "2026-10-13 15:40:55",
          "update_time": "2026-10-13 15:40:55",
          "order": 2,
          "desc": "优惠卷"
        },
        {
          "id": 604,
          "name": "便宜优惠券",
          "type": 1,
          "value": "5.00",
          "total": 100,
          "used": 0,
          "min_price": "1.00",
          "start_time": "2026-10-14 00:00:00",
          "end_time": "2026-11-20 00:00:00",
          "status": 0,
          "create_time": "2026-10-13 15:34:10",
          "update_time": "2026-10-14 10:55:05",
          "order": 50,
          "desc": ""
        },
        {
          "id": 602,
          "name": "阿萨我的夫人个体户",
          "type": 1,
          "value": "1.00",
          "total": 100,
          "used": 0,
          "min_price": "1.00",
          "start_time": "2026-10-21 00:00:00",
          "end_time": "2026-11-25 00:00:00",
          "status": 0,
          "create_time": "2026-10-13 15:31:24",
          "update_time": "2026-10-14 10:55:05",
          "order": 1,
          "desc": ""
        },
        {
          "id": 601,
          "name": "这些时代财富VB",
          "type": 1,
          "value": "3.00",
          "total": 102,
          "used": 0,
          "min_price": "3.00",
          "start_time": "2026-10-15 00:00:00",
          "end_time": "2026-11-25 00:00:00",
          "status": 0,
          "create_time": "2026-10-13 15:31:03",
          "update_time": "2026-10-14 10:55:06",
          "order": 3,
          "desc": ""
        },
        {
          "id": 600,
          "name": "8.5",
          "type": 1,
          "value": "5.00",
          "total": 5,
          "used": 0,
          "min_price": "10.00",
          "start_time": "2026-10-14 00:00:00",
          "end_time": "2026-10-22 00:00:00",
          "status": 1,
          "create_time": "2026-10-13 15:31:00",
          "update_time": "2026-10-13 15:31:00",
          "order": 3,
          "desc": "w"
        },
        {
          "id": 599,
          "name": "地方便不",
          "type": 1,
          "value": "3.00",
          "total": 100,
          "used": 0,
          "min_price": "2.00",
          "start_time": "2026-10-29 00:00:00",
          "end_time": "2026-11-27 00:00:00",
          "status": 0,
          "create_time": "2026-10-13 15:26:00",
          "update_time": "2026-10-14 10:55:06",
          "order": 2,
          "desc": ""
        },
        {
          "id": 598,
          "name": "蓄电池",
          "type": 1,
          "value": "3.00",
          "total": 100,
          "used": 0,
          "min_price": "2.00",
          "start_time": "2026-10-22 00:00:00",
          "end_time": "2026-11-16 00:00:00",
          "status": 1,
          "create_time": "2026-10-13 15:20:03",
          "update_time": "2026-10-13 15:20:03",
          "order": 1,
          "desc": ""
        },
        {
          "id": 597,
          "name": "上档次",
          "type": 1,
          "value": "4.00",
          "total": 100,
          "used": 0,
          "min_price": "2.00",
          "start_time": "2026-10-21 00:00:00",
          "end_time": "2026-11-16 00:00:00",
          "status": 1,
          "create_time": "2026-10-13 15:19:32",
          "update_time": "2026-10-13 15:19:32",
          "order": 1,
          "desc": ""
        },
        {
          "id": 592,
          "name": "测试",
          "type": 0,
          "value": "2.00",
          "total": 100,
          "used": 0,
          "min_price": "2.00",
          "start_time": "2026-10-15 00:00:00",
          "end_time": "2026-11-18 00:00:00",
          "status": 1,
          "create_time": "2026-10-12 09:25:46",
          "update_time": "2026-10-12 09:25:46",
          "order": 50,
          "desc": ""
        },
        {
          "id": 590,
          "name": "十月促销1",
          "type": 0,
          "value": "200.00",
          "total": 100,
          "used": 0,
          "min_price": "22.00",
          "start_time": "2026-10-23 00:00:00",
          "end_time": "2026-10-31 00:00:00",
          "status": 1,
          "create_time": "2026-10-12 08:46:18",
          "update_time": "2026-10-12 09:25:23",
          "order": 50,
          "desc": ""
        }
      ],
      "totalCount": 20,
      "sourceTotalCount": 28
    },
    {
      "note": "商品评价列表",
      "method": "GET",
      "pattern": "/goods_comment/{page}",
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {},
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 163,
          "order_id": 166,
          "shop_id": 3,
          "num": 1,
          "price": "0.01",
          "rating": 5,
          "review": {
            "data": "商品不错哦",
            "image": [
              "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/demo101.jpg"
            ]
          },
          "review_time": "2019-09-01 20:34:27",
          "create_time": "2019-12-17 22:46:43",
          "skus_type": 1,
          "goods_id": 26,
          "goods_num": 0,
          "user_id": 3,
          "extra": [
            {
              "isuser": false,
              "data": "我的编号是952711122，感谢回复",
              "good_num": 0
            }
          ],
          "status": 1,
          "goods_item": {
            "id": 26,
            "title": "小米-天鹅绒柔暖四件套",
            "category_id": 5,
            "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
            "rating": 5,
            "sale_count": 1,
            "review_count": 0,
            "min_price": "0.02",
            "min_oprice": "30.00",
            "desc": "天鹅绒面，丝绒时髦高级感",
            "unit": "kg",
            "stock": 200,
            "min_stock": 10,
            "ischeck": 1,
            "status": 1,
            "stock_display": 1,
            "express_id": 1,
            "sku_type": 1,
            "sku_value": {
              "oprice": 20,
              "pprice": 30,
              "cprice": 20,
              "weight": 10,
              "volume": 20
            },
            "content": "<p>&nbsp;</p>\n<div class=\"divide-bar\" style=\"margin: 0px; padding: 0.08rem 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; background-color: #f7f7f7; color: #999999; display: flex; justify-content: center; align-items: center; font-size: 0px; font-family: 'Microsoft YaHei';\">\n<div class=\"icon-info\" style=\"margin: 0px 0.08rem; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; position: relative; top: -0.01rem; display: flex; flex-direction: row; align-items: center; justify-content: center;\"><span class=\"taobao-iconfont \" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-size: 0.18rem; -webkit-font-smoothing: antialiased; -webkit-text-stroke-width: 0.2px; position: relative; font-family: taobao !important;\"></span><span class=\"icon-text\" style=\"margin: 0px 0px 0px 0.01rem; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-size: 0.12rem;\">详情</span></div>\n</div>\n<div class=\"desc-root\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-family: 'Microsoft YaHei'; font-size: 16px; background-color: #f7f7f7;\">\n<div class=\"descV6-container\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent;\">\n<div class=\"descV6-mobile-container\" style=\"margin: 0px; padding: 12px 0px 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; width: 1349px; background-color: #ffffff;\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1291.44px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2z4cLqCtYBeNjSspaXXaOOFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1084.59px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2qIKTqpGWBuNjy0FbXXb4sXXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 937.109px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2KavKqER1BeNjy0FmXXb0wVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1152.94px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2e2_MqrSYBuNjSspfXXcZCpXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1719.53px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2Ya3jqDlYBeNjSszcXXbwhFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1554.05px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN01d0bgZU28uNyAPxpFJ_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1322.02px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN011mwqNC28uNyCTHdUC_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1244.67px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB2TIB0icuYBuNkSmRyXXcA3pXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1030.64px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2IyYYqx9YBuNjy0FfXXXIsVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1019.84px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2LkVUihuTBuNkHFNRXXc9qpXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1025.23px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2RRmWqxSYBuNjSsphXXbGvVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1028.84px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB21U2oquOSBuNjy0FdXXbDnVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1023.44px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB209qhindYBeNkSmLyXXXfnVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1041.42px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2jHcjqDlYBeNjSszcXXbwhFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1070.2px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2GAu1qqSWBuNjSsrbXXa0mVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1498.3px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2eibrqr5YBuNjSspoXXbeNFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1043.23px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01VY8oQA28uNyCA12gK_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 2088.25px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/O1CN01WM2jER28uNy6GgCIL_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1525.27px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01JdblOV28uNyEQ78ZQ_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1316.62px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2oZhQuASWBuNjSszdXXbeSpXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1629.59px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2UDE9uk9WBuNjSspeXXaz5VXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 777.031px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Bskmuf9TBuNjy0FcXXbeiFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1395.77px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB2osEwukKWBuNjy1zjXXcOypXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1311.23px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Lqw7ukyWBuNjy0FpXXassXXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1320.22px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Th4luxSYBuNjSspjXXX73VXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1688.95px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2uEdfur9YBuNjy0FgXXcxcXXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 2088.25px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN0195dRR128uNyF3E6fa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 78.2344px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01jS3HoM28uNyCPhBPF_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1440.73px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2ZpZBuXGWBuNjy0FbXXb4sXXa_!!2639307992.jpg\" /></div>\n<p>&nbsp;</p>\n</div>\n</div>",
            "discount": 10,
            "create_time": "1970-01-01 08:33:39",
            "update_time": "2026-09-29 21:06:39",
            "delete_time": null,
            "order": 50
          },
          "user": {
            "id": 3,
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg",
            "nickname": "昵称",
            "phone": "15632654658",
            "email": "123@qq.com",
            "user_level_id": 3,
            "create_time": "2019-08-13 01:02:22",
            "update_time": "2021-06-08 16:34:50",
            "last_login_time": null,
            "status": 1,
            "wechat_openid": null,
            "share_num": 2,
            "share_order_num": 2,
            "order_price": "0.20",
            "commission": "0.10",
            "cash_out_price": "0.00",
            "cash_out_time": 0,
            "no_cash_out_price": "0.10",
            "p1": null,
            "p2": null
          }
        },
        {
          "id": 162,
          "order_id": 165,
          "shop_id": 2,
          "num": 1,
          "price": "0.50",
          "rating": 4,
          "review": {
            "data": "商品不错哦",
            "image": [
              "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/demo101.jpg"
            ]
          },
          "review_time": "2019-09-01 20:34:27",
          "create_time": "2019-12-17 22:45:06",
          "skus_type": 1,
          "goods_id": 25,
          "goods_num": 0,
          "user_id": 3,
          "extra": [
            {
              "isuser": false,
              "data": "感谢您的评价支持和鼓励!!",
              "good_num": 0
            }
          ],
          "status": 1,
          "goods_item": {
            "id": 25,
            "title": "小米-百支酒店风抱枕套",
            "category_id": 5,
            "cover": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png",
            "rating": 5,
            "sale_count": 1,
            "review_count": 0,
            "min_price": "0.01",
            "min_oprice": "30.00",
            "desc": "酒店格调，简约品味/双雕方空，繁艺简呈/新疆纯棉，百支醇密",
            "unit": "kg",
            "stock": 200,
            "min_stock": 100,
            "ischeck": 1,
            "status": 1,
            "stock_display": 1,
            "express_id": 1,
            "sku_type": 1,
            "sku_value": {
              "oprice": 0,
              "pprice": 0,
              "cprice": 0,
              "weight": 0,
              "volume": 0
            },
            "content": "<p><img style=\"width: 100%;\" src=\"http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6995712278d0a.jpg\"><img style=\"width: 100%;\" src=\"http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6995712278f1e.jpg\"></p>",
            "discount": 10,
            "create_time": "1970-01-01 08:33:39",
            "update_time": "2026-09-30 17:37:43",
            "delete_time": null,
            "order": 50
          },
          "user": {
            "id": 3,
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg",
            "nickname": "昵称",
            "phone": "15632654658",
            "email": "123@qq.com",
            "user_level_id": 3,
            "create_time": "2019-08-13 01:02:22",
            "update_time": "2021-06-08 16:34:50",
            "last_login_time": null,
            "status": 1,
            "wechat_openid": null,
            "share_num": 2,
            "share_order_num": 2,
            "order_price": "0.20",
            "commission": "0.10",
            "cash_out_price": "0.00",
            "cash_out_time": 0,
            "no_cash_out_price": "0.10",
            "p1": null,
            "p2": null
          }
        },
        {
          "id": 151,
          "order_id": 154,
          "shop_id": 10,
          "num": 1,
          "price": "0.01",
          "rating": 3,
          "review": {
            "data": "商品一般",
            "image": [
              "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/demo101.jpg"
            ]
          },
          "review_time": "2019-09-01 20:34:27",
          "create_time": "2019-12-17 21:52:12",
          "skus_type": 1,
          "goods_id": 26,
          "goods_num": 0,
          "user_id": 3,
          "extra": [
            {
              "isuser": false,
              "data": "感谢评价！",
              "good_num": 0
            }
          ],
          "status": 1,
          "goods_item": {
            "id": 26,
            "title": "小米-天鹅绒柔暖四件套",
            "category_id": 5,
            "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
            "rating": 5,
            "sale_count": 1,
            "review_count": 0,
            "min_price": "0.02",
            "min_oprice": "30.00",
            "desc": "天鹅绒面，丝绒时髦高级感",
            "unit": "kg",
            "stock": 200,
            "min_stock": 10,
            "ischeck": 1,
            "status": 1,
            "stock_display": 1,
            "express_id": 1,
            "sku_type": 1,
            "sku_value": {
              "oprice": 20,
              "pprice": 30,
              "cprice": 20,
              "weight": 10,
              "volume": 20
            },
            "content": "<p>&nbsp;</p>\n<div class=\"divide-bar\" style=\"margin: 0px; padding: 0.08rem 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; background-color: #f7f7f7; color: #999999; display: flex; justify-content: center; align-items: center; font-size: 0px; font-family: 'Microsoft YaHei';\">\n<div class=\"icon-info\" style=\"margin: 0px 0.08rem; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; position: relative; top: -0.01rem; display: flex; flex-direction: row; align-items: center; justify-content: center;\"><span class=\"taobao-iconfont \" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-size: 0.18rem; -webkit-font-smoothing: antialiased; -webkit-text-stroke-width: 0.2px; position: relative; font-family: taobao !important;\"></span><span class=\"icon-text\" style=\"margin: 0px 0px 0px 0.01rem; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-size: 0.12rem;\">详情</span></div>\n</div>\n<div class=\"desc-root\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-family: 'Microsoft YaHei'; font-size: 16px; background-color: #f7f7f7;\">\n<div class=\"descV6-container\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent;\">\n<div class=\"descV6-mobile-container\" style=\"margin: 0px; padding: 12px 0px 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; width: 1349px; background-color: #ffffff;\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1291.44px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2z4cLqCtYBeNjSspaXXaOOFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1084.59px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2qIKTqpGWBuNjy0FbXXb4sXXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 937.109px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2KavKqER1BeNjy0FmXXb0wVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1152.94px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2e2_MqrSYBuNjSspfXXcZCpXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1719.53px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2Ya3jqDlYBeNjSszcXXbwhFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1554.05px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN01d0bgZU28uNyAPxpFJ_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1322.02px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN011mwqNC28uNyCTHdUC_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1244.67px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB2TIB0icuYBuNkSmRyXXcA3pXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1030.64px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2IyYYqx9YBuNjy0FfXXXIsVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1019.84px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2LkVUihuTBuNkHFNRXXc9qpXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1025.23px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2RRmWqxSYBuNjSsphXXbGvVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1028.84px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB21U2oquOSBuNjy0FdXXbDnVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1023.44px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB209qhindYBeNkSmLyXXXfnVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1041.42px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2jHcjqDlYBeNjSszcXXbwhFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1070.2px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2GAu1qqSWBuNjSsrbXXa0mVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1498.3px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2eibrqr5YBuNjSspoXXbeNFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1043.23px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01VY8oQA28uNyCA12gK_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 2088.25px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/O1CN01WM2jER28uNy6GgCIL_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1525.27px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01JdblOV28uNyEQ78ZQ_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1316.62px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2oZhQuASWBuNjSszdXXbeSpXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1629.59px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2UDE9uk9WBuNjSspeXXaz5VXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 777.031px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Bskmuf9TBuNjy0FcXXbeiFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1395.77px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB2osEwukKWBuNjy1zjXXcOypXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1311.23px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Lqw7ukyWBuNjy0FpXXassXXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1320.22px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Th4luxSYBuNjSspjXXX73VXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1688.95px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2uEdfur9YBuNjy0FgXXcxcXXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 2088.25px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN0195dRR128uNyF3E6fa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 78.2344px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01jS3HoM28uNyCPhBPF_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1440.73px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2ZpZBuXGWBuNjy0FbXXb4sXXa_!!2639307992.jpg\" /></div>\n<p>&nbsp;</p>\n</div>\n</div>",
            "discount": 10,
            "create_time": "1970-01-01 08:33:39",
            "update_time": "2026-09-29 21:06:39",
            "delete_time": null,
            "order": 50
          },
          "user": {
            "id": 3,
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg",
            "nickname": "昵称",
            "phone": "15632654658",
            "email": "123@qq.com",
            "user_level_id": 3,
            "create_time": "2019-08-13 01:02:22",
            "update_time": "2021-06-08 16:34:50",
            "last_login_time": null,
            "status": 1,
            "wechat_openid": null,
            "share_num": 2,
            "share_order_num": 2,
            "order_price": "0.20",
            "commission": "0.10",
            "cash_out_price": "0.00",
            "cash_out_time": 0,
            "no_cash_out_price": "0.10",
            "p1": null,
            "p2": null
          }
        },
        {
          "id": 149,
          "order_id": 152,
          "shop_id": 10,
          "num": 1,
          "price": "0.01",
          "rating": 1,
          "review": {
            "data": "这个商品质量不好",
            "image": [
              "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/demo101.jpg"
            ]
          },
          "review_time": "2019-09-01 20:34:27",
          "create_time": "2019-12-17 20:29:51",
          "skus_type": 1,
          "goods_id": 26,
          "goods_num": 0,
          "user_id": 3,
          "extra": [
            {
              "isuser": false,
              "data": "我们将立即召回商品，由快递上门取件，给你带来的不好体验深表歉意！",
              "good_num": 0
            }
          ],
          "status": 1,
          "goods_item": {
            "id": 26,
            "title": "小米-天鹅绒柔暖四件套",
            "category_id": 5,
            "cover": "https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png",
            "rating": 5,
            "sale_count": 1,
            "review_count": 0,
            "min_price": "0.02",
            "min_oprice": "30.00",
            "desc": "天鹅绒面，丝绒时髦高级感",
            "unit": "kg",
            "stock": 200,
            "min_stock": 10,
            "ischeck": 1,
            "status": 1,
            "stock_display": 1,
            "express_id": 1,
            "sku_type": 1,
            "sku_value": {
              "oprice": 20,
              "pprice": 30,
              "cprice": 20,
              "weight": 10,
              "volume": 20
            },
            "content": "<p>&nbsp;</p>\n<div class=\"divide-bar\" style=\"margin: 0px; padding: 0.08rem 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; background-color: #f7f7f7; color: #999999; display: flex; justify-content: center; align-items: center; font-size: 0px; font-family: 'Microsoft YaHei';\">\n<div class=\"icon-info\" style=\"margin: 0px 0.08rem; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; position: relative; top: -0.01rem; display: flex; flex-direction: row; align-items: center; justify-content: center;\"><span class=\"taobao-iconfont \" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-size: 0.18rem; -webkit-font-smoothing: antialiased; -webkit-text-stroke-width: 0.2px; position: relative; font-family: taobao !important;\"></span><span class=\"icon-text\" style=\"margin: 0px 0px 0px 0.01rem; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-size: 0.12rem;\">详情</span></div>\n</div>\n<div class=\"desc-root\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; font-family: 'Microsoft YaHei'; font-size: 16px; background-color: #f7f7f7;\">\n<div class=\"descV6-container\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent;\">\n<div class=\"descV6-mobile-container\" style=\"margin: 0px; padding: 12px 0px 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; width: 1349px; background-color: #ffffff;\"><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1291.44px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2z4cLqCtYBeNjSspaXXaOOFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1084.59px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2qIKTqpGWBuNjy0FbXXb4sXXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 937.109px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2KavKqER1BeNjy0FmXXb0wVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1152.94px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2e2_MqrSYBuNjSspfXXcZCpXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1719.53px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2Ya3jqDlYBeNjSszcXXbwhFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1554.05px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN01d0bgZU28uNyAPxpFJ_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1322.02px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN011mwqNC28uNyCTHdUC_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1244.67px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB2TIB0icuYBuNkSmRyXXcA3pXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1030.64px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2IyYYqx9YBuNjy0FfXXXIsVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1019.84px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2LkVUihuTBuNkHFNRXXc9qpXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1025.23px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2RRmWqxSYBuNjSsphXXbGvVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1028.84px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB21U2oquOSBuNjy0FdXXbDnVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1023.44px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB209qhindYBeNkSmLyXXXfnVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1041.42px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2jHcjqDlYBeNjSszcXXbwhFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1070.2px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2GAu1qqSWBuNjSsrbXXa0mVXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1498.3px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2eibrqr5YBuNjSspoXXbeNFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1043.23px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01VY8oQA28uNyCA12gK_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 2088.25px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/O1CN01WM2jER28uNy6GgCIL_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1525.27px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01JdblOV28uNyEQ78ZQ_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1316.62px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2oZhQuASWBuNjSszdXXbeSpXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1629.59px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/TB2UDE9uk9WBuNjSspeXXaz5VXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 777.031px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Bskmuf9TBuNjy0FcXXbeiFXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1395.77px;\" src=\"https://img.alicdn.com/imgextra/i3/2639307992/TB2osEwukKWBuNjy1zjXXcOypXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1311.23px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Lqw7ukyWBuNjy0FpXXassXXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1320.22px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2Th4luxSYBuNjSspjXXX73VXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1688.95px;\" src=\"https://img.alicdn.com/imgextra/i2/2639307992/TB2uEdfur9YBuNjy0FgXXcxcXXa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 2088.25px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/O1CN0195dRR128uNyF3E6fa_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 78.2344px;\" src=\"https://img.alicdn.com/imgextra/i4/2639307992/O1CN01jS3HoM28uNyCPhBPF_!!2639307992.jpg\" /><img class=\"descV6-mobile-image lazyload\" style=\"margin: 0px; padding: 0px; box-sizing: border-box; outline: 0px; -webkit-tap-highlight-color: transparent; display: block; width: 1349px; height: 1440.73px;\" src=\"https://img.alicdn.com/imgextra/i1/2639307992/TB2ZpZBuXGWBuNjy0FbXXb4sXXa_!!2639307992.jpg\" /></div>\n<p>&nbsp;</p>\n</div>\n</div>",
            "discount": 10,
            "create_time": "1970-01-01 08:33:39",
            "update_time": "2026-09-29 21:06:39",
            "delete_time": null,
            "order": 50
          },
          "user": {
            "id": 3,
            "username": "user",
            "avatar": "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg",
            "nickname": "昵称",
            "phone": "15632654658",
            "email": "123@qq.com",
            "user_level_id": 3,
            "create_time": "2019-08-13 01:02:22",
            "update_time": "2021-06-08 16:34:50",
            "last_login_time": null,
            "status": 1,
            "wechat_openid": null,
            "share_num": 2,
            "share_order_num": 2,
            "order_price": "0.20",
            "commission": "0.10",
            "cash_out_price": "0.00",
            "cash_out_time": 0,
            "no_cash_out_price": "0.10",
            "p1": null,
            "p2": null
          }
        }
      ],
      "totalCount": 4,
      "sourceTotalCount": 4
    },
    {
      "note": "商品规格列表",
      "method": "GET",
      "pattern": "/skus/{page}",
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {},
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 1855,
          "name": "净含量",
          "type": 0,
          "create_time": "2026-10-14 10:56:55",
          "update_time": "2026-10-14 10:56:55",
          "status": 1,
          "order": 60,
          "default": "500g,1kg,2kg,5kg"
        },
        {
          "id": 1854,
          "name": "尺寸",
          "type": 0,
          "create_time": "2026-10-14 10:56:55",
          "update_time": "2026-10-14 10:56:55",
          "status": 1,
          "order": 50,
          "default": "S,M,L,XL,XXL"
        },
        {
          "id": 1806,
          "name": "颜色",
          "type": 0,
          "create_time": "2026-10-09 11:04:53",
          "update_time": "2026-10-11 19:31:03",
          "status": 1,
          "order": 50,
          "default": "蓝色,红色,黄色,绿色,橙色"
        },
        {
          "id": 1805,
          "name": "体重",
          "type": 0,
          "create_time": "2026-10-09 11:04:53",
          "update_time": "2026-10-09 11:04:53",
          "status": 1,
          "order": 50,
          "default": "50,60,70,80"
        },
        {
          "id": 1809,
          "name": "尺码",
          "type": 0,
          "create_time": "2026-10-10 10:06:07",
          "update_time": "2026-10-10 10:06:12",
          "status": 1,
          "order": 49,
          "default": "s,m"
        },
        {
          "id": 1853,
          "name": "套餐",
          "type": 0,
          "create_time": "2026-10-14 10:56:54",
          "update_time": "2026-10-14 10:56:54",
          "status": 1,
          "order": 30,
          "default": "官方标配,套餐一,套餐二,套餐三"
        },
        {
          "id": 1852,
          "name": "版本",
          "type": 0,
          "create_time": "2026-10-14 10:56:53",
          "update_time": "2026-10-14 10:56:53",
          "status": 1,
          "order": 20,
          "default": "标准版,Pro版,Max版"
        },
        {
          "id": 1851,
          "name": "容量",
          "type": 0,
          "create_time": "2026-10-14 10:56:52",
          "update_time": "2026-10-14 10:56:52",
          "status": 1,
          "order": 10,
          "default": "128GB,256GB,512GB,1TB"
        }
      ],
      "totalCount": 8,
      "sourceTotalCount": 8
    },
    {
      "note": "分类树",
      "method": "GET",
      "pattern": "/category",
      "kind": "static",
      "data": {
        "msg": "ok",
        "data": [
          {
            "id": 5,
            "name": "手机数码",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-10-14 10:54:23",
            "category_id": 0,
            "order": 0,
            "child": []
          },
          {
            "id": 3,
            "name": "运动旅行",
            "status": 1,
            "create_time": "2019-08-17 00:57:12",
            "update_time": "2026-10-14 16:06:03",
            "category_id": 0,
            "order": 3,
            "child": []
          },
          {
            "id": 4,
            "name": "居家生活",
            "status": 1,
            "create_time": "2019-08-17 00:57:12",
            "update_time": "2026-09-25 20:31:31",
            "category_id": 0,
            "order": 4,
            "child": []
          },
          {
            "id": 372,
            "name": "智能家电",
            "status": 1,
            "create_time": "2021-12-19 15:45:43",
            "update_time": "2026-09-24 19:36:05",
            "category_id": 0,
            "order": 49,
            "child": []
          },
          {
            "id": 1130,
            "name": "123",
            "status": 1,
            "create_time": "2026-10-14 16:06:00",
            "update_time": "2026-10-14 16:06:00",
            "category_id": 0,
            "order": 50,
            "child": []
          },
          {
            "id": 1124,
            "name": "数码产品",
            "status": 1,
            "create_time": "2026-10-12 15:52:13",
            "update_time": "2026-10-14 16:06:03",
            "category_id": 0,
            "order": 50,
            "child": []
          }
        ],
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      }
    },
    {
      "note": "权限规则树",
      "method": "GET",
      "pattern": "/rule/:id",
      "kind": "static",
      "data": {
        "msg": "ok",
        "data": {
          "list": [
            {
              "id": 5,
              "rule_id": 0,
              "status": 1,
              "create_time": "2019-08-11 13:36:09",
              "update_time": "2021-12-21 19:31:11",
              "name": "后台面板",
              "desc": "index",
              "frontpath": null,
              "condition": null,
              "menu": 1,
              "order": 1,
              "icon": "help",
              "method": "GET",
              "child": [
                {
                  "id": 10,
                  "rule_id": 5,
                  "status": 1,
                  "create_time": "2019-08-11 13:37:02",
                  "update_time": "2021-12-21 20:21:23",
                  "name": "主控台",
                  "desc": "index",
                  "frontpath": "/",
                  "condition": null,
                  "menu": 1,
                  "order": 20,
                  "icon": "home-filled",
                  "method": "GET",
                  "child": [
                    {
                      "id": 174,
                      "rule_id": 10,
                      "status": 1,
                      "create_time": "2022-06-18 00:04:13",
                      "update_time": "2022-06-18 00:04:13",
                      "name": "后台面板统计1",
                      "desc": "",
                      "frontpath": "",
                      "condition": "getStatistics1",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 175,
                      "rule_id": 10,
                      "status": 1,
                      "create_time": "2022-06-18 00:04:42",
                      "update_time": "2022-06-18 00:04:42",
                      "name": "后台面板统计2",
                      "desc": "",
                      "frontpath": "",
                      "condition": "getStatistics2",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 176,
                      "rule_id": 10,
                      "status": 1,
                      "create_time": "2022-06-18 00:04:53",
                      "update_time": "2022-06-18 00:04:53",
                      "name": "后台面板统计3",
                      "desc": "",
                      "frontpath": "",
                      "condition": "getStatistics3",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 6,
              "rule_id": 0,
              "status": 1,
              "create_time": "2019-08-11 13:36:36",
              "update_time": "2021-12-21 19:37:11",
              "name": "商品管理",
              "desc": "shop_goods_list",
              "frontpath": null,
              "condition": null,
              "menu": 1,
              "order": 2,
              "icon": "shopping-bag",
              "method": "GET",
              "child": [
                {
                  "id": 13,
                  "rule_id": 6,
                  "status": 1,
                  "create_time": "2019-12-28 13:42:13",
                  "update_time": "2021-12-21 20:21:42",
                  "name": "商品管理",
                  "desc": "shop_goods_list",
                  "frontpath": "/goods/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "shopping-cart-full",
                  "method": "GET",
                  "child": [
                    {
                      "id": 61,
                      "rule_id": 13,
                      "status": 1,
                      "create_time": "2021-01-14 00:38:53",
                      "update_time": "2022-06-17 23:42:15",
                      "name": "商品列表分页",
                      "desc": "",
                      "frontpath": "",
                      "condition": "getGoodsList",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 127,
                      "rule_id": 13,
                      "status": 1,
                      "create_time": "2021-02-25 16:01:39",
                      "update_time": "2022-06-17 23:46:46",
                      "name": "查看指定商品",
                      "desc": "",
                      "frontpath": "",
                      "condition": "readGoods",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 128,
                      "rule_id": 13,
                      "status": 1,
                      "create_time": "2021-02-25 16:03:00",
                      "update_time": "2022-06-17 23:47:04",
                      "name": "配置商品规格",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateGoodsSkus",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 129,
                      "rule_id": 13,
                      "status": 1,
                      "create_time": "2021-02-25 16:04:52",
                      "update_time": "2022-06-17 23:47:16",
                      "name": "配置商品轮播图",
                      "desc": "",
                      "frontpath": "",
                      "condition": "setGoodsBanner",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 131,
                      "rule_id": 13,
                      "status": 1,
                      "create_time": "2021-02-25 16:06:47",
                      "update_time": "2022-06-17 23:47:31",
                      "name": "恢复商品",
                      "desc": "",
                      "frontpath": "",
                      "condition": "restoreGoods",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 132,
                      "rule_id": 13,
                      "status": 1,
                      "create_time": "2021-02-25 16:07:11",
                      "update_time": "2022-06-17 23:47:40",
                      "name": "彻底删除商品",
                      "desc": "",
                      "frontpath": "",
                      "condition": "destroyGoods",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 133,
                      "rule_id": 13,
                      "status": 1,
                      "create_time": "2021-02-25 16:07:28",
                      "update_time": "2022-06-17 23:47:53",
                      "name": "批量删除商品",
                      "desc": "",
                      "frontpath": "",
                      "condition": "deleteGoods",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 134,
                      "rule_id": 13,
                      "status": 1,
                      "create_time": "2021-02-25 16:07:47",
                      "update_time": "2022-06-17 23:48:04",
                      "name": "修改商品状态",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateGoodsStatus",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 135,
                      "rule_id": 13,
                      "status": 1,
                      "create_time": "2021-02-25 16:08:04",
                      "update_time": "2022-06-17 23:48:13",
                      "name": "创建商品",
                      "desc": "",
                      "frontpath": "",
                      "condition": "createGoods",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 136,
                      "rule_id": 13,
                      "status": 1,
                      "create_time": "2021-02-25 16:08:25",
                      "update_time": "2022-06-17 23:48:22",
                      "name": "更新商品",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateGoods",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 137,
                      "rule_id": 13,
                      "status": 1,
                      "create_time": "2021-02-25 16:08:52",
                      "update_time": "2022-06-17 23:48:31",
                      "name": "审核商品",
                      "desc": "",
                      "frontpath": "",
                      "condition": "checkGoods",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 140,
                      "rule_id": 13,
                      "status": 1,
                      "create_time": "2021-02-25 16:09:58",
                      "update_time": "2022-06-17 23:48:59",
                      "name": "创建商品规格",
                      "desc": "",
                      "frontpath": "",
                      "condition": "createGoodsSkusCard",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 141,
                      "rule_id": 13,
                      "status": 1,
                      "create_time": "2021-02-25 16:10:19",
                      "update_time": "2022-06-17 23:49:08",
                      "name": "排序商品规格",
                      "desc": "",
                      "frontpath": "",
                      "condition": "sortGoodsSkusCard",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 142,
                      "rule_id": 13,
                      "status": 1,
                      "create_time": "2021-02-25 16:10:39",
                      "update_time": "2022-06-17 23:49:21",
                      "name": "更新商品规格",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateGoodsSkusCard",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 143,
                      "rule_id": 13,
                      "status": 1,
                      "create_time": "2021-02-25 16:11:01",
                      "update_time": "2022-06-17 23:49:38",
                      "name": "删除商品规格",
                      "desc": "",
                      "frontpath": "",
                      "condition": "deleteGoodsSkusCard",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 145,
                      "rule_id": 13,
                      "status": 1,
                      "create_time": "2021-02-25 16:11:59",
                      "update_time": "2022-06-17 23:49:54",
                      "name": "创建指定商品规格的值",
                      "desc": "",
                      "frontpath": "",
                      "condition": "createGoodsSkusCardValue",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 147,
                      "rule_id": 13,
                      "status": 1,
                      "create_time": "2021-02-25 16:12:51",
                      "update_time": "2022-06-17 23:50:19",
                      "name": "更新指定商品规格的值",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateGoodsSkusCardValue",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 148,
                      "rule_id": 13,
                      "status": 1,
                      "create_time": "2021-02-25 16:13:14",
                      "update_time": "2022-06-17 23:50:31",
                      "name": "删除指定商品规格的值",
                      "desc": "",
                      "frontpath": "",
                      "condition": "deleteGoodsSkusCardValue",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    }
                  ]
                },
                {
                  "id": 14,
                  "rule_id": 6,
                  "status": 1,
                  "create_time": "2019-12-28 13:44:00",
                  "update_time": "2021-12-21 20:22:00",
                  "name": "分类管理",
                  "desc": "shop_category_list",
                  "frontpath": "/category/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "menu",
                  "method": "GET",
                  "child": [
                    {
                      "id": 71,
                      "rule_id": 14,
                      "status": 1,
                      "create_time": "2021-02-25 14:06:31",
                      "update_time": "2022-06-17 23:50:43",
                      "name": "分类列表",
                      "desc": "",
                      "frontpath": "",
                      "condition": "getCategoryList",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 72,
                      "rule_id": 14,
                      "status": 1,
                      "create_time": "2021-02-25 14:06:54",
                      "update_time": "2021-02-25 14:06:54",
                      "name": "创建分类",
                      "desc": "",
                      "frontpath": "",
                      "condition": "createCategory",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 73,
                      "rule_id": 14,
                      "status": 1,
                      "create_time": "2021-02-25 14:07:12",
                      "update_time": "2021-02-25 14:07:12",
                      "name": "分类排序",
                      "desc": "",
                      "frontpath": "",
                      "condition": "sortCategory",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 74,
                      "rule_id": 14,
                      "status": 1,
                      "create_time": "2021-02-25 14:07:28",
                      "update_time": "2021-02-25 14:07:28",
                      "name": "更新分类",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateCategory",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 75,
                      "rule_id": 14,
                      "status": 1,
                      "create_time": "2021-02-25 14:07:49",
                      "update_time": "2021-02-25 14:07:49",
                      "name": "更新分类状态",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateCategoryStatus",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 76,
                      "rule_id": 14,
                      "status": 1,
                      "create_time": "2021-02-25 14:08:58",
                      "update_time": "2021-02-25 14:08:58",
                      "name": "删除分类",
                      "desc": "",
                      "frontpath": "",
                      "condition": "deleteCategory",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "DELETE",
                      "child": []
                    },
                    {
                      "id": 162,
                      "rule_id": 14,
                      "status": 1,
                      "create_time": "2021-06-14 17:40:59",
                      "update_time": "2021-06-14 17:41:19",
                      "name": "分类下的推荐列表",
                      "desc": "",
                      "frontpath": "",
                      "condition": "getCategoryGoods",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 163,
                      "rule_id": 14,
                      "status": 1,
                      "create_time": "2021-06-14 17:41:46",
                      "update_time": "2021-06-14 17:41:46",
                      "name": "添加分类推荐",
                      "desc": "",
                      "frontpath": "",
                      "condition": "connectCategoryGoods",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 164,
                      "rule_id": 14,
                      "status": 1,
                      "create_time": "2021-06-14 17:42:11",
                      "update_time": "2021-06-14 17:42:39",
                      "name": "删除分类推荐",
                      "desc": "",
                      "frontpath": "",
                      "condition": "deleteCategoryGoods",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    }
                  ]
                },
                {
                  "id": 15,
                  "rule_id": 6,
                  "status": 1,
                  "create_time": "2019-12-28 13:44:32",
                  "update_time": "2021-12-21 20:22:11",
                  "name": "规格管理",
                  "desc": "shop_sku_list",
                  "frontpath": "/skus/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "aim",
                  "method": "GET",
                  "child": [
                    {
                      "id": 77,
                      "rule_id": 15,
                      "status": 1,
                      "create_time": "2021-02-25 14:09:17",
                      "update_time": "2021-02-25 14:09:17",
                      "name": "商品规格分类",
                      "desc": "",
                      "frontpath": "",
                      "condition": "getSkusList",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 78,
                      "rule_id": 15,
                      "status": 1,
                      "create_time": "2021-02-25 14:09:31",
                      "update_time": "2021-02-25 14:09:31",
                      "name": "创建规格",
                      "desc": "",
                      "frontpath": "",
                      "condition": "createSkus",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 79,
                      "rule_id": 15,
                      "status": 1,
                      "create_time": "2021-02-25 14:09:47",
                      "update_time": "2021-02-25 14:09:47",
                      "name": "批量删除规格",
                      "desc": "",
                      "frontpath": "",
                      "condition": "deleteSkus",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 80,
                      "rule_id": 15,
                      "status": 1,
                      "create_time": "2021-02-25 14:10:01",
                      "update_time": "2021-02-25 14:10:01",
                      "name": "更新规格",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateSkus",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 81,
                      "rule_id": 15,
                      "status": 1,
                      "create_time": "2021-02-25 14:10:17",
                      "update_time": "2021-02-25 14:10:17",
                      "name": "更新规格状态",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateSkusStatus",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    }
                  ]
                },
                {
                  "id": 157,
                  "rule_id": 6,
                  "status": 1,
                  "create_time": "2021-06-12 21:57:02",
                  "update_time": "2021-12-21 20:22:52",
                  "name": "优惠券管理",
                  "desc": "shop_coupon_list",
                  "frontpath": "/coupon/list",
                  "condition": "",
                  "menu": 1,
                  "order": 50,
                  "icon": "postcard",
                  "method": "GET",
                  "child": [
                    {
                      "id": 158,
                      "rule_id": 157,
                      "status": 1,
                      "create_time": "2021-06-12 22:00:35",
                      "update_time": "2021-06-12 22:00:35",
                      "name": "优惠券列表",
                      "desc": "",
                      "frontpath": "",
                      "condition": "getCouponList",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 159,
                      "rule_id": 157,
                      "status": 1,
                      "create_time": "2021-06-12 22:01:02",
                      "update_time": "2021-06-12 22:01:02",
                      "name": "新增优惠券",
                      "desc": "",
                      "frontpath": "",
                      "condition": "createCoupon",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 160,
                      "rule_id": 157,
                      "status": 1,
                      "create_time": "2021-06-12 22:01:22",
                      "update_time": "2021-06-12 22:01:22",
                      "name": "更新优惠券",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateCoupon",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 161,
                      "rule_id": 157,
                      "status": 1,
                      "create_time": "2021-06-12 22:01:43",
                      "update_time": "2021-06-13 11:34:00",
                      "name": "失效优惠券",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateCouponStatus",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 181,
                      "rule_id": 157,
                      "status": 1,
                      "create_time": "2022-06-18 00:49:09",
                      "update_time": "2022-06-18 00:49:09",
                      "name": "删除优惠券",
                      "desc": "",
                      "frontpath": "",
                      "condition": "deleteCoupon",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 173,
              "rule_id": 0,
              "status": 1,
              "create_time": "2021-12-21 19:38:21",
              "update_time": "2021-12-21 19:38:21",
              "name": "用户管理",
              "desc": "",
              "frontpath": "",
              "condition": "",
              "menu": 1,
              "order": 3,
              "icon": "user",
              "method": "GET",
              "child": [
                {
                  "id": 21,
                  "rule_id": 173,
                  "status": 1,
                  "create_time": "2019-12-28 13:46:45",
                  "update_time": "2021-12-21 20:22:35",
                  "name": "用户管理",
                  "desc": "user_user-list_list",
                  "frontpath": "/user/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "user-filled",
                  "method": "GET",
                  "child": [
                    {
                      "id": 97,
                      "rule_id": 21,
                      "status": 1,
                      "create_time": "2021-02-25 14:40:02",
                      "update_time": "2021-02-25 14:40:02",
                      "name": "会员列表",
                      "desc": "",
                      "frontpath": "",
                      "condition": "getUserList",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 98,
                      "rule_id": 21,
                      "status": 1,
                      "create_time": "2021-02-25 14:42:53",
                      "update_time": "2021-02-25 14:42:53",
                      "name": "创建会员",
                      "desc": "",
                      "frontpath": "",
                      "condition": "createUser",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 99,
                      "rule_id": 21,
                      "status": 1,
                      "create_time": "2021-02-25 14:43:13",
                      "update_time": "2021-02-25 14:43:13",
                      "name": "更新会员",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateUser",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 100,
                      "rule_id": 21,
                      "status": 1,
                      "create_time": "2021-02-25 14:44:04",
                      "update_time": "2021-02-25 14:44:04",
                      "name": "更新会员状态",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateUserStatus",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 101,
                      "rule_id": 21,
                      "status": 1,
                      "create_time": "2021-02-25 14:44:29",
                      "update_time": "2021-02-25 14:44:29",
                      "name": "删除会员",
                      "desc": "",
                      "frontpath": "",
                      "condition": "deleteUser",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    }
                  ]
                },
                {
                  "id": 22,
                  "rule_id": 173,
                  "status": 1,
                  "create_time": "2019-12-28 13:46:59",
                  "update_time": "2021-12-21 20:22:44",
                  "name": "会员等级",
                  "desc": "user_user-level_list",
                  "frontpath": "/level/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "data-analysis",
                  "method": "GET",
                  "child": [
                    {
                      "id": 102,
                      "rule_id": 22,
                      "status": 1,
                      "create_time": "2021-02-25 15:29:51",
                      "update_time": "2021-02-25 15:29:51",
                      "name": "会员等级列表",
                      "desc": "",
                      "frontpath": "",
                      "condition": "getUserLevelList",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 103,
                      "rule_id": 22,
                      "status": 1,
                      "create_time": "2021-02-25 15:30:15",
                      "update_time": "2021-02-25 15:30:15",
                      "name": "创建会员等级",
                      "desc": "",
                      "frontpath": "",
                      "condition": "createUserLevel",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 104,
                      "rule_id": 22,
                      "status": 1,
                      "create_time": "2021-02-25 15:30:34",
                      "update_time": "2021-02-25 15:30:34",
                      "name": "更新会员等级",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateUserLevel",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 105,
                      "rule_id": 22,
                      "status": 1,
                      "create_time": "2021-02-25 15:31:06",
                      "update_time": "2021-02-25 15:31:06",
                      "name": "更新会员等级状态",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateUserLevelStatus",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 106,
                      "rule_id": 22,
                      "status": 1,
                      "create_time": "2021-02-25 15:31:26",
                      "update_time": "2021-02-25 15:31:34",
                      "name": "删除会员等级",
                      "desc": "",
                      "frontpath": "",
                      "condition": "deleteUserLevel",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 7,
              "rule_id": 0,
              "status": 1,
              "create_time": "2019-08-11 13:36:40",
              "update_time": "2021-12-21 19:37:18",
              "name": "订单管理",
              "desc": "order_order_list",
              "frontpath": null,
              "condition": null,
              "menu": 1,
              "order": 4,
              "icon": "message-box",
              "method": "GET",
              "child": [
                {
                  "id": 18,
                  "rule_id": 7,
                  "status": 1,
                  "create_time": "2019-12-28 13:45:42",
                  "update_time": "2021-12-21 20:23:02",
                  "name": "订单管理",
                  "desc": "order_order_list",
                  "frontpath": "/order/list",
                  "condition": "",
                  "menu": 1,
                  "order": 1,
                  "icon": "reading",
                  "method": "GET",
                  "child": [
                    {
                      "id": 89,
                      "rule_id": 18,
                      "status": 1,
                      "create_time": "2021-02-25 14:35:03",
                      "update_time": "2021-02-25 14:35:03",
                      "name": "订单列表",
                      "desc": "",
                      "frontpath": "",
                      "condition": "getOrderList",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 90,
                      "rule_id": 18,
                      "status": 1,
                      "create_time": "2021-02-25 14:36:24",
                      "update_time": "2021-02-25 14:36:24",
                      "name": "批量删除订单",
                      "desc": "",
                      "frontpath": "",
                      "condition": "deleteOrder",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 91,
                      "rule_id": 18,
                      "status": 1,
                      "create_time": "2021-02-25 14:36:49",
                      "update_time": "2021-02-25 14:36:49",
                      "name": "订单发货",
                      "desc": "",
                      "frontpath": "",
                      "condition": "shipOrder",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 92,
                      "rule_id": 18,
                      "status": 1,
                      "create_time": "2021-02-25 14:37:30",
                      "update_time": "2021-02-25 14:37:30",
                      "name": "拒绝/同意退货",
                      "desc": "",
                      "frontpath": "",
                      "condition": "refundOrder",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 93,
                      "rule_id": 18,
                      "status": 1,
                      "create_time": "2021-02-25 14:37:48",
                      "update_time": "2021-02-25 14:37:48",
                      "name": "导出订单",
                      "desc": "",
                      "frontpath": "",
                      "condition": "exportOrder",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 182,
                      "rule_id": 18,
                      "status": 1,
                      "create_time": "2022-06-18 00:59:01",
                      "update_time": "2022-06-18 00:59:01",
                      "name": "查看物流信息",
                      "desc": "",
                      "frontpath": "",
                      "condition": "getShipInfo",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 183,
                      "rule_id": 18,
                      "status": 1,
                      "create_time": "2022-06-18 00:59:26",
                      "update_time": "2022-06-18 00:59:26",
                      "name": "获取快递列表",
                      "desc": "",
                      "frontpath": "",
                      "condition": "getExpressCompanyList",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    }
                  ]
                },
                {
                  "id": 17,
                  "rule_id": 7,
                  "status": 1,
                  "create_time": "2019-12-28 13:44:56",
                  "update_time": "2021-12-21 20:22:26",
                  "name": "评论管理",
                  "desc": "shop_comment_list",
                  "frontpath": "/comment/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "comment",
                  "method": "GET",
                  "child": [
                    {
                      "id": 94,
                      "rule_id": 17,
                      "status": 1,
                      "create_time": "2021-02-25 14:38:34",
                      "update_time": "2021-02-25 14:38:34",
                      "name": "评论列表",
                      "desc": "",
                      "frontpath": "",
                      "condition": "getCommentList",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 95,
                      "rule_id": 17,
                      "status": 1,
                      "create_time": "2021-02-25 14:39:00",
                      "update_time": "2021-02-25 14:39:00",
                      "name": "回复评论",
                      "desc": "",
                      "frontpath": "",
                      "condition": "reviewComment",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 96,
                      "rule_id": 17,
                      "status": 1,
                      "create_time": "2021-02-25 14:39:25",
                      "update_time": "2021-02-25 14:39:25",
                      "name": "更新评论状态",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateCommentStatus",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 8,
              "rule_id": 0,
              "status": 1,
              "create_time": "2019-08-11 13:36:43",
              "update_time": "2021-12-21 19:37:25",
              "name": "管理员管理",
              "desc": "user_user-list_list",
              "frontpath": null,
              "condition": null,
              "menu": 1,
              "order": 5,
              "icon": "management",
              "method": "GET",
              "child": [
                {
                  "id": 25,
                  "rule_id": 8,
                  "status": 1,
                  "create_time": "2019-12-28 13:47:39",
                  "update_time": "2021-12-21 20:23:53",
                  "name": "管理员管理",
                  "desc": "set_manager",
                  "frontpath": "/manager/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "coordinate",
                  "method": "GET",
                  "child": [
                    {
                      "id": 108,
                      "rule_id": 25,
                      "status": 1,
                      "create_time": "2021-02-25 15:33:19",
                      "update_time": "2021-02-25 15:33:19",
                      "name": "删除管理员",
                      "desc": "",
                      "frontpath": "",
                      "condition": "deleteManager",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 109,
                      "rule_id": 25,
                      "status": 1,
                      "create_time": "2021-02-25 15:33:54",
                      "update_time": "2021-02-25 15:33:54",
                      "name": "管理员列表",
                      "desc": "",
                      "frontpath": "",
                      "condition": "getManagerList",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 110,
                      "rule_id": 25,
                      "status": 1,
                      "create_time": "2021-02-25 15:34:11",
                      "update_time": "2021-02-25 15:34:11",
                      "name": "创建管理员",
                      "desc": "",
                      "frontpath": "",
                      "condition": "createManager",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 111,
                      "rule_id": 25,
                      "status": 1,
                      "create_time": "2021-02-25 15:34:29",
                      "update_time": "2021-02-25 15:34:29",
                      "name": "更新管理员",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateManager",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 112,
                      "rule_id": 25,
                      "status": 1,
                      "create_time": "2021-02-25 15:34:46",
                      "update_time": "2021-02-25 15:34:46",
                      "name": "更新管理员状态",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateManagerStatus",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    }
                  ]
                },
                {
                  "id": 27,
                  "rule_id": 8,
                  "status": 1,
                  "create_time": "2020-01-03 21:05:50",
                  "update_time": "2021-12-21 20:24:04",
                  "name": "权限管理",
                  "desc": "",
                  "frontpath": "/access/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "connection",
                  "method": "GET",
                  "child": [
                    {
                      "id": 28,
                      "rule_id": 27,
                      "status": 1,
                      "create_time": "2020-01-03 21:06:50",
                      "update_time": "2020-01-03 21:06:50",
                      "name": "添加规则",
                      "desc": "",
                      "frontpath": null,
                      "condition": "createRule",
                      "menu": 0,
                      "order": 20,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 29,
                      "rule_id": 27,
                      "status": 1,
                      "create_time": "2020-01-03 21:09:31",
                      "update_time": "2020-01-03 21:09:31",
                      "name": "更新规则",
                      "desc": "",
                      "frontpath": null,
                      "condition": "updateRule",
                      "menu": 0,
                      "order": 20,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 30,
                      "rule_id": 27,
                      "status": 1,
                      "create_time": "2020-01-03 21:09:49",
                      "update_time": "2020-02-05 03:13:31",
                      "name": "删除规则",
                      "desc": "",
                      "frontpath": null,
                      "condition": "deleteRule",
                      "menu": 0,
                      "order": 20,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 31,
                      "rule_id": 27,
                      "status": 1,
                      "create_time": "2020-01-03 21:10:10",
                      "update_time": "2020-01-03 21:10:10",
                      "name": "规则列表",
                      "desc": "",
                      "frontpath": null,
                      "condition": "getRuleList",
                      "menu": 0,
                      "order": 20,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 32,
                      "rule_id": 27,
                      "status": 1,
                      "create_time": "2020-01-03 21:10:59",
                      "update_time": "2020-01-03 21:10:59",
                      "name": "更新规则状态",
                      "desc": "",
                      "frontpath": null,
                      "condition": "updateRuleStatus",
                      "menu": 0,
                      "order": 20,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    }
                  ]
                },
                {
                  "id": 33,
                  "rule_id": 8,
                  "status": 1,
                  "create_time": "2020-01-04 18:15:47",
                  "update_time": "2021-12-21 20:18:11",
                  "name": "角色管理",
                  "desc": "",
                  "frontpath": "/role/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "histogram",
                  "method": "GET",
                  "child": [
                    {
                      "id": 34,
                      "rule_id": 33,
                      "status": 1,
                      "create_time": "2020-01-04 18:16:16",
                      "update_time": "2020-01-04 18:16:16",
                      "name": "添加角色",
                      "desc": "",
                      "frontpath": null,
                      "condition": "createRole",
                      "menu": 0,
                      "order": 20,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 35,
                      "rule_id": 33,
                      "status": 1,
                      "create_time": "2020-02-05 03:12:30",
                      "update_time": "2020-02-05 03:12:30",
                      "name": "更新角色",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateRole",
                      "menu": 0,
                      "order": 20,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 36,
                      "rule_id": 33,
                      "status": 1,
                      "create_time": "2020-02-05 03:14:00",
                      "update_time": "2020-02-05 03:14:00",
                      "name": "删除角色",
                      "desc": "",
                      "frontpath": "",
                      "condition": "deleteRole",
                      "menu": 0,
                      "order": 20,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 37,
                      "rule_id": 33,
                      "status": 1,
                      "create_time": "2020-02-05 03:14:25",
                      "update_time": "2020-02-05 03:14:25",
                      "name": "角色列表",
                      "desc": "",
                      "frontpath": "",
                      "condition": "getRoleList",
                      "menu": 0,
                      "order": 20,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 38,
                      "rule_id": 33,
                      "status": 1,
                      "create_time": "2020-02-05 03:14:53",
                      "update_time": "2020-02-05 03:14:53",
                      "name": "更新角色状态",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateRoleStatus",
                      "menu": 0,
                      "order": 20,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 180,
                      "rule_id": 33,
                      "status": 1,
                      "create_time": "2022-06-18 00:45:07",
                      "update_time": "2022-06-18 00:45:07",
                      "name": "给角色配置权限",
                      "desc": "",
                      "frontpath": "",
                      "condition": "setRoleRules",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 9,
              "rule_id": 0,
              "status": 1,
              "create_time": "2019-08-11 13:36:50",
              "update_time": "2021-12-21 19:10:15",
              "name": "系统设置",
              "desc": "set_base",
              "frontpath": null,
              "condition": null,
              "menu": 1,
              "order": 6,
              "icon": "setting",
              "method": "GET",
              "child": [
                {
                  "id": 23,
                  "rule_id": 9,
                  "status": 1,
                  "create_time": "2019-12-28 13:47:15",
                  "update_time": "2021-12-21 20:23:12",
                  "name": "基础设置",
                  "desc": "set_base",
                  "frontpath": "/setting/base",
                  "condition": "",
                  "menu": 1,
                  "order": 19,
                  "icon": "baseball",
                  "method": "GET",
                  "child": [
                    {
                      "id": 121,
                      "rule_id": 23,
                      "status": 1,
                      "create_time": "2021-02-25 15:48:27",
                      "update_time": "2021-02-25 15:51:25",
                      "name": "获取配置信息",
                      "desc": "",
                      "frontpath": "",
                      "condition": "getSysSetting",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 123,
                      "rule_id": 23,
                      "status": 1,
                      "create_time": "2021-02-25 15:50:40",
                      "update_time": "2021-02-25 15:51:42",
                      "name": "设置配置信息",
                      "desc": "",
                      "frontpath": "",
                      "condition": "setSysSetting",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    }
                  ]
                },
                {
                  "id": 26,
                  "rule_id": 9,
                  "status": 1,
                  "create_time": "2019-12-28 13:47:57",
                  "update_time": "2021-12-21 20:23:22",
                  "name": "交易设置",
                  "desc": "set_payment",
                  "frontpath": "/setting/buy",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "credit-card",
                  "method": "GET",
                  "child": [
                    {
                      "id": 122,
                      "rule_id": 26,
                      "status": 1,
                      "create_time": "2021-02-25 15:50:10",
                      "update_time": "2021-02-25 15:52:33",
                      "name": "上传相关配置文件",
                      "desc": "",
                      "frontpath": "",
                      "condition": "sysconfigUpload",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 124,
                      "rule_id": 26,
                      "status": 1,
                      "create_time": "2021-02-25 15:58:40",
                      "update_time": "2021-02-25 15:58:40",
                      "name": "获取配置",
                      "desc": "",
                      "frontpath": "",
                      "condition": "getSysSetting",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 125,
                      "rule_id": 26,
                      "status": 1,
                      "create_time": "2021-02-25 15:58:54",
                      "update_time": "2021-02-25 15:58:54",
                      "name": "设置配置",
                      "desc": "",
                      "frontpath": "",
                      "condition": "setSysSetting",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    }
                  ]
                },
                {
                  "id": 24,
                  "rule_id": 9,
                  "status": 1,
                  "create_time": "2019-12-28 13:47:27",
                  "update_time": "2021-12-21 20:20:53",
                  "name": "物流设置",
                  "desc": "set_express",
                  "frontpath": "/setting/ship",
                  "condition": "",
                  "menu": 1,
                  "order": 21,
                  "icon": "bicycle",
                  "method": "GET",
                  "child": []
                }
              ]
            },
            {
              "id": 177,
              "rule_id": 0,
              "status": 1,
              "create_time": "2022-06-18 00:12:10",
              "update_time": "2022-06-18 00:12:10",
              "name": "分销模块",
              "desc": null,
              "frontpath": "",
              "condition": "",
              "menu": 1,
              "order": 7,
              "icon": "shopping-cart",
              "method": "GET",
              "child": [
                {
                  "id": 178,
                  "rule_id": 177,
                  "status": 1,
                  "create_time": "2022-06-18 00:14:58",
                  "update_time": "2022-06-18 00:14:58",
                  "name": "分销员管理",
                  "desc": null,
                  "frontpath": "/distribution/index",
                  "condition": "",
                  "menu": 1,
                  "order": 50,
                  "icon": "user-filled",
                  "method": "GET",
                  "child": [
                    {
                      "id": 342,
                      "rule_id": 178,
                      "status": 1,
                      "create_time": "2022-07-27 18:15:57",
                      "update_time": "2022-07-27 18:15:57",
                      "name": "分销数据统计",
                      "desc": null,
                      "frontpath": "",
                      "condition": "getAgentStatistics",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 343,
                      "rule_id": 178,
                      "status": 1,
                      "create_time": "2022-07-27 18:16:14",
                      "update_time": "2022-07-27 18:16:14",
                      "name": "分销推广员列表",
                      "desc": null,
                      "frontpath": "",
                      "condition": "getAgentList",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 344,
                      "rule_id": 178,
                      "status": 1,
                      "create_time": "2022-07-27 18:16:32",
                      "update_time": "2022-07-27 18:16:32",
                      "name": "推广订单列表",
                      "desc": null,
                      "frontpath": "",
                      "condition": "getUserBillList",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    }
                  ]
                },
                {
                  "id": 179,
                  "rule_id": 177,
                  "status": 1,
                  "create_time": "2022-06-18 00:15:25",
                  "update_time": "2022-06-18 00:15:25",
                  "name": "分销设置",
                  "desc": null,
                  "frontpath": "/distribution/setting",
                  "condition": "",
                  "menu": 1,
                  "order": 50,
                  "icon": "set-up",
                  "method": "GET",
                  "child": [
                    {
                      "id": 345,
                      "rule_id": 179,
                      "status": 1,
                      "create_time": "2022-07-27 18:16:57",
                      "update_time": "2022-07-27 18:16:57",
                      "name": "获取分销配置",
                      "desc": null,
                      "frontpath": "",
                      "condition": "getDistributionSetting",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 346,
                      "rule_id": 179,
                      "status": 1,
                      "create_time": "2022-07-27 18:17:30",
                      "update_time": "2022-07-27 18:17:30",
                      "name": "修改分销配置",
                      "desc": null,
                      "frontpath": "",
                      "condition": "setDistributionSetting",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    }
                  ]
                }
              ]
            },
            {
              "id": 172,
              "rule_id": 0,
              "status": 1,
              "create_time": "2021-12-21 19:10:34",
              "update_time": "2021-12-21 19:10:47",
              "name": "其他模块",
              "desc": "",
              "frontpath": "",
              "condition": "",
              "menu": 1,
              "order": 8,
              "icon": "mostly-cloudy",
              "method": "GET",
              "child": [
                {
                  "id": 11,
                  "rule_id": 172,
                  "status": 1,
                  "create_time": "2019-12-28 13:38:32",
                  "update_time": "2021-12-21 20:23:43",
                  "name": "图库管理",
                  "desc": "image",
                  "frontpath": "/image/list",
                  "condition": null,
                  "menu": 1,
                  "order": 20,
                  "icon": "picture-filled",
                  "method": "GET",
                  "child": [
                    {
                      "id": 62,
                      "rule_id": 11,
                      "status": 1,
                      "create_time": "2021-02-25 13:58:09",
                      "update_time": "2021-02-25 13:58:59",
                      "name": "指定图库下的图片列表",
                      "desc": "",
                      "frontpath": "",
                      "condition": "getCurrentImageList",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 63,
                      "rule_id": 11,
                      "status": 1,
                      "create_time": "2021-02-25 13:59:25",
                      "update_time": "2021-02-25 13:59:35",
                      "name": "图库列表",
                      "desc": "",
                      "frontpath": "",
                      "condition": "getImageClassList",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 64,
                      "rule_id": 11,
                      "status": 1,
                      "create_time": "2021-02-25 13:59:52",
                      "update_time": "2021-02-25 14:00:10",
                      "name": "创建图库",
                      "desc": "",
                      "frontpath": "",
                      "condition": "createImageClass",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 65,
                      "rule_id": 11,
                      "status": 1,
                      "create_time": "2021-02-25 14:00:29",
                      "update_time": "2021-06-08 16:43:02",
                      "name": "更新图库",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateImageClass",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 66,
                      "rule_id": 11,
                      "status": 1,
                      "create_time": "2021-02-25 14:01:01",
                      "update_time": "2021-02-25 14:01:10",
                      "name": "删除图库",
                      "desc": "",
                      "frontpath": "",
                      "condition": "deleteImageClass",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 67,
                      "rule_id": 11,
                      "status": 1,
                      "create_time": "2021-02-25 14:02:14",
                      "update_time": "2021-02-25 14:02:14",
                      "name": "上传图片",
                      "desc": "",
                      "frontpath": "",
                      "condition": "uploadImage",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 68,
                      "rule_id": 11,
                      "status": 1,
                      "create_time": "2021-02-25 14:03:22",
                      "update_time": "2021-02-25 14:03:22",
                      "name": "批量删除图片",
                      "desc": "",
                      "frontpath": "",
                      "condition": "deleteImage",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 69,
                      "rule_id": 11,
                      "status": 1,
                      "create_time": "2021-02-25 14:03:42",
                      "update_time": "2021-02-25 14:03:42",
                      "name": "更新图片",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateImage",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    }
                  ]
                },
                {
                  "id": 149,
                  "rule_id": 172,
                  "status": 1,
                  "create_time": "2021-06-11 23:21:24",
                  "update_time": "2021-12-21 20:23:33",
                  "name": "公告管理",
                  "desc": "set_notice",
                  "frontpath": "/notice/list",
                  "condition": "",
                  "menu": 1,
                  "order": 50,
                  "icon": "notification",
                  "method": "GET",
                  "child": [
                    {
                      "id": 150,
                      "rule_id": 149,
                      "status": 1,
                      "create_time": "2021-06-11 23:31:44",
                      "update_time": "2021-06-11 23:31:44",
                      "name": "公告列表",
                      "desc": "",
                      "frontpath": "",
                      "condition": "getNoticeList",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "GET",
                      "child": []
                    },
                    {
                      "id": 151,
                      "rule_id": 149,
                      "status": 1,
                      "create_time": "2021-06-11 23:32:17",
                      "update_time": "2021-06-11 23:32:17",
                      "name": "创建公告",
                      "desc": "",
                      "frontpath": "",
                      "condition": "createNotice",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 152,
                      "rule_id": 149,
                      "status": 1,
                      "create_time": "2021-06-11 23:32:36",
                      "update_time": "2021-06-11 23:32:36",
                      "name": "更新公告",
                      "desc": "",
                      "frontpath": "",
                      "condition": "updateNotice",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    },
                    {
                      "id": 153,
                      "rule_id": 149,
                      "status": 1,
                      "create_time": "2021-06-11 23:33:06",
                      "update_time": "2021-06-11 23:33:16",
                      "name": "删除公告",
                      "desc": "",
                      "frontpath": "",
                      "condition": "deleteNotice",
                      "menu": 0,
                      "order": 50,
                      "icon": "",
                      "method": "POST",
                      "child": []
                    }
                  ]
                }
              ]
            }
          ],
          "totalCount": 145,
          "rules": [
            {
              "id": 5,
              "rule_id": 0,
              "status": 1,
              "create_time": "2019-08-11 13:36:09",
              "update_time": "2021-12-21 19:31:11",
              "name": "后台面板",
              "desc": "index",
              "frontpath": null,
              "condition": null,
              "menu": 1,
              "order": 1,
              "icon": "help",
              "method": "GET",
              "child": [
                {
                  "id": 10,
                  "rule_id": 5,
                  "status": 1,
                  "create_time": "2019-08-11 13:37:02",
                  "update_time": "2021-12-21 20:21:23",
                  "name": "主控台",
                  "desc": "index",
                  "frontpath": "/",
                  "condition": null,
                  "menu": 1,
                  "order": 20,
                  "icon": "home-filled",
                  "method": "GET",
                  "child": []
                }
              ]
            },
            {
              "id": 6,
              "rule_id": 0,
              "status": 1,
              "create_time": "2019-08-11 13:36:36",
              "update_time": "2021-12-21 19:37:11",
              "name": "商品管理",
              "desc": "shop_goods_list",
              "frontpath": null,
              "condition": null,
              "menu": 1,
              "order": 2,
              "icon": "shopping-bag",
              "method": "GET",
              "child": [
                {
                  "id": 13,
                  "rule_id": 6,
                  "status": 1,
                  "create_time": "2019-12-28 13:42:13",
                  "update_time": "2021-12-21 20:21:42",
                  "name": "商品管理",
                  "desc": "shop_goods_list",
                  "frontpath": "/goods/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "shopping-cart-full",
                  "method": "GET",
                  "child": []
                },
                {
                  "id": 14,
                  "rule_id": 6,
                  "status": 1,
                  "create_time": "2019-12-28 13:44:00",
                  "update_time": "2021-12-21 20:22:00",
                  "name": "分类管理",
                  "desc": "shop_category_list",
                  "frontpath": "/category/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "menu",
                  "method": "GET",
                  "child": []
                },
                {
                  "id": 15,
                  "rule_id": 6,
                  "status": 1,
                  "create_time": "2019-12-28 13:44:32",
                  "update_time": "2021-12-21 20:22:11",
                  "name": "规格管理",
                  "desc": "shop_sku_list",
                  "frontpath": "/skus/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "aim",
                  "method": "GET",
                  "child": []
                },
                {
                  "id": 157,
                  "rule_id": 6,
                  "status": 1,
                  "create_time": "2021-06-12 21:57:02",
                  "update_time": "2021-12-21 20:22:52",
                  "name": "优惠券管理",
                  "desc": "shop_coupon_list",
                  "frontpath": "/coupon/list",
                  "condition": "",
                  "menu": 1,
                  "order": 50,
                  "icon": "postcard",
                  "method": "GET",
                  "child": []
                }
              ]
            },
            {
              "id": 173,
              "rule_id": 0,
              "status": 1,
              "create_time": "2021-12-21 19:38:21",
              "update_time": "2021-12-21 19:38:21",
              "name": "用户管理",
              "desc": "",
              "frontpath": "",
              "condition": "",
              "menu": 1,
              "order": 3,
              "icon": "user",
              "method": "GET",
              "child": [
                {
                  "id": 21,
                  "rule_id": 173,
                  "status": 1,
                  "create_time": "2019-12-28 13:46:45",
                  "update_time": "2021-12-21 20:22:35",
                  "name": "用户管理",
                  "desc": "user_user-list_list",
                  "frontpath": "/user/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "user-filled",
                  "method": "GET",
                  "child": []
                },
                {
                  "id": 22,
                  "rule_id": 173,
                  "status": 1,
                  "create_time": "2019-12-28 13:46:59",
                  "update_time": "2021-12-21 20:22:44",
                  "name": "会员等级",
                  "desc": "user_user-level_list",
                  "frontpath": "/level/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "data-analysis",
                  "method": "GET",
                  "child": []
                }
              ]
            },
            {
              "id": 7,
              "rule_id": 0,
              "status": 1,
              "create_time": "2019-08-11 13:36:40",
              "update_time": "2021-12-21 19:37:18",
              "name": "订单管理",
              "desc": "order_order_list",
              "frontpath": null,
              "condition": null,
              "menu": 1,
              "order": 4,
              "icon": "message-box",
              "method": "GET",
              "child": [
                {
                  "id": 18,
                  "rule_id": 7,
                  "status": 1,
                  "create_time": "2019-12-28 13:45:42",
                  "update_time": "2021-12-21 20:23:02",
                  "name": "订单管理",
                  "desc": "order_order_list",
                  "frontpath": "/order/list",
                  "condition": "",
                  "menu": 1,
                  "order": 1,
                  "icon": "reading",
                  "method": "GET",
                  "child": []
                },
                {
                  "id": 17,
                  "rule_id": 7,
                  "status": 1,
                  "create_time": "2019-12-28 13:44:56",
                  "update_time": "2021-12-21 20:22:26",
                  "name": "评论管理",
                  "desc": "shop_comment_list",
                  "frontpath": "/comment/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "comment",
                  "method": "GET",
                  "child": []
                }
              ]
            },
            {
              "id": 8,
              "rule_id": 0,
              "status": 1,
              "create_time": "2019-08-11 13:36:43",
              "update_time": "2021-12-21 19:37:25",
              "name": "管理员管理",
              "desc": "user_user-list_list",
              "frontpath": null,
              "condition": null,
              "menu": 1,
              "order": 5,
              "icon": "management",
              "method": "GET",
              "child": [
                {
                  "id": 25,
                  "rule_id": 8,
                  "status": 1,
                  "create_time": "2019-12-28 13:47:39",
                  "update_time": "2021-12-21 20:23:53",
                  "name": "管理员管理",
                  "desc": "set_manager",
                  "frontpath": "/manager/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "coordinate",
                  "method": "GET",
                  "child": []
                },
                {
                  "id": 27,
                  "rule_id": 8,
                  "status": 1,
                  "create_time": "2020-01-03 21:05:50",
                  "update_time": "2021-12-21 20:24:04",
                  "name": "权限管理",
                  "desc": "",
                  "frontpath": "/access/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "connection",
                  "method": "GET",
                  "child": []
                },
                {
                  "id": 33,
                  "rule_id": 8,
                  "status": 1,
                  "create_time": "2020-01-04 18:15:47",
                  "update_time": "2021-12-21 20:18:11",
                  "name": "角色管理",
                  "desc": "",
                  "frontpath": "/role/list",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "histogram",
                  "method": "GET",
                  "child": []
                }
              ]
            },
            {
              "id": 9,
              "rule_id": 0,
              "status": 1,
              "create_time": "2019-08-11 13:36:50",
              "update_time": "2021-12-21 19:10:15",
              "name": "系统设置",
              "desc": "set_base",
              "frontpath": null,
              "condition": null,
              "menu": 1,
              "order": 6,
              "icon": "setting",
              "method": "GET",
              "child": [
                {
                  "id": 23,
                  "rule_id": 9,
                  "status": 1,
                  "create_time": "2019-12-28 13:47:15",
                  "update_time": "2021-12-21 20:23:12",
                  "name": "基础设置",
                  "desc": "set_base",
                  "frontpath": "/setting/base",
                  "condition": "",
                  "menu": 1,
                  "order": 19,
                  "icon": "baseball",
                  "method": "GET",
                  "child": []
                },
                {
                  "id": 26,
                  "rule_id": 9,
                  "status": 1,
                  "create_time": "2019-12-28 13:47:57",
                  "update_time": "2021-12-21 20:23:22",
                  "name": "交易设置",
                  "desc": "set_payment",
                  "frontpath": "/setting/buy",
                  "condition": "",
                  "menu": 1,
                  "order": 20,
                  "icon": "credit-card",
                  "method": "GET",
                  "child": []
                },
                {
                  "id": 24,
                  "rule_id": 9,
                  "status": 1,
                  "create_time": "2019-12-28 13:47:27",
                  "update_time": "2021-12-21 20:20:53",
                  "name": "物流设置",
                  "desc": "set_express",
                  "frontpath": "/setting/ship",
                  "condition": "",
                  "menu": 1,
                  "order": 21,
                  "icon": "bicycle",
                  "method": "GET",
                  "child": []
                }
              ]
            },
            {
              "id": 177,
              "rule_id": 0,
              "status": 1,
              "create_time": "2022-06-18 00:12:10",
              "update_time": "2022-06-18 00:12:10",
              "name": "分销模块",
              "desc": null,
              "frontpath": "",
              "condition": "",
              "menu": 1,
              "order": 7,
              "icon": "shopping-cart",
              "method": "GET",
              "child": [
                {
                  "id": 178,
                  "rule_id": 177,
                  "status": 1,
                  "create_time": "2022-06-18 00:14:58",
                  "update_time": "2022-06-18 00:14:58",
                  "name": "分销员管理",
                  "desc": null,
                  "frontpath": "/distribution/index",
                  "condition": "",
                  "menu": 1,
                  "order": 50,
                  "icon": "user-filled",
                  "method": "GET",
                  "child": []
                },
                {
                  "id": 179,
                  "rule_id": 177,
                  "status": 1,
                  "create_time": "2022-06-18 00:15:25",
                  "update_time": "2022-06-18 00:15:25",
                  "name": "分销设置",
                  "desc": null,
                  "frontpath": "/distribution/setting",
                  "condition": "",
                  "menu": 1,
                  "order": 50,
                  "icon": "set-up",
                  "method": "GET",
                  "child": []
                }
              ]
            },
            {
              "id": 172,
              "rule_id": 0,
              "status": 1,
              "create_time": "2021-12-21 19:10:34",
              "update_time": "2021-12-21 19:10:47",
              "name": "其他模块",
              "desc": "",
              "frontpath": "",
              "condition": "",
              "menu": 1,
              "order": 8,
              "icon": "mostly-cloudy",
              "method": "GET",
              "child": [
                {
                  "id": 11,
                  "rule_id": 172,
                  "status": 1,
                  "create_time": "2019-12-28 13:38:32",
                  "update_time": "2021-12-21 20:23:43",
                  "name": "图库管理",
                  "desc": "image",
                  "frontpath": "/image/list",
                  "condition": null,
                  "menu": 1,
                  "order": 20,
                  "icon": "picture-filled",
                  "method": "GET",
                  "child": []
                },
                {
                  "id": 149,
                  "rule_id": 172,
                  "status": 1,
                  "create_time": "2021-06-11 23:21:24",
                  "update_time": "2021-12-21 20:23:33",
                  "name": "公告管理",
                  "desc": "set_notice",
                  "frontpath": "/notice/list",
                  "condition": "",
                  "menu": 1,
                  "order": 50,
                  "icon": "notification",
                  "method": "GET",
                  "child": []
                }
              ]
            }
          ]
        },
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      }
    },
    {
      "note": "商品资料详情",
      "method": "GET",
      "pattern": "/goods/read/:id",
      "kind": "static",
      "data": {
        "msg": "ok",
        "data": {
          "id": 1365,
          "title": "戴森吹风机 Supersonic HD15",
          "category_id": 372,
          "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef07366f5.jpg",
          "rating": 5,
          "sale_count": 0,
          "review_count": 0,
          "min_price": "2699.00",
          "min_oprice": "2999.00",
          "desc": "快速干发，减少热损伤",
          "unit": "台",
          "stock": 90,
          "min_stock": 10,
          "ischeck": 1,
          "status": 0,
          "stock_display": 1,
          "express_id": 0,
          "sku_type": 0,
          "sku_value": null,
          "content": null,
          "discount": 0,
          "create_time": "2026-10-14 10:57:22",
          "update_time": "2026-10-14 19:37:14",
          "delete_time": null,
          "order": 50,
          "types": [
            {
              "id": 140,
              "name": "手机",
              "order": 50,
              "status": 1,
              "create_time": "1970-01-01 08:32:50",
              "update_time": "1970-01-01 08:32:50",
              "goods_type_values": [
                {
                  "id": 249,
                  "name": "CPU",
                  "order": 50,
                  "type": "input",
                  "status": 1,
                  "default": null,
                  "goods_type_id": 140
                },
                {
                  "id": 250,
                  "name": "CPU",
                  "order": 50,
                  "type": "input",
                  "status": 1,
                  "default": null,
                  "goods_type_id": 140
                },
                {
                  "id": 251,
                  "name": "性能",
                  "order": 50,
                  "type": "input",
                  "status": 1,
                  "default": null,
                  "goods_type_id": 140
                }
              ]
            }
          ],
          "goodsBanner": [
            {
              "id": 3592,
              "goods_id": 1365,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef4fd9c15.jpg",
              "create_time": "2026-10-14 11:04:47",
              "update_time": "2026-10-14 11:04:47"
            },
            {
              "id": 3593,
              "goods_id": 1365,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef47b0b97.png",
              "create_time": "2026-10-14 11:04:47",
              "update_time": "2026-10-14 11:04:47"
            },
            {
              "id": 3594,
              "goods_id": 1365,
              "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef19d7804.jpg",
              "create_time": "2026-10-14 11:04:47",
              "update_time": "2026-10-14 11:04:47"
            }
          ],
          "goodsAttrs": [],
          "goodsSkus": [],
          "goodsSkusCard": [
            {
              "id": 3224,
              "goods_id": 1365,
              "name": "颜色",
              "type": 0,
              "order": 50,
              "goodsSkusCardValue": []
            }
          ]
        },
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      }
    },
    {
      "note": "图库图片 · 分类 168",
      "method": "GET",
      "pattern": "/image_class/:id/image/{page}",
      "kind": "paged",
      "envelope": {
        "msg": "ok",
        "data": {},
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      },
      "list": [
        {
          "id": 4099,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acefac4c212e.png",
          "name": "思维导图",
          "path": "public/6acefac4c212e.png",
          "create_time": "2026-10-14 11:45:08",
          "update_time": "2026-10-14 22:39:33",
          "image_class_id": 168
        },
        {
          "id": 4098,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acefa48d0138.png",
          "name": "public/6acefa48d0138.png",
          "path": "public/6acefa48d0138.png",
          "create_time": "2026-10-14 11:43:04",
          "update_time": "2026-10-14 11:43:04",
          "image_class_id": 168
        },
        {
          "id": 4097,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acefa23a023a.png",
          "name": "public/6acefa23a023a.png",
          "path": "public/6acefa23a023a.png",
          "create_time": "2026-10-14 11:42:27",
          "update_time": "2026-10-14 11:42:27",
          "image_class_id": 168
        },
        {
          "id": 4096,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acefa1fa99c3.png",
          "name": "public/6acefa1fa99c3.png",
          "path": "public/6acefa1fa99c3.png",
          "create_time": "2026-10-14 11:42:23",
          "update_time": "2026-10-14 11:42:23",
          "image_class_id": 168
        },
        {
          "id": 4095,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef9ffd6568.png",
          "name": "public/6acef9ffd6568.png",
          "path": "public/6acef9ffd6568.png",
          "create_time": "2026-10-14 11:41:52",
          "update_time": "2026-10-14 11:41:52",
          "image_class_id": 168
        },
        {
          "id": 4094,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef90cd23cf.png",
          "name": "public/6acef90cd23cf.png",
          "path": "public/6acef90cd23cf.png",
          "create_time": "2026-10-14 11:37:48",
          "update_time": "2026-10-14 11:37:48",
          "image_class_id": 168
        },
        {
          "id": 4093,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef8aa7728a.jpg",
          "name": "public/6acef8aa7728a.jpg",
          "path": "public/6acef8aa7728a.jpg",
          "create_time": "2026-10-14 11:36:10",
          "update_time": "2026-10-14 11:36:10",
          "image_class_id": 168
        },
        {
          "id": 4092,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef883523c6.png",
          "name": "public/6acef883523c6.png",
          "path": "public/6acef883523c6.png",
          "create_time": "2026-10-14 11:35:31",
          "update_time": "2026-10-14 11:35:31",
          "image_class_id": 168
        },
        {
          "id": 4091,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef876aa7e0.png",
          "name": "public/6acef876aa7e0.png",
          "path": "public/6acef876aa7e0.png",
          "create_time": "2026-10-14 11:35:18",
          "update_time": "2026-10-14 11:35:18",
          "image_class_id": 168
        },
        {
          "id": 4090,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef7c5261d4.jpg",
          "name": "public/6acef7c5261d4.jpg",
          "path": "public/6acef7c5261d4.jpg",
          "create_time": "2026-10-14 11:32:21",
          "update_time": "2026-10-14 11:32:21",
          "image_class_id": 168
        },
        {
          "id": 4089,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef79c5297e.jpg",
          "name": "public/6acef79c5297e.jpg",
          "path": "public/6acef79c5297e.jpg",
          "create_time": "2026-10-14 11:31:40",
          "update_time": "2026-10-14 11:31:40",
          "image_class_id": 168
        },
        {
          "id": 4088,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef770aea32.png",
          "name": "public/6acef770aea32.png",
          "path": "public/6acef770aea32.png",
          "create_time": "2026-10-14 11:30:56",
          "update_time": "2026-10-14 11:30:56",
          "image_class_id": 168
        },
        {
          "id": 4087,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef7397f9b0.png",
          "name": "public/6acef7397f9b0.png",
          "path": "public/6acef7397f9b0.png",
          "create_time": "2026-10-14 11:30:01",
          "update_time": "2026-10-14 11:30:01",
          "image_class_id": 168
        },
        {
          "id": 4086,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef7210ebc1.png",
          "name": "public/6acef7210ebc1.png",
          "path": "public/6acef7210ebc1.png",
          "create_time": "2026-10-14 11:29:37",
          "update_time": "2026-10-14 11:29:37",
          "image_class_id": 168
        },
        {
          "id": 4085,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef67087c6b.jpg",
          "name": "public/6acef67087c6b.jpg",
          "path": "public/6acef67087c6b.jpg",
          "create_time": "2026-10-14 11:26:40",
          "update_time": "2026-10-14 11:26:40",
          "image_class_id": 168
        },
        {
          "id": 4084,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef6551a843.png",
          "name": "public/6acef6551a843.png",
          "path": "public/6acef6551a843.png",
          "create_time": "2026-10-14 11:26:13",
          "update_time": "2026-10-14 11:26:13",
          "image_class_id": 168
        },
        {
          "id": 4083,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef612730c6.png",
          "name": "public/6acef612730c6.png",
          "path": "public/6acef612730c6.png",
          "create_time": "2026-10-14 11:25:06",
          "update_time": "2026-10-14 11:25:06",
          "image_class_id": 168
        },
        {
          "id": 4082,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef54e453ae.jpg",
          "name": "public/6acef54e453ae.jpg",
          "path": "public/6acef54e453ae.jpg",
          "create_time": "2026-10-14 11:21:50",
          "update_time": "2026-10-14 11:21:50",
          "image_class_id": 168
        },
        {
          "id": 4081,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef5247a39e.png",
          "name": "public/6acef5247a39e.png",
          "path": "public/6acef5247a39e.png",
          "create_time": "2026-10-14 11:21:08",
          "update_time": "2026-10-14 11:21:08",
          "image_class_id": 168
        },
        {
          "id": 4080,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef4bba8c71.png",
          "name": "public/6acef4bba8c71.png",
          "path": "public/6acef4bba8c71.png",
          "create_time": "2026-10-14 11:19:24",
          "update_time": "2026-10-14 11:19:24",
          "image_class_id": 168
        },
        {
          "id": 4079,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef3c84c135.png",
          "name": "public/6acef3c84c135.png",
          "path": "public/6acef3c84c135.png",
          "create_time": "2026-10-14 11:15:20",
          "update_time": "2026-10-14 11:15:20",
          "image_class_id": 168
        },
        {
          "id": 4078,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef332d8b85.png",
          "name": "public/6acef332d8b85.png",
          "path": "public/6acef332d8b85.png",
          "create_time": "2026-10-14 11:12:51",
          "update_time": "2026-10-14 11:12:51",
          "image_class_id": 168
        },
        {
          "id": 4077,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef3194a00e.png",
          "name": "public/6acef3194a00e.png",
          "path": "public/6acef3194a00e.png",
          "create_time": "2026-10-14 11:12:25",
          "update_time": "2026-10-14 11:12:25",
          "image_class_id": 168
        },
        {
          "id": 4076,
          "url": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acef3181c58a.jpg",
          "name": "public/6acef3181c58a.jpg",
          "path": "public/6acef3181c58a.jpg",
          "create_time": "2026-10-14 11:12:24",
          "update_time": "2026-10-14 11:12:24",
          "image_class_id": 168
        }
      ],
      "totalCount": 24,
      "sourceTotalCount": 187
    },
    {
      "note": "分类关联商品 · 分类 5",
      "method": "GET",
      "pattern": "/app_category_item/list",
      "params": {
        "category_id": "5"
      },
      "ignoreParams": true,
      "kind": "static",
      "data": {
        "msg": "ok",
        "data": [
          {
            "id": 1040,
            "name": "戴森吹风机 Supersonic HD15",
            "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6aceef07366f5.jpg",
            "category_id": 5,
            "goods_id": 1365,
            "order": 50,
            "create_time": "2026-10-14 18:00:31",
            "update_time": "2026-10-14 18:00:31"
          },
          {
            "id": 1038,
            "name": "小米",
            "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6acbbda003298.png",
            "category_id": 5,
            "goods_id": 1351,
            "order": 50,
            "create_time": "2026-10-12 15:55:38",
            "update_time": "2026-10-12 15:55:38"
          },
          {
            "id": 1025,
            "name": "fwef",
            "cover": "",
            "category_id": 5,
            "goods_id": 1291,
            "order": 50,
            "create_time": "2026-10-06 10:46:08",
            "update_time": "2026-10-06 10:46:08"
          },
          {
            "id": 1024,
            "name": "手机",
            "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6a6ef84292d46.jpg",
            "category_id": 5,
            "goods_id": 1132,
            "order": 50,
            "create_time": "2026-09-15 21:47:03",
            "update_time": "2026-09-15 21:47:03"
          },
          {
            "id": 1023,
            "name": "艾金斯",
            "cover": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6a6af79a1eb43.jpg",
            "category_id": 5,
            "goods_id": 1123,
            "order": 50,
            "create_time": "2026-09-15 21:47:03",
            "update_time": "2026-09-15 21:47:03"
          },
          {
            "id": 1022,
            "name": "商品_1787406793226",
            "cover": null,
            "category_id": 5,
            "goods_id": 1120,
            "order": 50,
            "create_time": "2026-09-15 21:47:03",
            "update_time": "2026-09-15 21:47:03"
          }
        ],
        "path": "观看完整课程地址：https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585"
      }
    },
    {
      "note": "商品 · 新增",
      "method": "POST",
      "pattern": "/goods",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "商品 · 修改",
      "method": "POST",
      "pattern": "/goods/:id",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "商品 · 删除",
      "method": "POST",
      "pattern": "/goods/:id/delete",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "商品 · 状态",
      "method": "POST",
      "pattern": "/goods/:id/update_status",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "商品 · 审核",
      "method": "POST",
      "pattern": "/goods/:id/check",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "商品 · 轮播图",
      "method": "POST",
      "pattern": "/goods/banners/:id",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "商品 · 批量上下架",
      "method": "POST",
      "pattern": "/goods/changestatus",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "商品 · 批量删除",
      "method": "POST",
      "pattern": "/goods/delete_all",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "商品 · 批量恢复",
      "method": "POST",
      "pattern": "/goods/restore",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "商品 · 彻底删除",
      "method": "POST",
      "pattern": "/goods/destroy",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "订单 · 批量删除",
      "method": "POST",
      "pattern": "/order/delete_all",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "订单 · 发货",
      "method": "POST",
      "pattern": "/order/:id/ship",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "订单 · 退款处理",
      "method": "POST",
      "pattern": "/order/:id/handle_refund",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "规格 · 新增",
      "method": "POST",
      "pattern": "/skus",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "规格 · 修改",
      "method": "POST",
      "pattern": "/skus/:id",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "规格 · 删除",
      "method": "POST",
      "pattern": "/skus/:id/delete",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "规格 · 状态",
      "method": "POST",
      "pattern": "/skus/:id/update_status",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "规格 · 批量删除",
      "method": "POST",
      "pattern": "/skus/delete_all",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "分类 · 新增",
      "method": "POST",
      "pattern": "/category",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "分类 · 修改",
      "method": "POST",
      "pattern": "/category/:id",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "分类 · 删除",
      "method": "POST",
      "pattern": "/category/:id/delete",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "分类 · 状态",
      "method": "POST",
      "pattern": "/category/:id/update_status",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "分类 · 关联商品",
      "method": "POST",
      "pattern": "/app_category_item",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "分类 · 取消关联",
      "method": "POST",
      "pattern": "/app_category_item/:id/delete",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "图库分类 · 新增",
      "method": "POST",
      "pattern": "/image_class",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "图库分类 · 修改",
      "method": "POST",
      "pattern": "/image_class/:id",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "图库分类 · 删除",
      "method": "POST",
      "pattern": "/image_class/:id/delete",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "图库分类 · 状态",
      "method": "POST",
      "pattern": "/image_class/:id/update_status",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "图库 · 批量删除图片",
      "method": "POST",
      "pattern": "/image/delete_all",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "图库 · 重命名图片",
      "method": "POST",
      "pattern": "/image/:id",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "图库 · 上传图片",
      "method": "POST",
      "pattern": "/image/upload",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "权限规则 · 新增",
      "method": "POST",
      "pattern": "/rule",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "权限规则 · 修改",
      "method": "POST",
      "pattern": "/rule/:id",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "权限规则 · 删除",
      "method": "POST",
      "pattern": "/rule/:id/delete",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "权限规则 · 状态",
      "method": "POST",
      "pattern": "/rule/:id/update_status",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "角色 · 新增",
      "method": "POST",
      "pattern": "/role",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "角色 · 修改",
      "method": "POST",
      "pattern": "/role/:id",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "角色 · 删除",
      "method": "POST",
      "pattern": "/role/:id/delete",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "角色 · 状态",
      "method": "POST",
      "pattern": "/role/:id/update_status",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "角色 · 配置权限",
      "method": "POST",
      "pattern": "/role/set_rules",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "公告 · 新增",
      "method": "POST",
      "pattern": "/notice",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "公告 · 修改",
      "method": "POST",
      "pattern": "/notice/:id",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "公告 · 删除",
      "method": "POST",
      "pattern": "/notice/:id/delete",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "公告 · 状态",
      "method": "POST",
      "pattern": "/notice/:id/update_status",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "优惠券 · 新增",
      "method": "POST",
      "pattern": "/coupon",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "优惠券 · 修改",
      "method": "POST",
      "pattern": "/coupon/:id",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "优惠券 · 删除",
      "method": "POST",
      "pattern": "/coupon/:id/delete",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "优惠券 · 状态",
      "method": "POST",
      "pattern": "/coupon/:id/update_status",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "会员等级 · 新增",
      "method": "POST",
      "pattern": "/user_level",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "会员等级 · 修改",
      "method": "POST",
      "pattern": "/user_level/:id",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "会员等级 · 删除",
      "method": "POST",
      "pattern": "/user_level/:id/delete",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "会员等级 · 状态",
      "method": "POST",
      "pattern": "/user_level/:id/update_status",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "管理员 · 新增",
      "method": "POST",
      "pattern": "/manager",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "管理员 · 修改",
      "method": "POST",
      "pattern": "/manager/:id",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "管理员 · 删除",
      "method": "POST",
      "pattern": "/manager/:id/delete",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "管理员 · 状态",
      "method": "POST",
      "pattern": "/manager/:id/update_status",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "会员 · 新增",
      "method": "POST",
      "pattern": "/user",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "会员 · 修改",
      "method": "POST",
      "pattern": "/user/:id",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "会员 · 删除",
      "method": "POST",
      "pattern": "/user/:id/delete",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "会员 · 状态",
      "method": "POST",
      "pattern": "/user/:id/update_status",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "评价 · 状态",
      "method": "POST",
      "pattern": "/goods_comment/:id/update_status",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "评价 · 回复",
      "method": "POST",
      "pattern": "/goods_comment/review/:id",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "系统设置 · 保存",
      "method": "POST",
      "pattern": "/sysconfig",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "系统设置 · 上传证书",
      "method": "POST",
      "pattern": "/sysconfig/upload",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "分销配置 · 保存",
      "method": "POST",
      "pattern": "/distribution_setting/set",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "修改密码",
      "method": "POST",
      "pattern": "/updatepassword",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    },
    {
      "note": "退出登录",
      "method": "POST",
      "pattern": "/logout",
      "kind": "stub",
      "data": {
        "code": 200,
        "msg": "ok",
        "data": true
      }
    }
  ]
}

export default fixtures
