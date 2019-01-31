# Cmder安装笔记
[Cmder快捷键](https://github.com/cmderdev/cmder#keyboard-shortcuts)
# 右键管理
## 添加（方法一）
下载注册表文件[cmder_context_enable.reg](https://gist.githubusercontent.com/AWMooreCO/f1e2457f66ceb41efdf7/raw/01679ce047451aa8f1ca8497e02ca64fa87350f6/cmder_context_enable.reg)
```c
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\cmder]
  @="Open in Cmder"
  "Icon"="C:\\cmder\\Cmder.exe,0"

[HKEY_CLASSES_ROOT\Directory\Background\shell\cmder\command]
  @="\"C:\\cmder\\Cmder.exe\" \"%V\""

[HKEY_CLASSES_ROOT\Directory\shell\cmder]
  @="Open in Cmder"
  "Icon"="C:\\cmder\\Cmder.exe,0"

[HKEY_CLASSES_ROOT\Directory\shell\cmder\command]
  @="\"C:\\cmder\\Cmder.exe\" \"%1\""
```
修改注册表中程序目录地址

运行注册表

## 添加（方法二）
1、把 Cmder 加到环境变量

把Cmder.exe存放的目录添加到系统环境变量；加完之后,Win+r一下输入cmder,即可。

2、添加 cmder 到右键菜单：环境变量添加后，在任意文件夹中即可打开Cmder，上一步的把 Cmder 加到环境变量就是为此服务的, 在管理员权限的终端输入以下语句即可:

```c
Cmder.exe /REGISTER ALL
```

3、为Cmder.exe创建快捷方式，右击Cmder.exe选择“创建快捷方式”点击即可，以后打开Cmder.exe只要点击桌面对应的快捷方式即可

## 删除
下载注册表文件[cmder_context_disable.reg](https://gist.githubusercontent.com/AWMooreCO/f1e2457f66ceb41efdf7/raw/01679ce047451aa8f1ca8497e02ca64fa87350f6/cmder_context_disable.reg)
```c
Windows Registry Editor Version 5.00

[-HKEY_CLASSES_ROOT\Directory\Background\shell\cmder]
[-HKEY_CLASSES_ROOT\Directory\shell\cmder]
```
运行注册表

## 常见问题

中文乱码: 进入`Settings>Startup>Environment`,添加`chcp 65001`变更为`utf-8`.重启即可
