---
layout: course
title: "C++ Programming | Fall 2026"
permalink: /
lang: en
description: "Textbooks, course overview, class format, session-by-session HW, Lab and Quiz assignments, and assessment for C++ Programming, Fall 2026."
last_modified_at: "2026-09-06"
---

<!--
  Edit course content and tables in this Markdown file.
  Screen styles: assets/css/course.css
  HW, Lab, and Quiz identifiers are plain text; unassigned cells stay empty.
-->

<div class="course-page" markdown="1">

<header class="course-hero">
  <p class="eyebrow">Kookmin University · Fall 2026</p>
  <h1>C++ Programming</h1>
  <p class="lead">Course Syllabus</p>
</header>

<nav class="course-nav" aria-label="Course syllabus sections">
  <a href="#textbook">Textbook</a>
  <a href="#overview">Overview</a>
  <a href="#operation">Course Format</a>
  <a href="#schedule">Schedule &amp; Activities</a>
  <a href="#assessment">Assessment</a>
</nav>

## Textbook
{: #textbook}

The original syllabus lists the following textbooks. Titles are rendered in English from the Korean editions; use the ISBN to identify the correct book.

- *Welcome to C++*, In-guk Cheon. Infinity Books, 2018. ISBN 9791185578347.
- *Forouzan's C++ Essentials*, Behrouz A. Forouzan and Richard F. Gilberg. Hanbit Academy, 2020. ISBN 9791156645061.
- *Fundamentals of C++ Programming*, Gwang-su Han and Jun-su Choi. Kookmin University Press, 2010. ISBN 9788978122962.

Lecture materials and LMS announcements specify the preparation for each class. The schedule below lists topics and activities; textbook page assignments have not been provided.

## Course Overview
{: #overview}

This course develops an understanding of how C/C++ programs execute and how objects and memory are managed. Students apply object-oriented ideas encountered in Python or Java to C++, inspect program behavior with gdb/lldb, and use the Standard Template Library (STL) to implement data structures and algorithms. Topics range from types, functions, and pointers to classes, polymorphism, templates, containers, lambdas, and callbacks.

### Learning Objectives

- Implement small, well-defined functions using control flow, pointers, and dynamic memory.
- Design classes using constructors, destructors, copying, operator overloading, inheritance, and polymorphism.
- Write reusable code with exceptions, templates, and STL containers, iterators, and algorithms.
- Explain how function pointers, function objects, lambdas, and callbacks are called, and how lifetimes affect their safety.
- Verify behavior with a debugger and boundary tests, and explain submitted code.

## Course Format
{: #operation}

The course combines **video preparation with in-class explanations, programming practice, questions, and short quizzes**. Classes meet on Tuesdays and Thursdays, 13:30–15:00. Bring a personal laptop to classes and exams. Student exercise files use **C++17**; implement the `TODO(student)` sections while preserving the provided function signatures and input/output requirements.

- **Before class:** Watch the assigned videos, review the lecture materials, and prepare the development environment.
- **During class:** Implement Lab exercises, inspect variables and memory with a debugger, ask questions, and explain your code.
- **After class:** Complete HW and the weekly Quiz, and check normal inputs and boundary cases.
- **Submissions:** Follow the current LMS instructions. HW deadlines are announced by week; Labs are submitted during class or by the announced deadline.

## Class Schedule & Activities
{: #schedule}

<div class="course-note" markdown="1">

**Reading the schedule:** HW and Lab entries indicate when an activity is introduced or assigned, not its submission deadline. **Quizzes take place in odd-numbered sessions—the first class of each week.** Blank cells mean no HW, Lab, or Quiz is assigned to that session.

</div>

The table includes 30 regular sessions in Weeks 1–15 and two supplemental sessions in Week 16. Activity numbers may differ from the order in which they appear. Repeated Lab entries refer to the same activity, not additional assignments.

<nav class="week-nav" aria-label="Jump to a week" hidden></nav>

<div class="table-scroll schedule-table" markdown="1" role="region" aria-label="32 class sessions with HW, Lab, and Quiz assignments">

| Week | Date | Class Topic | HW | Lab | Quiz |
|---:|---|---|---|---|---|
| 1 | Sep. 1, 2026 | Course Introduction, Development Environment, and Safety |  | Lab01 | Quiz01 |
| 1 | Sep. 3, 2026 | Variables and the Debugger |  | Lab02<br>Lab03 |  |
| 2 | Sep. 8, 2026 | Variables, Arrays, and Multidimensional Arrays |  | Lab05 | Quiz02 |
| 2 | Sep. 10, 2026 | Control Flow and the Practice System | HW01<br>HW02 | Lab04 |  |
| 3 | Sep. 15, 2026 | Data Types and Pointers | HW03 |  | Quiz03 |
| 3 | Sep. 17, 2026 | Constants and Type Conversions |  |  |  |
| 4 | Sep. 22, 2026 | Functions, Parameters, and Command-Line Arguments | HW04 |  | Quiz04 |
| 4 | Sep. 24, 2026 | Library Functions and Variable Scope |  | Lab07 |  |
| 5 | Sep. 29, 2026 | Expressions and Evaluation Order |  | Lab06 | Quiz05 |
| 5 | Oct. 1, 2026 | Argument Passing and References |  |  |  |
| 6 | Oct. 6, 2026 | Dynamic Memory Allocation and Passing Arrays | HW06 |  | Quiz06 |
| 6 | Oct. 8, 2026 | C Strings, std::string, and Classes | HW05 |  |  |
| 7 | Oct. 13, 2026 | Access Specifiers, Constructors, and Destructors |  | Lab08 | Quiz07 |
| 7 | Oct. 15, 2026 | Initializer Lists, Copy Constructors, and Deep Copy | HW07 |  |  |
| 8 | Oct. 20, 2026 | Namespaces, Objects, static, and const |  |  | Quiz08<br><small>Due before the midterm</small> |
| 8 | Oct. 22, 2026 | Midterm Exam <span class="badge exam">Exam</span> |  |  |  |
| 9 | Oct. 27, 2026 | Friends and Non-Member Operators |  | Lab09 | Quiz09 |
| 9 | Oct. 29, 2026 | Member Operators, Assignment, and Conversion | HW08<br>HW09 | Lab12 |  |
| 10 | Nov. 3, 2026 | Inheritance, protected, and Derived Object Construction |  | Lab13 | Quiz10 |
| 10 | Nov. 5, 2026 | Function Redefinition and Multiple Inheritance | HW10 | Lab13 |  |
| 11 | Nov. 10, 2026 | Polymorphism | HW11 |  | Quiz11 |
| 11 | Nov. 12, 2026 | Virtual Functions, Abstract Classes, Bvector, and Bit Masks |  | Lab10 |  |
| 12 | Nov. 17, 2026 | Exception Handling | HW12 | Lab14 | Quiz12 |
| 12 | Nov. 19, 2026 | Function Templates and Class Templates |  | Lab14 |  |
| 13 | Nov. 24, 2026 | STL Sequential Containers and Iterators | HW13<br>HW14 |  | Quiz13 |
| 13 | Nov. 26, 2026 | STL Associative Containers and Adapters |  | Lab11 |  |
| 14 | Dec. 1, 2026 | Function Pointers, Function Objects, and Lambdas |  | Lab15 | Quiz14 |
| 14 | Dec. 3, 2026 | STL Algorithms |  | Lab15 |  |
| 15 | Dec. 8, 2026 | Final Exam, Part 1 <span class="badge exam">Exam</span> |  |  | Quiz15 · Final Review<br><small>Due before the final exam</small> |
| 15 | Dec. 10, 2026 | Final Exam, Part 2 <span class="badge exam">Exam</span> |  |  |  |
| 16 | To be announced | Callback Basics: Control Flow and Passing Callables |  |  | Quiz16<br><small>Graded · deadline to be announced</small> |
| 16 | To be announced | std::function, Lifetimes, Exceptions, and Reentrancy |  | Lab16 |  |

</div>

The schedule and pace may change with academic arrangements or class progress. Holiday cancellations, makeup classes, and submission changes will be communicated through official course announcements.

**Week 16:** The supplemental callback unit covers callable passing, `std::function`, capture lifetimes, exceptions, and reentrancy. Lab16 and Quiz16 each count for 1 point in the assessment below. Release dates and deadlines will be announced through the LMS before grades are finalized so that all students can participate.

## Assessment
{: #assessment}

The course uses the **revised v2 syllabus's 100-point scheme**. Components are graded against the stated criteria, and final grades follow the university's relative grading rules.

<div class="table-scroll assessment-table" markdown="1" role="region" aria-label="Assessment components, points, and grading details">

| Component | Points | Details |
|---|---:|---|
| Midterm Exam | 27 | Oct. 22; covers Week01–Week08_1. Raw score out of 100 × 0.27. |
| Final Exam | 27 | Dec. 8 and 10; focuses on Weeks 9–14. Both sessions form one exam component. Raw score out of 100 × 0.27. |
| HW | 14 | HW01–14; each graded out of 10; raw score ÷ 10, up to 1 course point. |
| Lab | 16 | Lab01–16; each graded out of 10; raw score ÷ 10, up to 1 course point. |
| Participation (Quiz) | 16 | Quiz01–16; 5 questions per week. Weekly raw score ÷ 5, up to 1 course point. |
| **Total** | **100** | 27 + 27 + 14 + 16 + 16 |

</div>

### HW, Lab, and Quiz Grading

- **Lab rubric (10 raw points):** Compilation and execution 2; core TODO correctness 4; boundary cases and tests 2; code explanation 2.
- **HW rubric (10 raw points):** Functional correctness 5; boundary cases and memory safety 2; code quality 2; code explanation 1.
- **Quiz:** 16 weekly quizzes, 5 questions each, 80 questions in total. Each question is worth 1 raw point. Quiz scores count toward participation only and are not counted again as a separate component.
- **Quiz08 and Quiz15:** Quiz08 checks the Oct. 20 material and closes before the midterm. Quiz15 is a Final Review of Weeks 9–14 and closes before the final exam. Quizzes are not taken during exam time.
- **Quiz14 and Quiz16:** Quiz14 checks both value and reference captures in lambdas; follow course announcements for supporting explanations. Quiz16 covers the supplemental callback unit and is included in grading.

Projects, presentations, and attendance have no separate point allocation; code explanation is assessed through the Lab/HW rubrics. University absence rules still apply. Exam times are the regular class hours, 13:30–15:00. Detailed exam coverage, permitted tools, and arrangements for the two final-exam sessions will be announced before the exams.

</div>
