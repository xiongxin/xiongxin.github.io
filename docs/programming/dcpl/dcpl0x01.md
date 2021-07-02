---
id: dcpl0x01
title: Part I Foundations Introduction
sidebar_label: 0x001 - Part I Foundations Introduction
---

## 1.1

Programming is a lot of fun.


## Syntax, Semantics, and Progamtics

- Syntax - the form of programming languages.
- Semantics - the meaning of programming languages.
- Pragmatics - the implementation of programming languages.

### Syntax

## 1.2 Syntax, Semantics, and Pragmatics

## 1.3 Goals

## 1.4 PostFix: A Simple Stack Language

### 1.4.1 Syntax 语法

- 任意数字，例如 17， 0， -3
- 下列特殊的命令tokens: add, div, eq, exec, gt, lt, mul, nget, pop, rem, sel, sub, swap
- 执行串 - 作为子程序执行 例如 (7 add 3 swap) or (2 (5 mul) exec add) 将栈顶的值加上10

### 1.4.2 Semantics 语义

POSTFIX程序在从左至右执行之后的意义。


:::tip POSTFIX 命令

- N: 将数字N推到栈顶
- sub
- lt
- pop
- swap
- sel: 从栈顶至下取出3个值 v1, v2, v3，如果v3等于0，将v1推至栈顶，否则将v2推至栈顶，相当于编程语言中的if语句
- nget: 将栈中的第i个值复制到栈顶
- (C1 ... CN)
- exec

:::




###  Exercise

#### Exercise 1.3
- a. not = (0 1 sel)
- b. and = ((pop pop 0) ((pop 0) (1) sel exec) sel exec)
- c. short-circuit-and = 
- d. 

## 2.1 Abstract Syntax

## 2.2 Concrete Syntax

## 2.3 S-Expression Grammars Specify ASTs

### 2.3.1 S-Expressions

### 2.3.2 The Structure of S-Expression Grammars

```
P ∈ Prog ::= (el Nnumargs NEbody )            [Program]
NE ∈ NumExp ::= Nnum                          [IntVal]
            | (arg Nindex )                   [Input]
            | (Arator NErand1 NErand2 )       [ArithmeticOperation]
            | (if BEtest NEthen NEelse )      [Conditional]
BE ∈ BoolExp ::= B bool                       [BoolVal]
            | (Rrator NErand1 NErand2 )       [RelationalOperation]
            | (Lrator BErand1 BErand2 )       [LogicalOperation]
N ∈ IntLit = {. . . , -2, -1, 0, 1, 2, . . .}
B ∈ BoolLit = {true, false}
A ∈ ArithmeticOperator = {+, -, *, /, %}
R ∈ RelationalOperator = {<, =, >}
L ∈ LogicalOperator = {and, or}
```

#### Exercise 2.1

##### a. Write an EL program that takes three integers and returns the largest one.
`(el 3 (if (> (arg 1) (arg2)) (if (> (arg 1) (arg 3)) (arg 1) (arg3)) (if (> (arg 2) (arg 3)) (arg 2) (arg 3))))`


### 2.3.3 Phrase Tags

**pharse tag**用于防止混淆的pharse type. 例如EL中, `if` 就是一个pharse tag. 一般明确的上下文环境下是可以忽略这些tag的。

### 2.3.4 Sequence Patterns

主要使用三种语法后缀操作符 +, *, ?

### 2.3.5 Notational Conventions


**Domain Variables**

**Ellipsis Notation**

**Index Notation**

**Sequence Notation**


## Operational Semantics


### 3.1 The Operational Semantics Game

### 3.2 Samll-setp Operational Semantics (SOS)

#### 3.2.1 Formal Framework

S = <CF, =>, FC, IF, OF>, where:

- CF is the domain of configurations for an abstract machine for L. The domain
variable cf rangs over configurations.
- =>, the ransition relation