public:: true
type:: blog
category:: probability
sub-category::

- ## Hypergeometric Distribution
- If a random variable can be described as the number of $➀$'s in $n$ random draws, without replacement, from the box
  $$
  \begin{aligned}
  \overbrace{[\underbrace{⓪...⓪}_{N_0}\underbrace{➀...➀}_{N_1}]}^N,
  \end{aligned}
  $$
  then its p.m.f. is given by
  $$
  \begin{aligned}
  f\left(x\right)=P\left(X=x\right)=\frac{{N_0\choose x}{N_1\choose n-x}}{{N\choose n}},x=0,...,n,
  \end{aligned}
  $$
  where $N = N_1 + N_0$ is the number of tickets in the box.
- ![hypergeometric-pmf-1-1.png](../assets/hypergeometric-pmf-1-1_1685014111103_0.png)
- ## Binomial Distribution
- If a random variable can be described as the number of $➀$'s in n random draws, with replacement, from the box
  $$
  \begin{aligned}
  \overbrace{[\underbrace{⓪...⓪}_{N_0}\underbrace{➀...➀}_{N_1}]}^N,
  \end{aligned}
  $$
  then its p.m.f. is given by
  $$
  \begin{aligned}
  f\left(x\right)=P\left(X=x\right)=\frac{{n\choose x}\cdot{N_1}^x\cdot{N_0}^{n-x}}{N^n},x=0,...,n,
  \end{aligned}
  $$
  also can be written as
  $$
  \begin{aligned}
  f\left(x\right)=P\left(X=x\right)={n\choose x} \cdot p^x \cdot (1-p)^{n-x},x=0,...,n,
  \end{aligned}
  $$
  where $p=N_1/N$ is the proportion of $➀$'s in the box.
- ![binomial-pmf-1-1.png](../assets/binomial-pmf-1-1_1685014224700_0.png)
- ## Geometric Distribution
- If a random variable can be described as the number of draws, with replacement, from the box
  $$
  \begin{aligned}
  \overbrace{[\underbrace{⓪...⓪}_{N_0}\underbrace{➀...➀}_{N_1}]}^N,
  \end{aligned}
  $$
  until a $➀$' is drawn, then its p.m.f. is given by
  $$
  \begin{aligned}
  f\left(x\right)=P\left(X=x\right)=\frac{{N_0}^{x-1}\cdot{N_1}}{N^x},x=0,...,n,
  \end{aligned}
  $$
  also can be written as
  $$
  \begin{aligned}
  f\left(x\right)=P\left(X=x\right)=(1-p)^{x-1} \cdot p,x=0,...,n,
  \end{aligned}
  $$
  where $p=N_1/N$ is the proportion of $➀$'s in the box.
- ![geometric-pmf-1-1.png](../assets/geometric-pmf-1-1_1685015453007_0.png)
-
- ## Negative Binomial Distribution
- If a random variable can be described as the number of draws, with replacement, from the box
  $$
  \begin{aligned}
  \overbrace{[\underbrace{⓪...⓪}_{N_0}\underbrace{➀...➀}_{N_1}]}^N,
  \end{aligned}
  $$
  until r $➀$' is drawn, then its p.m.f. is given by
  $$
  \begin{aligned}
  f\left(x\right)=P\left(X=x\right)=\frac{{x-1\choose r-1}\cdot{N_{0}}^{x-r}\cdot {N_1}^r}{N^x},x=0,...,n,
  \end{aligned}
  $$
  where $N = N_1 + N_0$ is the number of tickets in the box.
  also can be written as 
  $$
  \begin{aligned}
  f\left(x\right)=P\left(X=x\right)={x-1\choose r-1} \cdot (1-p)^{x-1} \cdot p,x=0,...,n,
  \end{aligned}
  $$
  where $p=N_1/N$ is the proportion of $➀$'s in the box.
- ![](https://dlsun.github.io/probability/bookdown-demo_files/figure-html/negbinom-pmf-1-1.png)
-