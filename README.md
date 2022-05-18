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
Object:
---------
1. Object is a real world entity.
2. Object is an instance of a class.

Syntax:
------------
	<type> <var> = new <type>(<parameters>)

Example:
----------
	A a = new A();

===============================================================
Inheritance:
--------------
1. Inheritance is a way of Code reusability.
2. It can define a relationship between two classes i.e. IS-A relationship.
3. In Java, classes support only Single Inheritance.
4. In java, interface supports multiple inheritance.

class Person
{
   void eat(){-----}
}

class Employee extends Person
{
	void work(){-----}
}
---------------------------------
	Employee emp = new Employee();
			 emp.work(); // OK
			 emp.eat(); // OK
			 
-----------------------------------
1. Sibgle Inheritance:
2. Multiiple Inheritance:

----------------------------------------------------------------------------
Polymorphism:
--------------
1. Operator overloading
2. Method overloading (Compile time | early | static polymorphism)
	-> Within a Class if two methods have Same name, but different parameter list
			=> Number of parameters
			=> Data type of paramters
			=> Order of parameters
			
3. Method overriding (Run time | late | dynamic polymorphism)
	-> Between the two classes having IS-A(inheritance) relationship, 
	  both have method(s) having  Same name and same parameter list
	  **) private and static and final methods are not take participation in method overiding.
	  
	  --> Return Type:
			a) If return type is primitive, We cannot do any thing, must be same
		    b) If return type is refrence, We can use same or any sub type.
      
	  --> For accessibilty it can be widen
	       private -> default -> protected -> public
-------------------------------------------------------
Encapsulation:
-----------------
1. Wrapping data and methods into a single units called encapsulation.
2. Make your data variable as private and provide getter and setter for external use.
Example:
-----------
class Student
{
	private String name;
	
	private int age;
	
	
	void display(){
	System.out.println(name + " : "+ age);
	}
}

Student stud = new Student();
	  stud.name='shad'; /// CE
	  stud.age =21; // CE




Abstraction


---------------------------------------------------------------------
class <name>
{
  // member
		1. static members
		2. instance members
		
	// variables
	// methods
	// *constructors
	// initializer blocks
	// nested or inner classes


}
======================
*) static members are assiciated with class or class name.
*) instance members are associated with object or object reference.
======================
public class Car
{

 int h;
 int w; 
 static float wc;

 void move(){} 
 static void avg(){} 

}
=======================
  int i = 10;

Car c1 = new Car();


===================================
Accessing members:
----------------------
<ClassName> . <member>  // only static member
<ObjRef> . <member>  // instance as well as static member
<member>

-----------------------------
Car.wc = 50;

c1.h =20;

-------------------------------------
hospital
---------
A.java, B.java. C.java, D.java, E.java, F.java


hospital
	|- A.java
	|- doctors
		|- B.java
		|- cardio
			|- C.java
		|-ent
			|- D.java
	|- staff
		|- E.java
	|- patient
		|- F.java

------------------------------------------------------------
Access Modifier:
---------------------
1. private : Only within the same class.
2. default : Only within the same package.
3. protected : a) Within the same package 
               b) and can be go out side the 
			      package with the help of 
				  inheritance.
4. public : can be access any where

---------------------------------------------------
Abstract Method and Abstract class:
------------------------------------


Constructor:
------------------
1. Constructor are special members of a class which are used to construct initial state of an object.
2. Rule to make a constructor:
		a. Name of constructor should be same as of the class.
		b. Only Access modifier are permissible.
		c. No return tyoe, not even void
3. Every Java class must have a constructor, if you will not create a constructor, 
	compiler will provide a default constructor

----------------------------------------------------------------
Interface:
----------------
1. Interface is an user defined data type.
2. Interface provides multiple inheritance

Syntax:
------------
<modifier> interface <name> <extends> 
	{
		// body
	}
	
E.g. :
-------

interface I{
}

-------------------------------------------

class ---EXTENDS---> class

interface ---EXTENDS---> interface

class ---IMPLEMENTS---> interface

interface ---???---> class  (NOT POSSIBLE)


----------------------------------------------------------
class Person
{}

class Employee extends Person
{}


class Dog
{}

--------------------------

Employee IS-A Person (Inheritance)
Employee HAS-A Dog. (Aggrgation)

Dog IS-A Employee ??
Employee IS-A Dog ??





































