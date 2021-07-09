---
id: ctm0x00
title: Introduction of Programming
sidebar_label: 0x00 - Introduction of Programming
---

## 1.2 Variables

```oz
declare
V=9999*9999
```

## 1.3 Functions

```oz
declare
fun {Fact N}
    if N == 0 then 1 else N*{Fact N - 1} end
end
```

### Combinations

```oz

declare
fun {Comb N K}
    {Fact N} div ({Fact K} * {Fact N - K})
end
```

### Functional abstraction

## 1.4 Lists

链表操作

```oz
declare
H=5
T=[6 7 8]
{Browse H|T}


declare
L=[5 6 7 8]
{Browse L.1}
{Browse L.2}
```

模式匹配

```oz
declare
L=[5 6 7 8]
case L of H|T then {Browse H} {Browse T} end
```

### 1.5 Function over lists

```
declare Pascal AddList ShiftLeft ShiftRight
fun {Pascal N}
    if N==1 then [1]
    else
        {AddList {ShiftLeft {Pascal N-1}} {ShiftRight {Pascal N-1}}}
    end
end

fun {ShiftLeft L}
    case L of H|T then
        H|{ShiftLeft T}
    else [0] end
end


fun {ShiftRight L} 0|L end

fun {AddList L1 L2}
    case L1 of H1|T1 then
        case L2 of H2|T2 then
            H1+H2|{AddList T1 T2}
        end
    else nil end
end


fun {FastPascal N}
    if N==1 then [1]
    else L in
        L={FastPascal N-1}
            {AddList {ShiftLeft L} {ShiftRight L}}
    end
end
```


## 1.6 Correctness

如何验证程序正确性
- 需要对编程语言的操作进行数学建模，定义他们的操作。这个模型称为`language's semantics`
- 需要定义我们想要程序做什么。通常程序进行计算需要一个数学上定义的输入输出。这个称为 `program's specification`
- 我们使用数学技术推断程序，同时使用`semantics`。我们需要证明程序满足`specification`

### Mathematical induction
