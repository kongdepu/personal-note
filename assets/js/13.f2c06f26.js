(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{514:function(s,t,a){"use strict";a.r(t);var n=a(40),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[s._v("#")]),s._v(" Git")]),s._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("ol",[a("li",[s._v("Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。")]),s._v(" "),a("li",[s._v("Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。")]),s._v(" "),a("li",[s._v("Git 与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。")])]),s._v(" "),a("h2",{attrs:{id:"安装配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装配置"}},[s._v("#")]),s._v(" 安装配置")]),s._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("Git 目前支持 Linux/Unix、Solaris、Mac和 Windows 平台上运行。\n"),a("a",{attrs:{href:"http://git-scm.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网地址"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("官网慢、可以用国内的镜像"),a("a",{attrs:{href:"https://npm.taobao.org/mirrors/git-for-windows/",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击进入"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("完成安装之后，就可以使用命令行的 git 工具（已经自带了 ssh 客户端）了，另外还有一个图形界面的 Git 项目管理工具。")]),s._v(" "),a("p",[s._v('在开始菜单里找到"Git"->"Git Bash"，会弹出 Git 命令窗口，你可以在该窗口进行 Git 操作。')])]),s._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("ol",[a("li",[s._v("用户信息\n配置个人的用户名称和电子邮件地址：")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"runoob"')]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email test@runoob.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("如果用了 --global 选项，那么更改的配置文件就是位于你用户主目录下的那个，以后你所有的项目都会默认使用这里配置的用户信息。")]),s._v(" "),a("p",[s._v("如果要在某个特定的项目中使用其他名字或者电邮，只要去掉 --global 选项重新配置即可，新的设定保存在当前项目的 .git/config 文件里。")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("查看配置信息\n要检查已有的配置信息，可以使用 git config --list 命令：")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --list\nhttp.postbuffer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2M\nuser.name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("runoob\nuser.email"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test@runoob.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("也可以直接查阅某个环境变量的设定，只要把特定的名字跟在后面即可，像这样：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.name\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作流程"}},[s._v("#")]),s._v(" 工作流程")]),s._v(" "),a("ul",[a("li",[s._v("克隆Git资源作为工作目录")]),s._v(" "),a("li",[s._v("在克隆的资源上添加或修改文件")]),s._v(" "),a("li",[s._v("如果其他人修改了，你可以更新资源")]),s._v(" "),a("li",[s._v("在提交前查看修改")]),s._v(" "),a("li",[s._v("提交修改")]),s._v(" "),a("li",[s._v("在修改完成后，如果发现错误，可以撤回提交并再次修改并提交。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/git-process.png",alt:"工作流程图"}})]),s._v(" "),a("h2",{attrs:{id:"基本操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[s._v("#")]),s._v(" 基本操作")]),s._v(" "),a("p",[s._v("Git 常用的是以下 6 个命令：git clone、git push、git add 、git commit、git checkout、git pull\n"),a("img",{attrs:{src:"/img/git-command.jpg",alt:"基本操作 "}}),s._v("\n说明:")]),s._v(" "),a("ul",[a("li",[s._v("workspace：工作区")]),s._v(" "),a("li",[s._v("staging area：暂存区/缓存区")]),s._v(" "),a("li",[s._v("local repository：版本库或本地仓库")]),s._v(" "),a("li",[s._v("remote repository：远程仓库")])]),s._v(" "),a("h3",{attrs:{id:"简单的操作步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单的操作步骤"}},[s._v("#")]),s._v(" 简单的操作步骤")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init     \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("    \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("git init - 初始化仓库。\ngit add . - 添加文件到暂存区。\ngit commit - 将暂存区内容添加到仓库中。")])]),s._v(" "),a("h3",{attrs:{id:"创建仓库命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建仓库命令"}},[s._v("#")]),s._v(" 创建仓库命令")]),s._v(" "),a("p",[s._v("下表列出了 git 创建仓库的命令：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init    //初始化仓库 \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone   //拷贝一份远程仓库，也就是下载一个项目。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"分支管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[s._v("#")]),s._v(" 分支管理")]),s._v(" "),a("p",[s._v("几乎每一种版本控制系统都以某种形式支持分支。使用分支意味着你可以从开发主线上分离开来，然后在不影响主线的同时继续工作")]),s._v(" "),a("ol",[a("li",[s._v("创建分支")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("分支名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" //提示:没有参数时，git branch 会列出你在本地的分支\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("切换分支")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("分支名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("创建分支并切换")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("分支名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("合并分支")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("分支名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("删除分支")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("分支名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"查看提交历史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看提交历史"}},[s._v("#")]),s._v(" 查看提交历史")]),s._v(" "),a("ol",[a("li",[s._v("查看历史提交历史")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("查看历史记录的简洁的版本")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --oneline\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("查看历史中什么时候出现了分支、合并。")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --graph\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("逆向显示所有日志")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --reverse --oneline\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("以列表形式查看指定文件的历史修改记录。")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" blame "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[s._v("查询指定用户的提交日志")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --author"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Linus --oneline -5\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("更多 git log 命令可查看"),a("a",{attrs:{href:"http://git-scm.com/docs/git-log",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击访问"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);