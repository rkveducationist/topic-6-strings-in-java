const questions = [

/* =========================
MCQ QUESTIONS
========================= */

{
type:"mcq",
question:"What is a String in Java?",
options:[
"A sequence of characters",
"A number",
"A method",
"A loop"
],
answer:"A sequence of characters",
hint:"Used to store text"
},

{
type:"mcq",
question:"Which class is used to create strings?",
options:["String","System","Scanner","Object"],
answer:"String",
hint:"Built-in class"
},

{
type:"mcq",
question:"Which method is used to find length of string?",
options:["length()","size()","len()","count()"],
answer:"length()",
hint:"Returns number of characters"
},

{
type:"mcq",
question:"Which method is used to compare two strings?",
options:["equals()","==","compare()","check()"],
answer:"equals()",
hint:"Used for content comparison"
},

{
type:"mcq",
question:"What does charAt() do?",
options:[
"Returns character at index",
"Returns length",
"Returns string",
"Converts string"
],
answer:"Returns character at index",
hint:"Example: str.charAt(0)"
},

{
type:"mcq",
question:"Which method converts string to lowercase?",
options:["toLowerCase()","lower()","convert()","small()"],
answer:"toLowerCase()",
hint:"Converts all letters"
},

{
type:"mcq",
question:"Which method converts string to uppercase?",
options:["toUpperCase()","upper()","convert()","big()"],
answer:"toUpperCase()",
hint:"Converts all letters"
},

{
type:"mcq",
question:"What is the index of first character?",
options:["0","1","-1","None"],
answer:"0",
hint:"Zero-based indexing"
},

{
type:"mcq",
question:"Are strings mutable in Java?",
options:["No","Yes","Sometimes","Depends"],
answer:"No",
hint:"Strings are immutable"
},

{
type:"mcq",
question:"Which operator can concatenate strings?",
options:["+","-","*","/"],
answer:"+",
hint:"Used to join strings"
},

/* =========================
CODING QUESTIONS
========================= */

{
type:"code",
question:"Write a Java program to print a string",

required:["string","system.out.println"],

hint:"String s = \"Hello\";",

solution:`class PrintString {
  public static void main(String[] args){
    String s = "Hello World";
    System.out.println(s);
  }
}`
},

{
type:"code",
question:"Write a program to find length of a string",

required:["length","system.out.println"],

hint:"Use str.length()",

solution:`class StringLength {
  public static void main(String[] args){
    String s = "Java";

    int len = s.length();

    System.out.println(len);
  }
}`
},

{
type:"code",
question:"Write a program to print first character of string",

required:["charat","system.out.println"],

hint:"Use str.charAt(0)",

solution:`class FirstChar {
  public static void main(String[] args){
    String s = "Java";

    char ch = s.charAt(0);

    System.out.println(ch);
  }
}`
},

{
type:"code",
question:"Write a program to compare two strings",

required:["equals","system.out.println"],

hint:"Use s1.equals(s2)",

solution:`class CompareString {
  public static void main(String[] args){
    String s1 = "Java";
    String s2 = "Java";

    if(s1.equals(s2)){
      System.out.println("Equal");
    } else {
      System.out.println("Not Equal");
    }
  }
}`
},

{
type:"code",
question:"Write a program to convert string to uppercase",

required:["touppercase","system.out.println"],

hint:"Use toUpperCase()",

solution:`class UpperCase {
  public static void main(String[] args){
    String s = "java";

    System.out.println(s.toUpperCase());
  }
}`
},

{
type:"code",
question:"Write a program to reverse a string",

required:["for","charat","system.out.println"],

hint:"Loop from end to start",

solution:`class ReverseString {
  public static void main(String[] args){
    String s = "Java";

    for(int i = s.length() - 1; i >= 0; i--){
      System.out.print(s.charAt(i));
    }
  }
}`
},

{
type:"code",
question:"Write a program to count vowels in a string",

required:["for","if","charat","system.out.println"],

hint:"Check a, e, i, o, u",

solution:`class VowelCount {
  public static void main(String[] args){
    String s = "education";

    int count = 0;

    for(int i = 0; i < s.length(); i++){
      char ch = s.charAt(i);

      if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
        count++;
      }
    }

    System.out.println(count);
  }
}`
}

]