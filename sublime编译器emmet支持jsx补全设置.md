# 在sublime中使用emmet实现代码补全
```json
[{
  "keys": ["tab"],
  "command": "expand_abbreviation_by_tab",
  "context": [{
    "operand": "source.js",
    "operator": "equal",
    "match_all": true,
    "key": "selector"
  }, {
    "key": "preceding_text",
    "operator": "regex_contains",
    "operand": "(\\b(a\\b|div|span|p\\b|button)(\\.\\w*|>\\w*)?([^}]*?}$)?)",
    "match_all": true
  }, {
    "key": "selection_empty",
    "operator": "equal",
    "operand": true,
    "match_all": true
  }]
}]
```
