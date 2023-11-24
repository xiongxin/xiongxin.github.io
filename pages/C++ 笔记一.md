public:: true
category:: programming
sub-category:: cpp
type:: blog
date:: [[Oct 19th, 2023]]

- C++ 函数重载规则
- Step 1) The compiler tries to find an exact match. This happens in two phases. First, the compiler will see if there is an overloaded function where the type of the arguments in the function call exactly matches the type of the parameters in the overloaded functions. For example:
- ```
  void print(int)
  {
  }
  - void print(double)
  {
  }
  - int main()
  {
    print(0); // exact match with print(int)
    print(3.4); // exact match with print(double)
  - return 0;
  }
  ```
- COPY
- Because the `0` in the function call `print(0)` is an int, the compiler will look to see if a `print(int)` overload has been declared. Since it has, the compiler determines that `print(int)` is an exact match.
- Second, the compiler will apply a number of trivial conversions to the arguments in the function call. The **trivial conversions** are a set of specific conversion rules that will modify types (without modifying the value) for purposes of finding a match. For example, a non-const type can be trivially converted to a const type:
- ```
  void print(const int)
  {
  }
  - void print(double)
  {
  }
  - int main()
  {
    int x { 0 };
    print(x); // x trivially converted to const int
  - return 0;
  }
  ```
- COPY
- In the above example, we’ve called `print(x)`, where `x` is an `int`. The compiler will trivially convert `x` from an `int` into a `const int`, which then matches `print(const int)`.
- For advanced readers
- Converting a non-reference type to a reference type (or vice-versa) is also a trivial conversion.
- Matches made via the trivial conversions are considered exact matches.
  Step 2) If no exact match is found, the compiler tries to find a match by applying numeric promotion to the argument(s). In lesson ([10.1 -- Implicit type conversion](https://www.learncpp.com/cpp-tutorial/implicit-type-conversion/)), we covered how certain narrow integral and floating point types can be automatically promoted to wider types, such as `int` or `double`. If, after numeric promotion, a match is found, the function call is resolved.
- For example:
- ```
  void print(int)
  {
  }
  - void print(double)
  {
  }
  - int main()
  {
    print('a'); // promoted to match print(int)
    print(true); // promoted to match print(int)
    print(4.5f); // promoted to match print(double)
  - return 0;
  }
  ```
- COPY
- For `print('a')`, because an exact match for `print(char)` could not be found in the prior step, the compiler promotes the char `'a'` to an `int`, and looks for a match. This matches `print(int)`, so the function call resolves to `print(int)`.
  Step 3) If no match is found via numeric promotion, the compiler tries to find a match by applying numeric conversions ([10.3 -- Numeric conversions](https://www.learncpp.com/cpp-tutorial/numeric-conversions/)) to the arguments.
- For example:
- ```
  #include <string> // for std::string
  - void print(double)
  {
  }
  - void print(std::string)
  {
  }
  - int main()
  {
    print('a'); // 'a' converted to match print(double)
  - return 0;
  }
  ```
- COPY
- In this case, because there is no `print(char)` (exact match), and no `print(int)` (promotion match), the `'a'` is numerically converted to a double and matched with `print(double)`.
- Key insight
- Matches made by applying numeric promotions take precedence over any matches made by applying numeric conversions.
- Step 4) If no match is found via numeric conversion, the compiler tries to find a match through any user-defined conversions. Although we haven’t covered user-defined conversions yet, certain types (e.g. classes) can define conversions to other types that can be implicitly invoked. Here’s an example, just to illustrate the point:
- ```
  // We haven't covered classes yet, so don't worry if this doesn't make sense
  class X // this defines a new type called X
  {
  public:
    operator int() { return 0; } // Here's a user-defined conversion from X to int
  };
  - void print(int)
  {
  }
  - void print(double)
  {
  }
  - int main()
  {
    X x; // Here, we're creating an object of type X (named x)
    print(x); // x is converted to type int using the user-defined conversion from X to int
  - return 0;
  }
  ```
- COPY
- In this example, the compiler will first check whether an exact match to `print(X)` exists. We haven’t defined one. Next the compiler will check whether `x` can be numerically promoted, which it can’t. The compiler will then check if `x` can be numerically converted, which it also can’t. Finally, the compiler will then look for any user-defined conversions. Because we’ve defined a user-defined conversion from `X` to `int`, the compiler will convert `X` to an `int` to match `print(int)`.
- After applying a user-defined conversion, the compiler may apply additional implicit promotions or conversions to find a match. So if our user-defined conversion had been to type `char` instead of `int`, the compiler would have used the user-defined conversion to `char` and then promoted the result into an `int` to match.
- Related content
  We discuss how to create user-defined conversions for class types (by overloading the typecast operators) in lesson [21.11 -- Overloading typecasts](https://www.learncpp.com/cpp-tutorial/overloading-typecasts/).
- For advanced readers
- The constructor of a class also acts as a user-defined conversion from other types to that class type, and can be used during this step to find matching functions.
- Step 5) If no match is found via user-defined conversion, the compiler will look for a matching function that uses ellipsis.
- Related content
  We cover ellipses in lesson [20.5 -- Ellipsis (and why to avoid them)](https://www.learncpp.com/cpp-tutorial/ellipsis-and-why-to-avoid-them/).
- Step 6) If no matches have been found by this point, the compiler gives up and will issue a compile error about not being able to find a matching function.