# Cmder安装笔记
[快捷键](https://github.com/cmderdev/cmder#keyboard-shortcuts)
# 右键管理
## 添加
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
