## 一维数组过滤 - tree

如下数据结构,一个树形菜单一个选种后的所有checkedKeys,我们需要做的是根据选中的checkedKeys过滤掉没选中的

```js
// checkedKeys
const checkedKeys=[
    "1556575098926817282",
    "1549294230478938113",
    "1549235371106263042",
    "1549294138573348865",
    "1555374334249484289",
    "1549285378610061313",
    "1563090485890134018",
    "1643950177973055490",
    "1555374275218849793",
    "1563090833983811586",
    "1549240860351291393",
    "1563090793416503298",
    "1549235452740001794",
    "1557213108109901826",
    "1562023762120081409",
    "1547388265310535682",
    "1536370394706276353",
    "1557213241220333569",
    "1536370246466990081",
    "1555370010098221058",
    "1562023603390840833"
]
// 树形菜单
const treeData=[
    {
        "id": "1000",
        "parentId": "-1",
        "weight": 0,
        "name": "权限管理",
        "path": "/admin",
        "keepAlive": "0",
        "onlineFlowEntryId": null,
        "onlineFormId": null,
        "sortOrder": 0,
        "icon": "icon-quanxianguanli",
        "menuType": "0",
        "permission": null,
        "label": "权限管理",
        "children": [
            {
                "id": "1100",
                "parentId": "1000",
                "weight": 1,
                "name": "用户管理",
                "path": "/admin/user/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 1,
                "icon": "icon-yonghuguanli",
                "menuType": "0",
                "permission": null,
                "label": "用户管理",
                "children": [
                    {
                        "id": "1101",
                        "parentId": "1100",
                        "weight": 1,
                        "name": "用户新增",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_user_add",
                        "label": "用户新增"
                    },
                    {
                        "id": "1102",
                        "parentId": "1100",
                        "weight": 1,
                        "name": "用户修改",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_user_edit",
                        "label": "用户修改"
                    },
                    {
                        "id": "1103",
                        "parentId": "1100",
                        "weight": 1,
                        "name": "用户删除",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_user_del",
                        "label": "用户删除"
                    },
                    {
                        "id": "1104",
                        "parentId": "1100",
                        "weight": 1,
                        "name": "导入导出",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_user_export",
                        "label": "导入导出"
                    }
                ]
            },
            {
                "id": "1200",
                "parentId": "1000",
                "weight": 2,
                "name": "菜单管理",
                "path": "/admin/menu/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 2,
                "icon": "icon-caidanguanli",
                "menuType": "0",
                "permission": null,
                "label": "菜单管理",
                "children": [
                    {
                        "id": "1201",
                        "parentId": "1200",
                        "weight": 1,
                        "name": "菜单新增",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_menu_add",
                        "label": "菜单新增"
                    },
                    {
                        "id": "1202",
                        "parentId": "1200",
                        "weight": 1,
                        "name": "菜单修改",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_menu_edit",
                        "label": "菜单修改"
                    },
                    {
                        "id": "1203",
                        "parentId": "1200",
                        "weight": 1,
                        "name": "菜单删除",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_menu_del",
                        "label": "菜单删除"
                    }
                ]
            },
            {
                "id": "1300",
                "parentId": "1000",
                "weight": 3,
                "name": "角色管理",
                "path": "/admin/role/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 3,
                "icon": "icon-jiaoseguanli",
                "menuType": "0",
                "permission": null,
                "label": "角色管理",
                "children": [
                    {
                        "id": "1301",
                        "parentId": "1300",
                        "weight": 1,
                        "name": "角色新增",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_role_add",
                        "label": "角色新增"
                    },
                    {
                        "id": "1302",
                        "parentId": "1300",
                        "weight": 1,
                        "name": "角色修改",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_role_edit",
                        "label": "角色修改"
                    },
                    {
                        "id": "1303",
                        "parentId": "1300",
                        "weight": 1,
                        "name": "角色删除",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_role_del",
                        "label": "角色删除"
                    },
                    {
                        "id": "1304",
                        "parentId": "1300",
                        "weight": 1,
                        "name": "分配权限",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_role_perm",
                        "label": "分配权限"
                    }
                ]
            },
            {
                "id": "1400",
                "parentId": "1000",
                "weight": 4,
                "name": "部门管理",
                "path": "/admin/dept/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 4,
                "icon": "icon-web-icon-",
                "menuType": "0",
                "permission": null,
                "label": "部门管理",
                "children": [
                    {
                        "id": "1401",
                        "parentId": "1400",
                        "weight": 1,
                        "name": "部门新增",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_dept_add",
                        "label": "部门新增"
                    },
                    {
                        "id": "1402",
                        "parentId": "1400",
                        "weight": 1,
                        "name": "部门修改",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_dept_edit",
                        "label": "部门修改"
                    },
                    {
                        "id": "1403",
                        "parentId": "1400",
                        "weight": 1,
                        "name": "部门删除",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_dept_del",
                        "label": "部门删除"
                    }
                ]
            },
            {
                "id": "1500",
                "parentId": "1000",
                "weight": 5,
                "name": "租户管理",
                "path": "/admin/tenant/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 5,
                "icon": "icon-erji-zuhushouye",
                "menuType": "0",
                "permission": "",
                "label": "租户管理",
                "children": [
                    {
                        "id": "1501",
                        "parentId": "1500",
                        "weight": 0,
                        "name": "租户新增",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 0,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "admin_systenant_add",
                        "label": "租户新增"
                    },
                    {
                        "id": "1502",
                        "parentId": "1500",
                        "weight": 1,
                        "name": "租户修改",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "admin_systenant_edit",
                        "label": "租户修改"
                    },
                    {
                        "id": "1503",
                        "parentId": "1500",
                        "weight": 2,
                        "name": "租户删除",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 2,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "admin_systenant_del",
                        "label": "租户删除"
                    }
                ]
            }
        ]
    },
    {
        "id": "2000",
        "parentId": "-1",
        "weight": 1,
        "name": "系统管理",
        "path": "/system",
        "keepAlive": "0",
        "onlineFlowEntryId": null,
        "onlineFormId": null,
        "sortOrder": 1,
        "icon": "icon-xitongpeizhi",
        "menuType": "0",
        "permission": null,
        "label": "系统管理",
        "children": [
            {
                "id": "2100",
                "parentId": "2000",
                "weight": 5,
                "name": "日志管理",
                "path": "/admin/log/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 5,
                "icon": "icon-rizhi",
                "menuType": "0",
                "permission": null,
                "label": "日志管理",
                "children": [
                    {
                        "id": "2101",
                        "parentId": "2100",
                        "weight": 1,
                        "name": "日志删除",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_log_del",
                        "label": "日志删除"
                    },
                    {
                        "id": "2102",
                        "parentId": "2100",
                        "weight": 1,
                        "name": "导入导出",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_log_export",
                        "label": "导入导出"
                    }
                ]
            },
            {
                "id": "2200",
                "parentId": "2000",
                "weight": 6,
                "name": "字典管理",
                "path": "/admin/dict/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 6,
                "icon": "icon-navicon-zdgl",
                "menuType": "0",
                "permission": null,
                "label": "字典管理",
                "children": [
                    {
                        "id": "2201",
                        "parentId": "2200",
                        "weight": 1,
                        "name": "字典删除",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_dict_del",
                        "label": "字典删除"
                    },
                    {
                        "id": "2202",
                        "parentId": "2200",
                        "weight": 1,
                        "name": "字典新增",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_dict_add",
                        "label": "字典新增"
                    },
                    {
                        "id": "2203",
                        "parentId": "2200",
                        "weight": 1,
                        "name": "字典修改",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_dict_edit",
                        "label": "字典修改"
                    }
                ]
            },
            {
                "id": "8000",
                "parentId": "2000",
                "weight": 6,
                "name": "文件管理",
                "path": "/admin/file/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 6,
                "icon": "icon-wenjianguanli",
                "menuType": "0",
                "permission": null,
                "label": "文件管理",
                "children": [
                    {
                        "id": "8001",
                        "parentId": "8000",
                        "weight": 1,
                        "name": "删除文件",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_file_del",
                        "label": "删除文件"
                    }
                ]
            },
            {
                "id": "2210",
                "parentId": "2000",
                "weight": 7,
                "name": "参数管理",
                "path": "/admin/param/index",
                "keepAlive": "1",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 7,
                "icon": "icon-canshu",
                "menuType": "0",
                "permission": null,
                "label": "参数管理",
                "children": [
                    {
                        "id": "2211",
                        "parentId": "2210",
                        "weight": 1,
                        "name": "参数新增",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "admin_syspublicparam_add",
                        "label": "参数新增"
                    },
                    {
                        "id": "2212",
                        "parentId": "2210",
                        "weight": 1,
                        "name": "参数删除",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "admin_syspublicparam_del",
                        "label": "参数删除"
                    },
                    {
                        "id": "2213",
                        "parentId": "2210",
                        "weight": 1,
                        "name": "参数编辑",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "admin_syspublicparam_edit",
                        "label": "参数编辑"
                    }
                ]
            },
            {
                "id": "2800",
                "parentId": "2000",
                "weight": 8,
                "name": "Quartz管理",
                "path": "/daemon/job-manage/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 8,
                "icon": "icon-guanwangfangwen",
                "menuType": "0",
                "permission": "",
                "label": "Quartz管理",
                "children": [
                    {
                        "id": "2810",
                        "parentId": "2800",
                        "weight": 0,
                        "name": "任务新增",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 0,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "job_sys_job_add",
                        "label": "任务新增"
                    },
                    {
                        "id": "2820",
                        "parentId": "2800",
                        "weight": 0,
                        "name": "任务修改",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 0,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "job_sys_job_edit",
                        "label": "任务修改"
                    },
                    {
                        "id": "2830",
                        "parentId": "2800",
                        "weight": 0,
                        "name": "任务删除",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 0,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "job_sys_job_del",
                        "label": "任务删除"
                    },
                    {
                        "id": "2840",
                        "parentId": "2800",
                        "weight": 0,
                        "name": "任务暂停",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 0,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "job_sys_job_shutdown_job",
                        "label": "任务暂停"
                    },
                    {
                        "id": "2850",
                        "parentId": "2800",
                        "weight": 0,
                        "name": "任务开始",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 0,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "job_sys_job_start_job",
                        "label": "任务开始"
                    },
                    {
                        "id": "2860",
                        "parentId": "2800",
                        "weight": 0,
                        "name": "任务刷新",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 0,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "job_sys_job_refresh_job",
                        "label": "任务刷新"
                    },
                    {
                        "id": "2870",
                        "parentId": "2800",
                        "weight": 0,
                        "name": "执行任务",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 0,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "job_sys_job_run_job",
                        "label": "执行任务"
                    }
                ]
            },
            {
                "id": "2400",
                "parentId": "2000",
                "weight": 9,
                "name": "终端管理",
                "path": "/admin/client/index",
                "keepAlive": "1",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 9,
                "icon": "icon-bangzhushouji",
                "menuType": "0",
                "permission": "",
                "label": "终端管理",
                "children": [
                    {
                        "id": "2401",
                        "parentId": "2400",
                        "weight": 1,
                        "name": "客户端新增",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "sys_client_add",
                        "label": "客户端新增"
                    },
                    {
                        "id": "2402",
                        "parentId": "2400",
                        "weight": 1,
                        "name": "客户端修改",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_client_edit",
                        "label": "客户端修改"
                    },
                    {
                        "id": "2403",
                        "parentId": "2400",
                        "weight": 1,
                        "name": "客户端删除",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_client_del",
                        "label": "客户端删除"
                    }
                ]
            },
            {
                "id": "2500",
                "parentId": "2000",
                "weight": 10,
                "name": "密钥管理",
                "path": "/admin/social/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 10,
                "icon": "icon-miyue",
                "menuType": "0",
                "permission": "",
                "label": "密钥管理",
                "children": [
                    {
                        "id": "2501",
                        "parentId": "2500",
                        "weight": 0,
                        "name": "密钥新增",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 0,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "sys_social_details_add",
                        "label": "密钥新增"
                    },
                    {
                        "id": "2502",
                        "parentId": "2500",
                        "weight": 1,
                        "name": "密钥修改",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "sys_social_details_edit",
                        "label": "密钥修改"
                    },
                    {
                        "id": "2503",
                        "parentId": "2500",
                        "weight": 2,
                        "name": "密钥删除",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 2,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "sys_social_details_del",
                        "label": "密钥删除"
                    }
                ]
            },
            {
                "id": "2600",
                "parentId": "2000",
                "weight": 11,
                "name": "令牌管理",
                "path": "/admin/token/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 11,
                "icon": "icon-denglvlingpai",
                "menuType": "0",
                "permission": null,
                "label": "令牌管理",
                "children": [
                    {
                        "id": "2601",
                        "parentId": "2600",
                        "weight": 1,
                        "name": "令牌删除",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "sys_token_del",
                        "label": "令牌删除"
                    }
                ]
            },
            {
                "id": "2700",
                "parentId": "2000",
                "weight": 12,
                "name": "动态路由",
                "path": "/admin/route/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 12,
                "icon": "icon-luyou",
                "menuType": "0",
                "permission": null,
                "label": "动态路由"
            }
        ]
    },
    {
        "id": "1536370246466990081",
        "parentId": "-1",
        "weight": 1,
        "name": "人事管理",
        "path": "personnel",
        "keepAlive": "0",
        "onlineFlowEntryId": null,
        "onlineFormId": null,
        "sortOrder": 1,
        "icon": "icon-quanxianguanli",
        "menuType": "0",
        "permission": null,
        "label": "人事管理",
        "children": [
            {
                "id": "1536370394706276353",
                "parentId": "1536370246466990081",
                "weight": 1,
                "name": "员工花名册",
                "path": "personnel-staff",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 1,
                "icon": "icon-yonghuguanli",
                "menuType": "0",
                "permission": null,
                "label": "员工花名册",
                "children": [
                    {
                        "id": "1547388265310535682",
                        "parentId": "1536370394706276353",
                        "weight": 1,
                        "name": "在编员工花名册",
                        "path": "personnel-staff-detial",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "0",
                        "permission": null,
                        "label": "在编员工花名册"
                    },
                    {
                        "id": "1643950177973055490",
                        "parentId": "1536370394706276353",
                        "weight": 2,
                        "name": "非在编员工花名册",
                        "path": "personnel-extra-staff-detial",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 2,
                        "icon": null,
                        "menuType": "0",
                        "permission": null,
                        "label": "非在编员工花名册"
                    },
                    {
                        "id": "1547388316984360962",
                        "parentId": "1536370394706276353",
                        "weight": 3,
                        "name": "权限配置",
                        "path": "personnel-staff-configure",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 3,
                        "icon": null,
                        "menuType": "0",
                        "permission": null,
                        "label": "权限配置"
                    }
                ]
            },
            {
                "id": "1536370677184262146",
                "parentId": "1536370246466990081",
                "weight": 2,
                "name": "电子档案管理",
                "path": "personnel-archives",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 2,
                "icon": "icon-quanxianguanli",
                "menuType": "0",
                "permission": null,
                "label": "电子档案管理"
            },
            {
                "id": "1536526560887369729",
                "parentId": "1536370246466990081",
                "weight": 3,
                "name": "证书管理",
                "path": "personnel-certificate",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 3,
                "icon": "icon-quanxianguanli",
                "menuType": "0",
                "permission": null,
                "label": "证书管理"
            },
            {
                "id": "1640320899730595842",
                "parentId": "1536370246466990081",
                "weight": 4,
                "name": "考勤数据管理",
                "path": "personnel-checking-in",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 4,
                "icon": null,
                "menuType": "0",
                "permission": null,
                "label": "考勤数据管理"
            },
            {
                "id": "1536526647864651777",
                "parentId": "1536370246466990081",
                "weight": 5,
                "name": "合同管理",
                "path": "personnel-contract",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 5,
                "icon": "icon-quanxianguanli",
                "menuType": "0",
                "permission": null,
                "label": "合同管理"
            }
        ]
    },
    {
        "id": "1536527705567457281",
        "parentId": "-1",
        "weight": 2,
        "name": "招聘管理",
        "path": "employ-interview",
        "keepAlive": "0",
        "onlineFlowEntryId": null,
        "onlineFormId": null,
        "sortOrder": 2,
        "icon": "icon-web-icon-",
        "menuType": "0",
        "permission": null,
        "label": "招聘管理",
        "children": [
            {
                "id": "1536529235804745730",
                "parentId": "1536527705567457281",
                "weight": 1,
                "name": "招聘需求管理",
                "path": "employ-interview",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 1,
                "icon": null,
                "menuType": "0",
                "permission": null,
                "label": "招聘需求管理"
            },
            {
                "id": "1536529334672879617",
                "parentId": "1536527705567457281",
                "weight": 2,
                "name": "简历库",
                "path": "employ-resume",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 2,
                "icon": "icon-xitongguanli",
                "menuType": "0",
                "permission": null,
                "label": "简历库"
            },
            {
                "id": "1536529411072126977",
                "parentId": "1536527705567457281",
                "weight": 3,
                "name": "面试管理",
                "path": "interview-management",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 3,
                "icon": "icon-weibiaoti46",
                "menuType": "0",
                "permission": null,
                "label": "面试管理"
            },
            {
                "id": "1536529834893963266",
                "parentId": "1536527705567457281",
                "weight": 4,
                "name": "试用期管理",
                "path": "probation-management",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 4,
                "icon": "icon-weibiaoti46",
                "menuType": "0",
                "permission": null,
                "label": "试用期管理"
            }
        ]
    },
    {
        "id": "3000",
        "parentId": "-1",
        "weight": 2,
        "name": "系统监控",
        "path": "/daemon",
        "keepAlive": "0",
        "onlineFlowEntryId": null,
        "onlineFormId": null,
        "sortOrder": 2,
        "icon": "icon-msnui-supervise",
        "menuType": "2",
        "permission": null,
        "label": "系统监控",
        "children": [
            {
                "id": "3100",
                "parentId": "3000",
                "weight": 0,
                "name": "服务监控",
                "path": "http://127.0.0.1:5001",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 0,
                "icon": "icon-server",
                "menuType": "0",
                "permission": null,
                "label": "服务监控"
            },
            {
                "id": "3101",
                "parentId": "3000",
                "weight": 0,
                "name": "流量监控",
                "path": "http://127.0.0.1:5020",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 0,
                "icon": "icon-liuliang",
                "menuType": "0",
                "permission": null,
                "label": "流量监控"
            },
            {
                "id": "3110",
                "parentId": "3000",
                "weight": 1,
                "name": "缓存监控",
                "path": "/monitor/redis/index",
                "keepAlive": "1",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 1,
                "icon": "icon-qingchuhuancun",
                "menuType": "0",
                "permission": null,
                "label": "缓存监控"
            },
            {
                "id": "3200",
                "parentId": "3000",
                "weight": 1,
                "name": "接口文档",
                "path": "http://127.0.0.1:9999/swagger-ui/index.html",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 1,
                "icon": "icon-wendang",
                "menuType": "0",
                "permission": null,
                "label": "接口文档"
            },
            {
                "id": "3500",
                "parentId": "3000",
                "weight": 2,
                "name": "文档扩展",
                "path": "http://127.0.0.1:9999/doc.html",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 2,
                "icon": "icon-wendang",
                "menuType": "0",
                "permission": null,
                "label": "文档扩展"
            },
            {
                "id": "3300",
                "parentId": "3000",
                "weight": 5,
                "name": "事务监控",
                "path": "/tx/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 5,
                "icon": "icon-gtsquanjushiwufuwuGTS",
                "menuType": "0",
                "permission": null,
                "label": "事务监控"
            },
            {
                "id": "3400",
                "parentId": "3000",
                "weight": 6,
                "name": "在线事务",
                "path": "/tx/model",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 6,
                "icon": "icon-online",
                "menuType": "0",
                "permission": null,
                "label": "在线事务"
            },
            {
                "id": "3600",
                "parentId": "3000",
                "weight": 8,
                "name": "Quartz日志",
                "path": "/daemon/job-log/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 8,
                "icon": "icon-gtsquanjushiwufuwuGTS",
                "menuType": "0",
                "permission": "",
                "label": "Quartz日志"
            }
        ]
    },
    {
        "id": "1536278268509220865",
        "parentId": "-1",
        "weight": 3,
        "name": "薪酬管理",
        "path": "/salary",
        "keepAlive": "0",
        "onlineFlowEntryId": null,
        "onlineFormId": null,
        "sortOrder": 3,
        "icon": "icon-anniu_weixincaidanlianjie",
        "menuType": "0",
        "permission": null,
        "label": "薪酬管理",
        "children": [
            {
                "id": "1536278751923728385",
                "parentId": "1536278268509220865",
                "weight": 1,
                "name": "薪酬制度",
                "path": "salary-system",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 1,
                "icon": "icon-weixincaidan",
                "menuType": "0",
                "permission": null,
                "label": "薪酬制度",
                "children": [
                    {
                        "id": "1536531107336744962",
                        "parentId": "1536278751923728385",
                        "weight": 1,
                        "name": "薪酬方案",
                        "path": "salary-system-programme",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "0",
                        "permission": null,
                        "label": "薪酬方案"
                    },
                    {
                        "id": "1536533575441379330",
                        "parentId": "1536278751923728385",
                        "weight": 2,
                        "name": "薪酬项目",
                        "path": "salary-system-project",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 2,
                        "icon": null,
                        "menuType": "0",
                        "permission": null,
                        "label": "薪酬项目"
                    },
                    {
                        "id": "1536533421594308609",
                        "parentId": "1536278751923728385",
                        "weight": 3,
                        "name": "算薪数据维护",
                        "path": "salary-system-maintain",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 3,
                        "icon": null,
                        "menuType": "0",
                        "permission": null,
                        "label": "算薪数据维护"
                    }
                ]
            },
            {
                "id": "1536533782530945026",
                "parentId": "1536278268509220865",
                "weight": 2,
                "name": "薪酬算发",
                "path": "salary-calc",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 2,
                "icon": null,
                "menuType": "0",
                "permission": null,
                "label": "薪酬算发",
                "children": [
                    {
                        "id": "1536533888231600130",
                        "parentId": "1536533782530945026",
                        "weight": 1,
                        "name": "薪酬核算",
                        "path": "salary-calc-check",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "0",
                        "permission": null,
                        "label": "薪酬核算",
                        "children": [
                            {
                                "id": "1640321535838740481",
                                "parentId": "1536533888231600130",
                                "weight": 1,
                                "name": "导入考勤",
                                "path": null,
                                "keepAlive": "0",
                                "onlineFlowEntryId": null,
                                "onlineFormId": null,
                                "sortOrder": 1,
                                "icon": null,
                                "menuType": "1",
                                "permission": null,
                                "label": "导入考勤"
                            },
                            {
                                "id": "1544605206007263233",
                                "parentId": "1536533888231600130",
                                "weight": 1,
                                "name": "新建工资表",
                                "path": null,
                                "keepAlive": "0",
                                "onlineFlowEntryId": null,
                                "onlineFormId": null,
                                "sortOrder": 1,
                                "icon": null,
                                "menuType": "1",
                                "permission": "add_payroll",
                                "label": "新建工资表"
                            },
                            {
                                "id": "1640321668282277890",
                                "parentId": "1536533888231600130",
                                "weight": 2,
                                "name": "导入专项扣除",
                                "path": null,
                                "keepAlive": "0",
                                "onlineFlowEntryId": null,
                                "onlineFormId": null,
                                "sortOrder": 2,
                                "icon": null,
                                "menuType": "1",
                                "permission": null,
                                "label": "导入专项扣除"
                            },
                            {
                                "id": "1544605743922556930",
                                "parentId": "1536533888231600130",
                                "weight": 2,
                                "name": "批量操作",
                                "path": null,
                                "keepAlive": "0",
                                "onlineFlowEntryId": null,
                                "onlineFormId": null,
                                "sortOrder": 2,
                                "icon": null,
                                "menuType": "1",
                                "permission": "salary-calc-check",
                                "label": "批量操作",
                                "children": [
                                    {
                                        "id": "1544606292210364417",
                                        "parentId": "1544605743922556930",
                                        "weight": 1,
                                        "name": "批量编辑",
                                        "path": null,
                                        "keepAlive": "0",
                                        "onlineFlowEntryId": null,
                                        "onlineFormId": null,
                                        "sortOrder": 1,
                                        "icon": null,
                                        "menuType": "1",
                                        "permission": "batch_edid_payroll",
                                        "label": "批量编辑"
                                    },
                                    {
                                        "id": "1544894348891729922",
                                        "parentId": "1544605743922556930",
                                        "weight": 2,
                                        "name": "导入社保明细表",
                                        "path": null,
                                        "keepAlive": "0",
                                        "onlineFlowEntryId": null,
                                        "onlineFormId": null,
                                        "sortOrder": 2,
                                        "icon": null,
                                        "menuType": "1",
                                        "permission": "import_social_security",
                                        "label": "导入社保明细表"
                                    },
                                    {
                                        "id": "1544894382622322689",
                                        "parentId": "1544605743922556930",
                                        "weight": 3,
                                        "name": "导入公积金明细表",
                                        "path": null,
                                        "keepAlive": "0",
                                        "onlineFlowEntryId": null,
                                        "onlineFormId": null,
                                        "sortOrder": 3,
                                        "icon": null,
                                        "menuType": "1",
                                        "permission": "import_accumulation_fund",
                                        "label": "导入公积金明细表"
                                    },
                                    {
                                        "id": "1544894419519614977",
                                        "parentId": "1544605743922556930",
                                        "weight": 4,
                                        "name": "导入个税明细表",
                                        "path": null,
                                        "keepAlive": "0",
                                        "onlineFlowEntryId": null,
                                        "onlineFormId": null,
                                        "sortOrder": 4,
                                        "icon": null,
                                        "menuType": "1",
                                        "permission": "import_tax_details",
                                        "label": "导入个税明细表"
                                    },
                                    {
                                        "id": "1544894461080973313",
                                        "parentId": "1544605743922556930",
                                        "weight": 5,
                                        "name": "导出工资表",
                                        "path": null,
                                        "keepAlive": "0",
                                        "onlineFlowEntryId": null,
                                        "onlineFormId": null,
                                        "sortOrder": 5,
                                        "icon": null,
                                        "menuType": "1",
                                        "permission": "export_payroll",
                                        "label": "导出工资表"
                                    }
                                ]
                            },
                            {
                                "id": "1544606011980525570",
                                "parentId": "1536533888231600130",
                                "weight": 3,
                                "name": "个税计算",
                                "path": null,
                                "keepAlive": "0",
                                "onlineFlowEntryId": null,
                                "onlineFormId": null,
                                "sortOrder": 3,
                                "icon": null,
                                "menuType": "1",
                                "permission": "tax_calculation",
                                "label": "个税计算"
                            },
                            {
                                "id": "1544892244311617538",
                                "parentId": "1536533888231600130",
                                "weight": 4,
                                "name": "发送工资单",
                                "path": null,
                                "keepAlive": "0",
                                "onlineFlowEntryId": null,
                                "onlineFormId": null,
                                "sortOrder": 4,
                                "icon": null,
                                "menuType": "1",
                                "permission": "send_payroll_param",
                                "label": "发送工资单"
                            },
                            {
                                "id": "1544892322841571330",
                                "parentId": "1536533888231600130",
                                "weight": 5,
                                "name": "发薪审批",
                                "path": null,
                                "keepAlive": "0",
                                "onlineFlowEntryId": null,
                                "onlineFormId": null,
                                "sortOrder": 5,
                                "icon": null,
                                "menuType": "1",
                                "permission": "salary_approval",
                                "label": "发薪审批"
                            },
                            {
                                "id": "1544892407918833666",
                                "parentId": "1536533888231600130",
                                "weight": 6,
                                "name": "工资发放通知",
                                "path": null,
                                "keepAlive": "0",
                                "onlineFlowEntryId": null,
                                "onlineFormId": null,
                                "sortOrder": 6,
                                "icon": null,
                                "menuType": "1",
                                "permission": "payroll_notice",
                                "label": "工资发放通知"
                            },
                            {
                                "id": "1544894033215827969",
                                "parentId": "1536533888231600130",
                                "weight": 7,
                                "name": "添加人员",
                                "path": null,
                                "keepAlive": "0",
                                "onlineFlowEntryId": null,
                                "onlineFormId": null,
                                "sortOrder": 7,
                                "icon": null,
                                "menuType": "1",
                                "permission": "salary-calc-check",
                                "label": "添加人员",
                                "children": [
                                    {
                                        "id": "1544894150245298178",
                                        "parentId": "1544894033215827969",
                                        "weight": 1,
                                        "name": "导入临时员工",
                                        "path": null,
                                        "keepAlive": "0",
                                        "onlineFlowEntryId": null,
                                        "onlineFormId": null,
                                        "sortOrder": 1,
                                        "icon": null,
                                        "menuType": "1",
                                        "permission": "import_temp_employees",
                                        "label": "导入临时员工"
                                    },
                                    {
                                        "id": "1544894246605238273",
                                        "parentId": "1544894033215827969",
                                        "weight": 2,
                                        "name": "添加离职员工",
                                        "path": null,
                                        "keepAlive": "0",
                                        "onlineFlowEntryId": null,
                                        "onlineFormId": null,
                                        "sortOrder": 2,
                                        "icon": null,
                                        "menuType": "1",
                                        "permission": "add_departing_employees",
                                        "label": "添加离职员工"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "1536533972205760514",
                        "parentId": "1536533782530945026",
                        "weight": 2,
                        "name": "社保公积金导入",
                        "path": "salary-calc-import",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 2,
                        "icon": null,
                        "menuType": "0",
                        "permission": null,
                        "label": "社保公积金导入",
                        "children": [
                            {
                                "id": "1552930619246399489",
                                "parentId": "1536533972205760514",
                                "weight": 0,
                                "name": "页面",
                                "path": null,
                                "keepAlive": "0",
                                "onlineFlowEntryId": null,
                                "onlineFormId": null,
                                "sortOrder": 0,
                                "icon": null,
                                "menuType": "1",
                                "permission": "salary-calc-import",
                                "label": "页面"
                            },
                            {
                                "id": "1551824575071977474",
                                "parentId": "1536533972205760514",
                                "weight": 1,
                                "name": "导入",
                                "path": null,
                                "keepAlive": "0",
                                "onlineFlowEntryId": null,
                                "onlineFormId": null,
                                "sortOrder": 1,
                                "icon": null,
                                "menuType": "1",
                                "permission": "salary-calc-import",
                                "label": "导入"
                            }
                        ]
                    },
                    {
                        "id": "1536534102195630082",
                        "parentId": "1536533782530945026",
                        "weight": 3,
                        "name": "发薪审批",
                        "path": "salary-calc-verify",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 3,
                        "icon": null,
                        "menuType": "0",
                        "permission": null,
                        "label": "发薪审批"
                    },
                    {
                        "id": "1536534299562799105",
                        "parentId": "1536533782530945026",
                        "weight": 5,
                        "name": "工资单发放记录",
                        "path": "salary-calc-record",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 5,
                        "icon": "icon-anniu_weixincaidanlianjie",
                        "menuType": "0",
                        "permission": null,
                        "label": "工资单发放记录"
                    },
                    {
                        "id": "1536534369897082881",
                        "parentId": "1536533782530945026",
                        "weight": 6,
                        "name": "算薪人员管理",
                        "path": "salary-calc-admin",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 6,
                        "icon": null,
                        "menuType": "0",
                        "permission": null,
                        "label": "算薪人员管理"
                    }
                ]
            },
            {
                "id": "1536534871292571650",
                "parentId": "1536278268509220865",
                "weight": 3,
                "name": "调薪管理",
                "path": "salary-admin",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 3,
                "icon": "icon-navicon-zdgl",
                "menuType": "0",
                "permission": null,
                "label": "调薪管理",
                "children": [
                    {
                        "id": "1536534949474398209",
                        "parentId": "1536534871292571650",
                        "weight": 1,
                        "name": "调薪管理",
                        "path": "salary-admin-admin",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": "icon-weixincaidan",
                        "menuType": "0",
                        "permission": null,
                        "label": "调薪管理"
                    }
                ]
            },
            {
                "id": "1536535080831610882",
                "parentId": "1536278268509220865",
                "weight": 4,
                "name": "薪酬核算数据提报",
                "path": "salary-submit",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 4,
                "icon": "icon-miyue",
                "menuType": "0",
                "permission": null,
                "label": "薪酬核算数据提报",
                "children": [
                    {
                        "id": "1536535161655848962",
                        "parentId": "1536535080831610882",
                        "weight": 1,
                        "name": "流程配置",
                        "path": "salary-submit-configure",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": "icon-huifu",
                        "menuType": "0",
                        "permission": null,
                        "label": "流程配置"
                    },
                    {
                        "id": "1536535220334161921",
                        "parentId": "1536535080831610882",
                        "weight": 2,
                        "name": "流程审批",
                        "path": "salary-submit-verify",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 2,
                        "icon": "icon-bangzhushouji",
                        "menuType": "0",
                        "permission": null,
                        "label": "流程审批"
                    },
                    {
                        "id": "1545216059933941762",
                        "parentId": "1536535080831610882",
                        "weight": 3,
                        "name": "流程列表",
                        "path": "salary-submit-list",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 3,
                        "icon": null,
                        "menuType": "0",
                        "permission": null,
                        "label": "流程列表"
                    }
                ]
            },
            {
                "id": "1536535525318782977",
                "parentId": "1536278268509220865",
                "weight": 6,
                "name": "数据统计",
                "path": "salary-dataStatistics",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 6,
                "icon": null,
                "menuType": "0",
                "permission": null,
                "label": "数据统计",
                "children": [
                    {
                        "id": "1536535589516800002",
                        "parentId": "1536535525318782977",
                        "weight": 1,
                        "name": "薪酬报表",
                        "path": "salary-dataStatistics-reportForm",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": "icon-xiaoxiguanli",
                        "menuType": "0",
                        "permission": null,
                        "label": "薪酬报表"
                    }
                ]
            }
        ]
    },
    {
        "id": "4000",
        "parentId": "-1",
        "weight": 3,
        "name": "协同管理",
        "path": "/activti",
        "keepAlive": "0",
        "onlineFlowEntryId": null,
        "onlineFormId": null,
        "sortOrder": 3,
        "icon": "icon-kuaisugongzuoliu_o",
        "menuType": "0",
        "permission": null,
        "label": "协同管理",
        "children": [
            {
                "id": "4100",
                "parentId": "4000",
                "weight": 1,
                "name": "模型管理",
                "path": "/activiti/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 1,
                "icon": "icon-weibiaoti13",
                "menuType": "0",
                "permission": null,
                "label": "模型管理",
                "children": [
                    {
                        "id": "4101",
                        "parentId": "4100",
                        "weight": 0,
                        "name": "模型管理",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 0,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "act_model_manage",
                        "label": "模型管理"
                    }
                ]
            },
            {
                "id": "4200",
                "parentId": "4000",
                "weight": 2,
                "name": "流程管理",
                "path": "/activiti/process",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 2,
                "icon": "icon-liucheng",
                "menuType": "0",
                "permission": "/activiti/process",
                "label": "流程管理",
                "children": [
                    {
                        "id": "4201",
                        "parentId": "4200",
                        "weight": 0,
                        "name": "流程管理",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 0,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "act_process_manage",
                        "label": "流程管理"
                    }
                ]
            },
            {
                "id": "4300",
                "parentId": "4000",
                "weight": 3,
                "name": "请假管理",
                "path": "/activiti/leave",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 3,
                "icon": "icon-qingjia",
                "menuType": "0",
                "permission": "/activiti/leave",
                "label": "请假管理",
                "children": [
                    {
                        "id": "4301",
                        "parentId": "4300",
                        "weight": 0,
                        "name": "请假新增",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 0,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "act_leavebill_add",
                        "label": "请假新增"
                    },
                    {
                        "id": "4302",
                        "parentId": "4300",
                        "weight": 1,
                        "name": "请假修改",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "act_leavebill_edit",
                        "label": "请假修改"
                    },
                    {
                        "id": "4303",
                        "parentId": "4300",
                        "weight": 2,
                        "name": "请假删除",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 2,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "act_leavebill_del",
                        "label": "请假删除"
                    }
                ]
            },
            {
                "id": "4400",
                "parentId": "4000",
                "weight": 4,
                "name": "待办任务",
                "path": "/activiti/task",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 4,
                "icon": "icon-renwu",
                "menuType": "0",
                "permission": "/activiti/task",
                "label": "待办任务",
                "children": [
                    {
                        "id": "4401",
                        "parentId": "4400",
                        "weight": 0,
                        "name": "流程管理",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 0,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "act_task_manage",
                        "label": "流程管理"
                    }
                ]
            }
        ]
    },
    {
        "id": "1549235371106263042",
        "parentId": "-1",
        "weight": 4,
        "name": "绩效管理",
        "path": "/achievements",
        "keepAlive": "0",
        "onlineFlowEntryId": null,
        "onlineFormId": null,
        "sortOrder": 4,
        "icon": "icon-quanxianguanli",
        "menuType": "0",
        "permission": null,
        "label": "绩效管理",
        "children": [
            {
                "id": "1549235452740001794",
                "parentId": "1549235371106263042",
                "weight": 1,
                "name": "绩效填写",
                "path": "achievements-write",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 1,
                "icon": null,
                "menuType": "0",
                "permission": null,
                "label": "绩效填写"
            },
            {
                "id": "1549240860351291393",
                "parentId": "1549235371106263042",
                "weight": 2,
                "name": "审核大厅",
                "path": "achievements-hall",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 2,
                "icon": null,
                "menuType": "0",
                "permission": null,
                "label": "审核大厅"
            },
            {
                "id": "1549285378610061313",
                "parentId": "1549235371106263042",
                "weight": 3,
                "name": "绩效评定",
                "path": "achievements-evaluate",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 3,
                "icon": null,
                "menuType": "0",
                "permission": null,
                "label": "绩效评定",
                "children": [
                    {
                        "id": "1555370010098221058",
                        "parentId": "1549285378610061313",
                        "weight": 1,
                        "name": "自评",
                        "path": "achievements-evaluate-assessment",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "0",
                        "permission": null,
                        "label": "自评"
                    },
                    {
                        "id": "1555374275218849793",
                        "parentId": "1549285378610061313",
                        "weight": 2,
                        "name": "上级评定",
                        "path": "achievements-evaluate-leaderevaluate",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 2,
                        "icon": null,
                        "menuType": "0",
                        "permission": null,
                        "label": "上级评定"
                    },
                    {
                        "id": "1555374334249484289",
                        "parentId": "1549285378610061313",
                        "weight": 3,
                        "name": "中心负责人审核",
                        "path": "achievements-evaluate-dutyevaluate",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 3,
                        "icon": null,
                        "menuType": "0",
                        "permission": null,
                        "label": "中心负责人审核"
                    }
                ]
            },
            {
                "id": "1549294138573348865",
                "parentId": "1549235371106263042",
                "weight": 4,
                "name": "评定结果",
                "path": "achievements-result",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 4,
                "icon": "icon-quanxianguanli",
                "menuType": "0",
                "permission": null,
                "label": "评定结果",
                "children": [
                    {
                        "id": "1562023603390840833",
                        "parentId": "1549294138573348865",
                        "weight": 0,
                        "name": "页面",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 0,
                        "icon": null,
                        "menuType": "1",
                        "permission": "achievements-result",
                        "label": "页面"
                    },
                    {
                        "id": "1562023762120081409",
                        "parentId": "1549294138573348865",
                        "weight": 1,
                        "name": "比例展示",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "achievements-result",
                        "label": "比例展示"
                    },
                    {
                        "id": "1563090485890134018",
                        "parentId": "1549294138573348865",
                        "weight": 2,
                        "name": "导出",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 2,
                        "icon": null,
                        "menuType": "1",
                        "permission": "achievements-result",
                        "label": "导出",
                        "children": [
                            {
                                "id": "1563090793416503298",
                                "parentId": "1563090485890134018",
                                "weight": 1,
                                "name": "导出明细表",
                                "path": null,
                                "keepAlive": "0",
                                "onlineFlowEntryId": null,
                                "onlineFormId": null,
                                "sortOrder": 1,
                                "icon": null,
                                "menuType": "1",
                                "permission": "achievements-result",
                                "label": "导出明细表"
                            },
                            {
                                "id": "1563090833983811586",
                                "parentId": "1563090485890134018",
                                "weight": 2,
                                "name": "导出汇总表",
                                "path": null,
                                "keepAlive": "0",
                                "onlineFlowEntryId": null,
                                "onlineFormId": null,
                                "sortOrder": 2,
                                "icon": null,
                                "menuType": "1",
                                "permission": "achievements-result",
                                "label": "导出汇总表"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "1549294230478938113",
                "parentId": "1549235371106263042",
                "weight": 5,
                "name": "绩效核算",
                "path": "achievements-calc",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 5,
                "icon": null,
                "menuType": "0",
                "permission": null,
                "label": "绩效核算",
                "children": [
                    {
                        "id": "1557213241220333569",
                        "parentId": "1549294230478938113",
                        "weight": 1,
                        "name": "绩效核算全部页",
                        "path": "achievements-calc-all",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "0",
                        "permission": null,
                        "label": "绩效核算全部页"
                    },
                    {
                        "id": "1557213108109901826",
                        "parentId": "1549294230478938113",
                        "weight": 1,
                        "name": "绩效核算个人页",
                        "path": "achievements-calc-personal",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "0",
                        "permission": null,
                        "label": "绩效核算个人页"
                    }
                ]
            },
            {
                "id": "1556575098926817282",
                "parentId": "1549235371106263042",
                "weight": 6,
                "name": "人员填报情况",
                "path": "achievements-writeSituation",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 6,
                "icon": null,
                "menuType": "0",
                "permission": null,
                "label": "人员填报情况"
            },
            {
                "id": "1549294369687887874",
                "parentId": "1549235371106263042",
                "weight": 7,
                "name": "人员配置",
                "path": "achievements-config",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 7,
                "icon": null,
                "menuType": "0",
                "permission": null,
                "label": "人员配置"
            },
            {
                "id": "1621416056041189378",
                "parentId": "1549235371106263042",
                "weight": 8,
                "name": "系统配置",
                "path": "achievements-system-config",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 8,
                "icon": null,
                "menuType": "0",
                "permission": null,
                "label": "系统配置",
                "children": [
                    {
                        "id": "1621417434813771777",
                        "parentId": "1621416056041189378",
                        "weight": 1,
                        "name": "模板配置",
                        "path": "achievements-system-config-template",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "0",
                        "permission": null,
                        "label": "模板配置"
                    },
                    {
                        "id": "1621417996418494465",
                        "parentId": "1621416056041189378",
                        "weight": 2,
                        "name": "评分比例配置",
                        "path": "achievements-system-config-grade-ratio",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 2,
                        "icon": null,
                        "menuType": "0",
                        "permission": null,
                        "label": "评分比例配置"
                    }
                ]
            },
            {
                "id": "1641259108840501249",
                "parentId": "1549235371106263042",
                "weight": 999,
                "name": "流程回退",
                "path": "achievements-process-fallback",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 999,
                "icon": null,
                "menuType": "0",
                "permission": null,
                "label": "流程回退"
            }
        ]
    },
    {
        "id": "6000",
        "parentId": "-1",
        "weight": 4,
        "name": "微信管理",
        "path": "/mp",
        "keepAlive": "0",
        "onlineFlowEntryId": null,
        "onlineFormId": null,
        "sortOrder": 4,
        "icon": "icon-gongzhonghao",
        "menuType": "0",
        "permission": null,
        "label": "微信管理",
        "children": [
            {
                "id": "6400",
                "parentId": "6000",
                "weight": 6,
                "name": "菜单设置",
                "path": "/mp/wx-menu/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 6,
                "icon": "icon-anniu_weixincaidanlianjie",
                "menuType": "0",
                "permission": null,
                "label": "菜单设置",
                "children": [
                    {
                        "id": "6401",
                        "parentId": "6400",
                        "weight": 1,
                        "name": "保存",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "mp_wxmenu_add",
                        "label": "保存"
                    },
                    {
                        "id": "6402",
                        "parentId": "6400",
                        "weight": 1,
                        "name": "发布",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "mp_wxmenu_push",
                        "label": "发布"
                    },
                    {
                        "id": "6403",
                        "parentId": "6400",
                        "weight": 1,
                        "name": "删除",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "mp_wxmenu_del",
                        "label": "删除"
                    }
                ]
            },
            {
                "id": "6500",
                "parentId": "6000",
                "weight": 7,
                "name": "运营数据",
                "path": "/mp/wx-statistics/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 7,
                "icon": "icon-zhexiantu",
                "menuType": "0",
                "permission": null,
                "label": "运营数据"
            },
            {
                "id": "6200",
                "parentId": "6000",
                "weight": 8,
                "name": "粉丝管理",
                "path": "/mp/wx-account-fans/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 8,
                "icon": "icon-fensiguanli",
                "menuType": "0",
                "permission": "",
                "label": "粉丝管理",
                "children": [
                    {
                        "id": "6201",
                        "parentId": "6200",
                        "weight": 0,
                        "name": "粉丝新增",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 0,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "mp_wxaccountfans_add",
                        "label": "粉丝新增"
                    },
                    {
                        "id": "6202",
                        "parentId": "6200",
                        "weight": 1,
                        "name": "粉丝修改",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "mp_wxaccountfans_edit",
                        "label": "粉丝修改"
                    },
                    {
                        "id": "6203",
                        "parentId": "6200",
                        "weight": 2,
                        "name": "粉丝删除",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 2,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "mp_wxaccountfans_del",
                        "label": "粉丝删除"
                    },
                    {
                        "id": "6204",
                        "parentId": "6200",
                        "weight": 3,
                        "name": "粉丝同步",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 3,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "mp_wxaccountfans_sync",
                        "label": "粉丝同步"
                    }
                ]
            },
            {
                "id": "6300",
                "parentId": "6000",
                "weight": 8,
                "name": "消息管理",
                "path": "/mp/wx-fans-msg/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 8,
                "icon": "icon-xiaoxiguanli",
                "menuType": "0",
                "permission": "",
                "label": "消息管理",
                "children": [
                    {
                        "id": "6301",
                        "parentId": "6300",
                        "weight": 0,
                        "name": "消息新增",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 0,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "mp_wxmsg_add",
                        "label": "消息新增"
                    },
                    {
                        "id": "6302",
                        "parentId": "6300",
                        "weight": 1,
                        "name": "消息修改",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "mp_wxmsg_edit",
                        "label": "消息修改"
                    },
                    {
                        "id": "6303",
                        "parentId": "6300",
                        "weight": 2,
                        "name": "消息删除",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 2,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "mp_wxmsg_del",
                        "label": "消息删除"
                    }
                ]
            },
            {
                "id": "6100",
                "parentId": "6000",
                "weight": 8,
                "name": "账号管理",
                "path": "/mp/wx-account/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 8,
                "icon": "icon-weixincaidan",
                "menuType": "0",
                "permission": "",
                "label": "账号管理",
                "children": [
                    {
                        "id": "6101",
                        "parentId": "6100",
                        "weight": 0,
                        "name": "公众号新增",
                        "path": "",
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 0,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "mp_wxaccount_add",
                        "label": "公众号新增"
                    },
                    {
                        "id": "6102",
                        "parentId": "6100",
                        "weight": 1,
                        "name": "公众号修改",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "mp_wxaccount_edit",
                        "label": "公众号修改"
                    },
                    {
                        "id": "6103",
                        "parentId": "6100",
                        "weight": 2,
                        "name": "公众号删除",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 2,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "mp_wxaccount_del",
                        "label": "公众号删除"
                    }
                ]
            },
            {
                "id": "6700",
                "parentId": "6000",
                "weight": 998,
                "name": "自动回复",
                "path": "/mp/wx-auto-reply/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 998,
                "icon": "icon-huifu",
                "menuType": "0",
                "permission": null,
                "label": "自动回复",
                "children": [
                    {
                        "id": "6701",
                        "parentId": "6700",
                        "weight": 1,
                        "name": "新增回复",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "mp_wxautoreply_add",
                        "label": "新增回复"
                    },
                    {
                        "id": "6702",
                        "parentId": "6700",
                        "weight": 1,
                        "name": "编辑回复",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "mp_wxautoreply_edit",
                        "label": "编辑回复"
                    },
                    {
                        "id": "6703",
                        "parentId": "6700",
                        "weight": 1,
                        "name": "删除回复",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "mp_wxautoreply_del",
                        "label": "删除回复"
                    }
                ]
            },
            {
                "id": "6800",
                "parentId": "6000",
                "weight": 998,
                "name": "标签管理",
                "path": "/mp/wx-account-tag/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 998,
                "icon": "icon-huifu",
                "menuType": "0",
                "permission": null,
                "label": "标签管理",
                "children": [
                    {
                        "id": "6801",
                        "parentId": "6800",
                        "weight": 1,
                        "name": "新增标签",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "mp_wx_account_tag_add",
                        "label": "新增标签"
                    },
                    {
                        "id": "6802",
                        "parentId": "6800",
                        "weight": 1,
                        "name": "编辑标签",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "mp_wx_account_tag_edit",
                        "label": "编辑标签"
                    },
                    {
                        "id": "6803",
                        "parentId": "6800",
                        "weight": 1,
                        "name": "删除标签",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "mp_wx_account_tag_del",
                        "label": "删除标签"
                    },
                    {
                        "id": "6804",
                        "parentId": "6800",
                        "weight": 1,
                        "name": "同步标签",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "mp_wx_account_tag_sync",
                        "label": "同步标签"
                    }
                ]
            },
            {
                "id": "6600",
                "parentId": "6000",
                "weight": 999,
                "name": "素材管理",
                "path": "/mp/wx-material/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 999,
                "icon": "icon-sucaisads",
                "menuType": "0",
                "permission": null,
                "label": "素材管理",
                "children": [
                    {
                        "id": "6601",
                        "parentId": "6600",
                        "weight": 1,
                        "name": "素材维护",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "mp_wxmaterial_add",
                        "label": "素材维护"
                    },
                    {
                        "id": "6602",
                        "parentId": "6600",
                        "weight": 1,
                        "name": "素材删除",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "mp_wxmaterial_del",
                        "label": "素材删除"
                    }
                ]
            }
        ]
    },
    {
        "id": "5000",
        "parentId": "-1",
        "weight": 4,
        "name": "支付管理",
        "path": "/pay",
        "keepAlive": "0",
        "onlineFlowEntryId": null,
        "onlineFormId": null,
        "sortOrder": 4,
        "icon": "icon-pay6zhifu",
        "menuType": "0",
        "permission": null,
        "label": "支付管理",
        "children": [
            {
                "id": "5200",
                "parentId": "5000",
                "weight": 0,
                "name": "收银台",
                "path": "/pay/cd/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 0,
                "icon": "icon-shouyintai",
                "menuType": "0",
                "permission": null,
                "label": "收银台"
            },
            {
                "id": "5100",
                "parentId": "5000",
                "weight": 1,
                "name": "渠道管理",
                "path": "/pay/paychannel/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 1,
                "icon": "icon-zhifuqudaoguanli",
                "menuType": "0",
                "permission": null,
                "label": "渠道管理",
                "children": [
                    {
                        "id": "5120",
                        "parentId": "5100",
                        "weight": 1,
                        "name": "编辑渠道",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "pay_paychannel_edit",
                        "label": "编辑渠道"
                    },
                    {
                        "id": "5130",
                        "parentId": "5100",
                        "weight": 1,
                        "name": "删除渠道",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "pay_paychannel_del",
                        "label": "删除渠道"
                    },
                    {
                        "id": "5110",
                        "parentId": "5100",
                        "weight": 1,
                        "name": "增加渠道",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": null,
                        "menuType": "1",
                        "permission": "pay_paychannel_add",
                        "label": "增加渠道"
                    }
                ]
            },
            {
                "id": "5300",
                "parentId": "5000",
                "weight": 2,
                "name": "商品订单",
                "path": "/pay/goods/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 2,
                "icon": "icon-dingdan",
                "menuType": "0",
                "permission": "",
                "label": "商品订单",
                "children": [
                    {
                        "id": "5310",
                        "parentId": "5300",
                        "weight": 0,
                        "name": "商品订单新增",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 0,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "generator_paygoodsorder_add",
                        "label": "商品订单新增"
                    },
                    {
                        "id": "5320",
                        "parentId": "5300",
                        "weight": 1,
                        "name": "商品订单修改",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "generator_paygoodsorder_edit",
                        "label": "商品订单修改"
                    },
                    {
                        "id": "5330",
                        "parentId": "5300",
                        "weight": 2,
                        "name": "商品订单删除",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 2,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "generator_paygoodsorder_del",
                        "label": "商品订单删除"
                    }
                ]
            },
            {
                "id": "5400",
                "parentId": "5000",
                "weight": 3,
                "name": "支付订单",
                "path": "/pay/orders/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 3,
                "icon": "icon-zhifu",
                "menuType": "0",
                "permission": "",
                "label": "支付订单",
                "children": [
                    {
                        "id": "5410",
                        "parentId": "5400",
                        "weight": 0,
                        "name": "支付订单新增",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 0,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "generator_paytradeorder_add",
                        "label": "支付订单新增"
                    },
                    {
                        "id": "5420",
                        "parentId": "5400",
                        "weight": 1,
                        "name": "支付订单修改",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "generator_paytradeorder_edit",
                        "label": "支付订单修改"
                    },
                    {
                        "id": "5430",
                        "parentId": "5400",
                        "weight": 2,
                        "name": "支付订单删除",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 2,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "generator_paytradeorder_del",
                        "label": "支付订单删除"
                    }
                ]
            },
            {
                "id": "5500",
                "parentId": "5000",
                "weight": 4,
                "name": "回调记录",
                "path": "/pay/notify/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 4,
                "icon": "icon-huitiao",
                "menuType": "0",
                "permission": "",
                "label": "回调记录",
                "children": [
                    {
                        "id": "5510",
                        "parentId": "5500",
                        "weight": 0,
                        "name": "记录新增",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 0,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "generator_paynotifyrecord_add",
                        "label": "记录新增"
                    },
                    {
                        "id": "5520",
                        "parentId": "5500",
                        "weight": 1,
                        "name": "记录修改",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "generator_paynotifyrecord_edit",
                        "label": "记录修改"
                    },
                    {
                        "id": "5530",
                        "parentId": "5500",
                        "weight": 2,
                        "name": "记录删除",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 2,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "generator_paynotifyrecord_del",
                        "label": "记录删除"
                    }
                ]
            }
        ]
    },
    {
        "id": "9000",
        "parentId": "-1",
        "weight": 9,
        "name": "开发平台",
        "path": "/gen",
        "keepAlive": "0",
        "onlineFlowEntryId": null,
        "onlineFormId": null,
        "sortOrder": 9,
        "icon": "icon-shejiyukaifa-",
        "menuType": "0",
        "permission": null,
        "label": "开发平台",
        "children": [
            {
                "id": "9005",
                "parentId": "9000",
                "weight": 0,
                "name": "数据源管理",
                "path": "/gen/datasource",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 0,
                "icon": "icon-mysql",
                "menuType": "0",
                "permission": null,
                "label": "数据源管理"
            },
            {
                "id": "2300",
                "parentId": "9000",
                "weight": 1,
                "name": "代码生成",
                "path": "/gen/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 1,
                "icon": "icon-weibiaoti46",
                "menuType": "0",
                "permission": "",
                "label": "代码生成"
            },
            {
                "id": "9006",
                "parentId": "9000",
                "weight": 2,
                "name": "表单设计",
                "path": "/gen/design",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 2,
                "icon": "icon-biaodanbiaoqian",
                "menuType": "0",
                "permission": null,
                "label": "表单设计"
            },
            {
                "id": "9001",
                "parentId": "9000",
                "weight": 3,
                "name": "表单管理",
                "path": "/gen/form",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 3,
                "icon": "icon-record",
                "menuType": "0",
                "permission": "",
                "label": "表单管理",
                "children": [
                    {
                        "id": "9002",
                        "parentId": "9001",
                        "weight": 0,
                        "name": "表单新增",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 0,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "gen_form_add",
                        "label": "表单新增"
                    },
                    {
                        "id": "9003",
                        "parentId": "9001",
                        "weight": 1,
                        "name": "表单修改",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 1,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "gen_form_edit",
                        "label": "表单修改"
                    },
                    {
                        "id": "9004",
                        "parentId": "9001",
                        "weight": 2,
                        "name": "表单删除",
                        "path": null,
                        "keepAlive": "0",
                        "onlineFlowEntryId": null,
                        "onlineFormId": null,
                        "sortOrder": 2,
                        "icon": "1",
                        "menuType": "1",
                        "permission": "gen_form_del",
                        "label": "表单删除"
                    }
                ]
            }
        ]
    },
    {
        "id": "7000",
        "parentId": "-1",
        "weight": 9,
        "name": "报表设计",
        "path": "http://127.0.0.1:5006/ureport/designer",
        "keepAlive": "0",
        "onlineFlowEntryId": null,
        "onlineFormId": null,
        "sortOrder": 9,
        "icon": "icon-icon-p_mrpbaobiao",
        "menuType": "0",
        "permission": null,
        "label": "报表设计"
    },
    {
        "id": "10000",
        "parentId": "-1",
        "weight": 10,
        "name": "大屏设计",
        "path": "http://127.0.0.1:9095/",
        "keepAlive": "0",
        "onlineFlowEntryId": null,
        "onlineFormId": null,
        "sortOrder": 10,
        "icon": "icon-shuju",
        "menuType": "0",
        "permission": null,
        "label": "大屏设计",
        "children": [
            {
                "id": "1519617202080763905",
                "parentId": "10000",
                "weight": 999,
                "name": "流程实例",
                "path": "/workflow/formAllInstance",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 999,
                "icon": "icon-web-icon-",
                "menuType": "0",
                "permission": null,
                "label": "流程实例"
            }
        ]
    },
    {
        "id": "1519856542551691266",
        "parentId": "-1",
        "weight": 999,
        "name": "任务管理",
        "path": "/workflow",
        "keepAlive": "0",
        "onlineFlowEntryId": null,
        "onlineFormId": null,
        "sortOrder": 999,
        "icon": "icon-navicon-zdgl",
        "menuType": "0",
        "permission": null,
        "label": "任务管理",
        "children": [
            {
                "id": "1519858240544362498",
                "parentId": "1519856542551691266",
                "weight": 22,
                "name": "历史任务",
                "path": "/workflow/taskManager/formMyHistoryTask",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 22,
                "icon": "icon-caidanguanli",
                "menuType": "0",
                "permission": null,
                "label": "历史任务"
            },
            {
                "id": "1519857720639410177",
                "parentId": "1519856542551691266",
                "weight": 999,
                "name": "已办任务",
                "path": "/workflow/taskManager/formMyApprovedTask",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 999,
                "icon": "icon-server",
                "menuType": "0",
                "permission": null,
                "label": "已办任务"
            },
            {
                "id": "1519856947654348801",
                "parentId": "1519856542551691266",
                "weight": 999,
                "name": "代办任务",
                "path": "/workflow/taskManager/formMyTask",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 999,
                "icon": "icon-miyue",
                "menuType": "0",
                "permission": null,
                "label": "代办任务"
            }
        ]
    },
    {
        "id": "1519240917571653633",
        "parentId": "-1",
        "weight": 999,
        "name": "在线表单",
        "path": "/onlineForm",
        "keepAlive": "0",
        "onlineFlowEntryId": null,
        "onlineFormId": null,
        "sortOrder": 999,
        "icon": "icon-guanwangfangwen",
        "menuType": "0",
        "permission": null,
        "label": "在线表单",
        "children": [
            {
                "id": "1519241257037647874",
                "parentId": "1519240917571653633",
                "weight": 92,
                "name": "表单设计",
                "path": "/onlineForm/formOnlinePage/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 92,
                "icon": "icon-jiaoseguanli",
                "menuType": "0",
                "permission": null,
                "label": "表单设计"
            },
            {
                "id": "1519241104306262017",
                "parentId": "1519240917571653633",
                "weight": 999,
                "name": "表单字典",
                "path": "/onlineForm/formOnlineDict/index",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 999,
                "icon": "icon-rizhiguanli",
                "menuType": "0",
                "permission": null,
                "label": "表单字典"
            }
        ]
    },
    {
        "id": "1522026843028860929",
        "parentId": "-1",
        "weight": 999,
        "name": "工单管理",
        "path": "onlineForms",
        "keepAlive": "0",
        "onlineFlowEntryId": null,
        "onlineFormId": null,
        "sortOrder": 999,
        "icon": "icon-weibiaoti46",
        "menuType": "0",
        "permission": null,
        "label": "工单管理",
        "children": [
            {
                "id": "1523555949679833090",
                "parentId": "1522026843028860929",
                "weight": 999,
                "name": "请假申请",
                "path": "/onlineForm/index",
                "keepAlive": "0",
                "onlineFlowEntryId": "1523508311104688128",
                "onlineFormId": "1523555134041231360",
                "sortOrder": 999,
                "icon": "icon-quanxianguanli",
                "menuType": "0",
                "permission": null,
                "label": "请假申请"
            },
            {
                "id": "1522841153430929410",
                "parentId": "1522026843028860929",
                "weight": 999,
                "name": "测试请假工单",
                "path": "/onlineForm/index",
                "keepAlive": "0",
                "onlineFlowEntryId": "1523508311104688128",
                "onlineFormId": "1523555134041231360",
                "sortOrder": 999,
                "icon": "icon-rizhiguanli",
                "menuType": "0",
                "permission": null,
                "label": "测试请假工单"
            }
        ]
    },
    {
        "id": "1519587252497862658",
        "parentId": "-1",
        "weight": 2233,
        "name": "流程管理",
        "path": "/workflows",
        "keepAlive": "0",
        "onlineFlowEntryId": null,
        "onlineFormId": null,
        "sortOrder": 2233,
        "icon": "icon-canshu",
        "menuType": "0",
        "permission": null,
        "label": "流程管理",
        "children": [
            {
                "id": "1519587889809772545",
                "parentId": "1519587252497862658",
                "weight": 233,
                "name": "流程分类",
                "path": "/workflow/flowCategory/formFlowCategory",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 233,
                "icon": "icon-weibiaoti46",
                "menuType": "0",
                "permission": null,
                "label": "流程分类"
            },
            {
                "id": "1519610983479824385",
                "parentId": "1519587252497862658",
                "weight": 999,
                "name": "流程设计",
                "path": "/workflow/flowEntry/formFlowEntry",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 999,
                "icon": "icon-wendang",
                "menuType": "0",
                "permission": null,
                "label": "流程设计"
            },
            {
                "id": "1519617719855009793",
                "parentId": "1519587252497862658",
                "weight": 999,
                "name": "流程实例",
                "path": "/workflow/taskManager/formAllInstance",
                "keepAlive": "0",
                "onlineFlowEntryId": null,
                "onlineFormId": null,
                "sortOrder": 999,
                "icon": "icon-weibiaoti46",
                "menuType": "0",
                "permission": null,
                "label": "流程实例"
            }
        ]
    }
]
```

这两段初始代码用el-tree渲染大概长这样:

![image-20230506154907843](/image-20230506154907843.png)

![image-20230506154927007](/image-20230506154927007.png)

期望处理后的结果大概长这样:

![image-20230506154952783](/image-20230506154952783.png)

### 三层结构

处理代码如下:

```js
// 定义过滤函数
export function filterTreeByCheckKeys(tree, checkKeys) {
  // 判断checkKeys是否为空,不为空才进入逻辑处理,否则直接返回原始tree
  if (checkKeys.length) {
     // 遍历树形结构菜单
    for (let i = 0; i < tree.length; i++) {
      // 获取当前节点
      let node = tree[i];
      // 判断当前节点的id是否在checkKeys数组中
      if (checkKeys.includes(node.id.toString())) {
        // 如果在，保留当前节点，并继续遍历它的子节点
        if (Array.isArray(node.children)) {
            // 递归调用,直到没有children子节点
          filterTreeByCheckKeys(node.children, checkKeys);
        }
      } else {
        // 如果不在，检查它的子节点是否有被checkKeys数组包含的项
        const children = node.children
        if (Array.isArray(children)) {
          let hasCheckedChild = children.some((child) =>
            checkKeys.includes(child.id.toString())
          );
          if (hasCheckedChild) {
            // 如果有，保留当前节点，并继续遍历它的子节点
            filterTreeByCheckKeys(children, checkKeys);
          } else {
            // 如果没有,检查子节点的子节点是否有被checkKeys数组包含的项
            let hasCheckedChildChild = children.some((child) => {
              if (Array.isArray(child.children)) {
                return child.children.some((childChild) =>
                  checkKeys.includes(childChild.id.toString())
                );
              }
            });
            if (hasCheckedChildChild) {
              // 如果有，保留当前节点，并继续遍历它的子节点
              filterTreeByCheckKeys(children, checkKeys);
            } else {
              // 如果没有，删除当前节点
              tree.splice(i, 1);
              i--;
            }
          }
        } else {
          tree.splice(i, 1);
          i--;
        }
      }
    }
  }
  // 返回过滤后的树形结构菜单
  return tree;
}
```

解释一下else的逻辑,el-tree必须是全部子节点都选中才会选中父节点,因此当只选中一部分时,我们的checkedKeys里是不包含子节点的父节点的,因此会走else部分, 当第一个children走完发现没有,说明我们的tree是非常深的tree,我们可能选了第3级的子节点而不包含父节点,所以才会走hasCheckedChildChild, 但这有个缺陷就是我们只能检查3层结构的tree,当选择第4层时我们就无能为力了

### 最终代码

```js
// 定义一个过滤函数，接受treeData和checkedKeys作为参数
        const filterTree = (treeData, checkedKeys) => {
            // 创建一个空数组，用来存放过滤后的结果
            let result = [];
            // 遍历treeData中的每个节点
            for (let node of treeData) {
                // 判断节点的id是否在checkedKeys中
                if (checkedKeys.includes(node.id)) {
                    // 如果在，就把节点复制一份，加入结果数组
                    let copy = { ...node };
                    result.push(copy);
                    // 如果节点有children属性，就递归调用过滤函数，对其子节点进行过滤，并赋值给复制的节点
                    if (node.children) {
                        copy.children = filterTree(node.children, checkedKeys);
                    }
                } else if ((node.children && node.children.length > 0)) { 
                    // 如果不在，就判断节点是否有children属性，如果有，就递归调用过滤函数，对其子节点进行过滤，并赋值给复制的节点
                    let copy = { ...node };
                    copy.children = filterTree(node.children, checkedKeys);
                    // 如果复制的节点有子节点，就加入结果数组
                    if (copy.children.length > 0) {
                        result.push(copy);
                    }
                } else {
                    // 如果不在，就跳过这个节点，不加入结果数组
                    continue;
                }
            }
            // 返回结果数组
            return result;
        }
```

## 多维数组过滤 - 级联菜单

```js

const selectIds = [
    [
        "9c76a2c3a8fcb7e606d7349fd045fa97",
        "ae8d267fde329f9d8e141b791cb5b39e",
        "873"
    ],
    [
        "9c76a2c3a8fcb7e606d7349fd045fa97",
        "ae8d267fde329f9d8e141b791cb5b39e",
        "777"
    ],
    [
        "9c76a2c3a8fcb7e606d7349fd045fa97",
        "ae8d267fde329f9d8e141b791cb5b39e",
        "664"
    ],
    [
        "9c76a2c3a8fcb7e606d7349fd045fa97",
        "309"
    ],
    [
        "bf4a9a34ce72913db48298ba4f42b531"
    ]
]

```

```js

function filterById(selectIds, currentId) {
    // 创建一个空数组来存储过滤后的结果
    let filtered = [];
    // 遍历selectIds数组中的每个对象
    for (let arr of selectIds) {
        // 检查对象中是否有id4属性，并且它的值是否等于currentId
        if (arr.includes(currentId)) {
            // 如果是，跳过这个对象，不添加到过滤后的结果中
            continue;
        } else {
            // 如果不是，添加这个对象到过滤后的结果中
            filtered.push(arr);
        }
    }
    // 返回过滤后的结果
    return filtered;
}

console.log(filterById(selectIds, '309'));
```





