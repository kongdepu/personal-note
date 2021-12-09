---
title: BigDecimal
---

## 引言
　　float和double类型的主要设计目标是为了科学计算和工程计算。他们执行二进制浮点运算，这是为了在广域数值范围上提供较为精确的快速近似计算而精心设计的。然而，它们没有提供完全精确的结果，所以不应该被用于要求精确结果的场合。但是，商业计算往往要求结果精确，这时候BigDecimal就派上大用场啦。


## 构造方法
1.public BigDecimal(double val)    将double表示形式转换为BigDecimal <font color=red>*不建议使用</font> 

2.public BigDecimal(int val)　　将int表示形式转换成BigDecimal

3.public BigDecimal(String val)　　将String表示形式转换成BigDecimal

``` java
public static void main(String[] args)
{
    BigDecimal bigDecimal = new BigDecimal(2);
    BigDecimal bDouble = new BigDecimal(2.3);
    BigDecimal bString = new BigDecimal("2.3");
    System.out.println("bigDecimal=" + bigDecimal);
    System.out.println("bDouble=" + bDouble);
    System.out.println("bString=" + bString);
}
```
输入
``` java
bigDecimal=2
bDouble=2.29999999999999982236431605997495353221893310546875
bString=2.3
```

::: tip 提示
当double必须用作BigDecimal的源时，请使用Double.toString(double)转成String，然后使用String构造方法，或使用BigDecimal的静态方法valueOf
:::

``` java
public static void main(String[] args)
{
    BigDecimal bDouble1 = BigDecimal.valueOf(2.3);
    BigDecimal bDouble2 = new BigDecimal(Double.toString(2.3));

    System.out.println("bDouble1=" + bDouble1);
    System.out.println("bDouble2=" + bDouble2);
    
}
```
##  加减乘除运算
``` java
public BigDecimal add(BigDecimal value);                        //加法

public BigDecimal subtract(BigDecimal value);                   //减法 

public BigDecimal multiply(BigDecimal value);                   //乘法

public BigDecimal divide(BigDecimal value);                     //除法
```
::: danger 警告
BigDecimal除法可能出现不能整除的情况，比如 4.5/1.3，这时会报错java.lang.ArithmeticException: Non-terminating decimal expansion; no exact representable decimal result.
:::

``` java
public BigDecimal divide(BigDecimal divisor, int scale, int roundingMode) 
第一参数表示除数， 第二个参数表示小数点后保留位数，
第三个参数表示舍入模式，只有在作除法运算或四舍五入时才用到舍入模式，有下面这几种

ROUND_CEILING    //向正无穷方向舍入

ROUND_DOWN    //向零方向舍入

ROUND_FLOOR    //向负无穷方向舍入

ROUND_HALF_DOWN    //向（距离）最近的一边舍入，除非两边（的距离）是相等,如果是这样，向下舍入, 例如1.55 保留一位小数结果为1.5

ROUND_HALF_EVEN    //向（距离）最近的一边舍入，除非两边（的距离）是相等,如果是这样，如果保留位数是奇数，使用ROUND_HALF_UP，如果是偶数，使用ROUND_HALF_DOWN

ROUND_HALF_UP    //向（距离）最近的一边舍入，除非两边（的距离）是相等,如果是这样，向上舍入, 1.55保留一位小数结果为1.6

ROUND_UNNECESSARY    //计算结果是精确的，不需要舍入模式

ROUND_UP    //向远离0的方向舍入
```
