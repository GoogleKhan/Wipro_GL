# Wipro_GL



Java Source Code ---Compile---> Machine Code -----Run/Execute--->
                    (compiler)                       (JVM)
					

For JVM(Java Virtual Machine)
----------------------------------
JDK[Java Developement Kit]= Compiler + JVM ( is for developer)
JRE[Java Runtine Environment] = JVM (is for Client)


Identifier  and keywords:
-----------------------------
Identifier:
=============
name of class, methods,, variables amd so on called identifier

----------------------------------------------------------------------
Data Types: 1 Byte = 8 bits
-----------------------------
	|-Primitive data types
		|- Boolean data type
				|-boolean [NA | 1 Byte]
				
		|- Numeric data type
		
			|- Integral data type
			
				|- Character data type
						|-char [2 Bytes]
						
				|- Integer data type
						|-byte [1 Byte]
						|-short [2 Bytes]
						|-int [4 Bytes]
						|-long [8 Bytes]
						
			|- Floating point data type
					|- float [4 Bytes]
					|- double [8 Bytes]
			
	|-Reference data types
		|- class
		|- interface
		|- array
		|- enum
		
-------------------------------------------------------------------
byte -> short -> int -> long -> float -> double
        char -> int
		
Widening is done implicitly.

narrowing requires casting.

----------------------------------------------
Operators:
------------------
1. Arithmetic operators;
-------------------------------
 +, -, *, /, %
 
		int a = 10;
		int b = 3;

		System.out.println(a + b); // 13
		System.out.println(a - b); // 7
		System.out.println(a * b); //30
		System.out.println(a / b); //3
		System.out.println(a % b); // 1
 
  
2. Relational operators:
----------------------------------
 < ,<=, > ,>=
 
 It will apply on Numeric data types only. and result will be boolean.
 
 
		int a = 10;
		int b = 3;

		System.out.println(a > b);
		System.out.println(a >= b);
		System.out.println(a < b);
		System.out.println(a <= b);
		
		boolean b1 = true;
		boolean b2 = false;
		
	//	System.out.println(b1 < b2); CE
 
3. Equality operators:
----------------------------------
 ==, !=
 
 It can be apply on any data types. and result will be boolean.
 
 ------------------------------------------------------------------------
 
4. Boolean logical operators:
-------------------------------------

 &, |, ^. !

 int x = 10;
 
 boolean b = 5 < x < 20; // => true < 20  => CE
 
 boolean b = (5 < x) & (x < 20); // true & true
 
 System.out.println(b); // true



5. Variable increment/Decrement operators:
=================================================
   ++, --
   
   
		int i = 10;

		int j = i++; // -> POST-increment

		// int k = ++i; // PRE increment

		System.out.println(i); // 11
		// System.out.println(k); //11

		System.out.println(j); // 10
---------------------------------------------------------------		

 int y = ++5; //C.E.
 System.out.println(y); // ?? 6,
 
 
 --------------------------------
  int z = - -5; //
 System.out.println(z); // ? 

--------------------------------------------

6. String Concatenation operators['+']:
------------------------------------------
	    String s1 = "I love ";
		String s2 = "Java";

		String s3 = s1 + s2;
		
		System.out.println(s3); //I love Java
		
		--------------------
		
	    String s3 = "ABC";
		

		?? output = s3 + 101; // "ABC" + "101" => "ABC101"
		
7. Ternary operators:
==============================

(<BoolExpr>) ? <Expr1> : <Expr2>
  
  int a = ----;
  int b = -----;
  
  int max;
  
  if(a > b){
  max =a;
  }
  else{max = b;}
  
 System.out.println(max);
 
 ------------------------------------------		int a = 10;
		int b = 3;

		int max = a > b ? a : b;

		System.out.println(max);
		
-----------------------------------------------------
Comments:
---------------
//  Single line comment

/*  Multi line comment  */

/** Java Doc Comments */

------------------------------------------
if(<boolExpr>)
{
	//body
}

========================
if(<boolExpr>)
{
	// body
}
else{
	// body
}
=========================
if(<boolExpr>)
{
	// body
}
else if(<boolExpr>)
{
	//body
}
else{
	// body
}

---------------------------
WAP to check whether a number is odd or even?

--------------------------------
1. for loop:
===============
for(<initialization> ; <condtion> ; <updation){
	//body
}

--------------------------------
2. while loop:
===============

<initialization> ;

while(<condtion>){
	//body
	
	 <updation>
}
----------------------------------------------
3. do-while loop:
=================

<initialization> ;
do{

     //body	
	 <updation>
}
while(<condtion>);

----------------------------------------------
4. for each or enhanced for loop is used with array and/or Collection

------------------------------
Class:
-----------
1. Class is an imaginary thing or a blueprint 
   which describes the proprties(variables) and behaviours(method) of an Object.
   
2. Class is reprsention of similar kind of objects.

3. Class is an user defined data type.

Syntax:
------------
<modifier> class <name> <extends> <implements>
	{
		// body
	}
	
E.g. :
-------

class A{
}
======================================================================
Object
Inheritance
Polymorphism
Encapsulation
Abstraction


























