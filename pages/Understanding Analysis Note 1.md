public:: true
category:: math
sub-category:: analysis
type:: blog

- **Theorem 1.1.1.** $\text{There is no rational number whose square is 2.}$
	- *Proof.*
- **Axiom of Completeness.**  Every nonempty set of real numbers that is bounded above has a least upper bound.
  background-color:: red
- **Definition 1.3.1.** A set A ⊆ R is bounded above if there exists a number b ∈ R such that a ≤ b for all a ∈ A. The number b is called an upper bound for A.
  Similarly, the set A is bounded below if there exists a lower bound l ∈ R satisfying l ≤ a for every a ∈ A.
- **Definition 1.3.2.** A real number $s$ is the least upper bound for a set $A \sube R$ if it meets the following two criteria:
  (i) $s$ is an upper bound for $A$;
  (ii) if $b$ is any upper bound for $A$, then $s \le b$.
- **Definition 1.3.4.** A real number $a_0$ is a maximum of the set $A$ if $a_0$ is an element of $A$ and $a_o \ge a$  for all $a \isin A$. Similarly, a number $a_1$ is a minimum of $A$ if $a_1 \isin A$ and $a_1 \le a$ for every $a \isin A$.
	- Thus, the supremum can exist and not be a maximum, but when a maximum exists, then it is also the supremum.
	  background-color:: blue
- **Lemma 1.3.8.** Assume $s \isin \reals$ is an upper bound for a set $A \sube \reals$. Then, $s = \sup A$ if and only if, for every choice of $\epsilon > 0$, there exists an element $a \isin A$ satisfying $s − \epsilon < a$.
	- *Proof.*
- **Theorem 1.4.1 (Nested Interval Property).** For each $n \isin \natnums$, assume we are given a closed interval $I_n = [a_n , b_n ] = {x \isin \reals : a_n \le x \le b_n }$. Assume also that each $I_n$ contains $I_{n+1}$ . Then, the resulting nested sequence of closed intervals
  \begin{align} I_1 \supe I_2 \supe I_3 \supe I_4 \supe \dots \end{align}
  has a nonempty intersection; that is, $\bigcap^{\infty}_{n=1} \neq \empty$
	- *Proof.*
- **Theorem 1.4.2 (Archimedean Property).**
	- (i) Given any number $x \isin \reals$,there exists an $n \isin \natnums$ satisfying $n > x$.
		- *Proof.*
	- (ii) Given any real number $y > 0$, there exists an $n \isin \natnums$ satisfying $\dfrac{1}{n} < y$.
		- *Proof.* $\dfrac{1}{y} \isin \reals$, there exists an $n \isin \natnums$ s.t. $n > \dfrac{1}{y} \Rightarrow yn > 1 \Rightarrow \dfrac{1}{n} < y$
- **Theorem 1.4.3 (Density of Q in R)** For every two real numbers a and b with $a < b$, there exists a rational number $r$ satisfying $a < r < b $.
	- *Proof.*
-
-
-
- 继续阅读
  https://planetmath.org/archimedeanproperty
  https://blog.csdn.net/hedan2013/article/details/81263136
-