---
id: marcos0x01
title: 宏0x01
---

# Macros in the AST

As previously mentioned, macro processing in Rust happens after the construction of the AST. 
宏处理发生在构造AST之后。

宏调用的过程Rust解析器简单的看似收集无意义的 `token trees`。

**解析器不会假设任何宏的语法，只会记住这些token,不会尝试去解释它**

重要信息
- The input to every macro is a single non-leaf token tree.
- Macros (really, syntax extensions in general) are parsed as part of the abstract syntax tree.

# Expansion

展开是一个相对简单的事情。在构造完AST之后，但是编译器开始构造正确的语义程序之前，它将会展开所有的宏。


编译器在模式匹配之后，拿到AST,替换宏包含的代码，然后生产输出代码。

**编译器总是将宏的展开当作一个完整的AST节点，而非一串tokens**

# macro_rules!

宏包含一序列的rules，每个rule使用 `literal token tree`, `captures`, `repetions`组成。

**macro_rules!本身是语义扩展，意味着非rust语义**

## captures

captures格式: `$identifier:kindOfCapture`

目前支持的captures:

- item: an item, 函数，结构，模块等
- block: a block, 使用大括号包围
- stmt: 一个语句
- pat：一个模式
- expr：一个表达式
- ty：一个类型
- ident：一个标识符
- path：一个path (例如 `foo`, `::std::mem::replace`, `transumute::<_,int>, ...`)
- meta: 一个meta,`#[...]` `#![...]`里面的东西
- tt: 单个token tree(功能强大)

## 重复

格式: `$(...) sep rep` 其中
- `(...)` 包含重复的模式
- sep 可选分割token,常用的是 `,` `;`
- rep 重复控制
  - `*` 0个或多个
  - `+` 一个或多个



# Hygiene

Hygiene工作机制是将所有的标志符携带一个"syntax context"的值，如果两个标志符相同时，要比较字面名称和syntax context也是必须相同的。

```
macro_rules! using_a {
    ($a:ident, $e:expr) => {
        {
            let $a = 42;
            $e
        }
    }
}

let four = using_a!(a, a / 10);
```

上面的代码中标志符a是相同的。

# Non-Identifier Identifiers


# scoping

- 宏可以在子模块中保留访问
- 宏仅在定义之后可以访问

